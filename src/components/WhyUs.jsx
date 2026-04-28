import { motion } from "framer-motion";
import Section from "./Section";
import { IMAGES, WHY, fadeLeft, fadeUp, stagger } from "./constants";
import Ico from "./Ico";

export default function WhyUs() {
  return (
    <Section className="py-28 bg-grid-light" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <motion.div variants={fadeLeft} className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ height: 520, boxShadow: "0 30px 80px rgba(11,31,58,0.18)" }}>
              <img src={IMAGES.cargo} alt="Cargo operations" className="w-full h-full object-cover" />
              <div className="img-overlay" />
            </div>
            {/* Overlay card */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-8 top-1/3 rounded-3xl p-6 w-52"
              style={{ background: "white", boxShadow: "0 20px 50px rgba(11,31,58,0.2)", border: "1px solid #E2E8F0" }}>
              {[
                { label: "Efficiency", val: 95 },
                { label: "Reliability", val: 90 },
                { label: "Cost Saving", val: 85 },
              ].map(({ label, val }) => (
                <div key={label} className="mb-3 last:mb-0">
                  <div className="flex justify-between text-xs mb-1" style={{ color: "#64748B" }}>
                    <span>{label}</span><span className="font-bold" style={{ color: "#0B1F3A" }}>{val}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#EEF2FF" }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${val}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #22D3EE, #1E3A8A)" }} />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: grid */}
          <div>
            <motion.div variants={fadeUp} className="mb-4">
              <span className="tag-light">Why Choose Us</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-10 leading-tight" style={{ color: "#0B1F3A" }}>
              Why{" "}
              <span className="text-gradient-cyan">Kantell Freight?</span>
            </motion.h2>
            <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-5">
              {WHY.map(({ icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md cursor-default">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}>
                    <Ico path={icon} size={18} color="#1E3A8A" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: "#0B1F3A" }}>{title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
