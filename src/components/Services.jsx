import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SALON_DATA } from '../data/salonData';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function Services({ activeGenderFilter, onBookService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  let filtered = SALON_DATA.services;

  if (activeCategory !== 'all') {
    filtered = filtered.filter((s) => s.category === activeCategory);
  }

  if (activeGenderFilter && activeGenderFilter !== 'all') {
    filtered = filtered.filter(
      (s) => s.gender === activeGenderFilter || s.gender === 'Unisex'
    );
  }

  return (
    <section className="services-section" id="services">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="tag-badge">
            What We Do
          </div>
          <h2>
            Our Curated <em>Services</em>
          </h2>
        </motion.div>

        {/* Filter Tab Buttons */}
        <div className="services-filter-bar" role="tablist">
          {SALON_DATA.categories.map((cat) => (
            <button
              key={cat.id}
              className={`service-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services List with Framer Motion AnimatePresence */}
        <motion.div
          className="services-container"
          id="services-list"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '36px', color: 'var(--ink-muted)' }}
              >
                <p>No services match the current filter. Explore our full menu above.</p>
              </motion.div>
            ) : (
              filtered.map((service, idx) => {
                const num = String(idx + 1).padStart(2, '0');
                return (
                  <motion.div
                    className="service-card"
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    data-service-id={service.id}
                  >
                    <div className="service-index">{num}</div>

                    <div className="service-name">
                      <h3>{service.name}</h3>
                      <span className="service-gender-tag">{service.gender}</span>
                    </div>

                    <div className="service-desc">{service.description}</div>

                    <div className="service-meta">
                      <span className="duration">
                        <Clock size={12} /> {service.duration}
                      </span>
                      {service.popular && (
                        <span style={{ color: 'var(--gold-primary)', fontWeight: 600, fontSize: '10.5px' }}>
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="service-price">{service.price}</div>

                    <div className="service-book-action">
                      <button
                        type="button"
                        onClick={() => onBookService(service.name)}
                        title={`Book ${service.name}`}
                        aria-label={`Book ${service.name}`}
                      >
                        <ArrowUpRight size={17} />
                      </button>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
