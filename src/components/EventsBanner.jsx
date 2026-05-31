import React from 'react';

const EVENTS = [
  { icon: '☕', title: 'Tea & Talk',  sub: 'Every Friday' },
  { icon: '📖', title: 'Bible Study', sub: 'Wednesdays'   },
  { icon: '🥾', title: 'Summer Hike', sub: 'June 14'      },
];

export default function EventsBanner() {
  return (
    <section style={{ background: '#ffde00', padding: '84px 52px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <h2 style={{
          textAlign: 'center', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)',
          fontWeight: 900, color: '#454545', marginBottom: 52,
        }}>
          What's Coming Up 🎉
        </h2>

        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          {EVENTS.map((e, i) => (
            <div key={i} className="event-pill" style={{
              background: 'white', borderRadius: 22,
              padding: '32px 40px', minWidth: 210,
              boxShadow: '0 4px 18px rgba(0,0,0,.08)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
            }}>
              <span style={{ fontSize: '2.6rem' }}>{e.icon}</span>
              <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#454545' }}>{e.title}</span>
              <span style={{
                fontWeight: 700, fontSize: '.88rem', color: '#888',
                background: 'rgba(0,0,0,.06)', padding: '3px 12px', borderRadius: 12,
              }}>
                {e.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
