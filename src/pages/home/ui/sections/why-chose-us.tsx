import { Shield, Users, Map, MessageCircle } from "lucide-react";

import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const WhyChoseUsSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Locations",
      description:
        "Browse thousands of camping spots shared by experienced outdoor enthusiasts. Each location includes detailed information, photos, and GPS coordinates for easy navigation.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description:
        "Our platform connects campers worldwide. Share your favorite hidden gems, discover new spots, and learn from fellow adventurers through reviews and recommendations.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Real Reviews & Ratings",
      description:
        "Make informed decisions with honest feedback from real campers. Read detailed reviews, view photos, and see ratings for amenities, accessibility, and natural beauty.",
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Interactive Maps",
      description:
        "Explore camping locations with our detailed interactive maps. Filter by terrain type, amenities, difficulty level, and distance to find your ideal camping destination.",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Title
            className="text-3xl md:text-4xl font-bold text-gray-900! mb-4"
            level={2}
          >
            Why Choose WildCamp?
          </Title>
          <Paragraph className="text-lg text-gray-600! max-w-2xl mx-auto">
            Join the largest community of camping enthusiasts and discover
            verified locations with detailed information and authentic reviews.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <Title
                className="text-xl font-bold text-gray-900! mb-3"
                level={3}
              >
                {feature.title}
              </Title>
              <Paragraph className="text-gray-600! leading-relaxed">
                {feature.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
