import { MessageCircle, Mountain } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 bg-linear-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <MessageCircle className="absolute top-10 right-20 h-64 w-64 text-lime-400" />
        <Mountain className="absolute bottom-10 left-20 h-48 w-48 text-lime-400" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Get in
          <span className="block bg-linear-to-r from-lime-400 to-emerald-300 bg-clip-text text-transparent mt-2">
            Touch
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
          Have questions, feedback, or need assistance? Our team is here to help
          you make the most of your WildCamp experience.
        </p>
      </div>
    </section>
  );
};
