import { createRouter, RouteApi } from "@tanstack/react-router";

import { routeTree } from "./route-tree.gen";

export const router = createRouter({
  routeTree,
  context: {
    isAuthenticated: false, // This will be updated by the provider
  },
});

declare module "@tanstack/react-router" {
  type CustomRegister = {
    router: typeof router;
  };
}

export type Router = RouteApi<typeof router>;
