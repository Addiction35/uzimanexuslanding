import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Configure the nodemailer transporter with Amazon SES
  const transporter = nodemailer.createTransport({
    host: "email-smtp.us-east-1.amazonaws.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME, // Amazon SES SMTP username
      pass: process.env.SMTP_PASSWORD, // Amazon SES SMTP password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: "info@uzimanexus.com", // Sender address
      to: email, // Recipient email
      cc: "admin@uzimanexus.com", // CC email
      subject: `New Contact Form Submission from ${name}`, // Subject
      text: `You received a new message from the contact form:
      
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
