import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Layout from '../../Layout';

const YelpLayout = ({ children }) => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* YELP Navigation */}
        <nav className="bg-[#2A6A76] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/yelp" className="text-xl font-bold">
                  YELP
                </Link>
                <div className="hidden md:block ml-10">
                  <div className="flex items-baseline space-x-4">
                    <Link
                      to="/yelp"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#87181A] hover:text-white transition-colors"
                      activeClassName="bg-[#87181A]"
                    >
                      Overview
                    </Link>
                    <Link
                      to="/yelp/fellows"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#87181A] hover:text-white transition-colors"
                      activeClassName="bg-[#87181A]"
                    >
                      Fellows
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* YELP Footer */}
        <footer className="bg-[#2A6A76] text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Young Emerging Leaders Program</h3>
                <p className="text-sm text-white/80">Empowering the next generation of African leaders</p>
              </div>
              <div className="flex space-x-4">
                <Link to="/yelp" className="hover:text-[#87181A] transition-colors">
                  Home
                </Link>
                <Link to="/yelp/fellows" className="hover:text-[#87181A] transition-colors">
                  Fellows
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default YelpLayout; 