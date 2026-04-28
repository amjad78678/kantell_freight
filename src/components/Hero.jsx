import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "./constants";
import Ico, { PATHS } from "./Ico";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { label: "Air Freight", img: IMAGES.airFreight },
    { label: "Ocean Freight", img: IMAGES.oceanFreight },
    { label: "Land Transport", img: IMAGES.landTransport },
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveSlide(s => (s + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020617 0%, #0B1F3A 45%, #0f2d55 75%, #1E3A8A 100%)" }}>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-60" />

      {/* Ambient blobs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,58,138,0.3), transparent 70%)", filter: "blur(50px)" }} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            background: "#22D3EE", opacity: 0.4,
            left: `${15 + i * 13}%`,
            animation: `floatSlow ${5 + i}s ease-in-out infinite`,
            animationDelay: `${-i * 1.2}s`,
            top: `${20 + (i % 3) * 20}%`,
          }} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-7">
              <span className="tag-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-current" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
                Global Freight Forwarding
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold text-5xl md:text-6xl xl:text-7xl leading-[1.04] tracking-tight mb-6 text-white">
              We Connect{" "}
              <br />
              Your Business
              <br />
              <span className="text-gradient-cyan">to the World</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-white/55 leading-relaxed mb-10 max-w-lg font-light">
              Reliable, fast, and cost-effective freight forwarding solutions across air, sea, and land — tailored for your global logistics needs.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-14">
              <a href="#contact" className="btn-cyan">
                Get a Quote <Ico path={PATHS.arrow} size={17} color="#0B1F3A" />
              </a>
              <a href="#services" className="btn-outline-white">
                Explore Services
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4">
              {[
                { num: "150+", label: "Countries" },
                { num: "12K+", label: "Shipments/yr" },
                { num: "98%", label: "On-Time" },
              ].map(({ num, label }) => (
                <div key={label} className="glass-dark rounded-2xl p-4 text-center">
                  <div className="font-display font-extrabold text-2xl text-gradient-cyan">{num}</div>
                  <div className="text-xs text-white/40 mt-1 font-medium tracking-wide">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Image composite */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block">

            {/* Main hero image */}
            <div className="relative rounded-3xl overflow-hidden"
              style={{ height: 460, boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.15)" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={slides[activeSlide].img}
                  alt="Freight logistics"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ filter: "brightness(0.85) saturate(1.1)" }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,31,58,0.5) 0%, transparent 60%, rgba(34,211,238,0.08) 100%)" }} />
              {/* Cyan accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #22D3EE, transparent)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #22D3EE, transparent)" }} />

              {/* Live tracking badge */}
              <div className="absolute top-5 left-5 glass-dark rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.8)", animation: "pulse-ring 2s ease-out infinite" }} />
                <span className="text-xs text-white font-medium font-mono">Live Tracking Active</span>
              </div>

              {/* Mode label */}
              <div className="absolute bottom-5 right-5 glass-dark rounded-2xl px-4 py-3">
                <div className="text-xs text-white/40 font-mono mb-0.5">Freight Mode</div>
                <div className="text-sm font-bold text-white">Air · Sea · Land</div>
              </div>
            </div>

            {/* Floating mini cards */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/3 glass-dark rounded-2xl p-4 w-44"
              style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,211,238,0.2)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(34,211,238,0.15)" }}>
                  <Ico path={PATHS.air} size={16} color="#22D3EE" />
                </div>
                <span className="text-xs text-white/60">Air Freight</span>
              </div>
              <div className="text-xl font-display font-bold text-gradient-cyan">24h</div>
              <div className="text-xs text-white/35">Express delivery</div>
            </motion.div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 bottom-24 glass-dark rounded-2xl p-4 w-44"
              style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,211,238,0.2)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(34,211,238,0.15)" }}>
                  <Ico path={PATHS.ship} size={16} color="#22D3EE" />
                </div>
                <span className="text-xs text-white/60">Ocean</span>
              </div>
              <div className="text-xl font-display font-bold text-gradient-cyan">98.7%</div>
              <div className="text-xs text-white/35">On-time rate</div>
            </motion.div>

            {/* Slide indicator */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setActiveSlide(i)}
                  className="h-1 rounded-full transition-all duration-400"
                  style={{ width: activeSlide === i ? 24 : 8, background: activeSlide === i ? "#22D3EE" : "rgba(255,255,255,0.2)" }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L480 20L960 45L1440 0V60H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
