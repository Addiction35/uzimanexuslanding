
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
      });
    }
  }, []);

  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
    
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/jquery.js" defer></script>
        <script src="/js/owl.carousel.min.js" defer></script>
        <script src="/js/bootstrap.bundle.min.js" defer></script>
        <script src="/js/bootstrap-select.min.js" defer></script>
        <script src="/js/waypoints.min.js" defer></script>
        <script src="/js/jquery.counterup.min.js" defer></script>
        <script src="/js/jquery.magnific-popup.min.js" defer></script>
        <script src="/js/bootstrap-datepicker.min.js" defer></script>
        <script src="/js/jquery.validate.min.js" defer></script>
        <script src="/js/wow.min.js" defer></script>
        <script src="/js/jquery.bxslider.min.js" defer></script>
        <script src="/js/theme.js" defer></script> 
      </body>
    </Html>
  );
}
