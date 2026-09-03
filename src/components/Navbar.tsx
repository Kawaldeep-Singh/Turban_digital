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
          {[
           
            { name: "Pricing", href: "/#pricing" },
            { name: "Team", href: "/#team" },
            { name: "Blog", href: "/blog" }
          ].map((item) => (
            <Link
              key={item.name}
              className={`relative font-label-md text-[15px] font-semibold transition-colors group py-2 ${isSolid ? 'text-slate-600 hover:text-primary' : 'text-slate-300 hover:text-white'}`}
              href={item.href}
            >
              {item.name}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] rounded-t-full transition-all duration-300 group-hover:w-8 opacity-0 group-hover:opacity-100 ${isSolid ? 'bg-primary' : 'bg-white'}`}></span>
            </Link>
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
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"
          }`}
      >
        <div className="flex flex-col px-6 py-6 gap-3">
          {[
            { name: "Services", href: "/#services" },
            { name: "Case Studies", href: "/#case-studies" },
            { name: "Pricing", href: "/#pricing" },
            { name: "Team", href: "/#team" },
            { name: "Blog", href: "/blog" }
          ].map((item) => (
            <Link
              key={item.name}
              className="px-6 py-4 font-label-md text-lg font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary rounded-2xl transition-colors"
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
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
