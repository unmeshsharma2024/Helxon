"use client";

import { LandingHero } from "@/components/HomeComponents/LandingHero";
import { UnifiedSolution } from "@/components/HomeComponents/UnifiedSolution";
import { IndustriesSection } from "@/components/HomeComponents/IndustriesSection";

export function HomePageContent() {
  return (
    <>
      <LandingHero />
      <UnifiedSolution />
      <IndustriesSection />
    </>
  );
}

