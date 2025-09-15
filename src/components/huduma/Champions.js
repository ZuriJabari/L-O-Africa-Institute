import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImage from '../../assets/images/huduma-hero.jpg';
const { championsData } = require('../../data/champions-data');

const Champions = () => {
  const [activeTab, setActiveTab] = useState('2024');

  const tabVariants = {
    inactive: { opacity: 0.6 },
    active: { opacity: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      <div className="relative h-[56vh] overflow-hidden">
        <img
          src={HeroImage}
          alt="Huduma Champions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-800/60 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Huduma Champions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Meet our exceptional cohorts of public service innovators who are transforming Uganda's public sector
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Champions</h2>
          <p className="text-lg text-gray-600">
            Our champions are dedicated public servants who have demonstrated exceptional leadership and innovation in their respective fields. Through the Huduma fellowship, they are driving positive change and transformation in Uganda's public sector.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
          {Object.keys(championsData).map((year) => (
            <motion.button
              key={year}
              onClick={() => setActiveTab(year)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
                activeTab === year
                  ? 'bg-teal-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              variants={tabVariants}
              animate={activeTab === year ? 'active' : 'inactive'}
            >
              Class of {year}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
          >
            {championsData[activeTab].map((champion, index) => (
              <motion.div
                key={champion.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={champion.image}
                    alt={champion.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 truncate">
                    {champion.name}
                  </h3>
                  <p className="text-xs text-teal-700 font-medium mb-1 truncate">{champion.role}</p>
                  <p className="text-xs text-gray-600 truncate">{champion.organization}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Champions; 