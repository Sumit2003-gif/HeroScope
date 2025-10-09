import React from 'react';
import { motion } from 'framer-motion';
import {
  GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo,
  GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces
} from 'react-icons/gi';

const HomeZodac = () => {
  const zodiacSigns = [
    { icon: GiAries, name: "Aries", date: "Mar 21 - Apr 19", color: "" },
    { icon: GiTaurus, name: "Taurus", date: "Apr 20 - May 20", color: "#4ECDC4" },
    { icon: GiGemini, name: "Gemini", date: "May 21 - Jun 20", color: "#FFD166" },
    { icon: GiCancer, name: "Cancer", date: "Jun 21 - Jul 22", color: "#118AB2" },
    { icon: GiLeo, name: "Leo", date: "Jul 23 - Aug 22", color: "#FF9F1C" },
    { icon: GiVirgo, name: "Virgo", date: "Aug 23 - Sep 22", color: "#06D6A0" },
    { icon: GiLibra, name: "Libra", date: "Sep 23 - Oct 22", color: "#EF476F" },
    { icon: GiScorpio, name: "Scorpio", date: "Oct 23 - Nov 21", color: "#073B4C" },
    { icon: GiSagittarius, name: "Sagittarius", date: "Nov 22 - Dec 21", color: "#7209B7" },
    { icon: GiCapricorn, name: "Capricorn", date: "Dec 22 - Jan 19", color: "#560BAD" },
    { icon: GiAquarius, name: "Aquarius", date: "Jan 20 - Feb 18", color: "#3A86FF" },
    { icon: GiPisces, name: "Pisces", date: "Feb 19 - Mar 20", color: "#8338EC" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    },
    hover: {
      rotate: 15,
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold uppercase mb-4 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Your <span className="text-transparent bg-clip-text bg-[#FF6900]">Zodiac Sign</span>
        </motion.h1>
        
        <motion.div 
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-24"></div>
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-800"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-orange-700 to-transparent w-24"></div>
        </motion.div>
        
        <motion.p 
          className="text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore the mysteries of the cosmos and uncover insights about your personality, relationships, and destiny through the ancient wisdom of astrology.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-100"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="h-3 w-full bg-[#FF6900]" 
                
              ></div>
              <div className="p-6">
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#FF6900]"
                  
                  variants={iconVariants}
                >
                  <sign.icon className="text-white text-2xl" />
                </motion.div>
                <h2 className="font-bold text-xl mb-1">{sign.name}</h2>
                <p className="text-gray-600 text-sm">{sign.date}</p>
                <motion.div 
                onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
                  className="mt-4 text-sm font-medium text-orange-500"
                  
                  whileHover={{ scale: 1.05 }}
                >
                  Read More →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </div>
  );
};

export default HomeZodac;