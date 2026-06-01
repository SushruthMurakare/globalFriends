import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ctx = require.context('../assets/photos', false, /\.(jpeg|jpg|JPG|png|PNG)$/);
const PHOTOS = ctx.keys().map(ctx);

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % PHOTOS.length);
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <Navbar />

      <section className="gallery-section">
        <div className="gallery-header">
          <span className="section-label">Global Friends</span>
          <h1 className="gallery-headline">Our Community</h1>
          <p className="gallery-sub">
            Moments shared, friendships made, memories that last a lifetime.
          </p>
        </div>

        <div className="gallery-masonry">
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{ animationDelay: `${Math.min(i * 0.055, 0.9)}s` }}
              onClick={() => setLightbox(i)}
            >
              <img src={src} alt={`Community event photo ${i + 1}`} className="gallery-img" />
              <div className="gallery-item__overlay" />
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
            ✕
          </button>

          <button
            className="lightbox__prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
            }}
          >
            ‹
          </button>

          <img
            src={PHOTOS[lightbox]}
            alt={`Community event photo ${lightbox + 1}`}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox__next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i + 1) % PHOTOS.length);
            }}
          >
            ›
          </button>

          <span className="lightbox__counter">{lightbox + 1} / {PHOTOS.length}</span>
        </div>
      )}
    </>
  );
}
