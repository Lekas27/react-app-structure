import { createFileRoute } from "@tanstack/react-router";

import { CampingNavbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/register")({
  component: () => (
    <CampingNavbar element={<div>📝 Register Page - Public Access</div>} />
  ),
});
