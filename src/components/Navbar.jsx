import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import Ico, { PATHS } from "./Ico";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Always show background on non-home pages
  const showBackground = scrolled || location.pathname !== "/";

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={showBackground ? { background: "rgba(2,6,23,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(34,211,238,0.12)" } : {}}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <button onClick={() => handleNav("/")} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center relative"
            style={{ background: "linear-gradient(135deg, #22D3EE, #1E3A8A)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="0" fill="white" opacity="0.9" />
            </svg>
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "0 0 20px rgba(34,211,238,0.6)" }} />
          </div>
          <div>
            <span className="font-display font-bold text-lg text-white tracking-tight">Kantell</span>
            <span className="font-display font-light text-lg tracking-tight" style={{ color: "#22D3EE" }}> Freight</span>
          </div>
        </button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l.name} onClick={() => handleNav(l.path)} 
              className={`text-sm font-medium transition-colors duration-200 tracking-wide ${location.pathname === l.path ? "text-white" : "text-white/60 hover:text-white"}`}>
              {l.name}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button onClick={() => handleNav("/contact")} className="btn-cyan text-sm">
            Request Quote <Ico path={PATHS.arrow} size={16} color="#0B1F3A" />
          </button>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <Ico path={mobileOpen ? PATHS.close : PATHS.menu} size={22} color="white" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(2,6,23,0.97)", borderTop: "1px solid rgba(34,211,238,0.1)" }}>
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map(l => (
                <button key={l.name} onClick={() => handleNav(l.path)} className="text-white/70 hover:text-white text-sm font-medium py-1 text-left">
                  {l.name}
                </button>
              ))}
              <button onClick={() => handleNav("/contact")} className="btn-cyan text-sm text-center mt-2">Request Quote</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
