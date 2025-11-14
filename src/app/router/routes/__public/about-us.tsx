import { createFileRoute } from "@tanstack/react-router";

import { AboutUsSection } from "@/pages/about-us/ui";
import { CampingNavbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/about-us")({
  component: () => <CampingNavbar element={<AboutUsSection />} />,
});
