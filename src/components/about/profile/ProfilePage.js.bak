import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const BRAND_COLORS = {
  teal: '#00babc',
  orange: '#f89420', 
  gray: '#545456',
  burgundy: '#9a1a2f'
};

const Breadcrumbs = ({ data }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="bg-white border-b border-gray-100"
  >
    <div className="max-w-4xl mx-auto px-4 py-3"> {/* Match content width */}
      <nav className="flex items-center space-x-2 text-sm">
        <Link 
          to="/" 
          className="text-gray-500 hover:text-[#00babc] transition-colors duration-200"
        >
          Home
        </Link>
        <FiChevronRight className="text-gray-400" />
        <Link 
          to="/about" 
          className="text-gray-500 hover:text-[#00babc] transition-colors duration-200"
        >
          About
        </Link>
        <FiChevronRight className="text-gray-400" />
        <Link 
          to="/about/team" 
          className="text-gray-500 hover:text-[#00babc] transition-colors duration-200"
        >
          Team
        </Link>
        <FiChevronRight className="text-gray-400" />
        <span className="text-[#00babc] font-medium">{data.name}</span>
      </nav>
    </div>
  </motion.div>
);

const ProfilePage = ({ data }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {/* Hero Section */}
          <div className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
            <motion.div 
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="relative h-full w-full">
                <img 
                  src={data.image} 
                  alt={data.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Content overlay */}
            <motion.div 
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-0 left-0 right-0 p-8"
            >
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  {data.name}
                </h1>
                <p className="text-xl text-gray-200">
                  {data.subtitle}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Breadcrumbs */}
          <motion.div
            key="breadcrumbs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Breadcrumbs data={data} />
          </motion.div>

          {/* Content Section */}
          <motion.section 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 px-4 bg-white"
          >
            <div className="max-w-4xl mx-auto">
              {data.bio.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-6 text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Social Links */}
              {data.socialLinks && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 flex gap-4"
                >
                  {data.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 hover:bg-[#00babc] text-gray-600 hover:text-white transition-all duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.section>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;