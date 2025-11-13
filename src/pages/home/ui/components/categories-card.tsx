import type { FC } from "react";

import { Button } from "@/shared/components/ui/button";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

type Props = {
  key: number;
  icon: string;
  name: string;
  count: string;
};

export const CategoriesCard: FC<Props> = ({ key, icon, name, count }) => {
  return (
    <Button
      key={key}
      className="group bg-white! rounded-xl! p-6! hover:shadow-xl! transition-all duration-300 hover:-translate-y-1! border-2! border-transparent! hover:border-lime-400!"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <Title
        className="font-semibold text-gray-900! mb-1 group-hover:text-emerald-600 transition-colors"
        level={3}
      >
        {name}
      </Title>
      <Paragraph className="text-sm text-gray-500!">
        {count} locations
      </Paragraph>
    </Button>
  );
};
