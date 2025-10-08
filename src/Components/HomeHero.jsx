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
    { name: 'Career Tarot', icon: <FaUser size={24} color="white" /> },
    { name: 'Love Tarot', icon: <FaHeart size={24} color="white" /> },
    { name: 'Numerology', icon: <GiTwoCoins size={24} color="white" /> }
  ],
  [
    { name: 'Chinese Astrology', icon: <GiHorseHead size={24} color="white" /> },
    { name: 'Vasthusastra', icon: <FaHome size={24} color="white" /> },
    { name: 'Career Tarot', icon: <FaUser size={24} color="white" /> },
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

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
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

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition
    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      // Swipe left
      paginate(1)
    } else if (diff < -5) {
      // Swipe right
      paginate(-1)
    }

    setTouchPosition(null)
  }

  const [touchPosition, setTouchPosition] = useState(null)

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 py-10 overflow-hidden"
      style={{
        backgroundImage: `url("https://www.webstrot.com/html/horoscope/light_version/images/header/slide.jpg")`
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => paginate(-1)}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <IoIosArrowBack className="text-2xl" />
      </button>
      <button 
        onClick={() => paginate(1)}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <IoIosArrowForward className="text-2xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {LeftTextPages.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > page ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${page === index ? 'bg-white scale-125' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <AnimatePresence initial={true} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.6 }}
              className="w-full"
            >
              <div className="mb-8">
                <img
                  src="https://www.webstrot.com/html/horoscope/light_version/images/header/slider_logo.png"
                  alt="logo"
                  className="h-20 mx-auto lg:mx-0"
                />
              </div>

              {/* Animated heading */}
              <div className="mb-6">
                <AnimatedHeading
                  keyId={page}
                  text={LeftTextPages[page].heading}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                />
                <div className="w-24 h-1 bg-orange-500 mx-auto lg:mx-0"></div>
              </div>

              {/* Paragraph */}
              <motion.p
                key={`para-${page}`}
                variants={paragraphVariant}
                initial="hidden"
                animate="visible"
                className="text-gray-200 mb-8 text-lg max-w-lg mx-auto lg:mx-0"
              >
                {LeftTextPages[page].paragraph}
              </motion.p>

              {/* Button */}
              <div className="mt-6">
                <Link to="/about">
                  <button className="bg-gradient-to-r cursor-pointer from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    READ MORE
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Content - Services Grid */}
        <div className="w-full lg:w-1/2">
          <AnimatePresence initial={true} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {RightPartPages[page].map((item, index) => (
                <motion.div
                  key={index}
                  variants={sidebarItemVariant}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 flex flex-col items-center text-center group"
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default HomeHero