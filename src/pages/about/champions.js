import React from 'react';
import { motion } from 'framer-motion';
import LucyHero from '../../assets/images/ALG24.jpg';
import LucyPhoto from '../../assets/images/Lucy.png';
import CarlPhoto from '../../assets/images/carl.jpg'; 
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer'; 
import Layout from '../../components/Layout'; 

const Champions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${LucyHero})`
          }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-white text-5xl md:text-6xl font-bold mb-6">
              Meet Our Champions
            </h1>
            <p className="font-inter text-gray-300 text-xl max-w-2xl mx-auto">
              Visionary leaders driving positive change across Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Lucy's Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={LucyPhoto}
                  alt="Lucy Mbabazi"
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#2bbecb]"
                />
                <div>
                  <h3 className="font-playfair text-white text-xl font-semibold">Lucy Mbabazi</h3>
                  <p className="font-inter text-gray-300">Managing Director, Better than Cash Alliance</p>
                </div>
              </div>
            </motion.div>

            {/* Carl's Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all"
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={CarlPhoto}
                  alt="Carl Manlan"
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#2bbecb]"
                />
                <div>
                  <h3 className="font-playfair text-white text-xl font-semibold">Carl Manlan</h3>
                  <p className="font-inter text-gray-300">Vice President, Social Impact - Visa CEMEA</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
      </section>

      {/* Champions Profiles Section */}
      <section className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lucy's Profile */}
          <div className="flex items-start space-x-4">
            <img 
              src={LucyPhoto} 
              alt="Lucy Mbabazi" 
              className="h-32 w-32 object-cover rounded-lg" 
            />
            <div>
              <h3 className="font-playfair text-[#3b3b3b] text-lg mb-1">Lucy Mbabazi</h3>
              <h4 className="font-inter text-sm font-medium text-gray-600 mb-1">Managing Director, Better than Cash Alliance</h4>
              <hr className="border-gray-300 my-2" />
              <p className="font-inter text-sm text-[#444] leading-relaxed">
                Lucy is the Managing Director of the Better Than Cash Alliance, hosted by the UN, and Chairperson Emeritus of the LéO Africa Institute. Previously, she led Africa Policy, Advocacy, and Partnerships for the Alliance.
                <br /><br />
                Lucy's purpose is FREEDOM. She works tirelessly to ensure digital and financial inclusion for every African. Her passion extends to mentoring girls in STEM, inspiring African girls to pursue technology and engineering fields.
              </p>
            </div>
          </div>

          {/* Carl's Profile */}
          <div className="flex items-start space-x-4">
            <img 
              src={CarlPhoto} 
              alt="Carl Manlan" 
              className="h-32 w-32 object-cover rounded-lg" 
            />
            <div>
              <h3 className="font-playfair text-[#3b3b3b] text-lg mb-1">Carl Manlan</h3>
              <h4 className="font-inter text-sm font-medium text-gray-600 mb-1">Vice President, Social Impact - Visa CEMEA</h4>
              <hr className="border-gray-300 my-2" />
              <p className="font-inter text-sm text-[#444] leading-relaxed">
                Carl is the Vice President of Social Impact at Visa CEMEA. He has a strong background in public health and economic development, working to improve the lives of people across Africa.
                <br /><br />
                Carl's mission is to drive social impact through innovative solutions and partnerships. He is dedicated to creating opportunities for underserved communities and fostering inclusive growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Champions;