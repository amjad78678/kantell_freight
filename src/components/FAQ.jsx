import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { FAQS, PATHS, fadeUp, stagger } from "./constants";
import Ico from "./Ico";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <Section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #020617 0%, #0B1F3A 100%)" }}>
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div variants={fadeUp} className="mb-4 flex justify-center">
            <span className="tag-dark">FAQ</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-white">
            Common <span className="text-gradient-cyan">Questions</span>
          </motion.h2>
        </div>
        <motion.div variants={stagger} className="space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  background: open === i ? "rgba(34,211,238,0.06)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${open === i ? "rgba(34,211,238,0.3)" : "rgba(255,255,255,0.07)"}`,
                }}
                onClick={() => setOpen(open === i ? null : i)}>
                <div className="flex items-center justify-between gap-4 p-5">
                  <span className="font-semibold text-white text-sm md:text-base">{q}</span>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: open === i ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.06)", transform: open === i ? "rotate(45deg)" : "none" }}>
                    <Ico path={PATHS.plus} size={14} color={open === i ? "#22D3EE" : "white"} />
                  </div>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed font-light">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0 60L480 20L960 50L1440 10V60H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </Section>
  );
}
