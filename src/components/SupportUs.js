// SupportUs.js
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import graduationImage from "../assets/images/graduation.jpg";
import SubscriptionForm from "./SubscriptionForm";

const BRAND_COLORS = {
  teal: '#00babc',
  orange: '#f89420', 
  gray: '#545456',
  burgundy: '#9a1a2f'
};

const SupportUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[65vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${graduationImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl font-bold mb-4"
            >
              Partner With Us
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl max-w-3xl"
            >
              Join us in our mission to empower and develop the next generation of Africa's thought leaders
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-lg text-gray-600 space-y-6"
          >
            <p>
              From its inception, the LéO Africa Institute has enjoyed the support of individuals who have made generous financial contributions and volunteered their valuable time towards supporting Institute programs.
            </p>
            <p>
              We have also worked with great organizations that share our firm conviction in the opportunity Africa presents if we build a critical mass of ethical and values-based leaders to be in charge of managing society.
            </p>
            <p>
              You can join this growing community of Africans and friends of Africa by making your contribution to strengthening the institute's investment in building a community of leaders who are driving positive change in Africa.
            </p>
          </motion.div>

          {/* Support Options */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Champion Network Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="font-playfair text-2xl font-bold mb-4 text-[#00babc]">
                Join Africa Champion Network
              </h3>
              <p className="font-inter text-gray-600 mb-6">
                Connect with like-minded leaders and contribute to positive change across Africa.
              </p>
              <button className="font-inter flex items-center gap-2 text-[#00babc] font-semibold hover:gap-4 transition-all">
                Sign up now <FiArrowRight />
              </button>
            </motion.div>

            {/* Donation Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="font-playfair text-2xl font-bold mb-4 text-[#f89420]">
                Make a Donation
              </h3>
              <ul className="font-inter space-y-2 text-gray-600 mb-6">
                <li>• Individual Giving</li>
                <li>• Corporate or Institutional Giving</li>
                <li>• Legacy Giving</li>
              </ul>
              <button className="font-inter flex items-center gap-2 text-[#f89420] font-semibold hover:gap-4 transition-all">
                Support our work <FiArrowRight />
              </button>
            </motion.div>
          </motion.div>

          {/* Subscription Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-[#00babc] to-[#008486] rounded-xl p-8 md:p-12">
              <h2 className="font-playfair text-3xl font-bold text-white mb-8 text-center">
                Join Our Community
              </h2>
              <SubscriptionForm />
            </div>
          </motion.div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="font-playfair text-2xl font-bold mb-6 text-[#9a1a2f]">
              Partner with us on our Initiatives
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="font-inter px-8 py-4 bg-gradient-to-r from-[#00babc] to-[#f89420] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Explore Partnership Opportunities
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportUs;