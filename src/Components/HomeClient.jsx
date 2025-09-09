import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    name: 'JOAN DOE',
    role: 'Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
    name: 'JOHN SMITH',
    role: 'Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HomeClient = () => (
  <section className="py-20 px-4 md:px-8 bg-white text-center">
    {/* Heading */}
    <motion.h1
      className="text-3xl md:text-4xl font-extrabold uppercase mb-4 tracking-tight"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      What Clients <span className="text-orange-500">Are Saying</span>
    </motion.h1>

    {/* Divider */}
    <motion.div
      className="flex items-center justify-center gap-2 mb-6"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <hr className="flex-grow border-t border-gray-300 max-w-[120px]" />
      <div className="w-2 h-2 bg-orange-500 rounded-full" />
      <hr className="flex-grow border-t border-gray-300 max-w-[120px]" />
    </motion.div>

    {/* Subtitle */}
    <motion.p
      className="text-gray-500 max-w-xl mx-auto mb-14 text-base md:text-lg leading-relaxed"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
      nisi elit consequat hello Aenean world.
    </motion.p>

    {/* Swiper Slider */}
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      pagination={{ clickable: true, el: '.client-pagination' }}
      className="max-w-3xl mx-auto"
    >
      {testimonials.map((item, idx) => (
        <SwiperSlide key={idx}>
          <motion.div
            className="relative flex flex-col items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Testimonial Card */}
            <div className="relative bg-white border border-dashed border-gray-300 px-6 py-10 rounded-xl shadow-lg w-full text-center">
              <div className="text-orange-500 text-4xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">{item.text}</p>

              {/* Arrow */}
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white" />
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center mt-12">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-white -mt-10 z-10">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 bg-white border border-gray-200 rounded-full px-8 py-2 shadow-sm">
                <h3 className="text-md font-semibold uppercase text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Pagination Dots */}
    <div className="client-pagination mt-10 flex justify-center gap-2" />
  </section>
);

export default HomeClient;
