# ✂️ Arts Of Scissors Unisex Salon – React + Vite

A premier, high-performance, responsive **React 18 + Vite** web application for **Arts Of Scissors Unisex Salon**, located on Kalwar Main Road, Sanjay Nagar, Jaipur.

---

## 🌟 What Was Done (किए गए कार्य)

1. **Converted to React (Vite):** संपूर्ण वेबसाइट को आधुनिक कंपोनेंट-बेस्ड **React + Vite** आर्किटेक्चर में बदल दिया गया है।
2. **Removed All Useless / Obsolete Files:** 
   - पुरानी 113 KB की भारी monolithic HTML फ़ाइल (`Arts Of Scissors Unisex Salon.html`), बैकअप और पुराना `server.js` पूरी तरह हटा दिया गया है।
   - सारा बेस64 डेटा हटाकर असली कंप्रेस्ड एसेट्स को `public/assets/images/` में ऑर्गनाइज़ कर दिया गया है।
3. **Best Performance & Zero Lag:**
   - प्रोडक्शन बंडल मात्र **~55 KB (gzipped)** है।
   - Vite HMR के साथ इंस्टैंट लोकल डेवलपमेंट।
4. **Enhanced User Experience:**
   - 🌓 **Dark & Light Mode Toggle:** रियल-टाइम थीम स्विचिंग।
   - ✂️ **Dual Gender Portals:** लेडीज और जेंट्स के लिए इंटरएक्टिव पोर्टल्स।
   - 💰 **Services with Pricing & Durations:** 1-क्लिक प्री-फिल बुकिंग बटन।
   - 🖼️ **Real Luxury Gallery + Lightbox:** 8 रियल हाई-डेफ़िनिशन सैलून फ़ोटोज़ + फ़िल्टर टैब्स + ज़ूम लाइटबॉक्स।
   - 💬 **Live WhatsApp Booking:** रियल-टाइम मैसेज प्रिव्यू के साथ 1-क्लिक बुकिंग।
   - 📍 **Local SEO (Jaipur):** Schema.org HairSalon structured data।

---

## 📁 Clean Project Structure (प्रोजेक्ट फ़ाइल संरचना)

```
Arts Of Scissors Unisex Salon/
├── index.html                  # Vite HTML एंट्री + SEO Meta + Schema.org
├── vite.config.js              # Vite React कॉन्फ़िगरेशन
├── package.json                # React 18, Vite 5 डिपेंडेंसीज
├── public/
│   └── assets/
│       └── images/             # ब्रांड लोगो, फेविकॉन और 8 रियल लक्ज़री फ़ोटोज़
│           ├── full.png, fav.png, face.png, helm.png
│           └── gallery-*.jpg (8 high-res photos)
├── src/
│   ├── main.jsx                # React रूट एंट्री पॉइंट
│   ├── App.jsx                 # मास्टर कंपोनेंट (स्टेट, थीम, टोस्ट)
│   ├── index.css               # संपूर्ण लक्ज़री CSS डिज़ाइन सिस्टम
│   ├── data/
│   │   └── salonData.js        # सैलून डेटा (सर्विसेज, रेट्स, फ़ोन, गैलरी, रिव्यूज)
│   └── components/
│       ├── Navbar.jsx          # नेविगेशन, थीम स्विचर व मोबाइल ड्रॉवर
│       ├── Hero.jsx            # हेडलाइन, जेंडर स्प्लिट पोर्टल्स
│       ├── Marquee.jsx         # एनिमेटेड लक्ज़री टिकर रिबन
│       ├── About.jsx           # वर्ड-बाय-वर्ड स्क्रॉल फ़िल व लाइव काउंटर्स
│       ├── Services.jsx        # कैटेगरी फ़िल्टर, रेट्स, 1-क्लिक बुक प्री-फ़िल
│       ├── Process.jsx         # 4-स्टेप कंसल्टेशन कार्ड्स
│       ├── Gallery.jsx         # फ़ोटो गैलरी + फ़ुल-स्क्रीन लाइटबॉक्स
│       ├── Reviews.jsx         # जयपुर वेरिफ़ाइड क्लाइंट टेस्टीमोनियल्स
│       ├── Booking.jsx         # स्मार्ट व्हाट्सएप बुकिंग विज़ार्ड
│       ├── Footer.jsx          # ब्रांड वॉटरमार्क व फ़ुटर लिंक्स
│       ├── FloatingWhatsApp.jsx# पल्सिंग व्हाट्सएप फ़्लोटिंग बटन
│       ├── CustomCursor.jsx    # स्मूथ मैग्नेटिक कर्सर
│       ├── ScrollProgress.jsx  # टॉप रीडिंग प्रोग्रेस बार
│       └── Toast.jsx           # इंटरएक्टिव टोस्ट नोटिफिकेशन
└── README.md                   # प्रोजेक्ट डॉक्यूमेंटेशन
```

---

## 🛠️ How to Customize (डेटा कैसे बदलें)

सभी डेटा को एक ही साफ़ फ़ाइल में रखा गया है: [`src/data/salonData.js`](file:///d:/User/Code/Arts%20Of%20Scissors%20Unisex%20Salon/src/data/salonData.js)

### 1. फ़ोन / व्हाट्सएप नंबर बदलना:
`src/data/salonData.js` में:
```javascript
phone: "919829012345",         // आपका 10-अंकों का व्हाट्सएप नंबर
phoneDisplay: "+91 98290 12345" // स्क्रीन पर दिखने वाला नंबर
```

### 2. रेट्स (Prices) या सर्विसेज जोड़ना / बदलना:
`services: [...]` लिस्ट में जाकर किसी भी सर्विस का `price`, `name` या `duration` बदल सकते हैं।

---

## 🚀 How to Run (कैसे चलाएं)

### डेवलपमेंट मोड (Live Server with Hot Reload):
```bash
npm run dev
```
ब्राउज़र में खोलें: **http://localhost:3000/**

### प्रोडक्शन बिल्ड:
```bash
npm run build
```
बिल्ड आउटपुट `dist/` फ़ोल्डर में तैयार हो जाता है, जिसे सीधे Netlify, Vercel, या किसी भी होस्टिंग पर अपलोड किया जा सकता है।
