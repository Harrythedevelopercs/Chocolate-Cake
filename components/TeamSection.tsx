"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Alex Morgan",
    role: "Lead Systems Architect",
    specialty: "Distributed Systems & Next.js",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Elena Rostova",
    role: "Head of UI/UX Engineering",
    specialty: "Design Systems & Interactions",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Marcus Vance",
    role: "Senior Full-Stack Lead",
    specialty: "High-Volume APIs & Databases",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sophia Chen",
    role: "Cloud DevOps & Security Specialist",
    specialty: "AWS, CI/CD & Penetration Testing",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1ea84b]">
            <span className="w-5 h-0.5 bg-[#1ea84b]" />
            <span>OUR TEAM</span>
            <span className="w-5 h-0.5 bg-[#1ea84b]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight">
            Meet Our Technology Experts
          </h2>
          <p className="text-base text-[#64748b]">
            Experienced engineers and strategic designers passionate about building real products.
          </p>
        </div>

        {/* Carousel controls matching reference design */}
        <div className="flex items-center gap-3">
          <button
            className="w-11 h-11 rounded-full bg-white hover:bg-[#1ea84b] text-[#0f172a] hover:text-white border border-[#e2e8f0] flex items-center justify-center shadow-sm transition-all hover:scale-105"
            aria-label="Previous Team Member"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="w-11 h-11 rounded-full bg-[#1ea84b] hover:bg-[#168a3d] text-white flex items-center justify-center shadow-md shadow-[#1ea84b]/20 transition-all hover:scale-105"
            aria-label="Next Team Member"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={index}
            className="group bg-white rounded-[28px] overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#1ea84b]/50 transition-all duration-300"
          >
            {/* Image Container with Social Overlay */}
            <div className="relative h-72 w-full overflow-hidden bg-[#f1f5f9]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Floating Social Icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/95 text-[#0f172a] hover:bg-[#1ea84b] hover:text-white flex items-center justify-center shadow-md transition-colors text-[11px] font-bold"
                  aria-label={`${member.name} LinkedIn`}
                >
                  in
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/95 text-[#0f172a] hover:bg-[#1ea84b] hover:text-white flex items-center justify-center shadow-md transition-colors text-[11px] font-bold"
                  aria-label={`${member.name} Twitter`}
                >
                  x
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/95 text-[#0f172a] hover:bg-[#1ea84b] hover:text-white flex items-center justify-center shadow-md transition-colors text-[11px] font-bold"
                  aria-label={`${member.name} GitHub`}
                >
                  git
                </a>
              </div>
            </div>

            {/* Member Info */}
            <div className="p-5 text-center">
              <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#1ea84b] transition-colors">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-[#1ea84b] mt-0.5">{member.role}</p>
              <p className="text-[11px] text-[#64748b] mt-1.5">{member.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
