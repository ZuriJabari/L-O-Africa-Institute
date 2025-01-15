// pages/support-us.js
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { FaHandshake, FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";
import Partners from "../components/Partners";

const PartnerWithUsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#0B9A9E]/90 to-gray-900 py-32">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F6911E]/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                We would like to Expand on our Impact - Partner with Us & Support our Work
              </h1>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                The LéO Africa Institute is a non-profit organization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Vision Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0B9A9E]/10 to-transparent transform rotate-45 group-hover:scale-150 transition-transform"></div>
                <FaUsers className="w-12 h-12 text-[#0B9A9E] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Individuals</h3>
                <p className="text-gray-600">
                  Support our mission with your time, expertise, and resources to shape Africa's future leaders.
                </p>
              </motion.div>

              <motion.div
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F6911E]/10 to-transparent transform rotate-45 group-hover:scale-150 transition-transform"></div>
                <FaLightbulb className="w-12 h-12 text-[#F6911E] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Industry Actors</h3>
                <p className="text-gray-600">
                  Collaborate with us to create meaningful impact through innovative projects and initiatives.
                </p>
              </motion.div>

              <motion.div
                {...fadeIn}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0B9A9E]/10 to-transparent transform rotate-45 group-hover:scale-150 transition-transform"></div>
                <FaGlobe className="w-12 h-12 text-[#0B9A9E] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Public Sector</h3>
                <p className="text-gray-600">
                  Partner with us to strengthen leadership capacity and drive sustainable development.
                </p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              {...fadeIn}
              className="bg-gradient-to-br from-[#0B9A9E] to-[#0B9A9E]/90 rounded-3xl p-12 text-white relative overflow-hidden mb-24"
            >
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Join us in building change agents in our communities and countries
                  </h2>
                  <p className="text-xl text-white/90 mb-12 leading-relaxed">
                    We invite you to join us; to support our efforts by donating, or collaborating on exciting projects building change agents in our communities and countries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/donate"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B9A9E] rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                      Make a Donation
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#F6911E] text-white rounded-xl font-bold hover:bg-[#F6911E]/90 transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Partners Section */}
            <div className="mb-24">
              <Partners />
            </div>

            {/* Community Section */}
            <motion.div
              {...fadeIn}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F6911E]/10 rounded-full text-[#F6911E] mb-8">
                <FaHandshake className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join in the community of Friends & Champions in contributing to building the Africa We Want.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerWithUsPage;

// Move previous code to components/SupportUs.js