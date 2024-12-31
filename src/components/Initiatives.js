import React from 'react';
import algLogo from '../assets/images/logo-color.svg';
import hudumaLogo from '../assets/images/huduma-logo.svg';
import leoReviewLogo from '../assets/images/LAR-logo.png';
import yelpLogo from '../assets/images/YELP-Logo.svg';
import { FiArrowRight } from 'react-icons/fi';

const Initiatives = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
      
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            Our Initiatives
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering the next generation of African leaders through innovative programs and platforms
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Annual Leaders Gathering */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#f6911e]">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-24 h-24 mb-6 relative">
                <img 
                  src={algLogo} 
                  alt="ALG Logo" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Leaders Gathering</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                A convergence of leaders driving transformative change across Africa through workshops, discussions, and networking.
              </p>
              <a 
                href="https://alg.leoafricainstitute.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#f6911e] font-semibold hover:text-[#2bbecb] transition-colors duration-300"
              >
                Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Huduma Fellowship */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-24 h-24 mb-6 relative">
                <img 
                  src={hudumaLogo} 
                  alt="Huduma Fellowship Logo" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Huduma Fellowship</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Empowering young leaders in public service for impactful leadership through mentorship and training.
              </p>
              <a 
                href="/huduma" 
                className="inline-flex items-center text-[#2bbecb] font-semibold hover:text-[#f6911e] transition-colors duration-300"
              >
                Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* LeO Africa Review */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-24 h-24 mb-6 relative">
                <img 
                  src={leoReviewLogo} 
                  alt="LeO Africa Review Logo" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">LéO Africa Review</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Critical analysis and thought-provoking articles on social, economic, and cultural developments in Africa.
              </p>
              <a 
                href="https://leoafricareview.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#2bbecb] font-semibold hover:text-[#f6911e] transition-colors duration-300"
              >
                Read More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* YELP */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-24 h-24 mb-6 relative">
                <img 
                  src={yelpLogo} 
                  alt="YELP Logo" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">YELP Fellowship</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Fostering a network of visionary young leaders across Africa through immersive experiences and skill-building.
              </p>
              <a 
                href="/yelp" 
                className="inline-flex items-center text-[#2bbecb] font-semibold hover:text-[#f6911e] transition-colors duration-300"
              >
                Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
