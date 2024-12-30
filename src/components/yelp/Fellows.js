import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { fellowsData } from '../../data/fellows-data';
import YelpLogo from '../../assets/images/YELP-Logo.svg';

const Fellows = () => {
  const [activeTab, setActiveTab] = useState('2024');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Hero Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <StaticImage 
            src="../../assets/images/huduma-hero.jpg"
            alt="YELP Fellows Hero"
            className="absolute inset-0 w-full h-full"
            objectPosition="center 30%"
            placeholder="blurred"
            layout="fullWidth"
          />
          {/* Left side gradient */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0B9A9E]/90 to-transparent" />
          {/* Right side gradient */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0B9A9E]/90 to-transparent" />
          {/* Subtle overall overlay */}
          <div className="absolute inset-0 bg-black/10" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 pattern-bg opacity-20" />
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-center drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet Our Fellows
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white max-w-3xl text-center drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the exceptional young leaders who are part of our fellowship program, driving innovation and positive change across East Africa
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B9A9E] mb-6 font-playfair">
              Shaping Africa's Future Leaders
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our fellows represent the brightest minds and most passionate leaders from across East Africa. Through the YELP fellowship, they are equipped with the skills, networks, and resources needed to drive meaningful change in their communities and beyond.
            </p>
          </motion.div>

          {/* Cohort Tabs */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {Object.keys(fellowsData).reverse().map((year) => (
              <motion.button
                key={year}
                onClick={() => setActiveTab(year)}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  activeTab === year
                    ? 'bg-[#0B9A9E] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Class of {year}
              </motion.button>
            ))}
          </div>

          {/* Fellows Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {fellowsData[activeTab].map((fellow) => (
                <motion.div
                  key={fellow.name}
                  variants={itemVariants}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <img
                      src={fellow.image}
                      alt={fellow.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#0B9A9E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0B9A9E] transition-colors duration-300">
                      {fellow.name}
                    </h3>
                    <p className="text-[#0B9A9E] font-medium opacity-75">
                      Class of {activeTab}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Fellows; 