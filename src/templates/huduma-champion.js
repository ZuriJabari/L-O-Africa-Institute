import React from 'react';
import { Link, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import HudumaLayout from '../components/layout/HudumaLayout';

export const query = graphql`
  query($imageFilename: String!) {
    championImage: file(relativePath: { eq: $imageFilename }, sourceInstanceName: { eq: "images" }) {
      childImageSharp {
        gatsbyImageData(
          width: 512
          height: 512
          placeholder: BLURRED
          formats: [AUTO]
          quality: 90
          transformOptions: { fit: COVER }
        )
      }
    }
  }
`;

const HudumaChampion = ({ data, pageContext: champion }) => {
  const image = data.championImage ? getImage(data.championImage) : null;

  return (
    <HudumaLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#2A6A76] to-[#87181A] py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center space-x-3 text-sm text-white/80 mb-12">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/60">/</span>
              <Link to="/huduma" className="hover:text-white transition-colors">Huduma</Link>
              <span className="text-white/60">/</span>
              <Link to="/huduma/champions" className="hover:text-white transition-colors">Champions</Link>
              <span className="text-white/60">/</span>
              <span className="text-white">{champion.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
              >
                {image ? (
                  <GatsbyImage
                    image={image}
                    alt={champion.name}
                    className="w-full h-full"
                    imgClassName="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  {champion.name}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-2"
                >
                  <p className="text-xl text-white/90">{champion.role}</p>
                  {champion.organization && (
                    <p className="text-lg text-white/80">{champion.organization}</p>
                  )}
                  <p className="text-lg text-white/80">Class of {champion.class}</p>
                </motion.div>
                {champion.social && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center md:justify-start space-x-4 mt-6"
                  >
                    {champion.social.linkedin && (
                      <a
                        href={champion.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#0A66C2] transition-colors"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    )}
                    {champion.social.twitter && (
                      <a
                        href={champion.social.twitter}
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
                {typeof champion.bio === 'string' ? (
                  // Split long text into paragraphs based on double newlines or periods followed by spaces
                  champion.bio.split(/\n\n|\. (?=[A-Z])/).map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph.trim()}{paragraph.endsWith('.') ? '' : '.'}
                    </p>
                  ))
                ) : (
                  champion.bio.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))
                )}
              </div>

              {champion.achievements && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {Array.isArray(champion.achievements) ? (
                      champion.achievements.map((achievement, index) => (
                        <li key={index} className="leading-relaxed">{achievement}</li>
                      ))
                    ) : (
                      <li className="leading-relaxed">{champion.achievements}</li>
                    )}
                  </ul>
                </div>
              )}

              {champion.quote && (
                <div className="mt-12">
                  <blockquote className="text-xl italic text-gray-700 border-l-4 border-[#2A6A76] pl-4">
                    "{champion.quote}"
                  </blockquote>
                </div>
              )}
            </motion.div>

            {/* Back to Champions Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Link
                to="/huduma/champions"
                className="inline-flex items-center text-[#2A6A76] hover:text-[#87181A] transition-colors"
              >
                <span className="mr-2">←</span>
                Back to All Champions
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </HudumaLayout>
  );
};

export default HudumaChampion; 