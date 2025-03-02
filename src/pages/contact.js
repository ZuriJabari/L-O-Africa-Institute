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
      


      {/* Support Us Section */}
      <SupportUs />
    </Layout>
  )
}

export default ContactPage
