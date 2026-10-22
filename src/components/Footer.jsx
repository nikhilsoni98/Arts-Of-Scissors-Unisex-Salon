import React from 'react';
import { SALON_DATA } from '../data/salonData';

export default function Footer() {
  const cfg = SALON_DATA.config;

  return (
    <footer>
      <div className="wrap">
        <div className="footer-watermark">{cfg.name}</div>

        <div className="footer-bottom">
          <div>
            <span>{cfg.subtag} · {cfg.address}</span>
          </div>

          <div className="footer-socials">
            <a href="#top">Back to Top ↑</a>
            <a target="_blank" rel="noopener noreferrer" href={cfg.mapsUrl}>
              Google Maps
            </a>
          </div>

          <div>
            <span>
              &copy; {new Date().getFullYear()} {cfg.name}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
