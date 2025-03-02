import { Instagram } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    domain: "Technical",
    secretary: "Shitalaprasad Sharma",
    jointSecretary: "Vivek Shingne",
    color: "yellow-400",
  },
  {
    domain: "Sports",
    secretary: "Pratham Tamboli",
    jointSecretaries: ["Shreya Jangam", "Swaraj Rathod"],
    color: "green-400",
  },
  {
    domain: "Cultural",
    secretary: "Vishakha D. Pingat",
    jointSecretary: "Snehil Suryavanshi",
    color: "purple-400",
  },
];

const representatives = [
  { title: "University Representative", name: "Sanjana Tikone" },
  { title: "Jt. University Representative", name: "Atul Jagtap" },
  { title: "Ladies Representative", name: "Prayukta Pedhavi" },
  { title: "Jt. Ladies Representative", name: "Varsha Kunga" },
  { title: "NSS Representative", name: "Hemangi Patil" },
  { title: "NSS Representative", name: "Vighnesh Chorge" },
  { title: "NCC Representative", name: "Atharva Rajebhosale" },
  { title: "Jt. NCC Representative", name: "Rohit Mankar" },
  { title: "T & P Coordinator", name: "Sumit Jha" },
  { title: "Jt. T & P Coordinator", name: "Rashmi Chaurasia" },
  { title: "Magazine Secretary", name: "Nihal Sarambalkar" },
  { title: "Jt. Magazine Secretary", name: "Sarthak Teli" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-red-500 tracking-wide uppercase mb-12">
          Brains Behind the Bash
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {contactInfo.map((info, index) => (
            <div key={index} className="relative group">
              <h3 className={`text-2xl font-semibold text-${info.color} mb-2`}>{info.domain}</h3>
              <div className={`w-14 h-1 bg-${info.color} mx-auto mb-4 group-hover:w-20 transition-all duration-300`}></div>
              <p className="text-lg text-gray-300">
                <span className="font-semibold">Secretary:</span> {info.secretary}
              </p>
              {Array.isArray(info.jointSecretaries) ? (
                info.jointSecretaries.map((joint, i) => (
                  <p key={i} className="text-lg text-gray-300">
                    <span className="font-semibold">Joint Secretary:</span> {joint}
                  </p>
                ))
              ) : (
                <p className="text-lg text-gray-300">
                  <span className="font-semibold">Joint Secretary:</span> {info.jointSecretary}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Representatives Section in 3-column format */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-blue-400">Representatives of Council</h3>
          <div className="w-14 h-1 bg-blue-400 mx-auto my-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {representatives.map((rep, index) => (
              <div key={index} className="text-lg text-gray-300">
                <span className="font-semibold">{rep.title}:</span> {rep.name}
              </div>
            ))}
          </div>
        </div>

        {/* Joint General Secretary Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-green-400">Joint General Secretary</h3>
          <div className="w-14 h-1 bg-green-400 mx-auto my-2"></div>
          <p className="text-lg text-gray-300">Shivam Suryavanshi</p>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4 mb-8">
          <a
            href="https://www.instagram.com/mgmcet_council"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition duration-300"
          >
            <Instagram size={40} />
          </a>
          <p className="text-lg text-gray-400 mt-4 md:mt-0">
            Follow <span className="text-red-400 font-semibold">MGMCET Council</span> for the latest updates on Mangalam 2025!
          </p>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-400 text-lg">
          © 2025 <span className="text-red-400 font-semibold">Mangalam.</span> All rights reserved by the <span className="text-yellow-400 font-semibold">Student Council</span>.
        </p>
        <p className="text-center text-gray-500 text-sm mt-2">
          Website Credits:
          <Link href="https://www.instagram.com/harshal.tupe_/" target="_blank" className="text-yellow-400 hover:underline ml-1">
            Harshal Tupe
          </Link>,
          <Link href="https://www.instagram.com/duskktilldawn.27/" target="_blank" className="text-yellow-400 hover:underline ml-1">
            Shitalaprasad Sharma
          </Link>,
          <Link href="https://www.instagram.com/viivek_01/" target="_blank" className="text-yellow-400 hover:underline ml-1">
            Vivek Shingne
          </Link>
        </p>

        {/* Visitor Count Section */}
        <div className="flex justify-center items-center my-5">
          <p className="text-gray-500 mx-2 text-sm">Visitor count:</p>
          <Link href="#">
            <img src="https://hitwebcounter.com/counter/counter.php?page=19416284&style=0006&nbdigits=8&type=page&initCount=995" className="w-24" title="Counter Widget" alt="Visit counter For Websites" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
