import { createFileRoute } from "@tanstack/react-router";

import { ContactUsSection } from "@/pages/contact-us";
import { CampingNavbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/contact-us")({
  component: () => <CampingNavbar element={<ContactUsSection />} />,
});
