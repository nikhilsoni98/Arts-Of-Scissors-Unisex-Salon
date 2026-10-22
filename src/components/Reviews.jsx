import React from 'react';
import { motion } from 'framer-motion';
import { SALON_DATA } from '../data/salonData';
import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="tag-badge">
            Client Words
          </div>
          <h2>
            Loved in <em>Jaipur</em>
          </h2>
        </motion.div>

        <div className="testimonials-grid" id="testimonials-grid">
          {SALON_DATA.testimonials.map((t, idx) => (
            <motion.div
              className="testimonial-card"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
              </div>
              <div className="testimonial-author">
                <b>{t.name}</b>
                <span>{t.area}</span>
                <div className="testimonial-service-tag">{t.service}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
