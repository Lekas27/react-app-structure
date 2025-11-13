import { Check, Compass } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Span } from "@/shared/components/ui/typography/span";
import { Title } from "@/shared/components/ui/typography/title";

export const BenefitsSection = () => {
  const benefits = [
    "Discover hidden camping gems",
    "Share your favorite locations",
    "Get detailed GPS coordinates",
    "View high-quality photos",
    "Read authentic camper reviews",
    "Filter by amenities and terrain",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Title
              className="text-3xl md:text-4xl font-bold text-gray-900! mb-6"
              level={2}
            >
              Everything You Need to Find Your Perfect Camping Spot
            </Title>
            <Paragraph className="text-lg text-gray-600! mb-8">
              Our platform provides comprehensive information for every camping
              location. Access detailed descriptions, GPS coordinates, photos,
              amenities lists, and honest reviews from fellow campers.
            </Paragraph>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="shrink-0 w-6 h-6 bg-linear-to-br from-lime-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white!" />
                  </div>
                  <Span className="text-gray-700! font-medium">{benefit}</Span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-linear-to-br from-emerald-400 to-teal-500 rounded-2xl p-8 text-white shadow-2xl">
              <Compass className="h-24 w-24 mb-6" />
              <Title className="text-2xl font-bold mb-4" level={3}>
                Start Your Adventure Today
              </Title>
              <Paragraph className="mb-6 text-emerald-50!">
                Join thousands of outdoor enthusiasts sharing and discovering
                amazing camping locations worldwide.
              </Paragraph>
              <Button className="w-full px-6 py-3 bg-white! text-emerald-600! font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                Browse Camping Places
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
