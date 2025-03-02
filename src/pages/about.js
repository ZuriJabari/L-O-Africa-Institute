import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FaHandshake, FaLightbulb, FaUsers, FaGlobe, FaStar, FaHeart, FaRocket, FaQuoteLeft, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGraduationCap, FaBookReader, FaEnvelope } from 'react-icons/fa';
import SubscriptionForm from '../components/SubscriptionForm';
import { Link } from 'gatsby';
import { SectionTitle, BodyLarge, SubsectionTitle, BodyText } from '../components/Typography';
import { OurPartners } from '../components/about/OurPartners';
import BgGrey from '../assets/images/bg-grey.svg';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[93.6vh] min-h-[624px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <StaticImage
            src="../assets/images/about-hero.jpg"
            alt="About LéO Africa Institute"
            className="w-full h-full"
            imgClassName="object-cover"
            placeholder="blurred"
            formats={["jpg"]}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff03_1px,_transparent_1px)] bg-[length:32px_32px]"></div>
        </div>

        {/* Content Layer */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-[#F6911E]"></div>
                <span className="inline-block bg-[#F6911E]/10 border border-[#F6911E]/20 text-[#F6911E] px-6 py-2 text-sm font-semibold rounded-full">
                  Shaping Africa's Future
                </span>
              </div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-[1.2] tracking-tight mb-8">
                Empowering Africa's{' '}
                <span className="relative inline-block">
                  Next
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#F6911E]/30"></div>
                </span>{' '}
                Generation of Leaders
              </h1>
            </motion.div>

            <motion.p 
              className="font-inter text-xl md:text-2xl leading-relaxed text-white/80 mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Since 2012, we've been nurturing ethical leadership and fostering thought-provoking dialogue to shape Africa's future. Through our innovative programs and collaborative networks, we're building a community of visionary leaders committed to Africa's transformation.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#join-our-community" 
                className="group bg-[#F6911E] hover:bg-[#F6911E]/90 text-white px-10 py-5 rounded-xl font-inter font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2"
              >
                Join Our Community
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </a>
              <a 
                href="#our-programs" 
                className="group bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-inter font-semibold backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] border border-white/10 flex items-center gap-2"
              >
                Explore Programs
                <motion.span 
                  className="inline-block opacity-50 group-hover:opacity-100"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Transition */}
        <div className="absolute bottom-0 left-0 w-full">
          <div class="prefooter-gray">
            
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-[#F6911E] mb-12"></div>
            
            <div className="max-w-4xl mx-auto">
              {/* Story Content */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B9A9E]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F6911E]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  {/* Quote content */}
                  <div className="relative">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0B9A9E] to-[#0B9A9E]/80 rounded-full flex items-center justify-center shadow-lg">
                          <FaQuoteLeft className="text-white w-5 h-5" />
                        </div>
                      </div>
                      <blockquote className="text-2xl text-gray-700 leading-normal italic font-normal mb-8">
                        Through our fellowship programs, events and other activities, we foster quality networks among Africa's young and emerging leaders. We are working towards building a critical mass of ethical and values-based leaders.
                      </blockquote>
                    </div>
                    
                    {/* Author section */}
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <StaticImage
                          src="../assets/images/Awel.jpg"
                          alt="Awel Uwihanganye"
                          className="w-14 h-14"
                          imgClassName="object-cover rounded-full"
                          placeholder="blurred"
                          formats={["jpg"]}
                          quality={90}
                          layout="fullWidth"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#F6911E] to-[#0B9A9E]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Awel Uwihanganye</div>
                        <div className="text-sm text-gray-500">Co-founder & Program Lead</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0B9A9E]/5 p-8 rounded-2xl relative">
                  <div className="absolute -right-4 top-8 w-8 h-8 bg-[#F6911E] rounded-full flex items-center justify-center">
                    <FaLightbulb className="text-white w-4 h-4" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-[#0B9A9E]">Our Foundation</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Established in 2012, the LéO Africa Institute (Swahili for Today's Africa) emerged from a vision shared by two friends, Awel Uwihanganye and Magnus Mchunguzi. Their passion? Harnessing Africa's immense potential through ethical & values-based leadership.
                  </p>
                  <p className="text-lg text-gray-700">
                    Through our fellowship programs, events, and collaborative initiatives, we foster meaningful connections among Africa's emerging leaders. Our focus on ethical leadership and values-based decision-making creates a foundation for sustainable change and innovation across the continent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Why We Do What We Do */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <span className="text-sm font-inter uppercase tracking-wider text-[#F6911E] mb-4 block">Our Purpose</span>
              <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-16">
                Why We do What We DO!
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-16 h-16 text-[#0B9A9E]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <div className="relative pl-12 py-8">
                      {/* Subtle vertical line */}
                      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#F6911E] via-[#0B9A9E] to-transparent opacity-30"></div>
                      
                      {/* Quote content */}
                      <div className="space-y-6">
                        <p className="text-2xl text-gray-800 leading-normal italic font-normal">
                          We believe that ideas matter in moving our societies forward. We also strongly believe networks of thinkers and doers are valuable in advancing global collaborations and partnerships for development.
                        </p>
                      </div>
                      
                      {/* Author section */}
                      <div className="mt-8 flex items-center gap-6">
                        <div className="relative">
                          <StaticImage
                            src="../assets/images/Magnus.png"
                            alt="Magnus Mchnguzi"
                            className="w-14 h-14"
                            imgClassName="object-cover rounded-full"
                            placeholder="blurred"
                            formats={["png"]}
                            quality={90}
                            layout="fullWidth"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#F6911E] to-[#0B9A9E]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Magnus Mchnguzi</div>
                          <div className="text-sm text-gray-500">Co-Founder & Chairman</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Purpose Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#F6911E]/10 rounded-lg flex items-center justify-center mb-6">
                  <FaLightbulb className="w-6 h-6 text-[#F6911E]" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">Thought Leadership</h3>
                <p className="text-gray-600">Fostering innovative ideas and perspectives that drive African progress.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center mb-6">
                  <FaUsers className="w-6 h-6 text-[#0B9A9E]" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">Network Building</h3>
                <p className="text-gray-600">Creating meaningful connections that catalyze change across the continent.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#F6911E]/10 rounded-lg flex items-center justify-center mb-6">
                  <FaGlobe className="w-6 h-6 text-[#F6911E]" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
                <p className="text-gray-600">Advancing partnerships that drive sustainable development in Africa.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Agaciro Philosophy Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0B9A9E08_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0B9A9E]/5 rounded-full blur-[120px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#F6911E]/5 rounded-full blur-[120px] translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#F6911E]"></div>
                <span className="inline-block bg-[#F6911E]/10 border border-[#F6911E]/20 text-[#F6911E] px-6 py-2 text-sm font-semibold rounded-full">
                  Our Guiding Philosophy
                </span>
                <div className="w-12 h-[2px] bg-[#F6911E]"></div>
              </div>
              <h2 className="font-playfair text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                Agaciro
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The cornerstone of mindset shaping for leaders and self-determination for every African
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -left-8 -top-8 text-[#F6911E]/10 text-[180px] font-serif leading-none z-0">"</div>
                <div className="bg-white rounded-3xl p-12 shadow-xl relative z-10 border border-gray-100 overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute -right-24 -top-24 w-48 h-48 bg-[#F6911E]/5 rounded-full blur-2xl"></div>
                  <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-[#0B9A9E]/5 rounded-full blur-2xl"></div>
                  
                  {/* Quote Mark */}
                  <div className="absolute -left-2 top-0 w-24 h-24">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F6911E] to-[#0B9A9E] rounded-br-3xl opacity-10"></div>
                      <div className="absolute bottom-4 right-4 text-[#F6911E] text-5xl">
                        <FaQuoteLeft />
                      </div>
                    </div>
                  </div>

                  {/* Quote Content */}
                  <div className="relative z-10 ml-8">
                    <blockquote className="text-2xl text-gray-700 leading-relaxed mb-12">
                      <p className="italic">
                        Underpinning the work we do is the principle of{' '}
                        <span className="text-[#F6911E] font-semibold not-italic inline-flex items-center">
                          Agaciro
                          <span className="inline-block w-2 h-2 bg-[#F6911E] rounded-full ml-2"></span>
                        </span>{' '}
                        a Kinyarwanda word which espouses the sense of dignity, self-worth, and identity of the African as the cornerstone of mindset shaping for leaders, and self-determination for every African.
                      </p>
                    </blockquote>

                    {/* Author Section */}
                    <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F6911E] to-[#0B9A9E] p-[1px] rotate-3 transform hover:rotate-0 transition-transform duration-300">
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F6911E] to-[#0B9A9E] text-2xl font-bold">LéO</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#0B9A9E] font-medium mb-1">Our Guiding Principle</p>
                        <p className="text-sm text-gray-500">LéO Africa Institute</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Values */}
              <div className="space-y-6">
                {[
                  {
                    word: "Dignity",
                    description: "Recognizing and upholding the inherent worth of every African individual",
                    icon: "👑",
                    gradient: "from-[#F6911E] to-[#F6911E]/80"
                  },
                  {
                    word: "Self-Worth",
                    description: "Building confidence and pride in African identity and capabilities",
                    icon: "⭐",
                    gradient: "from-[#0B9A9E] to-[#0B9A9E]/80"
                  },
                  {
                    word: "Identity",
                    description: "Embracing and celebrating our rich cultural heritage and values",
                    icon: "🌍",
                    gradient: "from-[#F6911E] to-[#0B9A9E]"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.word}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-[1px] shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="bg-white rounded-2xl p-8">
                        <div className="flex items-start gap-6">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-3 group-hover:text-[#F6911E] transition-colors">
                              {item.word}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Add prefooter-gray with padding */}
        <div className="mt-32 relative">
          <div className="prefooter-gray"></div>
        </div>
      </section>

      {/* Challenge & Opportunity Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeIn}
          >
            <h2 className="font-playfair text-4xl font-bold mb-8">The Challenge & Opportunity</h2>
            <p className="font-inter text-xl text-gray-700 mb-8">
              With an estimated 30% of the world's mineral reserves and an unprecedented natural resource endowment in general, a home market of 1.2 billion and growing, exponential growth in infrastructure and technology, and with the youngest population in the world, Africa stands at the greatest point of opportunity.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <FaQuoteLeft className="text-[#F6911E] text-3xl mb-4" />
              <blockquote className="font-inter text-xl italic text-gray-700 mb-4">
                "We believe leadership can be the driver of growth and tackling the bottlenecks that hinder progress."
              </blockquote>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <StaticImage
                    src="../assets/images/Awel.jpg"
                    alt="Awel Uwihanganye"
                    className="w-14 h-14"
                    imgClassName="object-cover rounded-full"
                    placeholder="blurred"
                    formats={["jpg"]}
                    quality={90}
                    layout="fullWidth"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#F6911E] to-[#0B9A9E]"></div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Awel Uwihanganye</div>
                  <div className="text-sm text-gray-500">Co-founder & Program Lead</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gradient-to-br from-[#0B9A9E] to-[#0B9A9E]/90 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff08_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#F6911E]/10 rounded-full blur-[120px] translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-playfair text-4xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-lg text-white/80 mb-12">
              Join our community of African leaders and receive updates on programs and events
            </p>

            <div className="bg-white/10 backdrop-blur-md p-12 border border-white/10">
              <div className="max-w-5xl mx-auto">
                <SubscriptionForm />
                <div className="mt-8 flex items-center justify-center gap-12 text-sm text-white/60">
                  <div className="flex items-center gap-3">
                    <FaBookReader className="w-5 h-5" />
                    <span>Monthly Insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGraduationCap className="w-5 h-5" />
                    <span>Program Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
