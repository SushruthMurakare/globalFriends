import React, { useState } from 'react';
import testimonials from '../data/testimonial.json';

const countryFlags = {
  'Iran': '🇮🇷',
  'India': '🇮🇳',
  'Japan': '🇯🇵',
  'Middle East': '🌍',
  'USA': '🇺🇸',
  'United States': '🇺🇸',
  'China': '🇨🇳',
  'Brazil': '🇧🇷',
  'Mexico': '🇲🇽',
  'Germany': '🇩🇪',
  'France': '🇫🇷',
  'South Korea': '🇰🇷',
  'Saudi Arabia': '🇸🇦',
  'Nigeria': '🇳🇬',
  'Pakistan': '🇵🇰',
};

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="testimonial-section">
      <span className="testimonial-quote-bg" aria-hidden="true">"</span>

      <div className="testimonial-inner">
        <span className="section-label">Testimonial</span>

        <p className="testimonial-text">"{current.text}"</p>

        <div className="testimonial-attribution">
          <div className="testimonial-avatar" aria-label={`${current.country} flag`}>
            {countryFlags[current.country] || '🌏'}
          </div>
          <span className="testimonial-name">— {current.name}, from {current.country}</span>
        </div>

        <div className="testimonial-nav">
          <button className="testimonial-btn" onClick={prev} aria-label="Previous testimonial">&#8592;</button>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <span key={i} className={`testimonial-dot${i === index ? ' active' : ''}`} />
            ))}
          </div>
          <button className="testimonial-btn" onClick={next} aria-label="Next testimonial">&#8594;</button>
        </div>
      </div>
    </section>
  );
}
