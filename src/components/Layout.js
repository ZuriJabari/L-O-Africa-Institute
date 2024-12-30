import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import CookieConsent from '../components/CookieConsent';
import '../Styles/CookieConsent.css'; 

const Layout = ({ children }) => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
    setIsBottom(isAtBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="layout relative">
      <Navbar />
      
      <div className="content">
        {children}
      </div>

      {/* Scroll Icon */}
      <div 
        onClick={scrollToPosition}
        className="fixed bottom-10 right-10 flex flex-col items-center cursor-pointer group"
      >
        {/* Toggle between Down and Up Arrow based on scroll position */}
        {isBottom ? (
          <FiArrowUp 
            className="w-10 h-10 text-[#f6911e] animate-bounce transition-transform duration-300 ease-in-out group-hover:text-[#3b3b3b] group-hover:scale-110"
          />
        ) : (
          <FiArrowDown 
            className="w-10 h-10 text-[#f6911e] animate-bounce transition-transform duration-300 ease-in-out group-hover:text-[#1e8e92] group-hover:scale-110"
          />
        )}
        
        {/* Tooltip Text */}
        <span className="text-sm mt-2 text-[#1e8e92] group-hover:text-[#f6911e] transition-opacity duration-300">
          {isBottom ? 'Scroll to Top' : 'Scroll to Bottom'}
        </span>
      </div>

      <div className='prefooter'></div>
      <CookieConsent /> 
      <Footer />
    
    </div>
  );
};

export default Layout;
