"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const loadScript = (src, isLast = false) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true; // Ensure execution order
      script.onload = () => {
        // console.log(`Loaded: ${src}`);
        if (isLast) initializePlugins(); // Initialize plugins only after the last script loads
        resolve();
      };
      script.onerror = () => {
        // console.error(`Failed to load: ${src}`);
        reject(new Error(`Failed to load script: ${src}`));
      };
      document.body.appendChild(script);
    });
  };

  const initializePlugins = () => {
    // Ensure plugins initialize only after scripts are loaded
    if (window.jQuery) {
      // console.log("Initializing jQuery plugins...");
      $(document).ready(() => {
        if ($(".owl-carousel").length) $(".owl-carousel").owlCarousel();
        if ($(".datepicker").length) $(".datepicker").datepicker();
        if ($(".selectpicker").length) $(".selectpicker").selectpicker();
        console.log("Plugins initialized successfully!");
      });
    } else {
      console.error("jQuery is not loaded. Plugins cannot initialize.");
    }
  };

  useEffect(() => {
    const scripts = [
      "/js/jquery.js", // Load jQuery first
      "/js/bootstrap.bundle.min.js",
      "/js/bootstrap-select.min.js",
      "/js/owl.carousel.min.js",
      "/js/waypoints.min.js",
      "/js/jquery.counterup.min.js",
      "/js/jquery.magnific-popup.min.js",
      "/js/bootstrap-datepicker.min.js",
      "/js/jquery.validate.min.js",
      "/js/wow.min.js",
      "/js/jquery.bxslider.min.js",
      "/js/theme.js",
      "/js/collab.js" // Last script
    ];

    // Load scripts in order
    scripts.reduce((promise, src, index) => {
      const isLast = index === scripts.length - 1;
      return promise.then(() => loadScript(src, isLast));
    }, Promise.resolve());

    // Cleanup function to remove scripts
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) document.body.removeChild(script);
      });
    };
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


