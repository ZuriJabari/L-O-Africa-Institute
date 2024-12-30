import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiCalendar, FiTag, FiX } from 'react-icons/fi';

const BlogFilters = ({ 
  activeFilters, 
  setActiveFilters, 
  categories, 
  tags 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle filter changes
  const handleFilterChange = (type, value) => {
    setActiveFilters(prev => {
      if (type === 'categories' || type === 'tags') {
        const array = prev[type];
        const newArray = array.includes(value)
          ? array.filter(item => item !== value)
          : [...array, value];
        return { ...prev, [type]: newArray };
      }
      if (type === 'dateRange') {
        return { ...prev, dateRange: { ...prev.dateRange, ...value } };
      }
      return prev;
    });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setActiveFilters({
      categories: [],
      tags: [],
      dateRange: { start: '', end: '' }
    });
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition-all"
      >
        <FiFilter className={isOpen ? 'text-[#1e8e92]' : ''} />
        <span>Filters</span>
        {(activeFilters.categories.length > 0 || 
          activeFilters.tags.length > 0 || 
          activeFilters.dateRange.start || 
          activeFilters.dateRange.end) && (
          <span className="bg-[#1e8e92] text-white text-xs px-2 py-1 rounded-full">
            Active
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl p-6 z-50"
          >
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 flex items-center">
                <FiTag className="mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label 
                    key={category.slug}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={activeFilters.categories.includes(category.slug)}
                      onChange={() => handleFilterChange('categories', category.slug)}
                      className="rounded text-[#1e8e92] focus:ring-[#1e8e92]"
                    />
                    <span>{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <button
                    key={tag.slug}
                    onClick={() => handleFilterChange('tags', tag.slug)}
                    className={`
                      px-3 py-1 rounded-full text-sm transition-colors
                      ${activeFilters.tags.includes(tag.slug)
                        ? 'bg-[#1e8e92] text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                      }
                    `}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Date Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 flex items-center">
                <FiCalendar className="mr-2" />
                Date Range
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  value={activeFilters.dateRange.start}
                  onChange={(e) => handleFilterChange('dateRange', { start: e.target.value })}
                  className="rounded border-gray-300 focus:ring-[#1e8e92] focus:border-[#1e8e92]"
                />
                <input
                  type="date"
                  value={activeFilters.dateRange.end}
                  onChange={(e) => handleFilterChange('dateRange', { end: e.target.value })}
                  className="rounded border-gray-300 focus:ring-[#1e8e92] focus:border-[#1e8e92]"
                />
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={handleClearFilters}
              className="w-full px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogFilters; 