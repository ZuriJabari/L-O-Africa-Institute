import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import Layout from '../../../components/Layout'

export default function MagnusProfile() {
  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80">
          <StaticImage
            src="../../../assets/images/team/Magnus.png"
            alt="Magnus Mchnguzi"
            className="w-full h-full object-cover"
            imgClassName="w-full h-full object-cover"
            placeholder="blurred"
            layout="fullWidth"
            quality={95}
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Magnus Mchnguzi
              </h1>
              <p className="text-2xl text-[#0B9A9E] font-medium mb-6">
                Co-Founder & Chairman
              </p>
              <div className="w-24 h-1.5 bg-[#F6911E]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8">About Magnus</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Magnus Mchnguzi is a distinguished leader with extensive experience in organizational development and strategic leadership. As the Co-Founder and Chairman of the Leadership Enlightenment Organization (LEO), he drives innovation in governance and ethical leadership across East Africa.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With a passion for transformative leadership, Magnus has dedicated his career to developing and implementing innovative solutions that address complex organizational challenges. His approach combines strategic thinking with practical implementation, ensuring sustainable impact in the organizations he works with.
                </p>
              </div>
            </motion.div>

            {/* Key Focus Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8">Key Focus Areas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-[#0B9A9E]">Strategic Leadership</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Organizational Development</li>
                    <li>Change Management</li>
                    <li>Leadership Development</li>
                    <li>Strategic Planning</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-[#0B9A9E]">Innovation & Impact</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>Ethical Leadership</li>
                    <li>Governance Systems</li>
                    <li>Social Innovation</li>
                    <li>Capacity Building</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Vision for LEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8">Vision for LEO</h2>
              <div className="bg-gradient-to-r from-[#0B9A9E]/10 to-[#F6911E]/10 p-8 rounded-xl">
                <p className="text-gray-700 leading-relaxed italic text-lg">
                  "Our vision at LEO is to create a new generation of ethical leaders who will drive positive change across Africa. We believe in the power of transformative leadership to create sustainable impact and build the Africa we want to see."
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Connect with Magnus</h2>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/magnus-mchnguzi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0B9A9E] text-white px-6 py-3 rounded-lg hover:bg-[#0B9A9E]/90 transition-colors"
                >
                  LinkedIn Profile
                </a>
                <a
                  href="mailto:magnus@leo.org"
                  className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Contact Magnus
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
