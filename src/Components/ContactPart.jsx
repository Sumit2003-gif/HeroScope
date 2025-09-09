import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const ContactPart = () => {
  return (
    <>
    <div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase">
        About <span className="text-orange-500">Horoscope</span>
      </h1>
     <div className="flex items-center justify-center gap-2 my-4">
  <hr className="flex-grow border-t border-gray-300 max-w-[150px]" />
  <div className="w-2 h-2 bg-orange-500" />
  <hr className="flex-grow border-t border-gray-300 max-w-[150px]" />
</div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
        nisi elit consequat hello Aenean world.
      </p>
    </div>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-dashed divide-x divide-dashed divide-gray-300">
        {/* Phone */}
        <div className="flex flex-col items-center text-center px-6 py-10">
          <div className="border-2 border-dashed border-gray-300 rounded-full p-6 mb-4">
            <FaPhoneAlt className="text-orange-500 text-3xl" />
          </div>
          <p className="text-gray-600">+8100-123-13312</p>
          <p className="text-gray-600">+1123-123-44565</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center px-6 py-10">
          <div className="border-2 border-dashed border-gray-300 rounded-full p-6 mb-4">
            <FaEnvelope className="text-orange-500 text-3xl" />
          </div>
          <p className="text-gray-600">horoscope@example.com</p>
          <p className="text-gray-600">Live@example.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-center px-6 py-10">
          <div className="border-2 border-dashed border-gray-300 rounded-full p-6 mb-4">
            <FaMapMarkerAlt className="text-orange-500 text-3xl" />
          </div>
          <p className="text-gray-600">123, A Street B Block Dewas,</p>
          <p className="text-gray-600">M.P. #455001</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactPart
