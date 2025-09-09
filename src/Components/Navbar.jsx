import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu as MenuIcon, X } from 'lucide-react'
import { FiShoppingBag } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  // Keep track of previous scroll position
  const prevScrollPos = useRef(0)

  useEffect(() => {
    prevScrollPos.current = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      // Show navbar if scrolling up or near top, hide if scrolling down
      if (prevScrollPos.current > currentScrollPos || currentScrollPos < 50) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }

      prevScrollPos.current = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 md:px-20 py-4 fixed w-full z-50 shadow-lg"
      initial={false}
      animate={{
        top: showNavbar ? '90px' : '-100px',
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      style={{ position: 'fixed' }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-widest hover:text-yellow-300 transition duration-300">
          BRAND
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center font-semibold text-lg relative">
          {menu.map((item, index) => (
            <React.Fragment key={index}>
              <Link to={item.path} className="relative group text-white">
                {item.name}
                <motion.span
                  layoutId="underline"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="block h-[2px] bg-yellow-300 absolute left-0 -bottom-1"
                />
              </Link>
              {index !== menu.length - 1 && (
                <span className="text-yellow-200/50 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right side: Search + Cart */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search here"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-48 md:w-60 px-4 py-2 rounded-md bg-orange-400/30 border border-transparent placeholder-yellow-200 text-white focus:outline-none focus:border-yellow-300 transition duration-300"
            />
            <motion.div
              initial={{ opacity: 0.6 }}
              animate={{ opacity: searchFocused ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-300 pointer-events-none"
            >
              <Search size={20} />
            </motion.div>
          </div>

          {/* Cart */}
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiShoppingBag size={24} className="text-yellow-300" />
            <motion.span
              className="absolute -top-2 -right-2 bg-yellow-300 text-orange-600 text-xs font-bold px-2 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              3
            </motion.span>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-yellow-300 hover:text-yellow-400 transition duration-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-orange-600 mt-3 rounded-md py-4 px-6 space-y-4 shadow-lg overflow-hidden"
          >
            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block text-white font-semibold text-lg py-2 hover:text-yellow-300 transition duration-300 border-b border-yellow-300 last:border-b-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Search */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search here"
                className="w-full px-4 py-2 rounded-md bg-orange-500 placeholder-yellow-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <Search
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-300 opacity-70"
              />
            </div>

            {/* Mobile Cart */}
            <div className="relative mt-4 flex justify-center">
              <FiShoppingBag size={28} className="text-yellow-300" />
              <motion.span
                className="absolute -top-2 -right-4 bg-yellow-300 text-orange-600 text-xs font-bold px-2 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                3
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
