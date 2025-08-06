import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { FiArrowRight, FiUsers, FiStar, FiPlay } from 'react-icons/fi';
import heroArt from '../assets/images/hero-art.png';
// African print texture - update this path when you add your texture image
// import africanPrintTexture from '../assets/images/african-print-texture.png';

const GriotsHomepageBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const blockRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    setIsHovered(false);
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(43, 190, 203, 0.3); }
          50% { box-shadow: 0 0 40px rgba(43, 190, 203, 0.6), 0 0 60px rgba(43, 190, 203, 0.3); }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .griots-block {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }
        
        .griots-block::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.8s ease-in-out;
        }
        
        .griots-block:hover::before {
          left: 100%;
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(43, 190, 203, 0.1), rgba(246, 145, 30, 0.1));
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-circle:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }
        
        .floating-circle:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 60%;
          right: 8%;
          animation-delay: 2s;
        }
        
        .floating-circle:nth-child(3) {
          width: 40px;
          height: 40px;
          top: 30%;
          right: 15%;
          animation-delay: 4s;
        }
        
        .shimmer-text {
          background: linear-gradient(90deg, #1a202c, #2bbecb, #f6911e, #1a202c);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .hero-image {
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          transform-style: preserve-3d;
        }
        
        .stats-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .cta-button {
          background: linear-gradient(135deg, #2bbecb 0%, #f6911e 100%);
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .visible {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .slide-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .slide-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .floating-circle,
          .shimmer-text,
          .hero-image {
            animation: none;
          }
        }
      `}</style>
      
      <section 
        ref={blockRef}
        className="griots-block relative py-20 lg:py-32"
      >
        {/* Floating Background Elements */}
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content Section */}
            <div className={`space-y-8 ${isVisible ? 'slide-left' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-50 to-orange-50 rounded-full border border-teal-200">
                  <FiStar className="h-4 w-4 text-teal-600 mr-2" />
                  <span className="text-sm font-medium text-teal-800">New Cohort Announced</span>
                </div>
                
                <h2 className={`text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${isVisible ? 'shimmer-text' : 'text-gray-900'}`}>
                  Meet the
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">
                    Griots Cohort
                  </span>
                  <br />
                  2025
                </h2>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Discover the exceptional storytellers, leaders, and changemakers who will shape Africa's narrative through the power of authentic storytelling.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`stats-card p-6 rounded-2xl shadow-lg ${isVisible ? 'visible' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <FiUsers className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">23+</p>
                      <p className="text-sm text-gray-600">Fellows</p>
                    </div>
                  </div>
                </div>
                
                <div className={`stats-card p-6 rounded-2xl shadow-lg ${isVisible ? 'visible' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <FiStar className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">15+</p>
                      <p className="text-sm text-gray-600">Countries</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'visible' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
                <Link 
                  to="/griots-cohort-2025"
                  className="cta-button group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Meet the Fellows
                  <FiArrowRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </Link>
                
                <Link 
                  to="/griots-cohort-2025"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-teal-300 hover:text-teal-600 transform hover:scale-105 transition-all duration-300"
                >
                  <FiPlay className="mr-2 h-5 w-5" />
                  Watch Stories
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className={`relative ${isVisible ? 'slide-right' : 'opacity-0'}`}>
              <div 
                className="relative group cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-orange-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                  <img
                    ref={imageRef}
                    src={heroArt}
                    alt="Griots Cohort 2025 - Storytellers and Leaders"
                    className="hero-image w-full h-auto rounded-2xl"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-semibold text-gray-800">
                      🎭 Storytelling Fellowship
                    </p>
                  </div>
                  
                  {/* Bottom Badge */}
                  <div className="absolute bottom-8 right-8 bg-gradient-to-r from-teal-600 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                    <p className="text-sm font-bold">
                      Class of 2025
                    </p>
                  </div>
                </div>

                {/* Floating Action Button */}
                <Link 
                  to="/griots-cohort-2025"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  style={{ animation: isHovered ? 'pulse-glow 2s infinite' : 'none' }}
                >
                  <FiPlay className="h-8 w-8 text-teal-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default GriotsHomepageBlock;
