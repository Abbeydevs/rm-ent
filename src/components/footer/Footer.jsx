import React from "react";

import logo from "../../images/footer-logo.png";

import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container footer__container">
      <div className="footer__logo">
        <img src={logo} alt="logo" className="footer__image" />
      </div>
      <small className="copyright__text">
        &copy; {currentYear} Copyrights Real Matters Entertainment - All Rights
        Reserved
      </small>
    </footer>
  );
}
