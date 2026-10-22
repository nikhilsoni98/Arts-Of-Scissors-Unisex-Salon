# Arts Of Scissors Unisex Salon

A premier, high-performance, and fully responsive **React 18 + Vite** web application built for **Arts Of Scissors Unisex Salon**, situated on Kalwar Main Road, Sanjay Nagar, Jaipur, Rajasthan.

---

## Overview

Arts Of Scissors Unisex Salon is a luxury hair, skin, and grooming salon catering to both men and women. The web application is engineered with modern frontend standards, delivering an ultra-fast, smooth, and aesthetically elevated experience across all desktop, tablet, and mobile devices.

- **Live Local Preview:** `http://localhost:3000/`
- **GitHub Repository:** [https://github.com/nikhilsoni98/Arts-Of-Scissors-Unisex-Salon](https://github.com/nikhilsoni98/Arts-Of-Scissors-Unisex-Salon)
- **Author:** Nikhil Soni (<nksoni649@gmail.com>)

---

## Key Features & Enhancements

### 1. Modern React 18 & Vite Architecture
- Fully modular component structure built on Vite for rapid HMR (Hot Module Replacement) and optimized production builds.
- Replaced the previous monolithic 113 KB legacy HTML document with modular, maintainable, and tree-shakeable React components.
- Lightweight production bundle (~55 KB gzipped) ensuring instant page loads and optimal Core Web Vitals.

### 2. Tailored Visual Aesthetics & Typography
- **Balanced Fluid Scaling:** Clean typography using modern Google Fonts (`Playfair Display` for editorial headings, `Plus Jakarta Sans` for clean body text), scaled harmoniously with CSS `clamp()`.
- **Dynamic Theme Switcher:** Seamless real-time switching between Luxury Cream (Light Mode) and Midnight Lounge (Dark Mode), persisted via `localStorage`.
- **Frosted Glassmorphic Cursor:** Custom magnetic pointer powered by Framer Motion spring physics that expands into a frosted transparent glass lens when hovering over interactive elements.
- **Cinematic Parallax Hero:** Ambient luxury salon background with gentle dark gradients and dual quick-access portals for the Ladies Studio and Gents Lounge.

### 3. Infinite Brand Logo Marquee ("Our Partners")
- Single-line, continuously scrolling ticker showcasing premier partner brands:
  - **L'Oréal Professionnel**
  - **Schwarzkopf Professional**
  - **Kérastase Paris**
  - **Olaplex**
  - **O3+ Professional**
  - **Dyson Supersonic Pro**
  - **Moroccanoil**
  - **Davines**

### 4. Interactive Services & 1-Click WhatsApp Booking
- Filterable service categories: **Hair & Styling**, **Skin & Glow**, **Grooming & Beard**, and **Bridal & Makeover**.
- Transparent pricing and estimated service durations.
- Direct **"Book"** buttons that automatically pre-fill the selected service and date into the interactive appointment form.
- Real-time WhatsApp message preview with instant one-click booking dispatching to salon staff.

### 5. High-Resolution Gallery & Full-Screen Lightbox
- High-fidelity photography showcasing real salon craftsmanship: precision fades, bridal styling, balayage, keratin smoothing, and salon interiors.
- Interactive category filter tabs and an accessible full-screen modal lightbox with keyboard `Escape` navigation.

### 6. Local SEO & Structured Data
- Complete Open Graph tags, canonical URLs, and mobile viewport optimization.
- Embedded JSON-LD `HairSalon` Schema.org structured metadata tailored for local Google Search indexing in Sanjay Nagar, Jhotwara, and Kalwar Road, Jaipur.

---

## Project Structure

```
Arts Of Scissors Unisex Salon/
├── index.html                  # Vite HTML entry point, SEO meta tags, and Schema.org
├── vite.config.js              # Vite configuration with React plugin
├── package.json                # Project dependencies and npm scripts
├── public/
│   └── assets/
│       └── images/             # Brand identity, favicons, and high-res photography
│           ├── full.png        # Brand signature logo
│           ├── fav.png         # Browser favicon
│           ├── face.png        # Ladies Studio portal emblem
│           ├── helm.png        # Gents Lounge portal emblem
│           ├── hero-salon-bg.jpg # Hero section parallax background
│           └── gallery-*.jpg   # High-resolution gallery assets
├── src/
│   ├── main.jsx                # Application root mounting script
│   ├── App.jsx                 # Master layout controller (state, theme, toast notifications)
│   ├── index.css               # Design system tokens, responsive layout, animations
│   ├── data/
│   │   └── salonData.js        # Centralized data store (services, rates, contacts, reviews)
│   └── components/
│       ├── Navbar.jsx          # Glassmorphic navigation bar, theme toggle & mobile drawer
│       ├── Hero.jsx            # Editorial headline, CTA buttons, and split gender portals
│       ├── Marquee.jsx         # Continuous luxury announcement ticker
│       ├── About.jsx           # Word-by-word scroll highlighting & live animated stats
│       ├── Services.jsx        # Tabbed service catalog with pricing and 1-click booking
│       ├── Process.jsx         # 4-step consultation and appointment workflow cards
│       ├── Partners.jsx        # Single-line infinite brand logo marquee ("Our Partners")
│       ├── Gallery.jsx         # Categorized image grid with full-screen lightbox modal
│       ├── Reviews.jsx         # Verified customer testimonials from Jaipur clients
│       ├── Booking.jsx         # Interactive appointment wizard with live WhatsApp preview
│       ├── Footer.jsx          # Salon hours, address, Google Maps link, and quick links
│       ├── FloatingWhatsApp.jsx# Pulsing fixed quick-action WhatsApp button
│       ├── CustomCursor.jsx    # Magnetic frosted glass pointer
│       ├── ScrollProgress.jsx  # Top reading progress indicator
│       └── Toast.jsx           # Interactive notification toast
└── README.md                   # Comprehensive project documentation
```

---

## Customization Guide

All salon details, pricing, timings, and contact numbers can be updated in a single file:  
[`src/data/salonData.js`](file:///d:/User/Code/Arts%20Of%20Scissors%20Unisex%20Salon/src/data/salonData.js)

### 1. Update Salon Phone & WhatsApp Number
Locate the `config` object in `src/data/salonData.js`:
```javascript
export const salonConfig = {
  phone: "919829012345",         // 10-digit WhatsApp phone number with country code (e.g. 91)
  phoneDisplay: "+91 98290 12345", // Formatted phone number displayed across the UI
  address: "Shop No. 1, 2, 3, Kalwar Main Road, Near Jhotwara, Sanjay Nagar, Jaipur, Rajasthan 302021",
  mapsUrl: "https://maps.app.goo.gl/fJwoBrtYCMvC8HEJ7",
  timings: "9:00 AM – 10:00 PM (All 7 Days)",
};
```

### 2. Add or Edit Services and Pricing
Edit the `services` array in `src/data/salonData.js`:
```javascript
{
  id: "hair-cut-signature",
  name: "Signature Precision Haircut",
  category: "hair",
  price: "₹350",
  duration: "30 min",
  desc: "Personalized hair architecture tailored to facial geometry, with wash and styling.",
  badge: "Bestseller"
}
```

### 3. Add or Modify Client Testimonials
Update the `reviews` array in `src/data/salonData.js` to update client feedback, ratings, and service tags.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.0 or later recommended)
- `npm` (bundled with Node.js)

### 1. Installation
Clone the repository and install the project dependencies:
```bash
git clone https://github.com/nikhilsoni98/Arts-Of-Scissors-Unisex-Salon.git
cd "Arts Of Scissors Unisex Salon"
npm install
```

### 2. Start Development Server
Run the local Vite dev server with instant Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to: **`http://localhost:3000/`**

### 3. Create Production Build
Generate an optimized production build in the `dist/` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Deployment

The generated `dist/` folder contains pure static HTML, CSS, and JavaScript assets ready for zero-configuration deployment to any modern hosting platform:

- **Vercel:** Run `vercel` in the project root or connect via GitHub.
- **Netlify:** Drag and drop the `dist/` folder into the Netlify dashboard, or configure the build command as `npm run build` with publish directory `dist`.
- **GitHub Pages:** Deploy using the `gh-pages` package or GitHub Actions.

---

## Technologies Used

- **React 18** – Modern UI component library
- **Vite 5** – Next-generation frontend build tool
- **Framer Motion** – Physics-based scroll animations and layout transitions
- **Lucide React** – Clean, modern UI icon set
- **Vanilla CSS** – Design system tokens, responsive grid layouts, glassmorphism

---

## License

This project is licensed under the MIT License. Feel free to use and adapt it for your own salon or business web application.
