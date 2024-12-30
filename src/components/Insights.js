import React from 'react';
import contactHeroImage from '../assets/images/contact-hero.jpg';
import algImage from '../assets/images/alg-2022.jpg';
import mediaHeroImage from '../assets/images/media-hero.jpg';
import speakersHeroImage from '../assets/images/speakers-hero.jpg';
import futureBg from '../assets/images/bg-grey.svg';

const imageOptions = [contactHeroImage, algImage, mediaHeroImage, speakersHeroImage];
const getRandomImage = () => imageOptions[Math.floor(Math.random() * imageOptions.length)];

const Insights = () => {
  return (
    <section 
      className="py-20 relative" 
      style={{ 
        backgroundImage: `url(${futureBg})`,
        backgroundSize: '100%',
        backgroundColor: '#fff',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'repeat-x',
      }}
    >
      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-12 text-white">
        
        {/* Header with Title and Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-left text-[#1e8e92] drop-shadow-md">
          News & Media
          </h2>

          {/* More Stories Button */}
          <a href="/news-publications" className="flex items-center bg-[#f6911e] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-[#89272a]">
            More Stories
            <span className="ml-2 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Main Articles Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Main Article */}
          <a href="/news/transformative-role-of-young-african-leaders" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={getRandomImage()} alt="Article 1" className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-6 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">News</p>
              <h3 className="text-xl font-bold mt-2 leading-tight text-white transition-colors group-hover:text-gray-200">
                A Look into the Transformative Role of Young African Leaders
              </h3>
            </div>
          </a>

          {/* Second Main Article */}
          <a href="/publications/community-led-innovations-in-africa" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={getRandomImage()} alt="Article 2" className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-6 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">Publications</p>
              <h3 className="text-xl font-bold mt-2 leading-tight text-white transition-colors group-hover:text-gray-200">
                Understanding the Impact of Community-Led Innovations in Africa
              </h3>
            </div>
          </a>
        </div>

        {/* Secondary Articles Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* First Secondary Article */}
          <a href="/video/building-resilience-through-leadership" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={getRandomImage()} alt="Article 3" className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-4 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">Video</p>
              <h3 className="text-lg font-semibold mt-2 text-white transition-colors group-hover:text-gray-200">
                Building Resilience through Leadership
              </h3>
            </div>
          </a>

          {/* Second Secondary Article */}
          <a href="/news/youth-environmental-sustainability" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={getRandomImage()} alt="Article 4" className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-4 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">News</p>
              <h3 className="text-lg font-semibold mt-2 text-white transition-colors group-hover:text-gray-200">
                The Role of Youth in Environmental Sustainability
              </h3>
            </div>
          </a>

          {/* Third Secondary Article */}
          <a href="/research/empowering-african-women" className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={getRandomImage()} alt="Article 5" className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80" />
            <div className="p-4 bg-black bg-opacity-75">
              <p className="text-sm font-semibold text-gray-300 uppercase">Research</p>
              <h3 className="text-lg font-semibold mt-2 text-white transition-colors group-hover:text-gray-200">
                Empowering African Women through Inclusive Leadership
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;
