import React from 'react';
import { motion } from 'framer-motion';

const AboutTeam = () => {
  const handleViewProfile = () => {
    alert('View profile clicked!');
  };

  const handleCallNow = () => {
    alert('Call now clicked!');
  };

  const CardDetail = [
    {
      image:
        'https://www.webstrot.com/html/horoscope/light_version/images/content/about/astro_img1.jpg',
      name: 'Rashmi Doe',
      role: 'Magic ball reader',
      charges: '$5 / Min.',
      onViewProfile: handleViewProfile,
      onCallNow: handleCallNow,
    },
    {
      image:
        'https://www.webstrot.com/html/horoscope/light_version/images/content/about/astro_img2.jpg',
      name: 'Rashmi Doe',
      role: 'Magic ball reader',
      charges: '$5 / Min.',
      onViewProfile: handleViewProfile,
      onCallNow: handleCallNow,
    },
    {
      image:
        'https://www.webstrot.com/html/horoscope/light_version/images/content/about/astro_img3.jpg',
      name: 'Rashmi Doe',
      role: 'Magic ball reader',
      charges: '$5 / Min.',
      onViewProfile: handleViewProfile,
      onCallNow: handleCallNow,
    },
    {
      image:
        'https://www.webstrot.com/html/horoscope/light_version/images/content/about/astro_img4.jpg',
      name: 'Rashmi Doe',
      role: 'Magic ball reader',
      charges: '$5 / Min.',
      onViewProfile: handleViewProfile,
      onCallNow: handleCallNow,
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(255, 165, 0, 0.3)' },
  };

  // Container variants for staggering children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const Cards = ({ image, name, role, charges, onViewProfile, onCallNow }) => {
    return (
      <motion.div
        className="bg-white rounded-lg border border-gray-200 overflow-hidden font-sans shadow-md cursor-pointer flex flex-col"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.3 }}
        tabIndex={0}
        role="button"
        aria-pressed="false"
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full object-cover h-56 sm:h-64 md:h-48 lg:h-56"
          loading="lazy"
        />
        <div className="p-5 text-center flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
          <p className="text-gray-500 mb-3">{role}</p>
          <p className="mb-6 text-gray-700 font-semibold">
            Charges: <span className="text-orange-500">{charges}</span>
          </p>
          <div className="flex border-t border-gray-200 text-gray-600 text-sm mt-auto">
            <button
              type="button"
              onClick={onViewProfile}
              className="flex-grow py-3 cursor-pointer hover:bg-gray-100 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            >
              <span role="img" aria-label="view profile">
                👁️
              </span>
              <span>View Profile</span>
            </button>
            <button
              type="button"
              onClick={onCallNow}
              className="flex-grow cursor-pointerhOME py-3 border-l border-gray-200 hover:bg-gray-100 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            >
              <span role="img" aria-label="call now">
                📞
              </span>
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase text-gray-900">
        Astrology Team
      </h1>
      <div className="flex items-center justify-center gap-2 mb-6">
        <hr className="flex-grow border-t border-gray-300 max-w-[120px]" />
        <div className="w-2 h-2 bg-orange-500 rounded-full" />
        <hr className="flex-grow border-t border-gray-300 max-w-[120px]" />
      </div>
      <p className="text-gray-600 max-w-xl mx-auto mb-14 text-base md:text-lg text-center leading-relaxed">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
        auctor, nisi elit consequat hello Aenean world.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {CardDetail.map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            name={item.name}
            role={item.role}
            charges={item.charges}
            onViewProfile={item.onViewProfile}
            onCallNow={item.onCallNow}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default AboutTeam;
