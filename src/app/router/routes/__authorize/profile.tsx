import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/__authorize/profile")({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },
  component: () => <div>👤 Profile - Authorized Only</div>,
});
