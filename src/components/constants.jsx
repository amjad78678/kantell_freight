// ── Real Unsplash logistics images ────────────────────────────────────────────
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80&auto=format",
  heroAlt: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1400&q=80&auto=format",
  airFreight: "https://images.unsplash.com/photo-1571086291540-b137111fa1c7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  oceanFreight: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  landTransport: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  warehouse: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format",
  container: "https://images.unsplash.com/photo-1590497008432-598f04441de8?q=80&w=1691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  port: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800&q=80&auto=format",
  cargo: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80&auto=format",
  logistics: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format",
  about: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format",
  team: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format",
  map: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=900&q=80&auto=format",
  about2: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  about1: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  shipping: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format",
  forklift: "https://images.unsplash.com/photo-1537368789214-2587a4ef99d9?w=800&q=80&auto=format",
  airplane: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80&auto=format",
  trucking: "https://images.unsplash.com/photo-1605218427306-022ba6c22a09?w=800&q=80&auto=format",
};

// ── Framer Motion Variants ────────────────────────────────────────────────────
export const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
export const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };
export const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
export const fadeRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
export const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
export const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

// ── SVG Icon Paths ─────────────────────────────────────────────────────────────
export const PATHS = {
  arrow: "M5 12h14m-7-7l7 7-7 7",
  check: "M5 13l4 4L19 7",
  globe: "M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2c-2.8 2.8-4.5 6.3-4.8 10H16.8c-.3-3.7-2-7.2-4.8-10zM12 22c2.8-2.8 4.5-6.3 4.8-10H7.2c.3 3.7 2 7.2 4.8 10z",
  air: "M21 16v-2l-8-5V3.5a.5.5 0 00-1 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
  ship: "M3 20c.5-3 2-5 4-6s4-.5 5 0 3 1 4 0 2.5-3 3-5M3 13c1-2 2-4 4-5s4 1 5 0 2.5-2 4-2 3 1 4 3",
  truck: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 16a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM18.5 16a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
  warehouse: "M3 21V8l9-5 9 5v13H3zM12 3v18M3 12h18",
  project: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  cold: "M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93",
  events: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  speed: "M13 10V3L4 14h7v7l9-11h-7z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  network: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  price: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  team: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  flex: "M4 6h16M4 12h16M4 18h16",
  mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 2l-8 5-8-5",
  phone: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.11 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
  close: "M18 6L6 18M6 6l12 12",
  menu: "M4 6h16M4 12h16M4 18h16",
  location: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10a3 3 0 100-6 3 3 0 000 6z",
  freight: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 17H9m0 0H5m0 0H3V6a1 1 0 011-1h14l3 7v5h-2M9 17l-.5-5M3 6h12l2 5",
  linkedin: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  twitter: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  plus: "M12 5v14M5 12h14",
};

// ── Data Constants ─────────────────────────────────────────────────────────────
export const SERVICES = [
  { title: "Freight Forwarding", desc: "Complete air, sea & land freight solutions for global cargo movement.", icon: PATHS.freight, img: IMAGES.container },
  { title: "Air Freight", desc: "Fast, secure, and reliable air cargo for time-critical shipments.", icon: PATHS.air, img: IMAGES.airFreight },
  { title: "Ocean Freight", desc: "Cost-effective FCL and LCL ocean freight solutions worldwide.", icon: PATHS.ship, img: IMAGES.oceanFreight },
  { title: "Land Transportation", desc: "Flexible truck and rail transport with full door-to-door coverage.", icon: PATHS.truck, img: IMAGES.landTransport },
  { title: "Warehousing & Distribution", desc: "Smart storage, inventory management, and distribution networks.", icon: PATHS.warehouse, img: IMAGES.warehouse },
  { title: "Project Logistics", desc: "Turnkey logistics for complex, oversized, and heavy-lift projects.", icon: PATHS.project },
  { title: "Perishables & Special Cargo", desc: "Temperature-controlled handling for sensitive goods.", icon: PATHS.cold },
  { title: "Events & Exhibitions", desc: "End-to-end logistics for global exhibitions and trade shows.", icon: PATHS.events },
];

export const REGIONS = [
  { name: "Middle East", desc: "Operational hub for Gulf-region logistics and customs expertise", x: 57, y: 44 },
  { name: "Europe", desc: "Pan-European freight, distribution and customs clearance", x: 47, y: 28 },
  { name: "Asia Pacific", desc: "Full coverage across Southeast & East Asian corridors", x: 75, y: 40 },
  { name: "Africa", desc: "Growing logistics network across key African ports and cities", x: 49, y: 57 },
];

export const WHY = [
  { icon: PATHS.speed, title: "Fast Response", desc: "Dedicated team available around the clock for quick communication and action." },
  { icon: PATHS.price, title: "Competitive Pricing", desc: "Transparent, market-leading rates with no hidden fees or surprises." },
  { icon: PATHS.network, title: "Global Network", desc: "Partnerships with top international carriers, agents, and customs brokers." },
  { icon: PATHS.shield, title: "Secure Handling", desc: "Full insurance coverage and careful cargo management at every stage." },
  { icon: PATHS.team, title: "Expert Team", desc: "Seasoned logistics professionals with decades of combined experience worldwide." },
  { icon: PATHS.flex, title: "Flexible Solutions", desc: "Customized logistics plans built around your specific business requirements." },
];

export const PLANS = [
  {
    name: "Basic", price: { mo: 299, yr: 249 },
    desc: "Perfect for small businesses getting started.",
    features: ["Standard shipping", "Email support", "Basic tracking", "Up to 5 shipments/mo"],
    highlight: false,
  },
  {
    name: "Business", price: { mo: 699, yr: 579 },
    desc: "For growing companies with regular shipping needs.",
    features: ["Priority handling", "Faster delivery", "Dedicated support", "Unlimited shipments", "Real-time tracking", "Custom reports"],
    highlight: true, badge: "Most Popular",
  },
  {
    name: "Enterprise", price: { mo: null, yr: null },
    desc: "Tailored for large-scale logistics operations.",
    features: ["Custom logistics solutions", "Full supply chain management", "24/7 dedicated account manager", "SLA guarantees", "API integrations"],
    highlight: false,
  },
];

export const FAQS = [
  { q: "What services do you offer?", a: "We offer freight forwarding, warehousing, land transportation, air freight, ocean freight, project logistics, and end-to-end supply chain solutions for businesses of all sizes globally." },
  { q: "Do you handle international shipping?", a: "Yes, we operate globally across all key markets including the Middle East, Europe, Asia, and Africa — with strong carrier partnerships and deep customs expertise in each region." },
  { q: "Can you handle urgent shipments?", a: "Absolutely. We specialize in time-sensitive and express cargo handling with priority routing, dedicated teams, and round-the-clock tracking for critical deliveries." },
  { q: "Do you provide door-to-door delivery?", a: "Yes. We offer full-service logistics from initial pickup at origin through to final delivery at the destination — seamlessly managing every step of the supply chain journey." },
];
