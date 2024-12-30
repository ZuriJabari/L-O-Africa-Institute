// components/about/profile/TeamMemberTemplate.js
import React from "react";
import { motion } from "framer-motion";
import Layout from "../../Layout";
import { Link } from "gatsby";
import { FiChevronRight } from "react-icons/fi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamMemberTemplate = ({ data }) => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <img 
              src={data.image} 
              alt={data.name}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              {data.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              {data.subtitle}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#00babc]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/about" className="text-gray-500 hover:text-[#00babc]">About</Link>
            <span className="text-gray-400">/</span>
            <Link to="/about/team" className="text-gray-500 hover:text-[#00babc]">Team</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#00babc]">{data.name}</span>
          </nav>
        </div>
      </div>

      {/* Bio Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg"
          >
            {data.bio?.map((paragraph, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 text-gray-700 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Social Links */}
          {(data.twitter || data.linkedin) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-4"
            >
              {data.twitter && (
                <a 
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-[#00babc] text-gray-600 hover:text-white transition-all duration-300"
                >
                  <FaTwitter size={20} />
                </a>
              )}
              {data.linkedin && (
                <a 
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-[#00babc] text-gray-600 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
            </motion.div>
          )}

          {/* Add Social Media Section */}
          {data.social && (Object.keys(data.social).length > 0) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-4 justify-center"
            >
              {data.social.twitter && (
                <a 
                  href={data.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-[#00babc] text-gray-600 hover:text-white transition-all duration-300"
                >
                  <FaTwitter size={20} />
                </a>
              )}
              {data.social.linkedin && (
                <a 
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-[#00babc] text-gray-600 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TeamMemberTemplate;