import { ContactForm } from "./components/contact";
import { CTASection } from "./components/cta";
import { HeroSection } from "./components/hero";
import { ContactInfoSection } from "./components/info";
import { MapSection } from "./components/map";
import { SupportOptionsSection } from "./components/support-options";

export const ContactUsSection = () => {
  return (
    <div className="bg-white min-w-screen mt-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Info Cards */}
      <ContactInfoSection />

      {/* Support Options */}
      <SupportOptionsSection />

      {/* Contact Form & Map Section */}
      <ContactForm />

      {/* Map Section */}
      <MapSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
