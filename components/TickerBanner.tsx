import React from "react";
import { Sparkles, Code2, Globe, Shield, Rocket, Smartphone } from "lucide-react";

export default function TickerBanner() {
  const items = [
    { text: "NEXT.JS WEB APPS", icon: Code2 },
    { text: "HIGH-CONVERTING E-COMMERCE", icon: Globe },
    { text: "45-DAY MOBILE MVPS", icon: Smartphone },
    { text: "AWS & CLOUD DEVOPS", icon: Rocket },
    { text: "ENTERPRISE CYBERSECURITY", icon: Shield },
    { text: "WE BUILD BRANDS THAT STAND OUT", icon: Sparkles },
  ];

  return (
    <div className="bg-[#0f172a] text-white py-4 overflow-hidden border-y border-[#1ea84b]/30 relative my-6">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex items-center gap-10 whitespace-nowrap justify-around min-w-full">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-[#1ea84b]" />
                <span className="text-xs sm:text-sm font-black tracking-widest uppercase">
                  {item.text}
                </span>
                <span className="text-[#1ea84b] font-bold">•</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-10 whitespace-nowrap justify-around min-w-full" aria-hidden="true">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${i}`} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-[#1ea84b]" />
                <span className="text-xs sm:text-sm font-black tracking-widest uppercase">
                  {item.text}
                </span>
                <span className="text-[#1ea84b] font-bold">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
