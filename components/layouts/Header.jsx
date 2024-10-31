import Link from 'next/link';
import React from 'react';

function Header() {
  return (
<>
<div>
  <section className="topbar-one">
    <div className="container">
      <ul className="topbar-one__contact">
        <li className="topbar-one__contact-item"><a href="mailto:help@example.com"><i className="material-icons">email</i>info@uzimanexus.com</a></li>
        <li className="topbar-one__contact-item"><a href="callto:123456789101"><i className="material-icons">local_phone</i>+254 745943172</a></li>
      </ul>{/* /.topbar-one__contact */}
      <div className="topbar-one__buttons">
        <select className="selectpicker topbar-one__language">
          <option>En</option>
          <option>Bn</option>
          <option>Du</option>
        </select>
        <a href="appointment.html" className="topbar-one__btn">Get Appointment</a>
      </div>{/* /.topbar-one__buttons */}
    </div>{/* /.container */}
  </section>{/* /.topbar-one */}
  <header className="site-header header-two">
    <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
      <div className="container clearfix">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="logo-box clearfix">
          <a className="navbar-brand" href="index.html">
            <img src="/images/resources/logo-1-1.png" className="main-logo" alt="Awesome Image" />
          </a>
          <button className="menu-toggler" data-target=".main-navigation">
            <span className="fa fa-bars" />
          </button>
        </div>{/* /.logo-box */}
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="main-navigation">
          <ul className=" navigation-box">
            <li className="current">
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="pharmacy.html">Departments</a>
              <ul className="submenu">
                <li><a href="pharmacy.html">Departent1</a></li>
                <li><a href="medicine-details.html">Departent1</a></li>
                <li><a href="cart.html">Departent1</a></li>
                <li><a href="checkout.html">Departent1</a></li>
              </ul>{/* /.submenu */}
            </li>
            <li>
              <Link href="/about/About">About</Link>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="submenu">
                <li><a href="doctors.html">Team</a></li>
                <li><a href="history-slide.html">History</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="appointment.html">Appointment</a></li>
              </ul>{/* /.submenu */}
            </li> 


            <li>
              <Link href="blogs/Blogs">Blog</Link>
              <ul className="submenu">
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>{/* /.submenu */}
            </li>
            <li><Link href="contact/Contact">Contact</Link></li>
          </ul>
        </div>{/* /.navbar-collapse */}
        <div className="right-side-box">
          <a href="#" className="header-two__btn thm-btn">Appointment</a>
        </div>{/* /.right-side-box */}
      </div>
      {/* /.container */}
    </nav>
  </header>{/* /.header-one */}
</div>

</>
  );
}

export default Header;
