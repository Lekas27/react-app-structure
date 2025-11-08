import {
  Search,
  MapPin,
  Tent,
  Mountain,
  Compass,
  Star,
  Shield,
  ChevronRight,
  ArrowRight,
  Check,
  Users,
  Camera,
  Map,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/shared/components/ui/button";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Span } from "@/shared/components/ui/typography/span";
import { Title } from "@/shared/components/ui/typography/title";

export const CampingHomepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  const featuredPlaces = [
    {
      name: "Mountain Peak Wilderness",
      location: "Rocky Mountains, Colorado",
      image: "🏔️",
      rating: 4.9,
      reviews: 342,
      amenities: ["Scenic Views", "Hiking Trails", "Water Source"],
      postedBy: "NatureExplorer",
    },
    {
      name: "Riverside Forest Spot",
      location: "Yellowstone, Wyoming",
      image: "🌲",
      rating: 4.8,
      reviews: 289,
      amenities: ["River Access", "Wildlife Area", "Fire Pit Allowed"],
      postedBy: "WildAdventurer",
    },
    {
      name: "Coastal Camping Paradise",
      location: "Big Sur, California",
      image: "🏖️",
      rating: 5.0,
      reviews: 456,
      amenities: ["Ocean Views", "Beach Access", "Sunset Point"],
      postedBy: "BeachCamper",
    },
    {
      name: "Desert Oasis Location",
      location: "Joshua Tree, California",
      image: "🌵",
      rating: 4.7,
      reviews: 198,
      amenities: ["Star Gazing", "Rock Formation", "Quiet Area"],
      postedBy: "DesertWanderer",
    },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Locations",
      description:
        "Browse thousands of camping spots shared by experienced outdoor enthusiasts. Each location includes detailed information, photos, and GPS coordinates for easy navigation.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description:
        "Our platform connects campers worldwide. Share your favorite hidden gems, discover new spots, and learn from fellow adventurers through reviews and recommendations.",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Real Reviews & Ratings",
      description:
        "Make informed decisions with honest feedback from real campers. Read detailed reviews, view photos, and see ratings for amenities, accessibility, and natural beauty.",
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Interactive Maps",
      description:
        "Explore camping locations with our detailed interactive maps. Filter by terrain type, amenities, difficulty level, and distance to find your ideal camping destination.",
    },
  ];

  const benefits = [
    "Discover hidden camping gems",
    "Share your favorite locations",
    "Get detailed GPS coordinates",
    "View high-quality photos",
    "Read authentic camper reviews",
    "Filter by amenities and terrain",
  ];

  const stats = [
    { number: "15,000+", label: "Camping Locations Listed" },
    { number: "50,000+", label: "Active Community Members" },
    { number: "4.8/5", label: "Average User Rating" },
    { number: "120+", label: "Countries Covered" },
  ];

  const categories = [
    { icon: "🏔️", name: "Mountain Camping", count: "3,200+" },
    { icon: "🏖️", name: "Beach Camping", count: "1,800+" },
    { icon: "🌲", name: "Forest Camping", count: "4,500+" },
    { icon: "🌵", name: "Desert Camping", count: "900+" },
    { icon: "🏞️", name: "Lake Camping", count: "2,100+" },
    { icon: "⛰️", name: "Valley Camping", count: "1,400+" },
  ];

  return (
    <div className="min-h-screen bg-white min-w-screen mt-10">
      {/* Hero Section with Search */}
      <section className="relative min-h-1/2 bg-linear-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10">
            <Mountain className="h-64 w-64 text-lime-400" />
          </div>
          <div className="absolute bottom-10 right-20">
            <Tent className="h-48 w-48 text-lime-400" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <Title className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Explore Camping Locations
              <Span className="block bg-linear-to-r from-lime-400 to-emerald-300 bg-clip-text text-transparent mt-2">
                Shared by Adventurers
              </Span>
            </Title>
            <Paragraph className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Discover authentic camping spots posted by outdoor enthusiasts
              around the world. Find detailed information, photos, GPS
              coordinates, and reviews for your next wilderness adventure.
            </Paragraph>
          </div>

          {/* Search Component */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-4">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search camping locations, mountains, beaches, forests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-lime-400 focus:outline-none transition-colors text-gray-700"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="px-8! py-4! bg-linear-to-r! from-lime-500! to-emerald-500! text-white! font-bold rounded-xl hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 flex! flex-row! items-center! gap-2! shadow-lg hover:shadow-lime-500/50 hover:scale-105"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </div>

              {/* Quick Filter Tags */}
              <div className="flex flex-wrap gap-2 mt-4 items-center">
                <Span className="text-sm! text-gray-600! font-medium!">
                  Popular:
                </Span>
                {["Mountain", "Beach", "Forest", "Lake", "Desert"].map(
                  (tag) => (
                    <Button
                      key={tag}
                      className="px-4! py-1.5! bg-emerald-50! text-emerald-700! rounded-full! text-sm! font-medium! hover:border-emerald-900! hover:bg-emerald-100! transition-colors!"
                    >
                      {tag}
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title className="text-3xl md:text-4xl font-bold text-gray-900! mb-4">
              Browse Camping Categories
            </Title>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore diverse camping locations organized by terrain type. From
              mountain peaks to coastal shores, find the perfect outdoor setting
              for your adventure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                className="group bg-white! rounded-xl! p-6! hover:shadow-xl! transition-all duration-300 hover:-translate-y-1! border-2! border-transparent! hover:border-lime-400!"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.count} locations
                </p>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Camping Places */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Camping Locations
              </h2>
              <p className="text-lg text-gray-600">
                Top-rated spots handpicked from our community of outdoor
                enthusiasts
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              View All
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlaces.map((place, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-48 bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-6xl">
                  {place.image}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                        {place.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {place.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">
                        {place.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({place.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {place.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>Posted by {place.postedBy}</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              View All Locations
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose WildCamp?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the largest community of camping enthusiasts and discover
              verified locations with detailed information and authentic
              reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Find Your Perfect Camping Spot
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform provides comprehensive information for every
                camping location. Access detailed descriptions, GPS coordinates,
                photos, amenities lists, and honest reviews from fellow campers.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="shrink-0 w-6 h-6 bg-linear-to-br from-lime-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-linear-to-br from-emerald-400 to-teal-500 rounded-2xl p-8 text-white shadow-2xl">
                <Compass className="h-24 w-24 mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Start Your Adventure Today
                </h3>
                <p className="mb-6 text-emerald-50">
                  Join thousands of outdoor enthusiasts sharing and discovering
                  amazing camping locations worldwide.
                </p>
                <button className="w-full px-6 py-3 bg-white! text-emerald-600! font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                  Browse Camping Places
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-emerald-900 via-green-800 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mountain className="h-16 w-16 text-lime-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Great Camping Spot to Share?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Help fellow adventurers discover hidden gems. Share your favorite
            camping locations with detailed information, photos, and tips for
            the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-linear-to-r from-lime-500 to-emerald-500 text-white font-bold rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-500/50 flex items-center justify-center gap-2">
              <Camera className="h-5 w-5" />
              Post a Location
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-lime-400 font-bold rounded-full hover:bg-lime-400/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Compass className="h-5 w-5" />
              Explore Places
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
