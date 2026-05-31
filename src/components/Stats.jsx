import React from 'react';

const STATS = [
  { number: '200+', label: 'Internationals Helped' },
  { number: '15+',  label: 'Countries Represented' },
  { number: '50+',  label: 'Volunteer Drivers' },
  { number: '5',    label: 'Years of Community' },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        {STATS.map((stat, i) => (
          <div key={i} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
