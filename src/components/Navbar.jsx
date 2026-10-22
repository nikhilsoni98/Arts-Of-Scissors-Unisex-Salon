import React, { useState, useEffect } from 'react';

export default function Navbar({ currentTheme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 40);

      if (y > 300 && y > lastScrollY && !mobileMenuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header>
      <nav
        id="navbar"
        className={`${isScrolled ? 'nav-scrolled' : ''} ${isHidden ? 'nav-hidden' : ''}`}
        aria-label="Main Navigation"
      >
        <div className="wrap">
          <a className="nav-brand" href="#top" onClick={closeMobileMenu}>
            <img src="/assets/images/full.png" alt="Arts Of Scissors Logo" />
            <span>Arts Of Scissors</span>
          </a>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="nav-links">
            <a href="#about" onClick={closeMobileMenu}>
              <span>About</span>
              <span>About</span>
            </a>
            <a href="#services" onClick={closeMobileMenu}>
              <span>Services</span>
              <span>Services</span>
            </a>
            <a href="#process" onClick={closeMobileMenu}>
              <span>Process</span>
              <span>Process</span>
            </a>
            <a href="#gallery" onClick={closeMobileMenu}>
              <span>Gallery</span>
              <span>Gallery</span>
            </a>
            <a href="#reviews" onClick={closeMobileMenu}>
              <span>Reviews</span>
              <span>Reviews</span>
            </a>
            <a href="#visit" onClick={closeMobileMenu}>
              <span>Visit</span>
              <span>Visit</span>
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="theme-btn"
              id="theme-toggle"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              title={currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {currentTheme === 'dark' ? '☀️' : '🌙'}
            </button>

            <a className="btn btn-solid nav-cta" href="#visit" onClick={closeMobileMenu}>
              Book Chair <i>→</i>
            </a>

            <button
              id="mobile-toggle"
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
