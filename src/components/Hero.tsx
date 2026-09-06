import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-slate-950">
      <style>{`
        @keyframes pan-grid {
          0% { background-position: 0 0; }
          100% { background-position: 48px 48px; }
        }
      `}</style>
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep background image (optional, kept very subtle) */}
        <div className="absolute inset-0 bg-slate-950"></div>
        
        {/* Glowing Orbs for that premium tech feel */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-primary/20 blur-[150px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-creative-purple/20 blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px] mix-blend-screen"></div>
        
        {/* Animated Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{ 
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)", 
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 10%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 10%, transparent 80%)",
            animation: "pan-grid 15s linear infinite"
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Copy & CTAs */}
        <div className="flex flex-col items-start text-left pt-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 font-label-sm font-semibold text-[13px] mb-6 hover:bg-white/10 transition-all cursor-default animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Gurgaon&apos;s Premium Digital Growth Agency
          </div>
          
          {/* Massive Headline */}
          <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-[64px] leading-[1.05] text-white mb-4 font-bold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
            Scale Your Revenue. <br />
            <span className="text-slate-400">Crush Your </span> <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-creative-purple to-[#f472b6] animate-gradient bg-[length:200%_auto]">
              Competition.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-body-lg text-lg md:text-[18px] leading-relaxed text-slate-400 max-w-xl mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-both">
            We engineer high-converting digital ecosystems. From data-driven performance marketing to robust web development, we bring you actual paying customers—not just clicks.
          </p>
          
          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 fill-mode-both">
            <a
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold text-[15px] rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1 group"
              href="#contact"
            >
              Get Free Growth Plan
              <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <a
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white font-bold text-[15px] rounded-xl hover:bg-slate-800 transition-all duration-300 group"
              href="#services"
            >
              View Our Services
            </a>
          </div>

          {/* Social Proof Mini */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col gap-4 animate-in fade-in duration-1000 delay-700 fill-mode-both w-full max-w-md">
            <p className="text-[13px] font-bold text-slate-500 uppercase tracking-widest">Trusted by 50+ Fast-Growing Brands</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[20px]">apartment</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[20px]">storefront</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-creative-purple flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[20px]">fitness_center</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-emerald-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[20px]">local_hospital</span>
                </div>
              </div>
              <div className="text-sm text-slate-400">
                <span className="text-white font-bold block">4.9/5 Average Rating</span>
                Across all client projects
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Abstract Glass UI Composition */}
        <div className="relative h-[520px] hidden lg:block animate-in fade-in slide-in-from-right-10 duration-1000 delay-500 fill-mode-both">
          
          {/* Main Back Card */}
          <div className="absolute top-[10%] right-[10%] w-[380px] bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[24px]">leaderboard</span>
              </div>
              <span className="text-emerald-400 text-sm font-bold bg-emerald-400/10 px-3 py-1 rounded-full">+124%</span>
            </div>
            <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Total Revenue Generated</h3>
            <p className="text-white text-4xl font-bold mb-6 font-headline-lg">₹4.2 Cr</p>
            {/* Fake Chart Lines */}
            <div className="flex items-end gap-2 h-24 mt-4">
              {[40, 50, 30, 60, 45, 80, 70, 95, 85, 100].map((height, i) => (
                <div key={i} className="w-full bg-slate-800 rounded-t-sm" style={{ height: '100%' }}>
                  <div className="w-full bg-gradient-to-t from-primary to-creative-purple rounded-t-sm transition-all duration-1000" style={{ height: `${height}%`, animationDelay: `${i * 100}ms` }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Overlapping Middle Card */}
          <div className="absolute top-[45%] left-[0%] w-[300px] bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-700 z-20">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 bg-creative-purple/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-creative-purple text-[20px]">mouse</span>
              </div>
              <div>
                <p className="text-slate-300 text-xs font-bold uppercase tracking-wider">Conversion Rate</p>
                <p className="text-white text-xl font-bold">8.4%</p>
              </div>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2">
              <div className="bg-gradient-to-r from-creative-purple to-pink-500 w-[75%] h-full rounded-full"></div>
            </div>
            <p className="text-slate-400 text-xs text-right">Industry avg: 2.1%</p>
          </div>

          {/* Front Small Floating Card */}
          <div className="absolute bottom-[10%] right-[20%] bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-4 shadow-xl flex items-center gap-4 z-30 animate-[bounce_4s_ease-in-out_infinite]">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="material-symbols-outlined text-white text-[20px]">check</span>
            </div>
            <div>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Live Campaign</p>
              <p className="text-white text-sm font-bold">Leads Flowing In</p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
