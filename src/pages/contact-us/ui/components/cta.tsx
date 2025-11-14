import { MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 bg-linear-to-r from-emerald-900 via-green-800 to-teal-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <MessageCircle className="h-16 w-16 text-lime-400 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Still Have Questions?
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          Check out our comprehensive help center for instant answers to common
          questions, tutorials, and guides.
        </p>
        <button className="px-8 py-4 bg-linear-to-r from-lime-500 to-emerald-500 text-white font-bold rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-500/50">
          Visit Help Center
        </button>
      </div>
    </section>
  );
};
