import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiArrowRight, FiMenu, FiX, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaStar } from 'react-icons/fa';
import { navigate, Link } from 'gatsby';
import LOGO from '../assets/images/Leo-logo-primary.png';
import ALGLogo from '../assets/images/logo-color.svg';
import HudumaLogo from '../assets/images/huduma-logo.svg';
import ReviewLogo from '../assets/images/leo-africa-review-logo.png';
import YelpLogo from '../assets/images/YELP-Logo.svg';
import { useStaticQuery, graphql } from "gatsby";
import ALGICON from '../assets/images/alg-icon.png';
import LucyPhoto from '../assets/images/Lucy.png';
import CarlPhoto from '../assets/images/carl.jpg';
import EmailSubscriptionForm from './EmailSubscriptionForm';
import { submitFormToFirebase, FORM_TYPES } from '../utils/forms';

// Ensure this path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  // Replace isHovering state with isHoveringRef ref
  // This ensures we always have access to the current value
  const isHoveringRef = useRef(false);
  const hoverTimeoutRef = useRef(null);

  // Membership form state
  const [membershipForm, setMembershipForm] = useState({
    name: '',
    email: '',
    membershipType: ''
  });
  const [membershipSubmitting, setMembershipSubmitting] = useState(false);
  const [membershipSuccess, setMembershipSuccess] = useState(false);
  const [membershipMessage, setMembershipMessage] = useState('');

  // Animation styles
  const dropdownAnimation = {
    enter: {
      animation: 'dropdownEnter 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      transformOrigin: 'top'
    }
  };

  const dropdownStyles = `
    @keyframes dropdownEnter {
      from {
        opacity: 0;
        transform: translateY(-8px) scale(0.98);
        backdrop-filter: blur(0px);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
        backdrop-filter: blur(8px);
      }
    }

    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideInFromTop {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .hamburger-menu {
      animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .menu-overlay {
      animation: fadeIn 0.3s ease-out;
    }

    .menu-item {
      animation: slideInFromTop 0.4s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    }

    .menu-item:nth-child(1) { animation-delay: 0.05s; }
    .menu-item:nth-child(2) { animation-delay: 0.1s; }
    .menu-item:nth-child(3) { animation-delay: 0.15s; }
    .menu-item:nth-child(4) { animation-delay: 0.2s; }
    .menu-item:nth-child(5) { animation-delay: 0.25s; }
    .menu-item:nth-child(6) { animation-delay: 0.3s; }

    .hamburger-line {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hamburger-open .line-1 {
      transform: rotate(45deg) translateY(8px);
    }

    .hamburger-open .line-2 {
      opacity: 0;
      transform: translateX(20px);
    }

    .hamburger-open .line-3 {
      transform: rotate(-45deg) translateY(-8px);
    }

    .menu-container button {
      position: relative;
    }

    .menu-container button::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 50%;
      background: #0B9A9E;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateX(-50%);
    }

    .menu-container:hover button::after {
      width: 100%;
    }

    .social-icon {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .social-icon:hover {
      transform: translateY(-2px);
      color: #0B9A9E;
    }

    .nav-link {
      position: relative;
      transition: all 0.3s ease;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #0B9A9E;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-link:hover::before {
      width: 100%;
    }

    .dropdown-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .dropdown-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    /* Mobile-specific dropdown styles */
    @media (max-width: 1023px) {
      .dropdown-container {
        position: static !important;
        max-height: 70vh;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        border-radius: 0 0 8px 8px;
        margin-top: 0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      
      .dropdown-container .grid {
        display: block !important;
        gap: 1rem;
      }
      
      .dropdown-container .grid > div {
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .dropdown-container .grid > div:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      
      /* Touch-friendly links on mobile */
      .dropdown-container a {
        padding: 12px 0;
        display: block;
        font-size: 16px;
        line-height: 1.5;
      }
      
      /* Prevent zoom on input focus on mobile */
      .dropdown-container input {
        font-size: 16px;
      }
    }
  `;

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

  const handleMembershipChange = (e) => {
    const { name, value } = e.target;
    setMembershipForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMembershipSubmit = async (e) => {
    e.preventDefault();
    console.log('Membership form submission started');

    setMembershipSubmitting(true);
    setMembershipMessage('');

    try {
      const result = await submitFormToFirebase(FORM_TYPES.JOIN, {
        ...membershipForm,
        source: 'navbar_form'
      });
      console.log('Membership submission result:', result);

      if (result.success) {
        setMembershipSuccess(true);
        setMembershipMessage(result.message);
        setMembershipForm({
          name: '',
          email: '',
          membershipType: ''
        });
      } else {
        setMembershipSuccess(false);
        setMembershipMessage(result.message);
      }
    } catch (error) {
      console.error('Membership submission error:', error);
      setMembershipSuccess(false);
      setMembershipMessage('An error occurred. Please try again later.');
    } finally {
      setMembershipSubmitting(false);
    }
  };

  // Mobile detection and scroll detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    checkMobile();
    handleScroll();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveMobileMenu(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Mobile menu click handler
  const handleMobileMenuClick = (menu) => {
    if (activeMobileMenu === menu) {
      setActiveMobileMenu(null); // Close if already open
    } else {
      setActiveMobileMenu(menu); // Open the clicked menu
    }
  };

  // Simplified hover management for desktop
  const handleMenuEnter = (menu) => {
    if (isMobile) return; // Skip hover on mobile
    
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    isHoveringRef.current = true;
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    if (isMobile) return; // Skip hover on mobile
    
    isHoveringRef.current = false;
    
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Set a timeout to close the menu after a brief delay
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isHoveringRef.current) {
        setActiveMenu(null);
      }
    }, 150);
  };

  // Consistent handlers for both button and dropdown
  const handleDropdownEnter = () => {
    isHoveringRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownLeave = handleMenuLeave; // Use the same handler for consistency

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Add an effect to reset the menu when the active menu changes
  useEffect(() => {
    // When activeMenu changes, make sure all previous timeouts are cleared
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, [activeMenu]);

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

  useEffect(() => {
    const handleScroll = (event) => {
      // Only close dropdown if scrolling the main page, not dropdown content
      // Check if the scroll event is coming from the dropdown container
      const dropdownContainer = document.querySelector('.dropdown-container');
      const isScrollingDropdown = dropdownContainer && dropdownContainer.contains(event.target);
      
      // On mobile, be more lenient with dropdown scrolling
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      
      if (activeMenu && !isScrollingDropdown) {
        // On mobile, add a small delay to prevent accidental closure
        if (isMobile) {
          setTimeout(() => {
            if (activeMenu && !isHoveringRef.current) {
              setActiveMenu(null);
            }
          }, 100);
        } else {
          setActiveMenu(null);
        }
      }
    };

    // Use capture phase to get scroll events from all elements
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [activeMenu]);

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

  const africanCountries = [
    'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon',
    'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 
    'Democratic Republic of the Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea',
    'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau',
    'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi',
    'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger',
    'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 
    'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Swaziland',
    'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
  ];

  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    // Add a global click handler to close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && activeMenu !== null) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenu]);

  return (
    <>
      <style>{dropdownStyles}</style>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`} ref={navRef}>
        {/* Top Bar */}
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6"
             onMouseLeave={handleMenuLeave}>
          <div className="hidden lg:flex space-x-5">
            <a href="https://www.facebook.com/LeOAfricaInstitute/" className="social-icon text-gray-600 hover:text-[#0B9A9E] transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://x.com/LeoAfricaInst" className="social-icon text-gray-600 hover:text-[#0B9A9E] transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/18203194/admin/page-posts/published/" className="social-icon text-gray-600 hover:text-[#0B9A9E] transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/leoafricainst/" className="social-icon text-gray-600 hover:text-[#0B9A9E] transition-colors">
              <FaInstagram />
            </a>
          </div>
          <div className="flex items-center space-x-6 lg:space-x-8">
            <button onClick={handleSearchToggle} className="nav-link text-gray-700 hover:text-[#0B9A9E] transition-colors">
              <FiSearch className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <Link to="/partner-with-us/" className="hidden lg:block nav-link text-gray-700 hover:text-[#0B9A9E] transition-colors text-sm font-medium">
              Partner with Us
            </Link>
            <Link to="/contact" className="hidden lg:block nav-link text-gray-700 hover:text-[#0B9A9E] transition-colors text-sm font-medium">
              Contact Us
            </Link>
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
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6 py-4">
          <a href="/" className="flex items-center space-x-3 z-50">
            <img 
              src={LOGO} 
              className={`transition-all duration-300 ${
                scrolled ? 'h-12' : 'h-14 lg:h-16'
              }`} 
              alt="LéO Africa Institute Logo" 
            />
          </a>

          {/* Luxurious Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`relative z-50 flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none group ${
              isMenuOpen ? 'hamburger-open' : ''
            }`}
            aria-label="Toggle menu"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-gray-800 group-hover:text-[#0B9A9E] transition-colors duration-300">
              MENU
            </span>
            <div className="w-7 h-6 flex flex-col justify-between">
              <span className="hamburger-line line-1 w-full h-0.5 bg-gray-800 rounded-full"></span>
              <span className="hamburger-line line-2 w-full h-0.5 bg-gray-800 rounded-full"></span>
              <span className="hamburger-line line-3 w-full h-0.5 bg-gray-800 rounded-full"></span>
            </div>
          </button>
        </div>

        {/* Desktop Dropdowns - Hidden on mobile, only shown on large screens */}
        {/* News & Media Dropdown */}
{!isMenuOpen && ((isMobile && activeMobileMenu === 'News & Media') || (!isMobile && activeMenu === 'News & Media')) && (
  <div 
    className="dropdown-container mt-1 bg-white border-gray-200 shadow-sm border-y transform transition-all duration-200 ease-out"
    style={dropdownAnimation.enter}
    onMouseEnter={handleDropdownEnter}
    onMouseLeave={handleDropdownLeave}>
    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6 gap-6">
      {/* Column 1 - By Type */}
      <ul className="mb-4 space-y-4">
        <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>Media Center</h2>
        <li><a href="/news/" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Our Latest Articles</a></li>
        {/* <li><a href="/news/founders-blog" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Introducing Founder's Blog</a></li> */}
        <li><a href="/publications" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Research Reports</a></li>
        <li><a href="/blog" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Visit our Blog</a></li>
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
  <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" 
      style={{ letterSpacing: '2px', fontSize: '13px', color: '#888', cursor: 'default', fontWeight: '500' }}>
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
      {!isMenuOpen && ((isMobile && activeMobileMenu === 'About Us') || (!isMobile && activeMenu === 'About Us')) && (
        <div 
          className="dropdown-container mt-1 bg-white border-gray-200 shadow-sm border-y transform transition-all duration-200 ease-out"
          style={dropdownAnimation.enter}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}>
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6 gap-6">
            {/* First Column */}
            <ul className="mb-4 space-y-4">
              <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>
              Our Story</h2>
              <li><a href="/about" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">About LéO Africa Institute</a></li>
              <li><a href="/about/mission-vision" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Mission, Vision & Core Values</a></li>
              <li><a href="/about/team" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">The Leadership Team</a></li>
              <li><a href="/about/pillars-of-action" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Our Pillars of Action</a></li>
              <li><a href="/about/faqs" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed font-normal">Frequently Asked Questions</a></li>
              
            </ul>
            {/* Second Column */}
            <ul className="mb-4 space-y-4">
            <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>
            Connect
              </h2>
              <li><Link to="/contact" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed">Contact Us</Link></li>
              <li><Link to="/donate/" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed">Donate to the Institute</Link></li>
              <li><Link to="/partner-with-us/" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] text-[15px] leading-relaxed">Partner with Us</Link></li>
              
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
                      <h3 className="font-bold text-[16px] text-[#3b3b3b] group-hover:text-[#2bbecb] transition-colors duration-300 leading-snug mb-1">
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
{!isMenuOpen && ((isMobile && activeMobileMenu === 'Initiatives') || (!isMobile && activeMenu === 'Initiatives')) && (
  <div className="dropdown-container mt-1 bg-white border-t border-gray-200 shadow-lg"
    onMouseEnter={handleDropdownEnter}
    onMouseLeave={handleDropdownLeave}>
    <div className="max-w-screen-xl px-6 py-10 mx-auto">
      {/* Section Title */}
      <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" 
      style={{ letterSpacing: '2px', fontSize: '13px', color: '#888', cursor: 'default', fontWeight: '500' }}>
    Our Initiatives
  </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ALG - Featured Event */}
        <div className="dropdown-card bg-white p-6 hover:bg-gray-50 transition-all duration-300 group border-b-4 border-[#f6911e]">
          <div className="flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src={ALGLogo} 
                  alt="ALG Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Annual Leaders Gathering
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Annual Leaders Gathering is the LéO Africa Institute's signature convening platform. It brings together its growing networks of leaders for significant conversations, networking, and deliberation on actions necessary to address the day's challenges.
            </p>
            <a 
              href="https://alg.leoafricainstitute.org/" 
              className="inline-flex items-center text-[#f6911e] hover:text-[#2bbecb] font-medium transition-colors duration-300"
            >
              Learn more 
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* YELP */}
        <div className="dropdown-card bg-white p-6 hover:bg-gray-50 transition-all duration-300 group border-b-4 border-[#2bbecb]">
          <div className="flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src={YelpLogo} 
                  alt="YELP Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              YELP
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Young & Emerging Leaders Project nurtures the next generation of thought leaders through values-based leadership training.
            </p>
            <a 
              href="/yelp" 
              className="inline-flex items-center text-[#2bbecb] hover:text-[#f6911e] font-medium transition-colors duration-300"
            >
              Learn more 
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Huduma */}
        <div className="dropdown-card bg-white p-6 hover:bg-gray-50 transition-all duration-300 group border-b-4 border-[#2bbecb]">
          <div className="flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src={HudumaLogo} 
                  alt="Huduma Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Huduma Fellowship
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Empowering emerging civic and public sector leaders in Uganda through intensive leadership development and mentorship.
            </p>
            <a 
              href="/huduma" 
              className="inline-flex items-center text-[#2bbecb] hover:text-[#f6911e] font-medium transition-colors duration-300"
            >
              Learn more 
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* LéO Africa Review */}
        <div className="dropdown-card bg-white p-6 hover:bg-gray-50 transition-all duration-300 group border-b-4 border-[#2bbecb]">
          <div className="flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
                <img 
                  src={ReviewLogo} 
                  alt="LéO Africa Review Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              LéO Africa Review
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our digital platform showcasing African thought leadership, innovation, and ideas shaping the continent's future.
            </p>
            <a 
              href="https://leoafricareview.com/" 
              className="inline-flex items-center text-[#2bbecb] hover:text-[#f6911e] font-medium transition-colors duration-300"
            >
              Learn more 
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

       {/* Fellows & Champions Dropdown */}
      {!isMenuOpen && ((isMobile && activeMobileMenu === 'Fellows & Champions') || (!isMobile && activeMenu === 'Fellows & Champions')) && (
        <div className="dropdown-container mt-1 bg-white border-gray-200 shadow-sm border-y"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}>
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6 gap-6">
            {/* Column 1 - Our Network */}
    <div>
      <h2 style={{ letterSpacing: '2px', fontSize: '13px', color: '#888', cursor: 'default', fontWeight: '500' }} className='uppercase mb-6'>Our Network</h2>
      <div className="space-y-6">
        {/* Huduma Fellowship */}
        <a href="/huduma" className="block group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
          <div className="flex items-center space-x-3">
            <img 
              src={HudumaLogo} 
              alt="Huduma Fellowship Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-semibold text-gray-900 group-hover:text-[#2bbecb] transition-colors duration-300 mb-2">Huduma Fellowship</h4>
              <p className="text-gray-500 text-sm mb-2">Training emerging civic & public sector champions in Uganda.</p>
              <span className="text-[#2bbecb] group-hover:text-[#f6911e] text-sm transition-colors duration-300 inline-flex items-center">
                Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </div>
          </div>
        </a>

        {/* YELP */}
        <a href="/yelp" className="block group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
          <div className="flex items-center space-x-3">
            <img 
              src={YelpLogo} 
              alt="YELP Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-semibold text-gray-900 group-hover:text-[#2bbecb] transition-colors duration-300 mb-2">Young Emerging Leaders Program</h4>
              <p className="text-gray-500 text-sm mb-2">Training outstanding thought leaders in values and social responsibility.</p>
              <span className="text-[#2bbecb] group-hover:text-[#f6911e] text-sm transition-colors duration-300 inline-flex items-center">
                Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>

    
            {/* How to Become a Member Column */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">How to Become a Member</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Join the growing LéO Africa Institute community by signing up as a member or fellow. Fill out the form below to get started.
              </p>
              <form onSubmit={handleMembershipSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={membershipForm.name}
                    onChange={handleMembershipChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={membershipForm.email}
                    onChange={handleMembershipChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <select
                    name="membershipType"
                    value={membershipForm.membershipType}
                    onChange={handleMembershipChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                    required
                  >
                    <option value="">Select Membership Type</option>
                    <option value="fellow">Fellow</option>
                    <option value="associate">Associate Fellow</option>
                    <option value="member">Member</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={membershipSubmitting}
                  className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors duration-200 ${
                    membershipSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : membershipSuccess
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-[#0B9A9E] hover:bg-[#0B9A9E]/90'
                  }`}
                >
                  {membershipSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                {membershipMessage && (
                  <p className={`text-sm ${membershipSuccess ? 'text-green-600' : 'text-red-600'}`}>
                    {membershipMessage}
                  </p>
                )}
              </form>
            </div>

            {/* Column 3 - Meet Our Champions */}
            <div>
              <h2 style={{ letterSpacing: '2px', fontSize: '13px', color: '#888', cursor: 'default', fontWeight: '500' }} className='uppercase mb-6'>Meet Our Champions</h2>
              
              {/* Lucy Mbabazi Card */}
              <a href="/about/champions" className="block group mb-8">
                <div className="flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                  <img
                    src={LucyPhoto}
                    alt="Lucy Mbabazi"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-[#3b3b3b] group-hover:text-[#2bbecb] text-lg mb-1 transition-colors duration-300">Lucy Mbabazi</h3>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Managing Director, Better than Cash Alliance</h4>
                    <hr className="border-gray-300 my-2" />
                  </div>
                </div>
              </a>

              {/* Carl Manlan Card */}
              <a href="/about/champions" className="block group mb-8">
                <div className="flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-300">
                  <img
                    src={CarlPhoto}
                    alt="Carl Manlan"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-[#3b3b3b] group-hover:text-[#2bbecb] text-lg mb-1 transition-colors duration-300">Carl Manlan</h3>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Vice President, Social Impact for Visa Central and Eastern Europe, Middle East, and Africa</h4>
                    <hr className="border-gray-300 my-2" />
                  </div>
                </div>
              </a>

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
      {!isMenuOpen && ((isMobile && activeMobileMenu === 'Events & Gatherings') || (!isMobile && activeMenu === 'Events & Gatherings')) && (
        <div className="dropdown-container mt-1 bg-white border-gray-200 shadow-sm border-y"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}>
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6 gap-6">
            {/* Column 1 */}
            <ul className="mb-4 space-y-4">
              <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-5" style={columnTitleStyle}>Dialogue, Conversation & Ideas Space</h2>
              <li>
                <a href="https://alg.leoafricainstitute.org" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb] flex items-center">
                  Annual Leaders Gathering
                  <FaStar className="ml-2 text-[#f6911e] animate-pulse" />
                </a>
              </li>
              <li><a href="/events/harambe-symposium/" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb]">Harambe Symposium</a></li>
              <li><a href="/events/leo-talks" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb]"><span>The LéO Africa Talks, Conversations worth Having</span></a></li>
              <li><a href="/events/lecture-series/" className="text-[#3b3b3b] hover:underline hover:text-[#2bbecb]">Distinguished Lectures Series</a></li>
              <a href="/events" className="inline-flex items-center mt-4 text-[#f6911e] hover:underline text-[15px] font-medium">
                Browse All Events <FiArrowRight className="ml-2" />
              </a>
            </ul>

            {/* Upcoming Events Column */}
            <div className="space-y-4">
      <h2 className="text-xs uppercase font-normal text-gray-600 pb-1 mb-3">
        Upcoming Events
      </h2>

      {/* LéO Africa Talks Card */}
      <a href="/events/leo-talks/" className="block">
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
      </a>

      {/* LéO Arambe Symposium Card */}
      <a href="/events/harambe-symposium/" className="block">
        <div className="group relative bg-white rounded-md border-l-4 border-[#f89420] hover:shadow-md transition-all duration-300 hover:-translate-x-0.5">
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 bg-[#f89420]/10 text-[#f89420] text-xs font-medium rounded-full">
                June 2025
              </span>
              <span className="text-xs text-gray-500">Details will be available soon</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#00babc] transition-colors duration-300">
              Harambe Symposium - Kigali
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
      </a>
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
                  <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                    <img
                      src={ALGLogo}
                      alt="Annual Leaders Gathering"
                      className="w-20 h-20 object-contain"
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
                      The Annual Leaders Gathering is the LéO Africa Institute's signature convening platform. It brings together its growing networks of leaders for significant conversations, networking, and deliberation on actions necessary to address the day's challenges.
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
        {/* Luxurious Full-Screen Hamburger Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="menu-overlay fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div 
              ref={menuRef}
              className="hamburger-menu fixed top-0 right-0 bottom-0 w-full sm:w-[480px] bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 px-8 py-6 z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-[0.15em] text-gray-900">
                    MENU
                  </h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:rotate-90 group"
                    aria-label="Close menu"
                  >
                    <FiX className="w-6 h-6 text-gray-700 group-hover:text-[#0B9A9E] transition-colors" />
                  </button>
                </div>
              </div>

              {/* Menu Content */}
              <div className="px-8 py-8">
                {/* Main Menu Items */}
                <nav className="space-y-2 mb-8">
                  {[
                    { name: 'About Us', items: [
                      { label: 'About LéO Africa Institute', href: '/about' },
                      { label: 'Mission, Vision & Core Values', href: '/about/mission-vision' },
                      { label: 'The Leadership Team', href: '/about/team' },
                      { label: 'Our Pillars of Action', href: '/about/pillars-of-action' },
                      { label: 'Frequently Asked Questions', href: '/about/faqs' }
                    ]},
                    { name: 'Events & Gatherings', items: [
                      { label: 'Annual Leaders Gathering', href: 'https://alg.leoafricainstitute.org', featured: true },
                      { label: 'Harambe Symposium', href: '/events/harambe-symposium/' },
                      { label: 'LéO Africa Talks', href: '/events/leo-talks' },
                      { label: 'Distinguished Lectures Series', href: '/events/lecture-series/' },
                      { label: 'Browse All Events', href: '/events' }
                    ]},
                    { name: 'Fellows & Champions', items: [
                      { label: 'Huduma Fellowship', href: '/huduma', logo: HudumaLogo },
                      { label: 'Young Emerging Leaders Program', href: '/yelp', logo: YelpLogo },
                      { label: 'Meet Our Champions', href: '/about/champions' }
                    ]},
                    { name: 'News & Media', items: [
                      { label: 'Our Latest Articles', href: '/news/' },
                      { label: 'Research Reports', href: '/publications' },
                      { label: 'Visit our Blog', href: '/blog' },
                      { label: 'View All Insights', href: '/news' }
                    ]},
                    { name: 'Initiatives', items: [
                      { label: 'Annual Leaders Gathering', href: 'https://alg.leoafricainstitute.org/', logo: ALGLogo },
                      { label: 'YELP', href: '/yelp', logo: YelpLogo },
                      { label: 'Huduma Fellowship', href: '/huduma', logo: HudumaLogo },
                      { label: 'LéO Africa Review', href: 'https://leoafricareview.com/', logo: ReviewLogo }
                    ]}
                  ].map((menu, index) => (
                    <div key={menu.name} className="menu-item">
                      <button
                        onClick={() => setActiveMobileMenu(activeMobileMenu === menu.name ? null : menu.name)}
                        className="w-full flex items-center justify-between px-4 py-4 text-left text-gray-900 hover:bg-white rounded-xl transition-all duration-300 group"
                      >
                        <span className="text-lg font-semibold group-hover:text-[#0B9A9E] transition-colors">
                          {menu.name}
                        </span>
                        <FiChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                            activeMobileMenu === menu.name ? 'rotate-180 text-[#0B9A9E]' : ''
                          }`}
                        />
                      </button>
                      
                      {/* Submenu */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          activeMobileMenu === menu.name ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-4 pr-4 pb-2 pt-2 space-y-1">
                          {menu.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className={`flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#0B9A9E] hover:bg-white rounded-lg transition-all duration-200 group ${
                                item.featured ? 'bg-[#f6911e]/10 border-l-2 border-[#f6911e]' : ''
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="flex items-center space-x-3">
                                {item.logo && (
                                  <img src={item.logo} alt="" className="w-8 h-8 object-contain" />
                                )}
                                <span className="text-sm font-medium">{item.label}</span>
                              </div>
                              <FiChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Quick Links */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold px-4 mb-4">Quick Links</h3>
                  <Link
                    to="/partner-with-us/"
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#0B9A9E] hover:bg-white rounded-lg transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-sm font-medium">Partner with Us</span>
                    <FiChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#0B9A9E] hover:bg-white rounded-lg transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-sm font-medium">Contact Us</span>
                    <FiChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link
                    to="/donate/"
                    className="flex items-center justify-between px-4 py-3 bg-[#0B9A9E] text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-sm font-semibold">Donate to the Institute</span>
                    <FiChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/LeOAfricaInstitute/"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#0B9A9E] hover:text-white transition-all duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com/LeoAfricaInst"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#0B9A9E] hover:text-white transition-all duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/18203194/admin/page-posts/published/"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#0B9A9E] hover:text-white transition-all duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/leoafricainst/"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#0B9A9E] hover:text-white transition-all duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
     
      
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-[120px] lg:h-[140px]"></div>
    </>
  );
};

export default Navbar;