import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'gatsby';

const PartnerWithUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0B9A9E] to-[#0B9A9E]/90 rounded-2xl p-10 md:p-14 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotPattern)" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
              >
                Partner With Us
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
              >
                Join us in our mission to nurture ethical, effective, and enlightened leaders throughout Africa.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to="/partner-with-us/" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B9A9E] rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                >
                  Become a Partner
                </Link>
                
                <Link 
                  to="/donate/" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#F6911E] text-white rounded-lg font-bold hover:bg-[#F6911E]/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Make a Donation 
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
