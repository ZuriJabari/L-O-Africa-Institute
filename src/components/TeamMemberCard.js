import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const TeamMemberCard = ({ name, role, image, bio, linkedin, twitter, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative mb-6 group">
        <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {(linkedin || twitter) && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F6911E] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {twitter && (
              <a 
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F6911E] transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
            )}
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-[#0B9A9E] font-medium mb-4">{role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </motion.div>
  )
}

export default TeamMemberCard
