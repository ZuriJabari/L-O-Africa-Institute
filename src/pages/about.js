import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import SubscriptionForm from '../components/SubscriptionForm';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen sm:h-screen sm:min-h-[700px] flex items-center overflow-hidden -mt-[100px] sm:-mt-[140px] pt-[100px] sm:pt-[140px]">
        {/* Background Image Layer with Ken Burns Effect */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <StaticImage
            src="../assets/images/about-hero.jpg"
            alt="About LéO Africa Institute"
            className="w-full h-full"
            imgClassName="object-cover"
            placeholder="blurred"
            formats={["jpg"]}
            quality={90}
          />
          {/* Sophisticated Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff05_1px,_transparent_1px)] bg-[length:40px_40px] opacity-30"></div>
        </motion.div>

        {/* Content Layer */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-10"
            >
              <div className="w-12 sm:w-16 h-px bg-[#F6911E]"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
                About Us
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight mb-6 sm:mb-8"
            >
              Empowering Africa's{' '}
              <span className="block mt-2">
                Next Generation
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-xl md:text-2xl leading-relaxed text-white/90 mb-10 sm:mb-14 max-w-3xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Since 2012, we've been nurturing ethical leadership and fostering thought-provoking dialogue to shape Africa's future.
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-4 text-white/60 text-sm font-light"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Executive Summary Section */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#0B9A9E]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F6911E]/5 rounded-full blur-3xl" />
        </div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0B9A9E08_1px,_transparent_1px)] bg-[length:32px_32px]" />
        
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="text-center mb-20"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#F6911E] to-transparent" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#F6911E] font-medium">
                  Executive Summary
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#F6911E] to-transparent" />
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-[1.1]">
                About the LéO Africa Institute
              </h2>
            </motion.div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="relative"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute -left-4 -top-4 md:-left-8 md:-top-8 text-[#0B9A9E]/10 text-[120px] md:text-[180px] font-serif leading-none z-0 pointer-events-none">
                “
              </div>
              
              {/* Main Content Container */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-10 md:p-16 relative z-10">
                {/* Accent Bar */}
                <div className="absolute left-0 top-16 bottom-16 w-1 bg-gradient-to-b from-[#F6911E] via-[#0B9A9E] to-[#F6911E] rounded-r" />
                
                <div className="space-y-8 pl-8">
                  {/* First Paragraph */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light"
                  >
                    Founded in 2012, the <span className="font-medium text-[#0B9A9E]">LéO Africa Institute</span> (Swahili for “Today’s Africa”) is an independent organization dedicated to building a network of transformational leaders who catalyze positive change across the continent—transforming lives, strengthening institutions, and uplifting communities.
                  </motion.p>

                  {/* Second Paragraph */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light"
                  >
                    The Institute was born from the shared vision of two friends, <span className="font-medium">Awel Uwihanganye</span> and <span className="font-medium">Magnus Mchunguzi</span>, who recognized Africa’s immense growth potential and believed that ethical, values-based leadership must drive this renaissance.
                  </motion.p>

                  {/* Third Paragraph */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light"
                  >
                    Today, LéO Africa invests in human capital development by empowering thousands of passionate, driven leaders—individuals with bold visions for themselves and their societies who are ready to turn possibility into reality.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Download Profile Booklet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-16"
            >
              <a
                href="/downloads/leo-africa-institute-profile.pdf"
                download
                className="inline-flex items-center gap-3 px-10 py-5 text-base font-medium text-white bg-gradient-to-r from-[#0B9A9E] to-[#0B9A9E]/90 hover:from-[#F6911E] hover:to-[#F6911E]/90 rounded-full transition-all duration-500 group transform hover:scale-105"
              >
                <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Profile Booklet</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="mt-4 text-sm text-gray-500 font-light">
                Learn more about our programs, impact, and vision for Africa
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#F6911E]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#0B9A9E]/8 rounded-full blur-3xl" />
        </div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0B9A9E05_1px,_transparent_1px)] bg-[length:40px_40px]" />
        
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="mb-20"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-[#F6911E]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#F6911E] font-medium">
                  Who We Are
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight leading-[1.1]">
                Building Africa's Leadership Network
              </h2>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              {/* Left Column - Introduction */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                  We are a <span className="font-medium text-[#0B9A9E]">leadership development organization</span> building a network of transformational African leaders.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through fellowships and programs like our flagship <span className="font-medium">Young & Emerging Leaders Program (YELP)</span>, <span className="font-medium">Huduma fellowship</span>, and the <span className="font-medium">African Champions Network</span>, we have already developed this network to over <span className="font-semibold text-[#F6911E]">300 influential African leaders</span> across <span className="font-semibold text-[#0B9A9E]">10 African countries</span>.
                </p>
              </motion.div>

              {/* Right Column - Mission & Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Mission Card */}
                <div className="bg-gradient-to-br from-[#0B9A9E]/5 to-[#0B9A9E]/10 rounded-2xl p-8 border border-[#0B9A9E]/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0B9A9E] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-sm uppercase tracking-[0.2em] text-[#0B9A9E] font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed font-light">
                    To build an effective network of over <span className="font-semibold text-[#0B9A9E]">10,000 individuals</span> leading transformative change and amplifying Africa's influence globally.
                  </p>
                  <div className="mt-4 text-sm text-gray-600 font-medium">
                    Next Decade Goal
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Section - Strategic Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 p-10 md:p-14 relative overflow-hidden"
            >
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F6911E]/10 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 tracking-tight">
                  Our Strategic Approach
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The goal we have set for ourselves is ambitious and with support from committed partners and a growing network, we will be able to expand our programs, convene more authentic African spaces for ideas and networking such as our <span className="font-medium text-[#0B9A9E]">Annual Leaders Gathering</span>, and amplify a greater number of African voices through initiatives like our <span className="font-medium text-[#F6911E]">Griots fellowship</span> & <span className="font-medium text-[#0B9A9E]">LéO Africa Talks – Conversation Worth Having</span>.
                </p>

                {/* Key Impact Areas */}
                <div className="grid sm:grid-cols-3 gap-6 mt-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                  >
                    <div className="text-4xl font-light text-[#0B9A9E] mb-2">300+</div>
                    <div className="text-sm text-gray-600 font-medium">Leaders Developed</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                  >
                    <div className="text-4xl font-light text-[#F6911E] mb-2">10</div>
                    <div className="text-sm text-gray-600 font-medium">African Countries</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                  >
                    <div className="text-4xl font-light text-[#0B9A9E] mb-2">10K</div>
                    <div className="text-sm text-gray-600 font-medium">Mission Goal</div>
                  </motion.div>
                </div>

                {/* Closing Statement */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mt-10 pt-8 border-t border-gray-200"
                >
                  <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-light text-center">
                    Through such efforts, we shall significantly contribute to shaping a progressive narrative and build <span className="font-medium text-[#0B9A9E]">Africa's next great chapter</span>.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stay Informed - Redesigned */}
      <section className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0b9a9e0d_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gray-300" />
                <span className="text-xs uppercase tracking-[0.3em] text-gray-600 font-medium">Stay Informed</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-6">
                Join Our Leadership Community
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Receive thoughtfully curated updates on programs, events and insights shaping leadership and innovation in Africa.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900" />Monthly insights</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900" />Program updates</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900" />Exclusive content</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gray-900" />No spam. Unsubscribe anytime</li>
              </ul>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm"
            >
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900">Subscribe to updates</h3>
                <p className="text-sm text-gray-500 mt-1">We’ll send only what matters. No noise.</p>
              </div>
              <SubscriptionForm variant="bare" />
              <div className="mt-6 text-xs text-gray-500">
                By subscribing you agree to our <a href="/privacy" className="underline hover:text-gray-700">Privacy Policy</a>.
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
