// src/components/TimelinePillar.js
import React from 'react';

const TimelinePillar = ({ title, subtitle, description }) => {
  return (
    <div className="timeline-item pl-8 relative">
      <div className="absolute -left-4 top-0 w-8 h-8 bg-[#1e8e92] rounded-full"></div>
      <span className="text-2xl font-bold text-[#1e8e92]">{title}</span>
      <h3 className="text-xl font-semibold text-gray-900 mt-2">{subtitle}</h3>
      <p className="text-lg text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default TimelinePillar;