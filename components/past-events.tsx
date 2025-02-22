// "use client"

// import { useSpring, animated } from "@react-spring/web"
// import { useState } from "react"

// const events = [
//   { id: 1, title: "Hackathon", category: "Technical", image: "/placeholder.svg?height=300&width=400" },
//   { id: 2, title: "Cricket Tournament", category: "Sports", image: "/placeholder.svg?height=300&width=400" },
//   { id: 3, title: "Dance Competition", category: "Cultural", image: "/placeholder.svg?height=300&width=400" },
//   { id: 4, title: "Robotics Workshop", category: "Technical", image: "/placeholder.svg?height=300&width=400" },
//   { id: 5, title: "Chess Championship", category: "Sports", image: "/placeholder.svg?height=300&width=400" },
//   { id: 6, title: "Music Festival", category: "Cultural", image: "/placeholder.svg?height=300&width=400" },
// ]

// const EventCard = ({ title, category, image }) => {
//   const [hovered, setHovered] = useState(false)

//   const cardSpring = useSpring({
//     transform: hovered ? "scale(1.05)" : "scale(1)",
//     boxShadow: hovered ? "0 10px 20px rgba(255, 0, 0, 0.3)" : "0 5px 10px rgba(255, 0, 0, 0.1)",
//   })

//   return (
//     <animated.div
//       style={cardSpring}
//       className="bg-gray-900 rounded-lg overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-red-500">{category}</p>
//       </div>
//     </animated.div>
//   )
// }

// const PastEvents = () => {
//   return (
//     <section id="past-events" className="py-16 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold mb-8 text-center text-red-500">Past Events</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event) => (
//             <EventCard key={event.id} {...event} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PastEvents

