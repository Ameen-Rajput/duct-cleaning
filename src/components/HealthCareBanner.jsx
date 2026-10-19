import React from 'react';
import { CheckIcon, SparklesIcon, ArrowRightIcon } from './Icons';

export default function HealthCareBanner({ onOpenBooking }) {
  return (
    <section className="care-banner-section">
      <div className="container">
        <div className="care-banner-card">
          <div className="care-banner-grid">
            {/* Left Content */}
            <div className="care-banner-content">
              <span className="care-tag">
                <SparklesIcon className="w-3.5 h-3.5" />
                DEDICATED TO EXCELLENCE
              </span>

              <h2 className="care-heading">
                More Than Just Cleaning, We Care
              </h2>

              <p className="care-desc">
                We go beyond surface-level dust removal to create healthier, fresher, and safer indoor air environments. With high-velocity suction and botanical sanitizers, we restore pure breathing comfort to your family and coworkers.
              </p>

              <div className="care-perks-list">
                <div className="care-perk">
                  <div className="care-check-icon">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span>Eco-Friendly & Non-Toxic Sanitizers</span>
                </div>
                <div className="care-perk">
                  <div className="care-check-icon">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span>Advanced High-Torque Rotary Agitators</span>
                </div>
                <div className="care-perk">
                  <div className="care-check-icon">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span>Trained & Certified NADCA Specialists</span>
                </div>
              </div>

              <div className="care-actions">
                <button
                  onClick={() => onOpenBooking('Whole HVAC Sanitization')}
                  className="btn-care-action"
                >
                  <span>Book Sanitization</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual with Arch Image & Floating 100% Badge */}
            <div className="care-visual-col">
              <div className="care-collage-box">
                <div className="care-img-main-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
                    alt="Technician carefully cleaning vent grill"
                    className="care-img-main"
                  />
                </div>

                <div className="care-img-sub-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                    alt="Happy cleaners finishing duct sanitization"
                    className="care-img-sub"
                  />
                </div>

                <div className="care-guarantee-badge">
                  <span className="guarantee-val">100%</span>
                  <span className="guarantee-label">Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
