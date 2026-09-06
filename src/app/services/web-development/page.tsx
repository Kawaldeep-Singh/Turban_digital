import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Company in Gurgaon | Turban Digital Studio",
  description: "Need a website for your business? We create fast, modern and user-friendly websites in Gurgaon that look great and help you get more customers.",
  keywords: ["Web Development Services in Gurgaon", "Web Development Company in India", "Web Design Agency", "Top Web Companies In Gurgaon"],
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/services/web-development',
  },
};

export default function WebDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technologies do you use for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in modern stacks like React, Next.js, Tailwind CSS, and Headless CMS (Sanity, Strapi). We also build robust WordPress and Shopify stores depending on client requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard corporate website takes 3-4 weeks, while complex web applications or custom e-commerce stores can take 8-12 weeks from design to deployment."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be mobile-friendly and SEO optimized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our websites are built with mobile-first responsive design and deep on-page SEO optimization out of the box."
        }
      }
    ]
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen pt-[120px] pb-24 bg-slate-50">
        
        {/* Section 1: Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
            <span className="material-symbols-outlined text-[18px]">code</span> Expert Web Development
          </div>
          <h1 className="font-headline-xl text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
            Build a Website That <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Drives Revenue</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Your website is your 24/7 salesperson. We build lightning-fast, high-converting, and SEO-optimized web applications tailored to your business needs. 
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[16px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            Get a Free Proposal
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </section>

        {/* Section 2: Services / What we offer */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Web Development Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">From landing pages to complex enterprise platforms, we have you covered.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">devices</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Custom Web Apps (Next.js/React)</h3>
              <p className="text-slate-600">High-performance single-page applications and server-side rendered websites built on modern JavaScript frameworks.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-creative-purple mb-4 block">shopping_cart</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">E-Commerce Solutions</h3>
              <p className="text-slate-600">Scalable online stores on Shopify, WooCommerce, or custom-built Headless E-commerce platforms to maximize conversions.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">storefront</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Corporate Websites</h3>
              <p className="text-slate-600">Professional, fast-loading, and secure websites that establish your brand authority and capture B2B leads.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="bg-white py-24 mb-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Proven Process</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">How we take your project from concept to launch seamlessly.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4">1</div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Discovery</h3>
                <p className="text-sm text-slate-600">We analyze your goals, target audience, and technical requirements.</p>
              </div>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4">2</div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">UI/UX Design</h3>
                <p className="text-sm text-slate-600">Creating wireframes and high-fidelity mockups for your approval.</p>
              </div>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4">3</div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Development</h3>
                <p className="text-sm text-slate-600">Writing clean, scalable code and integrating necessary APIs.</p>
              </div>
              <div className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-4">4</div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Testing & Launch</h3>
                <p className="text-sm text-slate-600">Rigorous QA, speed optimization, and going live flawlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Tech Stack (SEO keyword rich) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
          <h2 className="text-3xl font-bold mb-10 text-slate-900">Technologies We Master</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'Shopify', 'WordPress', 'Sanity CMS', 'AWS', 'Vercel'].map(tech => (
              <span key={tech} className="px-6 py-3 bg-white rounded-xl border border-slate-200 font-semibold text-slate-700 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Section 5: FAQ & CTA */}
        <section className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4 mb-16">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.name}</h3>
                <p className="text-slate-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary to-creative-purple p-10 rounded-[2rem] text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Start Your Project Today</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Let's build a website that not only looks stunning but performs exceptionally well on search engines.</p>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
              Contact Our Experts
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

