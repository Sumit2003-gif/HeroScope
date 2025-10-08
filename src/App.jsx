import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import ExpertSection from './Components/ExpertSection';
import Blog from './Pages/Blog';
import SingleBlog from './Components/SingleBlogSection';
import Contact from './Pages/Contact';
import ScrollToTop from './Components/Scrollztop';

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <section>
        <Navbar />
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <ExpertSection />
      <Footer />
    </div>
  );
};

export default App;
