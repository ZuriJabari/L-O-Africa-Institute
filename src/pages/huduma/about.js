import React from 'react';
import { motion } from 'framer-motion';
import HudumaLayout from '../../components/layout/HudumaLayout';
import AboutHeroImage from '../../assets/images/huduma-about.jpg';

const AboutPage = () => {
  return (
    <HudumaLayout>
      {/* Hero Section */}
      <div 
        className="relative min-h-[60vh] w-screen bg-center bg-cover bg-no-repeat flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${AboutHeroImage})` 
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-6xl font-bold mb-6 text-white tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Huduma
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Building a community of ethical, effective, and enlightened leaders in Uganda's public service.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
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
              whileHover={{ x: 5 }}
            >
              Our Mission
            </motion.h2>
            <div className="space-y-6 text-gray-700">
              <motion.p className="text-lg leading-relaxed" whileHover={{ x: 10 }}>
                The Huduma Fellowship is a leadership development program that identifies and nurtures emerging leaders in Uganda's public and civic sectors. Through a combination of seminars, workshops, mentorship, and practical projects, fellows develop the skills, knowledge, and networks needed to become transformative leaders.
              </motion.p>
              <motion.p className="text-lg leading-relaxed" whileHover={{ x: 10 }}>
                Our mission is to build a community of ethical, effective, and enlightened leaders who will drive positive change in public service delivery.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-[#2A6A76]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Program Components
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Leadership Development",
                description: "Monthly seminars and workshops focused on public service leadership, ethics, and governance."
              },
              {
                title: "Mentorship",
                description: "One-on-one guidance from experienced public service leaders and policy makers."
              },
              {
                title: "Networking",
                description: "Building connections with fellow champions and leaders across sectors."
              },
              {
                title: "Study Tours",
                description: "Exposure visits to successful public service initiatives and institutions."
              },
              {
                title: "Project Work",
                description: "Hands-on experience through practical projects that address real challenges."
              },
              {
                title: "Knowledge Exchange",
                description: "Sharing experiences and best practices among fellows and alumni."
              }
            ].map((component, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.h3 
                  className="text-xl font-semibold mb-4 text-[#87181A]"
                  whileHover={{ x: 5 }}
                >
                  {component.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  whileHover={{ x: 5 }}
                >
                  {component.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-8 text-[#2A6A76]"
              whileHover={{ x: 5 }}
            >
              Our Impact
            </motion.h2>
            <div className="space-y-6 text-gray-700">
              <motion.p className="text-lg leading-relaxed" whileHover={{ x: 10 }}>
                Since its inception, the Huduma Fellowship has trained and mentored outstanding champions who have gone on to make significant contributions to public service delivery in Uganda. Our alumni are driving innovation and excellence across various sectors of government and civil society.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <span className="block text-4xl font-bold text-[#87181A] mb-2">50+</span>
                  <span className="text-gray-600">Champions Trained</span>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <span className="block text-4xl font-bold text-[#87181A] mb-2">30+</span>
                  <span className="text-gray-600">Institutions Impacted</span>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <span className="block text-4xl font-bold text-[#87181A] mb-2">100%</span>
                  <span className="text-gray-600">Success Rate</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </HudumaLayout>
  );
};

export default AboutPage; 