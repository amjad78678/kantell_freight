import Ico, { PATHS } from "./Ico";
import { useNavigate } from "react-router-dom";
import Logo from "../icons/Logo.svg";

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer style={{ background: "#020617", borderTop: "1px solid rgba(34,211,238,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#22D3EE,#1E3A8A)" }}>
                <img src={Logo} alt="Kantell Freight Logo" className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-lg text-white">Kantell <span style={{ color: "#22D3EE" }}>Freight</span></span>
            </div>
            <p className="text-sm text-white/35 font-light leading-relaxed max-w-xs mb-6">
              End-to-end freight forwarding solutions across air, sea, and land — connecting your business to the world.
            </p>
            <div className="flex gap-3">
              {[PATHS.linkedin, PATHS.twitter].map((p, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)"; e.currentTarget.style.background = "rgba(34,211,238,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
                  <Ico path={p} size={15} color="rgba(255,255,255,0.5)" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
                { name: "Careers", path: "#" },
              ].map(l => (
                <li key={l.name}>
                  <button onClick={() => handleNav(l.path)} className="text-sm text-white/40 hover:text-white transition-colors font-light">
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:info@kantellfreight.com" className="text-sm text-white/40 hover:text-white transition-colors font-light">info@kantellfreight.com</a></li>
              <li className="text-sm text-white/30 font-light">+971 4 000 0000</li>
              <li className="text-sm text-white/30 font-light">Dubai, UAE</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs text-white/20 font-mono">© 2025 Kantell Freight. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map(l => (
              <a key={l} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors font-light">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
