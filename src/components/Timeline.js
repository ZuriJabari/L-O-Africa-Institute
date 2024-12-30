// src/components/Timeline.js
import React from 'react';
import TimelinePillar from './TimelinePillar';

const Timeline = ({ items }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Our Pillars of Action
        </h2>
        <div className="timeline relative border-l-4 border-[#1e8e92] space-y-12">
          {items.map((item, index) => (
            <TimelinePillar
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;