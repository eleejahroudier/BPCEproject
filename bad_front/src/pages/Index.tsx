import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { RevolutionsSection } from "@/components/RevolutionsSection";
import { SpeakersSection } from "@/components/SpeakersSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <RevolutionsSection />
      <SpeakersSection />
    </div>
  );
};

export default Index;
