import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [label, setLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring physics for fluid movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const targetWithLabel = e.target.closest('[data-cursor-label]');
      const clickable = e.target.closest(
        'a, button, input, select, textarea, .gallery-tile, .service-card, .portal-panel, .partner-card, .process-card, .testimonial-card'
      );

      if (targetWithLabel) {
        setIsHovered(true);
        setLabel(targetWithLabel.getAttribute('data-cursor-label') || '');
      } else if (clickable) {
        setIsHovered(true);
        setLabel('');
      } else {
        setIsHovered(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      id="custom-cursor"
      className={`glass-cursor ${isHovered ? 'hovered-glass' : ''}`}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        width: isHovered ? (label ? 80 : 54) : 12,
        height: isHovered ? (label ? 80 : 54) : 12,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      aria-hidden="true"
    >
      {isHovered && label && (
        <span className="glass-cursor-label">{label}</span>
      )}
      {isHovered && !label && (
        <span className="glass-cursor-dot" />
      )}
    </motion.div>
  );
}
