import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Agency in Gurgaon | Turban Digital Studio",
  description: "Want more people to find your business on Google? Our SEO services in Gurgaon help improve your visibility, bring relevant traffic and generate leads.",
  keywords: ["Best SEO Company in Gurgaon", "SEO Services In Gurgaon", "SEO Agency in Gurgaon"],
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/services/seo',
  },
};

export default function SEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does SEO take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO is a long-term strategy. While technical fixes can show improvements in weeks, substantial organic growth and ranking on page 1 for competitive keywords typically takes 3 to 6 months of consistent effort."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee #1 rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No reputable agency can guarantee #1 rankings due to Google's dynamic algorithm. However, we guarantee the execution of proven, white-hat SEO strategies that historically drive significant organic growth."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between On-Page and Off-Page SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On-Page SEO involves optimizing your website's content, HTML tags, and structure. Off-Page SEO focuses on building your site's authority through backlinks and external signals."
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
            <span className="material-symbols-outlined text-[18px]">travel_explore</span> Expert SEO Services
          </div>
          <h1 className="font-headline-xl text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
            Dominate Search. <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Capture Traffic.</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Stop relying solely on paid ads. Build a sustainable organic lead generation engine with our white-hat, data-driven SEO strategies.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[16px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            Get a Free SEO Audit
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </section>

        {/* Section 2: Core SEO Pillars */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Holistic SEO Approach</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">We don't do guesswork. We build your site's authority from the ground up.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-slate-900 mb-4 block">build</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Technical SEO</h3>
              <p className="text-slate-600">We optimize your site's architecture, improve Core Web Vitals (LCP, CLS, FID), fix crawl errors, and implement correct Schema markups to ensure Google loves your site.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">edit_document</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">On-Page Optimization</h3>
              <p className="text-slate-600">Deep keyword research, content siloing, meta tag optimization, and semantic HTML structuring to make your content highly relevant to search intent.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">link</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Off-Page Authority</h3>
              <p className="text-slate-600">High-quality, contextual link-building from authoritative websites in your niche. We focus on quality PR and outreach, not spammy links.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Process & Tools */}
        <section className="bg-slate-900 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Data-Driven Execution</h2>
                <p className="text-slate-300 text-lg mb-8">We use industry-leading tools to audit, track, and execute campaigns that outrank your competitors.</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 font-semibold border border-slate-700">Ahrefs</span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 font-semibold border border-slate-700">SEMrush</span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 font-semibold border border-slate-700">Screaming Frog</span>
                  <span className="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 font-semibold border border-slate-700">Google Search Console</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our SEO Roadmap</h3>
                <ol className="space-y-4 text-slate-600 font-medium">
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</span> Comprehensive Technical Audit</li>
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</span> Competitor & Keyword Gap Analysis</li>
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</span> On-Page & Content Optimization</li>
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">4</span> Authority Link Building Outreach</li>
                  <li className="flex gap-4 items-center"><span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">5</span> Monthly Transparent Reporting</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: FAQ & CTA */}
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
            <h2 className="text-3xl font-bold mb-4">Start Dominating Google Today</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Let our SEO experts analyze your website and provide a custom strategy to increase your organic traffic.</p>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
              Request Your Free Audit
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

