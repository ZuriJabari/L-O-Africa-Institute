import React from 'react';
import { Link } from 'gatsby';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaYoutube, FaFlickr } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import NewsletterSubscription from './NewsletterSubscription';
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0B9A9E] to-[#0B9A9E]/90 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F6911E] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto py-20 px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1 - Logo and Description */}
          <div className="lg:col-span-4">
            <div className="w-52 h-20 mb-6 flex items-center">
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
            <p className="text-base text-white/90 mb-8 leading-relaxed font-light max-w-xs">
              Nurturing values-based, transformative leadership in Africa.
            </p>
            
            {/* Social Links - Moved here for better visual hierarchy */}
            <div className="flex gap-4">
              <a href="https://twitter.com/LeoAfricaInst" target="_blank" rel="noopener noreferrer" 
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0B9A9E] text-white transition-all duration-500 group">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/LeoAfricaInstitute" target="_blank" rel="noopener noreferrer" 
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0B9A9E] text-white transition-all duration-500 group">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/leoafricainst" target="_blank" rel="noopener noreferrer" 
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0B9A9E] text-white transition-all duration-500 group">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/leo-africa-institute" target="_blank" rel="noopener noreferrer" 
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0B9A9E] text-white transition-all duration-500 group">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@LeoAfricaInstitute" target="_blank" rel="noopener noreferrer" 
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0B9A9E] text-white transition-all duration-500 group">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="https://www.flickr.com/photos/africaforum/albums" target="_blank" rel="noopener noreferrer" 
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#0B9A9E] text-white transition-all duration-500 group">
                <FaFlickr className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - About Us */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium mb-6 text-white/60">About Us</h3>
            <ul className="space-y-4">
              <li><a href="/about/mission-vision" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">Our Mission</a></li>
              <li><a href="/about" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">Our Institutional Framework</a></li>
              <li><a href="/about/mission-vision" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">History</a></li>
              <li><a href="/about/team" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">Leadership and Governance</a></li>
              <li><a href="/about" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">Our Impact</a></li>
            </ul>
          </div>

          {/* Column 3 - Engage with Us */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium mb-6 text-white/60">Engage with Us</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">Sign In</a></li>
              <li><Link to="/partner-with-us" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">Partner with Us</Link></li>
              <li><Link to="/donate" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">Donate to the Institute</Link></li>
              <li><Link to="/contact" className="text-base text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium mb-6 text-white/60">Newsletter</h3>
            <p className="text-base mb-6 text-white/90 font-light leading-relaxed">Stay updated with our latest insights and news.</p>
            <NewsletterSubscription />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/60 font-light">
              &copy; {currentYear} LéO Africa Institute. All rights reserved.
            </p>
            <div className="flex items-center gap-3 group">
              <span className="text-sm text-white/60 font-light">Crafted with passion by</span>
              <a 
                href="https://www.index.ug" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#F6911E] transition-all duration-500"
              >
                <span className="relative">
                  index digital
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F6911E] transition-all duration-500 group-hover:w-full"></span>
                </span>
                <span className="text-[#F6911E] transform transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;