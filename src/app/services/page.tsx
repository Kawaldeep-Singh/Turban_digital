import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesComponent from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Digital Marketing Services | Turban Digital Studio",
  description: "Explore our comprehensive suite of digital marketing services including SEO, Web Development, App Development, Performance Marketing, SMO, and Video Editing.",
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[120px] pb-24">
        {/* Enhanced Hero Section */}
        <section className="relative w-full py-32 md:py-48 overflow-hidden bg-slate-950 flex flex-col items-center justify-center -mt-[120px] mb-12">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-creative-purple/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-pulse"></div>
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{ 
                backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", 
                backgroundSize: "64px 64px",
                maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 20%, transparent 100%)"
              }}
            ></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10 pt-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-sm mb-8 shadow-xl">
              <span className="material-symbols-outlined text-[18px] text-primary">rocket_launch</span> Growth-Driven Solutions
            </div>
            <h1 className="font-headline-xl text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Services</span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We offer an end-to-end suite of digital marketing services designed to scale your business and drive predictable revenue.
            </p>
          </div>
        </section>
        
        {/* We reuse the existing Services component from the homepage */}
        <div className="relative z-20">
          <ServicesComponent />
        </div>
      </main>
      <Footer />
    </>
  );
}

