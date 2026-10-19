import React from 'react';
import { SparklesIcon, ShieldCheckIcon, StarIcon, ArrowRightIcon, CheckIcon, CalculatorIcon } from './Icons';

export default function Hero({ onOpenBooking, onOpenCalculator }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <SparklesIcon className="badge-sparkle" />
            <span>PROFESSIONAL DUCT & AIR CLEANING</span>
          </div>

          <h1 className="hero-heading animate-fade-in-up delay-1">
            Reliable Cleaning Services You Can{' '}
            <span className="heading-highlight">Trust.</span>
          </h1>

          <p className="hero-description animate-fade-in-up delay-2">
            GreenCare delivers spotless air & HVAC cleanliness with every visit — whether it's your home, office, or commercial space. Breathe pure, allergen-free air with certified negative-pressure HEPA technology.
          </p>

          {/* CTA Buttons matching mockup */}
          <div className="hero-actions animate-fade-in-up delay-3">
            <button
              onClick={() => onOpenBooking('Whole House Duct Cleaning')}
              className="btn-hero-primary"
            >
              <span>Book Now Cleaning</span>
              <ArrowRightIcon className="btn-icon" />
            </button>

            <button
              onClick={onOpenCalculator}
              className="btn-hero-secondary"
            >
              <CalculatorIcon className="w-4 h-4 text-green" />
              <span>Instant Estimate</span>
            </button>
          </div>

          {/* Key Quick Highlights */}
          <div className="hero-perks animate-fade-in-up delay-4">
            <div className="perk-item">
              <span className="perk-check"><CheckIcon /></span>
              <span>NADCA Certified</span>
            </div>
            <div className="perk-item">
              <span className="perk-check"><CheckIcon /></span>
              <span>Zero-Mess Guarantee</span>
            </div>
            <div className="perk-item">
              <span className="perk-check"><CheckIcon /></span>
              <span>Non-Toxic Sanitizer</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Collage matching the mockup */}
        <div className="hero-visual animate-fade-in">
          <div className="hero-collage-wrapper">
            {/* Primary Large Arch Mask / Circular image */}
            <div className="hero-main-circle">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
                alt="Professional HVAC Duct Technician with cleaning equipment"
                className="hero-img-main"
              />
              <div className="circle-glow"></div>
            </div>

            {/* Secondary Circular Image */}
            <div className="hero-sub-circle">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
                alt="Expert technician inspecting clean air duct vent"
                className="hero-img-sub"
              />
            </div>

            {/* Floating Experience Badge matching mockup: 25+ Years */}
            <div className="floating-badge badge-experience">
              <div className="badge-exp-number">25+</div>
              <div className="badge-exp-text">
                <strong>Years Of</strong>
                <span>Experience</span>
              </div>
            </div>

            {/* Floating Satisfaction Badge */}
            <div className="floating-badge badge-satisfaction">
              <div className="badge-icon-box">
                <ShieldCheckIcon className="w-6 h-6 text-green" />
              </div>
              <div className="badge-text-box">
                <strong>100% Guaranteed</strong>
                <span>Clean & Odorless Air</span>
              </div>
            </div>

            {/* Floating Rating Badge */}
            <div className="floating-badge badge-rating">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="star-sm" />
                ))}
              </div>
              <span className="rating-score">4.9 / 5.0 (2,400+ Reviews)</span>
            </div>

            {/* Decorative background circle rings */}
            <div className="deco-ring deco-ring-1"></div>
            <div className="deco-ring deco-ring-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
