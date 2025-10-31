import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import { FiArrowRight, FiCalendar, FiMapPin, FiClock } from "react-icons/fi";
import { Link } from "gatsby";

const HarambeSymposium = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-gradient-to-br from-gray-900 via-[#0B9A9E] to-[#0B9A9E]/90">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F6911E]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#0B9A9E]/30 to-transparent"></div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm mb-6 border border-white/20">
                    <span className="w-2 h-2 bg-[#F6911E] rounded-full mr-2"></span>
                    Coming June 2025 • Kigali
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                  Harambe
                  <span className="block text-[#F6911E]">Symposium</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mb-12"
                >
                  <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                    The Harambe Symposium is built on the premise of the <span className="text-[#F6911E] font-semibold">"urgency"</span> of the need to strengthen a collaborative leadership culture for leaders in Africa, or those who aspire to lead, within organizations, institutions, governments, and communities.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-wrap gap-6"
                >
                  <a 
                    href="#register"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F6911E] text-white rounded-lg font-semibold transition-all transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#F6911E]/20"
                  >
                    Register Interest
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a 
                    href="#about"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 backdrop-blur-sm transition-all transform hover:translate-y-[-2px] border border-white/20"
                  >
                    Learn More
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-12 pt-12 border-t border-white/10"
                >
                  <div className="flex flex-wrap gap-8 text-white/60">
                    <div className="flex items-center gap-2">
                      <FiCalendar />
                      <span>June 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin />
                      <span>Kigali, Rwanda</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FiCalendar className="text-[#0B9A9E] text-xl" />
                <span>June 2025</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FiMapPin className="text-[#0B9A9E] text-xl" />
                <span>Kigali, Rwanda</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 max-w-2xl mx-auto"
            >
              <div className="bg-[#0B9A9E]/5 border border-[#0B9A9E]/10 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0B9A9E]/10 rounded-full mb-4">
                  <FiClock className="text-[#0B9A9E] text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">More Details Coming Soon</h3>
                <p className="text-gray-600">
                  Stay tuned for the full schedule, speaker lineup, and venue details. Sign up below to receive updates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#0B9A9E] font-semibold mb-4 block">About the Symposium</span>
                  <h2 className="text-4xl font-bold mb-8">Building a Collaborative Future</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      The Harambe Symposium is built on the premise of the <span className="font-semibold text-gray-900">"urgency"</span> of the need to strengthen a collaborative leadership culture for leaders in Africa, or those who aspire to lead, within organizations, institutions, governments, and communities.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Inspired by the Kinyarwanda concept of <span className="font-semibold text-gray-900">"Agaciro"</span>, which implores us as individuals, to find strength in collective identity, as Africans, and places integrity at the center of African identity.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <blockquote className="text-gray-600 italic mb-6 relative">
                  <div className="text-6xl text-[#0B9A9E]/20 absolute -top-4 -left-4">"</div>
                  <p className="text-lg leading-relaxed mb-4">
                    The Symposium agenda centers urgent need for collective responses when confronting individual and collective challenges or in pursuit of innovating and building effective systems to transform society in Africa.
                  </p>
                  <footer className="text-gray-900 font-semibold">
                    – Lucy Mbabazi
                    <span className="block text-sm text-gray-500 font-normal mt-1">
                      Board of Directors Chairperson Emerita
                    </span>
                  </footer>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Meaning Section */}
      <section className="py-24 bg-[#0B9A9E]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-[#0B9A9E]">🌍</span>
                Harambe Meaning
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A Swahili word borrowed from a long-standing Kenyan tradition, of self-help, that's part and parcel of the country's DNA, simply means <span className="font-semibold text-gray-900">"we all pull together"</span>. It is an unwritten law of generosity, regardless of class, ethnic group, gender, or religious background.
              </p>
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-[#0B9A9E]">Key Outcomes</h4>
                <p className="text-gray-600 leading-relaxed">
                  The key outcome is how we can learn new ways of addressing the structural and personal challenges in the process of building integrated, good societies, and ensuring inclusive social systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24">
        {/* Add registration form here */}
      </section>
    </Layout>
  );
};

export default HarambeSymposium;
