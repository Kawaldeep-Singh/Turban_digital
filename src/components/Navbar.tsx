"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSolid = scrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", href: "/about-us" },
    { 
      name: "Services", 
      href: "/services",
      subItems: [
        { name: "Performance Marketing", href: "/services/performance-marketing" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "App Development", href: "/services/app-development" },
        { name: "SEO Optimization", href: "/services/seo" },
        { name: "Social Media (SMO)", href: "/services/smo" },
        { name: "Video Editing", href: "/services/video-editing" }
      ]
    },
    { name: "Pricing", href: "/#pricing" },
    { name: "Team", href: "/#team" },
  ];

  const mobileNavItems = [
    { name: "About Us", href: "/about-us" },
    { 
      name: "Services", 
      href: "/services",
      subItems: [
        { name: "Performance Marketing", href: "/services/performance-marketing" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "App Development", href: "/services/app-development" },
        { name: "SEO Optimization", href: "/services/seo" },
        { name: "Social Media (SMO)", href: "/services/smo" },
        { name: "Video Editing", href: "/services/video-editing" }
      ]
    },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Team", href: "/#team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out border-b py-4 ${isSolid
        ? "bg-white/90 backdrop-blur-2xl shadow-sm border-slate-200/60"
        : "bg-slate-900/10 backdrop-blur-md border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <Link
          className="flex items-center gap-3 group"
          href="/"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo.png"
            alt="Turban Digital Logo"
            className="h-20 -my-5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            item.subItems ? (
              <div key={item.name} className="relative group py-2">
                <Link
                  href={item.href}
                  className={`relative font-label-md text-[15px] font-semibold transition-colors flex items-center group-hover:text-primary ${isSolid ? 'text-slate-600' : 'text-slate-300 hover:text-white'}`}
                >
                  {item.name}
                  <span className="material-symbols-outlined text-[18px] ml-0.5 opacity-70 group-hover:rotate-180 transition-transform">expand_more</span>
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-t-full transition-all duration-300 group-hover:w-8 opacity-0 group-hover:opacity-100 ${isSolid ? 'bg-primary' : 'bg-white'}`}></span>
                </Link>
                <div className="absolute top-full -left-6 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col p-3 gap-1">
                    {item.subItems.map(sub => (
                      <Link 
                        key={sub.name} 
                        href={sub.href} 
                        className="px-4 py-2.5 hover:bg-slate-50 rounded-xl text-slate-700 hover:text-primary transition-colors text-[14px] font-semibold flex items-center justify-between group/sub"
                      >
                        {sub.name}
                        <span className="material-symbols-outlined text-[16px] opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-primary">chevron_right</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                className={`relative font-label-md text-[15px] font-semibold transition-colors group py-2 flex items-center ${isSolid ? 'text-slate-600 hover:text-primary' : 'text-slate-300 hover:text-white'}`}
                href={item.href}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-t-full transition-all duration-300 group-hover:w-8 opacity-0 group-hover:opacity-100 ${isSolid ? 'bg-primary' : 'bg-white'}`}></span>
              </Link>
            )
          ))}
        </div>


        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a
              className="relative inline-flex items-center justify-center px-7 py-3 font-label-md text-[15px] font-semibold text-white rounded-full overflow-hidden group shadow-[0_4px_20px_rgba(0,62,199,0.3)] hover:shadow-[0_8px_25px_rgba(0,62,199,0.45)] transition-all hover:-translate-y-0.5"
              href="#contact"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-[#4f46e5] to-creative-purple transition-all duration-500 group-hover:bg-[length:200%_auto] group-hover:animate-gradient"></span>
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </span>
            </a>
          </div>
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden flex items-center justify-center w-11 h-11 rounded-full border transition-colors shadow-sm ${isSolid ? 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 ease-in-out origin-top max-h-[85vh] overflow-y-auto ${mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"
          }`}
      >
        <div className="flex flex-col px-6 py-6 gap-2">
          {mobileNavItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <Link
                className="px-6 py-3.5 font-label-md text-lg font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary rounded-2xl transition-colors flex justify-between items-center"
                href={item.href}
                onClick={() => !item.subItems && setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="flex flex-col pl-6 mt-1 border-l-[3px] border-slate-100 ml-10 gap-1 mb-2">
                  {item.subItems.map(sub => (
                    <Link 
                      key={sub.name} 
                      href={sub.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="px-4 py-2.5 text-[15px] font-semibold text-slate-500 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            className="mt-4 flex items-center justify-center w-full px-6 py-4 font-label-md text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-primary to-creative-purple shadow-xl"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started Now
          </a>
        </div>
      </div>
    </header>
  );
}
