"use client";
import ContactForm from '@/components/forms/contacts';
import { useEffect } from 'react';

import React from 'react';

function Contact() {

  return (
    <>
    <div>
    <section className="inner-banner" style={{backgroundImage: 'url(/images/resources/Contacts.jpg)'}}>
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
            <ContactForm />
            </div>{/* /.col-lg-5 */}
            <div className="col-lg-4">
            <div className="contact-one__info">
                <div className="contact-one__icon">
                <i className="clainc-icon-information-button" />
                </div>{/* /.contact-one__icon */}
                <h3 className="contact-one__info__title">Contact Detail</h3>{/* /.contact-one__info__title */}
                <p className="contact-one__info__text">Nairobi, Kenya</p>{/* /.contact-one__info__text */}
                <p className="contact-one__info__text"><span>Call us:</span> <br /> +254 745943172</p>{/* /.contact-one__info__text */}
                <p className="contact-one__info__text"><span>Mail us:</span> <br /> info@uzimanexus.com</p>{/* /.contact-one__info__text */}
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
    </div>
    </>
  );
}

export default Contact;
