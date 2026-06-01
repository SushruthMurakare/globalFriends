import React from 'react';
import team from '../data/team.json';

function formatPhone(digits) {
  const d = digits.replace(/\D/g, '');
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <span className="section-label">About Us</span>
        <p className="about-statement">
          We're a small team of passionate volunteers helping
          international students and workers feel at home in
          Colorado — one ride, one meal, one friendship at a time.
        </p>

        <div className="about-team">
          {team.map((member) => (
            <div key={member.name} className="about-card">
              <h3 className="about-card-name">{member.name}</h3>
              <p className="about-card-bio">{member.bio}</p>
              <div className="about-card-contact">
                <a href={`mailto:${member['email:']}`} className="about-card-contact-item">
                  <span className="about-contact-label">Email</span>
                  {member['email:']}
                </a>
                <span className="about-card-contact-item">
                  <span className="about-contact-label">Phone</span>
                  {formatPhone(member.phone)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
