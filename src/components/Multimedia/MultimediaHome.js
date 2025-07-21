import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowRight, FiTrendingUp, FiBookOpen, FiChevronRight } from "react-icons/fi";

const MultimediaHome = ({ data = { allPrismicBlogPosts: { nodes: [] } } }) => {
  const multimediaItems = data?.allPrismicBlogPosts?.nodes || [];
  
  // If no items are available, return a minimal section
  if (!multimediaItems || multimediaItems.length === 0) {
    return (
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="font-serif text-5xl font-bold text-gray-800 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-[#f6941e] after:rounded pb-4">
            Featured Insights
          </h2>
          <Link
            to="/news"
            className="group flex items-center mt-4 md:mt-0 font-sans text-[#1d8f92] font-medium hover:text-[#f6941e] transition-colors duration-300"
          >
            View All Insights 
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
        <p className="font-sans text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
          Stay tuned for our latest multimedia content, stories, and impactful updates.
        </p>
      </section>
    );
  }

  const featuredItem = multimediaItems[0];
  const otherItems = multimediaItems.slice(1, 4);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1 w-12 bg-[#f6941e] rounded-full"></span>
                <span className="text-[#1d8f92] text-sm font-semibold uppercase tracking-wider">Latest Updates</span>
              </div>
              <h2 className="font-serif text-5xl font-bold text-gray-800 mb-3 leading-tight">
                Featured <span className="text-[#1d8f92]">Insights</span>
              </h2>
              <p className="font-sans text-xl text-gray-600 max-w-2xl leading-relaxed">
                Discover our latest multimedia content, stories, and impactful updates from across Africa.
              </p>
            </div>
            
            <Link
              to="/news"
              className="group hidden md:flex items-center mt-4 md:mt-0 bg-[#1d8f92] hover:bg-[#f6941e] text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
            >
              View All Insights 
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Item Section - Takes 7/12 columns on desktop */}
          {featuredItem && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <Link to={`/blog/${featuredItem.uid}`} className="block">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl h-full group hover:shadow-2xl transition-all duration-300">
                  {/* Image with Overlay */}
                  <div className="relative h-96 overflow-hidden">
                    {featuredItem.data?.featured_image?.url ? (
                      <>
                        <img
                          src={featuredItem.data.featured_image.url}
                          alt={featuredItem.data?.title || 'Featured post'}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" style={{ pointerEvents: 'none' }}></div>
                      </>
                    ) : (
                      <div className="relative h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                    
                    {/* Badges positioned over the image */}
                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-3">
                      <span className="font-sans text-sm font-medium bg-[#f6941e] text-white px-4 py-1.5 rounded-full tracking-wide flex items-center">
                        <FiTrendingUp className="mr-1" />
                        Featured
                      </span>
                      {featuredItem.data?.categories?.length > 0 && (
                        <span className="font-sans text-sm font-medium bg-[#1d8f92] text-white px-4 py-1.5 rounded-full tracking-wide">
                          {featuredItem.data.categories[0].category}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-3xl font-bold leading-tight text-gray-800 mb-4 tracking-tight group-hover:text-[#1d8f92] transition-colors duration-300">
                      {featuredItem.data?.title || 'Untitled Post'}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {featuredItem.data?.excerpt || 'Explore our featured insight on leadership and growth in the African context.'}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <div className="flex items-center mr-6">
                          <FiUser className="w-4 h-4 mr-2" />
                          <span>{featuredItem.data?.author || 'LéO Institute'}</span>
                        </div>
                        <div className="flex items-center">
                          <FiClock className="w-4 h-4 mr-2" />
                          <span>{featuredItem.data?.publish_date || 'Recent'}</span>
                        </div>
                      </div>
                      
                      <span 
                        className="inline-flex items-center font-medium text-[#1d8f92] group-hover:text-[#f6941e] transition-colors duration-300"
                      >
                        Read More
                        <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Right Sidebar - Takes 5/12 columns on desktop */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Section Title for Mobile */}
            <h3 className="text-xl font-bold text-gray-700 pb-2 border-b border-gray-200 lg:hidden">More Insights</h3>
            
            {/* More Insights List - Stacked vertically */}
            {otherItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link 
                  to={`/blog/${item.uid}`}
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 block"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden flex-shrink-0">
                    {item.data?.featured_image?.url ? (
                      <img
                        src={item.data.featured_image.url}
                        alt={item.data?.title || 'Blog post'}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                    
                    {item.data?.categories?.length > 0 && (
                      <span className="absolute top-2 left-2 font-sans text-xs font-medium bg-[#1d8f92] text-white px-2 py-0.5 rounded-full">
                        {item.data.categories[0].category}
                      </span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-gray-800 mb-2 leading-tight group-hover:text-[#1d8f92] transition-colors duration-300 line-clamp-2">
                        {item.data?.title || 'Untitled Post'}
                      </h4>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                        {item.data?.excerpt || 'Discover more insights from the LéO Africa Institute.'}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-500 text-xs">{item.data?.publish_date || 'Recent'}</span>
                      
                      <span 
                        className="inline-flex items-center text-sm font-medium text-[#1d8f92] group-hover:text-[#f6941e] transition-colors duration-300"
                      >
                        Read More
                        <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
            
            {/* Mobile View All Button */}
            <Link
              to="/news"
              className="md:hidden flex items-center justify-center py-3 px-5 mt-4 bg-[#1d8f92] hover:bg-[#f6941e] text-white rounded-lg transition-all duration-300 font-medium"
            >
              View All Insights 
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultimediaHome;
