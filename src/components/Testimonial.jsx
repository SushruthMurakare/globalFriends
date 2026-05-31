import React from 'react';

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      {/* Large decorative " behind everything */}
      <span className="testimonial-quote-bg" aria-hidden="true">"</span>

      <div className="testimonial-inner">
        <span className="section-label">Testimonial</span>

        <p className="testimonial-text">
          "I arrived not knowing a single person.
          Global Friends became my family in Colorado."
        </p>

        <div className="testimonial-attribution">
          <div className="testimonial-avatar" aria-label="Japan flag">🇯🇵</div>
          <span className="testimonial-name">— Yuki T., from Japan</span>
        </div>
      </div>
    </section>
  );
}
