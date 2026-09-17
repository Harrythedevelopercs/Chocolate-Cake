import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TickerBanner from "@/components/TickerBanner";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PaymentWorkflowSection from "@/components/PaymentWorkflowSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-[#0f172a]">
      {/* 1. Header Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. About Section (Feature Pill Stack + Brand Story) */}
      <AboutSection />

      {/* 5. Ticker Marquee Banner */}
      <TickerBanner />

      {/* 6. Our Services Section (Pricing & Deliverables Cards) */}
      <ServicesSection />

      {/* 7. Process Section ("Our Step-By-Step Process") */}
      <ProcessSection />

      {/* 8. How Payment Works Section ("Invoice, Deposit, Milestone Payments") */}
      <PaymentWorkflowSection />

      {/* 9. Consultation & Contact Section ("Let's Collaborate!") */}
      <ContactSection />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
