import React, { useState, useEffect } from 'react';
import { PhoneIcon, ClockIcon, MapPinIcon, MenuIcon, CloseIcon, LeafLogo, SparklesIcon, CalculatorIcon } from './Icons';

export default function Navbar({ onOpenBooking, onOpenCalculator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Safety', href: '#safety' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header">
      {/* Top Bar matching mockup */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-welcome">
              <SparklesIcon className="w-3.5 h-3.5 icon-gold" />
              #1 Certified NADCA Duct & HVAC Cleaning Specialists
            </span>
          </div>
          <div className="top-bar-right">
            <div className="top-info-item">
              <PhoneIcon className="top-info-icon" />
              <div>
                <span className="top-label">Call Any Time:</span>
                <a href="tel:+18004567890" className="top-val">+1 (800) 456-7890</a>
              </div>
            </div>
            <div className="top-info-item hide-mobile">
              <ClockIcon className="top-info-icon" />
              <div>
                <span className="top-label">Mon - Sun:</span>
                <span className="top-val">7:00am - 8:00pm</span>
              </div>
            </div>
            <div className="top-info-item hide-tablet">
              <MapPinIcon className="top-info-icon" />
              <div>
                <span className="top-label">Service Area:</span>
                <span className="top-val">All Metro Suburbs</span>
              </div>
            </div>
            <div className="top-socials hide-mobile">
              <a href="#facebook" aria-label="Facebook">f</a>
              <a href="#twitter" aria-label="Twitter">𝕏</a>
              <a href="#instagram" aria-label="Instagram">ig</a>
              <a href="#linkedin" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav className={`main-nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="container main-nav-inner">
          {/* Logo */}
          <a href="#home" className="brand-logo">
            <LeafLogo className="logo-svg" />
            <div className="logo-text">
              <span className="logo-title">GreenCare</span>
              <span className="logo-sub">AIR DUCT CLEANING</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="desktop-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="nav-actions">
            <button
              onClick={onOpenCalculator}
              className="btn-calc-nav hide-mobile"
              title="Estimate duct cleaning costs"
            >
              <CalculatorIcon className="w-4 h-4" />
              <span>Cost Calculator</span>
            </button>
            <button
              onClick={() => onOpenBooking('Residential Duct Cleaning')}
              className="btn-primary-nav"
            >
              Book Now
            </button>
            {/* Mobile Hamburger */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer animate-fade-in">
            <div className="mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mobile-drawer-cta">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCalculator();
                  }}
                  className="btn-calc-full"
                >
                  <CalculatorIcon className="w-4 h-4" /> Calculate Cleaning Cost
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking('Residential Duct Cleaning');
                  }}
                  className="btn-primary-full"
                >
                  Book Cleaning Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

