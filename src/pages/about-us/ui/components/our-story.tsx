import { Mountain } from "lucide-react";

export const OurStorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                WildCamp was born from a simple camping trip in 2019. Our
                founder, Sarah Mitchell, struggled to find reliable information
                about remote camping locations. Existing platforms were
                outdated, lacked real photos, and did not capture the authentic
                camping experience.
              </p>
              <p>
                That frustration sparked an idea: what if campers could share
                their favorite spots with fellow outdoor enthusiasts? What if we
                could build a community-driven platform where real experiences
                matter more than commercial listings?
              </p>
              <p>
                Today, WildCamp has grown into the world is largest
                community-powered camping location platform. We have helped
                thousands of adventurers discover hidden gems, plan safer trips,
                and connect with nature in meaningful ways.
              </p>
              <p>
                Our mission remains unchanged: to make wilderness exploration
                accessible, safe, and rewarding for everyone who loves the
                outdoors.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-linear-to-br from-emerald-400 to-teal-500 rounded-2xl p-8 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <Mountain className="h-32 w-32 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">
                  5 Years of Adventure
                </h3>
                <p className="text-xl text-emerald-50">
                  Building the ultimate camping community together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
