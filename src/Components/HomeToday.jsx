import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Today Horoscope',
    heading: 'Believe in things that can fortunately change your life',
    description:
      "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    background:
      'https://www.webstrot.com/html/horoscope/light_version/images/content/news_slider_bg3.jpg'
  },
  {
    title: 'Today Horoscope',
    heading: 'Believe in things that can fortunately change your life',
    description:
      "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    background:
      'https://www.webstrot.com/html/horoscope/light_version/images/content/news_slider_bg3.jpg'
  },
  {
    title: 'Today Horoscope',
    heading: 'Believe in things that can fortunately change your life',
    description:
      "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    background:
      'https://www.webstrot.com/html/horoscope/light_version/images/content/news_slider_bg3.jpg'
  },
];

const slideVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.8, ease: 'easeIn' } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' }
  })
};

const HomeToday = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const active = slides[current];

  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-5xl w-full text-center rounded-lg overflow-hidden shadow-2xl min-h-[80vh] md:min-h-[90vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${active.background})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col items-center justify-center text-white py-16 px-6 md:px-12 h-full">
              <motion.h2 variants={textVariants.hidden} animate={textVariants.visible(0.2)} className="text-lg md:text-xl font-semibold italic mb-2">
                {active.title}
              </motion.h2>
              <motion.h1 variants={textVariants.hidden} animate={textVariants.visible(0.4)} className="text-3xl md:text-4xl font-bold uppercase leading-snug mb-6">
                {active.heading}
              </motion.h1>
              <motion.p variants={textVariants.hidden} animate={textVariants.visible(0.6)} className="text-gray-300 mb-8 max-w-2xl text-sm md:text-base">
                {active.description}
              </motion.p>
              <motion.div variants={textVariants.hidden} animate={textVariants.visible(0.8)}>
                <Link to="/contact">
                  <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md">
                    CONTACT US
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-2 mt-6 pb-6 relative">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-orange-500 scale-110' : 'bg-gray-500'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeToday;
