import React, { useState } from 'react';
import { SparklesIcon, ArrowRightIcon, CheckIcon } from './Icons';

export default function DiscountPromo({ onOpenBooking }) {
  const [copied, setCopied] = useState(false);
  const couponCode = 'CLEAN20';

  const handleCopy = () => {
    navigator.clipboard?.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="discount-promo-section">
      <div className="container">
        <div className="promo-banner-card">
          <div className="promo-banner-grid">
            {/* Left Content */}
            <div className="promo-content">
              <span className="promo-tag">
                <SparklesIcon className="w-3.5 h-3.5" />
                LIMITED TIME OFFER
              </span>

              <h2 className="promo-heading">
                Get 20% Off On Your First Duct Cleaning
              </h2>

              <p className="promo-desc">
                Don't wait for seasonal allergies or furnace breakdowns. Claim your exclusive discount code and schedule your whole-system deep air sanitization today!
              </p>

              <div className="promo-coupon-bar">
                <span className="coupon-label">Promo Code:</span>
                <span className="coupon-code">{couponCode}</span>
                <button
                  onClick={handleCopy}
                  className="coupon-copy-btn"
                  title="Click to copy code"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-4 h-4 text-green" /> Copied!
                    </>
                  ) : (
                    'Copy Code'
                  )}
                </button>
              </div>

              <div className="promo-action">
                <button
                  onClick={() => onOpenBooking(`First Time Discount (Code: ${couponCode})`)}
                  className="btn-promo-cta"
                >
                  <span>Book Now & Save 20%</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image with 20% Off Circular Badge matching mockup */}
            <div className="promo-visual">
              <div className="promo-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80"
                  alt="Friendly technician offering cleaning discount"
                  className="promo-cleaner-img"
                />

                {/* 20% Off Badge from Mockup */}
                <div className="discount-circle-badge">
                  <span className="discount-val">20%</span>
                  <span className="discount-off">OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

