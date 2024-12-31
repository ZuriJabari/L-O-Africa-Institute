import React from "react";
import { Link } from "gatsby";

const MultimediaHome = ({ data = { allPrismicBlogPosts: { nodes: [] } } }) => {
  const multimediaItems = data?.allPrismicBlogPosts?.nodes || [];
  
  // If no items are available, return a minimal section
  if (!multimediaItems || multimediaItems.length === 0) {
    return (
      <section className="container mx-auto px-6 lg:px-20 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-playfair text-4xl font-bold text-gray-800">Featured</h2>
          <Link
            to="/blog"
            className="font-inter text-[#1d8f92] font-semibold hover:underline"
          >
            View All Insights →
          </Link>
        </div>
        <p className="font-inter text-lg text-gray-600 mb-10">
          Stay tuned for our latest multimedia content, stories, and impactful updates.
        </p>
      </section>
    );
  }

  const featuredItem = multimediaItems[0];
  const otherItems = multimediaItems.slice(1, 4);

  return (
    <section className="container mx-auto px-6 lg:px-20 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-playfair text-4xl font-bold text-gray-800">Featured</h2>
        <Link
          to="/blog"
          className="font-inter text-[#1d8f92] font-semibold hover:underline"
        >
          View All Insights →
        </Link>
      </div>
      <p className="font-inter text-lg text-gray-600 mb-10">
        Discover our latest multimedia content, stories, and impactful updates.
      </p>

      {/* Featured Item Section */}
      {featuredItem && (
        <div className="relative bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 p-6 lg:p-10">
              <div className="flex items-center space-x-4">
                <span className="font-inter text-sm font-medium bg-[#f6941e] text-white px-3 py-1 rounded-full">
                  Featured
                </span>
                {featuredItem.data?.categories?.length > 0 && (
                  <span className="font-inter text-sm font-medium bg-[#1d8f92] text-white px-3 py-1 rounded-full">
                    {featuredItem.data.categories[0].category}
                  </span>
                )}
              </div>
              <p className="font-inter text-gray-500 text-sm">
                {featuredItem.data?.publish_date ? `Published on ${featuredItem.data.publish_date}` : ''} 
                {featuredItem.data?.author ? ` by ${featuredItem.data.author}` : ''}
              </p>
              <h3 className="font-playfair text-4xl font-extrabold leading-tight text-gray-800">
                <Link to={`/blog/${featuredItem.uid}`} className="hover:underline">
                  {featuredItem.data?.title || 'Untitled Post'}
                </Link>
              </h3>
            </div>

            {/* Right: Image */}
            <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
              {featuredItem.data?.featured_image?.url ? (
                <img
                  src={featuredItem.data.featured_image.url}
                  alt={featuredItem.data?.title || 'Featured post'}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* More Insights Grid */}
      {otherItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherItems.map((item) => (
            <Link
              key={item.id}
              to={`/blog/${item.uid}`}
              className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                {item.data?.featured_image?.url ? (
                  <img
                    src={item.data.featured_image.url}
                    alt={item.data?.title || 'Blog post'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                {item.data?.categories?.length > 0 && (
                  <span className="inline-block font-inter text-sm font-medium bg-[#1d8f92] text-white px-3 py-1 rounded-full mb-4">
                    {item.data.categories[0].category}
                  </span>
                )}
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2 group-hover:text-[#f6941e]">
                  {item.data?.title || 'Untitled Post'}
                </h3>
                <p className="font-inter text-sm text-gray-500">
                  {item.data?.publish_date ? `Published on ${item.data.publish_date}` : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default MultimediaHome;
