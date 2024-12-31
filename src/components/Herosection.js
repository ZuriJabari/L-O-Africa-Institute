import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import heroImage1 from '../assets/images/hero.jpg';
import heroImage2 from '../assets/images/ALG24-3.jpg';
import heroImage3 from '../assets/images/hero3.jpg';
import heroImage4 from '../assets/images/ALG24.jpg';
import heroImage5 from '../assets/images/graduation.jpg';
import { Link } from 'gatsby';

const slides = [
  {
    image: heroImage1,
    title: "Shaping Africa's Future Leaders",
    description: "Since 2012, LéO Africa Institute has been at the forefront of nurturing ethical, visionary leaders who are transforming Africa's socio-economic landscape. Join us in building a legacy of impactful leadership.",
    ctaText: "Our Story",
    ctaLink: "/about"
  },
  {
    image: heroImage2,
    title: "Voices of Change",
    description: "Discover compelling stories of innovation, resilience, and transformation from across Africa. Our media hub showcases thought-provoking insights from leaders shaping the continent's narrative.",
    ctaText: "Latest Stories",
    ctaLink: "/news"
  },
  {
    image: heroImage3,
    title: "Huduma Fellowship: Public Service Excellence",
    description: "Equipping Africa's next generation of public servants with the tools, networks, and mindset to drive institutional transformation and deliver citizen-centric solutions.",
    ctaText: "Join the Movement",
    ctaLink: "/huduma"
  },
  {
    image: heroImage4,
    title: "Annual Leaders Gathering (ALG)",
    description: "Africa's premier leadership convergence, bringing together visionary leaders, influential policymakers, and dynamic change-makers to shape the continent's future through thought-provoking dialogue and actionable solutions.",
    ctaText: "Explore ALG",
    ctaLink: "/alg"
  },
  {
    image: heroImage5,
    title: "YELP: Catalyzing Young Leadership",
    description: "The Young and Emerging Leaders Project is more than a fellowship—it's a transformative journey empowering Africa's brightest minds to lead with purpose, innovation, and ethical conviction.",
    ctaText: "Begin Your Journey",
    ctaLink: "/yelp"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 13000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      className={`relative h-screen bg-cover bg-center flex items-center overflow-hidden transition-opacity duration-500 opacity-100`}
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
        {currentIndex === 3 ? (
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Annual Leaders Gathering (ALG)
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Africa's premier leadership convergence, bringing together visionary leaders, influential policymakers, and dynamic change-makers to shape the continent's future through thought-provoking dialogue and actionable solutions.
            </p>
            <Link
              to="/alg"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-[#f6911e] hover:bg-[#2bbecb] rounded-lg transition-colors duration-300"
            >
              Explore ALG
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        ) : (
          <p className="font-inter text-lg md:text-xl leading-relaxed opacity-90 tracking-wide text-left max-w-2xl">
            {slides[currentIndex].description}
          </p>
        )}

        {/* Event Date and Location (Optional) */}
        {slides[currentIndex].date && (
          <p className="font-inter text-sm font-semibold bg-[#1d8f92] py-2 px-6 rounded-md tracking-wider uppercase shadow-md">
            {slides[currentIndex].date}
          </p>
        )}

        {/* Call-to-Action Button */}
        {currentIndex !== 3 && (
          <a 
            href={slides[currentIndex].ctaLink} 
            className="font-inter bg-[#f6941e] text-white hover:bg-white hover:text-[#f6941e] py-3 px-10 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg font-semibold uppercase tracking-wider"
          >
            {slides[currentIndex].ctaText}
          </a>
        )}
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
