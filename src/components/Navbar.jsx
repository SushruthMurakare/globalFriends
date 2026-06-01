import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const TABS = ["Home", "About", "Global Friends", "Resources", "Contact"];

const TAB_ROUTES = {
  Home: "/",
  "Global Friends": "/gallery",
  Resources: "/resources",
};

const SCROLL_TARGETS = {
  About: "about",
  Contact: "contact",
};

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleTab = (tab) => {
    if (SCROLL_TARGETS[tab]) {
      const id = SCROLL_TARGETS[tab];
      if (location.pathname === "/") {
        scrollToId(id);
      } else {
        navigate(`/#${id}`);
      }
    } else if (tab === "Home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else if (TAB_ROUTES[tab]) {
      navigate(TAB_ROUTES[tab]);
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
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
              <button
                className="navbar__link navbar__link--btn"
                onClick={() => handleTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          className="navbar__cta btn-primary"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSeGuxuBFViPUxmG_f8aW_TDyztKNAAweyn_fPax4TLBYMCapw/viewform?pli=1",
              "_blank",
            )
          }
        >
          Join Our Community
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
            <button
              key={tab}
              className="navbar__mobile-link navbar__link--btn"
              onClick={() => {
                setMobileOpen(false);
                handleTab(tab);
              }}
            >
              {tab}
            </button>
          ))}
          <button
            className="navbar__mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Join Our Community
          </button>
        </div>
      )}
    </>
  );
}
