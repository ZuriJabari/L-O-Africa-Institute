// TeamMemberCard.js
import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ name, subtitle, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center p-4"
    >
      <div className="relative mb-6 group">
        <div className="w-64 h-64 rounded-full overflow-hidden bg-neutral-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-xl font-medium text-neutral-800 mb-2">
        {name}
      </h3>
      <p className="text-neutral-600 text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default TeamMemberCard;