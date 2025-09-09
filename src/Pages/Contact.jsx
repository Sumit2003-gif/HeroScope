import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-dashed divide-x divide-dashed divide-gray-300 rounded-lg overflow-hidden animate-fade-in-up">
        {/* Phone */}
        <div className="flex flex-col items-center text-center px-6 py-10 hover:bg-gray-50 transition duration-300">
          <div className="border-2 border-dashed border-gray-300 rounded-full p-6 mb-4 transition-transform duration-300 hover:scale-105">
            <FaPhoneAlt className="text-orange-500 text-3xl" />
          </div>
          <p className="text-gray-600">+8100-123-13312</p>
          <p className="text-gray-600">+1123-123-44565</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center px-6 py-10 hover:bg-gray-50 transition duration-300">
          <div className="border-2 border-dashed border-gray-300 rounded-full p-6 mb-4 transition-transform duration-300 hover:scale-105">
            <FaEnvelope className="text-orange-500 text-3xl" />
          </div>
          <p className="text-gray-600">horoscope@example.com</p>
          <p className="text-gray-600">Live@example.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-center px-6 py-10 hover:bg-gray-50 transition duration-300">
          <div className="border-2 border-dashed border-gray-300 rounded-full p-6 mb-4 transition-transform duration-300 hover:scale-105">
            <FaMapMarkerAlt className="text-orange-500 text-3xl" />
          </div>
          <p className="text-gray-600">123, A Street B Block Dewas,</p>
          <p className="text-gray-600">M.P. #455001</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-8 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-fade-in">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition md:col-span-2 w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] animate-fade-in">
        <iframe
          title="Google Map"
          className="w-full h-full rounded-lg shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.258613957337!2d76.05901327519799!3d22.063853079814232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396205d87dfb9c1f%3A0x423061ff5806b6e1!2sDewas%2C%20Madhya%20Pradesh%20455001!5e0!3m2!1sen!2sin!4v1693835418461!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
