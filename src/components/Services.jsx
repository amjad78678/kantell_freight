import { motion } from "framer-motion";
import Section from "./Section";
import { IMAGES, PATHS, SERVICES, fadeUp, scaleIn, stagger } from "./constants";
import Ico from "./Ico";

export default function Services() {
  return (
    <Section id="services" className="py-28 bg-grid-light" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div variants={fadeUp} className="mb-4 flex justify-center">
            <span className="tag-light">Our Services</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4" style={{ color: "#0B1F3A" }}>
            End-to-End{" "}
            <span className="text-gradient-cyan">Logistics Solutions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto text-lg font-light">
            Every service is designed to move your cargo faster, safer, and smarter.
          </motion.p>
        </div>

        {/* Top 4 — with images */}
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {SERVICES.slice(0, 4).map(({ title, desc, icon, img }, i) => (
            <motion.div key={title} variants={scaleIn} transition={{ delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{ background: "white", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(11,31,58,0.06)", transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)" }}
              whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(11,31,58,0.14)" }}>
              {img && (
                <div className="relative overflow-hidden" style={{ height: 160 }}>
                  <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="img-overlay" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(34,211,238,0.2)" }}>
                    <Ico path={icon} size={15} color="#22D3EE" />
                  </div>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display font-bold text-base mb-2" style={{ color: "#0B1F3A" }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{desc}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#22D3EE" }}>
                  Learn more <Ico path={PATHS.arrow} size={12} color="#22D3EE" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom 4 — text only */}
        <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.slice(4).map(({ title, desc, icon }, i) => (
            <motion.div key={title} variants={fadeUp} transition={{ delay: i * 0.08 }} className="service-card group">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}>
                <Ico path={icon} size={20} color="#1E3A8A" />
              </div>
              <h3 className="font-display font-bold text-base mb-2" style={{ color: "#0B1F3A" }}>{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{desc}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#22D3EE" }}>
                Learn more <Ico path={PATHS.arrow} size={12} color="#22D3EE" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
