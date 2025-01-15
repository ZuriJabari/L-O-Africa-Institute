import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import contactHeroImage from '../assets/images/contact-hero.jpg';
import algImage from '../assets/images/alg-2022.jpg';
import mediaHeroImage from '../assets/images/media-hero.jpg';
import speakersHeroImage from '../assets/images/speakers-hero.jpg';

const imageOptions = [contactHeroImage, algImage, mediaHeroImage, speakersHeroImage];
const getRandomImage = () => imageOptions[Math.floor(Math.random() * imageOptions.length)];

const Insights = () => {
  return (
    <section 
      className="py-20 relative" 
      style={{ 
        backgroundColor: '#fff',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest Insights & Stories
          </h2>

          {/* More Stories Button */}
          <Link to="/news-publications" className="flex items-center justify-center bg-[#f6911e] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-[#89272a]">
            More Stories
            <span className="ml-2 animate-pulse">
              <FiArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

        {/* Main Articles Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* First Main Article */}
          <Link to="/news/transformative-role-of-young-african-leaders" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <GatsbyImage image={getImage(contactHeroImage)} alt="Article 1" className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-6 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">News</p>
              <h3 className="text-xl font-bold mt-2 leading-tight text-white transition-colors group-hover:text-gray-200">
                The Transformative Role of Young African Leaders
              </h3>
            </div>
          </Link>

          {/* Second Main Article */}
          <Link to="/publications/community-led-innovations-in-africa" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <GatsbyImage image={getImage(algImage)} alt="Article 2" className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-6 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">Publications</p>
              <h3 className="text-xl font-bold mt-2 leading-tight text-white transition-colors group-hover:text-gray-200">
                Community-Led Innovations in Africa
              </h3>
            </div>
          </Link>
        </div>

        {/* Secondary Articles Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* First Secondary Article */}
          <Link to="/video/building-resilience-through-leadership" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <GatsbyImage image={getImage(mediaHeroImage)} alt="Article 3" className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-4 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">Video</p>
              <h3 className="text-lg font-semibold mt-2 text-white transition-colors group-hover:text-gray-200">
                Building Resilience Through Leadership
              </h3>
            </div>
          </Link>

          {/* Second Secondary Article */}
          <Link to="/news/youth-environmental-sustainability" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <GatsbyImage image={getImage(speakersHeroImage)} alt="Article 4" className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-4 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">News</p>
              <h3 className="text-lg font-semibold mt-2 text-white transition-colors group-hover:text-gray-200">
                Youth & Environmental Sustainability
              </h3>
            </div>
          </Link>

          {/* Third Secondary Article */}
          <Link to="/research/empowering-african-women" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <GatsbyImage image={getImage(contactHeroImage)} alt="Article 5" className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-4 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">Research</p>
              <h3 className="text-lg font-semibold mt-2 text-white transition-colors group-hover:text-gray-200">
                Empowering African Women Leaders
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
