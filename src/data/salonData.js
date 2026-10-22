/**
 * Arts Of Scissors Unisex Salon
 * Central Configuration & Content Store
 * Sanjay Nagar, Kalwar Road, Jaipur
 */

export const SALON_DATA = {
  config: {
    name: "Arts Of Scissors",
    fullName: "Arts Of Scissors Unisex Salon",
    tagline: "Hair, skin & the art of looking good.",
    subtag: "Unisex Luxury Salon · Sanjay Nagar, Jaipur",
    address: "Shop No. 1, 2, 3, Kalwar Main Road, Near Jhotwara, Sanjay Nagar, Jaipur 302021",
    hours: "Every Day, 9:00 AM – 10:00 PM",
    phone: "919829012345", // Replace with salon WhatsApp/Call number
    phoneDisplay: "+91 98290 12345",
    mapsUrl: "https://maps.app.goo.gl/fJwoBrtYCMvC8HEJ7",
    googleRating: "4.9",
    totalReviews: "480+",
    yearsInJaipur: "7+ Years of Craft"
  },

  categories: [
    { id: "all", name: "All Services" },
    { id: "hair", name: "Hair & Styling" },
    { id: "skin", name: "Skin & Glow" },
    { id: "grooming", name: "Grooming & Beard" },
    { id: "bridal", name: "Bridal & Makeover" }
  ],

  services: [
    // Hair & Styling
    {
      id: "haircut-ladies",
      name: "Designer Haircut & Styling",
      category: "hair",
      gender: "Ladies",
      duration: "45 mins",
      price: "₹499",
      description: "Face-framing layers, bob, curtain bangs or classic cut finished with a bouncy blow-dry.",
      popular: true
    },
    {
      id: "haircut-gents",
      name: "Executive Haircut & Wash",
      category: "hair",
      gender: "Gents",
      duration: "30 mins",
      price: "₹299",
      description: "Tailored fade, scissor crop or textured taper with refreshing scalp rinse and styling.",
      popular: true
    },
    {
      id: "hair-colour-global",
      name: "Global Hair Colour & Balayage",
      category: "hair",
      gender: "Unisex",
      duration: "120 mins",
      price: "₹2,499",
      description: "Ammonia-free rich shades, caramel balayage, high-definition foil highlights & gloss tone.",
      popular: true
    },
    {
      id: "hair-spa-nutri",
      name: "Deep Nourishment Hair Spa",
      category: "hair",
      gender: "Unisex",
      duration: "60 mins",
      price: "₹999",
      description: "Intense moisture repair, ozone steam infusion and soothing 20-min cranial acupressure.",
      popular: false
    },
    {
      id: "keratin-botox",
      name: "Keratin & Hair Botox Treatment",
      category: "hair",
      gender: "Unisex",
      duration: "150 mins",
      price: "₹3,499",
      description: "Eliminate frizz, seal cuticles and achieve glossy, ultra-smooth glass-hair finish for 4+ months.",
      popular: true
    },
    {
      id: "scalp-anti-dandruff",
      name: "Anti-Dandruff & Scalp Detox",
      category: "hair",
      gender: "Unisex",
      duration: "45 mins",
      price: "₹799",
      description: "Exfoliating clarifying scalp scrub, targeted anti-fungal serum & therapeutic cold mist.",
      popular: false
    },

    // Skin & Glow
    {
      id: "hydra-glow-facial",
      name: "Signature Hydra Glow Facial",
      category: "skin",
      gender: "Unisex",
      duration: "75 mins",
      price: "₹1,799",
      description: "Deep pore vacuum extraction, antioxidant infusion and cold ultrasound lymphatic drainage.",
      popular: true
    },
    {
      id: "express-cleanup",
      name: "Instant Radiance Clean-up",
      category: "skin",
      gender: "Unisex",
      duration: "35 mins",
      price: "₹699",
      description: "Steam, gentle extraction, fruit scrub exfoliation and soothing aloe hydration pack.",
      popular: false
    },
    {
      id: "detan-bleach",
      name: "O3+ Tan Removal & Brightening",
      category: "skin",
      gender: "Unisex",
      duration: "40 mins",
      price: "₹599",
      description: "Reverses sun damage, evens skin tone across face and neck with zero harsh chemicals.",
      popular: false
    },
    {
      id: "waxing-cartridge",
      name: "Hygienic RICA Waxing",
      category: "skin",
      gender: "Ladies",
      duration: "45 mins",
      price: "₹799",
      description: "Painless Italian liposoluble colophony-free wax for delicate, silky-smooth hair-free skin.",
      popular: false
    },
    {
      id: "mani-pedi-spa",
      name: "Aroma Spa Manicure & Pedicure",
      category: "skin",
      gender: "Unisex",
      duration: "60 mins",
      price: "₹1,199",
      description: "Dead sea salt soak, botanical scrub, cuticle nourishment and reflexology foot massage.",
      popular: false
    },

    // Grooming & Beard
    {
      id: "beard-sculpt-shave",
      name: "Precision Beard Sculpt & Hot Towel",
      category: "grooming",
      gender: "Gents",
      duration: "30 mins",
      price: "₹249",
      description: "Laser-sharp blade contours, hot eucalyptus towel wrap, oil therapy and soothing balm.",
      popular: true
    },
    {
      id: "head-massage-oil",
      name: "Relaxing Herbal Head Champi",
      category: "grooming",
      gender: "Unisex",
      duration: "30 mins",
      price: "₹399",
      description: "Warm Ayurvedic almond/olive oil massage targeting pressure points to relieve tension & stress.",
      popular: false
    },
    {
      id: "gents-royal-package",
      name: "Gentleman's Royal Grooming",
      category: "grooming",
      gender: "Gents",
      duration: "90 mins",
      price: "₹1,499",
      description: "Executive cut + beard sculpt + tan removal clean-up + refreshing 20-min head massage.",
      popular: true
    },

    // Bridal & Makeover
    {
      id: "bridal-hds",
      name: "Luxury HD / Airbrush Bridal Makeup",
      category: "bridal",
      gender: "Ladies",
      duration: "180 mins",
      price: "₹8,999",
      description: "Flawless waterproof finish, intricate dupatta draping, floral hair updo & luxury lash extensions.",
      popular: true
    },
    {
      id: "pre-bridal-glow",
      name: "Pre-Bridal 7-Step Glow Package",
      category: "bridal",
      gender: "Ladies",
      duration: "240 mins",
      price: "₹4,999",
      description: "Full body polish, gold radiance facial, RICA waxing, hair spa, deluxe mani-pedi & threading.",
      popular: true
    },
    {
      id: "party-makeover",
      name: "Glam Party / Sangeet Makeup",
      category: "bridal",
      gender: "Ladies",
      duration: "90 mins",
      price: "₹2,499",
      description: "Camera-ready soft smokey or dewy makeup tailored for engagements, sangeet and festive parties.",
      popular: false
    },
    {
      id: "groom-makeover",
      name: "Royal Groom Styling & Skin Prep",
      category: "bridal",
      gender: "Gents",
      duration: "90 mins",
      price: "₹2,999",
      description: "Beard styling, skin glow polishing, safa/turban prep, and camera-ready groom enhancement.",
      popular: false
    }
  ],

  process: [
    {
      step: "01",
      title: "We Listen",
      desc: "Tell us what you want, your daily lifestyle, and what challenges you face with your hair or skin."
    },
    {
      step: "02",
      title: "We Advise",
      desc: "Honest, tailored suggestions that flatter your face symmetry, skin undertone and hair texture — never pushy."
    },
    {
      step: "03",
      title: "We Craft",
      desc: "Calm, deliberate hands using sanitized surgical-grade tools and internationally acclaimed salon formulas."
    },
    {
      step: "04",
      title: "You Glow",
      desc: "A stunning reveal, styling tips for home care, and a confidence that stays with you long after you leave."
    }
  ],

  gallery: [
    {
      id: "g1",
      title: "Designer Cut & Bouncy Finish",
      category: "hair",
      image: "/assets/images/gallery-hair-cut.jpg",
      caption: "Precision haircut tailored to natural texture and face shape"
    },
    {
      id: "g2",
      title: "Gentleman's Fade & Beard Sculpt",
      category: "grooming",
      image: "/assets/images/gallery-grooming.jpg",
      caption: "Clean low fade with razor-sharp beard contouring"
    },
    {
      id: "g3",
      title: "Honey & Caramel Balayage",
      category: "hair",
      image: "/assets/images/gallery-hair-colour.jpg",
      caption: "Dimensional sunlit balayage on brunette waves"
    },
    {
      id: "g4",
      title: "Regal Jaipur Bridal Look",
      category: "bridal",
      image: "/assets/images/gallery-bridal.jpg",
      caption: "Traditional elegance with dewy HD finish and braided florals"
    },
    {
      id: "g5",
      title: "Golden Botanical Facial Spa",
      category: "skin",
      image: "/assets/images/gallery-facial.jpg",
      caption: "Deep nourishment and radiant glow therapy"
    },
    {
      id: "g6",
      title: "Arts Of Scissors Sanctuary",
      category: "interior",
      image: "/assets/images/gallery-salon-interior.jpg",
      caption: "Modern unisex salon floor at Kalwar Road, Sanjay Nagar"
    },
    {
      id: "g7",
      title: "Therapeutic Scalp & Hair Spa",
      category: "hair",
      image: "/assets/images/gallery-hair-spa.jpg",
      caption: "Stress-relieving scalp acupressure and steam rejuvenation"
    },
    {
      id: "g8",
      title: "Glass Hair Keratin Smoothing",
      category: "hair",
      image: "/assets/images/gallery-keratin.jpg",
      caption: "Frizz-free silk finish with mirror-like shine"
    }
  ],

  testimonials: [
    {
      name: "Pooja Sharma",
      area: "Jhotwara, Jaipur",
      rating: 5,
      service: "Bridal Makeup & Hair Spa",
      text: "Arts Of Scissors made my wedding week seamless! The HD makeup stayed pristine throughout the 8-hour ceremony. The team is genuinely polite and listens carefully."
    },
    {
      name: "Vikram Rathore",
      area: "Kalwar Road, Jaipur",
      rating: 5,
      service: "Haircut & Beard Sculpt",
      text: "Hands down the cleanest salon in Sanjay Nagar. Great attention to detail on the beard trim, zero rush, and the hot towel finish is pure luxury."
    },
    {
      name: "Ananya Mehta",
      area: "Vaishali Nagar, Jaipur",
      rating: 5,
      service: "Balayage & Keratin",
      text: "I was nervous about coloring my hair for the first time, but they explained every shade patiently. The caramel tones turned out stunning without any hair damage!"
    },
    {
      name: "Rahul Verma",
      area: "Sanjay Nagar, Jaipur",
      rating: 5,
      service: "Hydra Facial & Grooming",
      text: "Open till 10 PM is a blessing for working professionals. You get premium service at very fair rates. Best unisex salon in this part of Jaipur."
    }
  ],

  stats: [
    { number: 7, label: "Days a Week Open" },
    { number: 13, label: "Hours Daily (9 AM – 10 PM)" },
    { number: 24, suffix: "+", label: "Curated Craft Services" },
    { number: 4.9, suffix: "★", label: "Google Rated (480+ Reviews)" }
  ],

  partners: [
    {
      name: "L'Oréal Professionnel",
      tagline: "Paris Hair Excellence",
      category: "Hair Colour & Keratin",
      description: "Ammonia-free Majirel, Inoa & Serie Expert nourishing hair care formulas.",
      badge: "Official Salon Partner"
    },
    {
      name: "Schwarzkopf Professional",
      tagline: "German Hair Technology",
      category: "Balayage & Styling",
      description: "Igora Royal & Osis+ line for long-lasting vibrancy and textured hold.",
      badge: "Certified Partner"
    },
    {
      name: "Kérastase Paris",
      tagline: "Luxury Scalp & Hair Rituals",
      category: "Deep Hair Spa",
      description: "Bespoke Fusio-Dose treatments tailored to hair density and scalp wellness.",
      badge: "Exclusive Range"
    },
    {
      name: "O3+ Professional",
      tagline: "Dermatological Skincare",
      category: "Facials & De-Tan",
      description: "Award-winning brightening treatments, bridal glow packs and tan-cure peels.",
      badge: "Derma Care"
    },
    {
      name: "Olaplex",
      tagline: "Bond Building Science",
      category: "Hair Repair",
      description: "Patented active bond multiplier repairing broken disulfide bonds from within.",
      badge: "Bond Multiplier"
    },
    {
      name: "Dyson Professional",
      tagline: "Intelligent Heat Control",
      category: "Styling Tech",
      description: "Supersonic & Corrale tools ensuring zero extreme heat damage during styling.",
      badge: "Precision Tech"
    },
    {
      name: "Moroccanoil",
      tagline: "Argan Oil Infused Luxury",
      category: "Frizz Control & Shine",
      description: "Pure antioxidant argan oil elixirs for instant silkiness and mirror finish.",
      badge: "Imported Luxury"
    },
    {
      name: "Davines Italy",
      tagline: "Sustainable High-Fashion Hair",
      category: "Organic Hair Rituals",
      description: "Zero-impact ethical formulas crafted in Parma for delicate hair and scalp.",
      badge: "Eco Luxury"
    }
  ]
};

