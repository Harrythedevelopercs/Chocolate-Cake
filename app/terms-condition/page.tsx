import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileCheck,
  Scale,
  CreditCard,
  UserCheck,
  BellRing,
  Code2,
  AlertTriangle,
  XCircle,
  Landmark,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — SANFINC Inc.",
  description:
    "Review the terms and conditions governing professional digital solutions, custom software engineering, e-commerce deployments, and IT services provided by SANFINC Inc.",
};

export default function TermsConditionPage() {
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
              <span className="text-white">Terms &amp; Conditions</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1ea84b]/20 border border-[#1ea84b]/40 text-[#1ea84b] text-xs font-bold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Service Agreement &amp; Operating Terms</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              These Terms &amp; Conditions govern your access to and use of all digital solutions, software engineering, and consulting services provided by <strong className="text-white">SANFINC Inc.</strong>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1ea84b]"></span>
                Effective Date: January 15, 2026
              </span>
              <span>•</span>
              <span>Jurisdiction: State of Wyoming, USA</span>
              <span>•</span>
              <span>Version: 2.1</span>
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
                    <FileText className="w-4 h-4 text-[#1ea84b]" />
                    Terms Index
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#services"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      1. Services &amp; Scope
                    </a>
                    <a
                      href="#payments"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      2. Payments &amp; Invoicing
                    </a>
                    <a
                      href="#client-responsibilities"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      3. Client Responsibilities &amp; KYC
                    </a>
                    <a
                      href="#communications"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      4. Consent to Communications
                    </a>
                    <a
                      href="#intellectual-property"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      5. Intellectual Property
                    </a>
                    <a
                      href="#compliance"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      6. Compliance &amp; Restrictions
                    </a>
                    <a
                      href="#liability"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      7. Limitation of Liability
                    </a>
                    <a
                      href="#termination"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      8. Contract Termination
                    </a>
                    <a
                      href="#governing-law"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      9. Governing Law (Wyoming)
                    </a>
                    <a
                      href="#contact-info"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      10. Corporate Contact &amp; Notices
                    </a>
                  </nav>
                </div>

                {/* Direct Legal Contact */}
                <div className="bg-[#0f172a] text-white rounded-2xl p-6 border border-slate-800">
                  <h4 className="text-base font-bold text-white mb-2">
                    Contract Inquiries?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    For customized Master Services Agreements (MSA), Statements of Work (SOW), or Non-Disclosure Agreements (NDA), contact our legal department.
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
              {/* Introduction Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm">
                <p className="text-base text-[#475569] leading-relaxed">
                  By accessing or using the services of <strong className="text-[#0f172a]">SANFINC Inc.</strong> (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you agree to be bound by these Terms &amp; Conditions. Please read them thoroughly before commissioning custom development or executing service contracts.
                </p>
              </div>

              {/* Section 1 */}
              <section id="services" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Services
                  </h2>
                </div>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  We provide premium digital solutions including custom software development, web applications, mobile app development, e-commerce storefront setup, product design (UI/UX), corporate branding, cloud infrastructure configuration, and digital marketing.
                </p>
                <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    <strong className="text-[#0f172a]">Governing Service Agreements:</strong> All projects are executed pursuant to an official written Statement of Work (SOW) or service agreement that defines explicit deliverables, scope boundaries, sprint milestones, review acceptance criteria, and scheduled payment installments.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="payments" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Payments
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#475569]">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <CreditCard className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">Verified Payment Channels:</strong> All payments must be remitted exclusively through our designated, verified payment processors (<strong className="text-[#0f172a]">Stripe</strong>, <strong className="text-[#0f172a]">Airwallex</strong>, or authorized corporate bank wire transfer).
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <CreditCard className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">Invoice Due Dates:</strong> Invoices are payable in according with the milestone schedule defined in the signed agreement (typically net-due upon delivery of milestone demonstration or within 7 calendar days).
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <CreditCard className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">Late Payments &amp; Service Suspension:</strong> Delinquent accounts may incur statutory late fees (1.5% per month or maximum allowable by law) and may lead to temporary suspension of active engineering sprints, staging environments, or support services until full settlement.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="client-responsibilities" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Client Responsibilities &amp; KYC
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  For the successful and uninterrupted execution of your engagement, the client agrees to:
                </p>
                <ul className="space-y-2.5 text-sm text-[#475569]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1ea84b] mt-2 flex-shrink-0" />
                    <span>Provide accurate, verified corporate entity information, primary contact credentials, and billing records.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1ea84b] mt-2 flex-shrink-0" />
                    <span>Submit all required Know Your Customer (KYC) documentation and legal identification prior to commencement of service engagements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#1ea84b] mt-2 flex-shrink-0" />
                    <span>Ensure timely communication, feedback submission, API access credentials, and asset approvals to prevent project bottlenecks.</span>
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="communications" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Consent to Communications
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  By engaging our services, requesting consultations, or submitting inquiry forms, you expressly consent to receive communications from SANFINC Inc.:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <BellRing className="w-5 h-5 text-[#1ea84b] mb-2" />
                    <h4 className="font-bold text-xs text-[#0f172a] mb-1">SMS Notifications</h4>
                    <p className="text-xs text-[#64748b]">Real-time milestone updates, deployment verification codes, and critical billing alerts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <Mail className="w-5 h-5 text-[#1ea84b] mb-2" />
                    <h4 className="font-bold text-xs text-[#0f172a] mb-1">Email Notices</h4>
                    <p className="text-xs text-[#64748b]">Formal project contracts, invoices, technical documentation, and periodic updates.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <Phone className="w-5 h-5 text-[#1ea84b] mb-2" />
                    <h4 className="font-bold text-xs text-[#0f172a] mb-1">Phone Consults</h4>
                    <p className="text-xs text-[#64748b]">Direct identity verification, sprint check-ins, and emergency production support.</p>
                  </div>
                </div>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  You may opt out of promotional emails or SMS notifications at any time by utilizing the unsubscribe mechanism provided. Mandatory transactional notices (e.g., invoices, security alerts, and service outages) cannot be opted out of.
                </p>
              </section>

              {/* Section 5 */}
              <section id="intellectual-property" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Intellectual Property Rights
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
                  <div className="p-4 rounded-xl bg-[#f0fdf4] border border-[#1ea84b]/30">
                    <h4 className="font-bold text-[#168a3d] mb-1">
                      Client Ownership Upon Full Payment
                    </h4>
                    <p className="text-xs text-[#168a3d]/90 leading-relaxed">
                      Upon complete and final payment of all agreed invoice fees for a project milestone or completed engagement, all bespoke custom source code, graphic designs, and unique brand deliverables created specifically for the client belong exclusively to the client.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <h4 className="font-bold text-[#0f172a] mb-1">
                      Pre-Existing Frameworks &amp; Core IP
                    </h4>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      SANFINC Inc. retains all rights, title, and interest in and to pre-existing developer tools, internal boilerplates, open-source libraries, UI component frameworks, and foundational code libraries utilized during development. The client is granted a perpetual, non-exclusive, royalty-free license to use such elements incorporated into their custom solution.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="compliance" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Compliance &amp; Restrictions
                  </h2>
                </div>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
                  <p>
                    SANFINC operates under strict federal regulatory frameworks. Services will not be rendered to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-[#64748b]">
                    <li>Individuals or entities located in sanctioned or prohibited jurisdictions under OFAC.</li>
                    <li>Politically Exposed Persons (PEPs) without enhanced due diligence.</li>
                    <li>Prohibited or high-risk industries, including illegal gambling, deceptive financial schemes, or illicit trade.</li>
                  </ul>
                  <p className="text-xs text-[#64748b]">
                    All transactions and engagements must maintain full compliance with United States Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) statutory requirements.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="liability" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="p-4 rounded-xl bg-[#0f172a] text-white space-y-2">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    To the maximum extent permitted by applicable law, <strong className="text-white">SANFINC Inc.</strong>, its directors, officers, employees, or contractors shall not be liable for any indirect, incidental, special, punitive, or consequential damages, including loss of profits, data loss, business interruption, or system downtime arising out of or in connection with our services.
                  </p>
                  <p className="text-xs text-[#1ea84b] font-semibold">
                    In all circumstances, our maximum aggregate liability arising out of any engagement shall be strictly limited to the total fees actually received by SANFINC Inc. for the specific project or milestone giving rise to the claim.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section id="termination" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    8
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Contract Termination
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  Either party may terminate a project contract upon written notice if the other party material breaches any provision of these terms or the underlying service agreement and fails to remedy such breach within fourteen (14) calendar days of notice.
                </p>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Upon termination, the client shall promptly pay SANFINC Inc. for all completed milestones, unbilled work-in-progress hours, and non-cancellable commitments incurred up to the effective termination date.
                </p>
              </section>

              {/* Section 9 */}
              <section id="governing-law" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    9
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Governing Law &amp; Jurisdiction
                  </h2>
                </div>
                <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0] flex items-start gap-4">
                  <Landmark className="w-6 h-6 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0f172a]">
                      State of Wyoming, USA
                    </h4>
                    <p className="text-xs text-[#64748b] mt-1 leading-relaxed">
                      These Terms &amp; Conditions, and any dispute or controversy arising out of or related to our services, shall be governed by and construed in accordance with the internal laws of the <strong className="text-[#0f172a]">State of Wyoming, USA</strong>, without giving effect to any choice of law principles. Any legal action or proceeding shall be instituted exclusively in the state or federal courts located in Wyoming.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section id="contact-info" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    10
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Corporate Contact &amp; Notices
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                  Formal legal notices, contract inquiries, or official correspondence concerning these Terms &amp; Conditions should be directed to our corporate office:
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
                    href="/refund-policy"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#1ea84b] hover:underline"
                  >
                    Refund Policy <ArrowRight className="w-4 h-4" />
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
