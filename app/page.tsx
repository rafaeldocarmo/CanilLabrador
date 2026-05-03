import { CommitmentSection } from "@/sections/home/CommitmentSection";
import { FinalCtaSection } from "@/sections/home/FinalCtaSection";
import { HeroSection } from "@/sections/home/HeroSection";
import { AboutSection } from "@/sections/home/AboutSection";
import { LittersPreviewSection } from "@/sections/home/LittersPreviewSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <TestimonialCarousel />
      <LittersPreviewSection />
      <FinalCtaSection />
    </>
  );
}
