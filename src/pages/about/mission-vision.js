import React from 'react';
import Layout from '../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FaStar, FaShieldAlt, FaRocket, FaQuoteLeft } from 'react-icons/fa';

const MissionVisionPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <StaticImage
            src="../../assets/images/ALG24.jpg"
            alt="Our Mission & Vision"
            className="w-full h-full"
            imgClassName="object-cover"
            placeholder="dominantColor"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>

        {/* Content Layer */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#F6911E]"></div>
                <span className="inline-block bg-[#F6911E]/10 border border-[#F6911E]/20 text-[#F6911E] px-6 py-2 text-sm font-semibold rounded-full">
                  Our Purpose
                </span>
              </div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                What We DO!
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Shaping Africa's future through transformative leadership and meaningful dialogue
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Transition */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-24 w-full" style={{
            backgroundImage: `url('../../assets/images/bg-grey.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            backgroundSize: 'cover'
          }}></div>
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
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#F6911E]">
                    <StaticImage
                      src="../../assets/images/Awel1.jpg"
                      alt="Awel Uwihanganye"
                      className="w-full h-full object-cover"
                      placeholder="dominantColor"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <FaQuoteLeft className="text-[#F6911E] text-3xl mb-4" />
                  <blockquote className="font-inter text-xl italic text-gray-700 mb-4">
                    "We believe leadership can be the driver of growth and tackling the bottlenecks that hinder progress."
                  </blockquote>
                  <footer className="font-inter font-semibold text-[#0B9A9E]">
                    – Awel Uwihanganye, Co-founder & Program Lead
                  </footer>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Mission & Vision Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0B9A9E08_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-12 rounded-3xl relative overflow-hidden">
                  <div className="absolute -left-3 top-0 bottom-0 w-[6px]">
                    <div className="h-full w-full bg-gradient-to-b from-[#F6911E] to-[#F6911E]/30 rounded-full"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F6911E]/10 to-transparent rounded-bl-full -z-1"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <FaRocket className="text-[#F6911E] text-3xl" />
                    <span className="text-[#F6911E] text-lg font-bold tracking-wider uppercase">Our Mission</span>
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                    We are building an effective network of over <span className="font-semibold text-[#F6911E]">10,000 individuals</span> leading transformative change in critical areas of challenge and who amplify Africa's influence globally by 2035.
                  </p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <FaStar className="text-[#F6911E]" />
                    <span className="text-sm">Transforming Africa through leadership</span>
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-12 rounded-3xl relative overflow-hidden">
                  <div className="absolute -left-3 top-0 bottom-0 w-[6px]">
                    <div className="h-full w-full bg-gradient-to-b from-[#0B9A9E] to-[#0B9A9E]/30 rounded-full"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B9A9E]/10 to-transparent rounded-bl-full -z-1"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <FaShieldAlt className="text-[#0B9A9E] text-3xl" />
                    <span className="text-[#0B9A9E] text-lg font-bold tracking-wider uppercase">Our Vision</span>
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                    We are <span className="font-semibold text-[#0B9A9E]">inspiring, empowering, connecting</span> and enabling generations of ethical and values based leaders in Africa and beyond.
                  </p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <FaStar className="text-[#0B9A9E]" />
                    <span className="text-sm">Building a legacy of ethical leadership</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              {...fadeIn}
            >
              <span className="text-[#F6911E] text-sm font-semibold tracking-wider uppercase">Our Foundation</span>
              <h2 className="font-playfair text-4xl font-bold mt-4 mb-6">Core Values</h2>
              <div className="w-24 h-1 bg-[#F6911E] mx-auto"></div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaStar className="w-8 h-8" />,
                  title: "Excellence",
                  description: "We focus on producing the most engaging meetings and discussion sessions that meet the specific needs of our countries and communities, to ensure we make a lasting contribution to the development of our nations",
                  color: "from-[#F6911E]"
                },
                {
                  icon: <FaShieldAlt className="w-8 h-8" />,
                  title: "Respect, Integrity & Trust",
                  description: "We are committed to fostering an environment of respect and trust in which the utmost value is placed on integrity",
                  color: "from-[#0B9A9E]"
                },
                {
                  icon: <FaRocket className="w-8 h-8" />,
                  title: "Innovation & Enterprise",
                  description: "We are committed to providing resources and opportunities for personal and professional development and fostering a culture that encourages innovation",
                  color: "from-[#F6911E]"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} to-transparent/10 flex items-center justify-center mb-6 text-white`}>
                      {value.icon}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionVisionPage;
