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
              className="flex items-center bg-pink-600 text-white px-2 py-1 md:px-6 md:py-3 rounded-lg font-bold uppercase shadow-lg hover:bg-pink-700 transition duration-300"
            >
              <Gamepad2 className="mr-2" size={22} /> Register Now
              {isRegisterOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </button>

            {isRegisterOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-gray-900 text-white rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  {/* Sports Dropdown */}
                  <li>
                    <button
                      onClick={toggleSportsDropdown}
                      className="flex items-center w-full text-left px-4 py-3 hover:bg-gray-800 font-bold"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-pink-600 text-black font-extrabold text-lg rounded-full mr-2 shadow-lg">
                        1
                      </span>
                      <span className="text-lg tracking-wider uppercase">⚽ Sports</span>
                      {isSportsOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                    </button>

                    {isSportsOpen && (
                      <ul className="bg-gray-800 rounded-lg mt-1 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
                        {[
                          { name: "🏃 Athletics", link: "https://forms.gle/cYKVV3TowzgnSNMaA" },
                          { name: "🏸 Badminton (Men's Doubles & Mixed Doubles)", link: "https://docs.google.com/forms/d/e/1FAIpQLScP2AKjzQJgiP0hFVFZiv3GYk9MZFgn2GdkOKWt1DmPdrTVzw/viewform" },
                          { name: "🏸 Badminton (Singles)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdM7Y3EG2aTtad9jhlDHzGSwRwb7ooBgljedExCfxT1GrMc2Q/viewform" },
                          { name: "🏀 Basketball (Boys)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfN_p1pp6Om8YtBKbYpxMIRTpRhvKWtqUKXpqYukiftpsAVEQ/viewform" },
                          { name: "🏀 Basketball (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSeiOdvGpC4F0NKDpb7y7Zbz1FoiQbjysvmtKPlGD3K9pLE48A/viewform" },
                          { name: "🏏 Box Cricket (Boys)", link: "https://forms.gle/d9suMjjMB2GobPjaA" },
                          { name: "🏏 Box Cricket (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSdT_M8cs5sNOj-U0STVc29V66ES9R3QBKt94W7m_r9VWWXxnQ/viewform" },
                          { name: "🎯 Carrom", link: "https://docs.google.com/forms/d/e/1FAIpQLScZ2uqSHwQUp-n4pjgLE0aRaKuLlv3YBgJ4_vcfSbTxQLEZnQ/viewform?usp=preview" },
                          { name: "♟ Chess", link: "https://forms.gle/wGXMLzsuvXSGYfHo8" },
                          { name: "⚽ Football (Open)", link: "https://docs.google.com/forms/d/e/1FAIpQLSerVjjpDCrhO53pgdr_Q_zEKEWM3XudwDlvXIxocKczeQwN7A/viewform" },
                          { name: "⚽ Football (Ring)", link: "https://docs.google.com/forms/d/e/1FAIpQLSchQj5cAlNtKGsfs3tyJAcvv3aelwUpjJNp1KA0Z24mjnC2xQ/viewform" },
                          { name: "🤼 Kabaddi", link: "https://docs.google.com/forms/d/e/1FAIpQLSfCySTaVEgKwM-X9d38SBN9Rzvt7KridYjEMpBlcMBWoRbw0A/viewform" },
                          { name: "🏃 Kho-Kho", link: "https://docs.google.com/forms/d/e/1FAIpQLScqVyeSlkDWP2OB7SYdVfBLjwiIjx1yGxOhpI2EIExC9AQ-7A/viewform" },
                          { name: "⚾ Open Cricket (Boys)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfEIN7nQ3I2kSJmqEGVtz_KvGFCj_uFRoazKJ3U8qATxp3zNQ/viewform" },
                          { name: "⚾ Open Cricket (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSe24fKWvM_Jo6TpqviyBz99kvdb_2i6-sw7xqrt9d6ppd0n7w/viewform" },
                          { name: "⚽ Penalty Shootout (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLScUuV7lqozEJF6wAqcxOPiHLxEQUlWeE81ZVAS4l-pD6wwJEg/viewform" },
                          { name: "🤸 Skipping", link: "https://docs.google.com/forms/d/e/1FAIpQLSf7AxrSr_itG9_mY1LrXqXQFBD1Ae-1hCqEVbuiq13jnbe2OA/viewform" },
                          { name: "🏓 Table Tennis", link: "https://docs.google.com/forms/d/e/1FAIpQLScagALjsxzQ0Q0iCSvQL9VDe6trwYBt5fSSP1EX-_MWzfZZMw/viewform" },
                          { name: "🏐 Throwball (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSfhT3tgA-PWKUJlKILlFXzFVMVM7lkrKAEPheOmuPxHA7LmXw/viewform" },
                          { name: "🏋 Tug of War", link: "https://docs.google.com/forms/d/e/1FAIpQLSdjNouvUMq4W5uys3EorPAuPVLoVFVr2j1k7iY-EsXf0iiOHw/viewform" },
                          { name: "🏐 Volleyball (Boys)", link: "https://docs.google.com/forms/d/e/1FAIpQLSec_iuAZBAuW6oDJB68JIFiEn_Z6zCLFAFv7vzyP1Dt1uzVbQ/viewform" },
                          { name: "🏐 Volleyball (Girls)", link: "https://docs.google.com/forms/d/e/1FAIpQLSc-OcwMCLLA44Wc666nepmh_NL7Xd_ifRIggn1_iMsliNQr_A/viewform" },
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

                  {/* Cultural Dropdown */}
                  <li>
                    <button
                      onClick={toggleCulturalDropdown}
                      className="flex items-center w-full text-left px-4 py-3 hover:bg-gray-800 font-bold"
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-pink-600 text-black font-extrabold text-lg rounded-full mr-2 shadow-lg">
                        2
                      </span>
                      <span className="text-lg tracking-wider uppercase">🎭 Cultural</span>
                      {isCulturalOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                    </button>

                    {isCulturalOpen && (
                      <ul className="bg-gray-800 rounded-lg mt-1 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
                        {[
                          { name: "🎤 Antakshari", link: "https://docs.google.com/forms/d/e/1FAIpQLSd6AWJGWERiNZp8MR0yd9xFNP3tiNauBPQ5C8EG6-70r6OTmg/viewform" },
                          { name: "🎨 Face Painting", link: "https://docs.google.com/forms/d/e/1FAIpQLSeslv8W59iXwO_KqATdtWlvI1rqgYt2hO4U6PaVqehOKZ8nzg/viewform" },
                          { name: "💃 Group Dance", link: "https://docs.google.com/forms/d/e/1FAIpQLScnMSjeLoEQmp39ruUuidGltpnZcxa8tXbVx9UU9FZHgYYiDA/viewform" },
                          { name: "💅 Makeup", link: "https://docs.google.com/forms/d/e/1FAIpQLScvnkfCOO_XxoYJneqril5B6mHZcof6R991F0VGSYGtDvb2JA/viewform" },
                          { name: "🎨 Mehendi", link: "https://docs.google.com/forms/d/e/1FAIpQLSc0IIkXhpJvdBzLAzN1Qzp5LKTo8-AptcqexKtcr4LHpGoxxw/viewform" },
                          { name: "🎭 MGM's Got Talent", link: "https://docs.google.com/forms/d/e/1FAIpQLSdgQyoouq7ZVnAYPXwpzivDk_n8lKMNOwQ4hHXVq5sk11qO9w/viewform" },
                          { name: "💅 Nail Art", link: "https://docs.google.com/forms/d/e/1FAIpQLSf0hLEtsP7d9SIoHcaLI84jbRi5Dbh_ilHvdb4B6uErAHMd4w/viewform" },
                          { name: "🍳 No Fire Cooking", link: "https://docs.google.com/forms/d/e/1FAIpQLScDqlrjKhRoo4R4nGpd9Q8T8vv7udnS2lPTvwUJnZuh_6Y8iQ/viewform" },
                          { name: "🎨 Painting", link: "https://docs.google.com/forms/d/e/1FAIpQLSez2ZBKdmNyYJFiaaqNKhTHXeMUo8KXCAH0fvMI9JZJwuIWyA/viewform" },
                          { name: "🎨 Rangoli", link: "https://docs.google.com/forms/d/e/1FAIpQLSezAjPI08g7m7rpqgnLSeFlswMkA5fS7JHQflV4of2Ls-cG_g/viewform" },
                          { name: "🎨 Sketching", link: "https://docs.google.com/forms/d/e/1FAIpQLSfMk3-Mgw-VLznxMXY4cFB-dBo8BRAZ5dOFSgSa_3ucouO1zQ/viewform" },
                          { name: "💃 Solo Dance", link: "https://docs.google.com/forms/d/e/1FAIpQLSc_F4_McW_zJArNG9uu4NbvpwwZcv5Wm2f6uyaeLCAETyh10g/viewform" },
                          { name: "🎤 Solo Singing", link: "https://docs.google.com/forms/d/e/1FAIpQLSfccSaFZaYR7WVREvpdWoZaeg12ww4EeLOlnyhbp5L-uorn9w/viewform" },
                          { name: "👕 Tshirt Painting", link: "https://docs.google.com/forms/d/e/1FAIpQLScA7okmSfFZKgeqokw7oogl2M440sijst8LM6P1Q_1Deu6eLg/viewform" },
                        ]
                        .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically
                        .map((cultural, index) => (
                          <li key={index}>
                            <a href={cultural.link} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-gray-200 hover:bg-gray-700 font-semibold tracking-wider">
                              {cultural.name}
                            </a>
                          </li>
                        ))}
                      </ul>
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