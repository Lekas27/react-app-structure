import { stats } from "@/pages/about-us/model/constants/stats";

export const StatsSection = () => {
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
          {stats.map((stat, index) => {
            const { number, label, icon } = stat;
            const Icon = icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-full text-white mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {number}
                </div>
                <div className="text-gray-600 font-medium">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
