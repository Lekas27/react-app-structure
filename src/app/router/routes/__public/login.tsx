import { createFileRoute } from "@tanstack/react-router";

import { CampingNavbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/login")({
  component: () => (
    <CampingNavbar element={<div>🔐 Login Page - Public Access</div>} />
  ),
});
