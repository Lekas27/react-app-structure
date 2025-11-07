import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__public/register")({
  component: () => <div>📝 Register Page - Public Access</div>,
});
