"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState} from 'react';

function Footer() {
    const [currentYear, setCurrentYear] = useState(null);

    useEffect(() => {
      const getCurrentYear = () => new Date().getFullYear();
      setCurrentYear(getCurrentYear());
    }, []); 

  return (
    <>
    <footer className="footer-one">
    <div className="footer-one__top">
        <div className="container">
        <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-one__widget footer-one__link-widget">
                <h3 className="footer-one__widget-title">Navigation</h3>{/* /.footer-one__widget-title */}
                <ul className="footer-one__links-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Departments</a></li>
                <li><a href="#">Doctors</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                </ul>{/* /.footer-one__links-list */}
            </div>{/* /.footer-one__widget */}
            </div>{/* /.col-lg-2 */}
            <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-one__widget footer-one__link-widget">
                <h3 className="footer-one__widget-title">Quick Links</h3>{/* /.footer-one__widget-title */}
                <ul className="footer-one__links-list">
                <li><a href="/about/About">About UzimaNexus</a></li>
                <li><a href="/contact/Contact">Contact</a></li>
                </ul>{/* /.footer-one__links-list */}
            </div>{/* /.footer-one__widget */}
            </div>{/* /.col-lg-2 */}
            <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="footer-one__widget footer-one__link-widget">
                <h3 className="footer-one__widget-title">Follow Us</h3>{/* /.footer-one__widget-title */}
                <div className="footer-one__social">
                <a href="#"><i className="fa fa-facebook-f" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-pinterest-p" /></a>
                <a href="#"><i className="fa fa-youtube-play" /></a>
                </div>{/* /.footer-one__social */}
                <form action="#" className="footer-one__subscribe">
                <input className="footer-one__subscribe-field" type="text" name="email" placeholder="Email Address" />
                <button className="footer-one__subscribe-submit" type="submit">Subscribe Now <i className="fa fa-long-arrow-right" /></button>
                </form>
            </div>{/* /.footer-one__widget */}
            </div>{/* /.col-lg-4 */}
        </div>{/* /.row */}
        </div>{/* /.container */}
    </div>{/* /.footer-one__top */}
    <div className="footer-one__middle">
        <div className="container">
        <div className="inner-container">
            <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-one__widget about-widget">
                <Link href="/" className="footer-one__logo"><Image width={100} height={100} src="/images/resources/Uzimanexus logo.svg" alt="Awesome Image" /></Link>
                <p className="footer-one__text">UzimaNexus is a pioneering health technology platform transforming the African healthcare  landscape. <br />
                Our mission is to create an accessible and transparent data-sharing system that
                addresses gaps in healthcare, <br />empowering both patients and providers with seamless, secure access to medical records across diverse settings.</p>
                </div>{/* /.footer-one_widget */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="footer-one__widget contact-widget">
                <h3 className="footer-one__widget-title">Email</h3>{/* /.footer-one__widget-title */}
                <ul className="footer-one__contact-list">
                    <li className="footer-one__contact-list-item">info@uzimanexus.com</li>
                </ul>{/* /.footer-one__contact-list */}
                </div>{/* /.footer-one_widget */}
            </div>{/* /.col-lg-2 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-one__widget contact-widget">
                <h3 className="footer-one__widget-title">Phone</h3>{/* /.footer-one__widget-title */}
                <ul className="footer-one__contact-list">
                    <li className="footer-one__contact-list-item">+254 745943172</li>

                </ul>{/* /.footer-one__contact-list */}
                </div>{/* /.footer-one_widget */}
            </div>{/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-one__widget contact-widget">
                <h3 className="footer-one__widget-title">Address</h3>{/* /.footer-one__widget-title */}
                <ul className="footer-one__contact-list">
                    <li className="footer-one__contact-list-item">Nairobi, Kenya</li>

                </ul>{/* /.footer-one__contact-list */}
                </div>{/* /.footer-one_widget */}
            </div>{/* /.col-lg-3 */}
            </div>{/* /.row */}
        </div>{/* /.inner-container */}
        </div>{/* /.container */}
    </div>
    {/* /.footer-one__middle */}
    <div className="footer-one__bottom">
        <div className="container">
        {<p className="footer-one__copy-text">© {currentYear} UzimaNexus | All Right Reserved</p>}{/* /.copy-text */}
        <ul className="footer-one__bottom-links">
            <li className="footer-one__bottom-links-item"><a href="#">Privacy and Policy</a></li>
            <li className="footer-one__bottom-links-item"><a href="#">Terms and Services</a></li>
        </ul>{/* /.footer-one__bottom-links */}
        </div>{/* /.container */}
    </div>{/* /.footer-one__bottom */}
    </footer>{/* /.footer-one */}
    </>
  );
}

export default Footer;
