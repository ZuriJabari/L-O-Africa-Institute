// src/pages/about/faq.js
import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import Layout from "../../components/Layout";
import SubscriptionForm from "../../components/SubscriptionForm";
import { FAQ } from "../../components/about/FAQ";

const FAQPage = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00babc]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f89420]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
              Frequently Asked Questions
            </h1>
          </div>
        </section>

        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-b border-gray-100"
        >
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <Link 
                to="/" 
                className="text-gray-500 hover:text-[#00babc] transition-colors duration-200"
              >
                Home
              </Link>
              <FiChevronRight className="text-gray-400" />
              <Link 
                to="/about"
                className="text-gray-500 hover:text-[#00babc] transition-colors duration-200"
              >
                About
              </Link>
              <FiChevronRight className="text-gray-400" />
              <span className="text-[#00babc] font-medium">FAQs</span>
            </nav>
          </div>
        </motion.div>

        {/* FAQ Component */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </section>
        <SubscriptionForm />
      </div>
    </Layout>
  );
};

export default FAQPage;