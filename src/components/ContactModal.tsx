"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Performance Marketing",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  
  // Use Next.js hooks and standard window event listener to detect hash
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#contact") {
        setIsOpen(true);
        // Prevent scrolling behind modal
        document.body.style.overflow = "hidden";
      } else {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    // Check on initial load
    checkHash();

    // Listen for hash changes
    window.addEventListener("hashchange", checkHash);
    
    return () => {
      window.removeEventListener("hashchange", checkHash);
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeDialog = () => {
    // Remove #contact from URL without reloading page
    history.pushState("", document.title, window.location.pathname + window.location.search);
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

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
        setTimeout(() => closeDialog(), 3000);
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-slate-900/60 transition-opacity duration-300">
      
      {/* Modal Overlay / Click outside to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={closeDialog}
        aria-label="Close modal"
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-slate-900 rounded-[2rem] border border-slate-700/50 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-300">
        
        {/* Soft Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-creative-purple/10 blur-[40px] rounded-[2rem] pointer-events-none"></div>

        <div className="relative p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-headline-sm text-2xl font-bold text-white mb-1">Book Strategy Call</h3>
              <p className="text-[13px] text-slate-400">100% Free. No Obligations.</p>
            </div>
            <button 
              onClick={closeDialog}
              className="w-10 h-10 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors border border-slate-700"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[12px] font-bold text-slate-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Kawaldeep singh"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-medium placeholder-slate-500 text-[14px]"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold text-slate-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="9053608395"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-medium placeholder-slate-500 text-[14px]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-medium placeholder-slate-500 text-[14px]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-bold text-slate-300 mb-1">Service Required</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-medium appearance-none text-[14px]"
              >
                <option>Performance Marketing</option>
                <option>Web Development</option>
                <option>SEO Optimization</option>
                <option>Social Media (SMO)</option>
                <option>Video Editing</option>
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-bold text-slate-300 mb-1">Project Details</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your current goals..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all duration-300 font-medium placeholder-slate-500 resize-none text-[14px]"
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
              className="mt-2 w-full py-3.5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[15px] rounded-xl shadow-[0_8px_20px_rgba(0,62,199,0.3)] hover:shadow-[0_12px_25px_rgba(0,62,199,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Book Free Call"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
