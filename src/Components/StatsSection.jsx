import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return; // Only start counting when visible

    let start = 0;
    const end = parseInt(number);
    if (start === end) return;

    const duration = 1500; // total animation duration in ms
    const incrementTime = 30; // interval time in ms
    const step = Math.ceil((end / duration) * incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {/* Outer Circle */}
      <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mx-auto mb-4">
        {/* Inner Circle */}
        <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
          <span className="text-2xl font-bold text-orange-500">
            {count}+
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="text-gray-800 text-base font-medium whitespace-pre-line">
        {label}
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { number: 25, label: 'Trusted by\nMillion Clients' },
    { number: 73, label: 'Years of\nExperience' },
    { number: 45, label: 'Types of\nHoroscopes' },
    { number: 99, label: 'Qualified\nAstrologers' },
    { number: 89, label: 'Success\nHoroscope' },
  ];

  return (
    <section className="bg-white py-16 px-4 border-t border-gray-200">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            label={stat.label}
            delay={index * 0.2}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;
