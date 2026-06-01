import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import resources from '../data/resources.json';

const CATEGORY_CONFIG = {
  'Driving': {
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&fit=crop&q=80',
    alt: 'Car driving on a road',
  },
  'Immigration': {
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&fit=crop&q=80',
    alt: 'Documents and passport',
  },
  'Housing': {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&fit=crop&q=80',
    alt: 'House exterior',
  },
  'American Culture': {
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&fit=crop&q=80',
    alt: 'American culture',
  },
  'Counseling': {
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&fit=crop&q=80',
    alt: 'Counseling session',
  },
  'Buying a Car': {
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&fit=crop&q=80',
    alt: 'Car dealership',
  },
  'Transportation': {
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&fit=crop&q=80',
    alt: 'Public transit bus',
  },
  'Food Pantry': {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&fit=crop&q=80',
    alt: 'Food pantry shelves',
  },
};

const FALLBACK = {
  image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&fit=crop&q=80',
  alt: 'Resource',
};

const categories = [...new Set(resources.map((r) => r.category))];

export default function Resources() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="resources-page">
        <div className="resources-page__header">
          <span className="section-label">Resources</span>
          <h1 className="resources-page__headline">Everything You Need</h1>
          <p className="resources-page__sub">
            Guides, contacts, and tools to help you settle in and thrive in Colorado.
          </p>
        </div>

        <div className="services-grid">
          {categories.map((cat) => {
            const config = CATEGORY_CONFIG[cat] || FALLBACK;
            const count = resources.filter((r) => r.category === cat).length;
            return (
              <div
                key={cat}
                className="service-card service-card--clickable"
                onClick={() => navigate(`/resources/${encodeURIComponent(cat)}`)}
              >
                <img src={config.image} alt={config.alt} className="service-card__image" />
                <div className="service-card__overlay" />
                <div className="service-card__content">
                  <h3 className="service-card__title">{cat}</h3>
                  <p className="service-card__desc">
                    {count} {count === 1 ? 'resource' : 'resources'} available
                  </p>
                  <span className="service-card__cta">Explore →</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
