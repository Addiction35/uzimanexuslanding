import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';


function Layout({children}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.jQuery) {
        const $ = window.jQuery;

        // Initialize your JavaScript here
        $('.carousel').carousel();
    }
}, []);

  return (
    <>   
    <Header /> 
    {children}
    <Footer />
    </>
  );
}

export default Layout;
