import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

const ALGPromoBlock = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Artwork */}
      <div className="absolute inset-0">
        <StaticImage
          src="../assets/images/alg-2025-artwork.png"
          alt="Annual Leaders Gathering 2025"
          className="w-full h-full"
          imgClassName="object-cover"
          placeholder="blurred"
          quality={95}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="order-1 lg:order-1"
          >
            {/* ALG Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <StaticImage
                src="../assets/images/alg-color.svg"
                alt="Annual Leaders Gathering"
                className="w-48 md:w-64"
                placeholder="none"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]"
            >
              Annual Leaders{' '}
              <span className="block mt-2 text-white font-medium">
                Gathering 2025
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="space-y-4 sm:space-y-5 mb-8 sm:mb-10"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
                The Annual Leaders Gathering is the LéO Africa Institute's <span className="text-[#F6911E] font-medium">signature convening platform</span>. It brings together its growing networks of leaders for significant conversations, networking, and deliberation on actions necessary to address the day's challenges.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-light">
                Fellows of the Institute, emerging leaders in the public and private sector, as well as the Institute's extended network across Africa, convene to reflect on the challenges facing society today and explore how different networks of innovators, entrepreneurs, and decision-makers can come together to address them.
              </p>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center"
            >
              <a
                href="https://alg.leoafricainstitute.org/reserve-seat"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-medium text-slate-900 bg-white rounded-full transition-all duration-300 hover:bg-[#F6911E] hover:text-white hover:scale-105 hover:shadow-2xl"
              >
                <span>Reserve Your Seat</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Limited Seats Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <svg className="w-4 h-4 text-[#F6911E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-light">Limited seats available</span>
              </motion.div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1">300+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Leaders</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1">10+</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-1">3 Days</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="order-2 lg:order-2"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 border border-white/20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-4 sm:mb-6">
                Why Attend?
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F6911E] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 text-base sm:text-lg">Network with 300+ transformational leaders across Africa</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F6911E] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 text-base sm:text-lg">Engage in meaningful conversations on Africa's future</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F6911E] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 text-base sm:text-lg">Collaborate with innovators and decision-makers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F6911E] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90 text-base sm:text-lg">Shape actionable solutions to today's challenges</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ALGPromoBlock;
