import { motion } from "framer-motion";
import { IMAGES, PATHS } from "./constants";
import Ico from "./Ico";

export default function ImageBand() {
  const imgs = [
    { src: IMAGES.airFreight, label: "Air Freight", icon: PATHS.air },
    { src: IMAGES.container, label: "Container Shipping", icon: PATHS.ship },
    { src: IMAGES.landTransport, label: "Land Transport", icon: PATHS.truck },
    { src: IMAGES.logistics, label: "Supply Chain", icon: PATHS.freight },
  ];
  return (
    <section className="py-16" style={{ background: "#0B1F3A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {imgs.map(({ src, label, icon }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: 200 }}>
              <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="img-overlay" />
              {/* Cyan glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "linear-gradient(to top, rgba(34,211,238,0.25), transparent 50%)" }} />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(34,211,238,0.2)" }}>
                  <Ico path={icon} size={14} color="#22D3EE" />
                </div>
                <span className="text-white font-semibold text-sm">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
