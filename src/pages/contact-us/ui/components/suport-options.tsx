import { Bug, Headphones, Lightbulb, Users } from "lucide-react";

export const SupportOptionsSection = () => {
  const supportOptions = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "General Support",
      description:
        "Questions about using WildCamp, account issues, or general inquiries about our platform and services.",
      tag: "general",
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Report a Bug",
      description:
        "Found a technical issue? Let us know so we can fix it and improve the experience for everyone.",
      tag: "bug",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Feature Request",
      description:
        "Have an idea to make WildCamp better? We love hearing suggestions from our community members.",
      tag: "feature",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partnership",
      description:
        "Interested in partnering with WildCamp? Reach out to discuss collaboration opportunities.",
      tag: "partnership",
    },
  ];

  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Can We Help You?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the topic that best matches your inquiry for faster
            assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <div key={index}>
              <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
