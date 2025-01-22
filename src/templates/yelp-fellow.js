import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Layout from '../components/Layout';

// Function to get the correct image path with fallback extensions
const getImagePath = (imageName) => {
  // Try webp first, then jpg, then png
  const extensions = ['.webp', '.jpg', '.png'];
  for (const ext of extensions) {
    try {
      // Try to require the image with current extension
      require(`../images/fellows/${imageName}${ext}`);
      return `/images/fellows/${imageName}${ext}`;
    } catch (e) {
      continue;
    }
  }
  // Return a default image path if none found
  return '/images/default-fellow.jpg';
};

const YelpFellow = ({ pageContext: fellow }) => {
  // Split bio into paragraphs for better readability
  const renderBio = (bio) => {
    if (!bio) return null;
    return bio.split(/\n\n|\. (?=[A-Z])/).map((paragraph, index) => (
      <p key={index} className="text-gray-700 leading-relaxed mb-4">
        {paragraph.trim()}{paragraph.endsWith('.') ? '' : '.'}
      </p>
    ));
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        {/* Breadcrumb navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-gray-500 text-sm">
            <Link to="/yelp/fellows" className="hover:text-blue-600 transition-colors">
              ← Back to Fellows
            </Link>
          </nav>
        </div>

        {/* Hero section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Profile image */}
            <div className="w-full md:w-1/3">
              <img
                src={getImagePath(fellow.image)}
                alt={fellow.name}
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/default-fellow.jpg';
                }}
              />
            </div>

            {/* Fellow info */}
            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{fellow.name}</h1>
                <p className="text-xl text-gray-600 mb-2">{fellow.role}</p>
                {fellow.organization && (
                  <p className="text-lg text-gray-600 mb-4">{fellow.organization}</p>
                )}
                <p className="text-gray-500 mb-4">Class of {fellow.class}</p>

                {/* Social links */}
                {fellow.social && (
                  <div className="flex gap-4 mb-6">
                    {fellow.social.linkedin && (
                      <a
                        href={fellow.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    )}
                    {fellow.social.twitter && (
                      <a
                        href={fellow.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 transition-colors"
                      >
                        <FaTwitter size={24} />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-lg max-w-none">
            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biography</h2>
              {renderBio(fellow.bio)}
            </div>

            {/* Achievements */}
            {fellow.achievements && fellow.achievements.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Achievements</h2>
                <ul className="list-disc pl-6">
                  {fellow.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-700 mb-2">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default YelpFellow; 