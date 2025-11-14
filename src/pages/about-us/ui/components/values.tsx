import { values } from "@/pages/about-us/model/constants/values";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const CoreValuesSection = () => {
  return (
    <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Title className="text-4xl font-bold text-gray-900! mb-4" level={2}>
            Our Core Values
          </Title>
          <Paragraph className="text-xl text-gray-600! max-w-2xl mx-auto">
            The principles that guide everything we do at WildCamp
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const { title, description, icon } = value;
            const Icon = icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-6">
                  <Icon className="w-10 h-10" />
                </div>
                <Title
                  className="text-2xl font-bold text-gray-900! mb-4"
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
