import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DarkServicesBanner from './components/DarkServicesBanner';
import AboutQuickForm from './components/AboutQuickForm';
import HealthCareBanner from './components/HealthCareBanner';
import ServicesTabs from './components/ServicesTabs';
import YellowCtaBanner from './components/YellowCtaBanner';
import SafetyStandards from './components/SafetyStandards';
import ProcessSteps from './components/ProcessSteps';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import DiscountPromo from './components/DiscountPromo';
import Testimonials from './components/Testimonials';
import BlogTips from './components/BlogTips';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileAppView from './components/MobileAppView';
import BookingModal from './components/BookingModal';
import DuctCostCalculator from './components/DuctCostCalculator';
import { PhoneIcon, CalculatorIcon } from './components/Icons';
import './App.css';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Residential Air Duct Cleaning');

  // Mobile phones (< 768px) get Mobile App UI; iPads, Tablets & Desktops (>= 768px) get Desktop UI
  const [isMobileScreen, setIsMobileScreen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      // Screen width < 768px = Mobile phones.
      // Screen width >= 768px = iPads, Tablets, and Desktops.
      setIsMobileScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenBooking = (serviceName) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setBookingModalOpen(true);
  };

  const handleOpenCalculator = () => {
    setCalculatorModalOpen(true);
  };

  const handleBookFromCalculator = (configSummary) => {
    setSelectedService(`Custom Estimate (${configSummary})`);
    setBookingModalOpen(true);
  };

  return (
    <div className={`duct-cleaning-app ${isMobileScreen ? 'mode-mobile-active' : 'mode-desktop-active'}`}>
      {/* Render Mobile App UI on phones (<768px) or Full Desktop Website on iPads / Laptops / Desktops (>=768px) */}
      {isMobileScreen ? (
        <div className="mobile-view-wrapper animate-fade-in">
          <MobileAppView
            onOpenBooking={handleOpenBooking}
            onOpenCalculator={handleOpenCalculator}
          />
        </div>
      ) : (
        <div className="desktop-view-wrapper animate-fade-in">
          {/* Navigation */}
          <Navbar
            onOpenBooking={handleOpenBooking}
            onOpenCalculator={handleOpenCalculator}
          />

          <main>
            {/* 1. Hero Section matching left mockup */}
            <Hero
              onOpenBooking={handleOpenBooking}
              onOpenCalculator={handleOpenCalculator}
            />

            {/* 2. Dark Green Feature Section ("Professional Cleaning Services for Every Space") */}
            <DarkServicesBanner onSelectService={handleOpenBooking} />

            {/* 3. About Us with Quick Service Quote Form */}
            <AboutQuickForm onSuccessSubmit={(data) => console.log('Quick request:', data)} />

            {/* 4. Health Care Banner ("More Than Just Cleaning, We Care") */}
            <HealthCareBanner onOpenBooking={handleOpenBooking} />

            {/* 5. Filterable Services Grid ("Offering Best Cleaning Services") */}
            <ServicesTabs onSelectService={handleOpenBooking} />

            {/* 6. Amber/Yellow CTA Banner ("Need a Custom Cleaning Plan?") */}
            <YellowCtaBanner onOpenBooking={handleOpenBooking} />

            {/* 7. Health & Safety Standards Section */}
            <SafetyStandards onOpenBooking={handleOpenBooking} />

            {/* 8. 4-Step Process Section ("Sparkling Clean in Just 4 Simple Steps") */}
            <ProcessSteps onOpenBooking={handleOpenBooking} />

            {/* 9. Interactive Before & After Slider */}
            <BeforeAfterSlider />

            {/* 10. 20% Off Promo Banner */}
            <DiscountPromo onOpenBooking={handleOpenBooking} />

            {/* 11. Customer Testimonials & Brand Logos */}
            <Testimonials />

            {/* 12. Expert Cleaning Tips & Articles */}
            <BlogTips />

            {/* 13. Newsletter Banner */}
            <Newsletter />

            {/* 14. Contact Info & Message Form */}
            <ContactSection />
          </main>

          {/* 15. Multi-column Footer */}
          <Footer onSelectService={handleOpenBooking} />

          {/* Floating Action Dock for Desktop / iPad */}
          <div className="floating-action-dock">
            <button
              onClick={handleOpenCalculator}
              className="dock-btn dock-calc"
              title="Instant Cost Calculator"
            >
              <CalculatorIcon className="w-5 h-5" />
              <span className="dock-label">Calculate Cost</span>
            </button>

            <a
              href="tel:+18004567890"
              className="dock-btn dock-phone"
              title="Call Now"
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="dock-label">Call Now</span>
            </a>
          </div>
        </div>
      )}

      {/* Shared Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />

      <DuctCostCalculator
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
        onBookWithConfig={handleBookFromCalculator}
      />
    </div>
  );
}
