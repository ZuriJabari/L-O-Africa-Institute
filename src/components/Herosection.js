import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage1 from '../assets/images/hero-leadership.jpg';
import heroImage2 from '../assets/images/hero-media.jpg';
import heroImage3 from '../assets/images/hero-events.jpg';
import { Link } from 'gatsby';

const slides = [
  {
    image: heroImage1,
    title: "Investing in Transformational Leadership",
    description: "One equipped leader can transform an entire organization, uplift a community, and inspire thousands. We are building a network of leaders as catalysts for change, creating a ripple effect that touches lives, strengthens institutions, and builds a more prosperous Africa.",
    ctaText: "This is how!",
    ctaLink: "/about"
  },
  {
    image: heroImage2,
    title: "Media, Storytelling & Production",
    description: "Documenting Change, & strategically amplifying the voices and achievements of transformational leaders, one powerful story at a time",
    ctaText: "Find out More!",
    ctaLink: "/news"
  },
  {
    image: heroImage3,
    title: "Events, Conversations & Ideas Spaces",
    description: "Curated convenings, thought-leadership forums, and intimate dialogue sessions where leaders, innovators, and change-makers come together to exchange ideas, challenge assumptions, and forge partnerships that drive real change.",
    ctaText: "Join us in Conversation!",
    ctaLink: "/events"
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
    <section className="relative min-h-screen sm:h-screen flex items-center overflow-hidden -mt-[100px] sm:-mt-[140px] pt-[100px] sm:pt-[140px]">
      {/* Background Images with Smooth Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </AnimatePresence>
      
      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="max-w-4xl text-white space-y-6 sm:space-y-8"
          >
            {/* Eyebrow Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-8 sm:w-12 h-px bg-[#F6911E]" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
                LéO Africa Institute
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-light text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight max-w-4xl"
            >
              {slides[currentIndex].title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-xl md:text-2xl leading-relaxed text-white/90 font-light max-w-3xl"
            >
              {slides[currentIndex].description}
            </motion.p>

            {/* Call-to-Action Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              href={slides[currentIndex].ctaLink}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-[#F6911E] hover:bg-white hover:text-[#F6911E] rounded-full transition-all duration-500 group shadow-2xl"
            >
              {slides[currentIndex].ctaText}
              <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Elegant Navigation Controls */}
      <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-8 lg:left-16 right-4 sm:right-8 lg:right-16 z-20 flex items-center justify-between">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 text-white transition-all duration-500 group"
            aria-label="Previous Slide"
          >
            <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-500" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 text-white transition-all duration-500 group"
            aria-label="Next Slide"
          >
            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-500" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="hidden md:flex items-center gap-2 text-white/80 text-sm font-light tracking-wider">
          <span className="text-white font-medium">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
