import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { PLANS, PATHS, fadeUp, scaleIn } from "./constants";
import Ico from "./Ico";

export default function Pricing() {
  const [yr, setYr] = useState(false);
  return (
    <Section className="py-28 bg-grid-light" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div variants={fadeUp} className="mb-4 flex justify-center">
            <span className="tag-light">Pricing</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4" style={{ color: "#0B1F3A" }}>
            Simple, <span className="text-gradient-cyan">Transparent</span> Pricing
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold ${!yr ? "text-gray-800" : "text-gray-400"}`}>Monthly</span>
            <button onClick={() => setYr(!yr)} className="relative w-12 h-6 rounded-full transition-all duration-300"
              style={{ background: yr ? "#22D3EE" : "#CBD5E1" }}>
              <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${yr ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-semibold ${yr ? "text-gray-800" : "text-gray-400"}`}>
              Yearly <span className="text-xs px-2 py-0.5 rounded-full ml-1 font-bold" style={{ background: "rgba(34,211,238,0.15)", color: "#0B1F3A" }}>Save 17%</span>
            </span>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {PLANS.map(({ name, price, desc, features, highlight, badge }, i) => (
            <motion.div key={name} variants={scaleIn} transition={{ delay: i * 0.1 }}
              className="rounded-3xl p-8 flex flex-col relative"
              style={highlight ? {
                background: "linear-gradient(135deg, #0B1F3A, #1E3A8A)",
                boxShadow: "0 30px 80px rgba(11,31,58,0.3), 0 0 0 1px rgba(34,211,238,0.3)",
                transform: "scale(1.04)",
              } : {
                background: "white", border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(11,31,58,0.06)",
              }}>
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide"
                    style={{ background: "#22D3EE", color: "#0B1F3A" }}>{badge}</span>
                </div>
              )}
              <h3 className={`font-display font-bold text-xl mb-2 ${highlight ? "text-white" : ""}`} style={!highlight ? { color: "#0B1F3A" } : {}}>{name}</h3>
              <p className={`text-sm font-light mb-6 ${highlight ? "text-white/60" : "text-gray-500"}`}>{desc}</p>
              <div className="mb-8">
                {price.mo ? (
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-4xl" style={{ color: highlight ? "#22D3EE" : "#0B1F3A" }}>
                      ${yr ? price.yr : price.mo}
                    </span>
                    <span className={`text-sm ${highlight ? "text-white/40" : "text-gray-400"}`}>/mo</span>
                  </div>
                ) : (
                  <span className="font-display font-extrabold text-3xl text-gradient-cyan">Custom</span>
                )}
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {features.map(f => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${highlight ? "text-white/80" : "text-gray-600"}`}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: highlight ? "rgba(34,211,238,0.2)" : "rgba(34,211,238,0.1)" }}>
                      <Ico path={PATHS.check} size={10} color="#22D3EE" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${highlight ? "btn-cyan" : "btn-navy"}`}
                style={{ display: "block" }}>
                {name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
