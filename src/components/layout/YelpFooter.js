import React from 'react';
import { Link } from 'gatsby';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import YelpLogo from '../../assets/images/YELP-Logo.svg';

const YelpFooter = () => {
  return (
    <footer className="bg-[#0B9A9E] text-white">
      {/* Top Pattern */}
      <div className="h-2 bg-[#F6911E]" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img src={YelpLogo} alt="YELP Logo" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm mt-4 text-white/90 max-w-md">
              The Young and Emerging Leaders Project (YELP) is a fellowship program of the LéO Africa Institute that trains outstanding thought leaders in values and social responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/yelp" className="text-white/90 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/yelp/about" className="text-white/90 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/yelp/fellows" className="text-white/90 hover:text-white transition-colors">Fellows</Link></li>
              <li><Link to="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Young and Emerging Leaders Project. All rights reserved.</p>
          <p className="mt-2">A fellowship program of the LéO Africa Institute.</p>
        </div>
      </div>
    </footer>
  );
};

export default YelpFooter;
