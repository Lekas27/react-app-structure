import { Clock, Mail, MapPin, Phone } from "lucide-react";

import type { ContactInfoItem } from "@/pages/contact-us/model/types/contact-info";

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    title: "Email Us",
    content: "support@wildcamp.com",
    description: "Send us an email anytime",
    link: "mailto:support@wildcamp.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Adventure Lane",
    description: "Denver, Colorado 80202",
    link: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Friday",
    description: "8:00 AM - 6:00 PM MST",
    link: "#",
  },
];
