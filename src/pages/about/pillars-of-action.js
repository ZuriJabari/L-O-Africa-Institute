// src/components/pillars-of-action.js
import React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Pillars from "../../components/Pillars";
import { FaQuoteLeft } from "react-icons/fa";

const PillarsOfAction = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white text-gray-900 py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#00babc]/5 mix-blend-multiply" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00babc]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f89420]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00babc] to-[#f89420]"
            >
              Our Pillars of Action
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-center max-w-3xl mx-auto text-gray-600"
            >
              The foundational elements that guide our mission and impact across Africa
            </motion.p>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00babc]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#f89420]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-6xl mx-auto py-20"
            >
              <div className="relative">
                {/* Large decorative quote mark */}
                <div className="absolute -left-4 -top-4 text-[200px] leading-none text-[#00babc]/10 font-serif">
                  "
                </div>

                <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-center">
                  {/* Left side - Photo */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                  >
                    <div className="relative inline-block">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden transform rotate-3 shadow-xl">
                        <StaticImage
                          src="../../assets/images/Awel1.jpg"
                          alt="Awel Uwihanganye"
                          className="w-full h-full object-cover"
                          placeholder="dominantColor"
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#00babc] rounded-2xl transform -rotate-3"></div>
                      <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#f89420] rounded-lg transform rotate-12 opacity-20"></div>
                    </div>
                  </motion.div>

                  {/* Right side - Quote */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative z-10"
                  >
                    <blockquote className="relative">
                      <p className="text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-relaxed">
                        "Through our fellowship programs, events and other activities, we foster quality networks among Africa's young and emerging leaders. We are working towards building a critical mass of ethical and values-based leaders."
                      </p>
                      <footer className="flex items-center gap-4">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#00babc] to-[#f89420]"></div>
                        <div>
                          <div className="font-medium text-[#00babc] text-lg">Awel Uwihanganye</div>
                          <div className="text-gray-500 text-sm">Founder & Senior Director</div>
                        </div>
                      </footer>
                    </blockquote>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pillars Section */}
        <Pillars />
      </main>
      <Footer />
    </>
  );
};

export default PillarsOfAction;