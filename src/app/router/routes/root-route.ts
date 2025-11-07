import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import React from "react";

interface RouterContext {
  isAuthenticated: boolean;
}

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => React.createElement(Outlet),
});