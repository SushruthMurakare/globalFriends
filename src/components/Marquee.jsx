import React from 'react';

const ITEMS = [
  'Airport Pickups',
  'Meal Sharing',
  'Hiking Trips',
  'Tea & Talk',
  'Bible Study',
  'Global Families',
  'Cultural Events',
  'Holiday Gatherings',
  'Grocery Runs',
  'DMV Help',
];

export default function Marquee() {
  /* Duplicate items so the translateX(-50%) loop is seamless */
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
