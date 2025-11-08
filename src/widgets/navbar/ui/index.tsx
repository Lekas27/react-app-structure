import { Menu, X, Mountain, Tent } from "lucide-react";
import { useState, type FC, type ReactNode } from "react";

import { MobileNavLink } from "./components/mobile-nav-link";
import { NavLink } from "./components/nav-link";

type Props = {
  element: ReactNode;
};

export const CampingNavbar: FC<Props> = ({ element }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-linear-to-r from-emerald-900 via-green-800 to-teal-900 shadow-2xl w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Mountain className="h-10 w-10 text-lime-400 group-hover:text-lime-300 transition-all duration-300 group-hover:scale-110" />
              <span className="text-2xl font-bold bg-linear-to-r from-lime-400 to-emerald-300 bg-clip-text text-transparent">
                CampingPlaces
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink to="/contact-us">Contact</NavLink>
              <NavLink
                to="/camping-sites"
                icon={<Tent className="h-4 w-4 text-emerald-200" />}
              >
                Camping Sites
              </NavLink>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <NavLink
                to="/login"
                className="px-5 py-2.5 text-lime-400 font-semibold hover:text-white border-2 border-lime-400 rounded-full hover:bg-lime-400/10 transition-all duration-300 hover:scale-105"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/register"
                className="px-5 py-2.5 bg-linear-to-r from-lime-500 to-emerald-500 text-white font-semibold rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-500/50"
              >
                Register
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-lime-400 hover:text-lime-300 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-linear-to-b from-emerald-900/95 to-green-900/95 backdrop-blur-lg">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/about-us">About Us</MobileNavLink>
            <MobileNavLink to="/contact-us">Contact</MobileNavLink>
            <MobileNavLink to="/camping-sites">
              <div className="flex items-center space-x-2">
                <Tent className="h-4 w-4" />
                <span>Camping Places</span>
              </div>
            </MobileNavLink>

            <div className="pt-4 space-y-2 ">
              <MobileNavLink
                to="/login"
                className="w-full px-5 py-3 text-lime-400 font-semibold border-2 border-lime-400 rounded-full hover:bg-lime-400/10 transition-all duration-300 text-center"
              >
                Sign In
              </MobileNavLink>
              <MobileNavLink
                to="/register"
                className="w-full px-5 py-3 bg-linear-to-r from-lime-500 to-emerald-500 text-white font-semibold rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 shadow-lg text-center"
              >
                Register
              </MobileNavLink>
            </div>
          </div>
        </div>
      </nav>
      <div>{element}</div>
    </>
  );
};
