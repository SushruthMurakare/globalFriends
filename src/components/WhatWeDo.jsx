import React from 'react';

const CARDS = [
  {
    icon: '🚗',
    title: 'Airport Pickups',
    desc: "We'll be there when you land. No more figuring out rides alone.",
    accent: '#fa824c',
  },
  {
    icon: '🍽️',
    title: 'Meals & Community',
    desc: 'Share food, share stories. Join our weekly meals and feel at home.',
    accent: '#2d80f2',
  },
  {
    icon: '🎉',
    title: 'Events & Fun',
    desc: "From hiking to holiday parties, there's always something happening.",
    accent: '#fa824c',
  },
];

export default function WhatWeDo() {
  return (
    <section style={{ background: 'white', padding: '104px 52px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={{
          textAlign: 'center', color: '#fa824c',
          fontWeight: 800, fontSize: '.85rem', letterSpacing: '1.5px',
          textTransform: 'uppercase', marginBottom: 10,
        }}>
          What We Do
        </p>
        <h2 style={{
          textAlign: 'center', fontSize: 'clamp(2rem,4vw,2.8rem)',
          fontWeight: 900, color: '#454545', marginBottom: 14,
        }}>
          We've Got You Covered
        </h2>
        <p style={{
          textAlign: 'center', color: '#b5b5b5', fontSize: '1.05rem',
          fontWeight: 600, marginBottom: 58,
        }}>
          From the moment you land to every moment after
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {CARDS.map((card, i) => (
            <div key={i} className="service-card" style={{
              background: 'white', borderRadius: 22,
              padding: '40px 32px',
              boxShadow: '0 4px 28px rgba(0,0,0,.07)',
              borderTop: `5px solid ${card.accent}`,
            }}>
              <div style={{ fontSize: '2.8rem', marginBottom: 20 }}>{card.icon}</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#454545', marginBottom: 12 }}>
                {card.title}
              </h3>
              <p style={{ color: '#888', fontSize: '1rem', lineHeight: 1.75, fontWeight: 500 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
