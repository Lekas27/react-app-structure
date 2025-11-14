import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "support@wildcamp.com",
      description: "Send us an email anytime",
      link: "mailto:support@wildcamp.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "123 Adventure Lane",
      description: "Denver, Colorado 80202",
      link: "#",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      content: "Monday - Friday",
      description: "8:00 AM - 6:00 PM MST",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-lime-400 group"
            >
              <div className="w-12 h-12 bg-linear-to-br from-lime-400 to-emerald-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-emerald-600 font-semibold mb-1">
                {info.content}
              </p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
