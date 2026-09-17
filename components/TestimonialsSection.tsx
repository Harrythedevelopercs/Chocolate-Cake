"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Michael B",
    role: "CEO",
    company: "Haidezign",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    quote:
      "SANFINC's approach to digital transformation went beyond just technology implementation. They took the time to understand our organizational culture and change management needs, fostering buy-in and adoption among our teams. The seamless integration of new systems has resulted in improved collaboration and productivity company-wide.",
  },
  {
    id: 2,
    name: "Micah Owen",
    role: "Director of Product",
    company: "Krakenbox",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    quote:
      "Our partnership with SANFINC was instrumental in modernizing our IT infrastructure. Their strategic guidance helped us future-proof our technology stack while staying strictly within budget and timeline constraints. Their dedication to client success is evident in the measurable improvements we've seen across our IT environment.",
  },
  {
    id: 3,
    name: "Mich Jackson",
    role: "Founder & Owner",
    company: "Mockupsea",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    quote:
      "As a healthcare technology provider, data security is paramount. SANFINC not only met but exceeded our expectations in ensuring the confidentiality and integrity of our sensitive information during our digital transformation. Their commitment to compliance and robust security measures gave us peace of mind throughout the process.",
  },
  {
    id: 4,
    name: "James Carter",
    role: "Marketing Director",
    company: "Vanguard Retail",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    quote:
      "Exceptional creativity and strategy! Our business and customer conversion metrics have never looked better. The Next.js frontend is lightning-fast, and their team was responsive every single day of the project.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header with Navigation Arrows Matching Reference Design */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1ea84b]">
            <span className="w-5 h-0.5 bg-[#1ea84b]" />
            <span>TESTIMONIALS</span>
            <span className="w-5 h-0.5 bg-[#1ea84b]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight">
            Why Our Customers Keep Coming Back
          </h2>
          <p className="text-base text-[#64748b]">
            Real experiences and measurable outcomes from founders and tech leaders.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevTestimonial}
            className="w-11 h-11 rounded-full bg-white hover:bg-[#1ea84b] text-[#0f172a] hover:text-white border border-[#e2e8f0] flex items-center justify-center shadow-sm transition-all hover:scale-105 active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-11 h-11 rounded-full bg-[#1ea84b] hover:bg-[#168a3d] text-white flex items-center justify-center shadow-md shadow-[#1ea84b]/20 transition-all hover:scale-105 active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[28px] p-8 border border-[#e2e8f0] shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-[#1ea84b]/50 transition-all duration-300"
          >
            <div>
              {/* Star Ratings */}
              <div className="flex items-center gap-1 text-[#eab308] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote Body */}
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Header */}
            <div className="pt-5 border-t border-[#f1f5f9] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#1ea84b]/20">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">{item.name}</h4>
                  <p className="text-xs text-[#64748b]">
                    {item.role}, <span className="font-semibold text-[#1ea84b]">{item.company}</span>
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#f8faf9] flex items-center justify-center text-[#94a3b8]">
                <Quote className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
