import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import YelpLayout from '../components/layout/YelpLayout';

const YelpFellow = ({ pageContext }) => {
  const fellow = pageContext;

  // Function to get the correct image path with extension
  const getImagePath = (basePath) => {
    if (!basePath) return '/images/fellows/default-fellow.jpg';
    // Try different extensions in order of preference
    const extensions = ['.jpg', '.png', '.webp'];
    const imageName = basePath.split('/').pop();
    return `/images/fellows/${imageName}${extensions[0]}`;
  };

  return (
    <YelpLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#2A6A76] to-[#87181A] py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center space-x-3 text-sm text-white/80 mb-12">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/60">/</span>
              <Link to="/yelp" className="hover:text-white transition-colors">YELP</Link>
              <span className="text-white/60">/</span>
              <Link to="/yelp/fellows" className="hover:text-white transition-colors">Fellows</Link>
              <span className="text-white/60">/</span>
              <span className="text-white">{fellow.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
              >
                <img
                  src={getImagePath(fellow.image)}
                  alt={fellow.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const currentSrc = e.target.src;
                    if (currentSrc.endsWith('.jpg')) {
                      e.target.src = currentSrc.replace('.jpg', '.png');
                    } else if (currentSrc.endsWith('.png')) {
                      e.target.src = currentSrc.replace('.png', '.webp');
                    } else {
                      // If all extensions fail or image doesn't exist, use default
                      e.target.src = '/images/fellows/default-fellow.jpg';
                    }
                  }}
                />
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  {fellow.name}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-2"
                >
                  <p className="text-xl text-white/90">{fellow.role}</p>
                  <p className="text-lg text-white/80">{fellow.organization}</p>
                  <p className="text-lg text-white/80">Class of {fellow.class}</p>
                </motion.div>
                {fellow.social && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center md:justify-start space-x-4 mt-6"
                  >
                    {fellow.social.linkedin && (
                      <a
                        href={fellow.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#0A66C2] transition-colors"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    )}
                    {fellow.social.twitter && (
                      <a
                        href={fellow.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#1DA1F2] transition-colors"
                      >
                        <FaTwitter size={24} />
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
              <div className="prose prose-lg max-w-none">
                {!fellow.bio ? (
                  <p className="text-gray-700 leading-relaxed mb-4">No biography available.</p>
                ) : typeof fellow.bio === 'string' ? (
                  fellow.bio.split(/\n\n|\. (?=[A-Z])/).map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph.trim()}{paragraph.endsWith('.') ? '' : '.'}
                    </p>
                  ))
                ) : Array.isArray(fellow.bio) ? (
                  fellow.bio.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-700 leading-relaxed mb-4">{String(fellow.bio)}</p>
                )}
              </div>

              {fellow.expertise && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {Array.isArray(fellow.expertise) ? (
                      fellow.expertise.map((item, index) => (
                        <li key={index} className="leading-relaxed">{item}</li>
                      ))
                    ) : (
                      <li className="leading-relaxed">{fellow.expertise}</li>
                    )}
                  </ul>
                </div>
              )}

              {fellow.achievements && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {Array.isArray(fellow.achievements) ? (
                      fellow.achievements.map((achievement, index) => (
                        <li key={index} className="leading-relaxed">{achievement}</li>
                      ))
                    ) : (
                      <li className="leading-relaxed">{fellow.achievements}</li>
                    )}
                  </ul>
                </div>
              )}

              {fellow.quote && (
                <div className="mt-12">
                  <blockquote className="text-xl italic text-gray-700 border-l-4 border-[#2A6A76] pl-4">
                    "{fellow.quote}"
                  </blockquote>
                </div>
              )}
            </motion.div>

            {/* Back to Fellows Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Link
                to="/yelp/fellows"
                className="inline-flex items-center text-[#2A6A76] hover:text-[#87181A] transition-colors"
              >
                <span className="mr-2">←</span>
                Back to All Fellows
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </YelpLayout>
  );
}

export default YelpFellow; 