"use client";

import Team from '@/components/layouts/team/Team';
import React from 'react';


function About() {
  return (
    <>
    <div>
    <section className="inner-banner" style={{backgroundImage: 'url(/images/resources/About.jpg)'}}>
        <div className="container">
        <h2 className="inner-banner__title">About Us</h2>
        <ul className="thm-breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><span className="sep">/</span></li>
            <li><span className="page-title">About</span></li>
        </ul>{/* /.thm-breadcrumb */}
        </div>{/* /.container */}
    </section>{/* /.inner-banner */}
    <section className="about-four">
        <div className="container">
        <div className="about-four__image-block">
            <div className="about-four__image-one">
            <img src="/images/resources/Background1.jpg" alt="Awesome Image"style={{width: 400}, {height: 500}} />
            </div>{/* /.about-four__image-one */}
            <div className="about-four__image-two">
            <img src="/images/resources/Background2.jpg" alt="Awesome Image" style={{width: 400}, {height: 500}}/>
            </div>{/* /.about-four__image-two */}
        </div>{/* /.about-four__image-block */}
        <div className="row">
            <div className="col-lg-7">
            <div className="block-title text-left block-title__low-margin">
                <h2 className="block-title__title">ABOUT UZIMANEXUS</h2>{/* /.block-title__title */}
                <p className="block-title__text">UzimaNexus is a pioneering health technology platform transforming the African healthcare
                landscape. <br /> Our mission is to create an accessible and transparent data-sharing system that
                addresses gaps in healthcare, empowering both patients and providers with seamless, secure
                access to medical records across diverse settings.
                </p>{/* /.block-title__text */}
                <p className="block-title__text">With UzimaNexus, healthcare becomes a unified, transparent, and efficient economy, ensuring
                no patient is left behind due to lack of access or fragmented records. <br /> We stand committed to
                revolutionizing healthcare across Africa with innovative solutions powered by blockchain, AI,
                and wearable NFC technology, creating a brighter, healthier future.
                </p>{/* /.block-title__text */}
            </div>{/* /.block-title */}
            <a href="#" className="thm-btn">Learn More</a>
            </div>{/* /.col-lg-7 */}
        </div>{/* /.row */}
        </div>{/* /.container */}
    </section>{/* /.about-four */}
    <section className="service-three thm-gray-bg">
        <div className="container">
        <div className="block-title text-center">
            <h2 className="block-title__title">About UzimaNexus</h2>{/* /.block-title__title */}
            <p className="block-title__text">UzimaNexus is a pioneering health technology platform transforming the African healthcare
                                landscape. Our mission is to create an accessible and transparent data-sharing system that
                                addresses gaps in healthcare, empowering both patients and providers with seamless, secure
                                access to medical records across diverse settings.
                                With UzimaNexus, healthcare becomes a unified, transparent, and efficient economy, ensuring
                                no patient is left behind due to lack of access or fragmented records.We stand committed to
                                revolutionizing healthcare across Africa with innovative solutions powered by blockchain, AI,
                                and wearable NFC technology, creating a brighter, healthier future.</p>{/* /.block-title__text */}
        </div>{/* /.block-title */}
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-three__single">
                <div className="service-three__icon">
                <i className="clainc-icon-doctor" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                <h3 className="service-three__title"><a href="#">OUR VISION</a></h3>
                <p className="service-three__text">Our vision is to be the driving force behind accessible, transparent healthcare across Africa. 
                    We aim to ensure that healthcare providers and patients have continuous, secure access to health
                    information, paving the way for improved healthcare outcomes and trust. </p>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
            </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-three__single">
                <div className="service-three__icon">
                <i className="clainc-icon-ambulance1" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                <h3 className="service-three__title"><a href="#">OUR VALUES</a></h3>
                <ul className="service-three__text">
                    <li><b>Transparency: </b>Prioritizing open, accessible health data for all.</li>
                    <li><b>Innovation: </b>Leveraging blockchain, NFC, and AI to empower users.</li>
                    <li><b>Empowerment: </b>Providing patients with control over their own health data.</li>
                    <li> <b>Collaboration: </b>Building partnerships to support scalable, cross-system connectivity.</li>
                   
                
                </ul>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
            </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-three__single">
                <div className="service-three__icon">
                <i className="clainc-icon-save-the-earth" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                <h3 className="service-three__title"><a href="#">OUR MISSION</a></h3>
                <p className="service-three__text">UzimaNexus empowers healthcare providers and patients by offering a secure, data-sharing
                        platform tailored for Africa’s unique needs. We strive to drive early diagnoses, efficient
                        treatment, and trust through a centralized system that simplifies access to health records,
                        supports referrals, and integrates across diverse healthcare settings.</p>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
            </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}
        </div>{/* /.row */}
        </div>{/* /.container */}
    </section>{/* /.service-three */}
    <section className="fun-fact-two">
        <div className="fun-fact-two__background-image" style={{backgroundImage: 'url(/images/background/Background1.jpg)'}} />{/* /.fun-fact-two__background-image */}
        <div className="container">
        <div className="block-title text-center">
            <h2 className="block-title__title block-title__light-color">Our Target</h2>{/* /.block-title__title */}
            <p className="block-title__text block-title__light-color">The overarching target is to transform healthcare in Africa by building a robust, 
                collaborative, and culturally sensitive approach that serves the needs of clients, partners, 
                and the wider community, ultimately aiming for improved health outcomes across the continent.</p>{/* /.block-title__text */}
        </div>{/* /.block-title */}
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fun-fact-two__single">
                <i className="clainc-icon-medical fun-fact-two__icon" />
                <h3 className="fun-fact-two__title"><span className="counter">250</span>k</h3>{/* /.fun-fact-two__title */}
                <p className="fun-fact-two__text">Satisfied Patients</p>{/* /.fun-fact-two__text */}
            </div>{/* /.fun-fact-two__single */}
            </div>{/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fun-fact-two__single">
                <i className="clainc-icon-stethoscope-1 fun-fact-two__icon" />
                <h3 className="fun-fact-two__title"><span className="counter">300</span>+</h3>{/* /.fun-fact-two__title */}
                <p className="fun-fact-two__text">Expert Doctors</p>{/* /.fun-fact-two__text */}
            </div>{/* /.fun-fact-two__single */}
            </div>{/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fun-fact-two__single">
                <i className="clainc-icon-electrocardiogram-inside-heart fun-fact-two__icon" />
                <h3 className="fun-fact-two__title"><span className="counter">98.5</span>%</h3>{/* /.fun-fact-two__title */}
                <p className="fun-fact-two__text">Success in Surgeries</p>{/* /.fun-fact-two__text */}
            </div>{/* /.fun-fact-two__single */}
            </div>{/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="fun-fact-two__single">
                <i className="clainc-icon-prize-badge-with-star-and-ribbon fun-fact-two__icon" />
                <h3 className="fun-fact-two__title"><span className="counter">100</span>+</h3>{/* /.fun-fact-two__title */}
                <p className="fun-fact-two__text">Nationwide Recognitions</p>{/* /.fun-fact-two__text */}
            </div>{/* /.fun-fact-two__single */}
            </div>{/* /.col-lg-3 */}
        </div>{/* /.row */}
        </div>{/* /.container */}
    </section>{/* /.fun-fact-two */}
    <section className="appointment-two appointment-two__about-one">
        <div className="appointment-two__about-one__image-block">
        <img src="/images/resources/About52.jpg" alt="Awesome Image" style={{width: 600}, {height: 700}}/>
        </div>{/* /.appointment-two__about-one__image-block */}
        <div className="container">
        <div className="row no-gutters justify-content-end">
            <div className="col-xl-7 d-flex">
            <div className="my-auto">
                <div className="appointment-two__content">
                <h3 className="appointment-two__title">PROJECTS AND INITIATIVES</h3>{/* /.appointment-two__title */}
                <h3 className="appointment-two__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Quis ipsum sue ultrices gravida. <br /> Risus comcenas accumsan lacua.</h3>{/* /.appointment-two__text */}
                <div className="appointment-two__feature">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="appointment-two__feature-single">
                        <div className="appointment-two__feature-icon">
                            <i className="material-icons">done</i>
                        </div>{/* /.appointment-two__feature-icon */}
                        <div className="appointment-two__feature-content">
                            <h3 className="appointment-two__feature-title">Health Access for All</h3>{/* /.appointment-two__feature-title */}
                            <p className="appointment-two__feature-text">
                            A cornerstone initiative by UzimaNexus, Health Access for All seeks to integrate health data
accessibility in remote regions. By partnering with local health facilities, we aim to bridge the
healthcare access gap, enabling providers to deliver timely and effective care with secure
patient data access through SMS and USSD.
                            </p>{/* /.appointment-two__feature-text */}
                        </div>{/* /.appointment-two__feature-content */}
                        </div>{/* /.appointment-two__feature-single */}
                    </div>{/* /.col-lg-12 */}
                    <div className="col-lg-12">
                        <div className="appointment-two__feature-single clearfix">
                        <div className="appointment-two__feature-icon">
                            <i className="material-icons">done</i>
                        </div>{/* /.appointment-two__feature-icon */}
                        <div className="appointment-two__feature-content">
                            <h3 className="appointment-two__feature-title">Transparency Economy in Healthcare</h3>{/* /.appointment-two__feature-title */}
                            <p className="appointment-two__feature-text">UzimaNexus is leading a movement toward a transparency-driven healthcare economy,
                                    fostering openness and accountability by creating a secure, shareable digital health
                                    infrastructure for patients and providers.
                            </p>{/* /.appointment-two__feature-text */}
                        </div>{/* /.appointment-two__feature-content */}
                        </div>{/* /.appointment-two__feature-single */}
                    </div>{/* /.col-lg-12 */}
                    </div>{/* /.row */}
                </div>{/* /.appointment-two__feature */}
                </div>{/* /.appointment-two__content */}
            </div>{/* /.my-auto */}
            </div>{/* /.col-lg-7 */}
        </div>{/* /.row */}
        </div>{/* /.container */}
    </section>{/* /.appointment-two */}
    < Team />
    </div>

    </>
  );
}

export default About;
