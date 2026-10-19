import React, { useState } from 'react';
import { CalculatorIcon, CloseIcon, ArrowRightIcon } from './Icons';

export default function DuctCostCalculator({ isOpen, onClose, onBookWithConfig }) {
  const [propertyType, setPropertyType] = useState('single');
  const [ventsCount, setVentsCount] = useState(12);
  const [mainTrunks, setMainTrunks] = useState(1);
  const [includeDryer, setIncludeDryer] = useState(true);
  const [includeFogging, setIncludeFogging] = useState(false);
  const [includeCoils, setIncludeCoils] = useState(false);
  const [applyPromo, setApplyPromo] = useState(true);

  if (!isOpen) return null;

  // Calculation logic
  let basePrice = 99; // inspection + base setup
  if (propertyType === 'apartment') basePrice = 79;
  if (propertyType === 'commercial') basePrice = 199;

  const ventCost = ventsCount * 15;
  const trunkCost = (mainTrunks - 1) * 50;
  const dryerCost = includeDryer ? 59 : 0;
  const foggingCost = includeFogging ? 89 : 0;
  const coilCost = includeCoils ? 119 : 0;

  const subtotal = basePrice + ventCost + trunkCost + dryerCost + foggingCost + coilCost;
  const discount = applyPromo ? Math.round(subtotal * 0.20) : 0;
  const total = subtotal - discount;

  const handleBook = () => {
    const summary = `${ventsCount} Vents, ${mainTrunks} Trunk lines, Total: $${total}`;
    onBookWithConfig(summary);
    onClose();
  };

  return (
    <div className="calculator-modal-backdrop" onClick={onClose}>
      <div className="calculator-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="calc-modal-header">
          <div className="calc-header-title">
            <CalculatorIcon className="w-6 h-6 text-green" />
            <div>
              <h3>Instant Duct Cleaning Cost Estimator</h3>
              <p>Transparent pricing with zero hidden surcharges</p>
            </div>
          </div>
          <button onClick={onClose} className="calc-close-btn" aria-label="Close">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="calc-modal-body">
          {/* Property Type */}
          <div className="calc-field-group">
            <label className="calc-label">Property Type</label>
            <div className="calc-chips-grid">
              <button
                type="button"
                className={`calc-chip ${propertyType === 'apartment' ? 'active' : ''}`}
                onClick={() => setPropertyType('apartment')}
              >
                Condo / Apartment
              </button>
              <button
                type="button"
                className={`calc-chip ${propertyType === 'single' ? 'active' : ''}`}
                onClick={() => setPropertyType('single')}
              >
                Single Family Home
              </button>
              <button
                type="button"
                className={`calc-chip ${propertyType === 'commercial' ? 'active' : ''}`}
                onClick={() => setPropertyType('commercial')}
              >
                Commercial Office
              </button>
            </div>
          </div>

          {/* Vents Slider */}
          <div className="calc-field-group">
            <div className="calc-slider-header">
              <label className="calc-label">Number of Air Vents / Registers</label>
              <span className="calc-slider-val">{ventsCount} Vents</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={ventsCount}
              onChange={(e) => setVentsCount(Number(e.target.value))}
              className="calc-range-slider"
            />
            <div className="calc-range-ticks">
              <span>5 Vents</span>
              <span>20 Vents</span>
              <span>40+ Vents</span>
            </div>
          </div>

          {/* Main Air Handlers / Trunks */}
          <div className="calc-field-group">
            <label className="calc-label">Main HVAC Air Trunk Units</label>
            <div className="calc-chips-grid">
              <button
                type="button"
                className={`calc-chip ${mainTrunks === 1 ? 'active' : ''}`}
                onClick={() => setMainTrunks(1)}
              >
                1 HVAC System
              </button>
              <button
                type="button"
                className={`calc-chip ${mainTrunks === 2 ? 'active' : ''}`}
                onClick={() => setMainTrunks(2)}
              >
                2 HVAC Systems (Dual Zone)
              </button>
            </div>
          </div>

          {/* Add-on Services Checkboxes */}
          <div className="calc-field-group">
            <label className="calc-label">Recommended Add-on Treatments</label>
            <div className="calc-addons-stack">
              <label className="addon-checkbox-row">
                <input
                  type="checkbox"
                  checked={includeDryer}
                  onChange={(e) => setIncludeDryer(e.target.checked)}
                />
                <div className="addon-text">
                  <strong>Dryer Vent Fire Safety Deep Clean (+$59)</strong>
                  <span>Prevents house fires and cuts drying time by 50%</span>
                </div>
              </label>

              <label className="addon-checkbox-row">
                <input
                  type="checkbox"
                  checked={includeFogging}
                  onChange={(e) => setIncludeFogging(e.target.checked)}
                />
                <div className="addon-text">
                  <strong>Botanical Antimicrobial Mold & Odor Fogging (+$89)</strong>
                  <span>100% natural thyme formula eliminates mildew spores and pet odors</span>
                </div>
              </label>

              <label className="addon-checkbox-row">
                <input
                  type="checkbox"
                  checked={includeCoils}
                  onChange={(e) => setIncludeCoils(e.target.checked)}
                />
                <div className="addon-text">
                  <strong>AC Evaporator Coil & Blower Wheel Scrub (+$119)</strong>
                  <span>Restores cooling efficiency and saves up to 25% on electric bills</span>
                </div>
              </label>
            </div>
          </div>

          {/* Discount Toggle */}
          <div className="calc-promo-toggle">
            <label className="promo-toggle-label">
              <input
                type="checkbox"
                checked={applyPromo}
                onChange={(e) => setApplyPromo(e.target.checked)}
              />
              <span className="promo-text">
                Apply First-Time Customer 20% Discount Code (CLEAN20)
              </span>
            </label>
          </div>

          {/* Total Price Display */}
          <div className="calc-total-bar">
            <div className="calc-price-breakdown">
              <span className="calc-total-label">Estimated Price:</span>
              {applyPromo && (
                <span className="calc-subtotal-strike">${subtotal}</span>
              )}
              <span className="calc-total-amount">${total}</span>
            </div>

            <button onClick={handleBook} className="btn-calc-book">
              <span>Book With This Price</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
