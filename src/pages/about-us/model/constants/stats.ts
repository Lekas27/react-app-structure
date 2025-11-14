import { Award, Globe, Mountain, Users } from "lucide-react";

import type { StatItem } from "@/pages/about-us/model/types/stats";

export const stats: StatItem[] = [
  {
    icon: Users,
    number: "50,000+",
    label: "Active Members",
  },
  {
    icon: Mountain,
    number: "15,000+",
    label: "Camping Spots",
  },
  {
    icon: Globe,
    number: "120+",
    label: "Countries",
  },
  {
    icon: Award,
    number: "4.8/5",
    label: "User Rating",
  },
] as const;
