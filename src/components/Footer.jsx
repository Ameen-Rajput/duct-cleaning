import React from 'react';
import { LeafLogo, PhoneIcon, MailIcon, MapPinIcon, ShieldCheckIcon } from './Icons';

const CURRENT_YEAR = 2026;

export default function Footer({ onSelectService }) {

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col-brand">
            <a href="#home" className="footer-logo">
              <LeafLogo className="w-9 h-9" />
              <div className="footer-logo-text">
                <span className="footer-brand-title">GreenCare</span>
                <span className="footer-brand-sub">AIR DUCT & HVAC CLEANING</span>
              </div>
            </a>

            <p className="footer-bio">
              We specialize in medical-grade negative-air duct cleaning, dryer vent fire hazard mitigation, and non-toxic indoor air sanitization for residential and commercial spaces.
            </p>

            <div className="footer-badge-box">
              <ShieldCheckIcon className="w-5 h-5 text-green" />
              <span>Certified Member of NADCA (National Air Duct Cleaners Association)</span>
            </div>

            <div className="footer-socials">
              <a href="#facebook" aria-label="Facebook">f</a>
              <a href="#twitter" aria-label="Twitter">𝕏</a>
              <a href="#instagram" aria-label="Instagram">ig</a>
              <a href="#linkedin" aria-label="LinkedIn">in</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Our Company</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#process">How It Works</a></li>
              <li><a href="#safety">Health & Safety Standards</a></li>
              <li><a href="#reviews">Customer Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#services" onClick={() => onSelectService('Residential Air Duct Cleaning')}>
                  Residential Duct Cleaning
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onSelectService('Commercial HVAC & Air Systems')}>
                  Commercial HVAC Hygiene
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onSelectService('Dryer Vent Lint & Fire Hazard Cleaning')}>
                  Dryer Vent Lint Clearing
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onSelectService('Mold Remediation & Antimicrobial Fogging')}>
                  Botanical Mold Fogging
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onSelectService('Furnace & AC Evaporator Coil Cleaning')}>
                  AC Evaporator Coil Wash
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => onSelectService('Kitchen & Chimney Exhaust Scrubbing')}>
                  Kitchen & Exhaust Hoods
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operating Hours */}
          <div className="footer-col">
            <h4 className="footer-title">Contact & Hours</h4>
            <div className="footer-contact-items">
              <div className="footer-item">
                <PhoneIcon className="footer-item-icon" />
                <div>
                  <span className="footer-item-label">Direct Phone:</span>
                  <a href="tel:+18004567890" className="footer-item-val">+1 (800) 456-7890</a>
                </div>
              </div>

              <div className="footer-item">
                <MailIcon className="footer-item-icon" />
                <div>
                  <span className="footer-item-label">Customer Support:</span>
                  <a href="mailto:support@greencareducts.com" className="footer-item-val">support@greencareducts.com</a>
                </div>
              </div>

              <div className="footer-item">
                <MapPinIcon className="footer-item-icon" />
                <div>
                  <span className="footer-item-label">Metro HQ:</span>
                  <span className="footer-item-val">452 Clean Air Blvd, Suite 300</span>
                </div>
              </div>

              <div className="footer-hours-box">
                <span className="hours-head">Service Availability:</span>
                <span className="hours-body">Monday – Sunday: 7:00 AM – 8:00 PM</span>
                <span className="hours-badge">24/7 Emergency Dispatch Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {CURRENT_YEAR} GreenCare Duct Cleaning Services Inc. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#disclaimer">Safety Disclosures</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
