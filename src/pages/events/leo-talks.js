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
                    href="#signup-form"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-all transform hover:translate-y-[-2px] shadow-lg"
                  >
                    Join the Conversation
                    <FiArrowRight className="ml-2" />
                  </a>
                  <a 
                    href="#signup-form"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 backdrop-blur-sm transition-all transform hover:translate-y-[-2px]"
                  >
                    Learn More
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
      <div className="prefooter-gray"></div>

      

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
      
      {/* Conversations Worth Having Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="mb-12 text-center">
              <SubsectionTitle className="text-[#0B9A9E] mb-4">
                About LEÓ Africa Talks
              </SubsectionTitle>
              <SectionTitle className="text-3xl font-bold mb-6">
                Conversations Worth Having
              </SectionTitle>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#0B9A9E]/10 flex items-center justify-center mb-6">
                    <span className="text-[#0B9A9E] text-3xl">🎙️</span>
                  </div>
                  <BodyText className="text-gray-600 mb-8">
                    LEÓ Africa Talks is designed for selected speakers within the LEÓ Africa Institute
                    network, to share ideas and visions of their lives, and for Africa, and how they will
                    achieve it through their work and careers.
                  </BodyText>
                  
                  <BodyText className="text-gray-600">
                    Built around the West African culture of storytelling and storing of history, we refer
                    to the speakers at the LEÓ Africa Talks conference as "Griots", who can inspire and
                    catalyze renewed attention on the importance of using narratives to build a
                    connection with identity, and how to build successful lives and thriving
                    communities.
                  </BodyText>
                </motion.div>
              </div>
              
              <div className="bg-[#0B9A9E]/5 p-8 rounded-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-5xl text-[#0B9A9E] opacity-40 mb-4">"</div>
                  <p className="text-xl text-gray-700 italic mb-6">
                    "Launching this platform is important in fulfilling our mission of establishing quality
                    dialogues, by allowing emerging leaders to inspire others, by articulating aspirations
                    for their countries and communities they live"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-1 bg-[#0B9A9E]/30"></div>
                    <p className="font-semibold text-gray-900 px-4">Awel Uwihanganye</p>
                  </div>
                  <p className="text-gray-600 ml-12">Co-founder & Program Lead</p>
                </motion.div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#0B9A9E] mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Become a Griot: Africa's Next Generation of Storytellers and Leaders
                    </h3>
                    
                    <BodyText className="text-gray-600 mb-6">
                      Join the "Griots Fellowship" and add your voice to shaping a narrative of Africa that
                      creates value, and dignity.
                    </BodyText>
                    
                    <BodyText className="text-gray-600 mb-6">
                      As one of 20 selected emerging leaders, you'll develop powerful storytelling skills,
                      connect with mentors across sectors, and share your vision through the prestigious
                      LEÓ Africa Talks platform.
                    </BodyText>
                    
                    <BodyText className="text-gray-600 mb-8">
                      This fellowship isn't just about personal growth—it's about reclaiming Africa's
                      storytelling heritage and shaping the continent's future. From business to public
                      service, and the creative industries, we're seeking passionate changemakers
                      committed to ethical leadership and authentic African discourse.
                    </BodyText>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Applications open now</h4>
                        <p className="text-gray-600">
                          Transform your leadership journey and help write Africa's next chapter.
                        </p>
                      </div>
                      <div className="bg-[#0B9A9E]/10 px-4 py-3 rounded-lg">
                        <p className="text-[#0B9A9E] font-semibold">Deadline: 15th April 2025</p>
                      </div>
                    </div>
                    
                    <a 
                      href="https://docs.google.com/forms/d/1PFF6aDfFwrRNu0mLJpeiXqm61sLx-UmQ_Am1O5SPjG0/edit?pli=1"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-all transform hover:translate-y-[-2px] shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply to the Griots Fellowship
                      <FiArrowRight className="ml-2" />
                    </a>
                  </motion.div>
                </div>
                
                <div className="hidden md:block p-6 rounded-xl bg-gradient-to-br from-[#0B9A9E]/5 to-transparent">
                  <StaticImage
                    src="../../assets/images/Leo-talks-logo.png"
                    alt="Griots Fellowship"
                    className="w-full max-w-sm mx-auto"
                    imgClassName="w-full h-full object-contain"
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                  />
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B9A9E]/10 flex items-center justify-center flex-shrink-0">
                    <FiCalendar className="text-[#0B9A9E] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Event</h4>
                    <p className="text-gray-600">LEÓ Africa Talks Conference</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F6911E]/10 flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-[#F6911E] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Date</h4>
                    <p className="text-gray-600">19th September 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B9A9E]/10 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-[#0B9A9E] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Venue</h4>
                    <p className="text-gray-600">To Be Confirmed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sign Up Section with Background */}
      <section id="signup-form" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/90 to-[#F6911E]/90"></div>
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                  Join The Movement
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Become Part of Our Community
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-xl">
                  Be the first to know about upcoming talks and get exclusive access to our content library. Join our growing community of future African leaders.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📣</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Early Announcements</h4>
                      <p className="text-white/80">Get notified about upcoming events before anyone else</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🔗</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Networking Opportunities</h4>
                      <p className="text-white/80">Connect with like-minded leaders across Africa</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl relative"
              >
                <div className="absolute -top-4 -right-4 bg-[#F6911E] text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg">
                  Free Membership
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Community</h3>
                
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent bg-white transition-all"
                    >
                      <option value="">Select your country</option>
                      <option value="uganda">Uganda</option>
                      <option value="kenya">Kenya</option>
                      <option value="tanzania">Tanzania</option>
                      <option value="rwanda">Rwanda</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#0B9A9E] to-[#0B9A9E]/80 text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:translate-y-[-2px] shadow-lg"
                  >
                    Join the Community
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    By signing up, you agree to receive updates about LEÓ Africa Talks and other relevant events.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LeoTalks;