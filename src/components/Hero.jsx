import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ArrowRight, PhoneCall } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function Hero({ onSelectGenderPortal }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const handlePortalClick = (e, gender) => {
    e.preventDefault();
    if (onSelectGenderPortal) {
      onSelectGenderPortal(gender);
    }
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] }
    }
  };

  return (
    <section className="hero" id="top" ref={containerRef}>
      {/* Cinematic Salon Background with Parallax */}
      <motion.div
        className="hero-bg-wrapper"
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <img
          src="/assets/images/hero-salon-bg.jpg"
          alt="Arts Of Scissors Luxury Salon Interior"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-gradient-bottom" />
      </motion.div>

      <motion.div
        className="wrap hero-content-wrap"
        style={{ opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-header">
          <motion.div className="hero-badge-pill" variants={itemVariants}>
            <span>Sanjay Nagar, Kalwar Road, Jaipur · Open Daily 9 AM – 10 PM</span>
          </motion.div>

          <motion.h1 id="hero-title" variants={itemVariants}>
            Hair, skin <br />
            &amp; the <em>art</em> of looking good.
          </motion.h1>
        </div>

        <motion.div className="hero-row" variants={itemVariants}>
          <p className="hero-description">
            One salon for both of you. Honest advice, delicate hands, surgical-grade hygiene and a comfortable chair — crafted to perfection every day.
          </p>

          <div className="hero-cta-group">
            <a className="btn btn-solid" href="#visit">
              Book Appointment <ArrowRight size={15} />
            </a>
            <a className="btn btn-glass" href="#services">
              Explore Services
            </a>
            <a
              className="btn btn-icon"
              href={`tel:+${SALON_DATA.config.phone}`}
              title="Call Salon directly"
              aria-label="Call salon"
            >
              <PhoneCall size={16} />
            </a>
            <div className="hero-proof-badge">
              <span className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </span>
              <span>4.9 (480+ Jaipur Reviews)</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Split Gender Interactive Portals */}
      <motion.div
        className="gender-split"
        aria-label="Select Studio Wing"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
      >
        <a
          className="portal-panel portal-ladies"
          href="#services"
          onClick={(e) => handlePortalClick(e, 'Ladies')}
          data-cursor-label="LADIES"
        >
          <img className="portal-img" src="/assets/images/face.png" alt="Ladies Studio Wing" />
          <div className="portal-content">
            <h3>
              Ladies Studio <span>Explore Services →</span>
            </h3>
          </div>
        </a>

        <a
          className="portal-panel portal-gents"
          href="#services"
          onClick={(e) => handlePortalClick(e, 'Gents')}
          data-cursor-label="GENTS"
        >
          <img className="portal-img" src="/assets/images/helm.png" alt="Gents Lounge Wing" />
          <div className="portal-content">
            <h3>
              Gents Lounge <span>Explore Services →</span>
            </h3>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
