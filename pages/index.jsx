
"use client";

import Collaborators from '@/components/collaborators/collaborators';
import Team from '@/components/layouts/team/Team';




export default function Home() {


  
  return (
    <>
    <div>
      <div className="banner-wrapper">
        <section className="banner-one banner-carousel__one no-dots owl-theme owl-carousel">
          <div className="banner-one__slide banner-one__slide-one" style={{backgroundImage: 'url(/images/slider/Slider2.jpg)'}}>
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
          <div className="banner-one__slide banner-one__slide-two" style={{backgroundImage: 'url(/images/slider/Slider3.jpg)'}}>
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
                      <p className="about-three__box-text"> Ensuring excellence in every step of patient care.</p>{/* /.about-three__box-text */}
                    </div>{/* /.about-three__box */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-three__box">
                      <div className="about-three__box-icon">
                        <i className="clainc-icon-operating-room" />
                      </div>{/* /.about-three__box-icon */}
                      <h3 className="about-three__box-title"><a href="#">Modern Labs</a></h3>{/* /.about-three__box-title */}
                      <p className="about-three__box-text">Empowering healthcare with state-of-the-art diagnostics.
                      </p>{/* /.about-three__box-text */}
                    </div>{/* /.about-three__box */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-three__box">
                      <div className="about-three__box-icon">
                        <i className="clainc-icon-microscope" />
                      </div>{/* /.about-three__box-icon */}
                      <h3 className="about-three__box-title"><a href="#">Cutting Edge Technology</a></h3>{/* /.about-three__box-title */}
                      <p className="about-three__box-text">Advancing precision and innovation in medical care.</p>{/* /.about-three__box-text */}
                    </div>{/* /.about-three__box */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-three__box">
                      <div className="about-three__box-icon">
                        <i className="clainc-icon-doctor" />
                      </div>{/* /.about-three__box-icon */}
                      <h3 className="about-three__box-title"><a href="#">24/7 Dedicated Experts</a></h3>{/* /.about-three__box-title */}
                      <p className="about-three__box-text">Round-the-clock support from healthcare specialists.</p>{/* /.about-three__box-text */}
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
                <p className="block-title__text"> Our services Cover a wide range of services. Which Mainy Include ?</p>{/* /.block-title__text */}
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
          </div>{/* /.block-title */}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-three__single">
                <div className="service-three__icon">
                  <i className="clainc-icon-doctor" />
                </div>{/* /.service-three__icon */}
                <div className="service-three__content">
                  <h3 className="service-three__title"><a href="#">Experience Doctors</a></h3>
                  <p className="service-three__text">We are Equipped with Highly Qualified Available Doctors</p>{/* /.service-three__text */}
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
                  <p className="service-three__text">We Offer Fast Response To Emergency Services</p>{/* /.service-three__text */}
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
                  <p className="service-three__text">Your safety is Our Major Concern, Therefore our systems are end-to-end encrypted</p>{/* /.service-three__text */}
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
                  supports referrals, and integrates across diverse healthcare settings.
              </p>{/* /.block-title__text */}
              </div>{/* /.block-title */}
            </div>{/* /.col-lg-7 */}
          </div>{/* /.row */}
          <div>
            <Collaborators />
          </div>
        </div>{/* /.container */}
      </section>{/* /.team-three */}
      <section className="fun-fact-two">
        <div className="fun-fact-two__background-image" style={{backgroundImage: 'url(/images/background/Background2.jpg)'}} />{/* /.fun-fact-two__background-image */}
        <div className="container">
          <div className="block-title text-center">
            <h2 className="block-title__title block-title__light-color">Our Target Achievements</h2>{/* /.block-title__title */}
            <p className="block-title__text block-title__light-color">With Technology Enhancement and machine Learning with AI UzimaNexus is looking forward to Become to:</p>{/* /.block-title__text */}
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
