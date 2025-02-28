"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Gamepad2 } from "lucide-react";

const Navbar = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isTechnicalOpen, setIsTechnicalOpen] = useState(false);
  const [isCulturalOpen, setIsCulturalOpen] = useState(false);

  const toggleRegisterDropdown = () => setIsRegisterOpen(!isRegisterOpen);
  const toggleSportsDropdown = () => setIsSportsOpen(!isSportsOpen);
  const toggleTechnicalDropdown = () => setIsTechnicalOpen(!isTechnicalOpen);
  const toggleCulturalDropdown = () => setIsCulturalOpen(!isCulturalOpen);

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
                  {/* Sports Section */}
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
                        {[
                          { name: "🏃 Athletics", link: "https://docs.google.com/forms/d/e/1FAIpQLSdKXxDLKiPi_U8MpJpe3DxgwjgC4yzD7HyY3FtoGe84fM271w/viewform" },
                          { name: "🏸 Badminton (Men's Doubles & Mixed Doubles)", link: "https://docs.google.com/forms/d/e/1FAIpQLScP2AKjzQJgiP0hFVFZiv3GYk9MZFgn2GdkOKWt1DmPdrTVzw/viewform" },
                          { name: "🏸 Badminton (Singles)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdM7Y3EG2aTtad9jhlDHzGSwRwb7ooBgljedExCfxT1GrMc2Q/viewform" },
                          { name: "🏀 Basketball (Boys)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfN_p1pp6Om8YtBKbYpxMIRTpRhvKWtqUKXpqYukiftpsAVEQ/viewform" },
                          { name: "🏀 Basketball (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSeiOdvGpC4F0NKDpb7y7Zbz1FoiQbjysvmtKPlGD3K9pLE48A/viewform" },
                          { name: "🎯 Carrom", link: "https://docs.google.com/forms/d/e/1FAIpQLScZ2uqSHwQUp-n4pjgLE0aRaKuLlv3YBgJ4_vcfSbTxQLEZnQ/viewform?usp=preview" },
                          { name: "♟ Chess", link: "https://forms.gle/wGXMLzsuvXSGYfHo8" },
                          { name: "⚽ Football (Open)", link: "https://docs.google.com/forms/d/e/1FAIpQLSerVjjpDCrhO53pgdr_Q_zEKEWM3XudwDlvXIxocKczeQwN7A/viewform" },
                          { name: "⚽ Football (Rink)", link: "https://docs.google.com/forms/d/e/1FAIpQLSchQj5cAlNtKGsfs3tyJAcvv3aelwUpjJNp1KA0Z24mjnC2xQ/viewform" },
                          { name: "🤼 Kabaddi", link: "https://docs.google.com/forms/d/e/1FAIpQLSfCySTaVEgKwM-X9d38SBN9Rzvt7KridYjEMpBlcMBWoRbw0A/viewform" },
                          { name: "🏃 Kho-Kho", link: "https://docs.google.com/forms/d/e/1FAIpQLScqVyeSlkDWP2OB7SYdVfBLjwiIjx1yGxOhpI2EIExC9AQ-7A/viewform" },
                          { name: "⚽ Penalty Shootout (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLScUuV7lqozEJF6wAqcxOPiHLxEQUlWeE81ZVAS4l-pD6wwJEg/viewform" },
                          { name: "🏓 Table Tennis", link: "https://docs.google.com/forms/d/e/1FAIpQLScagALjsxzQ0Q0iCSvQL9VDe6trwYBt5fSSP1EX-_MWzfZZMw/viewform" },
                          { name: "⏩ Skipping", link: "https://docs.google.com/forms/d/e/1FAIpQLSf7AxrSr_itG9_mY1LrXqXQFBD1Ae-1hCqEVbuiq13jnbe2OA/viewform" },
                        ].map((sport, index) => (
                          <li key={index}>
                            <a href={sport.link} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-gray-200 hover:bg-gray-700 font-semibold tracking-wider">
                              {sport.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Technical Section */}
                  <li className="px-4 py-3 text-lg font-bold text-gray-400 uppercase tracking-wider text-center">
                    <span className="font-mono text-blue-400">Technical - Coming Soon</span>
                  </li>

                  {/* Cultural Section */}
                  <li className="px-4 py-3 text-lg font-bold text-gray-400 uppercase tracking-wider text-center">
                    Cultural - Coming Soon
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
