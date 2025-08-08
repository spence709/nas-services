// components/NavBar.tsx
"use client";

import { useState } from "react";
import { Code, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center bg-blue-600 rounded-lg p-2">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold text-blue-600 ">
              Enviro<span className="text-gray-500">Cloud</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
            >
              Get Quote
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-gray-700 cursor-pointer"
            >
              {isMenuOpen ?
                <X className="h-6 w-6" />
              : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#services"
              className="block px-2 py-2 rounded hover:bg-gray-100"
            >
              Services
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#about"
              className="block px-2 py-2 rounded hover:bg-gray-100"
            >
              About
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#portfolio"
              className="block px-2 py-2 rounded hover:bg-gray-100"
            >
              Portfolio
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#contact"
              className="block px-2 py-2 rounded bg-blue-600 text-white text-center"
            >
              Get Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
