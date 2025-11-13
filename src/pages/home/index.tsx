import { BenefitsSection } from "./ui/sections/benefits";
import { CategoriesSection } from "./ui/sections/categories";
import { CTASection } from "./ui/sections/cta";
import { HeroSection } from "./ui/sections/hero";
import { StatsSection } from "./ui/sections/stats";
import { WhyChoseUsSection } from "./ui/sections/why-chose-us";

export const CampingHomepage = () => {
  return (
    <div className="min-h-screen bg-white min-w-screen mt-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Why Choose Us Section */}
      <WhyChoseUsSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
