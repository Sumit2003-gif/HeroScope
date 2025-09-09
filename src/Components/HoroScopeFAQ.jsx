import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Roboto Font use for this site',
    answer:
      'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.',
  },
  {
    question: 'Cryptocurrency - Who Are Involved With It ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    question: 'Risks & Rewards Of Investing In Bitcoin ?',
    answer: 'This is a short answer for Bitcoin investment risks and rewards.',
  },
  {
    question: 'Risks & Rewards Of Investing In Bitcoin ?',
    answer: 'Duplicate just to match the design, can be replaced.',
  },
];

const containerVariants = {
  open: { maxHeight: 384, opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  closed: { maxHeight: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const textVariants = {
  open: { opacity: 1, y: 0, transition: { delay: 0.1 } },
  closed: { opacity: 0, y: -10 },
};

const HoroscopeFaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Only toggle when clicking the icon
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2">
          OUR HOROSCOPE PROGRESS
        </h2>
        <div className="w-4 h-1 bg-orange-500 mb-6"></div>
        <img
          src="https://www.webstrot.com/html/horoscope/light_version/images/content/about/pgress_img.jpg"
          alt="Horoscope Progress"
          className="rounded shadow w-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2">
          QUESTIONS (FAQ’S)
        </h2>
        <div className="w-4 h-1 bg-orange-500 mb-6"></div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className="border border-gray-300 rounded-md overflow-hidden">
                <div
                  className={`w-full flex items-center justify-between p-4 font-semibold ${
                    isActive ? 'bg-orange-500 text-white' : 'bg-white text-black'
                  }`}
                >
                  {/* Question text - NOT clickable */}
                  <span>{faq.question}</span>

                  {/* Toggle icon - ONLY this toggles */}
                  <motion.button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isActive}
                    aria-controls={`faq-content-${index}`}
                    className="text-2xl font-bold select-none cursor-pointer focus:outline-none"
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    type="button"
                  >
                    +
                  </motion.button>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      id={`faq-content-${index}`}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={containerVariants}
                      className="overflow-hidden bg-gray-50 border-t border-gray-200 px-4"
                    >
                      <motion.p
                        variants={textVariants}
                        className="py-4 text-gray-600 text-sm"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HoroscopeFaqSection;
