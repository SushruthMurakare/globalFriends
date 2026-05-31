import React from 'react';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <span className="section-label">About Us</span>
        <p className="about-statement">
          We're a small team of passionate volunteers helping
          international students and workers feel at home in
          Colorado — one ride, one meal, one friendship at a time.
        </p>
        <a href="#" className="about-link">
          Learn more <span className="about-link-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
