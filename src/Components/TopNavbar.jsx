import React from 'react'
import { HiHome, HiPhone } from 'react-icons/hi'
import { motion } from 'framer-motion'

const TopNavbar = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const hoverScale = { scale: 1.1 }

  return (
    <motion.div
      className="fixed top-0 left-0 w-full bg-white shadow z-60 hidden md:flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Logo */}
      <div className="w-full md:w-auto flex justify-center md:justify-start mb-3 md:mb-0">
        <img
          src="https://www.webstrot.com/html/horoscope/light_version/images/header/logo.png"
          alt="logo"
          className="h-10 md:h-14"
        />
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-auto flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 lg:space-x-8 my-2">
        {/* Address */}
        <motion.div
          className="flex items-center space-x-2 md:space-x-3 cursor-pointer"
          whileHover={hoverScale}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="text-orange-500 text-2xl md:text-3xl border-[2px] border-gray-100 p-1 md:p-2 rounded">
            <HiHome />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base lg:text-lg font-semibold text-black">Reach Us</p>
            <p className="text-xs md:text-sm text-gray-500">601, Ram Nagar Dewas</p>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex items-center space-x-2 md:space-x-3 cursor-pointer"
          whileHover={hoverScale}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="text-orange-500 text-2xl md:text-3xl border-[2px] border-gray-100 p-1 md:p-2 rounded">
            <HiPhone />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base lg:text-lg font-semibold text-black">Talk to Astrologers</p>
            <p className="text-xs md:text-sm text-gray-500">+91-123456789</p>
          </div>
        </motion.div>
      </div>

      {/* Appointments Button + Profile */}
      <div className="w-full md:w-auto flex justify-center items-center space-x-3 md:space-x-4 mt-3 md:mt-0">
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          APPOINTMENTS
        </motion.button>

        <motion.div
          className="relative cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src="https://www.webstrot.com/html/horoscope/light_version/images/header/top_user.jpg"
            alt="user"
            className="h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-transparent hover:border-blue-500 transition-all"
          />
          <span className="absolute bottom-0 right-0 h-4 w-4 md:h-5 md:w-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center border-2 border-white">
            +
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TopNavbar