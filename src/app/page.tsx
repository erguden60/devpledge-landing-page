// app/page.tsx

// DOĞRU import yolu (HeroSection'ı import ediyoruz)
// FeaturesSe{ction ve diğerleri de buraya eklenecek.
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

      {/* <FeaturesSection /> */}
      {/* <DonationSection /> */}
    </>
  );
}
