import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SALON_DATA } from '../data/salonData';
import { X } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'hair', label: 'Hair & Colour' },
    { id: 'grooming', label: 'Gents Grooming' },
    { id: 'skin', label: 'Skin & Spa' },
    { id: 'bridal', label: 'Bridal Glam' },
    { id: 'interior', label: 'Salon Interior' }
  ];

  let items = SALON_DATA.gallery;
  if (activeCategory !== 'all') {
    items = items.filter((g) => g.category === activeCategory);
  }

  return (
    <section className="gallery-section" id="gallery">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="tag-badge">
            Inside The Sanctuary
          </div>
          <h2>
            Craft &amp; <em>Transformations</em>
          </h2>
        </motion.div>

        {/* Gallery Filter Chips */}
        <div className="gallery-filters" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`gallery-filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid with Framer Motion layout */}
        <motion.div className="gallery-masonry" id="gallery-grid" layout>
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                className="gallery-tile"
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveLightbox(item)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-tile-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            id="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button
                className="lightbox-close"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close Lightbox"
              >
                <X size={26} />
              </button>
              <img src={activeLightbox.image} alt={activeLightbox.title} />
              <div className="lightbox-caption">
                <strong>{activeLightbox.title}</strong> — {activeLightbox.caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
