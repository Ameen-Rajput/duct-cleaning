import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, CheckIcon, SparklesIcon, ArrowRightIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Air Duct Cleaning',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-col">
            <span className="section-tag">
              <SparklesIcon className="w-3.5 h-3.5 text-accent" />
              GET IN TOUCH
            </span>

            <h2 className="section-heading">
              We're Here to Help You
            </h2>

            <p className="section-description">
              Have questions or need an emergency same-day inspection? Connect with our NADCA-certified technicians today.
            </p>

            <div className="contact-cards-stack">
              <div className="contact-item-card">
                <div className="contact-icon-bubble">
                  <PhoneIcon className="w-5 h-5 text-green" />
                </div>
                <div>
                  <span className="contact-label">Phone Number</span>
                  <a href="tel:+18004567890" className="contact-value">
                    +1 (800) 456-7890
                  </a>
                  <span className="contact-sub">Available 7am - 8pm Daily</span>
                </div>
              </div>

              <div className="contact-item-card">
                <div className="contact-icon-bubble">
                  <MailIcon className="w-5 h-5 text-green" />
                </div>
                <div>
                  <span className="contact-label">Email Address</span>
                  <a href="mailto:support@greencareducts.com" className="contact-value">
                    support@greencareducts.com
                  </a>
                  <span className="contact-sub">Average response time: 10 mins</span>
                </div>
              </div>

              <div className="contact-item-card">
                <div className="contact-icon-bubble">
                  <MapPinIcon className="w-5 h-5 text-green" />
                </div>
                <div>
                  <span className="contact-label">Office Address</span>
                  <span className="contact-value">
                    452 Clean Air Boulevard, Suite 300
                  </span>
                  <span className="contact-sub">Sydney & Greater Metropolitan Area</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card shadow-lg">
              <h3 className="form-card-title">Send Us a Message</h3>
              <p className="form-card-subtitle">Fill out the form below and we will get back to you promptly.</p>

              {submitted ? (
                <div className="contact-success-state animate-fade-in">
                  <div className="success-check-bubble">
                    <CheckIcon className="w-8 h-8 text-green" />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you <strong>{formData.name}</strong>. A duct specialist has received your inquiry and will contact you via <strong>{formData.phone || formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'Air Duct Cleaning', message: '' });
                    }}
                    className="btn-dark-green mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-body">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email">Your Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-service">Service Needed</label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="form-select"
                      >
                        <option value="Residential Duct Cleaning">Residential Air Duct Cleaning</option>
                        <option value="Commercial HVAC Cleaning">Commercial HVAC Cleaning</option>
                        <option value="Dryer Vent Sanitization">Dryer Vent Cleaning</option>
                        <option value="Mold Remediation Fogging">Mold Remediation & Fogging</option>
                        <option value="AC Coils & Furnace Scrub">AC Coils & Furnace Scrub</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Your Message</label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      placeholder="Tell us about your home/business, number of rooms or any specific concerns like allergies, pet odor, or recent remodeling..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-contact-submit">
                    <span>Send Message</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
