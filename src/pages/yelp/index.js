import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import YelpLogo from '../../assets/images/YELP-Logo.svg';
import YelpHero from '../../assets/images/yelp.jpg';
import YelpLayout from '../../components/layout/YelpLayout';

const YelpHome = () => {
  return (
    <YelpLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Hero Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${YelpHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Left side gradient */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0B9A9E]/90 to-transparent" />
          {/* Right side gradient */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0B9A9E]/90 to-transparent" />
          {/* Subtle center overlay */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 pattern-bg opacity-20" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Young and Emerging Leaders Project
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Empowering the next generation of African leaders through innovation and transformative leadership
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link 
              to="/yelp/fellows"
              className="px-8 py-4 bg-[#0B9A9E] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-[#0B9A9E]/90"
            >
              Meet Our Fellows
            </Link>
            <Link 
              to="/yelp/about"
              className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-8 rounded-xl text-center bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 font-playfair text-[#0B9A9E]">Leadership</h3>
              <p className="text-gray-700">Developing exceptional leaders who will drive Africa's transformation</p>
            </motion.div>

            <motion.div 
              className="p-8 rounded-xl text-center bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 font-playfair text-[#0B9A9E]">Innovation</h3>
              <p className="text-gray-700">Fostering creative solutions to Africa's most pressing challenges</p>
            </motion.div>

            <motion.div 
              className="p-8 rounded-xl text-center bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 font-playfair text-[#0B9A9E]">Impact</h3>
              <p className="text-gray-700">Creating lasting positive change across the African continent</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0B9A9E] via-[#0B9A9E]/90 to-[#0B9A9E]/80">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6 font-playfair"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Join the Movement
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Be part of a transformative journey shaping Africa's future. Join our community of emerging leaders making a difference.
          </motion.p>
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="space-y-4">
              <input 
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E]"
              />
              <input 
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E]"
              />
              <button 
                type="submit"
                className="w-full p-4 bg-white text-[#0B9A9E] rounded-xl font-bold hover:bg-white/90 transition-all duration-300"
              >
                Join Now
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </YelpLayout>
  );
};

export default YelpHome; 