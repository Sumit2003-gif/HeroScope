import React from 'react'
import { Link } from 'react-router-dom'
import BlogSection from '../Components/BlogSection'

const Blog = () => {
  return (
    <div>
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-0">Blog </h1>
          <p className="text-sm">
            <Link to="/" className="hover:underline text-orange-400">Home</Link> &nbsp; &lt; &nbsp; About Us
          </p>
        </div>
      </section>

    <section>
      <BlogSection/>
    </section>

    </div>
  )
}

export default Blog
 