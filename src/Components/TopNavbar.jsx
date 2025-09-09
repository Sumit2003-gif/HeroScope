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
      className="fixed top-0 left-0 w-full bg-white shadow z-60 flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Logo */}
      <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
        <img
          src="https://www.webstrot.com/html/horoscope/light_version/images/header/logo.png"
          alt="logo"
          className="h-14"
        />
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-auto flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
        {/* Address */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={hoverScale}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="text-orange-500 text-3xl border-[2px] border-gray-100 p-2 rounded">
            <HiHome />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Reach Us</p>
            <p className="text-sm text-gray-500">601 , Ram Nagar Dewas</p>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={hoverScale}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="text-orange-500 text-3xl border-[2px] border-gray-100 p-2 rounded">
            <HiPhone />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Talk to Astrologers</p>
            <p className="text-sm text-gray-500">+91-123456789</p>
          </div>
        </motion.div>
      </div>

      {/* Appointments Button + Profile */}
      <div className="w-full md:w-1/4 flex justify-center md:justify-end items-center space-x-4 mt-4 md:mt-0">
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 md:px-8 py-3 rounded-full shadow-lg"
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
            className="h-14 w-14 rounded-full border-2 border-transparent hover:border-blue-500 transition-all"
          />
          <span className="absolute bottom-0 right-0 h-5 w-5 bg-green-500 text-white text-sm rounded-full flex items-center justify-center border-2 border-white">
            +
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TopNavbar
