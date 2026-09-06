"use client";

import { useState } from "react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{ 
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)"
          }}
        ></div>
        
        {/* Animated Decorative Glows */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-creative-purple/15 rounded-full blur-[140px] animate-[bounce_8s_infinite] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="font-label-sm text-[14px] font-bold text-primary uppercase tracking-widest mb-4">Your Investment</p>
          <h2 className="font-headline-lg text-4xl md:text-4xl font-bold text-white mb-6">
            Growth Plans Built To Scale
          </h2>
          <p className="font-body-lg text-lg text-slate-400 max-w-2xl mx-auto">
            No bloated agency retainers or hidden fees. Just transparent, scalable pricing designed to deliver maximum ROI from day one.
          </p>
        </div>

        {/* iOS Style Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center p-1.5 bg-slate-800/80 backdrop-blur-md rounded-full border border-slate-700/50 relative shadow-inner">
            {/* Sliding Indicator */}
            <div 
              className="absolute h-[calc(100%-12px)] top-[6px] left-0 bg-slate-700 rounded-full shadow-md border border-slate-600/50 transition-all duration-500 ease-spring"
              style={{
                width: activeTab === 'monthly' ? '33.33%' : activeTab === 'one-time' ? '33.33%' : '33.33%',
                transform: `translateX(${activeTab === 'monthly' ? '0%' : activeTab === 'one-time' ? '100%' : '200%'}) scale(0.95)`
              }}
            ></div>
            
            <button
              onClick={() => setActiveTab("monthly")}
              className={`relative z-10 px-6 sm:px-8 py-3 text-[14px] sm:text-[15px] font-semibold rounded-full transition-colors duration-300 w-full sm:w-auto ${
                activeTab === "monthly" ? "text-white" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              Monthly Retainers
            </button>
            <button
              onClick={() => setActiveTab("one-time")}
              className={`relative z-10 px-6 sm:px-8 py-3 text-[14px] sm:text-[15px] font-semibold rounded-full transition-colors duration-300 w-full sm:w-auto ${
                activeTab === "one-time" ? "text-white" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              One-Time Projects
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`relative z-10 px-6 sm:px-8 py-3 text-[14px] sm:text-[15px] font-semibold rounded-full transition-colors duration-300 w-full sm:w-auto ${
                activeTab === "video" ? "text-white" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              Video Editing
            </button>
          </div>
        </div>

        {/* Monthly Retainers Content */}
        {activeTab === "monthly" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Package A */}
            <div className="p-8 bg-slate-800/50 backdrop-blur-md rounded-[2rem] border border-slate-700/50 shadow-lg flex flex-col h-[95%] hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Package A</h3>
              <p className="text-slate-400 text-sm font-medium mb-8">Social Media & SEO</p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-[40px] font-extrabold text-white tracking-tight">₹25k</span>
                <span className="text-slate-400 font-medium">/mo</span>
              </div>
              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {[
                  "12-15 Social Posts",
                  "Basic SEO Optimization",
                  "Monthly Reporting",
                  "Email Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium text-[15px]">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full py-4 text-center bg-slate-700/50 border border-slate-600 text-white rounded-2xl font-bold hover:bg-slate-600 transition-colors">
                Get Started
              </a>
            </div>

            {/* Package B (Popular) */}
            <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-b from-primary to-creative-purple shadow-[0_0_30px_rgba(0,62,199,0.3)] transform md:-translate-y-4">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-creative-purple text-white px-5 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase shadow-lg z-20">
                Most Popular
              </div>
              <div className="bg-slate-900 p-8 rounded-[1.9rem] flex flex-col h-full relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Package B</h3>
                <p className="text-primary-fixed text-sm font-bold mb-8">Performance Marketing</p>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-[48px] font-extrabold text-white tracking-tight">₹45k</span>
                  <span className="text-slate-400 font-medium">/mo</span>
                </div>
                <ul className="flex flex-col gap-4 mb-10 flex-grow">
                  {[
                    "Google & Meta Ads Mgmt",
                    "High-ROI Strategy",
                    "Weekly Performance Calls",
                    "A/B Testing",
                    "Priority Support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200 font-medium text-[15px]">
                      <span className="material-symbols-outlined text-primary-fixed text-[20px]">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="w-full py-4 text-center bg-white text-slate-900 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </a>
              </div>
            </div>

            {/* Package C */}
            <div className="p-8 bg-slate-800/50 backdrop-blur-md rounded-[2rem] border border-slate-700/50 shadow-lg flex flex-col h-[95%] hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Package C</h3>
              <p className="text-slate-400 text-sm font-medium mb-8">The Growth Bundle</p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-[40px] font-extrabold text-white tracking-tight">₹80k+</span>
                <span className="text-slate-400 font-medium">/mo</span>
              </div>
              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {[
                  "Full Digital Ecosystem",
                  "Content + Ads + SEO",
                  "Dedicated Account Manager",
                  "Custom Funnel Builds",
                  "24/7 Slack Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 font-medium text-[15px]">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="w-full py-4 text-center bg-slate-700/50 border border-slate-600 text-white rounded-2xl font-bold hover:bg-slate-600 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        )}

        {/* One-Time Projects Content */}
        {activeTab === "one-time" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-8 bg-slate-800/50 backdrop-blur-md rounded-[2rem] border border-slate-700/50 hover:border-slate-600 transition-colors shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8">Web Development</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
                  <div>
                    <p className="font-bold text-white text-lg">Basic Website</p>
                    <p className="text-[14px] text-slate-400 mt-1">Landing pages, Portfolio</p>
                  </div>
                  <p className="text-2xl font-extrabold text-primary-fixed">₹15k+</p>
                </div>
                <div className="flex justify-between items-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
                  <div>
                    <p className="font-bold text-white text-lg">Professional Web</p>
                    <p className="text-[14px] text-slate-400 mt-1">E-commerce, Custom CMS</p>
                  </div>
                  <p className="text-2xl font-extrabold text-primary-fixed">₹40k+</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-md rounded-[2rem] border border-slate-700/50 hover:border-slate-600 transition-colors shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8">App Development</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
                  <div>
                    <p className="font-bold text-white text-lg">MVP Development</p>
                    <p className="text-[14px] text-slate-400 mt-1">Core features, Fast launch</p>
                  </div>
                  <p className="text-2xl font-extrabold text-primary-fixed">₹1.5L+</p>
                </div>
                <div className="flex justify-between items-center p-6 bg-slate-800 rounded-2xl border border-slate-700">
                  <div>
                    <p className="font-bold text-white text-lg">Full Featured App</p>
                    <p className="text-[14px] text-slate-400 mt-1">Scalable, Multi-platform</p>
                  </div>
                  <p className="text-2xl font-extrabold text-primary-fixed">₹4L+</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Editing Content */}
        {activeTab === "video" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-8 bg-slate-800/50 backdrop-blur-md rounded-[2rem] border border-slate-700/50 shadow-lg hover:border-slate-600 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">Reels & Shorts</h3>
                <p className="text-slate-400 mb-8 text-[15px]">High-engagement vertical content with captions, transitions, and trending effects.</p>
                <p className="text-4xl font-extrabold text-primary-fixed">₹1,500<span className="text-base text-slate-500 font-medium">/video</span></p>
              </div>
              <div className="p-8 bg-slate-800/50 backdrop-blur-md rounded-[2rem] border border-slate-700/50 shadow-lg hover:border-slate-600 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-4">YouTube Videos</h3>
                <p className="text-slate-400 mb-8 text-[15px]">Long-form storytelling, precise color grading, and professional sound design.</p>
                <p className="text-4xl font-extrabold text-primary-fixed">₹5,000<span className="text-base text-slate-500 font-medium">/video</span></p>
              </div>
            </div>
            <div className="p-8 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-slate-700/50 text-white flex items-center justify-center border border-slate-600/50">
                  <span className="material-symbols-outlined text-[28px]">add_circle</span>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Add-on Service Available</p>
                  <p className="text-slate-400 text-sm">Bundle video editing with any retainer for exclusive discounts.</p>
                </div>
              </div>
              <a href="#contact" className="px-8 py-3.5 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors shadow-md w-full md:w-auto text-center">
                Inquire Now
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
