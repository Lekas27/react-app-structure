import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__public/")({
  component: () => <div>🏠 Home Page - Public Access</div>,
});
