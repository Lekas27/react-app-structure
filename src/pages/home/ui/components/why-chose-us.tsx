import { features } from "@/pages/home/model/constants/features";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const WhyChoseUsSection = () => {
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
          {features.map((feature, index) => {
            const { icon, title, description } = feature;
            const Icon = icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <Title
                  className="text-xl font-bold text-gray-900! mb-3"
                  level={3}
                >
                  {title}
                </Title>
                <Paragraph className="text-gray-600! leading-relaxed">
                  {description}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
