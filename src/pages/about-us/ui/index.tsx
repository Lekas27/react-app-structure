import { CTASection } from "./components/cta";
import { HeroSection } from "./components/hero";
import { MissionVisionSection } from "./components/mission-vision";
import { OurStorySection } from "./components/our-story";
import { StatsSection } from "./components/stats";
import { TeamSection } from "./components/team";
import { TimelineSection } from "./components/timeline";
import { CoreValuesSection } from "./components/values";

export const AboutUsSection = () => {
  return (
    <div className="bg-white min-w-screen mt-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Stats Section */}
      <StatsSection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Core Values */}
      <CoreValuesSection />

      {/* Timeline */}
      <TimelineSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
