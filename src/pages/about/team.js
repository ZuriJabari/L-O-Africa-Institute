import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Team from "../../components/about/Team";
import teamHero from '../../assets/images/team-hero.jpg';

const TeamPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[65vh] flex items-center"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${teamHero})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Our Team</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            Meet the dedicated individuals driving our mission to empower Africa's next generation of leaders.
          </p>
        </div>
      </motion.div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-screen-xl mx-auto px-4 text-sm text-gray-600">
          <nav className="flex space-x-2">
            <Link to="/" className="hover:text-[#2bbecb] transition duration-200">
              Home
            </Link>
            <span>/</span>
            <Link to="/about" className="hover:text-[#2bbecb] transition duration-200">
              About
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-semibold">Team</span>
          </nav>
        </div>
      </div>

      {/* Team Section */}
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
