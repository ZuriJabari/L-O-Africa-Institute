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

      {/* Become a Griot Section - Redesigned */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E]"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#0B9A9E]/10"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#F6911E]/10 to-transparent"></div>
              
              <div className="relative grid md:grid-cols-2 gap-0">
                {/* Left content column */}
                <div className="p-10 md:p-16 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                      Become a <span className="text-[#0B9A9E]">Griot</span>: Africa's Next Generation of <span className="text-[#F6911E]">Storytellers</span> and <span className="text-[#0B9A9E]">Leaders</span>
                    </h2>
                    
                    <div className="space-y-6 mb-10">
                      <BodyText className="text-gray-700 text-lg">
                        Join the "Griots Fellowship" and add your voice to shaping a narrative of Africa that
                        creates value, and dignity.
                      </BodyText>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#0B9A9E]/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-[#0B9A9E]">✦</span>
                        </div>
                        <BodyText className="text-gray-600">
                          As one of 20 selected emerging leaders, you'll develop powerful storytelling skills,
                          connect with mentors across sectors, and share your vision through the prestigious
                          LéO Africa Talks platform.
                        </BodyText>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#F6911E]/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-[#F6911E]">✦</span>
                        </div>
                        <BodyText className="text-gray-600">
                          This fellowship isn't just about personal growth—it's about reclaiming Africa's
                          storytelling heritage and shaping the continent's future. From business to public
                          service, and the creative industries, we're seeking passionate changemakers
                          committed to ethical leadership and authentic African discourse.
                        </BodyText>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl mb-10">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                          <span className="w-2 h-2 rounded-full bg-[#F6911E] mr-2"></span>
                          Applications open now
                        </h4>
                        <p className="text-gray-600 ml-4">
                          Transform your leadership journey and help write Africa's next chapter.
                        </p>
                      </div>
                      <div className="bg-white px-5 py-3 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-[#F6911E] font-semibold">Applications now closed.</p>
                      </div>
                    </div>
                    
                    <a 
                      href="https://docs.google.com/forms/d/1PFF6aDfFwrRNu0mLJpeiXqm61sLx-UmQ_Am1O5SPjG0/edit?pli=1"
                      className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#0B9A9E] to-[#0B9A9E]/90 text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:translate-y-[-2px]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply to the Griots Fellowship
                      <FiArrowRight className="ml-2" />
                    </a>
                  </motion.div>
                </div>
                
                {/* Right image/decorative column */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/5 to-[#F6911E]/5"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#0B9A9E]/5"></div>
                  
                  <div className="relative h-full flex items-center justify-center p-12">
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm p-10 w-full max-w-md relative">
                      <StaticImage
                        src="../../assets/images/Leo-talks-logo.png"
                        alt="Griots Fellowship"
                        className="w-full"
                        imgClassName="w-full h-auto object-contain"
                        placeholder="blurred"
                        formats={["auto", "webp", "avif"]}
                      />
                      
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#F6911E]/10 -z-10"></div>
                      <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#0B9A9E]/10 -z-10"></div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-[#F6911E]/20"></div>
                  <div className="absolute top-20 left-10 w-10 h-10 rounded-full bg-[#0B9A9E]/20"></div>
                  <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-[#0B9A9E]/30"></div>
                </div>
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
                About LéO Africa Talks
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
                    LéO Africa Talks is designed for selected speakers within the LéO Africa Institute
                    network, to share ideas and visions of their lives, and for Africa, and how they will
                    achieve it through their work and careers.
                  </BodyText>
                  
                  <BodyText className="text-gray-600">
                    Built around the West African culture of storytelling and storing of history, we refer
                    to the speakers at the LéO Africa Talks conference as "Griots", who can inspire and
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
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <StaticImage
                        src="../../assets/images/Awel.jpg"
                        alt="Awel Uwihanganye"
                        className="w-full h-full"
                        imgClassName="w-full h-full object-cover"
                        placeholder="blurred"
                        formats={["auto", "webp", "avif"]}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Awel Uwihanganye</p>
                      <p className="text-gray-600">Co-founder & Program Lead</p>
                    </div>
                  </div>
                </motion.div>
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
                    <p className="text-gray-600">LéO Africa Talks Conference</p>
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
    </Layout>
  );
};

export default LeoTalks;