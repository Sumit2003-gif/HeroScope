import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-800 pb-10">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <img
              src="https://www.webstrot.com/html/horoscope/light_version/images/content/footer_logo.png"
              alt="Horoscope Logo"
              className="w-72 h-20"
            />
          </div>
          <p className="max-w-xs mx-auto md:mx-0 text-gray-400 mb-4">
            Donec id elit non mi porta gravida at eget metus. Donec id elit non Vestibulum id ligula porta felis euism od semper. Nulla vitae elit libero
          </p>

          {/* Social Icons (Moved Here) */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 text-gray-400 hover:text-white transition"
                aria-label={`Follow us on ${Icon.displayName || Icon.name}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold mb-4">
            NEED <span className="text-orange-500">OUR HELP</span>
          </h3>
          <p className="mb-6 max-w-sm mx-auto md:mx-0 text-gray-400">
            Need help with designing your brand new website or you have any idea and thinking of getting it’s branding done then get a FREE quote today.
          </p>
          <Link
          to='/contact'>
          <button className="bg-orange-500 cursor-pointer text-white rounded-full px-8 py-3 font-semibold hover:bg-orange-600 transition">
            FREE QUOTE
          </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold mb-4">
            CONTACT <span className="text-orange-500">US TODAY</span>
          </h3>
          <p className="mb-6 max-w-sm mx-auto md:mx-0">
            Call Us <span className="font-bold text-orange-500">666 777 888</span> OR <span className="font-bold text-orange-500">111 222 333</span><br />
            Send an Email on <a href="mailto:contact@example.com" className="text-orange-500 underline">contact@example.com</a><br />
            Visit Us 123 Fake Street- London 12358<br />
            United Kingdom
          </p>
          <form
            className="max-w-sm mx-auto md:mx-0 flex items-center border border-gray-700 rounded px-3 py-2"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email Address..."
              className="bg-transparent focus:outline-none flex-grow text-gray-300 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="text-orange-500 ml-3 hover:text-orange-600 transition"
              aria-label="Subscribe"
            >
              <FaEnvelope size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-600 text-sm">
        © Copyright 2022 by Horoscope. All rights Reserved - Design By Webstrot
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 bg-orange-500 p-4 rounded-full shadow-lg text-white hover:bg-orange-600 transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
