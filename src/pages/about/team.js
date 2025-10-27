import React from "react";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import Team from "../../components/about/Team";
import { StaticImage } from "gatsby-plugin-image";

const TeamPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden -mt-[140px] pt-[140px]">
        {/* Background Image Layer with Ken Burns Effect */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <StaticImage
            src="../../assets/images/team-hero.jpg"
            alt="Our Team"
            className="w-full h-full"
            imgClassName="object-cover"
            placeholder="blurred"
            formats={["jpg"]}
            quality={90}
          />
          {/* Sophisticated Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff05_1px,_transparent_1px)] bg-[length:40px_40px] opacity-30"></div>
        </motion.div>

        {/* Content Layer */}
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-16 h-px bg-[#F6911E]"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
                Meet Our Team
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight mb-8"
            >
              Meet the Visionaries{' '}
              <span className="block mt-2">
                Shaping Africa's Future
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl md:text-2xl leading-relaxed text-white/90 mb-14 max-w-3xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              A dedicated team of leaders, innovators, and changemakers committed to empowering Africa's next generation.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-8 mb-14"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-[#F6911E]"></div>
                <div>
                  <div className="text-2xl font-light text-white">15+</div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Team Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-[#0B9A9E]"></div>
                <div>
                  <div className="text-2xl font-light text-white">10+</div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-[#F6911E]"></div>
                <div>
                  <div className="text-2xl font-light text-white">5</div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Countries</div>
                </div>
              </div>
            </motion.div>

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

      {/* Team Section */}
      <Team />
    </Layout>
  );
};

export default TeamPage;
