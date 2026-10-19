import React, { useState } from 'react';
import { MailIcon, CheckIcon } from './Icons';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <div className="newsletter-content">
            <h3 className="newsletter-title">
              Subscribe for Our Newsletter
            </h3>
            <p className="newsletter-desc">
              Get exclusive HVAC maintenance guides, seasonal discount coupons, and local indoor air alerts sent to your inbox.
            </p>

            {subscribed ? (
              <div className="newsletter-success">
                <CheckIcon className="w-5 h-5 text-green" />
                <span>Thank you! Check your inbox for your 10% instant discount code.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="input-group-nl">
                  <MailIcon className="nl-icon" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your personal or business email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="nl-input"
                  />
                </div>
                <button type="submit" className="btn-amber-nl">
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Envelope Graphic from mockup */}
          <div className="newsletter-graphic hide-mobile">
            <div className="envelope-icon-wrap">
              <svg className="envelope-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="4" width="20" height="16" rx="3" fill="#ffffff" fillOpacity="0.15" stroke="#ffffff" strokeWidth="1.5" />
                <path d="M22 6L12 13L2 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

