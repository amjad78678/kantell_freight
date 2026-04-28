import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { IMAGES, PATHS, fadeUp, fadeRight, stagger, scaleIn } from "./constants";
import Ico from "./Ico";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbz_-liugb9AKo-7Gy4cp-kA_N_dArIRCQwB8dFygZhPRafZsgppzto1-b3f1Z3Bi6Ts/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inp = (name, ph, type = "text") => (
    <div>
      <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "#64748B" }}>{name}</label>
      <input type={type} placeholder={ph} value={form[name.toLowerCase()]}
        onChange={e => setForm(f => ({ ...f, [name.toLowerCase()]: e.target.value }))}
        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 font-light"
        style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", color: "#0B1F3A" }}
        onFocus={e => { e.target.style.borderColor = "#22D3EE"; e.target.style.boxShadow = "0 0 0 3px rgba(34,211,238,0.08)"; }}
        onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }} />
    </div>
  );

  return (
    <Section id="contact" className="py-28 bg-grid-light" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} className="mb-4">
              <span className="tag-light">Contact Us</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-6 leading-tight" style={{ color: "#0B1F3A" }}>
              Request a <span className="text-gradient-cyan">Quote</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg font-light mb-10 leading-relaxed">
              Tell us about your shipment needs and our logistics experts will get back to you within 24 hours with a customized solution.
            </motion.p>
            {/* Info */}
            <motion.div variants={stagger} className="space-y-4 mb-10">
              {[
                { icon: PATHS.mail, label: "Email", val: "info@kantellfreight.com" },
                { icon: PATHS.phone, label: "Phone", val: "+971 4 000 0000" },
                { icon: PATHS.location, label: "Location", val: "Dubai, UAE" },
              ].map(({ icon, label, val }) => (
                <motion.div key={label} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}>
                    <Ico path={icon} size={18} color="#1E3A8A" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono tracking-wide uppercase">{label}</div>
                    <div className="font-semibold text-sm mt-0.5" style={{ color: "#0B1F3A" }}>{val}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            {/* Image */}
            <motion.div variants={scaleIn} className="rounded-3xl overflow-hidden" style={{ height: 220 }}>
              <img src={IMAGES.team} alt="Our team" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Form */}
          <motion.div variants={fadeRight}>
            <div className="rounded-3xl p-8" style={{ background: "white", boxShadow: "0 20px 60px rgba(11,31,58,0.1)", border: "1px solid #E2E8F0" }}>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ background: "rgba(34,211,238,0.1)", border: "2px solid rgba(34,211,238,0.3)" }}>
                    <Ico path={PATHS.check} size={36} color="#22D3EE" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl mb-3" style={{ color: "#0B1F3A" }}>Message Sent!</h3>
                  <p className="text-gray-500 font-light">Our team will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <div className="space-y-5">
                  {inp("Name", "Your full name")}
                  {inp("Email", "your@email.com", "email")}
                  {inp("Phone", "+1 (000) 000-0000", "tel")}
                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "#64748B" }}>Message</label>
                    <textarea rows={4} placeholder="Tell us about your freight needs..."
                      value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-none transition-all duration-200 font-light"
                      style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", color: "#0B1F3A" }}
                      onFocus={e => { e.target.style.borderColor = "#22D3EE"; e.target.style.boxShadow = "0 0 0 3px rgba(34,211,238,0.08)"; }}
                      onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }} />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`btn-cyan w-full justify-center py-4 text-base ${loading ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0B1F3A] border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Submit Request <Ico path={PATHS.arrow} size={18} color="#0B1F3A" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
