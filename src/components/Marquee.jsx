import React from 'react';

export default function Marquee() {
  const items = [
    'Designer Haircut',
    'Caramel Balayage',
    'Keratin Silk Smooth',
    'Hydra Glow Facial',
    'Beard Sculpting',
    'Regal Bridal Glam',
    'Herbal Hair Spa',
    'O3+ Tan Removal'
  ];

  return (
    <div className="marquee-ribbon" aria-hidden="true">
      <div className="marquee-track" id="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <React.Fragment key={idx}>
            <span>{item}</span>
            <span className="sep">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
