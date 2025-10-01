import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section
        className="relative mt-[80px] bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.webstrot.com/html/horoscope/light_version/images/content/advert_bg.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-20 flex flex-col sm:flex-row justify-between items-center text-white text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-0">Contact Us</h1>
          <p className="text-sm">
            <Link to="/" className="hover:underline text-orange-400">Home</Link> &nbsp; &lt; &nbsp; Contact Us
          </p>
        </div>
      </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    localStorage.setItem('contactMessages', JSON.stringify([...storedMessages, formData]));

    alert('Your message has been submitted!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <ContactHero />
      
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhoneAlt className="text-orange-500 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 mb-1">+8100-123-13312</p>
            <p className="text-gray-600">+1123-123-44565</p>
          </motion.div>

          {/* Email */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-orange-500 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 mb-1">horoscope@example.com</p>
            <p className="text-gray-600">Live@example.com</p>
          </motion.div>

          {/* Address */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600 mb-1">123, A Street B Block Dewas,</p>
            <p className="text-gray-600">M.P. #455001</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Send Us a Message</h2>
          <p className="text-gray-600 text-center mb-8">Have any questions? We'd love to hear from you.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-8 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Google Map */}
        <motion.div 
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.258613957337!2d76.05901327519799!3d22.063853079814232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396205d87dfb9c1f%3A0x423061ff5806b6e1!2sDewas%2C%20Madhya%20Pradesh%20455001!5e0!3m2!1sen!2sin!4v1693835418461!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </>
  );
};

export default ContactSection;