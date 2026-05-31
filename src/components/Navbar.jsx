import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png";

const TABS = ['Home', 'About', 'Global Friends', 'Resources', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>

        {/* Logo */}
        <a href="#" className="navbar__logo">
          <div className="navbar__logo-badge">
         <img src={logo} alt="Logo" />
          </div>
          <span className="navbar__logo-text">Global Friends</span>
        </a>

        {/* Centered nav links */}
        <ul className="navbar__links">
          {TABS.map((tab) => (
            <li key={tab}>
              <a href="#" className="navbar__link">{tab}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="navbar__cta btn-primary">
          Get Connected
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu" role="dialog" aria-modal="true">
          <button
            className="navbar__mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
          {TABS.map((tab) => (
            <a
              key={tab}
              href="#"
              className="navbar__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {tab}
            </a>
          ))}
          <button
            className="navbar__mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Get Connected
          </button>
        </div>
      )}
    </>
  );
}
