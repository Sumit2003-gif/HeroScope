import React from 'react';
import { motion } from 'framer-motion';
import {
  GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo,
  GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces
} from 'react-icons/gi';

const HomeZodac = () => {
  const zodiacLeft = [
    { icon: GiAries, name: "Aries", date: "31 March - 12 October" },
    { icon: GiTaurus, name: "Taurus", date: "31 March - 12 October" },
    { icon: GiGemini, name: "Gemini", date: "31 March - 12 October" },
    { icon: GiCancer, name: "Cancer", date: "31 March - 12 October" },
    { icon: GiLeo, name: "Leo", date: "31 March - 12 October" },
    { icon: GiVirgo, name: "Virgo", date: "31 March - 12 October" }
  ];

  const zodiacRight = [
    { icon: GiLibra, name: "Libra", date: "31 March - 12 October" },
    { icon: GiScorpio, name: "Scorpio", date: "31 March - 12 October" },
    { icon: GiSagittarius, name: "Sagittarius", date: "31 March - 12 October" },
    { icon: GiCapricorn, name: "Capricorn", date: "31 March - 12 October" },
    { icon: GiAquarius, name: "Aquarius", date: "31 March - 12 October" },
    { icon: GiPisces, name: "Pisces", date: "31 March - 12 October" }
  ];

  const zodiacAll = [...zodiacLeft, ...zodiacRight];

  // Animation variants
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, color: '#f97316' }, // orange-500 color
  };

  const listItemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, color: '#f97316' },
  };

  const iconCircleVariants = {
    initial: { scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
    hover: {
      scale: 1.2,
      boxShadow: '0 0 15px rgba(249, 115, 22, 0.7)', // subtle orange glow
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  const zodiacIconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.1, type: 'spring', stiffness: 100, damping: 15 }
    }),
    hover: { scale: 1.3, color: '#f97316', transition: { duration: 0.3 } }
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-white text-center select-none">
      <h1 className="text-3xl md:text-4xl font-extrabold uppercase mb-2 tracking-wider">
        Choose Your <span className="text-orange-500">Zodiac Sign</span>
      </h1>
      <div className="flex items-center justify-center gap-2 mb-6">
        <hr className="flex-grow border-t border-gray-300 max-w-[150px]" />
        <div className="w-3 h-3 rounded-full bg-orange-500" />
        <hr className="flex-grow border-t border-gray-300 max-w-[150px]" />
      </div>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-sm md:text-base">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat hello Aenean world.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Zodiac List */}
        <motion.div
          className="space-y-6 w-full max-w-xs"
          initial="hidden"
          animate="visible"
        >
          {zodiacLeft.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 text-left cursor-pointer"
              variants={listItemVariants}
              whileHover="hover"
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg"
                variants={iconCircleVariants}
                initial="initial"
                whileHover="hover"
              >
                <item.icon size={30} />
              </motion.div>
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Zodiac Wheel Image + Icons */}
        <div className="relative w-[320px] h-[320px] mx-auto overflow-visible rounded-full">
          {/* Zodiac wheel image placed on top */}
          <img
            src="https://www.webstrot.com/html/horoscope/light_version/images/content/cycle.jpg"
            alt="Zodiac Wheel"
            className="absolute top-[170px] left-[172px] w-[220px] h-[220px] object-contain rounded-full -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            draggable={false}
          />

          {/* Zodiac icons positioned around wheel on outer circle */}
          {zodiacAll.map((item, index) => {
            const total = zodiacAll.length;
            const angle = (360 / total) * index - 90; // Start at top
            const radian = (angle * Math.PI) / 180;

            const radius = 140; // Radius for icons circle
            const center = 140; // Half of container (320/2)

            const x = center + radius * Math.cos(radian);
            const y = center + radius * Math.sin(radian);

            // Colors matching image sectors
            const colors = [
              '#aeced5', '#d9c758', '#c99c63', '#c85f63', '#e68b90', '#c4a3c9',
              '#84b5d2', '#65b8b1', '#f0b25f', '#a7d48d', '#8ac96d', '#b5b14a'
            ];

            return (
              <motion.div
                key={index}
                className="absolute w-16 h-16 border-2 rounded-full text-white flex items-center justify-center cursor-pointer shadow-lg select-none"
                style={{
                  backgroundColor: colors[index % colors.length],
                  top: y,
                  left: x,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10, // below wheel image
                }}
                initial="initial"
                animate="visible"
                custom={index}
                variants={zodiacIconVariants}
                whileHover="hover"
                title={item.name}
              >
                <item.icon size={28} />
              </motion.div>
            );
          })}
        </div>

        {/* Right Zodiac List */}
        <motion.div
          className="space-y-6 w-full max-w-xs"
          initial="hidden"
          animate="visible"
        >
          {zodiacRight.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 text-right flex-row-reverse cursor-pointer"
              variants={listItemVariantsRight}
              whileHover="hover"
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg"
                variants={iconCircleVariants}
                initial="initial"
                whileHover="hover"
              >
                <item.icon size={30} />
              </motion.div>
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeZodac;
