"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Smartphone,
  ShoppingCart,
  Cloud,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: "mvp",
    title: "MVP Development",
    price: "$4,500 – $7,500",
    timeline: "Ready in 30–45 Days",
    icon: Code2,
    description:
      "Rapidly validate your product idea in the real market with core essential features, modern UI/UX, and stable architecture.",
    features: [
      "Core feature implementation (must-have only)",
      "Modern, responsive UI/UX design",
      "Third-party API integrations",
      "Secure user authentication system",
      "Database setup & hosting configuration",
      "Bug fixing & cross-device launch testing",
    ],
  },
  {
    id: "full-product",
    title: "Final Product Development",
    price: "$8,000 – $12,000",
    timeline: "Complete Enterprise Build",
    icon: Layers,
    description:
      "Full-scale, scalable web applications with advanced workflows, micro-interactions, robust database models, and production scaling.",
    features: [
      "Full feature set implementation",
      "Advanced UI/UX with smooth micro-animations",
      "Role-based access & permissions",
      "Stripe payment gateway & recurring subscriptions",
      "High-speed performance & SEO optimization",
      "Full QA testing & white-glove deployment",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    price: "$4,500 – $12,000",
    timeline: "iOS & Android Store Ready",
    icon: Smartphone,
    description:
      "Engaging native and cross-platform mobile experiences that keep users hooked with offline functionality, push alerts, and device APIs.",
    features: [
      "Native (iOS/Android) or Flutter / React Native",
      "Push notifications & real-time messaging",
      "GPS, camera & hardware integration",
      "Apple App Store & Google Play submission",
      "Offline caching functionality",
      "Crash analytics & performance telemetry",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    price: "$4,500 – $12,000",
    timeline: "High-Converting Store",
    icon: ShoppingCart,
    description:
      "Turn traffic into high-value sales with bespoke storefronts built on Shopify, WooCommerce, or headless Next.js Commerce.",
    features: [
      "Shopify, WooCommerce, or Headless Next.js",
      "Product catalog & automated inventory",
      "Multi-currency checkout & Stripe payments",
      "Automated shipping & sales tax calculation",
      "Customer accounts & order tracking portals",
      "Discounts, coupons & loyalty workflows",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Deployment & DevOps",
    price: "$1,000 – $5,000",
    timeline: "High Availability Infra",
    icon: Cloud,
    description:
      "Modernize your hosting infrastructure on AWS, Azure, or GCP with automated deployment pipelines and zero-downtime scalability.",
    features: [
      "AWS / Azure / Google Cloud setup",
      "Automated CI/CD deployment pipelines",
      "Auto-scaling & elastic load balancing",
      "Managed database hosting & clustering",
      "Automated snapshot backups & disaster recovery",
      "24/7 uptime monitoring & instant alert systems",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Compliance",
    price: "$500 – $6,000",
    timeline: "Enterprise Protection",
    icon: ShieldAlert,
    description:
      "Fortify your digital assets against threats, vulnerabilities, and regulatory fines with comprehensive penetration audits and defenses.",
    features: [
      "Security vulnerability audits & scans",
      "SSL/TLS & strict HTTPS implementation",
      "Web application firewall (WAF) & intrusion alerts",
      "DDoS mitigation & continuous monitoring",
      "End-to-end data encryption (rest & transit)",
      "Compliance audits (GDPR, HIPAA, PCI-DSS)",
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header Matching Reference Design */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1ea84b]">
            <span className="w-5 h-0.5 bg-[#1ea84b]" />
            <span>OUR SERVICES</span>
            <span className="w-5 h-0.5 bg-[#1ea84b]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.2]">
            High-Impact IT & Web Services Helping Your Business Thrive
          </h2>
          <p className="text-base text-[#64748b]">
            We offer a full range of technology services designed to make your product
            journey effortless, scalable, and profitable.
          </p>
        </div>

        <div>
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#1ea84b] hover:bg-[#168a3d] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md shadow-[#1ea84b]/20 hover:shadow-lg transition-all"
          >
            <span>VIEW ALL SERVICES & PLANS</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* Services Grid (6 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-[28px] p-7 border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#1ea84b]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Row: Icon + Price Tag */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#1ea84b]/10 text-[#1ea84b] flex items-center justify-center group-hover:bg-[#1ea84b] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider font-bold text-[#64748b] block">
                      Investment
                    </span>
                    <span className="text-sm font-bold text-[#0f172a]">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Title & Timeline */}
                <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#1ea84b] transition-colors">
                  {service.title}
                </h3>
                <span className="inline-block mt-1 text-[11px] font-semibold text-[#1ea84b] bg-[#1ea84b]/10 px-2.5 py-0.5 rounded-full">
                  {service.timeline}
                </span>

                <p className="text-xs text-[#64748b] leading-relaxed mt-3 mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 border-t border-[#f1f5f9] pt-4 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#1ea84b] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                <Link
                  href="#contact"
                  className="text-xs font-bold text-[#0f172a] hover:text-[#1ea84b] transition-colors flex items-center gap-1.5"
                >
                  <span>Select Plan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1ea84b]" />
                </Link>

                <Link
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-[#f1f5f9] group-hover:bg-[#1ea84b] group-hover:text-white text-[#0f172a] flex items-center justify-center transition-all duration-300"
                  aria-label={`Get started with ${service.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
