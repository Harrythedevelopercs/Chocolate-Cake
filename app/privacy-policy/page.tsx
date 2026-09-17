import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
  Cookie,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — SANFINC Inc.",
  description:
    "Learn how SANFINC Inc. collects, uses, protects, and handles your personal information, KYC records, and project data in accordance with U.S. data protection standards.",
};

export default function PrivacyPolicyPage() {
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
              <span className="text-white">Privacy Policy</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1ea84b]/20 border border-[#1ea84b]/40 text-[#1ea84b] text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Client Data Protection &amp; Transparency</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              This Privacy Policy explains how <strong className="text-white">SANFINC Inc.</strong> collects, uses, and safeguards your personal and commercial information across all contracted digital services.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1ea84b]"></span>
                Effective Date: January 15, 2026
              </span>
              <span>•</span>
              <span>Governed by the State of Wyoming, USA</span>
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
                    Policy Navigation
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#collection"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      1. Information We Collect
                    </a>
                    <a
                      href="#usage"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      2. How We Use Information
                    </a>
                    <a
                      href="#sharing"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      3. Data Sharing
                    </a>
                    <a
                      href="#retention"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      4. Data Retention (5 Years)
                    </a>
                    <a
                      href="#security"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      5. Security Measures
                    </a>
                    <a
                      href="#rights"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      6. Client Data Rights
                    </a>
                    <a
                      href="#cookies"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      7. Cookies &amp; Tracking
                    </a>
                    <a
                      href="#updates"
                      className="block px-3 py-2 rounded-lg text-[#475569] hover:text-[#1ea84b] hover:bg-[#f8faf9] transition-all font-medium"
                    >
                      8. Policy Updates &amp; Contact
                    </a>
                  </nav>
                </div>

                {/* Quick Assistance Card */}
                <div className="bg-[#0f172a] text-white rounded-2xl p-6 border border-slate-800">
                  <h4 className="text-base font-bold text-white mb-2">
                    Privacy Inquiries?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Have questions regarding your personal data, KYC verification, or data removal requests? Our compliance officers are available to assist.
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
                        (607) 247-0891
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

            {/* Main Policy Body */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-8">
              {/* Introduction Callout */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm">
                <p className="text-base text-[#475569] leading-relaxed">
                  This Privacy Policy explains how <strong className="text-[#0f172a]">SANFINC Inc.</strong> (&ldquo;SANFINC,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and protects your personal and business information when you visit our website (<a href="https://sanfinc.com" className="text-[#1ea84b] underline font-medium">sanfinc.com</a>), procure our software development services, or interact with our support teams.
                </p>
              </div>

              {/* Section 1 */}
              <section id="collection" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Information We Collect
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                  To provide professional technology services, comply with federal legal standards, and ensure transaction security, we collect the following categories of information:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0f172a] mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1ea84b]" />
                      Identity Details
                    </div>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      Legal full name, business or corporate name, company incorporation documents, tax identification numbers, and authorized officer government-issued ID for Know Your Customer (KYC) verification.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0f172a] mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1ea84b]" />
                      Contact Details
                    </div>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      Official email address, direct telephone or mobile number, registered business address, and physical billing/shipping location.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0f172a] mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1ea84b]" />
                      Payment Details
                    </div>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      Transactional payment references through verified payment channels (Stripe, Airwallex, wire transfer confirmations, and business bank transfer receipts). Note: Full payment card numbers are processed directly by certified Level 1 PCI-DSS gateways and never stored on our web servers.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0f172a] mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1ea84b]" />
                      Communication Records
                    </div>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      Email correspondences, formal project milestone briefs, SMS transactional notifications, ticket inquiries, technical consultation logs, and support interactions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="usage" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    How We Use Information
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  We process the collected data for specific, legally grounded, and service-oriented objectives:
                </p>
                <ul className="space-y-3 text-sm text-[#475569]">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>
                      <strong className="text-[#0f172a]">Identity &amp; KYC Verification:</strong> Verifying client identities and legitimate business operations to prevent fraudulent transactions and comply with Anti-Money Laundering (AML) regulations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>
                      <strong className="text-[#0f172a]">Service Execution &amp; Delivery:</strong> Designing, engineering, provisioning, and hosting contracted digital assets, source code repositories, cloud infrastructure, and application environments.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>
                      <strong className="text-[#0f172a]">Payment &amp; Invoicing Processing:</strong> Executing milestone billing, generating tax invoices, and processing payments securely via our integrated gateway partners.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>
                      <strong className="text-[#0f172a]">Service Communications &amp; Updates:</strong> Sending critical milestone delivery notices, system maintenance alerts, security notices, and periodic technology insights (with an immediate opt-out option on marketing emails).
                    </span>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="sharing" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Data Sharing &amp; Disclosures
                  </h2>
                </div>
                <div className="space-y-4 text-sm text-[#475569] leading-relaxed">
                  <div className="p-4 rounded-xl bg-[#f0fdf4] border border-[#1ea84b]/20">
                    <p className="font-semibold text-[#168a3d]">
                      We do not sell, rent, or trade your personal or business information to third-party advertisers or brokers under any circumstances.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="retention" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Data Retention Policy
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  We retain client data strictly for as long as necessary to fulfill contractual obligations, defend against claims, and comply with commercial statutory retention requirements.
                </p>
                <div className="p-4 rounded-xl bg-[#0f172a] text-white flex items-start gap-4">
                  <Database className="w-6 h-6 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-white">
                      5-Year Statutory Retention Window
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      KYC verification documents, formal signed service agreements, accounting invoices, and project sign-off records are retained for <strong className="text-[#1ea84b]">five (5) years</strong> after the business relationship formally concludes, in conformity with U.S. corporate and financial compliance standards.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="security" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Security Safeguards
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  We deploy industry-grade organizational and technical security measures to protect your digital assets and confidential project specifications:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <Lock className="w-5 h-5 text-[#1ea84b] mb-2" />
                    <h4 className="font-bold text-[#0f172a] mb-1">End-to-End Encryption</h4>
                    <p className="text-[#64748b]">TLS 1.3 encryption in transit and AES-256 bit encryption at rest across all data stores.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <ShieldCheck className="w-5 h-5 text-[#1ea84b] mb-2" />
                    <h4 className="font-bold text-[#0f172a] mb-1">Role-Based Access</h4>
                    <p className="text-[#64748b]">Strict least-privilege access control with mandatory Multi-Factor Authentication (MFA).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                    <Eye className="w-5 h-5 text-[#1ea84b] mb-2" />
                    <h4 className="font-bold text-[#0f172a] mb-1">Continuous Audits</h4>
                    <p className="text-[#64748b]">Automated vulnerability scans, dependency health checks, and log monitoring.</p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="rights" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Client Data Rights
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  As our client or site visitor, you maintain full authority regarding your personal data:
                </p>
                <div className="space-y-3 text-sm text-[#475569]">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f8faf9]">
                    <UserCheck className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">Right to Access:</strong> You may request a complete export of the personal contact and identification details we hold on record.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f8faf9]">
                    <UserCheck className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">Right to Correction &amp; Rectification:</strong> You may update or correct inaccurate company profiles, billing addresses, or designated team contacts at any time.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f8faf9]">
                    <UserCheck className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">Right to Deletion:</strong> You may request the deletion of non-essential records, subject to mandatory 5-year statutory financial and legal compliance obligations.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#f8faf9]">
                    <UserCheck className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0f172a]">Right to Withdraw Consent:</strong> You may unsubscribe from marketing bulletins and newsletter communications at any time via the one-click unsubscribe link.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="cookies" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Cookies &amp; Tracking Technologies
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                  Our website utilizes functional cookies and standard analytics services (such as traffic performance monitoring) to maintain session integrity, understand user navigation patterns, and enhance your digital experience.
                </p>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  You can set your web browser to refuse all or some browser cookies, or to alert you when cookies are being sent. Note that disabling cookies may affect certain interactive conveniences of the website.
                </p>
              </section>

              {/* Section 8 */}
              <section id="updates" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center font-bold">
                    8
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Policy Updates &amp; Contact
                  </h2>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed mb-6">
                  We reserve the right to periodically modify this Privacy Policy to reflect statutory changes, technological advancements, or updated commercial practices. Any revisions will be published on this page with an updated Effective Date. Continued engagement with our services constitutes acknowledgment of the revised terms.
                </p>

                <div className="p-5 rounded-xl bg-[#f8faf9] border border-[#e2e8f0]">
                  <h4 className="text-sm font-bold text-[#0f172a] mb-2">
                    Official Corporate Inquiries:
                  </h4>
                  <div className="text-xs text-[#64748b] space-y-1.5">
                    <p><strong className="text-[#0f172a]">SANFINC Inc.</strong></p>
                    <p>Corporate Address: 24706 BASTIANI CANVAS LN, KATY, TX 77493, USA</p>
                    <p>Direct Phone: <a href="tel:+16072470891" className="text-[#1ea84b] hover:underline">(607) 247-0891</a></p>
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
                    href="/terms-condition"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#1ea84b] hover:underline"
                  >
                    Terms &amp; Conditions <ArrowRight className="w-4 h-4" />
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
