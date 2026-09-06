import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile App Development Company in Gurgaon | Turban Digital Studio",
  description: "Turn your app idea into reality with our mobile app development services in Gurgaon. We build simple, fast and user-friendly Android and iOS apps.",
  keywords: ["App development services", "Mobile App Development Company India", "Android App Development Company in Gurgaon", "App Development Company in Gurgaon"],
  alternates: {
    canonical: 'https://www.turbandigitalstudio.in/services/app-development',
  },
};

export default function AppDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I build a native app or cross-platform app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your goals. Native apps (Swift for iOS, Kotlin for Android) offer the best performance and device integration. Cross-platform apps (React Native, Flutter) are faster to develop and cost-effective as they share a single codebase."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to develop a mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "App development costs vary widely based on features, platform choice, and backend complexity. Simple apps can start around ₹3 Lakhs, while complex enterprise apps scale higher. Contact us for an accurate quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with App Store optimization (ASO) and publishing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle the entire deployment process to the Apple App Store and Google Play Store, including initial App Store Optimization (ASO) to ensure your app gets discovered."
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
            <span className="material-symbols-outlined text-[18px]">smartphone</span> Premium App Development
          </div>
          <h1 className="font-headline-xl text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
            Transform Ideas Into <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Powerful Apps</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            In a mobile-first world, your app needs to be flawless. We design and develop native and cross-platform applications that engage users and drive business growth.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-creative-purple text-white font-bold text-[16px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            Discuss Your App Idea
            <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </section>

        {/* Section 2: Platforms & Technologies */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Platforms We Build For</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">We leverage the best technologies to ensure your app is fast, secure, and scalable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
              <span className="material-symbols-outlined text-5xl text-slate-900 mb-4 block">phone_iphone</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">iOS Development</h3>
              <p className="text-slate-600 mb-4">Native applications built with Swift and Objective-C for the entire Apple ecosystem.</p>
              <span className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-600">Swift & UIKit</span>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
              <span className="material-symbols-outlined text-5xl text-primary mb-4 block">android</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Android Development</h3>
              <p className="text-slate-600 mb-4">High-performance native applications tailored for the vast Android market.</p>
              <span className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-600">Kotlin & Java</span>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
              <span className="material-symbols-outlined text-5xl text-primary mb-4 block">layers</span>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Cross-Platform</h3>
              <p className="text-slate-600 mb-4">Cost-effective solutions that run on both iOS and Android from a single codebase.</p>
              <span className="text-xs font-bold bg-slate-100 px-3 py-1 rounded-full text-slate-600">React Native / Flutter</span>
            </div>
          </div>
        </section>

        {/* Section 3: Why Build an App */}
        <section className="bg-slate-900 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Why Invest in a Custom Mobile App?</h2>
                <p className="text-slate-300 text-lg mb-8">An app is more than a mobile website; it's a direct channel to your customer's pocket.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 shrink-0">
                      <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Direct Communication</h4>
                      <p className="text-slate-400">Reach customers instantly with push notifications to drive sales and engagement.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 shrink-0">
                      <span className="material-symbols-outlined text-[18px]">loyalty</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Build Brand Loyalty</h4>
                      <p className="text-slate-400">Create a personalized ecosystem that keeps users coming back to your brand.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1 shrink-0">
                      <span className="material-symbols-outlined text-[18px]">speed</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Superior Performance</h4>
                      <p className="text-slate-400">Native apps utilize device hardware for smooth, fast, and seamless user experiences.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Our App Dev Process</h3>
                <ol className="relative border-l border-slate-700 ml-4 space-y-6">                  
                  <li className="pl-6 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
                    <h4 className="text-white font-bold">1. Strategy & UI/UX Design</h4>
                    <p className="text-slate-400 text-sm">Mapping user journeys and creating stunning interfaces.</p>
                  </li>
                  <li className="pl-6 relative">
                    <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-2"></div>
                    <h4 className="text-white font-bold">2. Agile Development</h4>
                    <p className="text-slate-400 text-sm">Sprint-based coding ensuring transparency and rapid delivery.</p>
                  </li>
                  <li className="pl-6 relative">
                    <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-2"></div>
                    <h4 className="text-white font-bold">3. Rigorous QA Testing</h4>
                    <p className="text-slate-400 text-sm">Testing across multiple devices and OS versions for bug-free performance.</p>
                  </li>
                  <li className="pl-6 relative">
                    <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[6.5px] top-2"></div>
                    <h4 className="text-white font-bold">4. App Store Launch & ASO</h4>
                    <p className="text-slate-400 text-sm">Deploying to stores and optimizing listings for search visibility.</p>
                  </li>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Turn your vision into reality with our expert mobile app developers in Gurgaon.</p>
            <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
