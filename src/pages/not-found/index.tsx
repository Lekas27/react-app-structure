import { Link } from "@tanstack/react-router";
import { Mountain, Compass, Home, Search, MapPin, Tent } from "lucide-react";

import { Title } from "@/shared/components/ui/typography/title";

const navItems = [
  { label: "Home", link: "/" },
  { label: "Camping Places", link: "/camping" },
  { label: "About Us", link: "/about" },
  { label: "Contact", link: "/contact" },
];

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-900 via-green-800 to-teal-900 flex items-center justify-center px-4 pt-6 w-full">
      <div className="w-screen text-center">
        {/* Animated Mountain Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex items-center justify-evenly w-1/2">
            <Mountain className="h-32 w-32 text-lime-400 animate-bounce" />
          </div>
        </div>
        {/* 404 Text */}
        <Title
          level={1}
          className="text-8xl md:text-9xl font-bold bg-linear-to-r from-lime-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent mb-4 animate-pulse"
        >
          404
        </Title>

        {/* Main Message */}
        <Title
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          level={2}
        >
          Lost in the Wilderness
        </Title>

        <p className="text-emerald-100 text-lg md:text-xl mb-8 max-w-md mx-auto">
          Oops! Looks like you have wandered off the trail. The camping spot you
          are looking for does not exist.
        </p>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 mb-12">
          <Tent
            className="h-8 w-8 text-lime-400/50 animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <MapPin
            className="h-8 w-8 text-lime-400/50 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <Tent
            className="h-8 w-8 text-lime-400/50 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white! border-2 border-lime-400 rounded-full hover:bg-lime-400/20 transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Compass className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Go Back
          </Link>

          <Link
            to="/"
            className="group flex items-center gap-2 px-8 py-4 bg-linear-to-r from-lime-500 to-emerald-500 text-white! rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-lime-500/50"
          >
            <Home className="h-5 w-5" />
            Back to Camp
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Search className="h-5 w-5 text-lime-400" />
            <h3 className="text-lg font-semibold text-white">
              Try These Instead
            </h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="px-4 py-2 bg-emerald-700/50 rounded-full hover:bg-emerald-600/50 transition-all duration-300 hover:scale-105 text-sm font-medium text-white!"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <p className="mt-8 text-emerald-200/60 text-sm">
          Error Code: 404 • Page Not Found
        </p>
      </div>
    </div>
  );
};
