import { Headphones, Bug, Lightbulb, Users } from "lucide-react";

import type { SupportOptionItem } from "@/pages/contact-us/model/types/support-options";

export const supportOptions: SupportOptionItem[] = [
  {
    icon: Headphones,
    title: "General Support",
    description:
      "Questions about using WildCamp, account issues, or general inquiries about our platform and services.",
    tag: "general",
  },
  {
    icon: Bug,
    title: "Report a Bug",
    description:
      "Found a technical issue? Let us know so we can fix it and improve the experience for everyone.",
    tag: "bug",
  },
  {
    icon: Lightbulb,
    title: "Feature Request",
    description:
      "Have an idea to make WildCamp better? We love hearing suggestions from our community members.",
    tag: "feature",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "Interested in partnering with WildCamp? Reach out to discuss collaboration opportunities.",
    tag: "partnership",
  },
];
