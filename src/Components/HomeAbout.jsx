import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomeAbout = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white text-center">
      {/* Heading Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-6"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide"
        >
          About <span className="text-orange-500">Horoscope</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-2 my-4"
        >
          <hr className="flex-grow border-t border-gray-300 max-w-[150px]" />
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <hr className="flex-grow border-t border-gray-300 max-w-[150px]" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat hello Aenean world.
        </motion.p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-12"
      >
        {/* Left: Image */}
        <motion.div
          variants={imageAnim}
          className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="https://www.webstrot.com/html/horoscope/light_version/images/content/about_img.jpg"
            alt="About Horoscope"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right: Text content */}
        <motion.div variants={containerVariants} className="w-full md:w-1/2 text-left space-y-6">
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide"
          >
            Horoscope Reveals The Will of God
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
            velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
            consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
            condimentum sit amet a augue.
          </motion.p>

          {/* Contact Info */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-orange-500 text-3xl font-bold mb-6 select-text">+1800-123-123</p>
          </motion.div>

          {/* Button */}
          
          <MotionLink
          to="/about"
            variants={fadeUp}
            whileHover={{ scale: 1.05, backgroundColor: "#0284c7" }}
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300"
          >
            READ MORE
          </MotionLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
