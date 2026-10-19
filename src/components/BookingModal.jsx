import React, { useState } from 'react';
import { CloseIcon, CheckIcon, ShieldCheckIcon } from './Icons';

export default function BookingModal({ isOpen, onClose, initialService = 'Residential Air Duct Cleaning' }) {
  const [formData, setFormData] = useState({
    service: initialService,
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    timeSlot: 'Morning (8:00 AM - 12:00 PM)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-tag">CERTIFIED NADCA SERVICE</span>
            <h3 className="modal-title">Schedule Your Duct Cleaning</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="modal-success-body">
            <div className="success-icon-large">
              <CheckIcon className="w-10 h-10 text-green" />
            </div>
            <h3>Appointment Request Confirmed!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>! We have reserved your preferred slot for <strong>{formData.service}</strong> on <strong>{formData.date || 'your selected date'}</strong> ({formData.timeSlot}).
            </p>
            <div className="confirmation-meta">
              <span>A dispatch coordinator will text/call you at <strong>{formData.phone}</strong> 30 minutes before arrival.</span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-dark-green mt-6"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form-body">
            <div className="form-group">
              <label>Selected Service</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="form-select"
              >
                <option value="Residential Air Duct Cleaning">Residential Air Duct Cleaning ($79+)</option>
                <option value="Commercial HVAC Air Cleaning">Commercial HVAC Air Cleaning ($199+)</option>
                <option value="Dryer Vent Lint Fire Prevention">Dryer Vent Cleaning ($59)</option>
                <option value="Antimicrobial Mold & Odor Fogging">Antimicrobial Mold & Odor Fogging ($89)</option>
                <option value="Furnace & AC Coil Power Wash">Furnace & AC Coil Scrub ($119)</option>
                <option value="Custom Cleaning Package">Custom Cleaning Package</option>
              </select>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Time Slot</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="form-select"
                >
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                </select>
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Michael Scott"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Service Address / Zip</label>
                <input
                  type="text"
                  required
                  placeholder="Street address & postcode"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Special Instructions (Optional)</label>
              <textarea
                rows="2"
                placeholder="Gate code, parking notes, pets in home, or specific room requests..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="form-textarea"
              ></textarea>
            </div>

            <div className="modal-guarantee-note">
              <ShieldCheckIcon className="w-5 h-5 text-green" />
              <span>No payment required right now. Pay only after you inspect our video camera results and approve the job!</span>
            </div>

            <div className="modal-actions-row">
              <button type="button" onClick={onClose} className="btn-cancel">
                Cancel
              </button>
              <button type="submit" className="btn-confirm-booking">
                Confirm Booking Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
