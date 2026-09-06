import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performance Marketing Agency in Gurgaon | Turban Digital Studio",
  description: "Grow your business with smart performance marketing in Gurgaon. We help you reach the right audience, generate quality leads and improve conversions.",
  keywords: ["Performance Marketing Agency in Gurgaon", "Performance Marketing Services In India", "Performance Marketing Company in Gurgaon"],
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/services/performance-marketing',
  },
};

export default function PerformanceMarketingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Performance Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Performance marketing is a results-driven approach to digital advertising where you pay specifically for measurable actions, such as leads, sales, or clicks, rather than just brand awareness."
        }
      },
      {
        "@type": "Question",
        "name": "Which platforms do you run ads on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage campaigns across Google Ads (Search, Display, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads (for B2B), and programmatic platforms depending on where your target audience lives."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike SEO, performance marketing can generate traffic and leads almost immediately after launch. However, it typically takes 2-4 weeks to gather enough data to optimize campaigns for the lowest Cost Per Acquisition (CPA)."
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-creative-purple/10 text-creative-purple font-bold text-sm mb-6">
            <span className="material-symbols-outlined text-[18px]">trending_up</span> ROI-Focused Advertising
          </div>
          <h1 className="font-headline-xl text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
            Turn Ad Spend Into <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Predictable Revenue</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Stop guessing with your marketing budget. We build high-converting funnels and data-driven ad campaigns that scale your business profitably.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[16px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            Audit My Ad Account
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </section>

        {/* Section 2: Platforms */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Where We Drive Growth</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">We dominate the platforms where your customers spend their time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">search</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Google Ads</h3>
              <p className="text-slate-600">Capture high-intent users actively searching for your products or services via Search, Shopping, and YouTube Ads.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-creative-purple mb-4 block">groups</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Meta Ads (FB/IG)</h3>
              <p className="text-slate-600">Leverage advanced audience targeting and compelling creatives to generate demand and drive conversions.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">work</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">LinkedIn Ads</h3>
              <p className="text-slate-600">The ultimate B2B growth engine. Target decision-makers by job title, industry, and company size.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Process */}
        <section className="bg-white py-24 mb-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">The Turban Digital Methodology</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">How we consistently achieve 3x to 5x ROAS for our clients.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">01</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Deep Audience Research</h3>
                    <p className="text-slate-600">We analyze customer psychology, competitors, and market gaps to craft offers that convert.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">02</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Full-Funnel Tracking Setup</h3>
                    <p className="text-slate-600">We implement server-side tracking (CAPI) and Google Tag Manager so no data is lost to iOS updates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">03</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Creative & Copy Testing</h3>
                    <p className="text-slate-600">We A/B test ad angles, headlines, and visuals aggressively to find the winning combinations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">04</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scaling the Winners</h3>
                    <p className="text-slate-600">Once we hit your target CPA, we inject budget systematically to scale your revenue without breaking returns.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-inner h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Stop Paying for Clicks. <br/> Start Paying for Customers.</h3>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm mb-4 flex justify-between items-center">
                  <span className="text-slate-500 font-semibold">Average Ad Spend Managed</span>
                  <span className="text-primary font-bold text-xl">₹5 Cr+ Annually</span>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center">
                  <span className="text-slate-500 font-semibold">Average Client ROAS</span>
                  <span className="text-creative-purple font-bold text-xl">420%</span>
                </div>
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
            <h2 className="text-3xl font-bold mb-4">Want to Scale Your Revenue?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free discovery call, and we'll map out a custom performance marketing strategy for your business.</p>
            <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
              Claim Your Free Strategy Session
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
