import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <Image
          src="/indian_agency_hero.jpg"
          alt="Digital Marketing Agency"
          fill
          priority
          className="object-cover opacity-40 animate-[scale-in_30s_linear_infinite]"
          style={{ animation: 'pulse 20s infinite alternate' }}
        />
        
        {/* Glowing Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-creative-purple/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse"></div>
        
        {/* Animated Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none animate-pattern"
          style={{ 
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", 
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)"
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center text-center mt-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 text-slate-200 font-label-sm font-semibold text-sm mb-10 hover:bg-white/15 transition-all cursor-default animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Gurgaon&apos;s Premier Digital Agency
        </div>
        
        {/* Massive Headline */}
        <h1 className="font-headline-xl text-5xl md:text-7xl lg:text-[84px] leading-[1.05] text-white mb-8 font-bold tracking-tighter max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          Stop Losing Leads To <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#a855f7] to-creative-purple animate-gradient bg-[length:200%_auto]">
            Your Competitors.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-body-lg text-lg md:text-[22px] leading-relaxed text-slate-300 max-w-3xl mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-both">
          We don't just run ads or build pretty websites. We build highly profitable digital engines that scale your revenue predictably. Partner with us, and let's dominate your market together.
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 fill-mode-both">
          <Link
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[16px] rounded-2xl shadow-[0_8px_30px_rgba(0,62,199,0.4)] hover:shadow-[0_15px_40px_rgba(0,62,199,0.6)] transition-all duration-300 hover:-translate-y-1 group"
            href="#contact"
          >
            Claim Your Free Audit
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <Link
            className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[16px] rounded-2xl shadow-lg hover:bg-white/20 transition-all duration-300 group"
            href="#services"
          >
            Explore Services
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-y-1 transition-transform">
              south
            </span>
          </Link>
        </div>
      </div>

      {/* Floating Glass Widgets (Moved to Absolute Corners for depth) */}
      <div className="absolute left-6 md:left-12 bottom-12 hidden lg:flex flex-col gap-4 animate-in fade-in slide-in-from-left-10 duration-1000 delay-700 fill-mode-both z-20">
        <div className="bg-slate-900/60 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 w-[260px] transform hover:-translate-y-2 transition-transform">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <span className="material-symbols-outlined text-[24px]">trending_up</span>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Avg. ROAS</span>
              <span className="text-2xl font-bold text-white block leading-none mt-1">4.2x Return</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 w-[85%] h-full rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute right-6 md:right-12 top-32 hidden lg:block animate-in fade-in slide-in-from-right-10 duration-1000 delay-1000 fill-mode-both z-20">
        <div className="bg-slate-900/60 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 flex items-center gap-5 transform hover:-translate-y-2 transition-transform animate-[bounce_6s_infinite]">
          <div className="w-12 h-12 rounded-2xl bg-creative-purple/20 flex items-center justify-center text-creative-purple">
            <span className="material-symbols-outlined text-[24px]">visibility</span>
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Traffic Growth</span>
            <span className="text-2xl font-bold text-white block leading-none mt-1">+300%</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}
