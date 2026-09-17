"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e2e8f0]/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex-shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="SANFINC Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#0f172a] leading-none">
              SANFINC<span className="text-[#1ea84b]">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#64748b] mt-1">
              IT Solutions &amp; Web
            </span>
          </div>
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#0f172a]">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#1ea84b] transition-colors py-2 text-[#1ea84b]"
          >
            Home <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </Link>
          <Link
            href="/#about"
            className="flex items-center gap-1 hover:text-[#1ea84b] transition-colors py-2 text-[#475569]"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="flex items-center gap-1 hover:text-[#1ea84b] transition-colors py-2 text-[#475569]"
          >
            Services <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </Link>
          <Link
            href="/#process"
            className="hover:text-[#1ea84b] transition-colors py-2 text-[#475569]"
          >
            Process
          </Link>
          <Link
            href="/#how-payments-work"
            className="hover:text-[#1ea84b] transition-colors py-2 text-[#475569]"
          >
            Payments
          </Link>
          <Link
            href="/#contact"
            className="hover:text-[#1ea84b] transition-colors py-2 text-[#475569]"
          >
            Contact
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#1ea84b] hover:bg-[#168a3d] text-white text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded-full shadow-md shadow-[#1ea84b]/20 hover:shadow-lg hover:shadow-[#1ea84b]/30 transition-all hover:-translate-y-0.5"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#0f172a] hover:bg-[#f1f5f9] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e8f0] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-semibold text-base">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1ea84b] py-1"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0f172a] hover:text-[#1ea84b] py-1"
            >
              About
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0f172a] hover:text-[#1ea84b] py-1"
            >
              Services
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0f172a] hover:text-[#1ea84b] py-1"
            >
              Process
            </Link>
            <Link
              href="/#how-payments-work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0f172a] hover:text-[#1ea84b] py-1"
            >
              Payments
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0f172a] hover:text-[#1ea84b] py-1"
            >
              Contact
            </Link>
          </div>
          <div className="pt-3 border-t border-[#e2e8f0]">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center inline-flex items-center gap-2 bg-[#1ea84b] text-white text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded-full"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
