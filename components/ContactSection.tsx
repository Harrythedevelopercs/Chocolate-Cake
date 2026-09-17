"use client";

import React, { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, CheckCircle2, Send, ShieldCheck } from "lucide-react";

const SERVICES_OPTIONS = [
  "MVP Development ($4.5k+)",
  "Full Web Application ($8k+)",
  "Mobile App (iOS/Android)",
  "E-Commerce & Stripe",
  "Cloud & DevOps Migration",
  "Cybersecurity Audit",
];

const BUDGET_OPTIONS = [
  "$1,000 – $4,500",
  "$4,500 – $8,000",
  "$8,000 – $15,000",
  "$15,000+",
];

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState(SERVICES_OPTIONS[0]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[1]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Container with rounded border and subtle surface */}
      <div className="bg-white rounded-[32px] p-8 sm:p-12 lg:p-14 border border-[#e2e8f0] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1ea84b]">
                <span className="w-5 h-0.5 bg-[#1ea84b]" />
                <span>START A PROJECT</span>
                <span className="w-5 h-0.5 bg-[#1ea84b]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] tracking-tight leading-[1.15]">
                Let’s Collaborate!
              </h2>
              <p className="text-base text-[#64748b] leading-relaxed">
                Ready to transform your ideas into an enterprise-ready reality?
                Get in touch for a comprehensive technical roadmap and guaranteed milestone proposal.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8faf9] border border-[#e2e8f0]">
                <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+16072470891"
                    className="text-sm sm:text-base font-bold text-[#0f172a] hover:text-[#1ea84b] block transition-colors mt-0.5"
                  >
                    (607) 247-0891
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8faf9] border border-[#e2e8f0]">
                <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider">
                    Official Email
                  </span>
                  <a
                    href="mailto:info@sanfinc.com"
                    className="text-sm sm:text-base font-bold text-[#0f172a] hover:text-[#1ea84b] block transition-colors mt-0.5"
                  >
                    info@sanfinc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8faf9] border border-[#e2e8f0]">
                <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider">
                    Corporate Headquarters
                  </span>
                  <p className="text-sm font-bold text-[#0f172a] mt-0.5">
                    24706 BASTIANI CANVAS LN, KATY, TX 77493
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Guarantee */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#eafaf0] border border-[#1ea84b]/30">
              <ShieldCheck className="w-6 h-6 text-[#1ea84b] flex-shrink-0" />
              <p className="text-xs font-semibold text-[#0f172a]">
                U.S.-Registered corporation. Every project is backed by mutual NDA and 100% intellectual property rights transfer.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#f8faf9] rounded-[28px] p-6 sm:p-8 border border-[#e2e8f0]">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1ea84b] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#1ea84b]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a]">
                  Thank You! We Received Your Brief.
                </h3>
                <p className="text-sm text-[#64748b] max-w-md mx-auto">
                  A senior technical director from SANFINC will review your project details
                  and reply within 24 hours with an initial estimation and consultation schedule.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-[#1ea84b] hover:underline"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                    1. Select What You Need Built
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {SERVICES_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setSelectedService(opt)}
                        className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all ${
                          selectedService === opt
                            ? "bg-[#1ea84b] text-white border-[#1ea84b] shadow-sm"
                            : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#1ea84b]/60"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection Chips */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                    2. Estimated Project Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {BUDGET_OPTIONS.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`text-xs font-semibold px-3 py-2 rounded-xl border text-center transition-all ${
                          selectedBudget === b
                            ? "bg-[#0f172a] text-white border-[#0f172a]"
                            : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#0f172a]/60"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0f172a]">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#1ea84b] focus:ring-1 focus:ring-[#1ea84b]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0f172a]">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#1ea84b] focus:ring-1 focus:ring-[#1ea84b]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0f172a]">Phone / WhatsApp (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#1ea84b] focus:ring-1 focus:ring-[#1ea84b]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0f172a]">Project Overview & Goals *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the website or system you want to build, key functionalities, and expected launch date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e2e8f0] text-sm text-[#0f172a] focus:outline-none focus:border-[#1ea84b] focus:ring-1 focus:ring-[#1ea84b]"
                  />
                </div>

                {/* Submit Pill Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1ea84b] hover:bg-[#168a3d] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-full shadow-md shadow-[#1ea84b]/20 hover:shadow-lg transition-all"
                >
                  <span>SUBMIT PROJECT BRIEF</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
