import React from 'react';
import { PhoneIcon, ArrowUpRightIcon, SparklesIcon } from './Icons';

export default function DarkServicesBanner({ onSelectService }) {
  const cards = [
    {
      title: 'Residential Air Ducts',
      subtitle: 'Starting from $79',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80',
      description: 'Full vent scrub, trunk line negative suction & free camera inspection.'
    },
    {
      title: 'Commercial HVAC Ducts',
      subtitle: 'Starting from $199',
      image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=700&q=80',
      description: 'Certified multi-story duct remediation with compliance certification.'
    },
    {
      title: 'Dryer Vent & Lint Clean',
      subtitle: 'Starting from $59',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=700&q=80',
      description: 'Deep snake brush lint purge to prevent fire hazards and boost speed.'
    },
    {
      title: 'Antimicrobial Air Fogging',
      subtitle: 'Starting from $89',
      image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=700&q=80',
      description: 'Organic botanical disinfectant destroys mold, pollen & musty odors.'
    }
  ];

  return (
    <section className="dark-services-section">
      <div className="container">
        <div className="dark-banner-box">
          {/* Top Row: Heading and Call Badge */}
          <div className="dark-banner-header">
            <div className="dark-banner-left">
              <span className="dark-tag">
                <SparklesIcon className="w-3.5 h-3.5" />
                WHAT WE OFFER
              </span>
              <h2 className="dark-heading">
                Professional Cleaning Services for Every Space
              </h2>
            </div>

            <div className="dark-banner-right">
              <p className="dark-desc">
                Smart air quality solutions to customize cleaning according to individual needs for cleaner, healthier air and optimal HVAC comfort.
              </p>

              <a href="tel:+18004567890" className="dark-call-badge">
                <div className="call-icon-wrap">
                  <PhoneIcon className="w-4 h-4" />
                </div>
                <div className="call-text-wrap">
                  <span className="call-sub">Talk to Duct Experts</span>
                  <strong className="call-num">+1 (800) 456-7890</strong>
                </div>
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="dark-cards-grid">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="dark-card-item"
                onClick={() => onSelectService(card.title)}
                role="button"
                tabIndex={0}
              >
                <div className="card-thumb-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-thumb-img"
                    loading="lazy"
                  />
                  <div className="card-overlay"></div>
                </div>

                <div className="card-body">
                  <div className="card-info">
                    <h3 className="card-title">{card.title}</h3>
                    <span className="card-price">{card.subtitle}</span>
                  </div>

                  <button
                    className="card-arrow-btn"
                    aria-label={`View ${card.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(card.title);
                    }}
                  >
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

