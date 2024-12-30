import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import heroImage1 from '../assets/images/ALG24.jpg';
import heroImage2 from '../assets/images/hero.jpg';
import heroImage3 from '../assets/images/hero3.jpg';
import heroImage4 from '../assets/images/hero4.jpg';

const slides = [
  {
    image: heroImage1,
    title: "Huduma Fellowship",
    description: "Training emerging civic & public sector champions in Uganda.",
    ctaText: "Learn More",
    ctaLink: "/huduma/about"
  },
  {
    image: heroImage4,
    title: "Young and Emerging Leaders Project",
    description: "The Young and Emerging Leaders Project (YELP) is an initiative of the LéO Africa Institute that seeks to nurture values of integrity, commitment to social justice, and equality in emerging African leaders.",
    ctaText: "Learn More",
    ctaLink: "/yelp"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(true);

  const nextSlide = () => {
    setFadeEffect(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFadeEffect(true);
    }, 200);
  };

  const prevSlide = () => {
    setFadeEffect(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setFadeEffect(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className={`relative h-screen bg-cover bg-center flex items-center overflow-hidden transition-opacity duration-500 ${fadeEffect ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      {/* Main Content Positioned 20% Down */}
      <div className="relative z-10 flex flex-col items-start text-white max-w-3xl space-y-6 mt-[20vh] ml-[8%]">
        
        {/* H3 Tag */}
        <h3 className="font-inter text-xs font-semibold text-[#fff] tracking-wider uppercase cursor-default no-margin">
          {slides[currentIndex].h3}
        </h3>

        {/* Main Heading */}
        <h1 className="font-playfair text-4xl md:text-6xl font-bold leading-tight tracking-wide text-left max-w-2xl">
          {slides[currentIndex].title}
        </h1>

        {/* Description */}
        <p className="font-inter text-lg md:text-xl leading-relaxed opacity-90 tracking-wide text-left max-w-2xl">
          {slides[currentIndex].description}
        </p>

        {/* Event Date and Location (Optional) */}
        {slides[currentIndex].date && (
          <p className="font-inter text-sm font-semibold bg-[#1d8f92] py-2 px-6 rounded-md tracking-wider uppercase shadow-md">
            {slides[currentIndex].date}
          </p>
        )}

        {/* Call-to-Action Button */}
        <a 
          href={slides[currentIndex].ctaLink} 
          className="font-inter bg-[#f6941e] text-white hover:bg-white hover:text-[#f6941e] py-3 px-10 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg font-semibold uppercase tracking-wider"
        >
          {slides[currentIndex].ctaText}
        </a>
      </div>

      {/* Dark Overlay for Contrast - Moved after content for better gradient control */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent opacity-70"></div>

      {/* Navigation Arrows */}
      <button 
        className="absolute inset-y-0 left-0 flex items-center justify-center p-4 cursor-pointer text-white" 
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FiArrowLeft size={24} />
      </button>
      <button 
        className="absolute inset-y-0 right-0 flex items-center justify-center p-4 cursor-pointer text-white" 
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FiArrowRight size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
