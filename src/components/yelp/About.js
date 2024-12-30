import React from 'react';
import { motion } from 'framer-motion';
import YelpLogo from '../../assets/images/YELP-Logo.svg';

const About = () => {
  return (
    <div className="min-h-screen" style={{ background: '#8C272B' }}>
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to bottom, rgba(140, 39, 43, 0.9), rgba(11, 154, 158, 0.8))'
        }} />
        
        {/* Decorative Elements */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-20 blur-3xl" 
          style={{ background: '#D28734' }} />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full opacity-20 blur-3xl" 
          style={{ background: '#0B9A9E' }} />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={YelpLogo} 
                alt="YELP Logo" 
                className="h-24 md:h-32"
              />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About YELP
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
              What is YELP?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              The Young and Emerging Leaders Project (YELP) is a fellowship program of the LéO Africa Institute that brings together outstanding young people from East Africa who have demonstrated leadership in their respective fields.
            </p>
            <p className="text-lg text-white/90 mb-6">
              The fellowship is designed to train and build a critical mass of young thought leaders who will drive Africa's transformation. The program targets young people aged 25-35 years who have demonstrated outstanding leadership in their respective fields.
            </p>
          </motion.div>

          {/* Program Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
              The Fellowship
            </h2>
            <p className="text-lg text-white/90 mb-6">
              The fellowship is a three-seminar leadership program that runs for a year. The seminars are designed to equip fellows with tools and knowledge to play a more active role in their communities and countries.
            </p>
            <p className="text-lg text-white/90 mb-6">
              The program's curriculum is designed to give fellows a better appreciation of leadership, public policy, personal development, and Pan-Africanism.
            </p>
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
              Our Impact
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Since its inception in 2013, YELP has trained over 100 young leaders from Uganda, Kenya, Rwanda, Burundi, Tanzania, and the Democratic Republic of Congo.
            </p>
            <p className="text-lg text-white/90 mb-6">
              Our fellows have gone on to make significant contributions in their respective fields, from public service to entrepreneurship, media to civil society.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div style={{ background: 'rgba(11, 154, 158, 0.1)' }} className="p-6 rounded-lg backdrop-blur-lg">
                <h3 className="text-xl font-bold text-white mb-3" style={{ color: '#D28734' }}>Leadership Excellence</h3>
                <p className="text-white/90">We believe in nurturing exceptional leadership qualities that drive positive change in our communities.</p>
              </div>
              <div style={{ background: 'rgba(11, 154, 158, 0.1)' }} className="p-6 rounded-lg backdrop-blur-lg">
                <h3 className="text-xl font-bold text-white mb-3" style={{ color: '#D28734' }}>Pan-African Vision</h3>
                <p className="text-white/90">We are committed to fostering a united and prosperous Africa through collaborative leadership.</p>
              </div>
              <div style={{ background: 'rgba(11, 154, 158, 0.1)' }} className="p-6 rounded-lg backdrop-blur-lg">
                <h3 className="text-xl font-bold text-white mb-3" style={{ color: '#D28734' }}>Innovation</h3>
                <p className="text-white/90">We encourage creative thinking and innovative solutions to Africa's challenges.</p>
              </div>
              <div style={{ background: 'rgba(11, 154, 158, 0.1)' }} className="p-6 rounded-lg backdrop-blur-lg">
                <h3 className="text-xl font-bold text-white mb-3" style={{ color: '#D28734' }}>Community Impact</h3>
                <p className="text-white/90">We strive to create lasting positive change in our communities through effective leadership.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 