import {
  Mountain,
  Users,
  Globe,
  Heart,
  Target,
  Eye,
  Award,
  Compass,
  TreePine,
  Shield,
  Leaf,
} from "lucide-react";

export const AboutUsSection = () => {
  const milestones = [
    {
      year: "2019",
      title: "WildCamp Founded",
      description:
        "Started with a vision to connect outdoor enthusiasts worldwide",
    },
    {
      year: "2020",
      title: "1,000 Locations",
      description:
        "Reached our first milestone of camping spots shared by the community",
    },
    {
      year: "2022",
      title: "10,000 Members",
      description: "Growing community of passionate campers and nature lovers",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description:
        "Now covering 120+ countries with 15,000+ verified locations",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Community First",
      description:
        "We believe in the power of shared experiences. Our platform thrives on authentic contributions from real outdoor enthusiasts who want to help others discover amazing camping locations.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Trust & Transparency",
      description:
        "Every location is verified and reviewed by real campers. We maintain strict quality standards and encourage honest feedback to ensure the best experience for our community members.",
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Environmental Respect",
      description:
        "We promote responsible camping practices and environmental conservation. Leave no trace, respect wildlife, and preserve natural beauty for future generations of outdoor adventurers.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Accessibility for All",
      description:
        "Camping should be accessible to everyone. We provide detailed information about terrain difficulty, facilities, and accessibility features to help all adventurers find suitable locations.",
    },
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "50,000+",
      label: "Active Members",
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      number: "15,000+",
      label: "Camping Spots",
    },
    { icon: <Globe className="h-8 w-8" />, number: "120+", label: "Countries" },
    {
      icon: <Award className="h-8 w-8" />,
      number: "4.8/5",
      label: "User Rating",
    },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: "👩‍💼",
      bio: "15 years of outdoor adventure experience. Passionate about making wilderness accessible to everyone.",
    },
    {
      name: "James Rodriguez",
      role: "Head of Community",
      image: "👨‍💻",
      bio: "Former park ranger with deep knowledge of camping safety and environmental conservation.",
    },
    {
      name: "Emily Chen",
      role: "Product Director",
      image: "👩‍🔬",
      bio: "Tech enthusiast and avid hiker. Building tools that connect people with nature.",
    },
    {
      name: "Marcus Thompson",
      role: "Operations Lead",
      image: "👨‍🌾",
      bio: "Outdoor educator with 20+ years helping people discover the joy of camping.",
    },
  ];

  return (
    <div className="bg-white min-w-screen mt-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <TreePine className="absolute top-10 right-20 h-64 w-64 text-lime-400" />
          <Compass className="absolute bottom-10 left-20 h-48 w-48 text-lime-400" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="block bg-linear-to-r from-lime-400 to-emerald-300 bg-clip-text text-transparent mt-2">
              WildCamp
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Connecting outdoor enthusiasts worldwide through shared camping
            experiences and authentic wilderness discoveries.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  WildCamp was born from a simple camping trip in 2019. Our
                  founder, Sarah Mitchell, struggled to find reliable
                  information about remote camping locations. Existing platforms
                  were outdated, lacked real photos, and did not capture the
                  authentic camping experience.
                </p>
                <p>
                  That frustration sparked an idea: what if campers could share
                  their favorite spots with fellow outdoor enthusiasts? What if
                  we could build a community-driven platform where real
                  experiences matter more than commercial listings?
                </p>
                <p>
                  Today, WildCamp has grown into the world is largest
                  community-powered camping location platform. We have helped
                  thousands of adventurers discover hidden gems, plan safer
                  trips, and connect with nature in meaningful ways.
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

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that showcase our growing community and the positive
              impact we are making in outdoor exploration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-full text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-emerald-900 to-green-800 rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-emerald-900" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-emerald-100 leading-relaxed">
                To create the world is most comprehensive and trustworthy
                platform for discovering camping locations, powered by a
                passionate community of outdoor enthusiasts who share authentic
                experiences and promote responsible wilderness exploration.
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
                through responsible practices, and where outdoor adventures
                create lasting memories and connections between people and the
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at WildCamp
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in building the world is leading camping community
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-lime-400 to-emerald-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block w-8 h-8 bg-linear-to-br from-lime-400 to-emerald-500 rounded-full border-4 border-white shadow-lg shrink-0"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="h-48 bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-6xl">
                  {member.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};
