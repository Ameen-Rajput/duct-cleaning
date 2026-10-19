import React from 'react';
import { testimonialsData, trustedClients } from '../data/cleaningData';
import { StarIcon, SparklesIcon, ShieldCheckIcon } from './Icons';

export default function Testimonials() {
  return (
    <section id="reviews" className="testimonials-section">
      <div className="container">
        {/* Client Logos Row matching mockup */}
        <div className="trusted-brands-block">
          <span className="trusted-label">TRUSTED BY THOUSANDS OF CLIENTS</span>
          <div className="brands-logos-grid">
            {trustedClients.map((client, idx) => (
              <div key={idx} className="brand-pill">
                <ShieldCheckIcon className="w-4 h-4 text-muted" />
                <span className="brand-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="section-center-header">
          <span className="section-tag">
            <SparklesIcon className="w-3.5 h-3.5 text-accent" />
            TESTIMONIALS & REVIEWS
          </span>
          <h2 className="section-heading">
            Trusted by Thousands of Happy Clients
          </h2>
          <p className="section-sub">
            Read verified experiences from homeowners and property managers who transformed their indoor air quality.
          </p>
        </div>

        {/* Testimonials Cards Grid matching mockup */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card card-hover">
              <div className="testimonial-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <StarIcon key={i} className="star-sm text-gold" />
                ))}
              </div>

              <blockquote className="testimonial-quote">
                "{item.text}"
              </blockquote>

              <div className="testimonial-author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

