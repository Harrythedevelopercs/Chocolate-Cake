import React from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#ffffff] border-b border-[#e2e8f0] text-xs text-[#0f172a] hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
        {/* Left: Location & Email */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 font-medium text-[#475569]">
            <MapPin className="w-3.5 h-3.5 text-[#1ea84b]" />
            <span>24706 Bastiani Canvas Ln, Katy, TX 77493</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-[#475569]">
            <Mail className="w-3.5 h-3.5 text-[#1ea84b]" />
            <a
              href="mailto:info@sanfinc.com"
              className="hover:text-[#1ea84b] transition-colors"
            >
              info@sanfinc.com
            </a>
          </div>
        </div>

        {/* Right: Socials & Phone */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#94a3b8] mr-1">Follow us:</span>
            <a
              href="https://www.facebook.com/sanfinc/"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-full bg-[#f1f5f9] flex items-center justify-center hover:bg-[#1ea84b] hover:text-white transition-all text-[#0f172a] font-bold text-[10px]"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://www.instagram.com/sanf_inc/"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-full bg-[#f1f5f9] flex items-center justify-center hover:bg-[#1ea84b] hover:text-white transition-all text-[#0f172a] font-bold text-[10px]"
              aria-label="Instagram"
            >
              in
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6 rounded-full bg-[#f1f5f9] flex items-center justify-center hover:bg-[#1ea84b] hover:text-white transition-all text-[#0f172a] font-bold text-[10px]"
              aria-label="Twitter"
            >
              x
            </a>
          </div>
          <div className="h-3 w-px bg-[#e2e8f0]" />
          <div className="flex items-center gap-1.5 font-semibold text-[#0f172a]">
            <Phone className="w-3.5 h-3.5 text-[#1ea84b]" />
            <a
              href="tel:+16072470891"
              className="hover:text-[#1ea84b] transition-colors"
            >
              +1 (607) 247-0891
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
