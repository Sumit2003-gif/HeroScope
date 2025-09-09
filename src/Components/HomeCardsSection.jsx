import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CardsDetail = [
  {
    img: "https://www.webstrot.com/html/horoscope/light_version/images/content/title_img1.jpg",
    header: "Tarot Reading",
    text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
    price: "$12"
  },
  {
    img: "https://www.webstrot.com/html/horoscope/light_version/images/content/title_img2.jpg",
    header: "Crystal ball reading",
    text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
    price: "$16"
  },
  {
    img: "https://www.webstrot.com/html/horoscope/light_version/images/content/title_img3.jpg",
    header: "Palm Reading",
    text: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis.",
    price: "$13"
  }
]

// Container variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3
    }
  }
}

// Card animation: fade and slide up + scale on hover with subtle shadow
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 }
  },
  hover: {
    scale: 1.04,
    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)', // subtle shadow on hover
    transition: { duration: 0.3 }
  }
}

// Text animation inside card
const textVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const priceVariants = {
  initial: { x: -120, opacity: 0 },
  hover: { x: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }
}

const HomeCardsSection = () => {
  return (
    <motion.div
      className="relative z-20 -mt-24 px-4 md:px-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Responsive grid: 1 column mobile, 2 md, 3 lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {CardsDetail.map((item, index) => (
  <motion.div
    key={index}
    className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-xl overflow-hidden cursor-pointer border border-gray-200"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"  // <-- hover state here
  >
    {/* Image with subtle zoom on hover */}
    <motion.img
      src={item.img}
      alt={item.header}
      className="w-full h-64 object-cover rounded-t-xl"
      whileHover={{ scale: 1.07 }}
      transition={{ duration: 0.4 }}
    />

    {/* Price tag slides in on card hover */}
    <motion.div
      className="absolute top-4 left-0 bg-orange-500 text-white px-5 py-2 rounded-tr-xl rounded-br-xl font-semibold text-sm shadow-md"
      variants={priceVariants}
      initial="initial"
      // no whileHover here — price follows parent hover state
    >
      {item.price}
    </motion.div>

    {/* Text content */}
    <motion.div className="p-6 space-y-3">
      <motion.h2
        className="text-2xl font-semibold text-gray-900"
        variants={textVariants}
      >
        {item.header}
      </motion.h2>
      <motion.p
        className="text-gray-600 text-base leading-relaxed"
        variants={textVariants}
      >
        {item.text}
      </motion.p>
      <Link to="/blog">
      <motion.button
        className="mt-4 bg-sky-500 cursor-pointer hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
        variants={textVariants}
      >
        READ MORE
      </motion.button>
      </Link>
    </motion.div>
  </motion.div>
))}
      </div>
    </motion.div>
  )
}

export default HomeCardsSection
