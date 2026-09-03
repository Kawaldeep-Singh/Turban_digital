"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Performance Marketing",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "Your message has been sent successfully!" });
        setFormData({ name: "", phone: "", email: "", service: "Performance Marketing", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-label-sm text-[12px] font-bold mb-5 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Currently Accepting New Clients
              </div>
              <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready To Dominate <br /> Your Market?
              </h2>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-md">
                Stop leaving money on the table. Book a free strategy session, and we'll map out the exact digital blueprint you need to scale aggressively.
              </p>
            </div>
            
            <div className="space-y-4 mt-2">
              {[
                "Free comprehensive strategy audit",
                "Response guaranteed within 2 hours",
                "Custom growth roadmap for your niche",
                "100% confidential & no obligations"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-emerald-400/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <span className="text-[15px] font-medium text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="relative">
            {/* Soft Glow behind form */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-creative-purple/20 blur-[60px] rounded-[2rem]"></div>
            
            <div className="bg-slate-800/80 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-slate-700/50 shadow-2xl relative z-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-[13px] font-bold text-slate-300 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:bg-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-medium placeholder-slate-500 text-[14px]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:bg-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-medium placeholder-slate-500 text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:bg-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-medium placeholder-slate-500 text-[14px]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-300 mb-1.5">
                    Service Required
                  </label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:bg-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-medium appearance-none text-[14px]"
                  >
                    <option>Performance Marketing</option>
                    <option>Web Development</option>
                    <option>SEO Optimization</option>
                    <option>Social Media (SMO)</option>
                    <option>Video Editing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-slate-300 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:bg-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-medium placeholder-slate-500 resize-none text-[14px]"
                  ></textarea>
                </div>
                
                {status.message && (
                  <div className={`p-3 rounded-lg text-[13px] font-medium ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {status.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full py-3.5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[15px] rounded-xl shadow-[0_8px_20px_rgba(0,62,199,0.3)] hover:shadow-[0_12px_25px_rgba(0,62,199,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:-translate-y-0 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Book Free Strategy Call"}
                  {!loading && (
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  )}
                </button>
                <p className="text-center text-slate-400 text-[12px] font-medium mt-1">
                  No credit card required. 100% free consultation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
