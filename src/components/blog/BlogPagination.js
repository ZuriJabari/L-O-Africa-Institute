import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const BlogPagination = ({ 
  currentPage, 
  totalPages, 
  basePath = '/blog' 
}) => {
  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;
    
    if (!showEllipsis) {
      // Show all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis
      if (currentPage <= 4) {
        // Near the start
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Near the end
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        // Middle
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex justify-center items-center space-x-2 mt-12">
      {/* Previous Page */}
      {currentPage > 1 && (
        <Link
          to={currentPage === 2 ? basePath : `${basePath}/page/${currentPage - 1}`}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiChevronLeft className="w-5 h-5" />
        </Link>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return (
            <span 
              key={`ellipsis-${index}`}
              className="px-4 py-2"
            >
              ...
            </span>
          );
        }

        return (
          <motion.div
            key={page}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to={page === 1 ? basePath : `${basePath}/page/${page}`}
              className={`
                w-10 h-10 flex items-center justify-center rounded-full
                transition-colors
                ${currentPage === page
                  ? 'bg-[#1e8e92] text-white'
                  : 'hover:bg-gray-100'
                }
              `}
            >
              {page}
            </Link>
          </motion.div>
        );
      })}

      {/* Next Page */}
      {currentPage < totalPages && (
        <Link
          to={`${basePath}/page/${currentPage + 1}`}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiChevronRight className="w-5 h-5" />
        </Link>
      )}
    </nav>
  );
};

export default BlogPagination; 