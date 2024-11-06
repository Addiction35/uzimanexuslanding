
"use client";

import Team from '@/components/layouts/team/Team';
import { useEffect } from 'react';



export default function Home() {


  
  return (
    <>
    <div>
      <div className="banner-wrapper">
        <section className="banner-one banner-carousel__one no-dots owl-theme owl-carousel">
          <div className="banner-one__slide banner-one__slide-one" style={{backgroundImage: 'url(/images/slider/slider-4-1.jpg)'}}>
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-12 text-center">
                  <h3 className="banner-one__title banner-one__light-color">The Ecosystem for All African Healthcare Providers</h3>{/* /.banner-one__title */}
                  <p className="banner-one__text banner-one__light-color">Our platform provides a seamless experience for <br /> patients, doctors, medical engineering manufactures, pharmas, and all other healthcare providers.</p>{/* /.banner-one__text */}
                  <a href="#" className="thm-btn banner-one__btn">Learn More</a>
                </div>{/* /.col-lg-6 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </div>{/* /.banner-one__slide */}
          <div className="banner-one__slide banner-one__slide-two" style={{backgroundImage: 'url(/images/slider/slider-4-2.jpg)'}}>
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <h3 className="banner-one__title banner-one__light-color">Become part of the healhcare ecosystem</h3>{/* /.banner-one__title */}
                  <p className="banner-one__text banner-one__light-color">Our clinic version, Consultvrse provides a seamless experience for doctors to efficiently manage their practices.</p>{/* /.banner-one__text */}
                  <a href="#" className="thm-btn banner-one__btn">Learn More</a>
                </div>{/* /.col-lg-6 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </div>{/* /.banner-one__slide */}
        </section>{/* /.banner-one */}
        <div className="carousel-btn-block banner-carousel-btn">
          <span className="carousel-btn left-btn"><i className="fa fa-angle-left" /></span>
          <span className="carousel-btn right-btn"><i className="fa fa-angle-right" /></span>
        </div>{/* /.carousel-btn-block banner-carousel-btn */}
      </div>{/* /.banner-wrapper */}
      <section className="feature-three feature-three__home-three">
        <div className="container">
          <div className="inner-container wow fadeInUp" data-wow-duration="2s">
            <div className="row">
              <div className="col-lg-4">
                <div className="feature-three__single ">
                  <i className="feature-three__icon clainc-icon-calendar-1" />
                  <h3 className="feature-three__title"><a href="#">Hospital Schedule</a></h3>{/* /.feature-three__title */}
                  <ul className="feature-three__time">
                    <li className="feature-three__time-line"><span>Mon - Friday</span> <span>8:00 - 10:30</span></li>
                    <li className="feature-three__time-line"><span>Mon - Friday</span> <span>8:00 - 10:30</span></li>
                    <li className="feature-three__time-line"><span>Mon - Friday</span> <span>8:00 - 10:30</span></li>
                  </ul>{/* /.feature-three__time */}
                </div>{/* /.feature-three__single */}
              </div>{/* /.col-lg-3 */}
              <div className="col-lg-4">
                <div className="feature-three__single ">
                  <i className="feature-three__icon clainc-icon-calendar" />
                  <h3 className="feature-three__title"><a href="#">Get Appointment</a></h3>{/* /.feature-three__title */}
                  <p className="feature-three__text">Lorem ipsum dolor sit amet, consect etur on the adip iscing elit sedo eiusmod lim tempor commodo tiverra maecenas.</p>{/* /.feature-three__text */}
                  <a href="#" className="feature-three__btn">Appointment <i className="fa fa-long-arrow-right" /></a>
                </div>{/* /.feature-three__single */}
              </div>{/* /.col-lg-3 */}                        
              <div className="col-lg-4">
                <div className="feature-three__single ">
                  <i className="feature-three__icon clainc-icon-calendar-1" />
                  <h3 className="feature-three__title"><a href="#">Urgent Helps</a></h3>{/* /.feature-three__title */}
                  <ul className="feature-three__feature">
                    <li className="feature-three__feature-line">
                      <i className="material-icons">done</i>
                      Experienced Doctors
                    </li>
                    <li className="feature-three__feature-line">
                      <i className="material-icons">done</i>
                      Dedicated Professional Staffs
                    </li>
                    <li className="feature-three__feature-line">
                      <i className="material-icons">done</i>
                      24 Hours Emergency Service
                    </li>
                  </ul>{/* /.feature-three__feature */}
                </div>{/* /.feature-three__single */}
              </div>{/* /.col-lg-3 */}
            </div>{/* /.row */}
          </div>{/* /.inner-container */}
        </div>{/* /.container */}
      </section>{/* /.feature-three */}
      <section className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three__content">
                <h3 className="about-three__title">Welcome to UzimaNexus.</h3>{/* /.about-three__title */}
                <p className="about-three__tag-line">Healthcare Ecosystem for Everyone</p>{/* /.about-three__tag-line */}
                <p className="about-three__text">We’re delighted to introduce you to a new era in African healthcare. UzimaNexus is dedicated to
                  bridging gaps in the healthcare system, fostering transparency, accessibility, and accountability
                  for all. <br /> As we face growing health challenges, UzimaNexus provides a transformative platform
                  that enables patients and providers to access crucial data anytime, anywhere, securely and
                  seamlessly. <br />
                  Thank you for choosing UzimaNexus as your partner in healthcare transformation.</p>
                
                <a href="#" className="about-three__btn thm-btn">Learn More</a>
              </div>{/* /.about-three__content */}
            </div>{/* /.col-lg-6 */}
            <div className="col-lg-6 d-flex">
              <div className="my-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-three__box">
                      <div className="about-three__box-icon">
                        <i className="clainc-icon-prize-badge-with-star-and-ribbon" />
                      </div>{/* /.about-three__box-icon */}
                      <h3 className="about-three__box-title"><a href="#">Medical Quality</a></h3>{/* /.about-three__box-title */}
                      <p className="about-three__box-text">Lorem ipsum dolor sit amet, conse the ctetur adipisc elitedo eiusmod.</p>{/* /.about-three__box-text */}
                    </div>{/* /.about-three__box */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-three__box">
                      <div className="about-three__box-icon">
                        <i className="clainc-icon-operating-room" />
                      </div>{/* /.about-three__box-icon */}
                      <h3 className="about-three__box-title"><a href="#">Modern Labs</a></h3>{/* /.about-three__box-title */}
                      <p className="about-three__box-text">Lorem ipsum dolor sit amet, conse the ctetur adipisc elitedo eiusmod.</p>{/* /.about-three__box-text */}
                    </div>{/* /.about-three__box */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-three__box">
                      <div className="about-three__box-icon">
                        <i className="clainc-icon-microscope" />
                      </div>{/* /.about-three__box-icon */}
                      <h3 className="about-three__box-title"><a href="#">Cutting Edge Technology</a></h3>{/* /.about-three__box-title */}
                      <p className="about-three__box-text">Lorem ipsum dolor sit amet, conse the ctetur adipisc elitedo eiusmod.</p>{/* /.about-three__box-text */}
                    </div>{/* /.about-three__box */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-three__box">
                      <div className="about-three__box-icon">
                        <i className="clainc-icon-doctor" />
                      </div>{/* /.about-three__box-icon */}
                      <h3 className="about-three__box-title"><a href="#">24/7 Dedicated Experts</a></h3>{/* /.about-three__box-title */}
                      <p className="about-three__box-text">Lorem ipsum dolor sit amet, conse the ctetur adipisc elitedo eiusmod.</p>{/* /.about-three__box-text */}
                    </div>{/* /.about-three__box */}
                  </div>{/* /.col-lg-6 */}
                </div>{/* /.row */}
              </div>{/* /.my-auto */}
            </div>{/* /.col-lg-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.about-three */}
      <section className="thm-gray-bg service-four">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-8">
              <div className="block-title text-left">
                <h2 className="block-title__title">What Service We Provide</h2>{/* /.block-title__title */}
                <p className="block-title__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing eseiusmod <br /> there tempor incididunt ut labore et dolore magna aliqua. </p>{/* /.block-title__text */}
              </div>{/* /.block-title */}
              <div className="service-four__content">
                <div className="row service-four__row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="service-four__single hvr-sweep-to-top">
                      <div className="service-four__icon">
                        <i className="clainc-icon-heart" />
                      </div>{/* /.service-four__icon */}
                      <h3 className="service-four__title"><a href="#">Cardiology</a></h3>{/* /.service-four__title */}
                    </div>{/* /.service-four__single */}
                  </div>{/* /.col-lg-4 */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="service-four__single hvr-sweep-to-top">
                      <div className="service-four__icon">
                        <i className="clainc-icon-brain" />
                      </div>{/* /.service-four__icon */}
                      <h3 className="service-four__title"><a href="#">Neurology</a></h3>{/* /.service-four__title */}
                    </div>{/* /.service-four__single */}
                  </div>{/* /.col-lg-4 */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="service-four__single hvr-sweep-to-top">
                      <div className="service-four__icon">
                        <i className="clainc-icon-tooth1" />
                      </div>{/* /.service-four__icon */}
                      <h3 className="service-four__title"><a href="#">Dental Care</a></h3>{/* /.service-four__title */}
                    </div>{/* /.service-four__single */}
                  </div>{/* /.col-lg-4 */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="service-four__single hvr-sweep-to-top">
                      <div className="service-four__icon">
                        <i className="clainc-icon-kidney" />
                      </div>{/* /.service-four__icon */}
                      <h3 className="service-four__title"><a href="#">Hepatology</a></h3>{/* /.service-four__title */}
                    </div>{/* /.service-four__single */}
                  </div>{/* /.col-lg-4 */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="service-four__single hvr-sweep-to-top">
                      <div className="service-four__icon">
                        <i className="clainc-icon-baby-boy" />
                      </div>{/* /.service-four__icon */}
                      <h3 className="service-four__title"><a href="#">Pediatric</a></h3>{/* /.service-four__title */}
                    </div>{/* /.service-four__single */}
                  </div>{/* /.col-lg-4 */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="service-four__single hvr-sweep-to-top">
                      <div className="service-four__icon">
                        <i className="clainc-icon-medicine" />
                      </div>{/* /.service-four__icon */}
                      <h3 className="service-four__title"><a href="#">Medicine Care</a></h3>{/* /.service-four__title */}
                    </div>{/* /.service-four__single */}
                  </div>{/* /.col-lg-4 */}
                </div>{/* /.row service-four__row */}
              </div>{/* /.service-four__content */}
            </div>{/* /.col-lg-8 */}
            <div className="col-lg-4">
              <form action="#" className="appointment-two__form contact-from-validated">
                <div className="appointment-two__form-top">
                  <h3 className="appointment-two__form-title">Get an Appointment</h3>{/* /.appointment-two__form-title */}
                </div>{/* /.appointment-two__form-top */}
                <div className="appointment-two__form-bottom">
                  <div className="appointment-two__form-field">
                    <input type="text" name="name" placeholder="Enter your name" />
                    <i className="appointment-two__form-field-icon material-icons">person</i>
                  </div>{/* /.appointment-two__form-field */}
                  <div className="appointment-two__form-field">
                    <input type="text" name="name" placeholder="Enter your phone" />
                    <i className="appointment-two__form-field-icon material-icons">phone</i>
                  </div>{/* /.appointment-two__form-field */}
                  <div className="appointment-two__form-field">
                    <input type="text" name="name" placeholder="Appointment Date" className="datepicker" />
                    <i className="appointment-two__form-field-icon material-icons">date_range</i>
                  </div>{/* /.appointment-two__form-field */}
                  <div className="appointment-two__form-field">
                    <select className="selectpicker">
                      <option>Choose Department</option>
                      <option>Choose Department</option>
                      <option>Choose Department</option>
                      <option>Choose Department</option>
                      <option>Choose Department</option>
                    </select>
                  </div>{/* /.appointment-two__form-field */}
                  <div className="appointment-two__form-field">
                    <select className="selectpicker">
                      <option>Select Doctor</option>
                      <option>Select Doctor</option>
                      <option>Select Doctor</option>
                      <option>Select Doctor</option>
                      <option>Select Doctor</option>
                    </select>
                  </div>{/* /.appointment-two__form-field */}
                  <div className="appointment-two__form-field">
                    <button type="submit" className="appointment-two__form-btn">Request Appointment</button>
                  </div>{/* /.appointment-two__form-field */}
                </div>{/* /.appointment-two__form-bottom */}
              </form>{/* /.appointment-two__form */}
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* / .appointment-table .thm-gray-bg */}
      <section className="service-three">
        <div className="container">
          <div className="block-title text-center">
            <h2 className="block-title__title">Why We Are Best in The Town</h2>{/* /.block-title__title */}
            <p className="block-title__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttom <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>{/* /.block-title__text */}
          </div>{/* /.block-title */}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-three__single">
                <div className="service-three__icon">
                  <i className="clainc-icon-doctor" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                  <h3 className="service-three__title"><a href="#">Experience Doctors</a></h3>
                  <p className="service-three__text">Lorem ipsum dolor sit amet consept ctetur adipiscing elsed do eiusmod labore dolore magna aliqua. </p>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
              </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-three__single">
                <div className="service-three__icon">
                  <i className="clainc-icon-ambulance1" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                  <h3 className="service-three__title"><a href="#">Emergency Treatments</a></h3>
                  <p className="service-three__text">Lorem ipsum dolor sit amet consept ctetur adipiscing elsed do eiusmod labore dolore magna aliqua. </p>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
              </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-three__single">
                <div className="service-three__icon">
                  <i className="clainc-icon-save-the-earth" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                  <h3 className="service-three__title"><a href="#">Better Enverionment</a></h3>
                  <p className="service-three__text">Lorem ipsum dolor sit amet consept ctetur adipiscing elsed do eiusmod labore dolore magna aliqua. </p>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
              </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-three__single">
                <div className="service-three__icon">
                  <i className="clainc-icon-shield" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                  <h3 className="service-three__title"><a href="#">Quality and Saftey</a></h3>
                  <p className="service-three__text">Lorem ipsum dolor sit amet consept ctetur adipiscing elsed do eiusmod labore dolore magna aliqua. </p>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
              </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-three__single">
                <div className="service-three__icon">
                  <i className="clainc-icon-medicine" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                  <h3 className="service-three__title"><a href="#">Special Medicine</a></h3>
                  <p className="service-three__text">Lorem ipsum dolor sit amet consept ctetur adipiscing elsed do eiusmod labore dolore magna aliqua. </p>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
              </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-three__single">
                <div className="service-three__icon">
                  <i className="clainc-icon-noun_heart-beat_1684580" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                  <h3 className="service-three__title"><a href="#">Advanced Surgeries</a></h3>
                  <p className="service-three__text">Lorem ipsum dolor sit amet consept ctetur adipiscing elsed do eiusmod labore dolore magna aliqua. </p>{/* /.service-three__text */}
                </div>{/* /.service-three__content */}
              </div>{/* /.service-three__single */}
            </div>{/* /.col-lg-4 */}                    
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.service-three */}
      <section className="team-three thm-gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="block-title">
                <h2 className="block-title__title">Our Missions and Visions</h2>{/* /.block-title__title */}
                <p className="block-title__text">UzimaNexus empowers healthcare providers and patients by offering a secure, data-sharing
platform tailored for Africa’s unique needs. We strive to drive early diagnoses, efficient
treatment, and trust through a centralized system that simplifies access to health records,
supports referrals, and integrates across diverse healthcare settings.</p>{/* /.block-title__text */}
              </div>{/* /.block-title */}
              <div className="team-three__list team-three__pager">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a href="#" className="pager-item active" data-slide-index={0}>
                      <div className="team-three__list-item">
                        <div className="team-three__list-item-image">
                          <div className="inner-block"><img src="/images/team/team-3-1.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                        </div>{/* /.team-three__list-item-image */}
                        <div className="team-three__list-item-content">
                          <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                          <h3 className="team-three__name">Yolanda Moises</h3>{/* /.team-three__name */}
                          <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                        </div>{/* /.team-three__list-item-content */}
                      </div>{/* /.team-three__list-item */}
                    </a>
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a href="#" className="pager-item" data-slide-index={1}>
                      <div className="team-three__list-item">
                        <div className="team-three__list-item-image">
                          <div className="inner-block"><img src="/images/team/team-3-2.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                        </div>{/* /.team-three__list-item-image */}
                        <div className="team-three__list-item-content">
                          <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                          <h3 className="team-three__name">Terresa Bradey</h3>{/* /.team-three__name */}
                          <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                        </div>{/* /.team-three__list-item-content */}
                      </div>{/* /.team-three__list-item */}
                    </a>
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a href="#" className="pager-item" data-slide-index={2}>
                      <div className="team-three__list-item">
                        <div className="team-three__list-item-image">
                          <div className="inner-block"><img src="/images/team/team-3-3.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                        </div>{/* /.team-three__list-item-image */}
                        <div className="team-three__list-item-content">
                          <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                          <h3 className="team-three__name">Shane Guemer</h3>{/* /.team-three__name */}
                          <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                        </div>{/* /.team-three__list-item-content */}
                      </div>{/* /.team-three__list-item */}
                    </a>
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a href="#" className="pager-item" data-slide-index={3}>
                      <div className="team-three__list-item">
                        <div className="team-three__list-item-image">
                          <div className="inner-block"><img src="/images/team/team-3-4.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                        </div>{/* /.team-three__list-item-image */}
                        <div className="team-three__list-item-content">
                          <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                          <h3 className="team-three__name">Shantel Amaya</h3>{/* /.team-three__name */}
                          <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                        </div>{/* /.team-three__list-item-content */}
                      </div>{/* /.team-three__list-item */}
                    </a>
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a href="#" className="pager-item" data-slide-index={4}>
                      <div className="team-three__list-item">
                        <div className="team-three__list-item-image">
                          <div className="inner-block"><img src="/images/team/team-3-5.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                        </div>{/* /.team-three__list-item-image */}
                        <div className="team-three__list-item-content">
                          <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                          <h3 className="team-three__name">Omar Karowski</h3>{/* /.team-three__name */}
                          <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                        </div>{/* /.team-three__list-item-content */}
                      </div>{/* /.team-three__list-item */}
                    </a>
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <a href="#" className="pager-item" data-slide-index={5}>
                      <div className="team-three__list-item">
                        <div className="team-three__list-item-image">
                          <div className="inner-block"><img src="/images/team/team-3-6.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                        </div>{/* /.team-three__list-item-image */}
                        <div className="team-three__list-item-content">
                          <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                          <h3 className="team-three__name">Dortha Marinla</h3>{/* /.team-three__name */}
                          <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                        </div>{/* /.team-three__list-item-content */}
                      </div>{/* /.team-three__list-item */}
                    </a>
                  </div>{/* /.col-lg-6 */}
                </div>{/* /.row */}
              </div>{/* /.team-three__list */}
            </div>{/* /.col-lg-7 */}
            <div className="col-xl-5">
              <ul className="slider team-three__slider">
                <li className="slide-item">
                  <div className="team-three__description">
                    <div className="team-three__description-top">
                      <div className="team-three__description-image">
                        <div className="inner-block"><img src="/images/team/team-3-1.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                      </div>{/* /.team-three__description-image */}
                      <div className="team-three__description-content">
                        <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                        <h3 className="team-three__name">Yolanda Moises</h3>{/* /.team-three__name */}
                        <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                      </div>{/* /.team-three__description-top-content */}
                    </div>{/* /.team-three__description-top */}
                    <div className="team-three__content">
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel eiusmor facilisis. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing aliqua. </p>
                      <a href="#" className="team-three__btn">Learn More <i className="fa fa-long-arrow-right" /></a>
                    </div>{/* /.team-three__content */}
                  </div>{/* /.team-three__full-description */}
                </li>
                <li className="slide-item">
                  <div className="team-three__description">
                    <div className="team-three__description-top">
                      <div className="team-three__description-image">
                        <div className="inner-block"><img src="/images/team/team-3-2.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                      </div>{/* /.team-three__description-image */}
                      <div className="team-three__description-content">
                        <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                        <h3 className="team-three__name">Terresa Bradey</h3>{/* /.team-three__name */}
                        <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                      </div>{/* /.team-three__description-top-content */}
                    </div>{/* /.team-three__description-top */}
                    <div className="team-three__content">
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel eiusmor facilisis. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing aliqua. </p>
                      <a href="#" className="team-three__btn">Learn More <i className="fa fa-long-arrow-right" /></a>
                    </div>{/* /.team-three__content */}
                  </div>{/* /.team-three__full-description */}
                </li>
                <li className="slide-item">
                  <div className="team-three__description">
                    <div className="team-three__description-top">
                      <div className="team-three__description-image">
                        <div className="inner-block"><img src="/images/team/team-3-3.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                      </div>{/* /.team-three__description-image */}
                      <div className="team-three__description-content">
                        <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                        <h3 className="team-three__name">Shanae Guemmer</h3>{/* /.team-three__name */}
                        <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                      </div>{/* /.team-three__description-top-content */}
                    </div>{/* /.team-three__description-top */}
                    <div className="team-three__content">
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel eiusmor facilisis. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing aliqua. </p>
                      <a href="#" className="team-three__btn">Learn More <i className="fa fa-long-arrow-right" /></a>
                    </div>{/* /.team-three__content */}
                  </div>{/* /.team-three__full-description */}
                </li>
                <li className="slide-item">
                  <div className="team-three__description">
                    <div className="team-three__description-top">
                      <div className="team-three__description-image">
                        <div className="inner-block"><img src="/images/team/team-3-4.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                      </div>{/* /.team-three__description-image */}
                      <div className="team-three__description-content">
                        <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                        <h3 className="team-three__name">Shantel Amaya</h3>{/* /.team-three__name */}
                        <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                      </div>{/* /.team-three__description-top-content */}
                    </div>{/* /.team-three__description-top */}
                    <div className="team-three__content">
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel eiusmor facilisis. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing aliqua. </p>
                      <a href="#" className="team-three__btn">Learn More <i className="fa fa-long-arrow-right" /></a>
                    </div>{/* /.team-three__content */}
                  </div>{/* /.team-three__full-description */}
                </li>
                <li className="slide-item">
                  <div className="team-three__description">
                    <div className="team-three__description-top">
                      <div className="team-three__description-image">
                        <div className="inner-block"><img src="/images/team/team-3-5.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                      </div>{/* /.team-three__description-image */}
                      <div className="team-three__description-content">
                        <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                        <h3 className="team-three__name">Omar Kacprowski</h3>{/* /.team-three__name */}
                        <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                      </div>{/* /.team-three__description-top-content */}
                    </div>{/* /.team-three__description-top */}
                    <div className="team-three__content">
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel eiusmor facilisis. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing aliqua. </p>
                      <a href="#" className="team-three__btn">Learn More <i className="fa fa-long-arrow-right" /></a>
                    </div>{/* /.team-three__content */}
                  </div>{/* /.team-three__full-description */}
                </li>
                <li className="slide-item">
                  <div className="team-three__description">
                    <div className="team-three__description-top">
                      <div className="team-three__description-image">
                        <div className="inner-block"><img src="/images/team/team-3-6.jpg" alt="Awesome Image" /></div>{/* /.inner-block */}
                      </div>{/* /.team-three__description-image */}
                      <div className="team-three__description-content">
                        <p className="team-three__title">Professior</p>{/* /.team-three__title */}
                        <h3 className="team-three__name">Dortha Marinella</h3>{/* /.team-three__name */}
                        <p className="team-three__designation">Dental Care</p>{/* /.team-three__designation */}
                      </div>{/* /.team-three__description-top-content */}
                    </div>{/* /.team-three__description-top */}
                    <div className="team-three__content">
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel eiusmor facilisis. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      <p className="team-three__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing aliqua. </p>
                      <a href="#" className="team-three__btn">Learn More <i className="fa fa-long-arrow-right" /></a>
                    </div>{/* /.team-three__content */}
                  </div>{/* /.team-three__full-description */}
                </li>
              </ul>
            </div>{/* /.col-lg-5 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.team-three */}
      <section className="fun-fact-two">
        <div className="fun-fact-two__background-image" style={{backgroundImage: 'url(/images/background/fun-fact-bg-1-1.jpg)'}} />{/* /.fun-fact-two__background-image */}
        <div className="container">
          <div className="block-title text-center">
            <h2 className="block-title__title block-title__light-color">Our Achievements</h2>{/* /.block-title__title */}
            <p className="block-title__text block-title__light-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uttom <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>{/* /.block-title__text */}
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
                <p className="fun-fact-two__text">Expert Doctor</p>{/* /.fun-fact-two__text */}
              </div>{/* /.fun-fact-two__single */}
            </div>{/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="fun-fact-two__single">
                <i className="clainc-icon-electrocardiogram-inside-heart fun-fact-two__icon" />
                <h3 className="fun-fact-two__title"><span className="counter">98.5</span>%</h3>{/* /.fun-fact-two__title */}
                <p className="fun-fact-two__text">Success Surgeries</p>{/* /.fun-fact-two__text */}
              </div>{/* /.fun-fact-two__single */}
            </div>{/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="fun-fact-two__single">
                <i className="clainc-icon-prize-badge-with-star-and-ribbon fun-fact-two__icon" />
                <h3 className="fun-fact-two__title"><span className="counter">49</span>+</h3>{/* /.fun-fact-two__title */}
                <p className="fun-fact-two__text">National Awards</p>{/* /.fun-fact-two__text */}
              </div>{/* /.fun-fact-two__single */}
            </div>{/* /.col-lg-3 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.fun-fact-two */}
      < Team />
    </div>
    </>
  );
}
