"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Gamepad2 } from "lucide-react";

const Navbar = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);

  const toggleRegisterDropdown = () => setIsRegisterOpen(!isRegisterOpen);
  const toggleSportsDropdown = () => setIsSportsOpen(!isSportsOpen);

  return (
    <nav className="bg-black bg-opacity-90 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-red-500 text-2xl font-extrabold tracking-wider uppercase">
            Mangalam <span className="text-white">2025</span>
          </Link>

          <div className="relative">
            <button
              onClick={toggleRegisterDropdown}
              className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-lg font-bold uppercase shadow-lg hover:bg-pink-700 transition duration-300"
            >
              <Gamepad2 className="mr-2" size={22} /> Register Now
              {isRegisterOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </button>

            {isRegisterOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-gray-900 text-white rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  {/* 1. Sports Section */}
                  <li>
                    <button
                      onClick={toggleSportsDropdown}
                      className="flex items-center w-full text-left px-4 py-3 hover:bg-gray-800 font-bold"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-pink-600 text-black font-extrabold text-lg rounded-full mr-2 shadow-lg">
                        1
                      </span>
                      <span className="text-lg tracking-wider uppercase">Sports</span>
                      {isSportsOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                    </button>
                    {isSportsOpen && (
                      <ul className="bg-gray-800 rounded-lg mt-1 max-h-60 overflow-y-auto">
                        {["Athletics", "Badminton (Men's Doubles & Mixed Doubles)", "Badminton (Singles)", "Basketball (Boys)", "Basketball (Girls)", "Carrom", "Chess", "Football (Open)", "Football (Rink)", "Kabaddi", "Kho-Kho", "Penalty Shootout (Girls)", "Table Tennis", "Skipping"].map((sport, index) => (
                          <li key={index}>
                            <a href="#" className="block px-4 py-3 text-gray-200 hover:bg-gray-700 font-semibold tracking-wider">
                              {sport}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* 2. Technical Section */}
                  <li className="px-4 py-3 text-lg font-bold text-gray-400 uppercase tracking-wider">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white font-extrabold text-lg rounded-full mr-2 shadow-lg">
                      2
                    </span>
                    <span className="text-blue-400">Technical - Coming Soon</span>
                  </li>

                  {/* 3. Cultural Section */}
                  <li className="px-4 py-3 text-lg font-bold text-gray-400 uppercase tracking-wider">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-500 text-black font-extrabold text-lg rounded-full mr-2 shadow-lg">
                      3
                    </span>
                    <span className="text-yellow-400">Cultural - Coming Soon</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
