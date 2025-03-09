import React from 'react';
import Layout from '../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaShieldAlt, 
  FaRocket, 
  FaQuoteLeft, 
  FaLightbulb,
  FaHandshake,
  FaGlobe, 
  FaChevronRight
} from 'react-icons/fa';

const MissionVisionPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideIn = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <StaticImage
            src="../../assets/images/ALG24.jpg"
            alt="Our Mission & Vision"
            className="w-full h-full"
            imgClassName="object-cover"
            placeholder="blurred"
            formats={["jpg"]}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 pattern-bg opacity-30"></div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#F6911E]/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#0B9A9E]/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Content Layer */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#F6911E]"></div>
                <span className="inline-block bg-[#F6911E]/10 border border-[#F6911E]/20 text-[#F6911E] px-6 py-2 text-sm font-semibold rounded-full">
                  Our Purpose
                </span>
              </div>
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                Transforming <span className="text-[#0B9A9E]">Africa</span> <br />
                Through <span className="text-[#F6911E]">Leadership</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-10">
                We are inspiring, empowering, and connecting generations of ethical, values-based leaders in Africa and beyond to drive transformative change.
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a href="#mission" className="inline-flex items-center gap-2 bg-[#0B9A9E] hover:bg-[#0B9A9E]/90 text-white py-3 px-6 rounded-full transition-all duration-300 group">
                  <span>Discover Our Vision</span>
                  <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Transition */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="prefooter-gray">
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 bg-white relative overflow-hidden">
        {/* Pattern background with more vibrant colors */}
        <div className="absolute inset-0 pattern-bg opacity-40"></div>
        
        {/* Colorful gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-[#F6911E]/20 to-[#0B9A9E]/15 rounded-full -translate-y-1/3 translate-x-1/4 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#0B9A9E]/15 to-[#F6911E]/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              {...fadeIn}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-[#F6911E]/20 to-[#0B9A9E]/20 rounded-full mb-4">
                <div className="w-2 h-2 rounded-full bg-[#F6911E]"></div>
                <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-[#F6911E] to-[#0B9A9E] bg-clip-text text-transparent">Our Foundation</span>
                <div className="w-2 h-2 rounded-full bg-[#0B9A9E]"></div>
              </div>
              <h2 className="font-playfair text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] bg-clip-text text-transparent">Mission & Vision</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The foundation of our work and our commitment to Africa's future
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                {...slideIn}
                className="relative group h-full"
              >
                <div className="bg-gradient-to-br from-[#F6911E]/5 to-white shadow-lg hover:shadow-xl transition-all duration-500 p-8 lg:p-10 rounded-3xl relative overflow-hidden border border-[#F6911E]/20 h-full flex flex-col">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-[#F6911E]/10 to-transparent rounded-bl-[100px] -z-1"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F6911E]/5 rounded-full blur-xl"></div>
                  <div className="absolute -left-3 top-0 bottom-0 w-[6px]">
                    <div className="h-full w-full bg-gradient-to-b from-[#F6911E] via-[#F6911E]/70 to-[#F6911E]/30 rounded-full"></div>
                  </div>
                  
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F6911E] to-[#F6911E]/70 flex items-center justify-center text-white shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                      <FaRocket className="text-3xl" />
                    </div>
                    <div>
                      <span className="text-[#F6911E] text-lg font-bold tracking-wider uppercase">Our Mission</span>
                      <div className="h-1 w-12 bg-[#F6911E]/30 mt-1"></div>
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="flex-grow">
                    <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                      We are building an effective network of over <span className="font-semibold text-[#F6911E]">10,000 individuals</span> leading transformative change in critical areas of challenge and who amplify Africa's influence globally by 2035.
                    </p>
                  </div>
                  
                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-[#F6911E]/20">
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="w-10 h-10 rounded-full bg-[#F6911E]/10 flex items-center justify-center text-[#F6911E] group-hover:bg-[#F6911E]/20 transition-all duration-300">
                        <FaStar className="text-lg" />
                      </div>
                      <span className="text-base">Transforming Africa through leadership</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                {...slideInRight}
                className="relative group h-full"
              >
                <div className="bg-gradient-to-br from-[#0B9A9E]/5 to-white shadow-lg hover:shadow-xl transition-all duration-500 p-8 lg:p-10 rounded-3xl relative overflow-hidden border border-[#0B9A9E]/20 h-full flex flex-col">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-[#0B9A9E]/10 to-transparent rounded-bl-[100px] -z-1"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0B9A9E]/5 rounded-full blur-xl"></div>
                  <div className="absolute -left-3 top-0 bottom-0 w-[6px]">
                    <div className="h-full w-full bg-gradient-to-b from-[#0B9A9E] via-[#0B9A9E]/70 to-[#0B9A9E]/30 rounded-full"></div>
                  </div>
                  
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B9A9E] to-[#0B9A9E]/70 flex items-center justify-center text-white shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                      <FaShieldAlt className="text-3xl" />
                    </div>
                    <div>
                      <span className="text-[#0B9A9E] text-lg font-bold tracking-wider uppercase">Our Vision</span>
                      <div className="h-1 w-12 bg-[#0B9A9E]/30 mt-1"></div>
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="flex-grow">
                    <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                      We are <span className="font-semibold text-[#0B9A9E]">inspiring, empowering, connecting</span> and enabling generations of ethical and values based leaders in Africa and beyond.
                    </p>
                  </div>
                  
                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-[#0B9A9E]/20">
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="w-10 h-10 rounded-full bg-[#0B9A9E]/10 flex items-center justify-center text-[#0B9A9E] group-hover:bg-[#0B9A9E]/20 transition-all duration-300">
                        <FaStar className="text-lg" />
                      </div>
                      <span className="text-base">Building a legacy of ethical leadership</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced visual impact elements */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#F6911E]/20 to-[#0B9A9E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <FaGlobe className="text-2xl text-[#F6911E]" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">Global Impact</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0B9A9E]/20 to-[#F6911E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <FaHandshake className="text-2xl text-[#0B9A9E]" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">Collaborative Leadership</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#F6911E]/10 to-[#0B9A9E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <FaLightbulb className="text-2xl text-[#F6911E]" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">Innovative Solutions</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="relative h-6 bg-white overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 rounded-full bg-[#F6911E]/40"></div>
              <div className="w-3 h-3 rounded-full bg-[#F6911E]"></div>
              <div className="w-10 h-1 rounded-full bg-[#0B9A9E]/40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section - More Compact */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Simplified decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#F6911E]/10 to-[#0B9A9E]/10 rounded-full -translate-y-1/4 translate-x-1/4 blur-[80px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Compact content container */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/80 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                {/* Left column: Heading and text */}
                <div className="md:w-1/2">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-[#F6911E]/10 to-[#0B9A9E]/10 rounded-full mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F6911E]"></div>
                      <span className="text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#F6911E] to-[#0B9A9E] bg-clip-text text-transparent">How We Work</span>
                    </div>
                    <h2 className="font-playfair text-3xl font-bold mb-4 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] bg-clip-text text-transparent">Our Approach</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] mb-4 rounded-full"></div>
                    
                    <p className="text-base text-gray-700 mb-5">
                      We believe in a multifaceted approach to leadership development that addresses the unique challenges and opportunities within the African context.
                    </p>
                    
                    {/* Small icon row */}
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F6911E]/80 to-[#F6911E]/30 shadow-sm flex items-center justify-center">
                        <FaRocket className="text-white text-sm" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0B9A9E]/80 to-[#0B9A9E]/30 shadow-sm flex items-center justify-center">
                        <FaHandshake className="text-white text-base" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F6911E]/80 to-[#F6911E]/30 shadow-sm flex items-center justify-center">
                        <FaGlobe className="text-white text-sm" />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right column: Quote */}
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-gradient-to-br from-[#F6911E]/5 via-white to-[#0B9A9E]/5 rounded-xl shadow-sm border border-white p-6 relative overflow-hidden">
                      <div className="relative z-10">
                        <FaQuoteLeft className="text-[#F6911E] text-xl mb-3" />
                        <blockquote className="text-base italic text-gray-700 mb-4">
                          "Through purposeful connections and shared knowledge, we're building a generation of leaders who will transform Africa's narrative."
                        </blockquote>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-[#F6911E]">
                            <StaticImage
                              src="../../assets/images/Awel.jpg"
                              alt="Awel Uwihanganye"
                              className="w-full h-full"
                              imgClassName="object-cover"
                              placeholder="blurred"
                              formats={["jpg"]}
                              quality={90}
                            />
                          </div>
                          <div>
                            <p className="font-semibold bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] bg-clip-text text-transparent">Awel Uwihanganye</p>
                            <p className="text-sm text-gray-600">Co-founder & Program Lead</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="relative h-6 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F6911E]"></div>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#F6911E] to-[#0B9A9E]"></div>
              <div className="w-2 h-2 rounded-full bg-[#0B9A9E]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Opportunity Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F6911E08_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Image */}
              <motion.div
                {...slideIn}
                className="relative rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <StaticImage
                    src="../../assets/images/ALG24.jpg"
                    alt="Africa's Opportunity"
                    className="w-full h-full"
                    imgClassName="object-cover"
                    placeholder="blurred"
                    formats={["jpg"]}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block px-4 py-2 bg-[#F6911E]/90 text-white text-sm font-semibold rounded-full mb-4">
                    Africa Rising
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">A Continent of Potential</h3>
                  <p className="text-white/90">Home to the world's youngest population and vast natural resources</p>
                </div>
              </motion.div>
              
              {/* Right Column - Text */}
              <motion.div
                {...slideInRight}
                className="relative"
              >
                <h2 className="font-playfair text-4xl font-bold mb-8">The Challenge & Opportunity</h2>
                <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
                
                <p className="text-xl text-gray-700 mb-8">
                  With an estimated 30% of the world's mineral reserves and an unprecedented natural resource endowment in general, a home market of 1.2 billion and growing, exponential growth in infrastructure and technology, and with the youngest population in the world, Africa stands at the greatest point of opportunity.
                </p>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#F6911E]">
                        <StaticImage
                          src="../../assets/images/Awel.jpg"
                          alt="Awel Uwihanganye"
                          className="w-full h-full"
                          imgClassName="object-cover"
                          placeholder="blurred"
                          formats={["jpg"]}
                          quality={90}
                          layout="fullWidth"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <FaQuoteLeft className="text-[#F6911E] text-3xl mb-4" />
                      <blockquote className="font-inter text-xl italic text-gray-700 mb-4">
                        "We believe leadership can be the driver of growth and tackling the bottlenecks that hinder progress."
                      </blockquote>
                      <footer className="font-inter font-semibold text-[#0B9A9E]">
                        – Awel Uwihanganye, Co-founder & Program Lead
                      </footer>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="relative h-6 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#0B9A9E] to-[#F6911E]"></div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0B9A9E]/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F6911E]/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              {...fadeIn}
            >
              <span className="text-[#F6911E] text-sm font-semibold tracking-wider uppercase">Our Foundation</span>
              <h2 className="font-playfair text-4xl font-bold mt-4 mb-6">Core Values</h2>
              <div className="w-24 h-1 bg-[#F6911E] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our values guide everything we do, from program design to partnership development
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaStar className="w-8 h-8" />,
                  title: "Excellence",
                  description: "We focus on producing the most engaging meetings and discussion sessions that meet the specific needs of our countries and communities, to ensure we make a lasting contribution to the development of our nations",
                  color: "from-[#F6911E]"
                },
                {
                  icon: <FaShieldAlt className="w-8 h-8" />,
                  title: "Respect, Integrity & Trust",
                  description: "We are committed to fostering an environment of respect and trust in which the utmost value is placed on integrity",
                  color: "from-[#0B9A9E]"
                },
                {
                  icon: <FaRocket className="w-8 h-8" />,
                  title: "Innovation & Enterprise",
                  description: "We are committed to providing resources and opportunities for personal and professional development and fostering a culture that encourages innovation",
                  color: "from-[#F6911E]"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 relative overflow-hidden">
                    {/* Background decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50/80 to-transparent rounded-bl-[100px] -z-1"></div>
                    
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} to-transparent/10 flex items-center justify-center mb-6 text-white`}>
                      {value.icon}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="relative h-6 bg-white overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 rounded-full bg-[#F6911E]/40"></div>
              <div className="w-3 h-3 rounded-full bg-[#F6911E]"></div>
              <div className="w-10 h-1 rounded-full bg-[#0B9A9E]/40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - NEW */}
      <section className="py-16 bg-gradient-to-r from-[#0B9A9E] to-[#0B9A9E]/80 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff15_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F6911E]/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F6911E]/20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
                Join Us in Transforming Africa
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Be part of a movement that's shaping Africa's future through ethical leadership and innovative thinking
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white hover:bg-gray-100 text-[#0B9A9E] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Get Involved
                </a>
                <a 
                  href="/about/team" 
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Meet Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionVisionPage;
