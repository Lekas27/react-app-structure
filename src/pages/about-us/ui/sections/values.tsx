import { Globe, Heart, Leaf, Shield } from "lucide-react";

export const CoreValuesSection = () => {
  const values = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Community First",
      description:
        "We believe in the power of shared experiences. Our platform thrives on authentic contributions from real outdoor enthusiasts who want to help others discover amazing camping locations.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Trust & Transparency",
      description:
        "Every location is verified and reviewed by real campers. We maintain strict quality standards and encourage honest feedback to ensure the best experience for our community members.",
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Environmental Respect",
      description:
        "We promote responsible camping practices and environmental conservation. Leave no trace, respect wildlife, and preserve natural beauty for future generations of outdoor adventurers.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Accessibility for All",
      description:
        "Camping should be accessible to everyone. We provide detailed information about terrain difficulty, facilities, and accessibility features to help all adventurers find suitable locations.",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at WildCamp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
