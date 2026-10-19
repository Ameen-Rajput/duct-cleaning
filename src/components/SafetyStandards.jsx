import React from 'react';
import { ShieldCheckIcon, CheckIcon, SparklesIcon, ArrowRightIcon } from './Icons';

export default function SafetyStandards({ onOpenBooking }) {
  const standards = [
    {
      title: 'EPA & NADCA Protocol Compliance',
      desc: 'Strict adherence to ACR NADCA Standards 2021 for assessment, cleaning, and restoration of HVAC systems.'
    },
    {
      title: 'Hospital-Grade Equipment Sanitization',
      desc: 'Every brush head, rotary whip, and vacuum hose is sterilized between jobs with medical-grade antimicrobials.'
    },
    {
      title: 'Negative Air HEPA Filtration (99.97%)',
      desc: 'Traps microscopic dust mites, dander, and mold spores down to 0.3 microns, preventing any dust from entering your living space.'
    },
    {
      title: 'Trained Health & Safety Technicians',
      desc: 'Uniformed, background-screened technicians equipped with certified PPE and carbon-monoxide detectors.'
    }
  ];

  return (
    <section id="safety" className="safety-section">
      <div className="container">
        <div className="safety-grid">
          {/* Left Column: Image with Floating Safety Badge */}
          <div className="safety-image-col">
            <div className="safety-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=900&q=80"
                alt="HVAC Specialist wearing certified protective equipment sanitizing air system"
                className="safety-img"
              />
              <div className="safety-floating-badge">
                <ShieldCheckIcon className="w-8 h-8 text-green" />
                <div>
                  <strong>EPA Certified</strong>
                  <span>Safe Indoor Air Standards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Standards Content */}
          <div className="safety-content-col">
            <span className="section-tag">
              <SparklesIcon className="w-3.5 h-3.5 text-accent" />
              OUR SAFETY IS OUR PRIORITY
            </span>

            <h2 className="section-heading">
              Following Health & Safety Standards
            </h2>

            <p className="section-description">
              Your family's respiratory health and workplace safety are non-negotiable. We deploy sealed negative-pressure containment so that not a single speck of soot, lint, or fungal spore escapes into your breathing zone.
            </p>

            <div className="safety-checklist">
              {standards.map((item, idx) => (
                <div key={idx} className="safety-check-item">
                  <div className="safety-icon-bubble">
                    <CheckIcon className="w-4 h-4 text-green" />
                  </div>
                  <div>
                    <h4 className="safety-item-title">{item.title}</h4>
                    <p className="safety-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="safety-cta-row">
              <button
                onClick={() => onOpenBooking('Air Quality & Safety Inspection')}
                className="btn-dark-green"
              >
                <span>Request Safety Inspection</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

