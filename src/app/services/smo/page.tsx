import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Optimization Company in Gurgaon | Turban Digital Studio",
  description: "Build a stronger social media presence with our SMO services in Gurgaon. We help businesses increase reach, engagement and connect with the right audience.",
  keywords: ["Social Media Optimization Company in Gurgaon", "Social Media Optimization Services", "SMO Services in Gurgaon", "Social Media Management Company"],
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/services/smo',
  },
};

export default function SMOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What platforms do you manage for SMO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage and optimize profiles on Instagram, Facebook, LinkedIn, X (Twitter), YouTube, and Pinterest, tailored to where your specific audience is most active."
        }
      },
      {
        "@type": "Question",
        "name": "Do you create the content or do I need to supply it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide end-to-end content creation, including graphic design, copywriting, video editing (Reels/Shorts), and community management. You can be as hands-off as you prefer."
        }
      },
      {
        "@type": "Question",
        "name": "How is SMO different from Social Media Marketing (Ads)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMO focuses on organic growth, brand building, profile optimization, and community engagement without direct ad spend. Social Media Marketing (SMM) typically refers to paid advertising on those platforms."
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
            <span className="material-symbols-outlined text-[18px]">favorite</span> Social Media Optimization
          </div>
          <h1 className="font-headline-xl text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
            Build a Brand That <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">People Love</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Social media isn't just about posting; it's about building a community. We craft compelling social strategies that foster engagement, trust, and intense brand loyalty.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[16px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            Grow Your Audience
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </section>

        {/* Section 2: Core Services */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Comprehensive Social Management</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">We handle everything from content creation to proactive community engagement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">palette</span>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Content Creation</h3>
              <p className="text-slate-600 text-sm">High-quality graphics, carousels, and copywriting that stops the scroll.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
              <span className="material-symbols-outlined text-4xl text-creative-purple mb-4 block">smart_display</span>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Short-Form Video</h3>
              <p className="text-slate-600 text-sm">Engaging Reels, TikToks, and Shorts designed for viral reach.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">forum</span>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Community Mgmt</h3>
              <p className="text-slate-600 text-sm">Active responding, DM management, and building relationships with followers.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
              <span className="material-symbols-outlined text-4xl text-purple-500 mb-4 block">monitoring</span>
              <h3 className="text-lg font-bold mb-3 text-slate-900">Analytics & Strategy</h3>
              <p className="text-slate-600 text-sm">Monthly reports and continuous pivoting based on algorithm updates.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Why it Matters */}
        <section className="bg-white py-24 mb-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-slate-900 p-12 rounded-[2rem] text-white">
              <h3 className="text-2xl font-bold mb-8 text-center border-b border-slate-800 pb-6">Platforms We Master</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center">
                  <span className="font-bold text-lg">Instagram</span>
                  <span className="text-primary text-sm">Visuals & Reels</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-lg">LinkedIn</span>
                  <span className="text-primary text-sm">B2B & Thought Leadership</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-lg">Facebook</span>
                  <span className="text-primary text-sm">Community Groups</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-lg">X (Twitter)</span>
                  <span className="text-slate-400 text-sm">Real-time Engagement</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Organic Growth <br/> Done Right.</h2>
              <p className="text-slate-600 text-lg mb-6">
                Most agencies treat social media as a dumping ground for links. We treat it as a conversation.
              </p>
              <p className="text-slate-600 text-lg mb-8">
                By understanding your brand voice and your audience's desires, we create native content that the algorithms favor and users actually want to consume.
              </p>
              <div className="flex gap-4">
                <div className="bg-primary/5 px-4 py-3 rounded-lg border border-primary/10 font-semibold text-primary">Brand Awareness</div>
                <div className="bg-creative-purple/5 px-4 py-3 rounded-lg border border-creative-purple/10 font-semibold text-creative-purple">Trust Building</div>
                <div className="bg-primary/5 px-4 py-3 rounded-lg border border-primary/10 font-semibold text-blue-700">Customer Retention</div>
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
            <h2 className="text-3xl font-bold mb-4">Elevate Your Brand Today</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Let our creative team craft a social media strategy that turns followers into loyal customers.</p>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
              Speak with a Strategist
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

