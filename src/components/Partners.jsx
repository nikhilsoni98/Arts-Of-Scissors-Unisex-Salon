import React from 'react';
import { motion } from 'framer-motion';

export default function Partners() {
  const brandLogos = [
    {
      id: 'loreal',
      name: "L'Oréal Professionnel",
      svg: (
        <svg viewBox="0 0 220 50" height="32" className="partner-logo-svg">
          <text x="50%" y="28" textAnchor="middle" fill="currentColor" fontFamily="'Playfair Display', serif" fontSize="22" fontWeight="700" letterSpacing="3">
            L'ORÉAL
          </text>
          <text x="50%" y="44" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" letterSpacing="4">
            PROFESSIONNEL PARIS
          </text>
        </svg>
      )
    },
    {
      id: 'schwarzkopf',
      name: 'Schwarzkopf Professional',
      svg: (
        <svg viewBox="0 0 220 50" height="32" className="partner-logo-svg">
          <circle cx="28" cy="25" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M22 25 Q28 16 34 25 Q28 32 22 25" fill="currentColor" />
          <text x="125" y="27" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="17" fontWeight="700" letterSpacing="1.5">
            Schwarzkopf
          </text>
          <text x="125" y="42" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" letterSpacing="3">
            PROFESSIONAL
          </text>
        </svg>
      )
    },
    {
      id: 'kerastase',
      name: 'Kérastase Paris',
      svg: (
        <svg viewBox="0 0 200 50" height="32" className="partner-logo-svg">
          <text x="50%" y="28" textAnchor="middle" fill="currentColor" fontFamily="'Playfair Display', serif" fontSize="21" fontWeight="600" letterSpacing="4">
            KÉRASTASE
          </text>
          <text x="50%" y="42" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="500" letterSpacing="5">
            PARIS
          </text>
        </svg>
      )
    },
    {
      id: 'olaplex',
      name: 'Olaplex',
      svg: (
        <svg viewBox="0 0 170 50" height="30" className="partner-logo-svg">
          <text x="50%" y="33" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="23" fontWeight="800" letterSpacing="5">
            OLAPLEX.
          </text>
        </svg>
      )
    },
    {
      id: 'o3plus',
      name: 'O3+ Professional',
      svg: (
        <svg viewBox="0 0 160 50" height="32" className="partner-logo-svg">
          <rect x="18" y="10" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="33" y="32" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="17" fontWeight="800">
            O3+
          </text>
          <text x="105" y="27" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="15" fontWeight="700" letterSpacing="1">
            PROFESSIONAL
          </text>
          <text x="105" y="40" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="7" fontWeight="600" letterSpacing="2">
            SKINCARE
          </text>
        </svg>
      )
    },
    {
      id: 'dyson',
      name: 'Dyson Professional',
      svg: (
        <svg viewBox="0 0 170 50" height="28" className="partner-logo-svg">
          <text x="50%" y="28" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.5">
            dyson
          </text>
          <text x="50%" y="42" textAnchor="middle" fill="currentColor" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" letterSpacing="3">
            PROFESSIONAL
          </text>
        </svg>
      )
    },
    {
      id: 'moroccanoil',
      name: 'Moroccanoil',
      svg: (
        <svg viewBox="0 0 200 50" height="30" className="partner-logo-svg">
          <text x="50%" y="32" textAnchor="middle" fill="currentColor" fontFamily="'Playfair Display', serif" fontSize="19" fontWeight="700" letterSpacing="4">
            MOROCCANOIL.
          </text>
        </svg>
      )
    },
    {
      id: 'davines',
      name: 'Davines',
      svg: (
        <svg viewBox="0 0 160 50" height="30" className="partner-logo-svg">
          <text x="50%" y="32" textAnchor="middle" fill="currentColor" fontFamily="'Playfair Display', serif" fontStyle="italic" fontSize="23" fontWeight="500" letterSpacing="2">
            davines
          </text>
        </svg>
      )
    }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="wrap text-center">
        <motion.div
          className="section-head text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2>Our Partners</h2>
        </motion.div>
      </div>

      {/* Single Line Infinite Logo Marquee */}
      <div className="partners-marquee-container" aria-label="Brand Partners">
        <div className="partners-marquee-track">
          {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, idx) => (
            <div className="partner-logo-item" key={`${brand.id}-${idx}`} title={brand.name}>
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
