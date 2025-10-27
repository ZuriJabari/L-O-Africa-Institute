import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SmartSuggestions from './SmartSuggestions';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import CookieConsent from '../components/CookieConsent';
import '../styles/CookieConsent.css'; 

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

      <SmartSuggestions />
      <div className='prefooter'></div>
      <CookieConsent /> 
      <Footer />
    
    </div>
  );
};

export default Layout;
