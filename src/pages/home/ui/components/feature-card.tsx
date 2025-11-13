import type { FC, ReactNode } from "react";

import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

type Props = {
  key: number;
  icon: ReactNode;
  title: string;
  description: string;
};

export const FeatureCard: FC<Props> = ({ key, icon, title, description }) => {
  return (
    <div
      key={key}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
    >
      <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <Title className="text-xl font-bold text-gray-900! mb-3" level={3}>
        {title}
      </Title>
      <Paragraph className="text-gray-600! leading-relaxed">
        {description}
      </Paragraph>
    </div>
  );
};
