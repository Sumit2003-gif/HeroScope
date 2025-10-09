import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Card = ({ url, header, text, date }) => {
  const [day, month] = date.split(' ');

  return (
    <motion.div
      variants={fadeUp}
      className="group relative max-w-sm w-full bg-white border border-gray-200 shadow-lg overflow-hidden rounded-md hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img src={url} alt="card-img" className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105" />
        
        {/* Hover Date Box */}
        <div className="absolute bottom-4 right-4 bg-white text-center rounded shadow-md w-12 h-14 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
          <div className="text-lg font-bold text-gray-800 pt-1">{day}</div>
          <div className="text-xs text-gray-500">{month}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 border-b border-dashed">
        <h1 className="text-lg font-bold text-gray-900 mb-2 capitalize transition-colors duration-300 group-hover:text-orange-500">
          {header}
        </h1>
        <p className="text-gray-600 text-sm mb-4">{text}</p>
        <Link to="/blog">
        <button className="text-blue-500 cursor-pointer font-semibold text-sm hover:underline transition">
          READ MORE ➞
        </button>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 p-4 border-t border-gray-200">
        <span>by - Admin</span>
        <span>1244 Likes</span>
        <span>04 Comm.</span>
      </div>
    </motion.div>
  );
};

const LatestNews = () => {
  const CardData = [
    {
      url: 'https://www.webstrot.com/html/horoscope/light_version/images/content/news_img1.jpg',
      header: 'Proin gravida nibh vel velit auctor aliquet.',
      text: 'Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet.',
      date: '25 DEC',
    },
    {
      url: 'https://www.webstrot.com/html/horoscope/light_version/images/content/news_img2.jpg',
      header: 'Proin gravida nibh vel velit auctor aliquet.',
      text: 'Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet.',
      date: '09 AUG',
    },
    {
      url: 'https://www.webstrot.com/html/horoscope/light_version/images/content/news_img3.jpg',
      header: 'Proin gravida nibh vel velit auctor aliquet.',
      text: 'Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet.',
      date: '29 JAN',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-gray-800">
          LATEST <span className="text-orange-500">NEWS</span>
        </motion.h1>

        {/* Divider */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 my-6">
          <hr className="flex-grow border-t border-gray-300 max-w-[120px]" />
          <div className="w-2 h-2 bg-orange-500 rounded-full" />
          <hr className="flex-grow border-t border-gray-300 max-w-[120px]" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
          auctor, nisi elit consequat hello Aenean world.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
{CardData.map((item, index) => (
  <div key={index} className="flex justify-center sm:justify-start">
    <Card {...item} />
  </div>
))}
      </motion.div>
    </section>
  );
};

export default LatestNews;
