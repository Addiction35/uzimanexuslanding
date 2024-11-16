"use client";
import Image from 'next/image';
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
          <option>Sw</option>
        </select>
        <a href="#" className="topbar-one__btn">Log In</a>
      </div>{/* /.topbar-one__buttons */}
    </div>{/* /.container */}
  </section>{/* /.topbar-one */}
  <header className="site-header header-two">
    <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
      <div className="container clearfix">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="logo-box clearfix">
          <a className="navbar-brand" href="/">
            <Image src='/images/resources/Uzimanexus logo.svg' className="main-logo" width={290}  height={90} alt=" Main Logo" />
          </a>
          <button className="menu-toggler" data-target=".main-navigation">
            <span className="fa fa-bars" />
          </button>
        </div>{/* /.logo-box */}
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="main-navigation">
          <ul className=" navigation-box">
            <li className="current">
              <a href="/">Home</a>
            </li>
            <li>
              <Link href="/about/About">About</Link>
            </li>
            <li>
              <a href=''>Pages</a>
              <ul className="submenu">
                <li><a href="/Team/OurTeam">Team</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>{/* /.submenu */}
            </li> 
            <li><Link href="/contact/Contact">Contact</Link></li>
          </ul>
        </div>{/* /.navbar-collapse */}
        <div className="right-side-box">
          <a href="#" className="header-two__btn thm-btn">Get Started</a>
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
