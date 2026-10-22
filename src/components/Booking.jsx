import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SALON_DATA } from '../data/salonData';
import { MapPin, Clock, Phone, MessageSquare, ArrowRight, Check } from 'lucide-react';

export default function Booking({ preselectedService, onShowToast }) {
  const cfg = SALON_DATA.config;
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    gender: 'Ladies Studio',
    service: '',
    date: todayStr,
    time: '11:00',
    notes: ''
  });

  // When a service is clicked from the Services section
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService
      }));
    }
  }, [preselectedService]);

  const timeSlots = ['10:00', '13:00', '16:00', '19:30', '21:00'];
  const timeSlotLabels = {
    '10:00': '10:00 AM',
    '13:00': '01:00 PM',
    '16:00': '04:00 PM',
    '19:30': '07:30 PM',
    '21:00': '09:00 PM'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSlotClick = (slot) => {
    setFormData((prev) => ({ ...prev, time: slot }));
  };

  const generateWhatsAppMessage = () => {
    const name = formData.name.trim() || 'Guest';
    const gender = formData.gender;
    const service = formData.service || 'Salon Consultation';
    const date = formData.date || 'Earliest available';
    const time = formData.time || 'Flexible';
    const notes = formData.notes.trim();

    let msg = `Hello Arts Of Scissors! ✂️\n\n`;
    msg += `I would like to book an appointment:\n`;
    msg += `• Name: ${name}\n`;
    msg += `• Category: ${gender}\n`;
    msg += `• Service: ${service}\n`;
    msg += `• Preferred Date: ${date}\n`;
    msg += `• Preferred Time: ${time}\n`;
    if (notes) {
      msg += `• Note / Request: ${notes}\n`;
    }
    msg += `\nPlease confirm chair availability. Thank you!`;
    return msg;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      if (onShowToast) onShowToast('Please enter your full name.');
      return;
    }

    if (!formData.service) {
      if (onShowToast) onShowToast('Please select a service.');
      return;
    }

    const msg = generateWhatsAppMessage();
    const waUrl = `https://wa.me/${cfg.phone}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');

    if (onShowToast) {
      onShowToast('WhatsApp opening! Your booking request is ready to send.');
    }
  };

  const groups = {
    hair: 'Hair & Styling',
    skin: 'Skin & Glow',
    grooming: 'Grooming & Beard',
    bridal: 'Bridal & Makeover'
  };

  return (
    <section className="visit-section" id="visit">
      <div className="wrap visit-grid">
        {/* Salon Location & Amenities */}
        <motion.div
          className="visit-info"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="tag-badge">
            Visit Us
          </div>
          <h2>
            Book Your <em>Chair</em>
          </h2>
          <p className="lead">
            Fill in the details below and WhatsApp will open instantly with your request pre-formatted and ready to confirm.
          </p>

          <div className="info-item">
            <b>
              <MapPin size={11} style={{ display: 'inline', marginRight: '4px' }} />
              Salon Address
            </b>
            <span>{cfg.address}</span>
          </div>

          <div className="info-item">
            <b>
              <Clock size={11} style={{ display: 'inline', marginRight: '4px' }} />
              Operating Hours
            </b>
            <span>{cfg.hours}</span>
          </div>

          <div className="info-item">
            <b>
              <Phone size={11} style={{ display: 'inline', marginRight: '4px' }} />
              Direct Telephone
            </b>
            <a className="phone-link" id="salon-tel-link" href={`tel:+${cfg.phone}`}>
              {cfg.phoneDisplay}
            </a>
          </div>

          <div className="amenities-pills">
            <span className="amenity-chip"><Check size={12} /> AC Lounge</span>
            <span className="amenity-chip"><Check size={12} /> Sanitized Tools</span>
            <span className="amenity-chip"><Check size={12} /> Free High-Speed Wi-Fi</span>
            <span className="amenity-chip"><Check size={12} /> UPI / Cards Accepted</span>
            <span className="amenity-chip"><Check size={12} /> Easy Parking</span>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              className="btn btn-solid"
              id="salon-maps-link"
              target="_blank"
              rel="noopener noreferrer"
              href={cfg.mapsUrl}
            >
              Open in Google Maps <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Smart Appointment Form */}
        <motion.div
          className="booking-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h3>Reserve Your Appointment</h3>
          <p className="form-subtitle">Instant WhatsApp Confirmation · No Advance Payment Required</p>

          <form id="booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="booking-name">
                  Full Name *
                </label>
                <input
                  className="form-input"
                  id="booking-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Vikram Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="booking-gender">
                  Category
                </label>
                <select
                  className="form-select"
                  id="booking-gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Ladies Studio">Ladies Studio</option>
                  <option value="Gents Lounge">Gents Lounge</option>
                  <option value="Couple Appointment">Couple Appointment</option>
                  <option value="Kids Care">Kids Care</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="booking-service">
                Service Desired *
              </label>
              <select
                className="form-select"
                id="booking-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a Service
                </option>
                {Object.entries(groups).map(([catKey, catLabel]) => (
                  <optgroup key={catKey} label={catLabel}>
                    {SALON_DATA.services
                      .filter((s) => s.category === catKey)
                      .map((s) => (
                        <option key={s.id} value={`${s.name} (${s.price})`}>
                          {s.name} – {s.price}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="booking-date">
                  Preferred Date *
                </label>
                <input
                  className="form-input"
                  id="booking-date"
                  name="date"
                  type="date"
                  min={todayStr}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="booking-time">
                  Preferred Time
                </label>
                <input
                  className="form-input"
                  id="booking-time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Quick Time Slots</label>
              <div className="time-slots">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`slot-btn ${formData.time === slot ? 'selected' : ''}`}
                    onClick={() => handleSlotClick(slot)}
                  >
                    {timeSlotLabels[slot]}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="booking-notes">
                Special Requests or Hair/Skin Notes
              </label>
              <textarea
                className="form-textarea"
                id="booking-notes"
                name="notes"
                rows="2"
                placeholder="e.g. Sensitive scalp, balayage consultation, or event timing..."
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            {/* Live WhatsApp Preview Box */}
            <div className="wa-preview-box">
              <MessageSquare size={16} color="#25d366" />
              <span>
                Booking for {formData.name.trim() || '...'}:{' '}
                {formData.service ? formData.service.split(' (')[0] : '...'} on {formData.date || '...'} at{' '}
                {formData.time || '...'}
              </span>
            </div>

            <button
              className="btn btn-solid"
              type="submit"
              style={{ width: '100%', justifyContent: 'center', padding: '14px 20px' }}
            >
              Confirm on WhatsApp <ArrowRight size={15} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
