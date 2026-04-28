import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IMAGES, REGIONS, PATHS } from "./constants";
import Ico from "./Ico";

export default function GlobalNetwork() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % REGIONS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="solutions" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020617 0%, #0B1F3A 100%)" }}>
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08), transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4 flex justify-center">
            <span className="tag-dark">Global Network</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Connecting the World's{" "}
            <span className="text-gradient-cyan">Key Markets</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* SVG Map */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden glass-dark" style={{ padding: 2 }}>
              <div className="rounded-[22px] overflow-hidden relative" style={{ background: "#060f1f" }}>
                <img src={IMAGES.map} alt="World map" className="w-full opacity-20" style={{ mixBlendMode: "luminosity" }} />
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 56" preserveAspectRatio="xMidYMid meet">
                  {/* Route lines */}
                  <path d="M57,44 Q52,36 47,28" stroke="rgba(34,211,238,0.5)" strokeWidth="0.5" fill="none" strokeDasharray="1.5,2.5" className="route-line" />
                  <path d="M57,44 Q66,42 75,40" stroke="rgba(34,211,238,0.5)" strokeWidth="0.5" fill="none" strokeDasharray="1.5,2.5" className="route-line" style={{ animationDelay: '-1s' }} />
                  <path d="M47,28 Q48,42 49,57" stroke="rgba(34,211,238,0.4)" strokeWidth="0.5" fill="none" strokeDasharray="1.5,2.5" className="route-line" style={{ animationDelay: '-2s' }} />
                  <path d="M49,57 Q62,48 75,40" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" fill="none" strokeDasharray="1.5,2.5" className="route-line" style={{ animationDelay: '-0.5s' }} />
                  {/* Dots */}
                  {REGIONS.map(({ name, x, y }, i) => (
                    <g key={name} style={{ cursor: "pointer" }} onClick={() => setActive(i)}>
                      <circle cx={x} cy={y} r={active === i ? "3" : "2"} fill={active === i ? "#22D3EE" : "rgba(34,211,238,0.6)"}
                        style={{ transition: "all 0.4s", filter: active === i ? "drop-shadow(0 0 6px #22D3EE)" : "none" }} />
                      {active === i && (
                        <circle cx={x} cy={y} r="5" fill="none" stroke="#22D3EE" strokeWidth="0.5" opacity="0.5">
                          <animate attributeName="r" values="3;8;3" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <text x={x + 3} y={y - 2} fontSize="2.5" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">{name}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Region list */}
          <div className="lg:col-span-2 space-y-3">
            {REGIONS.map(({ name, desc }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                onClick={() => setActive(i)}
                className="rounded-2xl p-5 cursor-pointer transition-all duration-400"
                style={{
                  background: active === i ? "rgba(34,211,238,0.1)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${active === i ? "rgba(34,211,238,0.35)" : "rgba(255,255,255,0.08)"}`,
                }}>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: active === i ? "#22D3EE" : "rgba(255,255,255,0.25)" }} />
                  <h3 className="font-display font-bold text-sm text-white">{name}</h3>
                </div>
                <p className="text-xs text-white/45 leading-relaxed ml-5">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave to next section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0 0L480 40L960 15L1440 60V60H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
