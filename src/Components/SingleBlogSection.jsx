import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "./BlogPost";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(`blogMessages-${id}`)) || [];
    setMessages(storedMessages);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString(),
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem(`blogMessages-${id}`, JSON.stringify(updatedMessages));

    setName("");
    setEmail("");
    setMessage("");
  };

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Blog not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          Go back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      {/* Back Button */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-6"
      >
        <Link
          to="/blog"
          className="inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm font-medium"
        >
          ← Back to Blog
        </Link>
      </motion.div>

      {/* Featured Image */}
      <motion.img
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        src={blog.url}
        alt={blog.header}
        className="w-full h-[350px] sm:h-[450px] object-cover rounded-lg shadow-lg mb-10"
      />

      {/* Title & Meta */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{blog.header}</h1>
        <div className="text-sm text-gray-500 mb-8">
          By <span className="font-semibold">{blog.author}</span> •{" "}
          {new Date(blog.date).toLocaleDateString()} • {blog.likes} Likes • {blog.comments} Comments
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-8 flex flex-wrap gap-3"
      >
        {blog.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200 transition-colors"
          >
            #{tag}
          </span>
        ))}
      </motion.div>

      {/* Blog Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="prose prose-lg max-w-none text-gray-800 mb-16"
      >
        <p>{blog.text}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim, mauris non
          cursus fringilla, justo velit laoreet nisi, in imperdiet est tellus non ipsum.
        </p>
        <p>
          Suspendisse potenti. In ut justo vitae magna efficitur egestas. Sed feugiat, sem ut luctus
          convallis, turpis sem tincidunt est, vitae scelerisque lorem odio nec felis.
        </p>
      </motion.div>

      {/* Social Share */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="border-t pt-6 flex justify-between items-center text-sm text-gray-500 mb-12"
      >
        <span>In {blog.tags.join(", ")}</span>
        <div className="flex space-x-5 text-gray-600 text-lg">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </motion.div>

      {/* Leave a Message */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-6">💬 Leave a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Display Messages */}
      {messages.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 max-w-2xl mx-auto space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">📬 Recent Messages</h3>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="border rounded-md p-4 bg-gray-50 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800">{msg.name}</span>
                <span className="text-xs text-gray-400">
                  {new Date(msg.date).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-700 text-sm whitespace-pre-line">{msg.message}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SingleBlog;
