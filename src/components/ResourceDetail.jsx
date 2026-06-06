import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import resources from '../data/resources.json';

const URL_REGEX = /(https?:\/\/[^\s]+)/g;

function renderContent(text) {
  return text.split('\n').filter(line => line.trim()).map((line, i) => {
    const parts = line.split(URL_REGEX);
    return (
      <p key={i} className="rd-section__line">
        {parts.map((part, j) =>
          /^https?:\/\//.test(part) ? (
            <a key={j} href={part} target="_blank" rel="noopener noreferrer" className="rd-section__inline-link">
              {part}
            </a>
          ) : part
        )}
      </p>
    );
  });
}

export default function ResourceDetail() {
  const { category } = useParams();
  const navigate = useNavigate();
  const decoded = decodeURIComponent(category);
  const items = resources.filter((r) => r.category === decoded);

  return (
    <>
      <Navbar />

      <section className="rd-section">
        <button className="gf-back" onClick={() => navigate('/resources')}>
          ← Back to Resources
        </button>

        <div className="rd-header">
          <span className="section-label">{decoded}</span>
          <h1 className="rd-headline">{decoded}</h1>
        </div>

        <div className="rd-grid">
          {items.map((item, i) => (
            <div key={i} className="rd-card">
              <h2 className="rd-card__title">{item.title}</h2>

              {item.description && (
                <p className="rd-card__desc">{item.description}</p>
              )}

              {/* Meta: address / hours / phone */}
              {(item.address || item.hours || item.phone) && (
                <div className="rd-card__meta">
                  {item.address && (
                    <div className="rd-card__meta-row">
                      <span className="rd-card__meta-label">Address</span>
                      <span>{item.address}</span>
                    </div>
                  )}
                  {item.hours && (
                    <div className="rd-card__meta-row">
                      <span className="rd-card__meta-label">Hours</span>
                      <span>{item.hours}</span>
                    </div>
                  )}
                  {item.phone && (
                    <div className="rd-card__meta-row">
                      <span className="rd-card__meta-label">Phone</span>
                      <span>{item.phone}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Sections */}
              {item.sections && item.sections.length > 0 && (
                <div className="rd-sections">
                  {item.sections.map((sec, j) => (
                    <div key={j} className="rd-section-block">
                      <h3 className="rd-section__title">{sec.title}</h3>
                      <div className="rd-section__content">
                        {renderContent(sec.content)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Links */}
              {item.links && item.links.length > 0 && (
                <div className="rd-card__links">
                  {item.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rd-card__link"
                    >
                      {link.title} →
                    </a>
                  ))}
                </div>
              )}

              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rd-card__btn"
                >
                  Visit Resource
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
