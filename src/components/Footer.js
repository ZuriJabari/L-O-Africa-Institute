import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaYoutube, FaFlickr } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#0B9A9E] text-white py-16" 
      style={{
        backgroundImage: `url(${require('../assets/images/ALG-Patterns.png')})`, 
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'top'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* About Us and Other Sections */}
        <div className="grid sm:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">About Us</h3>
            <ul className="space-y-2">
              <li><a href="/our-mission" className="font-inter text-sm hover:text-white/80 transition-colors">Our Mission</a></li>
              <li><a href="/institutional-framework" className="font-inter text-sm hover:text-white/80 transition-colors">Our Institutional Framework</a></li>
              <li><a href="/history" className="font-inter text-sm hover:text-white/80 transition-colors">History</a></li>
              <li><a href="/leadership-governance" className="font-inter text-sm hover:text-white/80 transition-colors">Leadership and Governance</a></li>
              <li><a href="/impact" className="font-inter text-sm hover:text-white/80 transition-colors">Our Impact</a></li>
            </ul>
          </div>

          {/* More from the Forum Section */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">More from the Forum</h3>
            <ul className="space-y-2">
              <li><a href="/huduma" className="font-inter text-sm hover:text-white/80 transition-colors">Huduma Fellowship</a></li>
              <li><a href="/yelp" className="font-inter text-sm hover:text-white/80 transition-colors">YELP</a></li>
              <li><a href="https://leoafricareview.com/" target="_blank" rel="noopener noreferrer" className="font-inter text-sm hover:text-white/80 transition-colors">LéO Africa Review</a></li>
              <li><a href="https://alg.leoafricainstitute.org/" target="_blank" rel="noopener noreferrer" className="font-inter text-sm hover:text-white/80 transition-colors">Annual Leaders Gathering</a></li>
            </ul>
          </div>

          {/* Engage with Us Section */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">Engage with Us</h3>
            <ul className="space-y-2">
              <li><a href="/signin" className="font-inter text-sm hover:text-white/80 transition-colors">Sign In</a></li>
              <li><a href="/partner" className="font-inter text-sm hover:text-white/80 transition-colors">Partner with Us</a></li>
              <li><a href="/membership" className="font-inter text-sm hover:text-white/80 transition-colors">Become a Member</a></li>
              <li><a href="/press-releases" className="font-inter text-sm hover:text-white/80 transition-colors">Sign Up for Press Releases</a></li>
              <li><a href="/newsletter" className="font-inter text-sm hover:text-white/80 transition-colors">Subscribe to Newsletters</a></li>
              <li><a href="/contact" className="font-inter text-sm hover:text-white/80 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Subscription Form Section */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="font-inter text-sm mb-4">Join our mailing list to receive the latest news and updates from the LéO Africa Institute.</p>
            <form action="https://mailchimp.com/subscribe" method="POST" className="flex flex-col space-y-2">
              <input 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                className="font-inter p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E]"
              />
              <button type="submit" className="font-inter bg-white text-[#0B9A9E] p-2 rounded-md hover:bg-white/90 transition-colors font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Sitemap and Social Icons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-0">
              <a href="/sitemap" className="font-inter text-sm hover:text-white/80 transition-colors">Sitemap</a>
              <a href="/privacy-policy" className="font-inter text-sm hover:text-white/80 transition-colors">Privacy Policy</a>
            </div>
            <div className="flex space-x-6">
              <a href="https://x.com/LeoAfricaInst" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-all transform hover:scale-110">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/LeOAfricaInstitute/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-all transform hover:scale-110">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/leoafricainst/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-all transform hover:scale-110">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/18203194/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-all transform hover:scale-110">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@leoafricainstitute" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-all transform hover:scale-110">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://flickr.com/people/africaforum/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-all transform hover:scale-110">
                <FaFlickr className="w-6 h-6" />
              </a>
              <a href="mailto:communications@leoafricainstitute.org" className="hover:text-white/80 transition-all transform hover:scale-110">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm border-t border-white/20 pt-6 mt-6">
          <p className="font-inter">&copy; {currentYear} LéO Africa Institute. All rights reserved.</p>
          <a href="https://index.ug" target="_blank" rel="noopener noreferrer" className="font-inter hover:text-white/80 transition-colors">
            A creation of Index Digital
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
