import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaYoutube, FaFlickr } from 'react-icons/fa';
import NewsletterSubscription from './NewsletterSubscription';
import footerLogo from '../assets/images/Leo-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e8e92] text-white/80">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1 - Logo and Description */}
          <div className="lg:col-span-3">
            <img 
              src={footerLogo} 
              alt="LéO Africa Institute" 
              className="h-20 w-auto mb-4 brightness-0 invert" 
            />
            <p className="text-sm text-white/80 mb-6">
              Nurturing values-based, transformative leadership in Africa.
            </p>
          </div>

          {/* Column 2 - About Us */}
          <div className="lg:col-span-3">
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">About Us</h3>
            <ul className="space-y-2">
              <li><a href="/about/mission-vision" className="font-inter text-sm hover:text-white/80 transition-colors">Our Mission</a></li>
              <li><a href="/about" className="font-inter text-sm hover:text-white/80 transition-colors">Our Institutional Framework</a></li>
              <li><a href="/about/mission-vision" className="font-inter text-sm hover:text-white/80 transition-colors">History</a></li>
              <li><a href="/about/team" className="font-inter text-sm hover:text-white/80 transition-colors">Leadership and Governance</a></li>
              <li><a href="/about" className="font-inter text-sm hover:text-white/80 transition-colors">Our Impact</a></li>
            </ul>
          </div>

          {/* Column 3 - Engage with Us */}
          <div className="lg:col-span-3">
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">Engage with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-inter text-sm hover:text-white/80 transition-colors">Sign In</a></li>
              <li><a href="/partner-with-us" className="font-inter text-sm hover:text-white/80 transition-colors">Partner with Us</a></li>
              <li><a href="/partner-with-us" className="font-inter text-sm hover:text-white/80 transition-colors">Become a Member</a></li>
              <li><a href="/contact" className="font-inter text-sm hover:text-white/80 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter and Social */}
          <div className="lg:col-span-3">
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">Stay Connected</h3>
            <div className="space-y-6">
              {/* Newsletter */}
              <div>
                <p className="text-sm mb-3">Get updates on our programs and thought leadership.</p>
                <NewsletterSubscription />
              </div>
              
              {/* Social Links */}
              <div>
                <p className="text-sm mb-3">Follow us on social media:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://twitter.com/leoafricainst" target="_blank" rel="noopener noreferrer" 
                    className="text-white/80 hover:text-white transition-colors">
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/LeoAfricaInstitute" target="_blank" rel="noopener noreferrer" 
                    className="text-white/80 hover:text-white transition-colors">
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/leoafricainst/" target="_blank" rel="noopener noreferrer" 
                    className="text-white/80 hover:text-white transition-colors">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/leo-africa-institute/" target="_blank" rel="noopener noreferrer" 
                    className="text-white/80 hover:text-white transition-colors">
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCWy1w-0wPe1GN7iwqeK-3tw" target="_blank" rel="noopener noreferrer" 
                    className="text-white/80 hover:text-white transition-colors">
                    <FaYoutube className="h-5 w-5" />
                  </a>
                  <a href="https://www.flickr.com/photos/leoafricainstitute/" target="_blank" rel="noopener noreferrer" 
                    className="text-white/80 hover:text-white transition-colors">
                    <FaFlickr className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 5 - Media */}
          <div className="lg:col-span-3">
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">Media</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="font-inter text-sm hover:text-white/80 transition-colors">Blog</a></li>
              <li><a href="/news" className="font-inter text-sm hover:text-white/80 transition-colors">News</a></li>
              <li><a href="/media" className="font-inter text-sm hover:text-white/80 transition-colors">Media</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {currentYear} LéO Africa Institute. All rights reserved.
            </p>
            <div className="flex items-center gap-2 group">
              <span className="text-sm text-white/60">Crafted with passion by</span>
              <a 
                href="https://www.index.ug" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#f6911e] transition-colors"
              >
                <span className="relative">
                  index digital
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f6911e] transition-all duration-300 group-hover:w-full"></span>
                </span>
                <span className="text-[#f6911e] transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
