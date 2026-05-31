import React from 'react';

export default function GlobalFamilies() {
  return (
    <section style={{ background: 'rgba(143,196,255,.14)', padding: '104px 52px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center',
      }}>

        {/* Text */}
        <div>
          <span style={{
            display: 'inline-block',
            background: 'rgba(45,128,242,.1)', color: '#2d80f2',
            fontWeight: 800, fontSize: '.8rem', letterSpacing: '1px',
            textTransform: 'uppercase', padding: '6px 16px', borderRadius: 20,
            marginBottom: 22,
          }}>
            Global Families Initiative
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900,
            color: '#454545', lineHeight: 1.12, marginBottom: 20,
          }}>
            Find Your<br />American Family
          </h2>
          <p style={{
            color: '#666', fontSize: '1.08rem', lineHeight: 1.82,
            fontWeight: 500, marginBottom: 38,
          }}>
            Our Global Families Initiative connects international students and workers
            with welcoming American families for the school year. Build friendships
            that last a lifetime.
          </p>
          <button className="btn-blue" style={{
            background: '#2d80f2', color: 'white', border: 'none',
            borderRadius: 32, padding: '16px 38px',
            fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '1.05rem', cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(45,128,242,.3)',
          }}>
            Get Matched
          </button>
        </div>

        {/* Image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,.16)',
            height: 420,
          }}>
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800"
              alt="Family together"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', bottom: -20, right: -20,
            width: 96, height: 96, borderRadius: '50%',
            background: '#ffde00', zIndex: -1,
          }} />
          <div style={{
            position: 'absolute', top: -16, left: -16,
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(45,128,242,.2)', zIndex: -1,
          }} />
        </div>

      </div>
    </section>
  );
}
