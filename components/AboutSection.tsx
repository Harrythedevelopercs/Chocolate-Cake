import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Cpu, Clock, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Side: Photo + 3 Vertically Stacked Cards (Matching Reference Image) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
          {/* Vertical Photo Card (5 cols on sm) */}
          <div className="sm:col-span-6 relative min-h-[380px] rounded-[30px] overflow-hidden shadow-md border border-[#e2e8f0]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
              alt="SANFINC Technical Leadership & Engineering"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="bg-[#1ea84b] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md inline-block">
                Direct Senior Engineers
              </span>
            </div>
          </div>

          {/* 3 Vertically Stacked Feature Pill Cards (6 cols on sm, matching reference) */}
          <div className="sm:col-span-6 flex flex-col justify-between gap-3.5">
            {/* Pill 1 */}
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm hover:border-[#1ea84b]/60 transition-all flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0f172a]">
                  U.S. Registered Business
                </h4>
              </div>
              <p className="text-xs text-[#64748b] leading-relaxed pl-12">
                Providing standard non-disclosure agreements (NDAs), intellectual property protection, and transparent contracts.
              </p>
            </div>

            {/* Pill 2 */}
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm hover:border-[#1ea84b]/60 transition-all flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0f172a]">
                  Agile Sprint Delivery
                </h4>
              </div>
              <p className="text-xs text-[#64748b] leading-relaxed pl-12">
                Bi-weekly production milestones with live staging environments and full code ownership.
              </p>
            </div>

            {/* Pill 3 */}
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm hover:border-[#1ea84b]/60 transition-all flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0f172a]">
                  Flexible Engagement Models
                </h4>
              </div>
              <p className="text-xs text-[#64748b] leading-relaxed pl-12">
                Fixed-price milestone agreements or dedicated hourly senior developers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: About Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1ea84b]">
            <span className="w-5 h-0.5 bg-[#1ea84b]" />
            <span>ABOUT SANFINC</span>
            <span className="w-5 h-0.5 bg-[#1ea84b]" />
          </div>

          {/* Heading with Clean font-bold Weight */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.2]">
            Your Vision, Our Expertise. Together, We Build Brands That Stand Out.
          </h2>

          {/* Copy from sanfinc.com */}
          <div className="space-y-4 text-base text-[#475569] leading-relaxed">
            <p>
              At <strong className="text-[#0f172a]">SANFINC</strong>, we combine fresh ideas,
              modern tools, and structured processes to deliver real business results.
              Whether you&apos;re validating a new business idea or scaling to thousands of active
              users, we&apos;re your technology partner for building, growing, and protecting your
              digital presence.
            </p>
            <p>
              Headquartered in Texas, we bridge the gap between creative strategic design and
              robust software engineering to ensure your web platforms convert visitors into
              lifelong customers.
            </p>
          </div>

          {/* Checkpoints */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1ea84b] flex-shrink-0" />
              <span className="text-sm font-medium text-[#0f172a]">
                U.S.-registered business entity with transparent commercial agreements
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1ea84b] flex-shrink-0" />
              <span className="text-sm font-medium text-[#0f172a]">
                Flexible pricing models: fixed-scope, sprint milestones, or hourly
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1ea84b] flex-shrink-0" />
              <span className="text-sm font-medium text-[#0f172a]">
                Transparent process with verified deliverables &amp; full source code ownership
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1ea84b] hover:bg-[#168a3d] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-md shadow-[#1ea84b]/20 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span>LEARN MORE ABOUT US</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
