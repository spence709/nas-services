// app/page.tsx
"use client";

import { useState } from "react";
import { services, successStories } from "@/data";
import { ServiceProps, SuccessStory } from "@/types";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CaseStudyModal from "@/components/CaseStudyModal";
import ServiceModal from "@/components/ServiceModal";

export default function Page() {
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(
    null
  );
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<SuccessStory | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <NavBar />

      <Hero />

      <Stats />

      <ServicesGrid
        services={services}
        onSelect={(s) => setSelectedService(s)}
      />

      <WhyChooseUs />

      <Portfolio
        stories={successStories}
        onOpenCaseStudy={(s) => setSelectedCaseStudy(s)}
      />

      <Contact />

      <Footer />

      <CaseStudyModal
        story={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
