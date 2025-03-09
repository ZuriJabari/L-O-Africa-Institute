import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiCalendar, 
  FiMapPin, 
  FiClock, 
  FiChevronDown
} from "react-icons/fi";
import ALGLOGO from '../assets/images/alg-color.svg';
import executiveSeminarImage from '../assets/images/executive-seminar.jpg';
import mufurukiLectureImage from '../assets/images/mufuruki-lecture.jpg';
import leoTalksImage from '../assets/images/leo-talks.jpg';
import chapterGatheringsImage from '../assets/images/chapter-gatherings.jpg';

// Brand colors
const BRAND_COLORS = {
  teal: '#00babc',
  orange: '#f89420', 
  gray: '#545456',
  burgundy: '#9a1a2f'
};

// Event details
const upcomingEvent = {
  title: "Annual Leaders Gathering",
  shortTitle: "ALG 2025",
  date: "15th - 17th September 2025",
  time: "All Day Event",
  location: "Sheraton Kampala Hotel, Kampala, Uganda",
  description:
    "The Annual Leaders Gathering (ALG) is LéO Africa Institute's premier leadership forum that brings together emerging African leaders to engage in meaningful dialogue, share experiences, and forge partnerships for Africa's development.",
  image: ALGLOGO,
  url: "https://alg.leoafricainstitute.org"
};

// Other events (unchanged)
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

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  
  if (!Object.keys(timeLeft).length) {
    return <div className="text-center text-gray-600">Event has started!</div>;
  }

  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-2">
        {Object.entries(timeLeft).map(([interval, value]) => (
          <div key={interval} className="flex flex-col items-center bg-white rounded-lg px-3 py-2 shadow-sm flex-1">
            <span className="text-xl md:text-2xl font-bold text-[#00babc]">{value}</span>
            <span className="text-xs text-gray-500 capitalize">{interval}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
const UpcomingEvents = () => {
  const [showOtherEvents, setShowOtherEvents] = useState(false);

  return (
    <section className="py-16">
      {/* ALG Section */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden shadow-lg p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
            {/* Large Logo Column - Takes 3/7 of space */}
            <div className="md:col-span-3 flex justify-center">
              <div className="w-full max-w-xs">
                <img
                  src={upcomingEvent.image}
                  alt="Annual Leaders Gathering"
                  className="w-full h-auto object-contain mx-auto"
                />
                
                <div className="mt-6">
                  <div className="text-center text-sm font-semibold text-gray-500 mb-2">COUNTDOWN TO ALG 2025</div>
                  <CountdownTimer targetDate="2025-09-15T00:00:00" />
                </div>
              </div>
            </div>
            
            {/* Content Column - Takes 4/7 of space */}
            <div className="md:col-span-4">
              <div className="space-y-6">
                {/* Event Title */}
                <div>
                  <div className="inline-block bg-[#00babc]/10 text-[#00babc] px-3 py-1 rounded-full text-sm font-medium mb-2">
                    Flagship Event
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                    Annual Leaders Gathering
                  </h2>
                  <h3 className="text-xl text-[#00babc] font-medium">
                    {upcomingEvent.shortTitle}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600">
                  {upcomingEvent.description}
                </p>
                
                {/* Event Details */}
                <div className="space-y-3 py-4 border-t border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <FiCalendar className="text-[#00babc] flex-shrink-0" />
                    <span className="text-gray-700">{upcomingEvent.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FiClock className="text-[#00babc] flex-shrink-0" />
                    <span className="text-gray-700">{upcomingEvent.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-[#00babc] flex-shrink-0" />
                    <span className="text-gray-700">{upcomingEvent.location}</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div>
                  <a 
                    href={upcomingEvent.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#00babc] text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-[#00babc]/90 transition-colors"
                  >
                    Learn More about ALG
                    <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle Button for Other Events */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowOtherEvents(!showOtherEvents)}
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg transition-colors"
        >
          <span>{showOtherEvents ? 'Hide Other Events' : 'View Other Events'}</span>
          <motion.div
            animate={{ rotate: showOtherEvents ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown />
          </motion.div>
        </button>
      </div>

      {/* Other Events Section */}
      <AnimatePresence>
        {showOtherEvents && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden container mx-auto px-4 md:px-8"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full"
                  >
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#00babc] transition-colors">{event.title}</h4>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UpcomingEvents;
