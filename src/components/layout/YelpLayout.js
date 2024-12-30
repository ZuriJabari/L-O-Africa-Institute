import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import LeoLogo from '../../assets/images/Leo-logo-primary.png';
import YelpLogo from '../../assets/images/YELP-Logo.svg';

const YelpLayout = ({ children }) => {
  const location = typeof window !== 'undefined' ? window.location.pathname : '';
  const navItems = [
    { path: '/yelp', label: 'Home' },
    { path: '/yelp/about', label: 'About' },
    { path: '/yelp/fellows', label: 'Fellows' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              {/* YELP Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center"
              >
                <Link to="/yelp" className="flex items-center">
                  <img 
                    src={YelpLogo} 
                    alt="YELP" 
                    className="h-12"
                  />
                </Link>
              </motion.div>

              {/* LéO Africa Institute Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center"
              >
                <Link to="/" className="flex items-center">
                  <img 
                    src={LeoLogo} 
                    alt="LéO Africa Institute" 
                    className="h-10"
                  />
                </Link>
              </motion.div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location === item.path 
                          ? 'text-[#0B9A9E] font-semibold' 
                          : 'text-gray-600 hover:text-[#0B9A9E]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default YelpLayout; 