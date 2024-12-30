import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import HudumaLayout from '../../components/layout/HudumaLayout';
import HeroImage from '../../assets/images/huduma-landing.jpg';
import BgPattern from '../../assets/images/hudumabg.png';
import LeoColors from '../../assets/images/leo-colors.png';

const HudumaHome = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', success: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setMessage({ 
        text: 'Thank you for your interest! We\'ll be in touch soon.', 
        success: true 
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  return (
    <HudumaLayout>
      <div 
        className="h-[50px] w-screen bg-repeat-x bg-[length:50px_50px]"
        style={{ backgroundImage: `url(${BgPattern})` }}
      />
      
      <section 
        className="relative min-h-[85vh] w-screen bg-center bg-cover bg-no-repeat flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${HeroImage})` 
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-left">
            <motion.h1 
              className="text-7xl font-bold mb-6 text-white tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Huduma Fellowship
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/90 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              A transformative leadership program by <span className="text-white font-semibold">LéO Africa Institute</span> and <span className="text-white font-semibold">Konrad Adenauer Stiftung</span>, developing the next generation of outstanding civic and public sector leaders in Uganda.
            </motion.p>

            <motion.div 
              className="max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-2">Join the 2024 Cohort</h3>
                <p className="text-white/80 text-sm mb-6">Applications are now open for the next cohort of exceptional leaders.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-12 bg-black/20 text-white border border-white/20 rounded-lg px-4 focus:outline-none focus:border-white/40 focus:bg-black/30 placeholder-white/50 text-sm"
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-3 h-12 bg-[#2A6A76] text-white font-semibold rounded-lg flex items-center justify-center hover:bg-[#87181A] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? 'Submitting...' : 'Apply Now'}
                    </motion.button>
                  </div>
                  {message.text && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/90 text-sm"
                    >
                      {message.text}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-1/3 h-full opacity-20"
          style={{
            backgroundImage: `url(${LeoColors})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center right'
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-8 text-[#2A6A76]"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              About the Fellowship
            </motion.h2>
            <div className="space-y-6 text-gray-700">
              <motion.p 
                className="text-lg leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                The Huduma Fellowship is a 12-month leadership development program that identifies and nurtures emerging leaders in Uganda's public and civic sectors. The program aims to build a community of ethical, effective, and enlightened leaders who will drive positive change in public service delivery.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Through a combination of seminars, workshops, mentorship, and practical projects, fellows develop the skills, knowledge, and networks needed to become transformative leaders in their respective fields.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-[#2A6A76]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            Program Components
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Leadership Seminars",
                description: "Monthly seminars focusing on key aspects of public service leadership, ethics, and governance."
              },
              {
                title: "Mentorship",
                description: "One-on-one guidance from experienced public service leaders and policy makers."
              },
              {
                title: "Study Tours",
                description: "Exposure visits to key public institutions and successful public service initiatives."
              }
            ].map((component, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm relative overflow-hidden group"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#2A6A76]/5 to-[#87181A]/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3 
                  className="text-xl font-semibold mb-4 text-[#87181A] relative z-10"
                  animate={{ 
                    x: hoveredCard === index ? 10 : 0,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {component.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 relative z-10"
                  animate={{ 
                    x: hoveredCard === index ? 10 : 0,
                    transition: { type: "spring", stiffness: 300, delay: 0.1 }
                  }}
                >
                  {component.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-8 text-[#2A6A76]"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Who Should Apply
            </motion.h2>
            <motion.ul className="space-y-4 text-gray-700">
              {[
                "Young professionals aged 25-35 working in Uganda's public or civic sector",
                "Individuals with demonstrated leadership potential and commitment to public service",
                "Those with at least 2 years of work experience in government, civil society, or related fields",
                "Candidates who show strong ethical values and a vision for improving public service delivery"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span 
                    className="text-[#87181A] mr-3"
                    whileHover={{ scale: 1.2 }}
                  >
                    •
                  </motion.span>
                  <p>{item}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>
    </HudumaLayout>
  );
};

export default HudumaHome;