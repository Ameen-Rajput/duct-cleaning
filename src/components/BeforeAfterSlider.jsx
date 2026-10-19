import React, { useState } from 'react';
import { SparklesIcon, CheckIcon } from './Icons';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: 'Main HVAC Trunk Line & Return Vent',
      location: 'Residential 4-Bed Home (10 Years Uncleaned)',
      beforeImg: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1000&q=80',
      findings: 'Heavy accumulation of pet dander, drywall dust, and allergens. Airflow improved by 42% after cleaning.'
    },
    {
      title: 'Laundry Dryer Vent Exhaust Duct',
      location: 'Single Family Residence',
      beforeImg: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1000&q=80',
      findings: 'Severe fire-hazard lint blockages completely eliminated. Clothes drying cycle reduced from 70 mins to 32 mins.'
    },
    {
      title: 'Furnace Evaporator Coil & Blower Wheel',
      location: 'Commercial Medical Suite',
      beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      afterImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
      findings: 'Microbial mold spores and biofilm neutralized with hospital-grade disinfectant. Electric draw dropped 22%.'
    }
  ];

  const current = cases[activeCase];

  return (
    <section className="before-after-section">
      <div className="container">
        <div className="section-center-header">
          <span className="section-tag">
            <SparklesIcon className="w-3.5 h-3.5 text-accent" />
            REAL RESULTS
          </span>
          <h2 className="section-heading">
            See the Difference: Before & After
          </h2>
          <p className="section-sub">
            Drag the interactive slider below to inspect actual video camera captures from our recent client projects.
          </p>

          <div className="case-selector-tabs">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`case-tab-btn ${activeCase === i ? 'active' : ''}`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="comparison-card">
          <div className="slider-wrapper">
            <div
              className="comparison-viewer"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                setSliderPosition((x / rect.width) * 100);
              }}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                setSliderPosition((x / rect.width) * 100);
              }}
            >
              {/* After Image (Background) */}
              <img
                src={current.afterImg}
                alt="After Duct Cleaning"
                className="comparison-img after-img"
              />
              <span className="comparison-badge badge-after">AFTER CLEANING</span>

              {/* Before Image (Clipped overlay) */}
              <div
                className="comparison-clip"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.beforeImg}
                  alt="Before Duct Cleaning"
                  className="comparison-img before-img"
                />
                <span className="comparison-badge badge-before">BEFORE CLEANING</span>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="slider-divider"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="slider-handle">
                  <span>◀ ▶</span>
                </div>
              </div>
            </div>
          </div>

          <div className="comparison-details">
            <div className="details-header">
              <h4>{current.title}</h4>
              <span className="details-loc">{current.location}</span>
            </div>
            <p className="details-desc">{current.findings}</p>
            <div className="details-perk">
              <CheckIcon className="w-4 h-4 text-green" />
              <span>Free video camera inspection included with every whole-house service!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

