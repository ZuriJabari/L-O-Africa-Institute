import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import debounce from 'lodash/debounce';

const BlogSearch = ({ searchQuery, setSearchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [isFocused, setIsFocused] = useState(false);

  // Debounce the search to avoid too many re-renders
  const debouncedSearch = debounce((value) => {
    setSearchQuery(value);
  }, 300);

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setLocalQuery(value);
    debouncedSearch(value);
  };

  // Clear search
  const handleClear = () => {
    setLocalQuery('');
    setSearchQuery('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full md:w-96"
    >
      <div className={`
        relative rounded-full border-2 transition-all duration-300
        ${isFocused 
          ? 'border-[#1e8e92] shadow-lg' 
          : 'border-gray-200 shadow'
        }
      `}>
        <input
          type="text"
          value={localQuery}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search blogs..."
          className="w-full px-6 py-3 rounded-full focus:outline-none"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
          {localQuery && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="text-gray-400 hover:text-[#1e8e92]"
            >
              <FiX className="w-5 h-5" />
            </motion.button>
          )}
          <FiSearch className={`
            w-5 h-5 transition-colors duration-300
            ${isFocused ? 'text-[#1e8e92]' : 'text-gray-400'}
          `} />
        </div>
      </div>

      {/* Search Suggestions (optional) */}
      <AnimatePresence>
        {isFocused && localQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10"
          >
            {/* Add search suggestions here if needed */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogSearch; 