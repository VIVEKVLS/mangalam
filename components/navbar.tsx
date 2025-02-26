"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Gamepad2 } from "lucide-react";

const Navbar = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isCulturalOpen, setIsCulturalOpen] = useState(false);

  const toggleRegisterDropdown = () => setIsRegisterOpen(!isRegisterOpen);
  const toggleSportsDropdown = () => setIsSportsOpen(!isSportsOpen);
  const toggleCulturalDropdown = () => setIsCulturalOpen(!isCulturalOpen);

  return (
    <nav className="bg-black bg-opacity-90 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Branding */}
          <Link href="/" className="text-red-500 text-2xl font-extrabold tracking-wider uppercase">
            Mangalam <span className="text-white">2025</span>
          </Link>

          {/* Right Side - Register Dropdown */}
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
                  {/* 🔺 Squid-Style Sports Dropdown */}
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
                      <ul className="bg-gray-800 rounded-lg mt-1">
                        {[
                          { name: "🏸 Badminton (Men's Doubles & Mixed Doubles)", link: "https://docs.google.com/forms/d/e/1FAIpQLScP2AKjzQJgiP0hFVFZiv3GYk9MZFgn2GdkOKWt1DmPdrTVzw/viewform" },
                          { name: "🏸 Badminton (Singles)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdM7Y3EG2aTtad9jhlDHzGSwRwb7ooBgljedExCfxT1GrMc2Q/viewform" },
                          { name: "🏀 Basketball (Boys)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfN_p1pp6Om8YtBKbYpxMIRTpRhvKWtqUKXpqYukiftpsAVEQ/viewform" },
                          { name: "🏀 Basketball (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSeiOdvGpC4F0NKDpb7y7Zbz1FoiQbjysvmtKPlGD3K9pLE48A/viewform" },
                          { name: "🏏 Box Cricket (Boys)", link: "https://forms.gle/d9suMjjMB2GobPjaA" },
                          { name: "🏏 Box Cricket (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdT_M8cs5sNOj-U0STVc29V66ES9R3QBKt94W7m_r9VWWXxnQ/viewform" },
                          { name: "🎯 Carrom", link: "https://docs.google.com/forms/d/e/1FAIpQLScZ2uqSHwQUp-n4pjgLE0aRaKuLlv3YBgJ4_vcfSbTxQLEZnQ/viewform?usp=preview" },
                          { name: "♟ Chess", link: "https://forms.gle/wGXMLzsuvXSGYfHo8" },
                          { name: "🤼 Kabaddi (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfCySTaVEgKwM-X9d38SBN9Rzvt7KridYjEMpBlcMBWoRbw0A/viewform" },
                          { name: "🏃 Kho-Kho", link: "https://docs.google.com/forms/d/e/1FAIpQLScqVyeSlkDWP2OB7SYdVfBLjwiIjx1yGxOhpI2EIExC9AQ-7A/viewform" },
                          { name: "⚾ Open Cricket (Boys)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfEIN7nQ3I2kSJmqEGVtz_KvGFCj_uFRoazKJ3U8qATxp3zNQ/viewform" },
                          { name: "⚾ Open Cricket (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSe24fKWvM_Jo6TpqviyBz99kvdb_2i6-sw7xqrt9d6ppd0n7w/viewform" },
                          { name: "🏐 Volleyball (Boys)", link: "https://docs.google.com/forms/d/e/1FAIpQLSec_iuAZBAuW6oDJB68JIFiEn_Z6zCLFAFv7vzyP1Dt1uzVbQ/viewform" },
                          { name: "🏐 Volleyball (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSc-OcwMCLLA44Wc666nepmh_NL7Xd_ifRIggn1_iMsliNQr_A/viewform" },
                          { name: "🏐 Throwball (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfhT3tgA-PWKUJlKILlFXzFVMVM7lkrKAEPheOmuPxHA7LmXw/viewform" },
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

                  {/* 🟢 Cultural Dropdown */}
                  <li>
                    <button
                      onClick={toggleCulturalDropdown}
                      className="flex items-center w-full text-left px-4 py-3 hover:bg-gray-800 font-bold"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-600 text-white font-extrabold text-lg rounded-full mr-2 shadow-lg">
                        2
                      </span>
                      <span className="text-lg tracking-wider uppercase">Cultural</span>
                      {isCulturalOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                    </button>
                    {isCulturalOpen && (
                      <div className="bg-gray-800 rounded-lg mt-1 px-4 py-3 text-center text-gray-300 font-semibold text-lg">
                        🎭 Coming Soon...
                      </div>
                    )}
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
