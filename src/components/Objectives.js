import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import backgroundImage from '../assets/images/leo-colors.png';

const Objectives = () => {
  // Typing effect states
  const message = "We're Empowering Africa's Future Leaders.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(message.slice(0, index));
      index++;
      if (index > message.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative py-20 px-6 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain', 
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1e8e92',
      }}
    >
      {/* Overlay for enhancing readability */}
      <div className="absolute inset-0 bg-[#1e8e92] opacity-80"></div>

      {/* Key Message Typing Effect */}
      <div className="relative z-10 mb-6 max-w-6xl mx-auto text-left">
        <h3 className="font-playfair text-3xl md:text-4xl font-bold tracking-tight text-[#f6911e]">
          {displayedText}
        </h3>
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto text-left space-y-8 z-10">
        
        {/* Description */}
        <p className="font-inter text-lg md:text-xl leading-relaxed opacity-90 tracking-wide text-[#f0f0f0]">
          The LéO Africa Institute empowers young African leaders to envision and create a sustainable, inclusive future through transformative programs, networking, and impactful dialogues. Our institute focuses on leadership development, ethical entrepreneurship, and thought leadership, fostering a dedicated community of change-makers committed to reshaping Africa's narrative. Through our collaborative and innovative approach, we are advancing Africa's next generation of transformative leaders.
        </p>
        
        

        {/* Call-to-Action Button */}
        <div className="flex justify-start mt-6">
          <a 
            href="/impact" 
            className="font-inter inline-flex items-center bg-[#f6911e] text-white py-3 px-8 rounded-full font-semibold shadow-md transition-transform duration-300 hover:bg-white hover:text-[#f6911e] hover:scale-105"
          >
            Be part of the community!
            <FiArrowRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bg-[#89272a] rounded-full h-72 w-72 absolute -bottom-12 right-12 opacity-25"></div>
        <div className="bg-[#f6911e] rounded-full h-64 w-64 absolute top-12 left-12 opacity-25"></div>
      </div>
    </section>
  );
};

export default Objectives;
