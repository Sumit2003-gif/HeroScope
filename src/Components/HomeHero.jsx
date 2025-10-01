import React, { useState } from 'react'
import { FaHeart, FaHome, FaUser } from 'react-icons/fa'
import { GiHorseHead, GiTwoCoins } from 'react-icons/gi'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const RightPartPages = [
  [
    { name: 'Chinese Astrology', icon: <GiHorseHead size={24} color="white" /> },
    { name: 'Vasthusastra', icon: <FaHome size={24} color="white" /> },
    { name: 'Career Tarot', icon: <FaUser size={24} color="white" /> }, // Fixed typo from "Carrer" to "Career"
    { name: 'Love Tarot', icon: <FaHeart size={24} color="white" /> },
    { name: 'Numerology', icon: <GiTwoCoins size={24} color="white" /> }
  ],
  [
    { name: 'Chinese Astrology', icon: <GiHorseHead size={24} color="white" /> },
    { name: 'Vasthusastra', icon: <FaHome size={24} color="white" /> },
    { name: 'Career Tarot', icon: <FaUser size={24} color="white" /> }, // Fixed typo
    { name: 'Love Tarot', icon: <FaHeart size={24} color="white" /> },
    { name: 'Numerology', icon: <GiTwoCoins size={24} color="white" /> }
  ]
]

const LeftTextPages = [
  {
    heading: 'THE BEST HOROSCOPE',
    paragraph:
      'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio.'
  },
  {
    heading: 'DISCOVER YOUR FUTURE',
    paragraph:
      'Explore ancient wisdom and unlock your destiny with our personalized readings. Your path to clarity and insight begins here.'
  }
]

const slideHeight = 300 // px

const slideVariants = {
  enter: (direction) => ({
    y: direction > 0 ? slideHeight : -slideHeight,
    opacity: 0
  }),
  center: {
    y: 0,
    opacity: 1
  },
  exit: (direction) => ({
    y: direction < 0 ? slideHeight : -slideHeight,
    opacity: 0
  })
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.15 }
  }
}

const charVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const paragraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const sidebarItemVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
}

const AnimatedHeading = ({ text, className, keyId }) => (
  <motion.div
    key={keyId}
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
    className={className}
  >
    {text.split('').map((char, i) => (
      <motion.span key={i} variants={charVariant} className="inline-block">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.div>
)

const HomeHero = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      const newPage = (prevPage + newDirection + LeftTextPages.length) % LeftTextPages.length
      return [newPage, newDirection]
    })
  }

  return (
    <div
      className="relative bg-cover bg-center h-[60vh] lg:h-[120vh] flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-10"
      style={{
        backgroundImage: `url("https://www.webstrot.com/html/horoscope/light_version/images/header/slide.jpg")`
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Left Text */}
      <div
        className="w-full mt-10 md:w-1/2 text-white space-y-6 z-20 grid justify-center items-center mb-10 md:mb-0 overflow-hidden"
        style={{ height: slideHeight }}
      >
        <AnimatePresence initial={true} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.6 }}
            className="space-y-6"
          >
            <img
              src="https://www.webstrot.com/html/horoscope/light_version/images/header/slider_logo.png"
              alt="logo"
              className="h-16 mx-auto md:mx-0"
            />

            {/* Animated heading with letter animation */}
            <AnimatedHeading
              keyId={page}
              text={LeftTextPages[page].heading}
              className="text-xl md:text-5xl font-bold text-center md:text-left"
            />

            {/* Paragraph fade-in */}
            <motion.p
              key={`para-${page}`}
              variants={paragraphVariant}
              initial="hidden"
              animate="visible"
              className="text-gray-300 text-center md:text-left px-4 md:px-0 max-w-md mx-auto md:mx-0"
            >
              {LeftTextPages[page].paragraph}
            </motion.p>
            <Link to="/about">
              <button className="bg-sky-500 cursor-pointer mb-2 w-2/3 md:w-1/3 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-semibold mx-auto md:mx-0 transition-colors duration-300">
                READ MORE
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Sidebar - Hidden on mobile */}
      <div
        className="hidden md:block w-full md:w-1/3 overflow-hidden relative z-20 flex justify-start"
        style={{ height: slideHeight }}
      >
        <AnimatePresence initial={true} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.6 }}
            className="flex flex-col gap-4 items-end"
          >
            {RightPartPages[page].map((item, index) => (
              <motion.div
                key={index}
                variants={sidebarItemVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="p-4 rounded-full bg-orange-500 border-4 border-gray-500">
                  {item.icon}
                </div>
                <div className="bg-black/40 text-white px-10 py-3 rounded-full backdrop-blur-sm w-[200px] text-center truncate text-lg">
                  {item.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>


    </div>
  )
}

export default HomeHero