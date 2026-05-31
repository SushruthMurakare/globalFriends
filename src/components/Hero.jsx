import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">

        {/* ── Left: Editorial content ── */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Colorado, USA
          </div>

          <h1 className="hero__headline">
            Your Home<br />
            Away From<br />
            Home
          </h1>

          <p className="hero__subtext">
            Helping internationals find community, friendship,
            and belonging in Colorado
          </p>

          <div className="hero__cta-group">
            <button className="btn-primary">Get Connected</button>
            <button className="btn-ghost">Learn More</button>
          </div>
        </div>

        {/* ── Right: Stacked portrait images ── */}
        <div className="hero__images">
          {/* Main large image — top right */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&fit=crop&q=80"
            alt="Diverse group of friends laughing together"
            className="hero__img-main"
          />

          {/* Secondary image — bottom left, overlaps main */}
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=700&fit=crop&q=80"
            alt="Community gathering and celebration"
            className="hero__img-secondary"
          />

          {/* Accent image — bottom right corner */}
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&fit=crop&q=80"
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
