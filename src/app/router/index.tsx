import { createRouter, RouteApi } from "@tanstack/react-router";

import { useRouteSecurity } from "./providers/router-provider";
import { routeTree } from "./route-tree.gen";

const { checkPermissionConfig } = useRouteSecurity();

export const router = createRouter({
  routeTree,
  context: {
    isAuthenticated: Boolean(checkPermissionConfig),
  },
});

declare module "@tanstack/react-router" {
  type CustomRegister = {
    router: typeof router;
  };
}

export type Router = RouteApi<typeof router>;
