import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Editing Company in Gurgaon | Turban Digital Studio",
  description: "Make your brand stand out with engaging videos and reels. Our video editing services in Gurgaon help you create professional content people want to watch.",
  keywords: ["Video Editing Services in India", "Video Editing Services", "Professional Video Editing Services in Gurgaon"],
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/services/video-editing',
  },
};

export default function VideoEditingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What type of video editing do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in high-retention short-form content (Reels, TikToks, Shorts), YouTube long-form videos, corporate promotional videos, and social media ad creatives."
        }
      },
      {
        "@type": "Question",
        "name": "What software do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our editors use industry-standard software including Adobe Premiere Pro, After Effects, and DaVinci Resolve to ensure cinematic quality and advanced motion graphics."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to edit a video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Turnaround times depend on the complexity and length. Short-form videos typically take 24-48 hours, while complex corporate videos or long-form YouTube edits may take 4-7 days."
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
            <span className="material-symbols-outlined text-[18px]">movie</span> Cinematic Video Editing
          </div>
          <h1 className="font-headline-xl text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
            Tell Your Story Through <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Captivating Visuals</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            In the age of scrolling, attention is currency. We edit high-retention videos that stop the scroll, engage your audience, and drive conversions.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[16px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            Request a Sample Edit
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </section>

        {/* Section 2: Types of Videos */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Content We Edit</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">From viral social clips to professional corporate broadcasts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-creative-purple mb-4 block">phone_android</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Short-Form Content</h3>
              <p className="text-slate-600">Fast-paced edits for Instagram Reels, YouTube Shorts, and TikTok with dynamic captions (Hormozi style) and trending audio.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">play_circle</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">YouTube Long-Form</h3>
              <p className="text-slate-600">Engaging storytelling, b-roll integration, lower thirds, and perfect pacing to keep viewers watching until the end.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-4xl text-slate-800 mb-4 block">business</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Corporate & Ads</h3>
              <p className="text-slate-600">Professional promotional videos, product demos, and high-converting video creatives for Facebook and Google Ads.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Why Video / Process */}
        <section className="bg-white py-24 mb-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Why Video Marketing is Non-Negotiable</h2>
              <p className="text-slate-600 text-lg mb-6">
                Video content generates 1200% more shares than text and images combined. If you aren't producing video, your competitors are stealing your attention.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-semibold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 
                  Higher Engagement Rates
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-semibold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 
                  Builds Trust & Authenticity Faster
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-semibold">
                  <span className="material-symbols-outlined text-primary">check_circle</span> 
                  Favored by all Social Algorithms
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
               <h3 className="text-2xl font-bold mb-8 border-b border-slate-800 pb-4">Our Editing Stack</h3>
               <div className="space-y-6 relative z-10">
                 <div>
                   <h4 className="font-bold text-creative-purple mb-1">Adobe Premiere Pro</h4>
                   <p className="text-sm text-slate-400">For flawless timeline editing and pacing.</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-creative-purple mb-1">Adobe After Effects</h4>
                   <p className="text-sm text-slate-400">For complex motion graphics and visual effects.</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-creative-purple mb-1">DaVinci Resolve</h4>
                   <p className="text-sm text-slate-400">For cinematic color grading and correction.</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Go Viral?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Send us your raw footage and let our expert editors turn it into gold.</p>
            <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
              Discuss Your Video Needs
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
