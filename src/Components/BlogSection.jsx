import React, { useState, useEffect } from 'react';
import blogData from './BlogPost'; // Adjust path if needed
import { Link } from 'react-router-dom';

const Card = ({ id, url, header, text, author, likes, comments, tags }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Stagger animation by id/index
    const timeout = setTimeout(() => setVisible(true), id * 100);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div
      className={`
        max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto
        transform transition-all duration-700 ease-in-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        hover:scale-105 hover:shadow-2xl
      `}
    >
      <img
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        src={url}
        alt={header}
        loading="lazy"
      />
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{header}</h1>

        <div className="flex items-center justify-center gap-2 mb-4">
          <hr className="flex-grow border-t border-gray-300 max-w-[120px]" />
          <div className="w-2 h-2 bg-orange-500 rounded-full" />
          <hr className="flex-grow border-t border-gray-300 max-w-[120px]" />
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{text}</p>

        <Link to={`/blog/${id}`}>
          <button className="text-blue-600 cursor-pointer font-semibold hover:underline focus:outline-none">
            Read More ➞
          </button>
        </Link>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-6 border-t pt-4">
          <span>by {author}</span>
          <span>
            {likes} Likes | {comments} Comments
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
          <span>In {tags.join(' - ')}</span>
          <div className="flex space-x-3">
            {/* Social SVG icons */}
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.016 3.676 9.163 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.466h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.016 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184A2.998 2.998 0 0017.686 2H6.314a2.998 2.998 0 00-1.928 1.184C3.985 4.003 3.49 5.82 3.49 8.09v7.82c0 2.27.495 4.087 1.896 4.906A2.998 2.998 0 006.314 22h11.372a2.998 2.998 0 001.928-1.184c1.401-.82 1.896-2.636 1.896-4.906v-7.82c0-2.27-.495-4.087-1.896-4.906zM10 16V8l6 4-6 4z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition-colors">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.43 1.7a9.17 9.17 0 01-2.89 1.1 4.51 4.51 0 00-7.69 4.11A12.77 12.77 0 013 2.16a4.49 4.49 0 001.4 6.03 4.52 4.52 0 01-2.04-.56v.06a4.51 4.51 0 003.62 4.42 4.52 4.52 0 01-2.03.08 4.51 4.51 0 004.2 3.13A9.06 9.06 0 012 19.5a12.72 12.72 0 006.9 2" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8.4 15v-6.9H7.2V18h3.4zm-1.7-8.3a2 2 0 112 0 2 2 0 01-2 0zm8.2 8.3v-4.1a1.6 1.6 0 00-1.6-1.6 1.6 1.6 0 00-1.6 1.6v4.1h-3.4v-6.9h3.4v1a4.4 4.4 0 013.3-1.7 3.9 3.9 0 013.4 2 5 5 0 01-3.1 4.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentPosts = ({ blogs }) => {
  const latestThree = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="w-full lg:w-1/4 bg-white p-6 rounded shadow-md h-fit sticky top-20">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">Recent Posts</h2>
      <ul className="space-y-4">
        {latestThree.map((blog) => (
          <li
            key={blog.id}
            className="flex gap-3 items-start cursor-pointer hover:text-blue-600 transition-colors"
          >
            <Link to={`/blog/${blog.id}`} className="flex items-center gap-3 w-full">
              <img
                src={blog.url}
                alt={blog.header}
                className="w-16 h-16 object-cover rounded shrink-0"
                loading="lazy"
              />
              <div className="text-sm text-gray-800">
                <h3 className="font-medium line-clamp-2">{blog.header}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
          {blogData.map((blog) => (
            <Card key={blog.id} {...blog} />
          ))}
        </div>
        <RecentPosts blogs={blogData} />
      </div>
    </section>
  );
};

export default BlogSection;
