import React, { useState } from 'react';
import { 
  PhoneIcon, StarIcon, CheckIcon, ShieldCheckIcon, 
  MapPinIcon, CloseIcon, CalculatorIcon 
} from './Icons';

export default function MobileAppView({ onOpenBooking, onOpenCalculator }) {
  const [activeTab, setActiveTab] = useState('home');
  const [activeBanner, setActiveBanner] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartCount, setCartCount] = useState(1);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [location, setLocation] = useState('2218 Baker Street, London');

  // Promotional Banners Carousel data
  const banners = [
    {
      id: 1,
      tagline: 'AC not cooling?',
      headline: "We'll fix it fast.",
      badge1: 'Instant service in 30 mins',
      badge2: 'Expert technicians • Genuine parts',
      btnPrimary: 'Instant Service',
      btnSecondary: 'Schedule Service',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      tagline: 'Dusty Air Ducts?',
      headline: 'Breathe Pure Air Today.',
      badge1: 'HEPA 99.9% Negative Vacuum',
      badge2: 'NADCA Certified • Free Camera Audit',
      btnPrimary: 'Book Duct Clean',
      btnSecondary: 'Price Estimator',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      tagline: 'Dryer Fire Hazard?',
      headline: 'Lint Clean in 45 mins.',
      badge1: 'Deep snake brush purge',
      badge2: 'Cut drying times by 50%',
      btnPrimary: 'Clear Dryer Vent',
      btnSecondary: 'Learn More',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // 8 Grid Categories matching mockup
  const popularServices = [
    { id: 'house-duct', name: 'Duct Cleaning', icon: '🏠', tag: 'bestseller' },
    { id: 'ac-repair', name: 'AC Repair', icon: '❄️', tag: 'popular' },
    { id: 'dryer-vent', name: 'Dryer Vent', icon: '🌀', tag: 'safety' },
    { id: 'mold-fog', name: 'Mold Fogging', icon: '🌿', tag: 'organic' },
    { id: 'furnace-coil', name: 'AC Coils', icon: '⚙️', tag: 'save-bill' },
    { id: 'exhaust-hood', name: 'Kitchen Vent', icon: '🍳', tag: 'commercial' },
    { id: 'air-filter', name: 'HEPA Filter', icon: '💨', tag: 'hygiene' },
    { id: 'more-services', name: 'More Services', icon: '▦', tag: 'all' }
  ];

  // Recommended Services matching mockup horizontal cards
  const recommendedItems = [
    {
      id: 'rec-1',
      title: 'Whole House Duct Cleaning',
      category: 'house-duct',
      bestseller: true,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
      rating: 4.8,
      reviews: '2.3k',
      duration: '2.5 hrs',
      verified: true,
      price: '$79',
      originalPrice: '$99'
    },
    {
      id: 'rec-2',
      title: 'AC Deep Service & Repair',
      category: 'ac-repair',
      bestseller: false,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
      rating: 4.7,
      reviews: '1.8k',
      duration: '60 mins',
      verified: true,
      price: '$59',
      originalPrice: '$79'
    },
    {
      id: 'rec-3',
      title: 'Dryer Vent Lint Clearing',
      category: 'dryer-vent',
      bestseller: true,
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      reviews: '950',
      duration: '45 mins',
      verified: true,
      price: '$49',
      originalPrice: '$69'
    },
    {
      id: 'rec-4',
      title: 'Botanical Mold Fogging',
      category: 'mold-fog',
      bestseller: false,
      image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=600&q=80',
      rating: 4.9,
      reviews: '1.2k',
      duration: '40 mins',
      verified: true,
      price: '$89',
      originalPrice: '$119'
    }
  ];

  const filteredRecommended = recommendedItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookingClick = (serviceTitle) => {
    setCartCount(prev => prev + 1);
    onOpenBooking(serviceTitle);
  };

  return (
    <div className="mobile-app-shell">
      {/* 1. Header Location & Notifications Bar */}
      <header className="mobile-app-header">
        <div className="mobile-location-box">
          <div className="mobile-loc-icon">
            <MapPinIcon className="w-5 h-5 text-green" />
          </div>
          <div className="mobile-loc-text">
            <button 
              className="mobile-loc-selector"
              onClick={() => {
                const newLoc = prompt('Enter your delivery / service address:', location);
                if (newLoc) setLocation(newLoc);
              }}
            >
              <span className="mobile-loc-title">{location}</span>
              <span className="mobile-loc-arrow">▾</span>
            </button>
            <span className="mobile-loc-sub">Delivering certified service to your door</span>
          </div>
        </div>

        <div className="mobile-header-actions">
          {/* Notification Bell */}
          <button 
            className="mobile-icon-circle"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="Notifications"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className="mobile-bell-dot"></span>
          </button>

          {/* Cart / Bag Icon */}
          <button 
            className="mobile-icon-circle"
            onClick={() => onOpenBooking('Cart Checkout')}
            aria-label="Shopping Cart"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && <span className="mobile-cart-badge">{cartCount}</span>}
          </button>
        </div>
      </header>

      {/* Notifications Dropdown Modal */}
      {notificationsOpen && (
        <div className="mobile-notif-dropdown animate-scale-up">
          <div className="notif-header">
            <h4>Alerts & Offers</h4>
            <button onClick={() => setNotificationsOpen(false)}><CloseIcon className="w-4 h-4" /></button>
          </div>
          <div className="notif-item unread">
            <span className="notif-emoji">🎉</span>
            <div>
              <strong>20% Off Your First Cleaning</strong>
              <p>Use code CLEAN20 during scheduling checkout.</p>
            </div>
          </div>
          <div className="notif-item">
            <span className="notif-emoji">❄️</span>
            <div>
              <strong>Technicians Available Now</strong>
              <p>Instant dispatch available in London & Metro suburbs.</p>
            </div>
          </div>
        </div>
      )}

      {/* 2. Modern Search Bar with Filter Sliders */}
      <div className="mobile-search-wrapper">
        <div className="mobile-search-box">
          <svg className="mobile-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search for appliance, ducts or service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mobile-search-input"
          />
          {searchQuery ? (
            <button onClick={() => setSearchQuery('')} className="mobile-clear-btn">
              <CloseIcon className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={onOpenCalculator} className="mobile-filter-btn" title="Price Calculator">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" x2="4" y1="21" y2="14" />
                <line x1="4" x2="4" y1="10" y2="3" />
                <line x1="12" x2="12" y1="21" y2="12" />
                <line x1="12" x2="12" y1="8" y2="3" />
                <line x1="20" x2="20" y1="21" y2="16" />
                <line x1="20" x2="20" y1="12" y2="3" />
                <line x1="1" x2="7" y1="14" y2="14" />
                <line x1="9" x2="15" y1="8" y2="8" />
                <line x1="17" x2="23" y1="16" y2="16" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* 3. Promotional Hero Carousel matching mockup */}
      <div className="mobile-hero-carousel-wrap">
        <div className="mobile-hero-banner">
          <div className="mobile-hero-banner-content">
            <span className="mobile-banner-tagline">{banners[activeBanner].tagline}</span>
            <h2 className="mobile-banner-heading">{banners[activeBanner].headline}</h2>

            <div className="mobile-banner-perks">
              <div className="mobile-banner-perk">
                <span className="perk-bolt">⚡</span>
                <span>{banners[activeBanner].badge1}</span>
              </div>
              <div className="mobile-banner-perk">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-mint" />
                <span>{banners[activeBanner].badge2}</span>
              </div>
            </div>

            <div className="mobile-banner-btns">
              <button 
                onClick={() => onOpenBooking(banners[activeBanner].btnPrimary)}
                className="btn-mobile-instant"
              >
                <span>⚡ {banners[activeBanner].btnPrimary}</span>
              </button>
              <button 
                onClick={onOpenCalculator}
                className="btn-mobile-schedule"
              >
                <span>📅 {banners[activeBanner].btnSecondary}</span>
              </button>
            </div>
          </div>

          <div className="mobile-hero-banner-image">
            <img 
              src={banners[activeBanner].image} 
              alt="Technician Service" 
              className="mobile-banner-img"
            />
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mobile-banner-dots">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBanner(idx)}
              className={`mobile-dot ${activeBanner === idx ? 'active' : ''}`}
              aria-label={`Banner slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 4. Popular Services 8-Grid matching mockup */}
      <section className="mobile-section">
        <div className="mobile-section-head">
          <h3 className="mobile-section-title">Popular Services</h3>
          <button 
            className="mobile-see-all-btn"
            onClick={() => setSelectedCategory('all')}
          >
            See all <span>›</span>
          </button>
        </div>

        <div className="mobile-categories-grid">
          {popularServices.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                if (cat.id === 'more-services') {
                  onOpenCalculator();
                } else {
                  setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id);
                }
              }}
              className={`mobile-cat-card ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              <div className="mobile-cat-icon-wrap">
                <span className="mobile-cat-emoji">{cat.icon}</span>
              </div>
              <span className="mobile-cat-name">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 5. Recommended For You (Horizontal Cards Carousel) matching mockup */}
      <section className="mobile-section">
        <div className="mobile-section-head">
          <h3 className="mobile-section-title">Recommended for you</h3>
          <button 
            className="mobile-see-all-btn"
            onClick={() => onOpenBooking('Explore All Recommended')}
          >
            View all <span>›</span>
          </button>
        </div>

        <div className="mobile-rec-carousel">
          {filteredRecommended.map((item) => (
            <div key={item.id} className="mobile-rec-card shadow-sm">
              <div className="mobile-rec-thumb-wrap">
                <img src={item.image} alt={item.title} className="mobile-rec-img" />
                {item.bestseller && (
                  <span className="mobile-badge-bestseller">Bestseller</span>
                )}
              </div>

              <div className="mobile-rec-body">
                <h4 className="mobile-rec-title">{item.title}</h4>

                <div className="mobile-rec-meta">
                  <div className="rec-rating">
                    <StarIcon className="w-3.5 h-3.5 text-gold" />
                    <strong>{item.rating}</strong>
                    <span className="rec-reviews">({item.reviews})</span>
                  </div>
                  <span className="rec-duration">⏱ {item.duration}</span>
                </div>

                <div className="mobile-rec-verified">
                  <CheckIcon className="w-3 h-3 text-green" />
                  <span>Verified Professional</span>
                </div>

                <div className="mobile-rec-footer">
                  <div className="rec-price-box">
                    <span className="rec-price-current">{item.price}</span>
                    <span className="rec-price-original">{item.originalPrice}</span>
                  </div>
                  <button 
                    onClick={() => handleBookingClick(item.title)}
                    className="btn-rec-book"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Four Trust & Feature Badges Bar matching mockup */}
      <section className="mobile-trust-bar-section">
        <div className="mobile-trust-grid">
          <div className="mobile-trust-item">
            <div className="mobile-trust-icon-box">
              <ShieldCheckIcon className="w-5 h-5 text-green" />
            </div>
            <span className="mobile-trust-title">Verified Professionals</span>
          </div>

          <div className="mobile-trust-item">
            <div className="mobile-trust-icon-box">
              <CalculatorIcon className="w-5 h-5 text-green" />
            </div>
            <span className="mobile-trust-title">Transparent Pricing</span>
          </div>

          <div className="mobile-trust-item">
            <div className="mobile-trust-icon-box">
              <span className="badge-30-text">30</span>
            </div>
            <span className="mobile-trust-title">Up to 30 Days Warranty</span>
          </div>

          <div className="mobile-trust-item">
            <div className="mobile-trust-icon-box">
              <MapPinIcon className="w-5 h-5 text-green" />
            </div>
            <span className="mobile-trust-title">Live Tracking</span>
          </div>
        </div>
      </section>

      {/* 7. Quick Help Hotline Banner */}
      <div className="mobile-hotline-strip">
        <a href="tel:+18004567890" className="mobile-hotline-btn">
          <PhoneIcon className="w-4 h-4" />
          <span>Need Emergency Duct Service? Call Now: +1 (800) 456-7890</span>
        </a>
      </div>

      {/* 8. App-Style Bottom Fixed Navigation Bar matching mockup */}
      <nav className="mobile-bottom-nav">
        <button 
          onClick={() => setActiveTab('home')}
          className={`mobile-tab-btn ${activeTab === 'home' ? 'active' : ''}`}
        >
          <div className="mobile-tab-icon">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill={activeTab === 'home' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="mobile-tab-label">Home</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('bookings');
            onOpenBooking('My Service Bookings');
          }}
          className={`mobile-tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
        >
          <div className="mobile-tab-icon">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill={activeTab === 'bookings' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <span className="mobile-tab-label">Bookings</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('support');
            window.location.href = 'tel:+18004567890';
          }}
          className={`mobile-tab-btn ${activeTab === 'support' ? 'active' : ''}`}
        >
          <div className="mobile-tab-icon">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
          </div>
          <span className="mobile-tab-label">Support</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('account');
            onOpenCalculator();
          }}
          className={`mobile-tab-btn ${activeTab === 'account' ? 'active' : ''}`}
        >
          <div className="mobile-tab-icon">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill={activeTab === 'account' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span className="mobile-tab-label">Calculator</span>
        </button>
      </nav>
    </div>
  );
}
