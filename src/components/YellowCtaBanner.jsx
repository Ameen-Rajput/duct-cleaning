import React from 'react';
import { ArrowRightIcon } from './Icons';

export default function YellowCtaBanner({ onOpenBooking }) {
  return (
    <section className="yellow-cta-section">
      <div className="container">
        <div className="yellow-banner-bar">
          <div className="yellow-banner-content">
            <h3 className="yellow-banner-title">
              Need a Custom Cleaning Plan?
            </h3>
            <p className="yellow-banner-sub">
              Get an on-site comprehensive air duct and indoor air quality audit tailored to your home or facility.
            </p>
          </div>

          <div className="yellow-banner-action">
            <button
              onClick={() => onOpenBooking('Custom Cleaning Plan')}
              className="btn-yellow-dark"
            >
              <span>Contact Us Now</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

