# 🍃 GreenCare - Professional Air Duct & HVAC Cleaning Platform

> **Modern, High-Converting Commercial & Residential Air Quality Service Web Application**  
> Built with **React 19**, **Vite 8**, and **Pure Optimized CSS**. Features an intelligent **Dual-Experience UI Architecture** (Native On-Demand Mobile App for smartphones + Luxury Corporate Landing Page for iPads, Tablets & Desktops).

---

## 📌 Table of Contents
1. [Project Overview & Purpose (Maqsad)](#-1-project-overview--purpose-maqsad)
2. [Key Benefits (Fawaid)](#-2-key-benefits-fawaid)
3. [Dual-Experience Architecture (Sab Se Bada Feature)](#-3-dual-experience-architecture)
4. [Component & Section Breakdown](#-4-complete-feature--section-walkthrough)
5. [Interactive Utilities & Conversion Tools](#-5-interactive-utilities--tools)
6. [Tech Stack & Performance Metrics](#-6-tech-stack--performance)
7. [Installation & Development Guide](#-7-installation--setup)
8. [Future Roadmap & Business Integrations](#-8-future-roadmap--business-use)

---
-----WEBSITE OVERVIEW-----
## 🎯 1. Project Overview & Purpose (Maqsad)

### Real-World Business Context:
Gharon aur commercial buildings ke central AC aur heating systems (HVAC) ke air ducts waqt ke sath mitti, dhool, mold spores (phafondi), pet dander, aur laundry dryer lint se clog ho jaate hain. Is se 3 baray maslay paida hotay hain:
1. **Health Issues:** Kharab indoor air quality se bachon aur baron ko saans aur seasonal allergies hoti hain.
2. **High Electric Bills:** Clogged air filters aur dirty coils ki wajah se AC par double load parta hai, jis se bijli ka bill 20%–30% barh jata hai.
3. **Fire Hazards:** Dryer exhaust ducts mein phansa lint residential aag (house fires) ka sab se bara sabab banta hai.

### Website Ka Maqsad:
Yeh platform aik **24/7 Digital Sales Engine** ke tor par design kiya gaya hai jo:
- Customer ko hawa saaf karwane ki ahmiyat samjhata hai.
- Video camera inspection ke zariye live proof dikhata hai.
- Transparent price calculator aur instant appointment booking ke zariye traffic ko paying clients mein convert karta hai.

---

## 💎 2. Key Benefits (Fawaid)

### 🏢 Business Owner Ke Fawaid:
- **Maximum Conversion Rate:** Har section mein context-aware action buttons ("Book Now", "Instant Estimate", "Call Hotline").
- **Zero-Friction Lead Generation:** Client ko rate puchne ke liye call karne ki zaroorat nahi; wo khud interactive calculator se price calculate karke order place karta hai.
- **Audience-Specific Targeting:** Mobile users ko app-like convenience milti hai jabke corporate managers (offices, schools, hospitals) ko iPad/Desktop par official agency design milta hai.
- **High Trust Factor:** Certified NADCA standards, EPA compliance, 25+ years badge, aur real before/after visual proof.

### 🏠 Customer Ke Fawaid:
- **Transparent Pricing:** Koi hidden fee nahi; starting prices ($59, $79, $199) saaf dikhai deti hain.
- **Instant Cost Calculation:** Vents ki taadad (slider) aur property size ke hisab se live rate milta hai.
- **Convenient Scheduling:** Preferred date aur time slot (Morning, Afternoon, Evening) apni marzi se select karne ki sahulat.
- **Financial Incentive:** First-time customer ke liye **20% Off coupon code (`CLEAN20`)** with 1-click copy feature.

---

## 📱 3. Dual-Experience Architecture

Yeh website responsive screen size ko detect karke 2 mukhtalif interfaces render karti hai:

```
                            [ Screen Size Check ]
                                      │
                   ┌──────────────────┴──────────────────┐
                   ▼                                     ▼
      Mobile Devices (< 768px)               iPads, Tablets & Desktops (>= 768px)
   ┌─────────────────────────────┐        ┌──────────────────────────────────────┐
   │ Native On-Demand Service App│        │ Full Corporate Agency Landing Page   │
   │ (Urban Company / Uber Style)│        │ (Comprehensive High-Ticket Pitch)    │
   └─────────────────────────────┘        └──────────────────────────────────────┘
```

### 1. Mobile Phone View (`< 768px`):
- **Location Selector Bar:** Top location indicator (`2218 Baker Street...`) with delivery subtext.
- **Notification & Cart Header:** Notification bell (unread indicator) + Cart icon with counter badge.
- **Search Bar with Filters:** Search input jo real-time service filtering karta hai.
- **Hero Carousel Banner:** Emerald green gradient card with 30-min instant service badges aur technician photo.
- **8-Category Grid:** Duct Cleaning, AC Repair, Dryer Vent, Mold Fogging, AC Coils, Kitchen Vent, HEPA Filter, More Services.
- **Recommended For You:** Horizontal swipe cards with ratings, duration, verified badges, strikethrough price, and "Book Now" buttons.
- **Trust Badges Strip:** 4 quick guarantees (Verified Pros, Transparent Pricing, 30 Days Warranty, Live Tracking).
- **Fixed Bottom Tab Navigation:** `Home`, `Bookings`, `Support` (Call hotline), aur `Calculator`.

### 2. iPad, Tablet & Desktop View (`>= 768px`):
- Full-width hero collage with floating badges (`25+ Years Experience`, `100% Satisfaction`, `4.9 Rating`).
- Dark green feature section ("Services for Every Space") with 24/7 hotline badge.
- Interactive Before & After inspection slider.
- 4-step workflow timeline.
- Comprehensive customer review grid and multi-column rich footer.

---

## 🧩 4. Complete Feature & Section Walkthrough

| # | Section Name | Description | Key Components |
|---|--------------|-------------|----------------|
| 1 | **Top Information Bar** | Contact hotline, timings, metro service area, social links. | `PhoneIcon`, `ClockIcon`, `MapPinIcon` |
| 2 | **Sticky Navbar** | Glassmorphism blur header with brand logo & navigation. | Desktop nav links, mobile drawer, instant booking trigger |
| 3 | **Hero Showcase** | Primary value proposition & visual collage. | Arch-mask photo, floating badges, CTA button pair |
| 4 | **Dark Services Showcase** | 4 flagship services with starting price tags. | Residential Ducts, Commercial HVAC, Dryer Lint, Mold Fogging |
| 5 | **About Us & Quick Quote** | Company heritage since 1995 + lead capture form. | NADCA checkli st, Quick Service form card |
| 6 | **"More Than Just Cleaning"** | Health & eco-friendly disinfectant highlight. | Curved container, 100% guarantee badge |
| 7 | **Filterable Services Tabs** | Category-filtered service card catalog. | Category filter buttons (Residential, Commercial, Specialized) |
| 8 | **Yellow CTA Bar** | Custom cleaning plan callout. | Amber background, dark green action button |
| 9 | **Health & Safety Standards** | EPA & hospital-grade sanitization protocols. | Protective gear specialist photo, safety checklist |
| 10 | **4-Step Process** | Step-by-step workflow from quote to clean air. | Numbered circles (01 to 04), connector arrows |
| 11 | **Before & After Slider** | Interactive comparison of duct cleanliness. | Draggable touch handle, 3 specialized project cases |
| 12 | **20% Off Promo Banner** | Limited-time introductory discount. | Copyable coupon code `CLEAN20`, 20% OFF circular badge |
| 13 | **Testimonials & Trust** | Customer social proof & client logos. | 5-star ratings, author avatars, verified reviews |
| 14 | **Blog & Air Quality Tips** | Educational articles on IAQ and energy savings. | Article cards, reading times, guide links |
| 15 | **Newsletter Banner** | Email subscription for seasonal offers. | Email input, instant subscription state |
| 16 | **Contact & Location** | Office coordinates, direct channels, inquiry form. | Phone, email, address cards, 2-column form |
| 17 | **Multi-Column Footer** | Company details, service links, hours, copyright. | NADCA badge, working hours, emergency dispatch note |

---

## 🛠️ 5. Interactive Utilities & Tools

### 1. Instant Duct Cleaning Cost Calculator Modal (`DuctCostCalculator.jsx`)
- **Property Selection:** Condo / Apartment ($79 base), Single Family ($99 base), Commercial ($199 base).
- **Vents Counter Slider:** 5 to 40+ air registers ($15/vent dynamic calculation).
- **Main Air Handlers:** Single system vs Dual Zone (+$50).
- **Add-on Treatments:**
  - Dryer Vent Fire Clean (+$59)
  - Botanical Antimicrobial Fogging (+$89)
  - AC Evaporator Coil Scrub (+$119)
- **Promo Toggle:** Automatic 20% calculation discount.
- **Direct Checkout:** Passes estimated configuration directly into the Booking Modal!

### 2. Video Camera Before & After Inspection Slider (`BeforeAfterSlider.jsx`)
- Touch & mouse draggable slider with `touch-action: none` (no vertical page jitter).
- **3 Project Cases:**
  - Case 1: Main HVAC Trunk Line & Return Vent
  - Case 2: Laundry Dryer Vent Exhaust Duct
  - Case 3: Furnace Evaporator Coil & Blower Wheel
- Visual grading filters applied to simulate realistic camera inspection captures.

### 3. Online Appointment Booking Modal (`BookingModal.jsx`)
- Selected service pre-fill.
- Preferred date picker & time slots (Morning, Afternoon, Evening).
- Full contact & property address capture.
- "No payment required now — pay after video inspection" peace-of-mind guarantee.
- Animated confirmation receipt state.

---

## ⚡ 6. Tech Stack & Performance

- **Framework:** React 19 (`^19.2.8`)
- **Build Tool:** Vite 8 (`^8.3.0`)
- **Linting & Code Quality:** Oxlint (`^1.81.0`) — **0 warnings, 0 errors**
- **Styling Architecture:**
  - Pure CSS with CSS Variables (`var(--primary-dark)`, `var(--primary-green)`, etc.)
  - Fluid typography (`clamp()`) for smooth multi-device scaling
  - Zero heavy CSS framework runtime overhead
  - Strict SVG icon sizing (`15px` checkmarks, prevented icon bloating)
- **Production Build:**
  - `dist/assets/index.js` (~87 KB gzipped)
  - `dist/assets/index.css` (~10 KB gzipped)
  - Sub-second build time (`~600ms - 900ms`)

---

## 🚀 7. Installation & Setup

### Prerequisites:
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- npm or pnpm

### Steps:

1. **Clone or Open the Repository:**
   ```bash
   cd "c:/Users/Siddiqui/OneDrive/Documents/react projects/duct-cleaning"
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at: `http://localhost:5173`

4. **Run Code Quality Check (Linter):**
   ```bash
   npm run lint
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 🔮 8. Future Roadmap & Business Use

Is website ko real-world business mein scale karne ke liye mandarja zail cheezain integrate ki ja sakti hain:

1. **Backend / Database Integration:**
   - Supabase, Firebase, ya Node.js Express backend connect karke leads ko database mein save karna.
2. **Instant Notifications:**
   - WhatsApp Cloud API ya Twilio SMS connect karna taakay customer ko booking ka instant confirmation text jaye aur business owner ko lead alert milay.
3. **Email Receipts:**
   - Resend ya SendGrid ke zariye customer ko branded PDF estimate send karna.
4. **Online Payments:**
   - Stripe Elements ya PayPal SDK integrate karke appointment reservation deposit (e.g. $25) collect karna.
5. **Google Ads & Local SEO:**
   - Local business schema markup (`LocalBusiness`, `HVACService`) add karke Google Search par rank karna.

---

*Crafted with precision for GreenCare Duct & HVAC Cleaning Services.*

---

## 💎 2. Key Benefits (Fawaid)

### 🏢 Business Owner Ke Fawaid:
- **Maximum Conversion Rate:** Har section mein context-aware action buttons ("Book Now", "Instant Estimate", "Call Hotline").
- **Zero-Friction Lead Generation:** Client ko rate puchne ke liye call karne ki zaroorat nahi; wo khud interactive calculator se price calculate karke order place karta hai.
- **Audience-Specific Targeting:** Mobile users ko app-like convenience milti hai jabke corporate managers (offices, schools, hospitals) ko iPad/Desktop par official agency design milta hai.
- **High Trust Factor:** Certified NADCA standards, EPA compliance, 25+ years badge, aur real before/after visual proof.

### 🏠 Customer Ke Fawaid:
- **Transparent Pricing:** Koi hidden fee nahi; starting prices ($59, $79, $199) saaf dikhai deti hain.
- **Instant Cost Calculation:** Vents ki taadad (slider) aur property size ke hisab se live rate milta hai.
- **Convenient Scheduling:** Preferred date aur time slot (Morning, Afternoon, Evening) apni marzi se select karne ki sahulat.
- **Financial Incentive:** First-time customer ke liye **20% Off coupon code (`CLEAN20`)** with 1-click copy feature.

---

## 📱 3. Dual-Experience Architecture

Yeh website responsive screen size ko detect karke 2 mukhtalif interfaces render karti hai:

```
                            [ Screen Size Check ]
                                      │
                   ┌──────────────────┴──────────────────┐
                   ▼                                     ▼
      Mobile Devices (< 768px)               iPads, Tablets & Desktops (>= 768px)
   ┌─────────────────────────────┐        ┌──────────────────────────────────────┐
   │ Native On-Demand Service App│        │ Full Corporate Agency Landing Page   │
   │ (Urban Company / Uber Style)│        │ (Comprehensive High-Ticket Pitch)    │
   └─────────────────────────────┘        └──────────────────────────────────────┘
```

### 1. Mobile Phone View (`< 768px`):
- **Location Selector Bar:** Top location indicator (`2218 Baker Street...`) with delivery subtext.
- **Notification & Cart Header:** Notification bell (unread indicator) + Cart icon with counter badge.
- **Search Bar with Filters:** Search input jo real-time service filtering karta hai.
- **Hero Carousel Banner:** Emerald green gradient card with 30-min instant service badges aur technician photo.
- **8-Category Grid:** Duct Cleaning, AC Repair, Dryer Vent, Mold Fogging, AC Coils, Kitchen Vent, HEPA Filter, More Services.
- **Recommended For You:** Horizontal swipe cards with ratings, duration, verified badges, strikethrough price, and "Book Now" buttons.
- **Trust Badges Strip:** 4 quick guarantees (Verified Pros, Transparent Pricing, 30 Days Warranty, Live Tracking).
- **Fixed Bottom Tab Navigation:** `Home`, `Bookings`, `Support` (Call hotline), aur `Calculator`.

### 2. iPad, Tablet & Desktop View (`>= 768px`):
- Full-width hero collage with floating badges (`25+ Years Experience`, `100% Satisfaction`, `4.9 Rating`).
- Dark green feature section ("Services for Every Space") with 24/7 hotline badge.
- Interactive Before & After inspection slider.
- 4-step workflow timeline.
- Comprehensive customer review grid and multi-column rich footer.

---

## 🧩 4. Complete Feature & Section Walkthrough

| # | Section Name | Description | Key Components |
|---|--------------|-------------|----------------|
| 1 | **Top Information Bar** | Contact hotline, timings, metro service area, social links. | `PhoneIcon`, `ClockIcon`, `MapPinIcon` |
| 2 | **Sticky Navbar** | Glassmorphism blur header with brand logo & navigation. | Desktop nav links, mobile drawer, instant booking trigger |
| 3 | **Hero Showcase** | Primary value proposition & visual collage. | Arch-mask photo, floating badges, CTA button pair |
| 4 | **Dark Services Showcase** | 4 flagship services with starting price tags. | Residential Ducts, Commercial HVAC, Dryer Lint, Mold Fogging |
| 5 | **About Us & Quick Quote** | Company heritage since 1995 + lead capture form. | NADCA checklist, Quick Service form card |
| 6 | **"More Than Just Cleaning"** | Health & eco-friendly disinfectant highlight. | Curved container, 100% guarantee badge |
| 7 | **Filterable Services Tabs** | Category-filtered service card catalog. | Category filter buttons (Residential, Commercial, Specialized) |
| 8 | **Yellow CTA Bar** | Custom cleaning plan callout. | Amber background, dark green action button |
| 9 | **Health & Safety Standards** | EPA & hospital-grade sanitization protocols. | Protective gear specialist photo, safety checklist |
| 10 | **4-Step Process** | Step-by-step workflow from quote to clean air. | Numbered circles (01 to 04), connector arrows |
| 11 | **Before & After Slider** | Interactive comparison of duct cleanliness. | Draggable touch handle, 3 specialized project cases |
| 12 | **20% Off Promo Banner** | Limited-time introductory discount. | Copyable coupon code `CLEAN20`, 20% OFF circular badge |
| 13 | **Testimonials & Trust** | Customer social proof & client logos. | 5-star ratings, author avatars, verified reviews |
| 14 | **Blog & Air Quality Tips** | Educational articles on IAQ and energy savings. | Article cards, reading times, guide links |
| 15 | **Newsletter Banner** | Email subscription for seasonal offers. | Email input, instant subscription state |
| 16 | **Contact & Location** | Office coordinates, direct channels, inquiry form. | Phone, email, address cards, 2-column form |
| 17 | **Multi-Column Footer** | Company details, service links, hours, copyright. | NADCA badge, working hours, emergency dispatch note |

---

## 🛠️ 5. Interactive Utilities & Tools

### 1. Instant Duct Cleaning Cost Calculator Modal (`DuctCostCalculator.jsx`)
- **Property Selection:** Condo / Apartment ($79 base), Single Family ($99 base), Commercial ($199 base).
- **Vents Counter Slider:** 5 to 40+ air registers ($15/vent dynamic calculation).
- **Main Air Handlers:** Single system vs Dual Zone (+$50).
- **Add-on Treatments:**
  - Dryer Vent Fire Clean (+$59)
  - Botanical Antimicrobial Fogging (+$89)
  - AC Evaporator Coil Scrub (+$119)
- **Promo Toggle:** Automatic 20% calculation discount.
- **Direct Checkout:** Passes estimated configuration directly into the Booking Modal!

### 2. Video Camera Before & After Inspection Slider (`BeforeAfterSlider.jsx`)
- Touch & mouse draggable slider with `touch-action: none` (no vertical page jitter).
- **3 Project Cases:**
  - Case 1: Main HVAC Trunk Line & Return Vent
  - Case 2: Laundry Dryer Vent Exhaust Duct
  - Case 3: Furnace Evaporator Coil & Blower Wheel
- Visual grading filters applied to simulate realistic camera inspection captures.

### 3. Online Appointment Booking Modal (`BookingModal.jsx`)
- Selected service pre-fill.
- Preferred date picker & time slots (Morning, Afternoon, Evening).
- Full contact & property address capture.
- "No payment required now — pay after video inspection" peace-of-mind guarantee.
- Animated confirmation receipt state.

---

## ⚡ 6. Tech Stack & Performance

- **Framework:** React 19 (`^19.2.8`)
- **Build Tool:** Vite 8 (`^8.3.0`)
- **Linting & Code Quality:** Oxlint (`^1.81.0`) — **0 warnings, 0 errors**
- **Styling Architecture:**
  - Pure CSS with CSS Variables (`var(--primary-dark)`, `var(--primary-green)`, etc.)
  - Fluid typography (`clamp()`) for smooth multi-device scaling
  - Zero heavy CSS framework runtime overhead
  - Strict SVG icon sizing (`15px` checkmarks, prevented icon bloating)
- **Production Build:**
  - `dist/assets/index.js` (~87 KB gzipped)
  - `dist/assets/index.css` (~10 KB gzipped)
  - Sub-second build time (`~600ms - 900ms`)

---

## 🚀 7. Installation & Setup

### Prerequisites:
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- npm or pnpm

### Steps:

1. **Clone or Open the Repository:**
   ```bash
   cd "c:/Users/Siddiqui/OneDrive/Documents/react projects/duct-cleaning"
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at: `http://localhost:5173`

4. **Run Code Quality Check (Linter):**
   ```bash
   npm run lint
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

6. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 🔮 8. Future Roadmap & Business Use

Is website ko real-world business mein scale karne ke liye mandarja zail cheezain integrate ki ja sakti hain:

1. **Backend / Database Integration:**
   - Supabase, Firebase, ya Node.js Express backend connect karke leads ko database mein save karna.
2. **Instant Notifications:**
   - WhatsApp Cloud API ya Twilio SMS connect karna taakay customer ko booking ka instant confirmation text jaye aur business owner ko lead alert milay.
3. **Email Receipts:**
   - Resend ya SendGrid ke zariye customer ko branded PDF estimate send karna.
4. **Online Payments:**
   - Stripe Elements ya PayPal SDK integrate karke appointment reservation deposit (e.g. $25) collect karna.
5. **Google Ads & Local SEO:**
   - Local business schema markup (`LocalBusiness`, `HVACService`) add karke Google Search par rank karna.

---

*Crafted with precision for GreenCare Duct & HVAC Cleaning Services.*

