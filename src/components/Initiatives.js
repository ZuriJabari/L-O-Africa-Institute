import React, { useRef } from 'react';
import algLogo from '../assets/images/logo-color.svg';
import hudumaLogo from '../assets/images/huduma-logo.svg';
import leoReviewLogo from '../assets/images/LAR-logo.png';
import yelpLogo from '../assets/images/YELP-Logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Initiatives = () => {
  const scrollRef = useRef(null);

  // Function to handle scroll
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -320, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const initiatives = [
    {
      id: 1,
      name: "Young and Emerging Leaders Project",
      description: "A fellowship program nurturing the next generation of African leaders through innovative leadership and ethical practices.",
      logo: yelpLogo,
      link: "/yelp",
    },
    {
      id: 2,
      name: "Huduma Fellowship",
      description: "Training emerging civic & public sector champions in Uganda.",
      logo: hudumaLogo,
      link: "/huduma",
    }
    // ... other initiatives
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 text-[#1e8e92] relative overflow-hidden">
      {/* Subtle Geometric Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/path/to/geometric-pattern.png)', backgroundSize: 'cover' }}></div>
      
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Title */}
        <h2 className="font-playfair text-4xl font-bold tracking-tight text-left text-[#1e8e92] mb-12">
          Our Initiatives
        </h2>

        {/* Horizontal Scroll Wrapper */}
        <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar space-x-12 snap-x snap-mandatory">
          
          {/* Annual Leaders Gathering */}
          <a 
            href="https://alg.leoafricainstitute.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="min-w-[320px] flex flex-col items-center text-center space-y-4 snap-center transform hover:scale-105 transition-transform duration-300"
          >
            <img src={algLogo} alt="ALG Logo" className="h-20 w-auto" />
            <p className="font-inter text-md text-[#4A4A4A] opacity-90 max-w-xs leading-relaxed">
              A convergence of leaders driving transformative change across Africa. Through workshops, discussions, and networking, ALG cultivates a community of visionary leaders focused on Africa's future.
            </p>
          </a>
          
          {/* Huduma Fellowship */}
          <a 
            href="https://huduma.leoafricainstitute.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="min-w-[320px] flex flex-col items-center text-center space-y-4 snap-center transform hover:scale-105 transition-transform duration-300"
          >
            <img src={hudumaLogo} alt="Huduma Fellowship Logo" className="h-20 w-auto" />
            <p className="font-inter text-md text-[#4A4A4A] opacity-90 max-w-xs leading-relaxed">
              Empowering young leaders in public service for impactful leadership. Huduma Fellowship inspires ethical, effective, and inclusive governance through mentorship and leadership training.
            </p>
          </a>
          
          {/* LeO Africa Review */}
          <a 
            href="https://leoafricareview.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="min-w-[320px] flex flex-col items-center text-center space-y-4 snap-center transform hover:scale-105 transition-transform duration-300"
          >
            <img src={leoReviewLogo} alt="LeO Africa Review Logo" className="h-20 w-auto" />
            <p className="font-inter text-md text-[#4A4A4A] opacity-90 max-w-xs leading-relaxed">
              Insights and reflections on Africa's journey and growth. The LeO Africa Review provides critical analysis, thought-provoking articles, and stories on social, economic, and cultural developments in Africa.
            </p>
          </a>
          
          {/* YELP */}
          <a 
            href="https://yelp.leoafricainstitute.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="min-w-[320px] flex flex-col items-center text-center space-y-4 snap-center transform hover:scale-105 transition-transform duration-300"
          >
            <img src={yelpLogo} alt="Yelp Logo" className="h-20 w-auto" />
            <p className="font-inter text-md text-[#4A4A4A] opacity-90 max-w-xs leading-relaxed">
              Fostering a network of visionary young leaders across Africa. YELP offers immersive experiences, leadership skill-building, and collaborative opportunities for Africa’s future change-makers.
            </p>
          </a>
        </div>

        
      </div>
      {/* Scroll Arrows Attached to Initiatives Section */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-10">
          <button onClick={() => scroll('left')} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-300">
            <FiChevronLeft className="text-[#1e8e92] w-8 h-8" />
          </button>
          <button onClick={() => scroll('right')} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-300">
            <FiChevronRight className="text-[#1e8e92] w-8 h-8" />
          </button>
        </div>
    </section>
  );
};

export default Initiatives;
