import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion'; // Add proper import

const HistoryAndMission = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00babc]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f89420]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white text-center"
            >
              Our History & Mission
            </motion.h1>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our History</h2>
              <div className="prose prose-lg">
                <p>
                  The LéO Africa Institute was founded in 2012 to develop a new generation of leaders committed to the development of Africa. Our founders, driven by a desire to see Africa reach its full potential, envisioned an institute that would nurture ethical and visionary leadership across the continent.
                </p>
                <p>
                  Over the years, we have built a community of emerging and established leaders who are driving positive change in their communities and organizations. Through our various programs and initiatives, we continue to inspire, connect and empower these leaders to create lasting impact.
                </p>
              </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed">
                  To inspire and build a new generation of leaders committed to Africa's transformation.
                </p>
              </div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed">
                  A prosperous Africa driven by ethical, entrepreneurial and transformative leadership.
                </p>
              </div>
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Excellence",
                    description: "We strive for the highest standards in everything we do"
                  },
                  {
                    title: "Innovation",
                    description: "We embrace creative solutions and new ideas"
                  },
                  {
                    title: "Integrity",
                    description: "We uphold ethical leadership and transparency"
                  },
                  {
                    title: "Collaboration",
                    description: "We believe in the power of working together"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#00babc]">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Add page metadata for Gatsby
export const Head = () => <title>History & Mission | LéO Africa Institute</title>

export default HistoryAndMission;