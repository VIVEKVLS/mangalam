"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Gamepad2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black bg-opacity-90 fixed w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Mangalam Branding */}
          <Link href="/" className="text-red-500 text-2xl font-extrabold tracking-wider uppercase">
            Mangalam <span className="text-white">2025</span>
          </Link>

          {/* Right Side - Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold uppercase shadow-lg hover:bg-red-700 transform transition duration-300 hover:scale-105 active:scale-95"
            >
              <Gamepad2 className="mr-2" size={22} /> Register Now 
              {isOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-900 text-white rounded-lg shadow-lg overflow-auto max-h-96">
                <ul className="py-2">
                  <li>
                    <a href="https://forms.gle/u2UFST9xaDTF8bLy9" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Badminton (Singles)
                    </a>
                  </li>
                  <li>
                    <a href="https://forms.gle/CPvTcfGSfsbfcFiK6" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Badminton (Mixed)
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfN_p1pp6Om8YtBKbYpxMIRTpRhvKWtqUKXpqYukiftpsAVEQ/viewform" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Basketball (Boys)
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiOdvGpC4F0NKDpb7y7Zbz1FoiQbjysvmtKPlGD3K9pLE48A/viewform" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Basketball (Girls)
                    </a>
                  </li>
                  <li>
                    <a href="https://forms.gle/d9suMjjMB2GobPjaA" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Box Cricket (Boys)
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdT_M8cs5sNOj-U0STVc29V66ES9R3QBKt94W7m_r9VWWXxnQ/viewform" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Box Cricket (Girls)
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScZ2uqSHwQUp-n4pjgLE0aRaKuLlv3YBgJ4_vcfSbTxQLEZnQ/viewform?usp=preview" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Carrom
                    </a>
                  </li>
                  <li>
                    <a href="https://forms.gle/wGXMLzsuvXSGYfHo8" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Chess
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCySTaVEgKwM-X9d38SBN9Rzvt7KridYjEMpBlcMBWoRbw0A/viewform" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Kabaddi 
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe24fKWvM_Jo6TpqviyBz99kvdb_2i6-sw7xqrt9d6ppd0n7w/viewform" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Open Cricket (Girls)
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEIN7nQ3I2kSJmqEGVtz_KvGFCj_uFRoazKJ3U8qATxp3zNQ/viewform" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-gray-800">
                      Open Cricket (Boys)
                    </a>
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
