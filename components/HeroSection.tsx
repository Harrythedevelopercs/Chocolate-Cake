"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    caption: "Full-Stack Development Team",
    subtext: "Delivering fast, scalable web apps with Next.js & Cloud DevOps",
    badge: "100+ Projects Shipped",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    caption: "Agile Sprint Collaboration",
    subtext: "Transparent weekly milestones with verified sprint delivery",
    badge: "U.S. Registered & Compliant",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    caption: "Expert Product Engineering",
    subtext: "From MVP validation to high-traffic enterprise architectures",
    badge: "45-Day MVP Delivery",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="pt-6 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Top Split Hero Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Green Box (Matching the reference design) */}
        <div className="lg:col-span-7 bg-[#1ea84b] text-white rounded-[32px] p-8 sm:p-12 md:p-14 flex flex-col justify-between shadow-xl shadow-[#1ea84b]/15 relative overflow-hidden">
          {/* Subtle geometric pattern overlay */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full pointer-events-none blur-2xl" />

          {/* Top Pill Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="h-0.5 w-6 bg-white/60" />
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-white/90">
              FAST, SCALABLE & ZERO-COMPROMISE IT
            </span>
            <span className="h-0.5 w-6 bg-white/60" />
          </div>

          {/* Hero Headline */}
          <div className="space-y-5 my-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.12]">
              Revolutionizing The Way Brands Connect, Engage & Grow Online!
            </h1>
            <p className="text-white/85 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
              Fast, affordable, and scalable digital solutions for startups, SMEs, and
              enterprises. From custom Next.js web applications to mobile MVPs, cloud DevOps,
              and cybersecurity.
            </p>
          </div>

          {/* CTA Action Pill Buttons */}
          <div className="pt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-white text-[#0f172a] hover:bg-[#f8faf9] text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full shadow-lg transition-all hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#1ea84b] stroke-[3]" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Right Layered Photo Card (Matching the layered look in the reference) */}
        <div className="lg:col-span-5 relative flex flex-col min-h-[420px] lg:min-h-full">
          {/* Card Frame */}
          <div className="relative w-full h-full min-h-[420px] rounded-[32px] overflow-hidden shadow-xl border border-black/5 bg-[#0f172a] group">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />

            {/* Gradient Scrim for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="absolute top-6 left-6 z-10">
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-[#0f172a] text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#1ea84b]" />
                <span>{slide.badge}</span>
              </div>
            </div>

            {/* Floating Navigation Controls (< and > green circles matching reference) */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-[#1ea84b] hover:bg-[#168a3d] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-[#1ea84b] hover:bg-[#168a3d] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption Pill Card */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#1ea84b]">
                      Real Human Engineering
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#0f172a] mt-0.5">
                      {slide.caption}
                    </h4>
                    <p className="text-xs text-[#64748b] mt-0.5">{slide.subtext}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Metric Bar (Directly below hero matching reference) */}
      <div className="mt-6 bg-white rounded-[28px] p-6 sm:p-8 border border-[#e2e8f0]/80 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#e2e8f0]">
          {/* Stat 1 */}
          <div className="flex flex-col sm:px-6 first:pl-0">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight">
              12K<span className="text-[#1ea84b]">+</span>
            </span>
            <span className="text-sm font-semibold text-[#64748b] mt-1">
              Worldwide Clients & Businesses
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col sm:px-6 pt-4 sm:pt-0">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight">
              100K<span className="text-[#1ea84b]">+</span>
            </span>
            <span className="text-sm font-semibold text-[#64748b] mt-1">
              Projects & Milestones Delivered
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col sm:px-6 pt-4 sm:pt-0 last:pr-0">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight">
              99<span className="text-[#1ea84b]">%</span>
            </span>
            <span className="text-sm font-semibold text-[#64748b] mt-1">
              Verified Client Satisfaction Rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
