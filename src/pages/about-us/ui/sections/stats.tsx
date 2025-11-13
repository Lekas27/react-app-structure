import { Award, Globe, Mountain, Users } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "50,000+",
      label: "Active Members",
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      number: "15,000+",
      label: "Camping Spots",
    },
    { icon: <Globe className="h-8 w-8" />, number: "120+", label: "Countries" },
    {
      icon: <Award className="h-8 w-8" />,
      number: "4.8/5",
      label: "User Rating",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that showcase our growing community and the positive impact
            we are making in outdoor exploration
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-full text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
