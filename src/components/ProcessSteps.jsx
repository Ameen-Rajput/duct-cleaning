import React from 'react';
import { processSteps } from '../data/cleaningData';
import { SparklesIcon, ArrowRightIcon } from './Icons';

export default function ProcessSteps({ onOpenBooking }) {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-center-header">
          <span className="section-tag">
            <SparklesIcon className="w-3.5 h-3.5 text-accent" />
            HOW IT WORKS
          </span>
          <h2 className="section-heading">
            Sparkling Clean in Just 4 Simple Steps
          </h2>
          <p className="section-sub">
            Our streamlined process makes scheduling and revitalizing your indoor air seamless and effortless.
          </p>
        </div>

        {/* 4 Steps Row matching mockup */}
        <div className="process-steps-row">
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-step-item">
              <div className="step-number-circle">
                <span className="step-num">{step.number}</span>
                <div className="step-pulse-ring"></div>
              </div>

              <div className="step-card-box">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="step-connector-arrow hide-mobile">
                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process-bottom-cta">
          <button
            onClick={() => onOpenBooking('Whole Home Cleaning Package')}
            className="btn-dark-green"
          >
            <span>Start Step 1: Request Your Free Quote</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

