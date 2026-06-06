import React from 'react';
import announcement from '../data/announcement.json';

export default function Announcement() {
  return (
    <div className="announcement-bar">
      <div className="announcement-bar__inner">
        <span className="announcement-bar__pulse" />
        <span className="announcement-bar__label">Upcoming Event</span>
        <span className="announcement-bar__sep">·</span>
        <span className="announcement-bar__title">{announcement.title}</span>
        <span className="announcement-bar__sep">·</span>
        <span className="announcement-bar__date">{announcement.date}</span>
      </div>
    </div>
  );
}
