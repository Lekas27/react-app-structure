import { CTASection } from "./ui/sections/cta";
import { HeroSection } from "./ui/sections/hero";
import { MissionVisionSection } from "./ui/sections/mission-vision";
import { OurStorySection } from "./ui/sections/our-story";
import { StatsSection } from "./ui/sections/stats";
import { TeamSection } from "./ui/sections/team";
import { TimelineSection } from "./ui/sections/timeline";
import { CoreValuesSection } from "./ui/sections/values";

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
