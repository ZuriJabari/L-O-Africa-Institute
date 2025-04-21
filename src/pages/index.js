import React from "react";
import { graphql } from "gatsby";
import { motion, AnimatePresence } from 'framer-motion';
import Layout from "../components/Layout";
import HeroSection from "../components/Herosection";
import Objectives from "../components/Objectives";
import MultimediaHome from "../components/Multimedia/MultimediaHome";
import UpcomingEvents from "../components/UpcomingEvents";
import PartnerWithUs from "../components/PartnerWithUs";
import Partners from "../components/Partners";
import Initiatives from "../components/Initiatives";
import OurPeople from "../components/OurPeople";
import SubscriptionForm from "../components/SubscriptionForm";
import Pillars from "../components/Pillars";
import FoundersBlog from "../components/FoundersBlog";
import TeamMemberCard from '../components/TeamMemberCard';
import { Link } from "gatsby";
import { FiCalendar, FiMapPin, FiX } from 'react-icons/fi';

// Team data
const founders = [
  {
    name: "Awel Uwihanganye",
    role: "Co-founder & Program Lead",
    image: "/images/team/awel.jpg",
    bio: "Awel is a seasoned leader with a passion for empowering young Africans."
  },
  {
    name: "Magnus Mchunguzi",
    role: "Co-founder & Chairman Board of Directors",
    image: "/images/team/magnus.jpg",
    bio: "Magnus is a visionary leader with a commitment to creating a better future for Africa."
  },
  {
    name: "John Doe",
    role: "Board Member",
    image: "/images/team/john.jpg",
    bio: "John is a respected leader with a wealth of experience in governance and leadership."
  }
]

const team = [
  {
    name: "Jane Doe",
    role: "Program Manager",
    image: "/images/team/jane.jpg",
    bio: "Jane is a dedicated professional with a passion for empowering young Africans."
  },
  {
    name: "Bob Smith",
    role: "Communications Officer",
    image: "/images/team/bob.jpg",
    bio: "Bob is a skilled communicator with a commitment to sharing the stories of Africa's young leaders."
  },
  {
    name: "Alice Johnson",
    role: "Program Coordinator",
    image: "/images/team/alice.jpg",
    bio: "Alice is a detail-oriented professional with a passion for supporting the growth of Africa's young leaders."
  },
  {
    name: "Mike Brown",
    role: "Finance Officer",
    image: "/images/team/mike.jpg",
    bio: "Mike is a seasoned finance professional with a commitment to ensuring the financial sustainability of our organization."
  }
]

// AnnouncementBanner Component
const AnnouncementBanner = ({ onDismiss }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  
  return (
    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)]">
      {/* Left Accent Column */}
      <div className="w-full md:w-2/5 lg:w-1/3 bg-[#9A1A2F] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
            <circle cx="100" cy="100" r="100" fill="white"/>
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative mb-auto">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs uppercase tracking-wider font-medium mb-4">
            Upcoming Event
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            LéO Africa <br/>Talks
          </h2>
          <div className="h-1 w-16 bg-[#F89420] mb-4"></div>
          <p className="text-white/80 text-sm md:text-base">
            Conversations Worth Having
          </p>
        </div>
        
        {/* Descriptive Text */}
        <div className="relative my-4">
          <p className="text-white/90 text-sm">
            Join our premier gathering of African thought leaders and changemakers. 
            Selected speakers will share visions for Africa's future through powerful storytelling.
          </p>
        </div>
        
        {/* Event Details */}
        <div className="relative space-y-3 mt-2">
          <div className="flex items-center text-white/90">
            <FiCalendar className="w-4 h-4 mr-3" />
            <span className="text-sm md:text-base">19th September 2025</span>
          </div>
          <div className="flex items-center text-white/90">
            <FiMapPin className="w-4 h-4 mr-3" />
            <span className="text-sm md:text-base">Venue: To Be Confirmed</span>
          </div>
          <div className="flex items-center mt-3 bg-white/20 rounded-md px-3 py-2">
            <span className="text-sm md:text-base font-bold text-white">🗓️ Applications now closed.</span>
          </div>
        </div>
      </div>
      
      {/* Right Content Area */}
      <div className="w-full md:w-3/5 lg:w-2/3 bg-white p-6 md:p-8 flex flex-col relative">
        {/* Close button */}
        <div className="absolute top-3 right-3">
          <button 
            onClick={onDismiss}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BABC] shadow-sm"
            aria-label="Dismiss announcement"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
          >
            <FiX className="w-5 h-5" />
            
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div 
                  className="absolute right-0 top-full mt-2 bg-gray-800 text-white text-xs py-1 px-2 rounded shadow-md whitespace-nowrap"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  Dismiss announcement
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        
        <div className="flex flex-col h-full">
          {/* Main Content */}
          <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              The Griots Fellowship
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-2xl">
              LéO Africa Talks is designed for selected speakers within the LéO Africa Institute
              network, to share ideas and visions of their lives, and for Africa, and how they will
              achieve it through their work and careers.
            </p>
            
            {/* Quote */}
            <div className="relative pl-4 border-l-2 border-[#00BABC] mb-6 italic text-gray-600 max-w-lg">
              <span className="text-2xl text-[#00BABC] absolute top-0 left-4 -mt-3">"</span>
              <p className="pl-4">
                Launching this platform is important in fulfilling our mission of establishing quality
                dialogues, by allowing emerging leaders to inspire others.
              </p>
              <footer className="mt-2 text-gray-500 text-sm not-italic pl-4">
                — Awel Uwihanganye, Co-founder
              </footer>
            </div>
          </div>
          
          {/* CTA Area */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 pt-6 border-t border-gray-100">
            <Link 
              to="/events/leo-talks"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#9A1A2F] border border-[#9A1A2F] rounded-md font-medium hover:bg-[#9A1A2F]/5 transition-colors text-sm"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <a 
              href="https://docs.google.com/forms/d/1PFF6aDfFwrRNu0mLJpeiXqm61sLx-UmQ_Am1O5SPjG0/edit?pli=1"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00BABC] text-white rounded-md font-medium hover:bg-[#00BABC]/90 transition-colors shadow-sm text-sm"
            >
              Share your story here
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ data = { allPrismicBlogPosts: { nodes: [] } } }) => {
  // State to control visibility of announcement
  const [showAnnouncement, setShowAnnouncement] = React.useState(true);
  
  return (
    <Layout>
      <HeroSection />
      
      <div className="prefooter-gray"></div>
      
      {/* Announcement Banner */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            className="py-8 bg-white border-b border-gray-100"
            initial={{ opacity: 1, height: "auto" }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                opacity: { duration: 0.3, ease: "easeOut" },
                height: { duration: 0.5, delay: 0.2, ease: "easeInOut" }
              }
            }}
          >
            <div className="container mx-auto px-4">
              <motion.div 
                className="relative overflow-hidden"
                initial={{ y: 0 }}
                exit={{ 
                  y: -20,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
              >
                <AnnouncementBanner onDismiss={() => setShowAnnouncement(false)} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <MultimediaHome data={data} />
      <UpcomingEvents />
      {/* <OurPeople 
        boardTitle="The Governing Board of Directors"
        boardDescription="Our governance board is constituted with individuals whose integrity is beyond reproach and with whom we share a commitment to create a better society and future with young people at the center of shaping leadership action."
        teamTitle="The Team Leading on Delivering on the Tasks"
        teamDescription="Meet our dynamic team committed to shaping leadership that actively contributes to building the Africa we want."
        founders={founders}
        team={team}
      /> */}
        {/* <Pillars/> */}
      <div className="prefooter-gray"></div>
      
      <Partners />
      <PartnerWithUs />
      {/* <SubscriptionForm /> */}
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allPrismicBlogPosts(sort: { fields: data___publish_date, order: DESC }) {
      nodes {
        id
        uid
        data {
          title
          publish_date
          author
          featured_image {
            url
          }
          categories {
            category
          }
        }
      }
    }
  }
`;

export default HomePage;