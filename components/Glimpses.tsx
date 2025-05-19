"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const glimpses = {
  Technical: [
    "/IMAGES/Technical-glimpse-1.jpg",
    "/IMAGES/Technical-glimpse-2.jpg",
    "/IMAGES/Technical-glimpse-3.jpg",
    "/IMAGES/Technical-glimpse-4.jpg",
    "/IMAGES/Technical-glimpse-5.jpg",
    "/IMAGES/Technical-glimpse-6.jpg",
    "/IMAGES/Technical-glimpse-7.jpg",
    "/IMAGES/Technical-glimpse-8.jpg",
    "/IMAGES/Technical-glimpse-9.jpg",
    "/IMAGES/Technical-glimpse-10.JPG",
  ],
  Sports: [
    "/IMAGES/sports1.jpg",
    "/IMAGES/sports2.jpg",
    "/IMAGES/sports3.jpg",
    "/IMAGES/sports4.jpg",
    "/IMAGES/sports5.jpg",
  ],
  Cultural: [
    "/IMAGES/cultural1.jpg",
    "/IMAGES/cultural2.jpg",
    "/IMAGES/cultural3.jpg",
    "/IMAGES/cultural4.jpg",
    "/IMAGES/cultural5.jpg",
  ],
};

const arrowColors = {
  Technical: "text-yellow-400 hover:text-yellow-500",
  Sports: "text-green-400 hover:text-green-500",
  Cultural: "text-purple-400 hover:text-purple-500",
};

const Glimpses = () => {
  const [currentIndexes, setCurrentIndexes] = useState({
    Technical: 0,
    Sports: 0,
    Cultural: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) => {
        const newIndexes = { ...prev };
        for (const key in glimpses) {
          const typedKey = key as keyof typeof glimpses;
          newIndexes[typedKey] = (prev[typedKey] + 1) % glimpses[typedKey].length;
        }
        return newIndexes;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = (category: keyof typeof glimpses) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [category]:
        (prev[category] - 1 + glimpses[category].length) % glimpses[category].length,
    }));
  };

  const handleNext = (category: keyof typeof glimpses) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [category]: (prev[category] + 1) % glimpses[category].length,
    }));
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-red-500 uppercase mb-12">
          Glimpses of Mangalam
        </h2>

        {Object.entries(glimpses).map(([category, images], idx) => {
          const typedCategory = category as keyof typeof glimpses;
          return (
            <div key={idx} className="mb-16 text-center">
              <h3 className={`text-3xl font-bold mb-6 ${arrowColors[typedCategory]}`}>
                {typedCategory}
              </h3>
              <div className="relative max-w-md mx-auto">
                <div className="border border-gray-700 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={images[currentIndexes[typedCategory]]}
                    alt={`${typedCategory} glimpse ${currentIndexes[typedCategory] + 1}`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-64"
                    priority
                  />
                </div>
                <button
                  onClick={() => handlePrev(typedCategory)}
                  className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 p-2 rounded-full ${arrowColors[typedCategory]}`}
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={() => handleNext(typedCategory)}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 p-2 rounded-full ${arrowColors[typedCategory]}`}
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Glimpses;
