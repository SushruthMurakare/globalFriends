import React from "react";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  // {
  //   title: 'Airport Pickups',
  //   desc: "We'll be there when you land. No more figuring out transportation alone.",
  //   image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&fit=crop&q=80',
  //   alt: 'Airport terminal with sunlight',
  //   link: null,
  // },
  {
    title: "Global Families Initiative",
    desc: "Connect with an American family for the school year and build friendships that last a lifetime.",
    image:
      "https://images.unsplash.com/photo-1542596594-649edbc13630?w=800&fit=crop&q=80",
    alt: "Diverse group of people smiling together",
    link: "/global-families",
  },
  {
    title: "Meals & Community",
    desc: "Share food, share stories. Join our weekly meals and feel at home.",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&fit=crop&q=80",
    alt: "Friends sharing a meal together",
    link: null,
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="section-label">What We Do</span>
        <h2 className="services-headline">We've Got You Covered</h2>
      </div>

      <div className="services-grid">
        {SERVICES.map((svc, i) => (
          <div
            key={i}
            className={`service-card${svc.link ? " service-card--clickable" : ""}`}
            onClick={() => svc.link && navigate(svc.link)}
          >
            <img
              src={svc.image}
              alt={svc.alt}
              className="service-card__image"
            />
            <div className="service-card__overlay" />
            <div className="service-card__content">
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
              {svc.link && (
                <span className="service-card__cta">Learn more →</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
