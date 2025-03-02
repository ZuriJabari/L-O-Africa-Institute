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
            <div className="w-48 h-20 mb-4 flex items-center">
              <StaticImage
                src="../assets/images/leo-logo-vibrant-whitescale-transparent.png"
                alt="LéO Africa Institute"
                className="w-full h-full"
                width={192}
                height={80}
                layout="fullWidth"
                placeholder="blurred"
                objectFit="contain"
                imgStyle={{ objectFit: 'contain' }}
              />
            </div>
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
              <li><a href="/donate" className="font-inter text-sm hover:text-white/80 transition-colors">Donate to the Institute</a></li>
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

        {/* Social Links and Copyright */}
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
              <a href="https://www.flickr.com/photos/africaforum/albums" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <FaFlickr className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <p className="text-sm text-white/60">
                &copy; {currentYear} LéO Africa Institute. All rights reserved.
              </p>
              <span className="hidden md:inline text-white/60 mx-2">|</span>
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
      </div>
    </footer>
  );
};

export default Footer;