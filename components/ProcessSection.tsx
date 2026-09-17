"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "Step 01",
    title: "Discovery, Strategy & Tech Roadmap",
    description:
      "We dissect your business goals, user personas, and technical stack to formulate a transparent roadmap with fixed milestones, deliverables, and architecture blueprints.",
    deliverables: [
      "Technical architecture document",
      "Sprint roadmap & milestone timeline",
      "Fixed or milestone pricing agreement",
    ],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=900&auto=format&fit=crop",
    metric: "Day 1 to 5",
  },
  {
    step: "Step 02",
    title: "High-Fidelity UI/UX & Design System",
    description:
      "Our designers craft pixel-perfect, interactive Figma prototypes featuring clean typography, conversion-driven navigation, and modern micro-interactions.",
    deliverables: [
      "Interactive Figma click-through prototype",
      "Tailored design system & component library",
      "Mobile-first responsive layouts",
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=900&auto=format&fit=crop",
    metric: "Day 6 to 18",
  },
  {
    step: "Step 03",
    title: "Agile Development & Bi-Weekly Sprints",
    description:
      "Senior full-stack developers write clean, maintainable Next.js and backend code. You receive private access to live staging environments to test progress after each sprint.",
    deliverables: [
      "Live preview staging URL",
      "Production-ready clean TypeScript code",
      "Weekly video syncs & progress reports",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    metric: "Day 19 to 38",
  },
  {
    step: "Step 04",
    title: "Rigorous QA, Security & Cloud Launch",
    description:
      "We run automated test suites, cross-browser compatibility checks, and cloud DevOps setup on AWS/Vercel before handing over full IP rights and production keys.",
    deliverables: [
      "Automated CI/CD deployment pipeline",
      "Cross-browser and mobile device verification",
      "30-day post-launch warranty & source code handover",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop",
    metric: "Day 39 to 45",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1ea84b]">
          <span className="w-5 h-0.5 bg-[#1ea84b]" />
          <span>OUR PROCESS</span>
          <span className="w-5 h-0.5 bg-[#1ea84b]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight">
          Our Step-By-Step Process For Guaranteed Delivery
        </h2>
        <p className="text-base text-[#64748b]">
          A predictable, transparent engineering framework that eliminates guesswork and delivers on schedule.
        </p>
      </div>

      {/* Split Process Container Matching Reference Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border border-[#e2e8f0] shadow-sm">
        {/* Left Side: Step Accordion List */}
        <div className="lg:col-span-6 space-y-4">
          {PROCESS_STEPS.map((item, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                  isActive
                    ? "bg-[#f8faf9] border-[#1ea84b] shadow-sm"
                    : "bg-transparent border-transparent hover:bg-[#f8faf9]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full transition-colors ${
                        isActive
                          ? "bg-[#1ea84b] text-white"
                          : "bg-[#e2e8f0] text-[#475569]"
                      }`}
                    >
                      {item.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                      isActive ? "text-[#1ea84b] rotate-90" : "text-[#94a3b8]"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {isActive && (
                  <div className="mt-4 pt-3 border-t border-[#e2e8f0] space-y-3 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-1.5 pt-1">
                      {item.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-[#0f172a] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1ea84b] flex-shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: Step Image & Context Card */}
        <div className="lg:col-span-6">
          <div className="relative h-[380px] sm:h-[460px] w-full rounded-[28px] overflow-hidden shadow-lg border border-[#e2e8f0] group">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Top Right Duration Pill */}
            <div className="absolute top-6 right-6 z-10">
              <span className="bg-[#1ea84b] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                {current.metric}
              </span>
            </div>

            {/* Bottom Floating Step Detail */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg">
                <span className="text-[10px] uppercase font-bold text-[#1ea84b] tracking-wider block">
                  Active Sprint Phase
                </span>
                <h4 className="text-base font-bold text-[#0f172a] mt-0.5">
                  {current.title}
                </h4>
                <p className="text-xs text-[#64748b] mt-1 line-clamp-2">
                  {current.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
