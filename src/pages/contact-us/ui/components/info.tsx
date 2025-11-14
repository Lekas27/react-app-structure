import { Link } from "@tanstack/react-router";

import { contactInfo } from "@/pages/contact-us/model/constants/contact-info";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const ContactInfoSection = () => {
  return (
    <section className="py-16 bg-linear-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const { link, icon, title, content } = info;
            const Icon = icon;
            return (
              <Link
                key={index}
                to={link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-lime-400 group"
              >
                <div className="w-12 h-12 bg-linear-to-br from-lime-400 to-emerald-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <Title
                  className="text-lg font-bold text-gray-900! mb-2"
                  level={3}
                >
                  {title}
                </Title>
                <Paragraph className="text-emerald-600! font-semibold mb-1">
                  {content}
                </Paragraph>
                <p className="text-sm text-gray-600!">{info.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
