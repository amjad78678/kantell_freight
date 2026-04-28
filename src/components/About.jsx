import { motion } from "framer-motion";
import Section from "./Section";
import { IMAGES, fadeLeft, fadeUp } from "./constants";
import Ico, { PATHS } from "./Ico";

export default function About() {
  return (
    <Section id="about" className="py-28" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div variants={fadeLeft} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden" style={{ height: 280 }}>
                <img src={IMAGES.port} alt="Port operations" className="w-full h-full object-cover hover:scale-105 transition-transform duration-600" />
              </div>
              <div className="rounded-2xl overflow-hidden mt-8" style={{ height: 280 }}>
                <img src={IMAGES.warehouse} alt="Warehouse" className="w-full h-full object-cover hover:scale-105 transition-transform duration-600" />
              </div>
            </div>
            {/* Badge */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-4 flex items-center gap-3 z-10"
              style={{ background: "white", boxShadow: "0 20px 50px rgba(11,31,58,0.18)", border: "1px solid #E2E8F0" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(34,211,238,0.12)" }}>
                <Ico path={PATHS.check} size={18} color="#22D3EE" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Since 2008</div>
                <div className="text-base font-display font-bold" style={{ color: "#0B1F3A" }}>15+ Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div variants={fadeUp} className="mb-4">
              <span className="tag-light">About Kantell Freight</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6 leading-tight" style={{ color: "#0B1F3A" }}>
              Modern Logistics,{" "}
              <span className="text-gradient-cyan">Global Reach</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg leading-relaxed mb-5 font-light">
              Kantell Freight is a modern logistics and freight forwarding company delivering end-to-end supply chain solutions across global markets. Backed by experienced professionals and a strong international network, we provide efficient, reliable, and customized logistics services for businesses of all sizes.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed mb-10 font-light">
              We specialize in handling complex shipments, time-sensitive deliveries, and tailored logistics strategies — ensuring your cargo moves seamlessly across borders.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <a href="#contact" className="btn-navy">Get Started</a>
              <a href="#services" className="btn-outline-navy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 12, fontWeight: 500, fontSize: 15, color: "#0B1F3A", border: "1.5px solid #CBD5E1", transition: "all 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#22D3EE"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#CBD5E1"}>
                Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
