import React from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TickerBanner from "@/components/TickerBanner";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-[#0f172a]">
      {/* 1. Header Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* 3. Hero Section (Split Card with 3-Stat Counter Bar) */}
      <HeroSection />

      {/* 4. About Section (Feature Pill Stack + Brand Story) */}
      <AboutSection />

      {/* 5. Ticker Marquee Banner */}
      <TickerBanner />

      {/* 6. Our Services Section (6 Pricing & Deliverables Cards) */}
      <ServicesSection />

      {/* 7. Portfolio Showcase ("See Our Passion In Action") */}
      <PortfolioSection />

      {/* 8. Process Section ("Our Step-By-Step Process") */}
      <ProcessSection />

      {/* 9. Testimonials Section ("Why Our Customers Keep Coming Back") */}
      <TestimonialsSection />

      {/* 10. Our Team Section ("Meet Our Technology Experts") */}
      <TeamSection />

      {/* 11. Consultation & Contact Section ("Let's Collaborate!") */}
      <ContactSection />

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
