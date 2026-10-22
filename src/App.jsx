import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Partners from './components/Partners';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aos-theme') || 'light';
  });

  const [toastMessage, setToastMessage] = useState('');
  const [activeGenderFilter, setActiveGenderFilter] = useState('all');
  const [preselectedService, setPreselectedService] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aos-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3800);
  };

  const handleSelectGenderPortal = (gender) => {
    setActiveGenderFilter(gender);
  };

  const handleBookService = (serviceName) => {
    setPreselectedService(serviceName);
    const visitEl = document.getElementById('visit');
    if (visitEl) {
      visitEl.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Selected "${serviceName}". Choose your preferred time!`);
  };

  return (
    <div className="app-container">
      <ScrollProgress />
      <CustomCursor />
      <Preloader />

      <Navbar currentTheme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero onSelectGenderPortal={handleSelectGenderPortal} />
        <Marquee />
        <About />
        <Services
          activeGenderFilter={activeGenderFilter}
          onBookService={handleBookService}
        />
        <Process />
        <Partners />
        <Gallery />
        <Reviews />
        <Booking
          preselectedService={preselectedService}
          onShowToast={showToast}
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <Toast message={toastMessage} />
    </div>
  );
}
