import { Link } from "@tanstack/react-router";
import {
  MapPin,
  Tent,
  Mountain,
  Compass,
  Star,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Span } from "@/shared/components/ui/typography/span";
import { Title } from "@/shared/components/ui/typography/title";

export const HeroSection = () => (
  <section className="bg-linear-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden h-[90vh]">
    {/* Background Pattern with Animation */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 animate-pulse">
        <Mountain className="h-64 w-64 text-lime-400" />
      </div>
      <div className="absolute bottom-10 right-20 animate-bounce">
        <Tent className="h-48 w-48 text-lime-400" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow">
        <Compass className="h-96 w-96 text-lime-400 opacity-5" />
      </div>
    </div>

    {/* Floating Elements Animation */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 animate-float">
        <Compass className="h-12 w-12 text-lime-400/20" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-float-delayed">
        <Star className="h-8 w-8 text-lime-400/30" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float">
        <Star className="h-10 w-10 text-emerald-300/20" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float-delayed">
        <MapPin className="h-10 w-10 text-lime-400/15" />
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 flex items-center min-h-screen">
      {/* Hero Content */}
      <div className="text-center w-full">
        <div className="animate-fade-in mb-8">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-lime-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-lime-400/30">
              <Star className="h-5 w-5 text-lime-400 fill-lime-400 animate-scale-pulse" />
              <Span className="text-lime-300 font-semibold">
                Trusted by 50,000+ Outdoor Enthusiasts
              </Span>
            </div>
          </div>
        </div>

        <Title
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in"
          level={1}
        >
          Discover Your Next
          <Span className="block bg-linear-to-r from-lime-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent mt-2 animate-slide-up">
            Wild Adventure
          </Span>
        </Title>

        <Paragraph className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-12 animate-fade-in-delayed">
          Explore authentic camping spots shared by adventurers worldwide. Find
          detailed guides, GPS coordinates, stunning photos, and honest reviews
          for your perfect outdoor escape.
        </Paragraph>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in-more-delayed">
          <Link
            to="/camping-sites"
            className="group px-10 py-5 bg-linear-to-r from-lime-500 to-emerald-500 text-white! font-bold text-lg rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-lime-500/50 flex items-center justify-center gap-3"
          >
            <Compass className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
            Explore Camp Sites
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="inline-flex flex-col items-center gap-2 text-lime-400">
            <Span className="text-sm font-medium">Scroll to explore</Span>
            <ChevronRight className="h-6 w-6 rotate-90" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
