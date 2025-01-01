// SupportUs.js
import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'

const SupportUs = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-[#0B9A9E]/90 to-gray-900 py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F6911E]/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partner with Us & Support our Work
              </h1>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
              <p className="text-xl text-white/80 max-w-2xl">
                The LéO Africa Institute is a non-profit organization dedicated to fostering leadership and positive change across Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl">
            {/* Content Section */}
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="prose prose-lg">
                  <p className="text-gray-600 leading-relaxed">
                    We want to work with individuals, actors from industry, and public sector who support us with financial donations, and in kind with their time, and other offerings.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We invite you to join us; to support our efforts by donating, or collaborating on exciting projects building change agents in our communities and countries.
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Join in the community of Friends & Champions in contributing to building the Africa We Want.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">General Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#0B9A9E]/10 rounded-full shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-[#0B9A9E]" />
                    </div>
                    <div>
                      <p className="text-gray-600">
                        Block D Suite9, Ntinda Complex,<br />
                        Ntinda Road, Kampala Uganda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#0B9A9E]/10 rounded-full shrink-0">
                      <FaPhone className="w-6 h-6 text-[#0B9A9E]" />
                    </div>
                    <div>
                      <p className="text-gray-600">+256-(0) 776 891 933</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#0B9A9E]/10 rounded-full shrink-0">
                      <FaEnvelope className="w-6 h-6 text-[#0B9A9E]" />
                    </div>
                    <div>
                      <a href="mailto:communications@leoafricainstitute.org" className="text-[#0B9A9E] hover:underline">
                        communications@leoafricainstitute.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#0B9A9E]/10 rounded-full shrink-0">
                      <FaGlobe className="w-6 h-6 text-[#0B9A9E]" />
                    </div>
                    <div>
                      <a 
                        href="https://www.leoafricainstitute.org" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#0B9A9E] hover:underline"
                      >
                        www.leoafricainstitute.org
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportUs