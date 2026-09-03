import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    return { title: "Service Not Found | Turban Digital" };
  }

  return {
    title: `${service.title} Services | Turban Digital Agency Gurgaon`,
    description: `Drive massive ROI with our ${service.title} services. ${service.subtitle} - Partner with Turban Digital.`,
    keywords: [service.title, `${service.title} agency`, `${service.title} services in India`, "Digital Marketing", "Turban Digital"],
    openGraph: {
      title: `${service.title} Services | Turban Digital`,
      description: `Drive massive ROI with our ${service.title} services. ${service.subtitle}`,
      type: "website",
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services | Turban Digital`,
      description: `Drive massive ROI with our ${service.title} services. ${service.subtitle}`,
      images: [service.heroImage],
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-[100px]">
        {/* Service Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={service.heroImage} 
              alt={`${service.title} background`} 
              className="w-full h-full object-cover opacity-60 animate-[scale-in_20s_linear_infinite]"
              style={{ animation: 'pulse 20s infinite alternate' }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-slate-950/80"></div>
            <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-30 mix-blend-color-burn`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-sm font-semibold text-sm mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <span className="material-symbols-outlined text-[18px]">{service.icon}</span>
              Premium Services
            </div>
            <h1 className="font-headline-xl text-5xl md:text-[72px] font-bold text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150 fill-mode-both">
              {service.title}
            </h1>
            <p className="font-body-lg text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 fill-mode-both">
              {service.subtitle}
            </p>
          </div>
        </section>

        {/* Content & Features Section */}
        <section className="py-24 relative z-20 bg-slate-50 -mt-8 rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Description */}
              <div className="lg:col-span-5">
                <div className="sticky top-32">
                  <h2 className="font-headline-lg text-3xl font-bold text-slate-900 mb-6">
                    What We Do
                  </h2>
                  <p className="font-body-md text-lg text-slate-600 leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <Link 
                    href="/#contact"
                    className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${service.color} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                  >
                    Start Your Project
                    <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Features Bento Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <article 
                      key={index} 
                      className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${service.color} opacity-10 mb-6 group-hover:scale-110 transition-transform`}></div>
                      <h3 className="font-headline-sm text-xl font-bold text-slate-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="font-body-md text-slate-500">
                        {feature.desc}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NEW: How It Works Section */}
        {service.process && (
          <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="text-center mb-16">
                <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  How It Works
                </h2>
                <p className="font-body-lg text-lg text-slate-500">
                  Our proven 3-step process to deliver exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center mb-6 relative overflow-hidden group-hover:-translate-y-2 transition-all duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                      <span className="font-extrabold text-2xl text-slate-300 group-hover:text-slate-800 transition-colors">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Portfolio / Results Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Work & Results
              </h2>
              <p className="font-body-lg text-lg text-slate-500">
                A glimpse into what we&apos;ve built and achieved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.portfolioImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`rounded-[2rem] overflow-hidden group shadow-md ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <div className="relative w-full h-full min-h-[300px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={img} 
                      alt={`Portfolio showcase ${index + 1}`} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW: FAQ Section */}
        {service.faqs && (
          <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
              <div className="text-center mb-16">
                <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="font-body-lg text-lg text-slate-500">
                  Everything you need to know about our {service.title.toLowerCase()} services.
                </p>
              </div>

              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                    <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-400 mt-0.5">help</span>
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 pl-9 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
