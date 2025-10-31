import React from 'react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

const InnerHero = ({ 
  imageSrc, 
  imageAlt = "Hero Background",
  eyebrow = "LéO Africa Institute",
  title,
  description,
  useStaticImage = false,
  children
}) => {
  return (
    <section className="relative min-h-screen sm:h-screen sm:min-h-[700px] flex items-center overflow-hidden -mt-[100px] sm:-mt-[140px] pt-[100px] sm:pt-[140px]">
      {/* Background Image Layer with Ken Burns Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {useStaticImage ? (
          <StaticImage
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full"
            imgClassName="object-cover"
            placeholder="blurred"
            formats={["jpg"]}
            quality={90}
          />
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        )}
        {/* Sophisticated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff05_1px,_transparent_1px)] bg-[length:40px_40px] opacity-30"></div>
      </motion.div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-10"
            >
              <div className="w-12 sm:w-16 h-px bg-[#F6911E]"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
                {eyebrow}
              </span>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] tracking-tight mb-6 sm:mb-8"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p 
              className="text-base sm:text-xl md:text-2xl leading-relaxed text-white/90 mb-10 sm:mb-14 max-w-3xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {description}
            </motion.p>
          )}

          {/* Custom Children Content */}
          {children}

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4 text-white/60 text-sm font-light"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
