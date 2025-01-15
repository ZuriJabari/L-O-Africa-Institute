import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';
import { HeroTitle, SectionTitle, SubsectionTitle, BodyLarge, BodyText } from '../../components/Typography';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

const LeoTalks = () => {
  return (
    <Layout>
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="prefooter-gray absolute inset-0 opacity-40"></div>
        <div className="absolute inset-0">
          <StaticImage
            src="../../assets/images/leo-talks.jpg"
            alt="The LéO Africa Talks"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            placeholder="dominantColor"
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="max-w-4xl"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  The LéO Africa Talks
                </h2>
                <BodyLarge className="text-gray-200 text-xl mb-12 max-w-2xl">
                  A premier dialogue platform inspiring the next generation of African leaders through meaningful conversations and shared visions for Africa's future.
                </BodyLarge>
                <div className="flex flex-wrap gap-6">
                  <a 
                    href="#upcoming-talks"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-all transform hover:translate-y-[-2px] shadow-lg"
                  >
                    View Upcoming Talks
                    <FiArrowRight className="ml-2" />
                  </a>
                  <a 
                    href="#signup-form"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 backdrop-blur-sm transition-all transform hover:translate-y-[-2px]"
                  >
                    Join the Conversation
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-12 right-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white opacity-80">
            #AfricaTalks
          </h1>
        </motion.div>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>
      <div class="prefooter-gray"></div>

      {/* About the Platform Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                
                <SectionTitle className="text-3xl font-bold mb-6">
                  A Space for African Thought Leadership
                </SectionTitle>
                <BodyText className="text-gray-600 mb-8">
                  The LéO Africa Talks is a premier dialogue platform that brings together thought leaders, innovators, and change-makers to engage in meaningful conversations about Africa's future. Through these talks, we aim to inspire and empower the next generation of African leaders.
                </BodyText>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0B9A9E]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0B9A9E] text-2xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Identity, Politics & Society</h4>
                      <p className="text-gray-600">Reclaiming African Narratives and Fostering Social Cohesion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F6911E]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#F6911E] text-2xl">💡</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation & Leadership</h4>
                      <p className="text-gray-600">Shaping the Future through Transformative Leadership</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center items-center bg-gradient-to-br from-[#0B9A9E]/5 to-transparent p-12 rounded-3xl">
                <StaticImage
                  src="../../assets/images/Leo-talks-logo.png"
                  alt="LéO Talks Logo"
                  className="w-full max-w-md"
                  imgClassName="w-full h-full object-contain"
                  placeholder="blurred"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Talk Section */}
      <section id="upcoming-talks" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="mb-16">
              <SubsectionTitle className="text-[#0B9A9E] mb-4">
                Our Next Talk
              </SubsectionTitle>
              
              <BodyText className="text-gray-600 max-w-2xl">
                Join us for our next engaging dialogue on ethical leadership in Africa.
              </BodyText>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-24">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-full min-h-[400px] bg-[#0B9A9E]/5 flex items-center justify-center p-8">
                  <StaticImage
                    src="../../assets/images/Leo-talks-logo.png"
                    alt="LéO Talks Logo"
                    className="w-64"
                    imgClassName="w-full h-full object-contain"
                  />
                </div>
                <div className="p-12 lg:p-16">
                  <span className="inline-block px-4 py-2 bg-[#0B9A9E]/10 text-[#0B9A9E] rounded-full text-sm font-medium mb-6">
                    Ethical Leadership Series
                  </span>
                  <h3 className="text-3xl font-bold mb-6">
                    Building Character: The Foundation of Transformative Leadership
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-600">
                      <FiCalendar className="w-5 h-5 mr-3" />
                      <span>Thursday, February 15, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiClock className="w-5 h-5 mr-3" />
                      <span>2:00 PM - 4:00 PM EAT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="w-5 h-5 mr-3" />
                      <span>Hybrid Event (Kampala & Virtual)</span>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-all transform hover:translate-y-[-2px] shadow-lg">
                    Registration Opening Soon
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <SubsectionTitle className="text-[#0B9A9E] mb-4">
                Upcoming Schedule
              </SubsectionTitle>
              <SectionTitle className="text-3xl font-bold mb-6">
                Future Talks
              </SectionTitle>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Population & Health */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <span className="inline-block px-4 py-2 bg-[#F6911E]/10 text-[#F6911E] rounded-full text-sm font-medium mb-6">
                  Population & Health
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Youth Demographics: Harnessing Africa's Greatest Asset
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <FiCalendar className="w-5 h-5 mr-3" />
                    <span>Thursday, April 25, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-5 h-5 mr-3" />
                    <span>Hybrid Event</span>
                  </div>
                </div>
              </motion.div>

              {/* Identity & Society */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <span className="inline-block px-4 py-2 bg-[#0B9A9E]/10 text-[#0B9A9E] rounded-full text-sm font-medium mb-6">
                  Identity & Society
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Digital Identity: Shaping African Narratives in the Global Space
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <FiCalendar className="w-5 h-5 mr-3" />
                    <span>Thursday, July 11, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-5 h-5 mr-3" />
                    <span>Hybrid Event</span>
                  </div>
                </div>
              </motion.div>

              {/* Climate Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <span className="inline-block px-4 py-2 bg-[#0B9A9E]/10 text-[#0B9A9E] rounded-full text-sm font-medium mb-6">
                  Climate Action
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Green Innovation: African Solutions for Climate Resilience
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <FiCalendar className="w-5 h-5 mr-3" />
                    <span>Thursday, September 26, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-5 h-5 mr-3" />
                    <span>Hybrid Event</span>
                  </div>
                </div>
              </motion.div>

              {/* Ethical Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <span className="inline-block px-4 py-2 bg-[#F6911E]/10 text-[#F6911E] rounded-full text-sm font-medium mb-6">
                  Ethical Leadership
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Tech Ethics: Leading with Values in the Digital Era
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <FiCalendar className="w-5 h-5 mr-3" />
                    <span>Thursday, December 12, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-5 h-5 mr-3" />
                    <span>Hybrid Event</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sign Up Section with Background */}
      <section id="signup-form" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SubsectionTitle className="text-white/80 mb-4">
                Join Our Community
              </SubsectionTitle>
              <SectionTitle className="text-4xl font-bold text-white mb-6">
                Never Miss a Talk
              </SectionTitle>
              <BodyText className="text-white/90 mb-12">
                Be the first to know about upcoming talks and get exclusive access to our content library. Join our growing community of future African leaders.
              </BodyText>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                  />
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent bg-white"
                  >
                    <option value="">Select Your Country</option>
                    <option value="uganda">Uganda</option>
                    <option value="kenya">Kenya</option>
                    <option value="tanzania">Tanzania</option>
                    <option value="rwanda">Rwanda</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-all transform hover:translate-y-[-2px] shadow-lg"
                  >
                    Sign Up Now
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-500 text-center">
                  By signing up, you agree to receive updates about The LéO Africa Talks and other relevant events.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LeoTalks;
