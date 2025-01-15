import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import SupportUs from '../components/SupportUs'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const ContactPage = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-6 h-6" />,
      url: 'https://twitter.com/LeoAfricaInst',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-6 h-6" />,
      url: 'https://facebook.com/LeoAfricaInstitute',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://instagram.com/leoafricainstitute',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/company/leo-africa-institute',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#0B9A9E]/90 to-gray-900 py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F6911E]/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
              <p className="text-xl text-white/80 max-w-2xl">
                Have a question or want to get involved? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Email Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 mb-16"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0B9A9E]/10 rounded-full shrink-0">
                  <FaEnvelope className="w-8 h-8 text-[#0B9A9E]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">General Inquiries</h3>
                  <a href="mailto:communications@leoafricainstitute.org" className="text-[#0B9A9E] hover:underline text-lg">
                    communications@leoafricainstitute.org
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 bg-[#0B9A9E]/10 rounded-full shrink-0">
                  <FaEnvelope className="w-8 h-8 text-[#0B9A9E]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Leaders Gathering</h3>
                  <a href="mailto:alg@leoafricainstitute.org" className="text-[#0B9A9E] hover:underline text-lg">
                    alg@leoafricainstitute.org
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Our social media accounts are also a great way to reach us and support conversations online using the hashtag <span className="font-semibold text-[#0B9A9E]">#ALG2024</span>
              </p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gray-100 text-gray-600 rounded-full hover:bg-[#0B9A9E] hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Us Section */}
      <SupportUs />
    </Layout>
  )
}

export default ContactPage
