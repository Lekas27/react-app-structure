export const TimelineSection = () => {
  const milestones = [
    {
      year: "2019",
      title: "WildCamp Founded",
      description:
        "Started with a vision to connect outdoor enthusiasts worldwide",
    },
    {
      year: "2020",
      title: "1,000 Locations",
      description:
        "Reached our first milestone of camping spots shared by the community",
    },
    {
      year: "2022",
      title: "10,000 Members",
      description: "Growing community of passionate campers and nature lovers",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Now covering 120+ countries with 15,000+ verified locations",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key milestones in building the world is leading camping community
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-lime-400 to-emerald-500"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block w-8 h-8 bg-linear-to-br from-lime-400 to-emerald-500 rounded-full border-4 border-white shadow-lg shrink-0"></div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
