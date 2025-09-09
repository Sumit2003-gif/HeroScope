import React from 'react';
import { Link } from 'react-router-dom';

import HomeAbout from '../Components/HomeAbout';
import StatsSection from '../Components/StatsSection';
import HoroscopeFaqSection from '../Components/HoroScopeFAQ';
import PlayAstrologerSection from '../Components/VideoSection';
import HomeService from '../Components/HomeService';
import AboutTeam from '../Components/AboutTeam';

const About = () => {
  return (
    <div className="pt-[80px]">
      {/* Top Banner Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.webstrot.com/html/horoscope/light_version/images/content/advert_bg.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-20 flex flex-col sm:flex-row justify-between items-center text-white text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-0">About Us</h1>
          <p className="text-sm">
            <Link to="/" className="hover:underline text-orange-400">Home</Link> &nbsp; &lt; &nbsp; About Us
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <section>
        <HomeAbout />
      </section>
      <section>
        <StatsSection />
      </section>
      <section>
        <HoroscopeFaqSection />
      </section>
      <section>
        <PlayAstrologerSection />
      </section>
      <section>
        <HomeService />
      </section>
      <section>
        <AboutTeam />
      </section>
    </div>
  );
};

export default About;
