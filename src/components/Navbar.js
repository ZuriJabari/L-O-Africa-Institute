import React, { useState } from 'react';
import { FiSearch, FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { navigate } from 'gatsby';
import LOGO from '../assets/images/Leo-logo-primary.png';
import ALGLogo from '../assets/images/alg-color.svg';
import HudumaLogo from '../assets/images/huduma-logo.svg';
import ReviewLogo from '../assets/images/LAR-logo.png';
import YelpLogo from '../assets/images/YELP-Logo.svg';
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';
import ALGICON from '../assets/images/alg-icon.png';
import LucyPhoto from '../assets/images/Lucy.png';
import CarlPhoto from '../assets/images/carl.jpg';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import yelpLogo from '../../src/assets/images/YELP-Logo.svg';
import hudumaLogo from '../../src/assets/images/huduma-logo.svg';


// Ensure this path is correct


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/searchResults?query=${searchQuery}`);
  };

  // Common h2 style for all dropdown menus
  const columnTitleStyle = { 
    letterSpacing: '2px', 
    fontSize: '12px', 
    paddingBottom: '6px', 
    marginBottom: '20px',  // Added 20px bottom margin
    color: '#888', 
    cursor: 'default', 
    fontWeight: '400' 
  };

  // Add this Prismic query
  const data = useStaticQuery(graphql`
    query {
      allPrismicBlogPosts(
        sort: { data: { publish_date: DESC } }
        limit: 3
      ) {
        nodes {
          uid
          data {
            title
            publish_date(formatString: "MMMM D, YYYY")
            author
            featured_image {
              url
              alt
            }
          }
        }
      }
    }
  `);

  const blogPosts = data.allPrismicBlogPosts.nodes;

  return (
    <nav className="bg-white border-gray-200 shadow-md">
      {/* Top Bar */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="hidden md:flex space-x-5">
          <a href="https://www.facebook.com/LeOAfricaInstitute/" className="hover:text-[#0B9A9E] transition duration-300 text-lg">
            <FaFacebookF />
          </a>
          <a href="https://x.com/LeoAfricaInst" className="hover:text-[#0B9A9E] transition duration-300 text-lg">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/18203194/admin/page-posts/published/" className="hover:text-[#0B9A9E] transition duration-300 text-lg">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/leoafricainst/" className="hover:text-[#0B9A9E] transition duration-300 text-lg">
            <FaInstagram />
          </a>
        </div>
        <div className="flex items-center space-x-8">
          <button onClick={handleSearchToggle} className="hover:text-[#0B9A9E] transition duration-300">
            <FiSearch className="w-6 h-6" />
          </button>
          <a href="/partner-with-us/" className="hover:text-[#0B9A9E] transition duration-300 text-base">
          Partner with Us
          </a>
          <a href="/contact" className="hover:text-[#0B9A9E] transition duration-300 text-base">
             Contact Us
          </a>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-gray-100 py-3 px-6">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="flex-1 bg-white border border-gray-300 rounded-md px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#0B9A9E]"
            />
            <button type="submit" className="ml-3 bg-[#0B9A9E] hover:bg-[#0B9A9E]/90 text-white px-6 py-3 rounded-md transition duration-300 text-base">
              Search
            </button>
          </form>
        </div>
      )}

      {/* Full-Width Horizontal Line */}
      <div className="w-full h-px bg-gray-300"></div>

      {/* Main Navigation */}
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6">
        <a href="/" className="flex items-center space-x-3">
          <img 
            src={LOGO} 
            className="h-16" 
            alt="Leo Africa Institute Logo" 
          />
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 transition-transform duration-500 ease-in-out`}>
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-10">
            {['About Us', 'Events & Gatherings', 'Fellows & Champions', 'News & Media', 'Initiatives'].map(
              (menu) => (
                <li key={menu}>
                  <button
                    onClick={() => handleMenuToggle(menu)}
                    className="flex items-center justify-between w-full py-3 px-4 text-xl font-bold text-gray-900 md:w-auto hover:text-[#0B9A9E] md:p-0 transition duration-300"
                  >
                    {menu}
                    <svg
                      className="w-3 h-3 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* News & Media Dropdown */}
{activeMenu === 'News & Media' && (
  <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6 gap-6">
      {/* Column 1 - By Type */}
      <ul className="mb-4 space-y-4">
        <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>BY TYPE</h2>
        <li><a href="/news/" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Our Latest Articles</a></li>
        <li><a href="/news/founders-blog" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Introducing Founder's Blog</a></li>
        <li><a href="/publications" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Research Reports</a></li>
        <li><a href="/blog" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Blog</a></li>
        <a href="/news" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline text-[15px] font-medium">
          View All Insights & Research <FiArrowRight className="ml-2" />
        </a>
      </ul>

      {/* Column 2 - Latest Article */}
      <div>
        <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>FEATURED ARTICLE</h2>
        {blogPosts.length > 0 && (
          <div className="flex items-start space-x-4">
            {blogPosts[0].data.featured_image?.url && (
              <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={blogPosts[0].data.featured_image.url}
                  alt={blogPosts[0].data.featured_image.alt || blogPosts[0].data.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800 hover:text-[#2bbecb] transition-colors duration-300 mb-1 leading-snug">
                <Link to={`/blog/${blogPosts[0].uid}`}>
                  {blogPosts[0].data.title || "Untitled Post"}
                </Link>
              </h3>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>{blogPosts[0].data.author || "Unknown Author"}</span>
                <span className="mx-1">•</span>
                <time>{blogPosts[0].data.publish_date || "Unknown Date"}</time>
              </div>
              <p className="text-xs text-gray-600 leading-snug mb-2">
                {blogPosts[0].data.intro_text?.slice(0, 100) || "Discover insights and updates from our latest article."}
              </p>
              <Link
                to={`/blog/${blogPosts[0].uid}`}
                className="text-xs font-medium text-[#f6911e] hover:text-[#2bbecb] transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Column 3 - Latest from News */}
<div>
  <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>
    MORE INSIGHTS
  </h2>
  
  <div className="space-y-4">
    {blogPosts.slice(1, 3).map((post) => (
      <Link 
        key={post.uid} 
        to={`/blog/${post.uid}`}
        className="flex items-start space-x-3 group"
      >
        {post.data.featured_image?.url && (
          <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
            <img
              src={post.data.featured_image.url}
              alt={post.data.featured_image.alt || post.data.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#2bbecb] transition-colors duration-300 leading-snug mb-1">
            {post.data.title || "Untitled Post"}
          </h3>
          <div className="flex items-center text-xs text-gray-500">
            <time>{post.data.publish_date || "Unknown Date"}</time>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>
    </div>
  </div>
)}

       {/* About Us Mega Menu */}
      {activeMenu === 'About Us' && (
        <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6 gap-6">
            {/* First Column */}
            <ul className="mb-4 space-y-4">
              <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>
              Our Story</h2>
              <li><a href="/about" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">About LéO Africa Institute</a></li>
              <li><a href="/about/mission-vision" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">History / Mission & Vision</a></li>
              <li><a href="/about/team" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">The Leadership Team</a></li>
              <li><a href="/about/pillars-of-action" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Our Pillars of Action</a></li>
              <li><a href="/about/faqs" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Frequently Asked Questions</a></li>
              <a href="/about" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline">
                Learn More About Us <FiArrowRight className="ml-2" />
              </a>
            </ul>
            {/* Second Column */}
            <ul className="mb-4 space-y-4">
            <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>
            Connect
              </h2>
              <li><a href="/contact" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed">Contact Us</a></li>
              <li><a href="/partner-with-us/" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed">Get Involved</a></li>
              <li><a href="/partner-with-us/" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed">Partner with Us</a></li>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/LeOAfricaInstitute/" className="hover:text-[#2bbecb] text-[#3b3b3b] text-lg"><FaFacebookF /></a>
                <a href="https://x.com/LeoAfricaInst" className="hover:text-[#2bbecb] text-[#3b3b3b] text-lg"><FaTwitter /></a>
                <a href="https://www.linkedin.com/company/18203194/admin/page-posts/published/" className="hover:text-[#2bbecb] text-[#3b3b3b] text-lg"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/leoafricainst/" className="hover:text-[#2bbecb] text-[#3b3b3b] text-lg"><FaInstagram /></a>
              </div>

              {/* Updated Subscription Form */}
              <form className="mt-6">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Subscribe to our newsletter"
                    className="w-full px-4 py-2.5 pr-36 text-[15px] border border-gray-300 rounded-full focus:outline-none focus:border-[#2bbecb] focus:ring-1 focus:ring-[#2bbecb] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-1.5 bg-[#2bbecb] text-white rounded-full hover:bg-[#f6911e] transition-colors duration-300 text-[14px] font-medium"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-2 text-[13px] text-[#444] pl-4">
                  Join our community for weekly updates
                </p>
              </form>
            </ul>
            {/* Third Column */}
            
            <div>
              <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" 
                  style={{ letterSpacing: '2px', fontSize: '13px', color: '#888', cursor: 'default', fontWeight: '500' }}>
                LATEST INSIGHTS
              </h2>
              
              {blogPosts.map((post, index) => (
                <div key={post.uid} className="mb-6 group">
                  <div className="flex space-x-4">
                    {/* Image Container */}
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                      {post.data.featured_image?.url && (
                        <img
                          src={post.data.featured_image.url}
                          alt={post.data.featured_image.alt || post.data.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    
                    {/* Content Container */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-[16px] text-[#3b3b3b] group-hover:text-[#2bbecb] transition-colors duration-300 mb-2">
                        <Link to={`/blog/${post.uid}`}>
                          {post.data.title || "Untitled Post"}
                        </Link>
                      </h3>
                      
                      <div className="flex items-center space-x-2 text-[13px] text-[#666] mb-2">
                        <span className="text-[#666]">
                          {post.data.author || "Unknown Author"}
                        </span>
                        <span>•</span>
                        <time className="text-[#666]">
                          {post.data.publish_date || "Unknown Date"}
                        </time>
                      </div>
                      
                    </div>
                  </div>
                  
                  {/* Separator line except for last item */}
                  {index !== 2 && (
                    <div className="mt-4 border-b border-gray-100"></div>
                  )}
                </div>
              ))}
              
              {/* View All Posts Link */}
              <Link 
                to="/blog" 
                className="inline-flex items-center mt-2 text-[15px] font-medium text-[#f6911e] hover:text-[#2bbecb] transition-colors duration-300"
              >
                View All News 
                <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

          </div>
        </div>
      )}

       {/* Initiatives Dropdown */}
{activeMenu === 'Initiatives' && (
  <div className="mt-1 bg-white border-t border-gray-200 shadow-lg">
    <div className="max-w-screen-xl px-6 py-10 mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
        Our Initiatives
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Flagship Initiative - ALG */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center p-6 gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={ALGLogo}
                alt="Annual Leaders Gathering"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Annual Leaders Gathering
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Our flagship event brings together African leaders for inspiring conversations and transformative sessions.
              </p>
              <a
                href="https://alg.leoafricainstitute.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2bbecb] font-medium hover:underline"
              >
                Learn More <FiArrowRight className="inline-block ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Regular Initiatives */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* YELP Fellowship */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center p-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src={YelpLogo}
                alt="YELP Fellowship"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              YELP Fellowship
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Training outstanding thought leaders in values and social responsibility.
            </p>
            <a
              href="https://yelp.leoafricainstitute.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2bbecb] font-medium hover:underline"
            >
              Learn More <FiArrowRight className="inline-block ml-1" />
            </a>
          </div>

          {/* Huduma Fellowship */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center p-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src={HudumaLogo}
                alt="Huduma Fellowship"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Huduma Fellowship
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Training emerging civic & public sector champions in Uganda.
            </p>
            <a
              href="https://huduma.leoafricainstitute.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2bbecb] font-medium hover:underline"
            >
              Learn More <FiArrowRight className="inline-block ml-1" />
            </a>
          </div>

          {/* LéO Africa Review */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center p-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <img
                src={ReviewLogo}
                alt="LéO Africa Review"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              LéO Africa Review
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Digital platform for thought-provoking insights on African leadership and development.
            </p>
            <a
              href="https://leoafricareview.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2bbecb] font-medium hover:underline"
            >
              Read More <FiArrowRight className="inline-block ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


       {/* Fellows & Champions Dropdown */}
      {activeMenu === 'Fellows & Champions' && (
        <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6 gap-6">
            {/* Column 1 - Our Network */}
    <div>
      <h2 style={{ letterSpacing: '2px', fontSize: '13px', color: '#888', cursor: 'default', fontWeight: '500' }} className='uppercase mb-6'>Our Network</h2>
      <div className="space-y-4">
        {/* Huduma Fellowship */}
        <div className="flex items-center space-x-3">
          <img 
            src={hudumaLogo} 
            alt="Huduma Fellowship Logo" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Huduma Fellowship</h4>
            <p>Training emerging civic & public sector champions in Uganda.</p>
            <a 
              href="/huduma" 
              className="text-[#2bbecb] hover:text-[#f6911e] text-sm transition-colors duration-300"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* YELP */}
        <div className="flex items-center space-x-3">
          <img 
            src={yelpLogo} 
            alt="YELP Logo" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Young Emerging Leaders Program</h4>
            <p>Training outstanding thought leaders in values and social responsibility.

</p>
            <a 
              href="/yelp" 
              className="text-[#2bbecb] hover:text-[#f6911e] text-sm transition-colors duration-300"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* African Champions */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400 text-xl">AC</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">African Champions</h4>
            <a 
              href="#" 
              className="text-[#2bbecb] hover:text-[#f6911e] text-sm transition-colors duration-300"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
            {/* How to Become a Member Column */}
<div className="bg-gray-50 p-6 rounded-lg">
  <h3 className="font-semibold text-gray-900 mb-4">How to Become a Member</h3>
  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
    Join the growing LéO Africa Institute community by signing up as a member or fellow. Fill out the form below to get started.
  </p>
  <form className="space-y-4">
    <div>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2bbecb]"
      />
    </div>
    
    <div>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2bbecb]"
      />
    </div>

    <div className="space-y-3">
      <p className="text-sm text-gray-600">I am interested in:</p>
      
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="w-4 h-4 text-[#2bbecb] border-gray-300 rounded focus:ring-[#2bbecb]"
        />
        <span className="text-sm text-gray-700">Joining the Fellowship Program</span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="w-4 h-4 text-[#2bbecb] border-gray-300 rounded focus:ring-[#2bbecb]"
        />
        <span className="text-sm text-gray-700">African Champions Network</span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="w-4 h-4 text-[#2bbecb] border-gray-300 rounded focus:ring-[#2bbecb]"
        />
        <span className="text-sm text-gray-700">Supporting the Institute's Causes</span>
      </label>
    </div>

    <button
      type="submit"
      className="w-full px-4 py-2 bg-[#2bbecb] text-white rounded-md hover:bg-[#f6911e] transition-colors duration-300"
    >
      Submit
    </button>
  </form>
</div>

            {/* Column 3 - Meet Our Champions */}
            <div>
              <h2 className="text-xs uppercase font-normal text-gray-600 pb-2 mb-4" style={columnTitleStyle}>Meet Our Champions</h2>
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <img
                    src={LucyPhoto}
                    alt="Lucy Mbabazi"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-[#3b3b3b] hover:text-[#2bbecb] text-lg mb-1">Lucy Mbabazi</h3>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Managing Director, Better than Cash Alliance</h4>
                    <hr className="border-gray-300 my-2" />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <img
                    src={CarlPhoto}
                    alt="Carl Manlan"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-[#3b3b3b] hover:text-[#2bbecb] text-lg mb-1">Carl Manlan</h3>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Vice President, Social Impact for Visa Central and Eastern Europe, Middle East, and Africa</h4>
                    <hr className="border-gray-300 my-2" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Link 
                  to="/about/champions"
                  className="text-[#f6911e] hover:underline text-sm font-medium flex items-center"
                >
                  Learn More 
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Events & Gatherings Mega Menu */}
      {activeMenu === 'Events & Gatherings' && (
        <div className="mt-1 bg-white border-gray-200 shadow-sm border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6 gap-6">
            {/* Column 1 */}
            <ul className="mb-4 space-y-4">
              <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>Our Next Major Event</h2>
              <li><a href="https://alg.leoafricainstitute.org" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb]">Annual Leaders Gathering</a></li>
              <li><a href="/yelp" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb]">YELP Fellowship</a></li>
              <li><a href="/huduma" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb]">Huduma Fellowship</a></li>
              <li><a href="#" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb]">LéO Talks</a></li>
              <li><a href="#" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb]">LéO Debates</a></li>
              <a href="/events" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline text-[15px] font-medium">
                Browse All Events <FiArrowRight className="ml-2" />
              </a>
            </ul>

            {/* Upcoming Events Column */}
<div className="space-y-4">
  <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-3" style={columnTitleStyle}>
    Upcoming Events
  </h2>

  {/* LéO Africa Talks Card */}
  <div className="group relative bg-white rounded-md border-l-4 border-[#00babc] hover:shadow-md transition-all duration-300 hover:-translate-x-0.5">
    <div className="p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="px-2 py-0.5 bg-[#00babc]/10 text-[#00babc] text-xs font-medium rounded-full">
          February 2024
        </span>
        <span className="text-xs text-gray-500">Details soon</span>
      </div>
      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#00babc] transition-colors duration-300">
        LéO Africa Talks: Politics & Society
      </h3>
      <p className="mt-1 text-xs text-gray-600 line-clamp-2">
        Join thought leaders for discussions on Africa's political and social transformation.
      </p>
    </div>
  </div>

  {/* LéO Arambe Symposium Card */}
  <div className="group relative bg-white rounded-md border-l-4 border-[#f89420] hover:shadow-md transition-all duration-300 hover:-translate-x-0.5">
    <div className="p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="px-2 py-0.5 bg-[#f89420]/10 text-[#f89420] text-xs font-medium rounded-full">
          June 2025
        </span>
        <span className="text-xs text-gray-500">Details will be available soon</span>
      </div>
      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#00babc] transition-colors duration-300">
        LéO Arambe Symposium - Kigali
      </h3>
      <p className="mt-1 text-xs text-gray-600 line-clamp-2">
        Pan-African conference fostering collaboration among emerging leaders.
      </p>
      <div className="mt-2 flex items-center text-xs text-gray-500">
        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
        <span>Kigali, Rwanda</span>
      </div>
    </div>
  </div>
</div>

            {/* Column 3 */}
            <div>
            <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" 
                style={{ letterSpacing: '2px', fontSize: '13px', color: '#888', cursor: 'default', fontWeight: '500' }}>
              Our Flagship Event
            </h2>
              {/* First Column - Our Flagship Event */}
              <div>
                <div className="group flex items-start space-x-4">
                  {/* ALG Logo - Left Side */}
                  <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                    <img
                      src={ALGICON}
                      alt="Annual Leaders Gathering"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content - Right Side */}
                  <div className="flex-1">
                    {/* ALG Title */}
                    <h3 className="text-[16px] font-semibold text-[#3b3b3b] group-hover:text-[#2bbecb] transition-colors duration-300 mb-2">
                      Annual Leaders Gathering (ALG)
                    </h3>
                    
                    {/* ALG Description */}
                    <p className="text-[14px] text-[#666] leading-relaxed mb-3">
                      The Annual Leaders Gathering (ALG) is a premier leadership forum that brings together emerging African leaders to engage in meaningful dialogue, share experiences, and forge partnerships for Africa's development.
                    </p>
                    
                    {/* Learn More Link */}
                    <a 
                      href="https://alg.leoafricainstitute.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[14px] font-medium text-[#f6911e] hover:text-[#2bbecb] transition-colors duration-300"
                    >
                      Learn More 
                      <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
     
      
      </nav>
  );
};

export default Navbar;