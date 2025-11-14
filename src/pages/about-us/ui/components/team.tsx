import { team } from "@/pages/about-us/model/constants/team";

export const TeamSection = () => {
  return (
    <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate outdoor enthusiasts dedicated to building the best
            camping platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const { image, name, role, bio } = member;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="h-48 bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-6xl">
                  {image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">{role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
