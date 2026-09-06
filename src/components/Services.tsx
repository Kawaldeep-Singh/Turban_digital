import Link from "next/link";
import { servicesData } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <p className="font-label-sm text-[14px] font-bold text-primary uppercase tracking-widest mb-4">Your Growth Arsenal</p>
            <h2 className="font-headline-lg text-4xl md:text-4xl font-bold text-slate-900 leading-tight">
              Everything You Need To <br /> Dominate Your Niche
            </h2>
          </div>
          <p className="font-body-md text-lg text-slate-500 max-w-md pb-2">
            We don't offer cookie-cutter packages. We deploy custom, end-to-end digital solutions engineered to scale your revenue and crush your competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.id}`}
              className="group flex flex-col rounded-[1.5rem] p-8 border border-slate-200 hover:border-slate-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden bg-white z-10 cursor-pointer"
            >
              {/* Subtle Background Image */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={service.heroImage?.replace('w=2072', 'w=600').replace('w=2426', 'w=600').replace('w=2070', 'w=600').replace('w=1974', 'w=600')} 
                  alt="" 
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover opacity-[0.03] group-hover:opacity-[0.12] transition-all duration-700 group-hover:scale-110 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 group-hover:from-white/70 group-hover:to-white/90 transition-colors duration-500"></div>
              </div>

              {/* Huge Faint Watermark Icon */}
              <div className="absolute -right-8 -bottom-8 z-0 pointer-events-none">
                <span className="material-symbols-outlined text-[160px] text-slate-100 group-hover:text-primary/5 transition-colors duration-500 -rotate-12 group-hover:rotate-0">
                  {service.icon}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:shadow-md transition-all duration-500 border border-slate-200/50">
                    <span className="material-symbols-outlined text-[28px] text-slate-700 group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </span>
                  </div>
                  {service.tag && (
                    <span className="text-[12px] font-bold text-slate-500 bg-white shadow-sm border border-slate-100 px-3 py-1.5 rounded-full tracking-wide">
                      {service.tag}
                    </span>
                  )}
                </div>
                
                <h3 className="font-headline-sm text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body-md text-slate-500 mb-8 flex-grow leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                
                <div className="inline-flex items-center text-[15px] font-bold text-slate-900 group-hover:text-primary transition-colors mt-auto">
                  Learn More
                  <span className="material-symbols-outlined ml-2 text-[18px] transform group-hover:translate-x-1.5 transition-transform duration-300">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
