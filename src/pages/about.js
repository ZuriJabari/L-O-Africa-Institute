import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FaHandshake, FaLightbulb, FaUsers, FaGlobe, FaStar, FaHeart, FaRocket, FaQuoteLeft, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGraduationCap, FaBookReader } from 'react-icons/fa';
import SubscriptionForm from '../components/SubscriptionForm';
import { Link } from 'gatsby';
import { SectionTitle, BodyLarge, SubsectionTitle, BodyText } from '../components/Typography';
import { OurPartners } from '../components/about/OurPartners';

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
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <StaticImage
            src="../assets/images/about-hero.jpg"
            alt="About LéO Africa Institute"
            className="w-full h-full"
            imgClassName="object-cover"
            placeholder="blurred"
            layout="fullWidth"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl">
            <motion.h1 
              className="font-playfair text-6xl font-bold text-white mb-8"
              {...fadeIn}
            >
              Empowering Africa's Next Generation of Leaders
            </motion.h1>
            <motion.p 
              className="font-inter text-xl leading-relaxed text-white/90 mb-8 max-w-2xl"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Since 2012, we've been nurturing ethical leadership and fostering thought-provoking dialogue to shape Africa's future. Through our innovative programs and collaborative networks, we're building a community of visionary leaders committed to Africa's transformation.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="#join-our-community" 
                className="bg-[#F6911E] hover:bg-[#F6911E]/90 text-white px-8 py-3 rounded-lg font-inter font-semibold transition-colors"
              >
                Join Our Community
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-[#F6911E] mb-12"></div>
            
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Column - Story Content */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-2xl shadow-sm relative">
                    <div className="absolute -right-4 top-8 w-8 h-8 bg-[#0B9A9E] rounded-full flex items-center justify-center">
                      <FaQuoteLeft className="text-white w-4 h-4" />
                    </div>
                    <p className="font-inter text-xl text-gray-600 leading-relaxed mb-12">
                      The LéO Africa Institute was born out of a desire to nurture a new generation of ethical, visionary, and transformative leaders across Africa. Our journey began with a simple yet powerful idea: that through mentorship, dialogue, and collaboration, we could inspire positive change across the continent.
                    </p>
                    <div className="border-l-4 border-[#F6911E] pl-6">
                      <blockquote className="font-inter text-lg italic text-gray-600 mb-4">
                        "Through our fellowship programs, events and other activities, we foster quality networks among Africa's young and emerging leaders. We are working towards building a critical mass of ethical and values-based leaders."
                      </blockquote>
                      <footer className="font-inter font-semibold text-[#0B9A9E]">
                        – Awel Uwihanganye, Co-founder & Program Lead
                      </footer>
                    </div>
                  </div>

                  <div className="bg-[#0B9A9E]/5 p-8 rounded-2xl relative">
                    <div className="absolute -right-16 top-8 w-8 h-8 bg-[#F6911E] rounded-full flex items-center justify-center">
                      <FaLightbulb className="text-white w-4 h-4" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold mb-4 text-[#0B9A9E]">Our Foundation</h3>
                    <p className="font-inter text-gray-600 mb-6">
                      Established in 2012, the LéO Africa Institute (Swahili for Today's Africa) emerged from a vision shared by two friends, Awel Uwihanganye and Magnus Mchunguzi. Their passion? Harnessing Africa's immense potential through ethical & values-based leadership.
                    </p>
                    <p className="font-inter text-gray-600">
                      Through our fellowship programs, events, and collaborative initiatives, we foster meaningful connections among Africa's emerging leaders. Our focus on ethical leadership and values-based decision-making creates a foundation for sustainable change and innovation across the continent.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-sm relative">
                    <div className="absolute -right-16 top-8 w-8 h-8 bg-[#0B9A9E] rounded-full flex items-center justify-center">
                      <FaRocket className="text-white w-4 h-4" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold mb-4 text-[#0B9A9E]">Looking Forward</h3>
                    <p className="font-inter text-gray-600">
                      As we continue to grow, our commitment to fostering ethical leadership remains unwavering. We envision a future where African leaders are at the forefront of global innovation, social justice, and sustainable development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Timeline */}
              <div className="lg:col-span-2 pl-8">
                <div className="relative">
                  <div className="absolute -right-3 top-0 w-px h-full bg-gradient-to-b from-[#0B9A9E] to-[#F6911E]"></div>
                  <div className="space-y-16">
                    <div className="relative">
                      <div className="absolute -right-6 top-0 w-6 h-6 bg-[#0B9A9E] rounded-full border-4 border-white"></div>
                      <div className="pr-12">
                        <span className="font-playfair text-3xl font-bold text-[#0B9A9E] block mb-2">2012</span>
                        <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">The Beginning</h3>
                        <p className="font-inter text-gray-600">Founded with a vision to nurture ethical leadership in Africa</p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -right-6 top-0 w-6 h-6 bg-[#0B9A9E] rounded-full border-4 border-white"></div>
                      <div className="pr-12">
                        <span className="font-playfair text-3xl font-bold text-[#0B9A9E] block mb-2">2015</span>
                        <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">YELP Launch</h3>
                        <p className="font-inter text-gray-600">Launched the Young Emerging Leaders Project, our flagship leadership program</p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -right-6 top-0 w-6 h-6 bg-[#0B9A9E] rounded-full border-4 border-white"></div>
                      <div className="pr-12">
                        <span className="font-playfair text-3xl font-bold text-[#0B9A9E] block mb-2">2018</span>
                        <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">Annual Leaders Gathering</h3>
                        <p className="font-inter text-gray-600">Established our premier event bringing together leaders from across Africa</p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -right-6 top-0 w-6 h-6 bg-[#F6911E] rounded-full border-4 border-white"></div>
                      <div className="pr-12">
                        <span className="font-playfair text-3xl font-bold text-[#F6911E] block mb-2">2023</span>
                        <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">Regional Expansion</h3>
                        <p className="font-inter text-gray-600">Expanded our reach and impact across East Africa with new partnerships</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <StaticImage
            src="../assets/images/about-hero.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            placeholder="blurred"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/95 to-[#000000]/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto mb-16"
            {...fadeIn}
          >
            <h2 className="font-playfair text-5xl font-bold mb-6 text-white">Our Purpose</h2>
            <div className="w-24 h-1 bg-[#F6911E]"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="relative group"
              {...fadeIn}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F6911E] to-[#F6911E]/80 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2"></div>
              <div className="relative bg-white p-12 rounded-2xl transform -rotate-1 transition-transform group-hover:-rotate-2">
                <h3 className="font-playfair text-3xl font-bold mb-6 text-[#F6911E] flex items-center">
                  <span className="bg-[#F6911E] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4">V</span>
                  Our Vision
                </h3>
                <p className="font-inter text-xl leading-relaxed text-gray-700">
                  We envision an Africa where young leaders are empowered to drive positive change through innovative thinking and collaborative action. Our goal is to build a network of visionary leaders who will shape the continent's future through sustainable solutions and inclusive growth.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative group"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B9A9E] to-[#0B9A9E]/80 rounded-2xl transform -rotate-1 transition-transform group-hover:-rotate-2"></div>
              <div className="relative bg-white p-12 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2">
                <h3 className="font-playfair text-3xl font-bold mb-6 text-[#0B9A9E] flex items-center">
                  <span className="bg-[#0B9A9E] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4">M</span>
                  Our Mission
                </h3>
                <p className="font-inter text-xl leading-relaxed text-gray-700">
                  We are dedicated to creating platforms that enable young African leaders to engage meaningfully with key stakeholders in government, civil society, and the private sector. Our mission is to facilitate the exchange of ideas and development of solutions to pressing challenges facing our continent.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F6911E]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B9A9E]/20 rounded-full blur-3xl"></div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <SectionTitle>What We Do</SectionTitle>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
              <BodyLarge>
                Through our programs and initiatives, we empower Africa's next generation of leaders with the skills, networks, and opportunities they need to drive positive change.
              </BodyLarge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-[#0B9A9E]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaGraduationCap className="w-8 h-8 text-[#0B9A9E]" />
                </div>
                <SubsectionTitle className="mb-4">Leadership Programs</SubsectionTitle>
                <BodyText>
                  Our flagship YELP program and specialized training initiatives develop critical leadership skills and foster ethical decision-making.
                </BodyText>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-[#0B9A9E]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaUsers className="w-8 h-8 text-[#0B9A9E]" />
                </div>
                <SubsectionTitle className="mb-4">Networking Events</SubsectionTitle>
                <BodyText>
                  We create platforms for meaningful connections through our Annual Leaders Gathering, workshops, and regional meetups.
                </BodyText>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-[#0B9A9E]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaBookReader className="w-8 h-8 text-[#0B9A9E]" />
                </div>
                <SubsectionTitle className="mb-4">Knowledge Hub</SubsectionTitle>
                <BodyText>
                  Our publications, research, and digital resources provide insights and best practices in leadership and governance.
                </BodyText>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-[#0B9A9E]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaHandshake className="w-8 h-8 text-[#0B9A9E]" />
                </div>
                <SubsectionTitle className="mb-4">Partnerships</SubsectionTitle>
                <BodyText>
                  We collaborate with organizations across Africa and globally to expand opportunities for emerging leaders.
                </BodyText>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-[#0B9A9E]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaLightbulb className="w-8 h-8 text-[#0B9A9E]" />
                </div>
                <SubsectionTitle className="mb-4">Innovation Hub</SubsectionTitle>
                <BodyText>
                  We support and showcase innovative solutions to Africa's development challenges through our network.
                </BodyText>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-[#0B9A9E]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaGlobe className="w-8 h-8 text-[#0B9A9E]" />
                </div>
                <SubsectionTitle className="mb-4">Global Engagement</SubsectionTitle>
                <BodyText>
                  We facilitate international exchanges and dialogues to promote African leadership on the global stage.
                </BodyText>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Agaciro Philosophy Section */}
      <section className="py-24 bg-[#0B9A9E] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F6911E]/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeIn}
          >
            <h2 className="font-playfair text-5xl font-bold mb-8 text-white">Agaciro</h2>
            <p className="font-inter text-2xl leading-relaxed mb-8 text-white/90">
              Our guiding philosophy of dignity, self-worth, and identity shapes the African mindset for leadership and self-determination.
            </p>
            <div className="w-24 h-1 bg-[#F6911E]"></div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto mb-16"
            {...fadeIn}
          >
            <h2 className="font-playfair text-4xl font-bold mb-6">Strategic Pillars</h2>
            <p className="font-inter text-xl text-gray-600 max-w-2xl">
              Our focus areas for driving African Renaissance
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaStar />,
                title: "Ethical Leadership",
                description: "Building Character for Responsible Leadership"
              },
              {
                icon: <FaUsers />,
                title: "Population & Health",
                description: "Leveraging Demographics for Sustainability"
              },
              {
                icon: <FaHeart />,
                title: "Identity & Society",
                description: "Reclaiming African Narratives"
              },
              {
                icon: <FaGlobe />,
                title: "Climate Action",
                description: "Empowering Leaders in Climate Change"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow duration-300"
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0B9A9E]/10 text-[#0B9A9E] mb-6">
                  {React.cloneElement(pillar.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="font-playfair text-xl font-bold mb-4">
                  {pillar.title}
                </h3>
                <p className="font-inter text-gray-600">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              <footer className="font-inter font-semibold text-[#0B9A9E]">
                – Awel Uwihanganye, Co-founder & Program Lead
              </footer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto mb-16"
            {...fadeIn}
          >
            <h2 className="font-playfair text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="font-inter text-xl text-gray-600 max-w-2xl">
              The principles that guide our mission and shape our community
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaStar className="w-12 h-12" />,
                title: "Excellence",
                description: "We focus on producing the most engaging meetings and discussion sessions that meet the specific needs of our countries and communities, to ensure we make a lasting contribution to the development of our nations."
              },
              {
                icon: <FaHandshake className="w-12 h-12" />,
                title: "Respect, Integrity & Trust",
                description: "We are committed to fostering an environment of respect and trust in which the utmost value is placed on integrity."
              },
              {
                icon: <FaLightbulb className="w-12 h-12" />,
                title: "Innovation & Enterprise",
                description: "We are committed to providing resources and opportunities for personal and professional development and fostering a culture that encourages innovation."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
                {...fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0B9A9E]/10 text-[#0B9A9E] mb-6">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4">{value.title}</h3>
                <p className="font-inter text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <OurPartners />

      {/* Join Us Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B9A9E]/5 to-[#F6911E]/5 relative overflow-hidden" id="join-our-community">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B9A9E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F6911E]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto mb-16"
            {...fadeIn}
          >
            <h2 className="font-playfair text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mb-12">
              Join in the community of Friends & Champions in contributing to building the Africa We Want.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "For Individuals", href: "/join/individuals" },
              { title: "For Corporate", href: "/join/corporate" },
              { title: "For Media", href: "/join/media" },
              { title: "For Government", href: "/join/government" }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-playfair text-xl font-bold text-[#0B9A9E] group-hover:text-[#F6911E] transition-colors duration-300">
                  {item.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            {...fadeIn}
          >
            <h2 className="font-playfair text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-[#0B9A9E]">Visit Us</h3>
                <p className="font-inter text-lg text-gray-600">Plot 27, Bandali Rise, Bugolobi</p>
                <p className="font-inter text-lg text-gray-600">P.O. Box 1287, Kampala, Uganda</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-[#0B9A9E]">Contact Info</h3>
                <p className="font-inter text-lg text-gray-600">Phone: +256 393 277 588</p>
                <p className="font-inter text-lg text-gray-600">
                  <a href="mailto:info@leoafricainstitute.org" className="hover:text-[#0B9A9E] transition-colors">
                    info@leoafricainstitute.org
                  </a>
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-[#0B9A9E]">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://twitter.com/LeoAfricaInst" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0B9A9E] transition-colors">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/LeOAfricaInstitute" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0B9A9E] transition-colors">
                    <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/company/leo-africa-institute" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0B9A9E] transition-colors">
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/leoafricainst" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0B9A9E] transition-colors">
                    <FaInstagram className="w-6 h-6" />
                  </a>
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
