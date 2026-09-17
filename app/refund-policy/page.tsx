import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Clock,
  CreditCard,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldAlert,
  Layers,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — SANFINC Inc.",
  description:
    "Review SANFINC Inc.'s transparent refund, cancellation, and milestone dispute policies for custom web development, IT solutions, and cloud consulting engagements.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-[#0f172a]">
      <TopBar />
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Page Hero Header */}
        <div className="bg-[#0f172a] text-white py-16 lg:py-20 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,168,75,0.18),transparent_60%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1ea84b] mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/70">Legal</span>
              <span>/</span>
              <span className="text-white">Refund Policy</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1ea84b]/20 border border-[#1ea84b]/40 text-[#1ea84b] text-xs font-bold uppercase tracking-wider mb-4">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Milestone Transparency &amp; Protection</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              At <strong className="text-white">SANFINC Inc.</strong>, we maintain transparent, milestone-driven development cycles designed to protect both our clients and our engineering teams.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1ea84b]"></span>
                Effective Date: January 15, 2026
              </span>
              <span>•</span>
              <span>Applicable to all SOW &amp; Retainer Agreements</span>
              <span>•</span>
              <span>Governing Law: Wyoming, USA</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-[#1ea84b]" />
                    Policy Overview
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#milestones"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      1. Milestone-Based Engagements
                    </a>
                    <a
                      href="#deposits"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      2. Discovery &amp; Initial Deposit
                    </a>
                    <a
                      href="#cancellations"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      3. Mid-Sprint Cancellations
                    </a>
                    <a
                      href="#approved-work"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      4. Completed &amp; Approved Deliverables
                    </a>
                    <a
                      href="#retainers"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      5. Monthly Support &amp; Retainers
                    </a>
                    <a
                      href="#process"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      6. Refund Request Process
                    </a>
                    <a
                      href="#processing-timeline"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      7. Processing Timelines &amp; Payouts
                    </a>
                    <a
                      href="#contact-info"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      8. Corporate Contact &amp; Inquiries
                    </a>
                  </nav>
                </div>

                {/* Direct Support Card */}
                <div className="bg-[#0f172a] text-white rounded-2xl p-6 border border-slate-800">
                  <h4 className="text-base font-bold text-white mb-2">
                    Need Milestone Clarification?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Our billing managers are ready to review your project scope or assist with dispute resolutions.
                  </p>
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#1ea84b]" />
                      <a href="mailto:info@sanfinc.com" className="hover:text-white transition-colors">
                        info@sanfinc.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#1ea84b]" />
                      <a href="tel:+16072470891" className="hover:text-white transition-colors">
                        +1 (607) 247-0891
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                      <span>24706 BASTIANI CANVAS LN, KATY, TX 77493</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Body */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-8">
              {/* Introduction Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm">
                <p className="text-base text-[#475569] leading-relaxed">
                  Due to the bespoke, resource-intensive nature of custom software engineering, UI/UX architecture, and cloud infrastructure deployment, services rendered by <strong className="text-[#0f172a]">SANFINC Inc.</strong> are structured around distinct milestone phases. This Refund Policy outlines the conditions under which refunds, project pauses, or fee adjustments may occur.
                </p>
              </div>

              {/* Section 1 */}
              <section id="milestones" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Milestone-Based Engagements
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  Every custom software or web development project is divided into progressive milestone deliverables defined in the signed Statement of Work (SOW):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <span className="text-xs font-bold text-[#1ea84b] uppercase tracking-wider">Phase 1</span>
                    <h4 className="font-bold text-sm text-[#0f172a] mt-1">Discovery &amp; Architecture</h4>
                    <p className="text-xs text-[#64748b] mt-1">System design, database schemas, wireframes, and tech stack specification.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <span className="text-xs font-bold text-[#1ea84b] uppercase tracking-wider">Phase 2</span>
                    <h4 className="font-bold text-sm text-[#0f172a] mt-1">Sprint Development</h4>
                    <p className="text-xs text-[#64748b] mt-1">Frontend implementation, API integrations, and backend business logic.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <span className="text-xs font-bold text-[#1ea84b] uppercase tracking-wider">Phase 3</span>
                    <h4 className="font-bold text-sm text-[#0f172a] mt-1">QA &amp; Security Testing</h4>
                    <p className="text-xs text-[#64748b] mt-1">Staging deployment, end-to-end testing, responsive audits, and security hardening.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <span className="text-xs font-bold text-[#1ea84b] uppercase tracking-wider">Phase 4</span>
                    <h4 className="font-bold text-sm text-[#0f172a] mt-1">Final Release &amp; Handover</h4>
                    <p className="text-xs text-[#64748b] mt-1">Production DNS launch, source code repository transfer, and warranty period initiation.</p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="deposits" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Discovery &amp; Initial Deposit
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
                  <p>
                    Upon agreement execution, an initial deposit (typically 30% to 50% of the total project value or a fixed discovery fee) is required to reserve senior engineering resources and initiate sprint planning.
                  </p>
                  <div className="p-4 rounded-xl bg-[#f0fdf4] border border-[#1ea84b]/20">
                    <p className="text-xs text-[#168a3d] font-semibold leading-relaxed">
                      • Prior to Sprint Commencement: If the client requests cancellation in writing within 48 hours of contract signing and before technical discovery has commenced, the deposit is eligible for a full refund minus a 5% administrative gateway fee.
                    </p>
                    <p className="text-xs text-[#168a3d] font-semibold leading-relaxed mt-2">
                      • After Discovery Commences: Once engineering roadmaps, technical wireframes, or architecture sprints have begun, the initial deposit is non-refundable as it covers dedicated engineering hours already spent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="cancellations" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Mid-Sprint Cancellations &amp; Unused Funds
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
                  <p>
                    If a client elects to terminate a project during an active development sprint:
                  </p>
                  <ul className="space-y-2 text-xs text-[#64748b] list-disc pl-5">
                    <li>
                      <strong className="text-[#0f172a]">Pro-Rated Accounting:</strong> SANFINC will conduct a formal accounting of all developer hours, design iterations, and infrastructure expenses accrued up to the written date of termination.
                    </li>
                    <li>
                      <strong className="text-[#0f172a]">Refund of Unused Milestone Balances:</strong> Any prepaid funds designated for upcoming, uninitiated milestones will be refunded in full.
                    </li>
                    <li>
                      <strong className="text-[#0f172a]">Deliverable Transfer:</strong> All code, design components, and assets created up to the date of cancellation will be handed over to the client upon settlement of any outstanding balance.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section id="approved-work" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Completed &amp; Approved Deliverables
                  </h2>
                </div>
                <div className="p-4 rounded-xl bg-[#0f172a] text-white space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#1ea84b]">
                    <ShieldAlert className="w-4 h-4" />
                    Finality of Approved Milestones
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Once a milestone demo has been presented, reviewed, and approved by the client in writing (via email, Jira, or sign-off form), or once a build has been deployed to the client&apos;s live production environment, the fees for that milestone are <strong className="text-white">strictly non-refundable</strong>.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We offer a standard <strong className="text-[#1ea84b]">30-day post-launch bug warranty</strong> to fix any discrepancies between delivered code and the agreed technical specifications free of charge.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="retainers" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Monthly Support &amp; Retainer Plans
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  For ongoing DevOps maintenance, server management, security monitoring, and dedicated developer retainers:
                </p>
                <div className="space-y-3 text-xs text-[#475569]">
                  <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2e8f0] flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">30-Day Cancellation Window:</strong> Retainers may be cancelled at any time by providing written notice at least thirty (30) days prior to the next automatic billing date.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2e8f0] flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">No Partial Month Refunds:</strong> Once a monthly billing cycle has begun and hours have been reserved, retainer payments for that active billing cycle are non-refundable.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="process" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Refund Request Process
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  To formally initiate a review for an uninitiated milestone refund or dispute:
                </p>
                <ol className="space-y-3 text-sm text-[#475569]">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1ea84b] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-[#0f172a]">Submit Written Notice:</strong> Email your request to <a href="mailto:info@sanfinc.com" className="text-[#1ea84b] font-semibold underline">info@sanfinc.com</a> with the subject line <code className="text-xs bg-[#f1f5f9] px-2 py-0.5 rounded font-mono text-[#0f172a]">Refund Request - [Invoice / Project #]</code>.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1ea84b] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-[#0f172a]">Detail Justification:</strong> Include the project agreement reference, description of milestone items in question, and payment confirmation receipts.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1ea84b] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-[#0f172a]">Audit &amp; Resolution:</strong> Our management team will review the repository logs, work records, and SOW specifications within seven (7) to ten (10) business days.
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7 */}
              <section id="processing-timeline" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Processing Timelines &amp; Payouts
                  </h2>
                </div>
                <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0] space-y-2 text-xs text-[#64748b] leading-relaxed">
                  <p>
                    Approved refunds are credited back to the original method of payment (Stripe credit/debit card, Airwallex, or authorized corporate bank wire transfer).
                  </p>
                  <p>
                    Refund credits typically reflect in the client&apos;s bank account within <strong className="text-[#0f172a]">five (5) to seven (7) business days</strong> following official approval, depending on the recipient financial institution.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="contact-info" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    8
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Corporate Contact &amp; Inquiries
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                  For formal dispute notices, escrow verifications, or refund claims, please communicate directly with our corporate administration:
                </p>

                <div className="p-5 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                  <h4 className="text-sm font-bold text-[#0f172a] mb-2">
                    SANFINC Inc. Corporate Office:
                  </h4>
                  <div className="text-xs text-[#64748b] space-y-1.5">
                    <p><strong className="text-[#0f172a]">SANFINC Inc.</strong></p>
                    <p>Corporate Address: 24706 BASTIANI CANVAS LN, KATY, TX 77493, USA</p>
                    <p>Direct Phone: <a href="tel:+16072470891" className="text-[#1ea84b] hover:underline">+1 (607) 247-0891</a></p>
                    <p>Official Email: <a href="mailto:info@sanfinc.com" className="text-[#1ea84b] hover:underline">info@sanfinc.com</a></p>
                  </div>
                </div>
              </section>

              {/* Bottom Nav Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e2e8f0]">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] hover:text-[#1ea84b] transition-colors"
                >
                  ← Return to Homepage
                </Link>
                <div className="flex items-center gap-4">
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#1ea84b] hover:underline"
                  >
                    Privacy Policy <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/terms-condition"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#1ea84b] hover:underline"
                  >
                    Terms &amp; Conditions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
