import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import Layout from '../../../components/Layout'

export default function FionaMbabaziProfile() {
  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            {/* Image Container */}
            <div className="relative">
              <StaticImage
                src="../../../assets/images/team/Fiona.png"
                alt="Fiona Mbabazi"
                className="w-full"
                imgClassName="w-full h-auto"
                placeholder="blurred"
                layout="constrained"
                objectFit="contain"
                quality={95}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Fiona Mbabazi
                </h1>
                <p className="text-xl md:text-2xl text-[#0B9A9E] font-medium mb-6">
                  Board Member
                </p>
                <div className="w-24 h-1.5 bg-[#F6911E]"></div>
              </motion.div>
            </div>
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
              transition={{ duration: 0.8 }}
              className="prose lg:prose-lg"
            >
              <p>
                Fiona Mbabazi is an experienced media and communication professional with expert skills in event management, motivational speaking, journalism, media relations, radio, and television.
              </p>
              <p>
                Fiona is a Board Member of the LéO Africa Institute and brings her extensive media and communications expertise to help guide the organization's outreach and engagement strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
