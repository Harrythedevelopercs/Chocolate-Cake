"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, X, ExternalLink, Sparkles } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  categorySlug: "all" | "web" | "mobile" | "ecommerce" | "ai" | "cloud" | "security";
  metric: string;
  description: string;
  client: string;
  techStack: string[];
  image: string;
}

const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Custom E-Commerce Storefront",
    category: "E-Commerce & Retail",
    categorySlug: "ecommerce",
    metric: "Integrated Stripe Checkout",
    description:
      "Engineered a lightning-fast headless Next.js e-commerce store with real-time multi-currency Stripe payments, automated sales tax, and automated ERP inventory synchronization.",
    client: "Vanguard Retail Co.",
    techStack: ["Next.js", "Stripe API", "Tailwind CSS", "Shopify Storefront", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "AI Customer Support Agent",
    category: "AI & Automation",
    categorySlug: "ai",
    metric: "Cut Queries by 70%",
    description:
      "Trained and integrated a proprietary retrieval-augmented generation (RAG) assistant for a 100k+ customer retailer, slashing support ticket resolution time from 4 hours to 15 seconds.",
    client: "Apex OmniCommerce",
    techStack: ["Python", "FastAPI", "OpenAI API", "Pinecone Vector DB", "Next.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Health-Tech Patient Mobile MVP",
    category: "Mobile Apps (iOS/Android)",
    categorySlug: "mobile",
    metric: "Delivered in 45 Days",
    description:
      "Built a secure, HIPAA-compliant cross-platform mobile application enabling real-time remote biometric monitoring, doctor tele-consultations, and automated pharmacy refills.",
    client: "PulseCare Health",
    techStack: ["Flutter", "Dart", "Firebase", "WebRTC", "HIPAA Compliant AWS"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Logistics Cloud Migration & DevOps",
    category: "Cloud & DevOps",
    categorySlug: "cloud",
    metric: "60% Faster Load Times",
    description:
      "Transitioned a legacy trucking and logistics dispatcher architecture into auto-scaling Kubernetes clusters on AWS, yielding zero downtime and 45% lower monthly infrastructure bills.",
    client: "SwiftLine Freight",
    techStack: ["AWS EKS", "Terraform", "Docker", "GitHub Actions CI/CD", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "FinTech Wealth Advisory Portal",
    category: "Web & SaaS",
    categorySlug: "web",
    metric: "$250M+ Managed Assets",
    description:
      "Custom web dashboard featuring real-time portfolio rebalancing, interactive visual charting, automated tax-loss harvesting, and multi-factor biometric authentication.",
    client: "Sterling Capital",
    techStack: ["Next.js", "TypeScript", "Plaid API", "Highcharts", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "B2B Wholesale Supplier Marketplace",
    category: "E-Commerce & Retail",
    categorySlug: "ecommerce",
    metric: "4x Order Volume Increase",
    description:
      "End-to-end B2B trade portal featuring dynamic tiered wholesale pricing, instant net-30 terms financing, and bulk CSV ordering for international distributors.",
    client: "Global Supply Alliance",
    techStack: ["Next.js", "Node.js", "Stripe Corporate", "Redis Cache", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Real Estate 3D Visualizer & CRM",
    category: "Web & SaaS",
    categorySlug: "web",
    metric: "85% Showing Bookings",
    description:
      "Interactive property portal allowing prospective home buyers to take virtual 3D tours, calculate mortgage terms in real-time, and schedule licensed realtor viewings.",
    client: "Skyline Realty Group",
    techStack: ["Next.js", "Three.js / WebGL", "Tailwind CSS", "Mapbox", "Twilio API"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "On-Demand Last-Mile Delivery App",
    category: "Mobile Apps (iOS/Android)",
    categorySlug: "mobile",
    metric: "30k Daily Deliveries",
    description:
      "Native mobile app suite for customers and drivers featuring live turn-by-turn routing, automated dispatching algorithms, digital proof of delivery, and tipping.",
    client: "DropFast Logistics",
    techStack: ["React Native", "Google Maps SDK", "Node.js WebSocket", "Stripe Mobile"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Document OCR & Extraction Pipeline",
    category: "AI & Automation",
    categorySlug: "ai",
    metric: "99.4% Parsing Accuracy",
    description:
      "Automated document processing platform converting thousands of unstructured PDF medical bills and invoices into normalized structured JSON databases automatically.",
    client: "DocuFlow Systems",
    techStack: ["Python", "TensorFlow", "Tesseract OCR", "AWS Lambda", "Next.js UI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Multi-Tenant SaaS Billing Engine",
    category: "Web & SaaS",
    categorySlug: "web",
    metric: "50K+ Monthly Active Seats",
    description:
      "Scalable subscription billing engine supporting usage-based metering, customized enterprise contracts, tiered seat licenses, and automated dunning recovery.",
    client: "CloudDesk Software",
    techStack: ["Next.js 14", "TypeScript", "Stripe Billing", "Supabase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Zero-Trust Cybersecurity Audit & WAF",
    category: "Cybersecurity & Compliance",
    categorySlug: "security",
    metric: "SOC2 & HIPAA Certified",
    description:
      "Comprehensive penetration testing, vulnerability remediation, and automated web application firewall configuration defending sensitive financial consumer data.",
    client: "Aegis Financial Tech",
    techStack: ["Cloudflare WAF", "AWS GuardDuty", "HashiCorp Vault", "SonarQube"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "IoT Energy Fleet Monitoring Hub",
    category: "Cloud & DevOps",
    categorySlug: "cloud",
    metric: "1M+ Telemetry Events/Min",
    description:
      "High-throughput event streaming platform collecting solar inverter and battery storage metrics worldwide with automated anomaly alerts and maintenance dispatch.",
    client: "Solaria Green Energy",
    techStack: ["GCP Pub/Sub", "ClickHouse DB", "Kubernetes", "Next.js Admin Dashboard"],
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Connected Fitness & Workout Companion",
    category: "Mobile Apps (iOS/Android)",
    categorySlug: "mobile",
    metric: "4.9 App Store Rating",
    description:
      "Mobile fitness application synced with Apple Health and WearOS devices offering adaptive AI workout coaching, community challenges, and high-bitrate video workouts.",
    client: "FitCore Athletics",
    techStack: ["Flutter", "Apple HealthKit", "Google Fit", "AWS CloudFront Streaming"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 14,
    title: "Luxury Fashion Maison Web Boutique",
    category: "E-Commerce & Retail",
    categorySlug: "ecommerce",
    metric: "0.6s Global Page Speed",
    description:
      "Bespoke headless storefront combining editorial storytelling, 3D interactive bag visualizers, localized international checkout, and same-day courier integration.",
    client: "Atelier Montagne",
    techStack: ["Next.js App Router", "Shopify Plus", "Tailwind CSS", "Algolia Search"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 15,
    title: "Predictive Enterprise Sales AI Model",
    category: "AI & Automation",
    categorySlug: "ai",
    metric: "94% Forecast Precision",
    description:
      "Machine learning models trained on 5 years of historical order data to predict retail inventory stockouts and optimize warehouse distribution schedules across 12 states.",
    client: "OmniSupply Chain",
    techStack: ["Python", "Scikit-Learn", "AWS SageMaker", "PostgreSQL", "Next.js"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 16,
    title: "Encrypted Telemedicine Video System",
    category: "Mobile Apps (iOS/Android)",
    categorySlug: "mobile",
    metric: "Zero-Lag WebRTC Video",
    description:
      "Encrypted peer-to-peer telehealth mobile and tablet application connecting board-certified clinicians with patients, featuring in-call digital prescription notes.",
    client: "MedConnect USA",
    techStack: ["React Native", "WebRTC", "Socket.io", "AWS KMS Encryption"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 17,
    title: "High-Frequency Payments API Gateway",
    category: "Cybersecurity & Compliance",
    categorySlug: "security",
    metric: "99.999% Uptime Guarantee",
    description:
      "Built resilient payment routing microservices handling tens of thousands of simultaneous checkouts with sub-millisecond fraud scoring and PCI-DSS Level 1 compliance.",
    client: "PayNex Global",
    techStack: ["Go / Golang", "Redis", "Kafka", "AWS Shield Advanced", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 18,
    title: "Multi-Region Cloud Failover Infra",
    category: "Cloud & DevOps",
    categorySlug: "cloud",
    metric: "Zero Data Loss Recovery",
    description:
      "Engineered automated active-active multi-region cloud disaster recovery between AWS US-East and EU-Central with cross-region database replication and Route53 health checks.",
    client: "DataCore Enterprise",
    techStack: ["AWS Aurora Global", "Terraform", "AWS Route53", "Datadog Monitoring"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop",
  },
];

const FILTER_TABS = [
  { label: "All Projects", slug: "all" as const },
  { label: "Web & SaaS", slug: "web" as const },
  { label: "Mobile Apps", slug: "mobile" as const },
  { label: "E-Commerce", slug: "ecommerce" as const },
  { label: "AI & Automation", slug: "ai" as const },
  { label: "Cloud & DevOps", slug: "cloud" as const },
  { label: "Cybersecurity", slug: "security" as const },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "web" | "mobile" | "ecommerce" | "ai" | "cloud" | "security"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.categorySlug === activeFilter);
  }, [activeFilter]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1ea84b]">
          <span className="w-5 h-0.5 bg-[#1ea84b]" />
          <span>OUR WORK &amp; CASE STUDIES</span>
          <span className="w-5 h-0.5 bg-[#1ea84b]" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight">
          See Our Passion In Action
        </h2>
        <p className="text-base text-[#64748b]">
          Explore over 18 real-world digital solutions we engineered for venture-backed startups,
          growing SMEs, and enterprise brands worldwide.
        </p>
      </div>

      {/* Interactive Category Filter Pills (Matching Reference Design Aesthetics) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.slug;
          const count =
            tab.slug === "all"
              ? ALL_PROJECTS.length
              : ALL_PROJECTS.filter((p) => p.categorySlug === tab.slug).length;

          return (
            <button
              key={tab.slug}
              onClick={() => {
                setActiveFilter(tab.slug);
                setVisibleCount(8);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#1ea84b] text-white shadow-md shadow-[#1ea84b]/20 scale-[1.03]"
                  : "bg-white text-[#475569] border border-[#e2e8f0] hover:border-[#1ea84b]/50 hover:text-[#0f172a]"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  isActive ? "bg-white/25 text-white" : "bg-[#f1f5f9] text-[#64748b]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid: 4 Columns on XL, 3 on LG, 2 on MD, 1 on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative h-[440px] rounded-[32px] overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-2xl hover:border-[#1ea84b]/60 transition-all duration-500 bg-[#0f172a] cursor-pointer flex flex-col justify-between"
          >
            {/* Project Cover Photo */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />

            {/* Gradient Scrim for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            {/* Top Row Badges */}
            <div className="relative z-10 p-5 flex items-center justify-between gap-2">
              <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
                {project.category}
              </span>
              <span className="bg-[#1ea84b] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {project.metric}
              </span>
            </div>

            {/* Bottom Capsule Pill (Signature Reference Design Element - NO TRUNCATION!) */}
            <div className="relative z-10 p-5">
              <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-xl group-hover:bg-white transition-all">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 pr-1">
                    <span className="text-[10px] uppercase font-bold text-[#1ea84b] tracking-wider block">
                      Case Study • {project.client}
                    </span>
                    <h3 className="text-sm font-bold text-[#0f172a] mt-0.5 leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#1ea84b] group-hover:bg-[#168a3d] text-white flex items-center justify-center flex-shrink-0 shadow-md transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Pagination Controls */}
      {visibleCount < filteredProjects.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#f8faf9] text-[#0f172a] border border-[#e2e8f0] hover:border-[#1ea84b] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm transition-all hover:scale-[1.02]"
          >
            <span>LOAD MORE PROJECTS ({filteredProjects.length - visibleCount} REMAINING)</span>
            <ArrowUpRight className="w-4 h-4 text-[#1ea84b] stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* Interactive Case Study Detail Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#e2e8f0] shadow-2xl relative space-y-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] flex items-center justify-center transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-[#1ea84b] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {selectedProject.metric}
                </span>
                <span className="text-xs text-white/90 font-medium">
                  Client: {selectedProject.client}
                </span>
              </div>
            </div>

            {/* Title & Category */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1ea84b]">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-[#0f172a] mt-1">
                {selectedProject.title}
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748b]">
                Project Overview &amp; Outcomes
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748b]">
                Architecture &amp; Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#f1f5f9] text-[#0f172a] border border-[#e2e8f0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="pt-4 border-t border-[#e2e8f0] flex items-center justify-between gap-4">
              <Link
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 bg-[#1ea84b] hover:bg-[#168a3d] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all"
              >
                <span>REQUEST SIMILAR SYSTEM</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-bold text-[#64748b] hover:text-[#0f172a] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
