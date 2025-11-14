import { Globe, Heart, Leaf, Shield } from "lucide-react";

import type { ValuesItem } from "@/pages/about-us/model/types/values";

export const values: ValuesItem[] = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We believe in the power of shared experiences. Our platform thrives on authentic contributions from real outdoor enthusiasts who want to help others discover amazing camping locations.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "Every location is verified and reviewed by real campers. We maintain strict quality standards and encourage honest feedback to ensure the best experience for our community members.",
  },
  {
    icon: Leaf,
    title: "Environmental Respect",
    description:
      "We promote responsible camping practices and environmental conservation. Leave no trace, respect wildlife, and preserve natural beauty for future generations of outdoor adventurers.",
  },
  {
    icon: Globe,
    title: "Accessibility for All",
    description:
      "Camping should be accessible to everyone. We provide detailed information about terrain difficulty, facilities, and accessibility features to help all adventurers find suitable locations.",
  },
];
