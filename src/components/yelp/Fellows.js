import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { fellowsData } from '../../data/fellows-data';
import YelpLogo from '../../assets/images/YELP-Logo.svg';
import YelpHero from '../../assets/images/huduma-hero.jpg';

// Helper function to get image path
const getImagePath = (imageName) => {
  if (!imageName) return '/images/default-fellow.jpg';
  return `/images/fellows/${imageName}.jpg`;
};

const Fellows = () => {
  const [selectedYear, setSelectedYear] = useState('all');

  const years = Object.keys(fellowsData).sort((a, b) => b - a);
  const allFellows = years.reduce((acc, year) => [...acc, ...fellowsData[year]], []);
  const displayedFellows = selectedYear === 'all' ? allFellows : fellowsData[selectedYear];

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

  // Year section component
  const YearSection = ({ year, fellows }) => (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Class of {year}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fellows.map((fellow, index) => (
          <motion.div
            key={fellow.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
          >
            <Link to={`/yelp/fellows/${fellow.slug}`} className="block">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={getImagePath(fellow.image)}
                  alt={fellow.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    if (e.target.src.endsWith('.jpg')) {
                      e.target.src = e.target.src.replace('.jpg', '.png');
                    } else if (e.target.src.endsWith('.png')) {
                      e.target.src = e.target.src.replace('.png', '.webp');
                    } else if (e.target.src.endsWith('.webp')) {
                      e.target.src = '/images/fellows/default-fellow.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{fellow.name}</h3>
                <p className="text-sm text-[#0B9A9E] font-medium mb-1">{fellow.role}</p>
                <p className="text-sm text-gray-600">{fellow.organization}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${YelpHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
          
          {/* Accent color overlay */}
          <div className="absolute inset-0 bg-[#0B9A9E] mix-blend-color opacity-15" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-3 py-1.5 mb-6 border border-[#0B9A9E] rounded-full"
              >
                <span className="block w-2 h-2 rounded-full bg-[#0B9A9E] mr-2" />
                <span className="text-sm text-[#0B9A9E] font-medium tracking-wide uppercase">Our Community</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-playfair"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Meet Our Fellows
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover the exceptional young leaders who are part of our fellowship program, driving innovation and positive change across East Africa
              </motion.p>
            </div>
          </div>
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

          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 justify-center">
              <span className="text-gray-600 font-medium">Filter by year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>Class of {year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Fellows Grid */}
          <div className="mt-12">
            {selectedYear === 'all' ? (
              years.map(year => (
                <YearSection 
                  key={year} 
                  year={year} 
                  fellows={fellowsData[year]} 
                />
              ))
            ) : (
              <YearSection 
                year={selectedYear} 
                fellows={fellowsData[selectedYear]} 
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fellows; 