"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "Subscribed successfully!" });
        setEmail("");
      } else {
        setStatus({ type: "error", message: "Subscription failed." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-24 pb-10 relative overflow-hidden border-t border-slate-900">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(0,62,199,0.5)]"></div>
      
      {/* Background Design Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Static Grid - no animation to avoid non-composited jank */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", 
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 100% at 50% 0%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 100% at 50% 0%, black 20%, transparent 100%)"
          }}
        ></div>
        
        {/* Subtle Glows */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-creative-purple/10 rounded-full blur-[120px] translate-y-1/2 animate-pulse mix-blend-screen"></div>
        
        {/* Massive Background Text Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.015] select-none">
          <h2 className="font-headline-lg text-[250px] md:text-[350px] font-extrabold text-white tracking-tighter">
            TURBAN DIGITAL
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center -ml-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/Logo.png" 
                alt="Turban Digital Logo" 
                width="160"
                height="128"
                className="h-28 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              Your trusted digital growth partner. We help ambitious brands scale with data-driven marketing, robust development, and intelligent automation.
            </p>
            <div className="flex gap-3 mt-2">
              {[
                { icon: 'public', label: 'Website' },
                { icon: 'share', label: 'Social' },
                { icon: 'video_library', label: 'Media' }
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  aria-label={item.label}
                >
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
                      <p className="font-bold text-white uppercase tracking-wider mb-6 text-[14px]" role="heading" aria-level={3}>
              Capabilities
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Performance Marketing",
                "Web App Development",
                "iOS & Android Apps",
                "Technical SEO",
                "Social Media Management",
                "Cinematic Video Editing"
              ].map((service, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-[15px] font-medium">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
                      <p className="font-bold text-white uppercase tracking-wider mb-6 text-[14px]" role="heading" aria-level={3}>
              Company
            </p>
            <ul className="flex flex-col gap-4">
              {["About Us", "Case Studies", "Careers", /*"Blog",*/ "Contact Us", "Privacy Policy"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-[15px] font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
                      <p className="font-bold text-white uppercase tracking-wider mb-6 text-[14px]" role="heading" aria-level={3}>
              Growth Insights
            </p>
            <p className="text-slate-400 mb-6 text-[15px] leading-relaxed">
              Join 5,000+ marketers receiving our weekly newsletter on scaling digital brands.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                className="w-full px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-800 focus:bg-slate-800 focus:border-slate-600 outline-none text-white transition-all font-medium placeholder-slate-600"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Subscribing..." : "Subscribe to Newsletter"}
              </button>
              {status.message && (
                <div className={`text-[13px] font-medium ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span className="text-[14px] font-medium">Gurgaon, Haryana, India</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span className="text-[14px] font-medium">hello@turbandigitalstudio.in</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[14px] font-medium text-slate-500">
            <p>&copy; 2026 Turban Digital Studio.</p>
            <p className="flex items-center gap-1">
              Crafted with <span className="text-rose-500">&hearts;</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
