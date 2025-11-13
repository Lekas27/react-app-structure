import { Compass } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 bg-linear-to-r from-emerald-900 via-green-800 to-teal-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Compass className="h-16 w-16 text-lime-400 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Our Growing Community
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          Be part of a global movement connecting outdoor enthusiasts and
          preserving the beauty of wilderness for future generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-linear-to-r from-lime-500 to-emerald-500 text-white font-bold rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-500/50">
            Start Exploring
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-lime-400 font-bold rounded-full hover:bg-lime-400/20 transition-all duration-300 hover:scale-105">
            Share a Location
          </button>
        </div>
      </div>
    </section>
  );
};
