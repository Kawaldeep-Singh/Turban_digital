"use client";

import { useEffect, useState, useRef } from "react";

const Counter = ({ target, prefix = "", suffix = "", colorClass = "" }: { target: number, prefix?: string, suffix?: string, colorClass?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const end = target;
          const duration = 2000;
          const startTime = performance.now();
          
          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease out quart for smooth finish
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            }
          };
          animationFrameId = requestAnimationFrame(animate);
        } else {
          // Reset count so it animates again when scrolling back
          setCount(0);
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  return (
    <div ref={ref}>
      <p className={`font-headline-md text-4xl md:text-[44px] font-extrabold ${colorClass} mb-2 tracking-tight`}>
        {prefix}{count}{suffix}
      </p>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { target: 50, prefix: "↓", suffix: "%", label: "Cost Per Lead", color: "text-emerald-700" },
    { target: 300, prefix: "↑", suffix: "%", label: "Organic Traffic", color: "text-blue-700" },
    { target: 700, prefix: "↑", suffix: "%", label: "ROAS", color: "text-indigo-700" },
    { target: 100, prefix: "↑", suffix: "%", label: "Social Engagement", color: "text-rose-700" },
    { target: 50, prefix: "", suffix: "+", label: "Happy Clients", color: "text-amber-700", span: true }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      {/* Light Mode Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)", 
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)"
          }}
        ></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-creative-purple/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We Don't Just Talk. We Deliver.
          </h2>
          <p className="font-body-lg text-lg text-slate-500">
            Our track record is built on hard data, relentless optimization, and scaling brands just like yours to the next level.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center p-6 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group ${stat.span ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              <Counter 
                target={stat.target} 
                prefix={stat.prefix} 
                suffix={stat.suffix} 
                colorClass={stat.color} 
              />
              <p className="font-label-sm text-[12px] md:text-[13px] font-bold text-slate-500 uppercase tracking-widest text-center group-hover:text-slate-700 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
