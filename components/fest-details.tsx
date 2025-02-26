import { Download } from "lucide-react";

const CurrentFestDetails = () => {
  return (
    <section id="current-fest" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-red-500 tracking-wide uppercase mb-8">
          Mangalam 2025
        </h2>
        <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Mangalam 2025 brings an electrifying mix of technical, cultural, and sports events! 
          Witness groundbreaking competitions, creative showcases, and thrilling athletic battles.
          Be part of this unforgettable journey of innovation and entertainment.
        </p>

        {/* Student Council Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg mb-10">
          <h3 className="text-3xl font-semibold text-green-400 mb-4">Student Council</h3>
          <p className="text-gray-300">
            The backbone of Mangalam, the Student Council orchestrates the fest with sheer dedication and teamwork. 
            From event planning to seamless execution, they ensure an experience like no other!
          </p>
        </div>

        {/* Event Sections */}
        <div className="space-y-10">
          {/* Technical Events */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Technical Events</h3>
            <p className="text-gray-300 mb-6">
              Challenge yourself in coding battles, hackathons, and tech symposiums that push innovation to the next level.
            </p>
            <a
              href="/pdfs/mangalam-tech.pdf"
              download="Mangalam_Technical_2025.pdf"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 shadow-md"
            >
              <Download className="mr-2" />
              Download Technical PDF
            </a>
          </div>

          {/* Sports Events */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-semibold text-green-400 mb-4">Sports Events</h3>
            <p className="text-gray-300 mb-6">
              Unleash your energy in thrilling sports competitions, ranging from intense team battles to solo challenges.
            </p>
            <a
              href="/sports_20250226_145439_0000_compressed.pdf"
              download="Mangalam_Sports_2025.pdf"
              className="bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 shadow-md"
            >
              <Download className="mr-2" />
              Download Sports PDF
            </a>
          </div>

          {/* Cultural Events */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-semibold text-purple-400 mb-4">Cultural Events</h3>
            <p className="text-gray-300 mb-6">
              A celebration of art, music, dance, and creativity—immerse yourself in breathtaking performances and artistic expression.
            </p>
            <a
              href="/pdfs/mangalam-cultural.pdf"
              download="Mangalam_Cultural_2025.pdf"
              className="bg-purple-400 hover:bg-purple-500 text-black font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 shadow-md"
            >
              <Download className="mr-2" />
              Download Cultural PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFestDetails;
