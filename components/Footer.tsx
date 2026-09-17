import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0] pt-16 pb-10 text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#e2e8f0]">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="SANFINC Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#0f172a] leading-none">
                  SANFINC Inc<span className="text-[#1ea84b]">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#64748b] mt-1">
                  Digital Solutions &amp; IT Services
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#64748b] leading-relaxed max-w-sm">
              Your vision, our expertise. Together, we build brands that stand out with fast,
              affordable, and scalable digital solutions.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.facebook.com/sanfinc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f8faf9] hover:bg-[#1ea84b] hover:text-white border border-[#e2e8f0] flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/sanf_inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#f8faf9] hover:bg-[#1ea84b] hover:text-white border border-[#e2e8f0] flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Instagram"
              >
                in
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li>
                <Link href="/" className="hover:text-[#1ea84b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#1ea84b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#1ea84b] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-[#1ea84b] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/#how-payments-work" className="hover:text-[#1ea84b] transition-colors">
                  How Payment Works
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#1ea84b] transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li>
                <Link href="/#services" className="hover:text-[#1ea84b] transition-colors">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#1ea84b] transition-colors">
                  Enterprise Web Apps
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#1ea84b] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#1ea84b] transition-colors">
                  E-Commerce Storefronts
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#1ea84b] transition-colors">
                  Cloud DevOps &amp; AWS Migration
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#1ea84b] transition-colors">
                  Cybersecurity &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
              Legal Entity &amp; Office
            </h4>
            <div className="space-y-3 text-sm text-[#64748b]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0f172a] block">Corporate Address:</span>
                  <span>24706 BASTIANI CANVAS LN, KATY, TX 77493</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1ea84b] flex-shrink-0" />
                <a href="tel:+16072470891" className="hover:text-[#1ea84b] transition-colors">
                  (607) 247-0891
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1ea84b] flex-shrink-0" />
                <a href="mailto:info@sanfinc.com" className="hover:text-[#1ea84b] transition-colors">
                  info@sanfinc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© 2026 SANFINC Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#1ea84b] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-condition"
              className="hover:text-[#1ea84b] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-[#1ea84b] transition-colors"
            >
              Refund &amp; Cancellation Policy
            </Link>
            <Link
              href="/#contact"
              className="hover:text-[#1ea84b] transition-colors font-semibold text-[#1ea84b]"
            >
              Client Support ↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
