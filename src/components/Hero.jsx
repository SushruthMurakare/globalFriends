import React, { useEffect, useRef, useState } from 'react';
import announcement from '../data/announcement.json';

const photoCtx = require.context('../assets/photos', false, /\.(jpeg|jpg|JPG|png|PNG)$/);
const ALL_PHOTOS = photoCtx.keys().map(photoCtx);

const SLOT_COUNT = 3;
const MIN_DELAY = 4000;
const MAX_DELAY = 9000;

function pickDistinct(count) {
  const shuffled = [...ALL_PHOTOS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function randomDelay() {
  return MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
}

function setAt(arr, index, value) {
  const next = [...arr];
  next[index] = value;
  return next;
}

/**
 * Renders an image that smoothly crossfades (with a gentle zoom-settle) to
 * a new `src` whenever it changes, instead of blinking to blank in between.
 * Two stacked <img> layers are used so the outgoing photo stays visible
 * underneath while the incoming one fades in on top.
 */
function CrossfadePhoto({ src, alt, className }) {
  const [layers, setLayers] = useState([src, src]);
  const [active, setActive] = useState(0);
  const prevSrc = useRef(src);

  useEffect(() => {
    if (src === prevSrc.current) return;
    prevSrc.current = src;
    const nextLayer = active === 0 ? 1 : 0;
    setLayers((prev) => setAt(prev, nextLayer, src));

    // Paint the new layer at opacity 0 first, then flip it active on the
    // following frame so the opacity/transform transition actually runs.
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setActive(nextLayer));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [src, active]);

  return (
    <div className={className}>
      {layers.map((layerSrc, i) => (
        <img
          key={i}
          src={layerSrc}
          alt={alt}
          className={`hero__photo${i === active ? ' hero__photo--active' : ''}`}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [images, setImages] = useState(() => pickDistinct(SLOT_COUNT));

  // Each image slot rotates independently, on its own random timer, so all
  // three never change in lockstep.
  useEffect(() => {
    const timeouts = [];

    const scheduleSlot = (index) => {
      timeouts[index] = setTimeout(() => {
        setImages((prev) => {
          const others = prev.filter((_, i) => i !== index);
          const pool = ALL_PHOTOS.filter(
            (p) => p !== prev[index] && !others.includes(p),
          );
          const next = pool.length
            ? pool[Math.floor(Math.random() * pool.length)]
            : prev[index];
          return setAt(prev, index, next);
        });
        scheduleSlot(index);
      }, randomDelay());
    };

    for (let i = 0; i < SLOT_COUNT; i++) scheduleSlot(i);

    return () => timeouts.forEach(clearTimeout);
  }, []);

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
          <CrossfadePhoto
            src={images[0]}
            alt="Global Friends community moment"
            className="hero__img-main"
          />

          {/* Secondary image — bottom left, overlaps main */}
          <CrossfadePhoto
            src={images[1]}
            alt="Global Friends community moment"
            className="hero__img-secondary"
          />

          {/* Accent image — bottom right corner */}
          <CrossfadePhoto
            src={images[2]}
            alt="Global Friends community moment"
            className="hero__img-accent"
          />

          {/* Floating stat badge */}
          {/* <div className="hero__float-badge">
            <div className="hero__float-badge-dot" />
            <span className="hero__float-badge-text">200+ Internationals Helped</span>
          </div> */}

          {/* Second floating badge */}
          {/* <div className="hero__float-badge-2">
            <span className="hero__float-badge-icon">🌍</span>
            <div className="hero__float-badge-info">
              <span className="hero__float-badge-num">15+ Countries</span>
              <span className="hero__float-badge-sub">Represented</span>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  );
}
