import React from 'react';

const experts = [
  {
    name: 'Jane Doe',
    image: 'https://www.webstrot.com/html/horoscope/light_version/images/content/online2.jpg',
    online: true,
  },
  {
    name: 'John Smith',
    image: 'https://www.webstrot.com/html/horoscope/light_version/images/content/online3.jpg',
    online: false,
  },
  {
    name: 'Anna White',
    image: 'https://www.webstrot.com/html/horoscope/light_version/images/content/online4.jpg',
    online: true,
  },
  {
    name: 'David Stone',
    image: 'https://www.webstrot.com/html/horoscope/light_version/images/content/online1.jpg',
    online: false,
  },
];

const ExpertSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="mb-12 md:mb-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            SPEAK TO <span className="font-bold">OUR EXPERT</span>!
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum.
          </p>
        </div>

        {/* Expert Avatars */}
        <div className="flex gap-6 md:w-1/2 justify-center md:justify-end">
          {experts.map((expert, index) => (
            <div key={index} className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-[70%] w-5 h-5 rounded-full border-4 ${
                  expert.online ? 'bg-green-500 border-white' : 'bg-gray-300 border-white'
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
