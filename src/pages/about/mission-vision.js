import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { FiArrowRight, FiTarget, FiEye, FiUsers, FiMessageCircle, FiGlobe, FiLink } from "react-icons/fi";
import hero3 from "../../assets/images/huduma-about.jpg";

const MissionVision = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[70vh] min-h-[600px]"
        >
          <img
            src={hero3}
            alt="LEO Institute Mission and Vision"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30"></div>
          
          <div className="relative h-full flex flex-col justify-center">
            <div className="max-w-screen-xl mx-auto px-4 text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="font-sans text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Our Mission <br className="hidden md:block" /><span className="text-[#F6911E]">& Vision</span>
                </h1>
                <p className="font-sans text-xl md:text-2xl leading-relaxed max-w-3xl">
                  Empowering Africa's next generation of leaders through collaboration, innovation, and meaningful dialogue.
                </p>
                <motion.nav 
                  className="breadcrumb mt-8 text-white/80 text-sm tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link to="/" className="hover:text-[#F6911E] transition-colors">Home</Link>
                  {" "}/{" "}
                  <Link to="/about" className="hover:text-[#F6911E] transition-colors">About</Link>
                  {" "}/ <span className="text-[#F6911E]">Mission & Vision</span>
                </motion.nav>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mission and Vision Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F6911E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F6911E] transition-colors duration-300">
                  <FiTarget className="w-6 h-6 text-[#F6911E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-sans text-sm font-medium text-[#F6911E] uppercase tracking-wider ml-4">Our Mission</h3>
              </div>
              <h2 className="font-sans text-3xl font-bold mb-6 leading-tight group-hover:text-[#F6911E] transition-colors duration-300">
                Fostering Leadership Excellence
              </h2>
              <p className="font-sans text-gray-600 leading-relaxed mb-8">
                We are dedicated to creating platforms that enable young African leaders to engage meaningfully with key stakeholders in government, civil society, and the private sector. Our mission is to facilitate the exchange of ideas and development of solutions to pressing challenges facing our continent.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-[#F6911E] hover:text-[#0B9A9E] transition-colors group"
              >
                Learn more 
                <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0B9A9E] transition-colors duration-300">
                  <FiEye className="w-6 h-6 text-[#0B9A9E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-sans text-sm font-medium text-[#0B9A9E] uppercase tracking-wider ml-4">Our Vision</h3>
              </div>
              <h2 className="font-sans text-3xl font-bold mb-6 leading-tight group-hover:text-[#0B9A9E] transition-colors duration-300">
                Shaping Africa's Future
              </h2>
              <p className="font-sans text-gray-600 leading-relaxed mb-8">
                We envision an Africa where young leaders are empowered to drive positive change through innovative thinking and collaborative action. Our goal is to build a network of visionary leaders who will shape the continent's future through sustainable solutions and inclusive growth.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-[#0B9A9E] hover:text-[#F6911E] transition-colors group"
              >
                Learn more 
                <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h3 className="font-sans text-sm font-medium text-[#F6911E] uppercase tracking-wider mb-4">What We Do</h3>
            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Building <span className="text-[#F6911E]">Tomorrow's</span> Leaders
            </h2>
            <p className="font-sans text-xl text-gray-600 leading-relaxed">
              Through strategic partnerships and innovative programs, we create opportunities for emerging leaders to develop their skills and make meaningful contributions to Africa's development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-[#F6911E]/5 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#F6911E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F6911E] transition-colors duration-300">
                <FiUsers className="w-6 h-6 text-[#F6911E] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-sans text-2xl font-bold mb-4 group-hover:text-[#F6911E] transition-colors duration-300">
                Public Platforms
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                We provide spaces for meaningful dialogue between emerging leaders and established stakeholders across sectors.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-[#0B9A9E]/5 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0B9A9E] transition-colors duration-300">
                <FiMessageCircle className="w-6 h-6 text-[#0B9A9E] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-sans text-2xl font-bold mb-4 group-hover:text-[#0B9A9E] transition-colors duration-300">
                Inter-generation Dialogue
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                We facilitate knowledge transfer and mentorship between experienced leaders and the next generation.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-[#F6911E]/5 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#F6911E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F6911E] transition-colors duration-300">
                <FiGlobe className="w-6 h-6 text-[#F6911E] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-sans text-2xl font-bold mb-4 group-hover:text-[#F6911E] transition-colors duration-300">
                Strategic Partnerships
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                We build mutually beneficial relationships with organizations at home and around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionVision;
