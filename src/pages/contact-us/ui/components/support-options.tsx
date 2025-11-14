import { supportOptions } from "@/pages/contact-us/model/constants/support-options";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const SupportOptionsSection = () => {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Title className="text-4xl font-bold text-gray-900! mb-4" level={2}>
            How Can We Help You?
          </Title>
          <Paragraph className="text-xl text-gray-600! max-w-2xl mx-auto">
            Choose the topic that best matches your inquiry for faster
            assistance
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => {
            const { icon, title, description } = option;
            const Icon = icon;
            return (
              <div key={index}>
                <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <Title
                  className="text-xl font-bold text-gray-900! mb-3"
                  level={3}
                >
                  {title}
                </Title>
                <Paragraph className="text-gray-600! text-sm leading-relaxed">
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
