// "use client";

// import { useSpring, animated, SpringValue } from "@react-spring/web";
// import { useState } from "react";
// import { Code, Dumbbell, Music, LucideIcon } from "lucide-react";

// // Define the type for game objects
// interface Game {
//   id: number;
//   title: string;
//   category: string;
//   icon: LucideIcon;
//   description: string;
// }

// // Game data with proper type
// const games: Game[] = [
//   {
//     id: 1,
//     title: "Model UN",
//     category: "Technical",
//     icon: Code,
//     description: "Engage in dynamic debates and strategic diplomacy on global issues 🚀.",
//   },
//   {
//     id: 2,
//     title: "Shark Tank",
//     category: "Technical",
//     icon: Code,
//     description: "Pitch innovative ideas and battle for investment in a high-stakes arena!",
//   },
//   {
//     id: 3,
//     title: "Penalty Shootout",
//     category: "Sports",
//     icon: Dumbbell,
//     description: "Test your precision and nerves in an intense penalty shootout showdown!",
//   },
//   {
//     id: 4,
//     title: "Badminton Blitz",
//     category: "Sports",
//     icon: Dumbbell,
//     description: "High-energy badminton matches for singles and doubles.",
//   },
//   {
//     id: 5,
//     title: "Solo Singing",
//     category: "Cultural",
//     icon: Music,
//     description: "Let your voice shine and steal the spotlight!",
//   },
//   {
//     id: 6,
//     title: "Fashion Show",
//     category: "Cultural",
//     icon: Music,
//     description: "Own the runway with style, confidence, and charisma!",
//   },
// ];

// // Define props type for GameCard
// interface GameCardProps {
//   title: string;
//   category: string;
//   icon: LucideIcon;
//   description: string;
// }

// const GameCard: React.FC<GameCardProps> = ({ title, category, icon: Icon, description }) => {
//   const [hovered, setHovered] = useState(false);

//   const cardSpring = useSpring<{ transform: SpringValue<string>; boxShadow: SpringValue<string> }>({
//     transform: hovered ? "scale(1.08)" : "scale(1)",
//     boxShadow: hovered
//       ? "0 12px 24px rgba(255, 0, 0, 0.5)"
//       : "0 6px 12px rgba(255, 0, 0, 0.2)",
//   });

//   return (
//     <animated.div
//       style={{ ...cardSpring }}
//       className="bg-gray-900 rounded-xl overflow-hidden p-6 shadow-md border border-red-500 transition-all duration-300"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="flex items-center justify-center mb-4">
//         <Icon className="text-red-500 bg-black p-2 rounded-full shadow-lg" size={56} />
//       </div>
//       <h3 className="text-2xl font-extrabold mb-2 text-center text-white">{title}</h3>
//       <p className="text-lg font-semibold text-red-400 text-center mb-4">{category}</p>
//       <p className="text-gray-300 text-center leading-relaxed">{description}</p>
//     </animated.div>
//   );
// };

// const FeaturedGames: React.FC = () => {
//   return (
//     <section id="featured-games" className="py-20 bg-gradient-to-b from-black to-gray-900">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-5xl font-extrabold text-red-500 tracking-wide uppercase mb-12">
//           Featured Events
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {games.map((game) => (
//             <GameCard key={game.id} {...game} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedGames;
"use client";

import { useState } from "react";
import { Code, Dumbbell, Music, LucideIcon } from "lucide-react";

// Define the type for game objects
interface Game {
  id: number;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
}

// Game data with proper type
const games: Game[] = [
  {
    id: 1,
    title: "Model UN",
    category: "Technical",
    icon: Code,
    description: "Engage in dynamic debates and strategic diplomacy on global issues 🚀.",
  },
  {
    id: 2,
    title: "Shark Tank",
    category: "Technical",
    icon: Code,
    description: "Pitch innovative ideas and battle for investment in a high-stakes arena!",
  },
  {
    id: 3,
    title: "Penalty Shootout",
    category: "Sports",
    icon: Dumbbell,
    description: "Test your precision and nerves in an intense penalty shootout showdown!",
  },
  {
    id: 4,
    title: "Badminton Blitz",
    category: "Sports",
    icon: Dumbbell,
    description: "High-energy badminton matches for singles and doubles.",
  },
  {
    id: 5,
    title: "Solo Singing",
    category: "Cultural",
    icon: Music,
    description: "Let your voice shine and steal the spotlight!",
  },
  {
    id: 6,
    title: "Fashion Show",
    category: "Cultural",
    icon: Music,
    description: "Own the runway with style, confidence, and charisma!",
  },
];

// Define props type for GameCard
interface GameCardProps {
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, category, icon: Icon, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-gray-900 rounded-xl overflow-hidden p-6 shadow-md border border-red-500 transition-all duration-300 transform ${
        hovered ? "scale-105 shadow-lg" : "scale-100"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-center mb-4">
        <Icon className="text-red-500 bg-black p-2 rounded-full shadow-lg" size={56} />
      </div>
      <h3 className="text-2xl font-extrabold mb-2 text-center text-white">{title}</h3>
      <p className="text-lg font-semibold text-red-400 text-center mb-4">{category}</p>
      <p className="text-gray-300 text-center leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturedGames: React.FC = () => {
  return (
    <section id="featured-games" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-red-500 tracking-wide uppercase mb-12">
          Featured Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
