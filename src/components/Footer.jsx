import React from 'react';
import logo from "../assets/images/logo.png";

const TABS = ['Home', 'About', 'Global Friends', 'Resources', 'Contact'];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">

        <div className="footer__grid">

          {/* Logo + tagline */}
          <div>
            <a href="#" className="footer__logo">
              <div className="footer__logo-badge">
               <img src={logo} alt="Logo" />
              </div>
              <span className="footer__logo-text">Global Friends</span>
            </a>
            <p className="footer__tagline">
              Building community for internationals across Colorado.
            </p>
          </div>

          {/* Nav links */}
          <ul className="footer__links">
            {TABS.map((tab) => (
              <li key={tab}>
                <a href="#" className="footer__link">{tab}</a>
              </li>
            ))}
          </ul>

          {/* Contact info */}
          <div className="footer__contact">
            <p className="footer__contact-title">Contact Us</p>
            <p className="footer__contact-info">
              imarquis@internationalstudents.org<br />
              Golden, Colorado, USA<br />
              (231)-299-7712
            </p>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 Global Friends Colorado</p>
        </div>

      </div>
    </footer>
  );
}
