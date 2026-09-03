export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Audit & Strategy",
      description: "We don't guess. We audit your current digital footprint, find the exact leaks costing you money, and build a custom blueprint for scale.",
      icon: "search_insights",
      color: "from-blue-500 to-indigo-500"
    },
    {
      number: "02",
      title: "Execution & Launch",
      description: "Our team takes over. We build the funnels, write the copy, launch the ads, and optimize your SEO while you focus on closing the leads.",
      icon: "rocket_launch",
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: "03",
      title: "Scale & Dominate",
      description: "Once we hit profitability, we pour fuel on the fire. We continuously A/B test and optimize to aggressively scale your market share.",
      icon: "monitoring",
      color: "from-purple-500 to-fuchsia-500"
    }
  ];

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="font-label-sm text-[14px] font-bold text-primary uppercase tracking-widest mb-4">How We Operate</p>
          <h2 className="font-headline-lg text-4xl md:text-4xl font-bold text-white mb-6">
            A Proven System Built For Predictable Growth
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-slate-800 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col group">
              {/* Icon & Number Header */}
              <div className="mb-8 relative flex justify-center md:justify-start">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${step.color} p-[2px] shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px] bg-clip-text text-transparent bg-gradient-to-tr from-white to-slate-300" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {step.icon}
                    </span>
                  </div>
                </div>
                <div className="absolute -top-12 -right-4 md:-right-8 text-[96px] font-extrabold text-slate-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none select-none tracking-tighter">
                  {step.number}
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${step.color}"></div>
                <h3 className="font-headline-sm text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-slate-600 text-lg font-mono">{step.number}.</span> {step.title}
                </h3>
                <p className="font-body-md text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
