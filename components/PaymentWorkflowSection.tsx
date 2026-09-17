import React from "react";
import Link from "next/link";
import {
  CreditCard,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Layers,
  Building2,
} from "lucide-react";

export default function PaymentWorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Written Scope & Agreement",
      description:
        "Every project begins with an itemized Statement of Work (SOW) defining clear deliverables, technical specifications, and a transparent milestone schedule.",
      detail: "No surprises or hidden fees.",
    },
    {
      number: "02",
      title: "Initial Deposit Invoice",
      description:
        "An initial deposit invoice is issued to confirm engagement scheduling and allocate senior engineering resources to your development sprint.",
      detail: "Secure gateway or bank transfer.",
    },
    {
      number: "03",
      title: "Milestone-Based Payments",
      description:
        "For multi-phase projects, invoices are split into clear milestone stages (e.g. UI/UX approval, staging build demo). You only pay as verified progress is delivered.",
      detail: "Transparent progress reviews.",
    },
    {
      number: "04",
      title: "Final Review & Handover",
      description:
        "Upon thorough QA verification, client acceptance of the staging environment, and final invoice settlement, full intellectual property and source code are handed over.",
      detail: "Includes 30-day bug warranty.",
    },
  ];

  return (
    <section id="how-payments-work" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1ea84b]">
          <span className="w-5 h-0.5 bg-[#1ea84b]" />
          <span>PAYMENT TERMS &amp; BILLING</span>
          <span className="w-5 h-0.5 bg-[#1ea84b]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight">
          How Payment Works
        </h2>
        <p className="text-base text-[#64748b]">
          Transparent, milestone-based billing designed for accountability, financial security, and client confidence.
        </p>
      </div>

      {/* 4 Step Workflow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#e2e8f0] shadow-sm hover:border-[#1ea84b]/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] font-bold text-sm flex items-center justify-center">
                  {s.number}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#64748b]">
                  Phase {s.number}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0f172a] mb-2 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-4">
                {s.description}
              </p>
            </div>
            <div className="pt-3 border-t border-[#f1f5f9] flex items-center gap-2 text-xs font-semibold text-[#1ea84b]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{s.detail}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Invoicing Channels & Compliance Notice */}
      <div className="mt-8 bg-white rounded-[24px] p-6 sm:p-8 border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1ea84b]">
            <Building2 className="w-4 h-4 text-[#1ea84b]" />
            <span>Verified Payment Processing</span>
          </div>
          <p className="text-sm font-bold text-[#0f172a]">
            Invoicing via Corporate Bank Wire, ACH, or Verified Payment Processors
          </p>
          <p className="text-xs text-[#64748b] leading-relaxed">
            All commercial transactions are billed in USD with itemized digital tax invoices, milestone deliverables tracking, and payment receipts issued for your accounting records.
          </p>
        </div>

        <Link
          href="/refund-policy"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f172a] hover:text-[#1ea84b] transition-colors border border-[#e2e8f0] hover:border-[#1ea84b] px-5 py-3 rounded-full flex-shrink-0"
        >
          <span>View Refund Policy</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#1ea84b]" />
        </Link>
      </div>
    </section>
  );
}
