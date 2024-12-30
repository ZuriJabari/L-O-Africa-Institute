// src/components/pillars-of-action.js
import React from "react";
import { motion } from "framer-motion";
import Timeline from "../../components/Timeline";  // Updated path
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { pillarsData } from "../../data/PillarsData";  // Update path based on data location

const PillarsOfAction = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#00babc]/10 mix-blend-multiply" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00babc]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f89420]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
            >
              Our Pillars of Action
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-center max-w-3xl mx-auto text-gray-200"
            >
              The foundational elements that guide our mission and impact across Africa
            </motion.p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Timeline items={pillarsData} />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PillarsOfAction;  // Fixed export name