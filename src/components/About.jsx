import React, { useEffect, useRef, useState } from 'react';
import { SALON_DATA } from '../data/salonData';

export default function About() {
  const statementRef = useRef(null);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [counters, setCounters] = useState(SALON_DATA.stats.map(() => 0));
  const statsSectionRef = useRef(null);

  const rawStatement =
    "Arts Of Scissors is a unisex salon in Sanjay Nagar, Jaipur, where a haircut is treated like bespoke craft. We listen first, then cut, colour and care for hair and skin with the exact same dedication, whoever sits in our chair.";
  const words = rawStatement.split(' ');

  // Word-by-word scroll highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (!statementRef.current) return;
      const rect = statementRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.min(Math.max((windowH * 0.82 - rect.top) / (rect.height + windowH * 0.35), 0), 1);
      const count = Math.floor(progress * words.length * 1.15);
      setActiveWordIndex(count);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  // Animated Counter on viewport intersection
  useEffect(() => {
    const targetEl = statsSectionRef.current;
    if (!targetEl) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);

            setCounters(
              SALON_DATA.stats.map((stat) => {
                const target = stat.number;
                const current = progress * target;
                return target % 1 !== 0 ? parseFloat(current.toFixed(1)) : Math.round(current);
              })
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounters(SALON_DATA.stats.map((s) => s.number));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(targetEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="wrap">
        <div className="tag-badge">About Our Craft</div>

        <p className="big-statement" ref={statementRef} id="about-statement">
          {words.map((word, idx) => (
            <span
              key={idx}
              className={`word-highlight ${idx <= activeWordIndex ? 'active' : ''}`}
            >
              {word}{' '}
            </span>
          ))}
        </p>

        <div className="about-grid">
          <div className="about-photo-frame">
            <img src="/assets/images/full.png" alt="Arts Of Scissors Twin Profile Mark" />
          </div>

          <div className="about-content">
            <p>
              Two profiles, one mark. Our emblem shows a woman and a man in unison, because that is our foundational philosophy: one salon, uncompromising luxury standards, for everyone.
            </p>
            <p>
              From a crisp everyday fade to multidimensional balayage, relaxing hair spas, hydra facials, and bridal makeovers — our promise is simple: you will leave looking like the finest version of yourself and genuinely feel revitalized.
            </p>
            <a className="btn btn-solid" href="#visit" style={{ marginTop: '14px' }}>
              Plan Your Visit <i>→</i>
            </a>
          </div>
        </div>

        {/* Live Animated Counter Stats */}
        <div className="stats-grid" ref={statsSectionRef}>
          {SALON_DATA.stats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <b>
                {counters[idx]}
                {stat.suffix || ''}
              </b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
