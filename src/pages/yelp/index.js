import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import YelpLogo from '../../assets/images/YELP-Logo.svg';
import YelpHero from '../../assets/images/yelp.jpg';
import YelpLayout from '../../components/layout/YelpLayout';
import { submitFormToFirebase, FORM_TYPES } from '../../utils/forms';

const YelpHome = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = await submitFormToFirebase(FORM_TYPES.JOIN, {
        ...formData,
        source: 'yelp_join_movement'
      });

      if (result.success) {
        setSuccess(true);
        setMessage(result.message);
        setFormData({ name: '', email: '' });
      } else {
        setSuccess(false);
        setMessage(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSuccess(false);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <YelpLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-3 py-1.5 mb-6 border border-[#0B9A9E] rounded-full"
                >
                  <span className="block w-2 h-2 rounded-full bg-[#0B9A9E] mr-2" />
                  <span className="text-sm text-[#0B9A9E] font-medium tracking-wide uppercase">Applications Opening Soon</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-playfair"
                >
                  YELP Project
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl lg:max-w-none"
                >
                  Applications for the 2025 cohort of the YELP project are opening soon. Are you a young thought leader interested in shaping the future of Africa through championing ethical and values-based leadership? The YELP project empowers you to become the next innovative and transformative leader Africa needs.
                </motion.p>
              </div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="lg:justify-self-end w-full max-w-md mx-auto"
              >
                <div className="backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white/90 text-sm font-medium mb-2">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent transition duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent transition duration-200"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0B9A9E] to-[#87181A] rounded-lg opacity-70 group-hover:opacity-100 transition duration-200 blur" />
                      <div className="relative w-full px-6 py-3 bg-[#0B9A9E] rounded-lg text-white font-semibold text-lg transition-all duration-200 group-hover:bg-opacity-90">
                        {loading ? 'Subscribing...' : 'Subscribe for Updates'}
                      </div>
                    </button>
                    {message && (
                      <p className={`text-sm ${success ? 'text-green-400' : 'text-red-400'} text-center mt-2`}>
                        {message}
                      </p>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
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
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#0B9A9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-lg">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E]"
                  required
                />
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E]"
                  required
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full p-4 bg-white text-[#0B9A9E] rounded-xl font-bold hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Join Now'}
                </button>
                {message && !success && (
                  <p className="text-white text-sm mt-2">{message}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </YelpLayout>
  );
};

export default YelpHome; 