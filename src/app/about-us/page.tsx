import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Turban Digital Studio | Top Digital Marketing Agency in Gurgaon",
  description: "Learn about Turban Digital Studio, Gurgaon's premier digital marketing agency. We specialize in ROI-driven SEO, performance marketing, and web development.",
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[120px] pb-24 bg-slate-50">
        
        {/* Section 1: Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
          <h1 className="font-headline-xl text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Turban Digital</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            We are a collective of digital growth hackers, creative thinkers, and technical experts based in Gurgaon. We don't just execute campaigns; we build sustainable digital engines that generate predictable revenue for ambitious brands.
          </p>
        </section>

        {/* Section 2: Our Story & Mission */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our mission is simple: To eliminate the guesswork from digital marketing. We believe that every rupee spent on marketing should be an investment, not an expense. By combining data analytics with creative excellence, we empower businesses to dominate their respective markets.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the most trusted digital growth partner in India, known for complete transparency, ethical practices, and an relentless obsession with our clients' bottom-line results.
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden bg-slate-100">
              <Image 
                src="/indian_agency_hero.jpg" 
                alt="Turban Digital Studio Team in Gurgaon" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Why Partner With Us?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">We are not your traditional agency. We are your outsourced digital growth department.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[32px]">query_stats</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Data-Driven Approach</h3>
              <p className="text-slate-600">We rely on hard numbers, not gut feelings. Every decision, from ad spend to SEO keywords, is backed by rigorous data analysis to ensure maximum ROI.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-creative-purple/10 rounded-2xl flex items-center justify-center text-creative-purple mb-6">
                <span className="material-symbols-outlined text-[32px]">handshake</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Complete Transparency</h3>
              <p className="text-slate-600">No hidden fees, no vanity metrics, and no black-box strategies. You get full access to your dashboards and straightforward reports on what's working.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Scalable Results</h3>
              <p className="text-slate-600">We don't just build for today; we build for tomorrow. Our web architectures and marketing funnels are designed to scale seamlessly as your business grows.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Our Core Values */}
        <section className="bg-slate-900 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-4xl font-bold mb-16 text-white">Our Core Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-slate-700 mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                <p className="text-slate-400 text-sm">Doing the right thing, always.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-700 mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-slate-400 text-sm">Staying ahead of digital trends.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-700 mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-slate-400 text-sm">Delivering premium quality.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-slate-700 mb-4">04</div>
                <h3 className="text-xl font-bold text-white mb-2">Accountability</h3>
                <p className="text-slate-400 text-sm">Owning our results entirely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-creative-purple/10 p-12 md:p-20 rounded-[2rem] border border-primary/20">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Ready to Scale Your Business?</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">Let's discuss how our data-driven digital strategies can help you crush your revenue goals this year.</p>
            <Link href="/#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[16px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Schedule a Free Strategy Call
              <span className="material-symbols-outlined ml-2 text-[20px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
