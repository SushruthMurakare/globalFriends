import React from 'react';
import photo1 from "../assets/photos/6E330BB4-FA9E-4D32-8218-FC23325D138E.JPG";
import photo2 from "../assets/photos/44C31155-FD98-4F76-B6C8-753A3092FB4B_1_105_c.jpeg";
import photo3 from "../assets/photos/A0211175-AE92-40F9-9C55-C29F86D48FDE_1_105_c.jpeg";
import announcement from '../data/announcement.json';


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">

        {/* ── Left: Editorial content ── */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Golden, Colorado, USA
          </div>

          <h1 className="hero__headline">
            Your Home<br />
            Away From<br />
            Home
          </h1>

          <div className="hero__announcement">
            <div className="hero__announcement-header">
              <span className="hero__announcement-pulse" />
              <span className="hero__announcement-text">{announcement.title}</span>
              <span className="hero__announcement-sep">·</span>
              <span className="hero__announcement-date">{announcement.date}</span>
            </div>
            <p className="hero__announcement-desc">{announcement.description}</p>
          </div>

{/*
          <div className="hero__cta-group">
            <button className="btn-primary">Get Connected</button>
            <button className="btn-ghost">Learn More</button>
          </div> */}
        </div>

        {/* ── Right: Stacked portrait images ── */}
        <div className="hero__images">
          {/* Main large image — top right */}
          <img
            src={photo1}
            alt="Diverse group of friends laughing together"
            className="hero__img-main"
          />

          {/* Secondary image — bottom left, overlaps main */}
          <img
            src={photo2}
            alt="Community gathering and celebration"
            className="hero__img-secondary"
          />

          {/* Accent image — bottom right corner */}
          <img
            src={photo3}
            alt="Sharing a meal together"
            className="hero__img-accent"
          />

          {/* Floating stat badge */}
          <div className="hero__float-badge">
            <div className="hero__float-badge-dot" />
            <span className="hero__float-badge-text">200+ Internationals Helped</span>
          </div>

          {/* Second floating badge */}
          <div className="hero__float-badge-2">
            <span className="hero__float-badge-icon">🌍</span>
            <div className="hero__float-badge-info">
              <span className="hero__float-badge-num">15+ Countries</span>
              <span className="hero__float-badge-sub">Represented</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
