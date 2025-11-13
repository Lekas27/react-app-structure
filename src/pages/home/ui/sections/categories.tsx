import { Button } from "@/shared/components/ui/button";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const CategoriesSection = () => {
  const categories = [
    { icon: "🏔️", name: "Mountain Camping", count: "3,200+" },
    { icon: "🏖️", name: "Beach Camping", count: "1,800+" },
    { icon: "🌲", name: "Forest Camping", count: "4,500+" },
    { icon: "🌵", name: "Desert Camping", count: "900+" },
    { icon: "🏞️", name: "Lake Camping", count: "2,100+" },
    { icon: "⛰️", name: "Valley Camping", count: "1,400+" },
  ];

  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Title className="text-3xl md:text-4xl font-bold text-gray-900! mb-4">
            Browse Camping Categories
          </Title>
          <Paragraph className="text-lg! text-gray-600! max-w-2xl! mx-auto!">
            Explore diverse camping locations organized by terrain type. From
            mountain peaks to coastal shores, find the perfect outdoor setting
            for your adventure.
          </Paragraph>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              className="group bg-white! rounded-xl! p-6! hover:shadow-xl! transition-all duration-300 hover:-translate-y-1! border-2! border-transparent! hover:border-lime-400!"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <Title
                className="font-semibold text-gray-900! mb-1 group-hover:text-emerald-600 transition-colors"
                level={3}
              >
                {category.name}
              </Title>
              <Paragraph className="text-sm text-gray-500!">
                {category.count} locations
              </Paragraph>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
