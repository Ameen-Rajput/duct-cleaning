import React from 'react';
import { tipsData } from '../data/cleaningData';
import { SparklesIcon, ArrowUpRightIcon, ClockIcon } from './Icons';

export default function BlogTips() {
  return (
    <section className="tips-section">
      <div className="container">
        <div className="section-center-header">
          <span className="section-tag">
            <SparklesIcon className="w-3.5 h-3.5 text-accent" />
            EXPERT CLEANING TIPS
          </span>
          <h2 className="section-heading">
            Keep Your Space Fresh & Healthy
          </h2>
          <p className="section-sub">
            Practical advice, energy saving tips, and maintenance best practices curated by HVAC and indoor air hygiene specialists.
          </p>
        </div>

        <div className="tips-grid">
          {tipsData.map((tip) => (
            <article key={tip.id} className="tip-card card-hover">
              <div className="tip-image-wrap">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="tip-img"
                  loading="lazy"
                />
                <span className="tip-category">{tip.category}</span>
              </div>

              <div className="tip-content">
                <div className="tip-meta">
                  <ClockIcon className="w-3.5 h-3.5 text-muted" />
                  <span>{tip.date}</span>
                </div>

                <h3 className="tip-title">{tip.title}</h3>
                <p className="tip-excerpt">{tip.excerpt}</p>

                <div className="tip-footer">
                  <span className="tip-read-more">Read Full Guide</span>
                  <ArrowUpRightIcon className="w-4 h-4 text-green" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

