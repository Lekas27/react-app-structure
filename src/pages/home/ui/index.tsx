import { BenefitsSection } from "./components/benefits";
import { CategoriesSection } from "./components/categories";
import { CTASection } from "./components/cta";
import { HeroSection } from "./components/hero";
import { StatsSection } from "./components/stats";
import { WhyChoseUsSection } from "./components/why-chose-us";

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
