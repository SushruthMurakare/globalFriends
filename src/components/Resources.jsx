import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import resources from '../data/resources.json';
import {
  FaIdCard,
  FaPassport,
  FaHome,
  FaFlagUsa,
  FaCompass,
  FaHandsHelping,
  FaCarSide,
  FaBus,
  FaShoppingBasket,
  FaMobileAlt,
  FaCloudSun,
  FaUniversity,
  FaHiking,
  FaPlaneArrival,
  FaQuestionCircle,
} from 'react-icons/fa';

const ORANGE = '#fa824c';
const BLUE = '#2d80f2';

const CATEGORY_CONFIG = {
  'Driving': { icon: FaIdCard, color: ORANGE },
  'Immigration': { icon: FaPassport, color: BLUE },
  'Housing': { icon: FaHome, color: ORANGE },
  'American Culture': { icon: FaFlagUsa, color: BLUE },
  'Culture Shock': { icon: FaCompass, color: ORANGE },
  'Counseling': { icon: FaHandsHelping, color: BLUE },
  'Buying a Car': { icon: FaCarSide, color: ORANGE },
  'Transportation': { icon: FaBus, color: BLUE },
  'Food Pantry': { icon: FaShoppingBasket, color: ORANGE },
  'Phone Plan': { icon: FaMobileAlt, color: BLUE },
  'Weather': { icon: FaCloudSun, color: ORANGE },
  'Banking': { icon: FaUniversity, color: BLUE },
  'Things To Do': { icon: FaHiking, color: ORANGE },
  'When You Get Here': { icon: FaPlaneArrival, color: BLUE },
};

const FALLBACK = { icon: FaQuestionCircle, color: ORANGE };

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

        <div className="resource-tile-grid">
          {categories.map((cat) => {
            const config = CATEGORY_CONFIG[cat] || FALLBACK;
            const Icon = config.icon;
            return (
              <div
                key={cat}
                className="resource-tile"
                onClick={() => navigate(`/resources/${encodeURIComponent(cat)}`)}
              >
                <div
                  className="resource-tile__icon"
                  style={{ background: `${config.color}1a`, color: config.color }}
                >
                  <Icon />
                </div>
                <h3 className="resource-tile__title">{cat}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
