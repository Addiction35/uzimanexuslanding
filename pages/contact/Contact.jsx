import React from 'react';

function Contact() {
  return (
    <>
    <div>
    <section className="inner-banner" style={{backgroundImage: 'url(images/resources/inner-banner-1-2.jpg)'}}>
        <div className="container">
        <h2 className="inner-banner__title">Contact Informations</h2>
        <ul className="thm-breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><span className="sep">/</span></li>
            <li><span className="page-title">Contact Us</span></li>
        </ul>{/* /.thm-breadcrumb */}
        </div>{/* /.container */}
    </section>{/* /.inner-banner */}
    <section className="contact-one">
        <div className="container">
        <div className="row justify-content-between no-gutters">
            <div className="col-lg-5">
            <h3 className="contact-one__title">Get in Touch</h3>{/* /.contact-one__title */}
            <form action="inc/sendemail.php" className="contact-one__form contact-form-validated">
                <input type="text" name="name" placeholder="Full Name" />
                <input type="text" name="email" placeholder="Email Address" />
                <textarea placeholder="Your Messege" name="message" defaultValue={""} />
                <button type="submit" className="thm-btn contact-one__btn">Send</button>
            </form>{/* /.contact-one__form */}
            </div>{/* /.col-lg-5 */}
            <div className="col-lg-4">
            <div className="contact-one__info">
                <div className="contact-one__icon">
                <i className="clainc-icon-information-button" />
                </div>{/* /.contact-one__icon */}
                <h3 className="contact-one__info__title">Contact Detail</h3>{/* /.contact-one__info__title */}
                <p className="contact-one__info__text">203, Envato Labs. Alis Steet <br /> Melbourne, Australia.</p>{/* /.contact-one__info__text */}
                <p className="contact-one__info__text"><span>Call us:</span> <br /> +123 4567 8910</p>{/* /.contact-one__info__text */}
                <p className="contact-one__info__text"><span>Mail us:</span> <br /> support@mail.com</p>{/* /.contact-one__info__text */}
                <div className="contact-one__info__social">
                <a href="#"><i className="fa fa-facebook-f" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-pinterest-p" /></a>
                <a href="#"><i className="fa fa-youtube-play" /></a>
                </div>{/* /.contact-one__info__social */}
            </div>{/* /.contact-one__info */}
            </div>{/* /.col-lg-4 */}
        </div>{/* /.row justify-content-end */}
        </div>{/* /.container */}
    </section>{/* /.contact-one */}
    <div className="contact-page-map-wrapper">
        <div className="google-map" id="contact-google-map" data-map-lat="40.712784" data-map-lng="-74.005941" data-icon-path="images/resources/map-pin-1-1.png" data-map-title="Brooklyn, New York, United Kingdom" data-map-zoom={18} data-markers="{
                    &quot;marker-1&quot;: [40.712784, -74.005941, &quot;<h4>Main Office</h4><p>Babylon Branch , Lindenhurst, UK</p>&quot;],
                    &quot;marker-2&quot;: [40.728157, -74.077642, &quot;<h4>Branch Office</h4> <p>291 Park Ave S, East Meadow, UK</p>&quot;]
                }">
        </div>
    </div>{/* /.contact-page-map-wrapper */}
    </div>
    </>
  );
}

export default Contact;
