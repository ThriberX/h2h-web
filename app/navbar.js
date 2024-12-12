"use client";

import React, { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent fixed top-0 left-0 w-full z-50 text-[#734124] shadow-md transition-all duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div className="ml-4"> 
          <img
            src="/logo.png" 
            alt="H2H Logo"
            className="h-20" 
          />
        </div>

        <div className="hidden md:flex space-x-6 justify-center flex-1">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            Shop
          </a>
          <a href="#products" className="hover:text-blue-400">
            About 
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        <div className="flex items-center justify-start space-x-4 ml-3">
           <FaSearch className="text-xl cursor-pointer hover:text-blue-400" />
           <FaHeart className="text-xl cursor-pointer hover:text-blue-400" />
           <FaInstagram className="text-xl cursor-pointer hover:text-blue-400" />
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-[#734124] mb-1 "></span>
          <span className="block w-6 h-0.5 bg-[#734124] mb-1"></span>
          <span className="block w-6 h-0.5 bg-[#734124]"></span>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#shop"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-blue-400"
          >
            Shop
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-gray-600 hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
