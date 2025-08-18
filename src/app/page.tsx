// app/page.tsx


import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { DonationSection } from "@/components/sections/DonationSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <DonationSection />
      <FAQSection />

      
    </>
  );
}
