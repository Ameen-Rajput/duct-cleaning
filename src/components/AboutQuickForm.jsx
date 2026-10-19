import React, { useState } from 'react';
import { CheckIcon, SparklesIcon, ShieldCheckIcon } from './Icons';

export default function AboutQuickForm({ onSuccessSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Air Duct Cleaning',
    vents: '10-15 Vents'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    if (onSuccessSubmit) {
      onSuccessSubmit(formData);
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: About Information */}
          <div className="about-content">
            <span className="section-tag">
              <SparklesIcon className="w-3.5 h-3.5 text-accent" />
              ABOUT OUR SERVICE
            </span>

            <h2 className="section-heading">
              Leading the Way in Cleaning Excellence Since 1995
            </h2>

            <p className="section-description">
              For nearly three decades, GreenCare Duct Cleaning has delivered medical-grade air purification and HVAC mechanical hygiene across homes and businesses. We combine industrial truck-mount vacuum power with friendly neighborhood care.
            </p>

            {/* Checklist with circular green icons */}
            <div className="about-checklist">
              <div className="check-item">
                <div className="check-icon-circle">
                  <CheckIcon className="w-4 h-4 text-green" />
                </div>
                <div>
                  <strong>Trained & Background Checked Staff</strong>
                  <p>Certified NADCA technicians with background clearance and rigorous safety protocols.</p>
                </div>
              </div>

              <div className="check-item">
                <div className="check-icon-circle">
                  <CheckIcon className="w-4 h-4 text-green" />
                </div>
                <div>
                  <strong>Eco-Friendly Cleaning Products</strong>
                  <p>100% botanical thyme-based disinfectants that eliminate 99.9% of bacteria and mold without harsh chemicals.</p>
                </div>
              </div>

              <div className="check-item">
                <div className="check-icon-circle">
                  <CheckIcon className="w-4 h-4 text-green" />
                </div>
                <div>
                  <strong>100% Satisfaction Guarantee</strong>
                  <p>If you don't notice fresher, clearer air and zero odor within 30 days, we return and re-clean for free.</p>
                </div>
              </div>
            </div>

            <div className="about-action">
              <a href="#services" className="btn-dark-green">
                Learn More About Us
              </a>
              <div className="satisfaction-badge-inline">
                <ShieldCheckIcon className="w-6 h-6 text-green" />
                <span>NADCA Clean Air Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Service Card */}
          <div className="about-form-wrap">
            <div className="quick-service-card shadow-lg">
              <div className="quick-service-header">
                <h3 className="quick-title">Quick Service</h3>
                <p className="quick-subtitle">Get an instant free inspection & price quote</p>
              </div>

              {submitted ? (
                <div className="form-success-box animate-fade-in">
                  <div className="success-icon-wrap">
                    <CheckIcon className="w-8 h-8 text-green" />
                  </div>
                  <h4>Request Received!</h4>
                  <p>
                    Thank you <strong>{formData.name}</strong>! One of our certified duct specialists will call you at <strong>{formData.phone}</strong> within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-reset"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quick-form">
                  <div className="form-group">
                    <label htmlFor="quick-name">Your Name</label>
                    <input
                      id="quick-name"
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quick-phone">Phone Number</label>
                    <input
                      id="quick-phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quick-email">Email Address</label>
                    <input
                      id="quick-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="quick-service">Choose Service</label>
                    <select
                      id="quick-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="form-select"
                    >
                      <option value="Residential Air Duct Cleaning">Residential Air Duct Cleaning</option>
                      <option value="Commercial HVAC Systems">Commercial HVAC Systems</option>
                      <option value="Dryer Vent Cleaning">Dryer Vent Cleaning</option>
                      <option value="Mold Remediation & Fogging">Mold Remediation & Fogging</option>
                      <option value="Furnace & AC Coil Scrub">Furnace & AC Coil Scrub</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="quick-vents">Approximate Number of Vents</label>
                    <select
                      id="quick-vents"
                      value={formData.vents}
                      onChange={(e) => setFormData({ ...formData, vents: e.target.value })}
                      className="form-select"
                    >
                      <option value="Up to 10 Vents">Up to 10 Vents (Apartment / Small Home)</option>
                      <option value="10-15 Vents">10-15 Vents (Standard 3 Bed Home)</option>
                      <option value="16-25 Vents">16-25 Vents (Large 4-5 Bed Home)</option>
                      <option value="25+ Vents">25+ Vents / Commercial Facility</option>
                    </select>
                  </div>

                  {/* Amber Submit Button matching mockup */}
                  <button type="submit" className="btn-amber-submit">
                    Submit Request
                  </button>

                  <div className="form-privacy-note">
                    🔒 We respect your privacy. No spam, ever.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

