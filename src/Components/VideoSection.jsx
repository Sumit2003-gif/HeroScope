import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PlayAstrologerSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Animation variants for modal
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <>
      <section
        className="relative min-h-[80vh] flex flex-col items-center justify-center text-center text-white cursor-pointer px-4 sm:px-8"
        style={{
          backgroundImage:
            "url('https://www.webstrot.com/html/horoscope/light_version/images/content/about/video_img.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={openModal}
        aria-label="Open astrologer tips video"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') openModal();
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          {/* Play button */}
          <button
            className="w-20 h-20 rounded-full cursor-pointer bg-opacity-30 hover:bg-opacity-60 transition-colors duration-300 flex items-center justify-center mx-auto mb-6 shadow-lg"
            aria-label="Play video"
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
          >
             <img src='https://www.webstrot.com/html/horoscope/light_version/images/content/about/play_icon.png'/>
          </button>

          {/* Text */}
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Play Astrologer Tips{' '}
            <span className="text-orange-500">And Better Your Life</span>
          </h2>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
            aria-labelledby="video-title"
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-lg shadow-lg"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-orange-500 focus:outline-none"
                onClick={closeModal}
                aria-label="Close video"
              >
                &times;
              </button>

              {/* Responsive video container */}
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-b-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Astrologer Tips Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlayAstrologerSection;
