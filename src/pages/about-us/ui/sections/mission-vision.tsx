import { Eye, Target } from "lucide-react";

export const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-emerald-900 to-green-800 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-emerald-900" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-emerald-100 leading-relaxed">
              To create the world is most comprehensive and trustworthy platform
              for discovering camping locations, powered by a passionate
              community of outdoor enthusiasts who share authentic experiences
              and promote responsible wilderness exploration.
            </p>
          </div>

          <div className="bg-linear-to-br from-teal-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-teal-900" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg text-emerald-100 leading-relaxed">
              A world where everyone has access to safe, reliable information
              about camping locations. Where the beauty of nature is preserved
              through responsible practices, and where outdoor adventures create
              lasting memories and connections between people and the
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
