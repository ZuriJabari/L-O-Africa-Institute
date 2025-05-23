import React from 'react';
import { Link } from 'gatsby';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import HudumaLogo from '../../assets/images/huduma-logo.svg';
import BgPattern from '../../assets/images/hudumabg.png';

const HudumaFooter = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Top Pattern */}
      <div 
        className="h-[50px] w-full bg-repeat-x bg-[length:50px_50px]"
        style={{ backgroundImage: `url(${BgPattern})` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img src={HudumaLogo} alt="Huduma Logo" className="h-12 mb-4" />
            <p className="text-sm mt-4 text-white/90 max-w-md">
              The Huduma Fellowship is an initiative of the LéO Africa Institute that trains emerging civic and public sector champions in Uganda, empowering them to drive positive change in their communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6911E]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/huduma" className="text-white/90 hover:text-[#F6911E] transition-colors">Home</Link></li>
              <li><Link to="/huduma/about" className="text-white/90 hover:text-[#F6911E] transition-colors">About</Link></li>
              <li><Link to="/huduma/champions" className="text-white/90 hover:text-[#F6911E] transition-colors">Champions</Link></li>
              <li><Link to="/contact" className="text-white/90 hover:text-[#F6911E] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6911E]">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#F6911E] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#F6911E] transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#F6911E] transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#F6911E] transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Huduma Fellowship. All rights reserved.</p>
          <p className="mt-2">An initiative of the LéO Africa Institute.</p>
        </div>
      </div>
    </footer>
  );
};

export default HudumaFooter;
