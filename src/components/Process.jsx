import React from 'react';
import { motion } from 'framer-motion';
import { SALON_DATA } from '../data/salonData';

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="tag-badge">
            How A Visit Goes
          </div>
          <h2>
            Four Simple <em>Steps</em>
          </h2>
        </motion.div>

        <div className="process-grid">
          {SALON_DATA.process.map((step, idx) => (
            <motion.div
              className="process-card"
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <b className="process-step-num">{step.step}</b>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
