import React from "react";
import { FiArrowRight, FiYoutube, FiCamera } from "react-icons/fi";
import ALGLOGO from '../assets/images/alg-color.svg';
import leadershipConvoImage from '../assets/images/leadership-conversation1.jpg';
import heritageImage from '../assets/images/heritage2024.jpg';
import hudumaImage from '../assets/images/huduma2024.jpg';
import yelpLogo from '../assets/images/YELP-Logo.svg';
import executiveSeminarImage from '../assets/images/executive-seminar.jpg';
import mufurukiLectureImage from '../assets/images/mufuruki-lecture.jpg';
import leoTalksImage from '../assets/images/leo-talks.jpg';
import chapterGatheringsImage from '../assets/images/chapter-gatherings.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle, SubsectionTitle, BodyText } from './Typography';
import { Link } from 'gatsby';

// Brand colors
const BRAND_COLORS = {
  teal: '#00babc',
  orange: '#f89420', 
  gray: '#545456',
  burgundy: '#9a1a2f'
};

const upcomingEvent = {
  title: "Annual Leaders Gathering",
  date: "14th - 16th November 2024, All Day",
  location: "Sheraton Kampala Hotel, Kampala, Uganda",
  description:
    "The Annual Leaders Gathering is LéO Africa Institute's premier event, bringing together visionary leaders for discussions, networking, and collaborations aimed at reshaping Africa's future.",
  image: ALGLOGO,
};

const recurringEvents = [
  {
    title: "Executive Seminars & Symposiums",
    description: "High-impact forums uniting leaders and experts to shape Africa's future through strategic dialogue and collaborative solutions.",
    image: executiveSeminarImage,
  },
  {
    title: "Ali Mufuruki Lecture Series",
    description: "Distinguished African leaders share transformative insights on leadership and entrepreneurship, honoring Ali Mufuruki's visionary legacy.",
    image: mufurukiLectureImage,
  },
  {
    title: "LéO Africa Talks",
    description: "Dynamic TED-style presentations showcasing innovative ideas and inspiring stories from Africa's emerging changemakers.",
    image: leoTalksImage,
  },
  {
    title: "Country Chapter Gatherings",
    description: "Local networking events fostering collaboration and knowledge sharing among LéO Africa Institute members across the continent.",
    image: chapterGatheringsImage,
  },
];

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
      >
        <SubsectionTitle>{title}</SubsectionTitle>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiArrowRight className="w-6 h-6 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const UpcomingEvents = () => {
  const [showOtherEvents, setShowOtherEvents] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#00babc]/5 to-white">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00babc]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00babc]/5 rounded-full blur-3xl -z-10" />

        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle>Our Flagship Event</SectionTitle>
          <div className="w-24 h-1 bg-[#F6911E]"></div>
        </div>

        {/* ALG Content */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="md:flex items-center">
              <div className="md:w-2/5 p-8 bg-gradient-to-br from-[#00babc]/5 to-white flex justify-center items-center">
                <img
                  src={upcomingEvent.image}
                  alt={upcomingEvent.title}
                  className="w-full max-w-[240px]"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <SubsectionTitle className="mb-4">{upcomingEvent.title}</SubsectionTitle>
                <div className="space-y-2 mb-6">
                  <p className="font-inter text-gray-600">{upcomingEvent.date}</p>
                  <p className="font-inter text-gray-600">{upcomingEvent.location}</p>
                </div>
                <BodyText className="mb-8">{upcomingEvent.description}</BodyText>
                <button className="inline-flex items-center gap-2 bg-[#00babc] text-white px-6 py-3 rounded-lg hover:bg-[#00babc]/90 transition-colors">
                  Learn More
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setShowOtherEvents(!showOtherEvents)}
          className={`
          bg-rose-700 hover:bg-rose-900
            mx-auto block 
            px-8 py-4 
            rounded-full 
            text-white 
            font-inter
            font-semibold 
            flex items-center 
            justify-center 
            gap-2 
            shadow-[0_4px_20px_-5px_rgba(0,186,188,0.4)]
            hover:shadow-[0_4px_20px_-5px_rgba(248,148,32,0.4)]
            transition-all 
            duration-300 
            hover:-translate-y-1
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-white font-medium">
            {showOtherEvents ? 'Hide Other Events' : 'View Other Events and Activities'}
          </span>
          <motion.svg 
            animate={{ rotate: showOtherEvents ? 180 : 0 }}
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            className="text-white"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" />
          </motion.svg>
        </motion.button>

        {/* Other Events Section */}
        <AnimatePresence>
          {showOtherEvents && (
            <div className="mb-16">
              <SectionTitle>Other Events & Activities</SectionTitle>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {recurringEvents.map((event, index) => (
                  <Link
                    key={event.title}
                    to="/events"
                    className="block group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1"
                    >
                      <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <SubsectionTitle className="mb-4 group-hover:text-[#00babc] transition-colors">{event.title}</SubsectionTitle>
                      <BodyText>{event.description}</BodyText>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UpcomingEvents;
