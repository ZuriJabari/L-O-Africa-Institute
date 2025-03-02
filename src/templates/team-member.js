import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaArrowLeft, FaQuoteLeft } from 'react-icons/fa';
import Layout from '../components/Layout';

// Import team photos
import Magnus from '../assets/images/team/Magnus.png';
import Awel from '../assets/images/team/Awel.jpg';
import Catherinerose from '../assets/images/team/Catherinerose.png';
import KevinLangley from '../assets/images/team/Kevin_Langley.png';
import William from '../assets/images/team/William.jpg';
import Conrad from '../assets/images/team/conrad.jpg';
import Fiona from '../assets/images/team/fiona.png';
import RosieLorie from '../assets/images/team/Rosie-Lorie.png';
import Nelson from '../assets/images/team/Nelson.png';
import Nanda from '../assets/images/team/Nanda.jpg';

// Image mapping
const images = {
  Magnus,
  Awel,
  Catherinerose,
  Kevin_Langley: KevinLangley,
  William,
  conrad: Conrad,
  fiona: Fiona,
  'Rosie-Lorie': RosieLorie,
  Nelson,
  Nanda
};

const TeamMember = ({ pageContext: { data } }) => {
  // Get the image based on the name
  const getImage = () => {
    const imageName = data.image.split('/').pop().split('.')[0];
    return images[imageName];
  };

  // Debug social media data
  console.log('Profile Data:', {
    name: data.name,
    social: data.social
  });

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#0B9A9E] to-[#F6911E]">
          {/* Breadcrumbs */}
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex items-center space-x-3 text-sm text-white/80">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span className="text-white/60">/</span>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
                <span className="text-white/60">/</span>
                <Link to="/about/team" className="hover:text-white transition-colors">Team</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">{data.name}</span>
              </nav>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center py-12">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 lg:pr-8"
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                  {data.name}
                </h1>
                <p className="text-2xl lg:text-3xl text-white/90 font-light mb-12">
                  {data.subtitle}
                </p>

                {data.quote && (
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-white/90 italic font-light mb-12 max-w-2xl"
                  >
                    "{data.quote}"
                  </motion.blockquote>
                )}
                
                {/* Social Links in Hero */}
                {data.social && (
                  <div className="flex gap-4">
                    {data.social.linkedin && (
                      <a
                        href={data.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all"
                      >
                        <FaLinkedin size={24} className="text-white" />
                      </a>
                    )}
                    {data.social.twitter && (
                      <a
                        href={data.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all"
                      >
                        <FaTwitter size={24} className="text-white" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative lg:h-[450px] h-[350px] max-w-[400px] justify-self-center w-full"
              >
                <div className="relative h-full rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-sm shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay"></div>
                  <img
                    src={getImage()}
                    alt={data.name}
                    className="w-full h-full object-cover object-top"
                    style={{
                      objectPosition: "50% 15%"
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative bg-white">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#0B9A9E]/5 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-[#F6911E]/5 to-transparent rounded-tr-full"></div>

          <div className="container mx-auto px-4 py-16 relative">
            <div className="max-w-4xl mx-auto">
              {/* Bio Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose prose-lg max-w-none"
              >
                {Array.isArray(data.bio) ? (
                  data.bio.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 text-lg leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {data.bio}
                  </p>
                )}
              </motion.div>

              {/* Back to Team Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16 text-center"
              >
                <Link
                  to="/about/team"
                  className="inline-flex items-center text-[#0B9A9E] hover:text-[#F6911E] transition-colors group"
                >
                  <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Team
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamMember; 