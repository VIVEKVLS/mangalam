import Link from "next/link";
import { Instagram } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-90 fixed w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Mangalam Branding */}
          <Link href="/" className="text-red-500 text-2xl font-extrabold tracking-wider uppercase">
            Mangalam <span className="text-white">2025</span>
          </Link>

          {/* Right Side - Instagram Link */}
          <a
            href="https://www.instagram.com/mgmcet_council?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-500 transition duration-300"
          >
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
