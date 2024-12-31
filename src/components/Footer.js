import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaYoutube, FaFlickr } from 'react-icons/fa';
import NewsletterSubscription from './NewsletterSubscription';
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e8e92] text-white/80">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1 - Logo and Description */}
          <div className="lg:col-span-3">
            <StaticImage
              src="../assets/images/Leo-logo.png"
              alt="LéO Africa Institute"
              className="h-20 w-auto mb-4 brightness-0 invert"
              placeholder="blurred"
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

          {/* Column 4 - Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest insights and news.</p>
            <NewsletterSubscription />
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://twitter.com/LeoAfricaInst" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/LeoAfricaInstitute" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/leoafricainst" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/leo-africa-institute" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@LeoAfricaInstitute" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href="https://www.flickr.com/photos/196942735@N04/albums" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <FaFlickr className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-white/60">
              &copy; {currentYear} LéO Africa Institute. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
