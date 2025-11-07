import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import { router } from "./router";
import { RouteSecurityProvider } from "./router/providers/router-provider";

import { CampingNavbar } from "@/widgets/navbar/ui";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouteSecurityProvider>
      <CampingNavbar />
      <RouterProvider router={router} />
    </RouteSecurityProvider>
  </StrictMode>
);
