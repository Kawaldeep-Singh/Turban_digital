import Link from "next/link";

export default function StartupSupport() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-creative-purple/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-[13px] uppercase tracking-widest mb-6 shadow-md">
            <span className="material-symbols-outlined text-[16px] text-creative-purple">rocket_launch</span> 
            Startup Ecosystem
          </div>
          <h2 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            Launching a Startup? <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">We Build & Market Your Digital Future.</span>
          </h2>
          <p className="font-body-lg text-lg text-slate-600 mb-10 leading-relaxed">
            From robust tech development to aggressive marketing—a complete digital support ecosystem for your new business. Skip the headache of managing multiple freelancers and build your entire brand in one place.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[15px] rounded-xl shadow-[0_8px_20px_rgba(0,62,199,0.25)] hover:shadow-[0_12px_25px_rgba(0,62,199,0.4)] transition-all duration-300 hover:-translate-y-1 group">
            Get a Free Consultation
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* 4 Grid Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {[
            {
              title: "Brand Identity & Design",
              desc: "Craft a memorable first impression. We deliver professional logo design, letterheads, business cards, and complete brand guidelines.",
              icon: "palette",
            },
            {
              title: "Robust Tech Development",
              desc: "Fast, scalable platforms. We build full-stack web applications, mobile apps, and high-converting landing pages tailored to your needs.",
              icon: "developer_mode",
            },
            {
              title: "Social Media Setup & Management",
              desc: "Build authority from day one. We handle professional setup, content creation, and daily management across LinkedIn, Facebook, and Instagram.",
              icon: "campaign",
            },
            {
              title: "Performance Marketing (Lead Gen)",
              desc: "Don't just get traffic—get actual business. We launch highly targeted Google and Meta ad campaigns to bring in your first paying customers.",
              icon: "trending_up",
            }
          ].map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-200 hover:border-primary/30 transition-all duration-300 group hover:bg-white hover:shadow-xl">
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-slate-700 group-hover:text-white transition-colors duration-300">{item.icon}</span>
              </div>
              <h3 className="font-headline-sm text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Building Section */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h3 className="font-headline-md text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Startup Support?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We understand the startup grind. We are built to be your reliable digital partner.</p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "All-in-One Solution",
                desc: "Save your time and money. No more dealing with designers, developers, and marketers separately.",
                icon: "handshake"
              },
              {
                title: "Startup-Friendly Budgets",
                desc: "We know early-stage budgets are tight. Our plans are highly flexible and purely results-oriented.",
                icon: "payments"
              },
              {
                title: "End-to-End Execution",
                desc: "You focus on your core business operations while we take full responsibility for scaling your digital presence.",
                icon: "task_alt"
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-5 border border-slate-700">
                  <span className="material-symbols-outlined text-creative-purple text-[24px]">{feature.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed text-[15px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
