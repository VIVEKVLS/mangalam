"use client";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Smooth fade-in effect
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 hero-bg">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Animated Content */}
      <div
        className={`z-10 text-center text-white transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1 className="text-[50px] md:text-[100px] font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 tracking-widest text-transparent bg-clip-text">
          MANGALAM
        </h1>
        <p className="text-xl md:text-3xl font-semibold text-blue-400 mb-4">
          Annual Fest of MGMCET
        </p>
        <p className="text-xl font-medium text-gray-200 max-w-3xl mx-auto mb-6">
          Experience the thrill – Technical, Cultural, and Sports Extravaganza!
        </p>
        <p className="text-2xl font-bold text-magenta-400 tracking-wide drop-shadow-md uppercase">
          | Bridging Bytes, Beats, and Battlegrounds |
        </p>
      </div>
    </div>
  );
};

export default Hero;
