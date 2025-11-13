export const StatsSection = () => {
  const stats = [
    { number: "15,000+", label: "Camping Locations Listed" },
    { number: "50,000+", label: "Active Community Members" },
    { number: "4.8/5", label: "Average User Rating" },
    { number: "120+", label: "Countries Covered" },
  ];

  return (
    <section className="py-12 bg-linear-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
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
