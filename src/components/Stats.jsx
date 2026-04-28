import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PATHS } from "./constants";
import Ico from "./Ico";

function useCounter(target, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 2200, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return count;
}

function StatCard({ value, suffix, label, desc, delay = 0, icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, inView);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative text-center p-8 rounded-3xl overflow-hidden group"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(34,211,238,0.15)" }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at center, rgba(34,211,238,0.08), transparent 70%)" }} />
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: "rgba(34,211,238,0.12)" }}>
        <Ico path={icon} size={22} color="#22D3EE" />
      </div>
      <div className="font-display font-extrabold text-5xl text-gradient-cyan mb-1">
        {count}{suffix}
      </div>
      <div className="font-bold text-white text-base mb-1">{label}</div>
      <div className="text-sm text-white/40 font-light">{desc}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #020617 100%)" }}>
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.07), transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display font-extrabold text-3xl md:text-4xl text-white">
            Numbers that speak for themselves
          </motion.h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <StatCard value={95} suffix="%" label="Warehousing Efficiency" desc="Smart storage and inventory management" delay={0} icon={PATHS.warehouse} />
          <StatCard value={90} suffix="%" label="Air Freight Reliability" desc="On-time pickup and delivery rate" delay={0.1} icon={PATHS.air} />
          <StatCard value={85} suffix="%" label="Ocean Freight Optimization" desc="Cost savings vs standard market rates" delay={0.2} icon={PATHS.ship} />
        </div>
      </div>
    </section>
  );
}
