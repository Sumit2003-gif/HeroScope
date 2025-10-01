import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserGraduate,
  FaGift,
  FaBaby,
  FaRing,
} from 'react-icons/fa';

// Single Card Component with enhanced animations
const Card = ({ icon, header, text }) => {
  return (
    <motion.div
      className="p-6 text-center space-y-4 border-2 border-dotted rounded-lg bg-white shadow-md group cursor-pointer transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        scale: [1, 1.05, 1.03], // subtle pulse effect
        boxShadow: '0 8px 20px rgba(255, 165, 0, 0.4)', // glowing shadow
      }}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      {/* Icon Circle */}
      <div className="flex items-center justify-center">
        <div className="rounded-full border-2 border-dotted p-6">
          <div
            className="rounded-full border-2 border-dotted p-4 text-orange-500 bg-white transition-colors duration-300 group-hover:bg-orange-100"
          >
            {icon}
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-xl font-bold uppercase text-gray-900">{header}</h1>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{text}</p>

      {/* Read More */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="relative text-orange-500 cursor-pointer font-semibold flex items-center gap-1 mx-auto hover:underline focus:outline-none"
        aria-label={`Read more about ${header}`}
      >
        Read More 
        <span className="text-orange-500">➞</span>
        {/* Animated underline */}
        <span
          className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"
          style={{ pointerEvents: 'none' }}
        />
      </button>
    </motion.div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HomeService = () => {
  const data = [
    {
      icon: <FaUserGraduate size={28} />,
      header: 'Career',
      text: 'Proin gravida nibh vel velit auctor aliquet. Aenean.',
    },
    {
      icon: <FaRing size={28} />,
      header: 'Marriage',
      text: 'Proin gravida nibh vel velit auctor aliquet. Aenean.',
    },
    {
      icon: <FaBaby size={28} />,
      header: 'Worship Lesson',
      text: 'Proin gravida nibh vel velit auctor aliquet. Aenean.',
    },
    {
      icon: <FaBaby size={28} />,
      header: 'Pregnancy',
      text: 'Proin gravida nibh vel velit auctor aliquet. Aenean.',
    },
    {
      icon: <FaRing size={28} />,
      header: 'Manglik Dosha',
      text: 'Proin gravida nibh vel velit auctor aliquet. Aenean.',
    },
    {
      icon: <FaGift size={28} />,
      header: 'Kundli Dosha',
      text: 'Proin gravida nibh vel velit auctor aliquet. Aenean.',
    },
    {
      icon: <FaGift size={28} />,
      header: 'Festivals',
      text: 'Proin gravida nibh vel velit auctor aliquet. Aenean.',
    },
    {
      icon: <FaBaby size={28} />,
      header: 'Name Analysis',
      text: 'Proin gravida nibh vel velit auctor aliquet. Aenean.',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 bg-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold uppercase mb-2 text-gray-900">
        Our <span className="text-orange-500">Services</span>
      </h1>

      {/* Divider */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <hr className="flex-grow border-t border-gray-300 max-w-[150px]" />
        <div className="w-2 h-2 bg-orange-500 rounded-full" />
        <hr className="flex-grow border-t border-gray-300 max-w-[150px]" />
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed text-sm sm:text-base">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
        quis bibendum auctor, nisi elit consequat hello Aenean world.
      </p>

      
      {/* Cards Grid with stagger animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {data.map((item, index) => (
          <Card key={index} icon={item.icon} header={item.header} text={item.text} />
        ))}
      </motion.div>
    </section>
  );
};

export default HomeService;
