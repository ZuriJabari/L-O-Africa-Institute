import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";
import { Link } from "gatsby";

const PartnershipBlock = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="mb-12"
          >
            <div className="max-w-4xl">
              <div className="mb-8">
                <span className="inline-block text-[10px] uppercase tracking-[0.5em] text-[#0B9A9E] font-medium">
                  Partnership Opportunities
                </span>
              </div>
              <h2 className="text-[2.25rem] md:text-[3.5rem] lg:text-[4.25rem] font-light text-gray-900 leading-[1.05] tracking-[-0.02em] mb-6">
                We would like to<br />
                <span className="font-normal text-[#0B9A9E]">Expand on our Impact</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#F6911E] mb-4"></div>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
                Partner with Us & Support our Work
              </p>
            </div>
          </motion.div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0B9A9E]/10 to-transparent transform rotate-45 group-hover:scale-150 transition-transform"></div>
              <div className="mb-6">
                <span className="text-6xl font-light text-[#0B9A9E] opacity-20">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">how we work with Individuals</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Support our mission with your time, expertise, and resources to shape Africa's future leaders.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F6911E]/10 to-transparent transform rotate-45 group-hover:scale-150 transition-transform"></div>
              <div className="mb-6">
                <span className="text-6xl font-light text-[#F6911E] opacity-20">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">how we support Institutions & Industry Actors</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Collaborate with us to create meaningful impact through innovative projects and initiatives.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0B9A9E]/10 to-transparent transform rotate-45 group-hover:scale-150 transition-transform"></div>
              <div className="mb-6">
                <span className="text-6xl font-light text-[#0B9A9E] opacity-20">03</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">how we collaborate with communities</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Partner with us to strengthen leadership capacity and drive sustainable development.
              </p>
            </motion.div>
          </div>

          {/* Call to Action Block */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="border-t border-b border-gray-200 py-10 mt-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-gray-700 leading-[1.6] mb-8 font-light tracking-tight">
                We invite you to join us; to support our efforts by donating, or collaborating on exciting projects building change agents in our communities and countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/partner-with-us"
                  className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#0B9A9E] text-white font-medium text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:bg-gray-900"
                >
                  Become a Partner
                </Link>
                <Link
                  to="/donate"
                  className="group relative inline-flex items-center justify-center px-10 py-4 border border-gray-300 text-gray-900 font-medium text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:border-gray-900"
                >
                  Make a Donation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBlock;
