import { Camera, Compass, Mountain } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const CTASection = () => {
  return (
    <section className="py-16 bg-linear-to-r from-emerald-900 via-green-800 to-teal-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mountain className="h-16 w-16 text-lime-400! mx-auto mb-6" />
        <Title className="text-3xl md:text-4xl font-bold text-white! mb-4">
          Have a Great Camping Spot to Share?
        </Title>
        <Paragraph className="text-xl text-emerald-100! mb-8">
          Help fellow adventurers discover hidden gems. Share your favorite
          camping locations with detailed information, photos, and tips for the
          community.
        </Paragraph>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="px-8 py-4 bg-linear-to-r from-lime-500 to-emerald-500 text-white! font-bold rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-500/50 flex items-center justify-center gap-2"
            icon={Camera}
          >
            <Paragraph>Post a Location </Paragraph>
          </Button>
          <Button
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white! border-2 border-lime-400 font-bold rounded-full hover:bg-lime-400/20 transition-all duration-300 hover:scale-105 flex! items-center justify-center gap-2"
            icon={Compass}
          >
            <Paragraph>Explore Places</Paragraph>
          </Button>
        </div>
      </div>
    </section>
  );
};
