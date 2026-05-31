import React from 'react';

const TABS = ['Home', 'About', 'Global Friends', 'Resources', 'Contact'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__grid">

          {/* Logo + tagline */}
          <div>
            <a href="#" className="footer__logo">
              <div className="footer__logo-badge">
                <span style={{ color: '#fa824c' }}>G</span>
                <span style={{ color: '#2d80f2' }}>F</span>
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
              hello@globalfriends.co<br />
              Colorado, USA<br />
              (720) 555-0199
            </p>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2025 Global Friends Colorado</p>
        </div>

      </div>
    </footer>
  );
}
