import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import Layout from '../../../components/Layout'

export default function CatherineroseProfile() {
  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative w-full bg-black">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            {/* Image Container */}
            <div className="relative">
              <StaticImage
                src="../../../assets/images/team/Catherinerose.png"
                alt="Catherinerose"
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
                  Catherinerose
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
                Working at the nexus of the future of work, innovation and gender, Catherinerose has more than 10 years of work experience in human capital, Learning & Development, Design Thinking and Entrepreneurship.
              </p>
              <p>
                She is Co-Founder of 10, an engineering venture working to close the technical skills gap for employers in Africa through project based, hands-on industry engineering and training. Prior to this she Co-Founded Tanzania's first privately funded innovation and technology hub called Kinu, which successfully ran between 2011 - 2017. The Kinu innovation space was formed with the mission of growing and accelerating the Tanzanian technology and social landscape through capacity building, and developing a culture of collaboration, innovation, entrepreneurship and co-creation.
              </p>
              <p>
                In 2017 and 2018, she was the Chair of the Rotary Dar Marathon. An initiative by eight Rotary Clubs in DSM to raise USD 1.5 million for the CCBRT health facility. Enabling them to provide increased, quality health care services for people with disabilities. Over 200 volunteers, hundreds of partners and over 30,000 people participated in the 2017 and 2018 Marathon.
              </p>
              <p>
                Catherinerose is a country expert for the World Mobile Summit Awards; a mentor for the East Africa Women's Feminist Leadership and Mentoring Initiative (a Global Fund for Women and Akili Dada program); she is the Founding Curator of the Dar es Salaam Global Shapers Hub, a WEF initiative. She is a board member of the Alliance Francaise Tanzania, Jambo Bukoba and the African Leadership Initiative East Africa Foundation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
