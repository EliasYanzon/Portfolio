import React, { useState } from "react";
import DownloadButton from "./DownloadButton";

const Navbar = ({ scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50">
    <nav className="bg-gray-800 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-lg">Elias Yanzon</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => scrollTo("about")}
                >
                  About Me
                </a>
                <a
                  href="#techs"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => scrollTo("tech")}
                >
                  Techs
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => scrollTo("contact")}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <DownloadButton />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      {/* Menu desplegable en versión móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => scrollTo("about")}
            >
              About Me
            </a>
            <a
              href="#techs"
              className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => scrollTo("tech")}
            >
              Techs
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </a>
            <DownloadButton />
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
