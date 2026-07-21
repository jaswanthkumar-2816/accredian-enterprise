"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrackRecord } from "@/components/sections/track-record";
import { Clients } from "@/components/sections/clients";
import { EnterpriseEdge } from "@/components/sections/enterprise-edge";
import { CatFramework } from "@/components/sections/cat-framework";
import { DomainExpertise } from "@/components/sections/domain-expertise";
import { CourseSegmentation } from "@/components/sections/course-segmentation";
import { TrainingProcess } from "@/components/sections/training-process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { CommandMenu } from "@/components/ui/command-menu";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { PageTransitionOverlay } from "@/components/ui/page-transition";
import { useRouter } from "next/navigation";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleOpenCommand = () => setCommandOpen(true);
    const handleOpenConsultation = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push("/consultation");
      }, 900);
    };

    window.addEventListener("open-command-palette", handleOpenCommand);
    window.addEventListener("open-consultation", handleOpenConsultation);

    return () => {
      window.removeEventListener("open-command-palette", handleOpenCommand);
      window.removeEventListener("open-consultation", handleOpenConsultation);
    };
  }, [router]);

  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-blue-600 selection:text-white">
      {/* Page Routing Loading Overlay */}
      <PageTransitionOverlay isVisible={isTransitioning} />

      {/* Brand Loading Preloader Screen */}
      <LoadingScreen />

      {/* Navigation Header */}
      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Track Record Stats */}
      <TrackRecord />

      {/* Corporate Clients Ticker */}
      <Clients />

      {/* The Accredian Edge */}
      <EnterpriseEdge />

      {/* CAT Framework */}
      <CatFramework />

      {/* Domain Expertise */}
      <DomainExpertise />

      {/* Course Segmentation & Syllabus Modal */}
      <CourseSegmentation />

      {/* Training Process Pipeline */}
      <TrainingProcess />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Enterprise FAQs */}
      <FAQSection />

      {/* Call To Action Banner */}
      <CTASection />

      {/* Enterprise Advisory Contact Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Command Palette Modal (Ctrl+K) */}
      <CommandMenu isOpen={commandOpen} onClose={() => setCommandOpen(false)} />
    </main>
  );
}
