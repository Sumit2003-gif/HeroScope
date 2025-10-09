import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu as MenuIcon, X } from 'lucide-react'
import { FiShoppingBag } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ cartCount = 3, onSearch }) => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const location = useLocation()
  const prevScrollPos = useRef(0)
  const searchTimeout = useRef(null)

  // Handle search with debounce
  const handleSearchChange = useCallback((e) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }
    
    searchTimeout.current = setTimeout(() => {
      if (onSearch) {
        onSearch(query)
      }
    }, 300)
  }, [onSearch])

  // Check if mobile on initial load
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current)
      }
    }
  }, [mobileMenuOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <motion.nav
      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 md:px-10 lg:px-20 py-3 sm:py-4 fixed w-full z-50 shadow-lg"
      initial={false}
      animate={{
        top: showNavbar ? 0 : -100,
        opacity: showNavbar ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      style={{ position: 'fixed' }}
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center justify-start mx-2 sm:mx-4" aria-label="Home">
          <img
            src="https://www.webstrot.com/html/horoscope/light_version/images/header/logo.png"
            alt="Company logo"
            className="h-8 sm:h-10 md:h-14"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 justify-between items-center font-semibold text-base lg:text-lg relative" aria-label="Desktop navigation">
          {menu.map((item, index) => (
            <React.Fragment key={index}>
              <Link 
                to={item.path} 
                className={`relative group transition text-nowrap duration-300 ${
                  location.pathname === item.path ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
                <motion.span
                  layoutId="underline"
                  initial={{ width: location.pathname === item.path ? '100%' : 0 }}
                  animate={{ width: location.pathname === item.path ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="block h-[2px] bg-yellow-300 absolute left-0 -bottom-1"
                />
              </Link>
              {index !== menu.length - 1 && (
                <span className="text-yellow-200/50 select-none hidden lg:block" aria-hidden="true">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right side: Search + Cart */}
        <div className="hidden md:flex justify-between items-center space-x-3 lg:space-x-6">
          {/* Search */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-32 sm:w-40 md:w-48 lg:w-60 px-3 py-1 md:px-4 md:py-2 rounded-md bg-orange-400/30 border border-transparent placeholder-yellow-200 text-white focus:outline-none focus:border-yellow-300 transition duration-300"
              aria-label="Search"
            />
            <motion.div
              initial={{ opacity: 0.6 }}
              animate={{ opacity: searchFocused ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-300 pointer-events-none"
              aria-hidden="true"
            >
              <Search size={18} />
            </motion.div>
          </div>

          {/* Cart */}
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <FiShoppingBag size={20} className="text-yellow-300" />
            {cartCount > 0 && (
              <motion.span
                className="absolute -top-2 -right-2 bg-yellow-300 text-orange-600 text-xs font-bold px-2 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                aria-hidden="true"
              >
                {cartCount}
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-yellow-300 hover:text-yellow-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-full p-1"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-orange-600 mt-3 rounded-md py-4 px-4 sm:px-6 space-y-4 shadow-lg overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block font-semibold text-lg py-2 transition duration-300 border-b border-yellow-300 last:border-b-0 ${
                  location.pathname === item.path 
                    ? 'text-yellow-300' 
                    : 'text-white hover:text-yellow-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Search */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 rounded-md bg-orange-500 placeholder-yellow-200 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
                aria-label="Search"
              />
              <Search
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-300 opacity-70"
                aria-hidden="true"
              />
            </div>

            {/* Mobile Cart */}
            <div className="relative mt-4 flex justify-center">
              <div 
                className="relative cursor-pointer"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <FiShoppingBag size={28} className="text-yellow-300" />
                {cartCount > 0 && (
                  <motion.span
                    className="absolute -top-2 -right-4 bg-yellow-300 text-orange-600 text-xs font-bold px-2 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    aria-hidden="true"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar