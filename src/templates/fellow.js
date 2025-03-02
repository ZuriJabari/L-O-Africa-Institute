import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

const FellowTemplate = ({ data, pageContext }) => {
  const { fellow } = pageContext;
  const image = data?.file?.childImageSharp?.gatsbyImageData;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Link to="/yelp/fellows" className="inline-flex items-center text-[#0B9A9E] hover:text-[#097579] mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Fellows
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              {image ? (
                <GatsbyImage
                  image={image}
                  alt={fellow.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">
                    {fellow.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{fellow.name}</h1>
                <div className="mb-6">
                  <p className="text-[#0B9A9E] font-medium text-lg mb-2">{fellow.role}</p>
                  <p className="text-gray-600">{fellow.organization}</p>
                  <p className="text-gray-500">Class of {fellow.class}</p>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700">{fellow.bio}</p>
                </div>
                {fellow.social && (
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Connect with {fellow.name.split(' ')[0]}</h2>
                    <div className="flex space-x-4">
                      {fellow.social.linkedin && (
                        <a
                          href={fellow.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query($imagePath: String!) {
    file(relativePath: { eq: $imagePath }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          height: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          transformOptions: {
            fit: COVER
            cropFocus: CENTER
          }
        )
      }
    }
  }
`;

export default FellowTemplate; 