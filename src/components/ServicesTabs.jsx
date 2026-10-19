import React, { useState } from 'react';
import { servicesData } from '../data/cleaningData';
import { ArrowUpRightIcon, StarIcon, CheckIcon, SparklesIcon } from './Icons';

export default function ServicesTabs({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'specialized', label: 'Specialized' },
  ];

  return (
    <section id="services" className="services-tabs-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-center-header">
          <span className="section-tag">
            <SparklesIcon className="w-3.5 h-3.5 text-accent" />
            OUR SERVICES
          </span>
          <h2 className="section-heading">
            Offering Best Cleaning Services.
          </h2>
          <p className="section-sub">
            From single-family home air registers to multi-story commercial air ducts, we deliver certified high-efficiency cleaning.
          </p>

          {/* Filter Pills matching mockup */}
          <div className="filter-pills-row">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`filter-pill-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-tab-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card-item card-hover"
              onClick={() => onSelectService(service.title)}
            >
              <div className="service-card-image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-img"
                  loading="lazy"
                />
                <span className="service-price-tag">
                  Starts at {service.startingPrice}
                </span>
                {service.popular && (
                  <span className="service-badge-popular">Most Popular</span>
                )}
              </div>

              <div className="service-card-content">
                <div className="service-rating-row">
                  <div className="stars-mini">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="star-xs" />
                    ))}
                  </div>
                  <span className="service-rating-val">{service.rating}</span>
                </div>

                <h3 className="service-item-title">{service.title}</h3>
                <p className="service-item-desc">{service.description}</p>

                <div className="service-features-mini">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="feature-bullet">
                      <CheckIcon className="w-3.5 h-3.5 text-green" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-footer">
                  <span className="service-footer-price">
                    Starting from <strong>{service.startingPrice}</strong>
                  </span>
                  <button
                    className="service-arrow-round"
                    aria-label={`Book ${service.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                  >
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

