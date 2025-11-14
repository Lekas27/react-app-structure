import { createFileRoute } from "@tanstack/react-router";

import { CampingHomepage } from "@/pages/home/ui/home";
import { CampingNavbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/")({
  component: () => <CampingNavbar element={<CampingHomepage />} />,
});
