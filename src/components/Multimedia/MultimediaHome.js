import React from "react";
import { Link } from "gatsby";

const MultimediaHome = ({ data }) => {
  const multimediaItems = data?.allPrismicBlogPosts?.nodes || [];
  const featuredItem = multimediaItems[0]; // The first item as featured
  const otherItems = multimediaItems.slice(1, 4); // Limit to next 3 items for More Insights

  if (multimediaItems.length === 0) {
    return <p className="text-center text-gray-600">No multimedia items available.</p>;
  }

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
                {featuredItem.data.categories?.length > 0 && (
                  <span className="font-inter text-sm font-medium bg-[#1d8f92] text-white px-3 py-1 rounded-full">
                    {featuredItem.data.categories[0].category}
                  </span>
                )}
              </div>
              <p className="font-inter text-gray-500 text-sm">
                Published on {featuredItem.data.publish_date} by{" "}
                {featuredItem.data.author || "Unknown"}
              </p>
              <h3 className="font-playfair text-4xl font-extrabold leading-tight text-gray-800">
                <Link to={`/blog/${featuredItem.uid}`} className="hover:underline">
                  {featuredItem.data.title}
                </Link>
              </h3>
              {featuredItem.data.introduction && (
                <div className="font-inter text-lg text-gray-600 space-y-4">
                  {featuredItem.data.introduction.map((block, index) => (
                    <p key={index}>{block.text}</p>
                  ))}
                </div>
              )}
              <p className="font-inter text-lg text-gray-600">{featuredItem.data.excerpt}</p>
              <Link
                to={`/blog/${featuredItem.uid}`}
                className="font-inter inline-block bg-[#1d8f92] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#f6941e] transition-all duration-300"
              >
                Read More →
              </Link>
            </div>

            {/* Right: Image */}
            <div className="relative h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
              <img
                src={featuredItem.data.featured_image.url}
                alt={featuredItem.data.featured_image.alt || featuredItem.data.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      )}

      {/* More Insights Section */}
      <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-6">More Insights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/blog/${item.uid}`}>
              {item.data.featured_image?.url && (
                <img
                  src={item.data.featured_image.url}
                  alt={item.data.title || "Article"}
                  className="w-full h-48 object-cover"
                />
              )}
            </Link>
            <div className="p-4">
              <h4 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                <Link to={`/blog/${item.uid}`} className="hover:underline">
                  {item.data.title}
                </Link>
              </h4>
              <p className="font-inter text-sm text-gray-600 mb-4">{item.data.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="font-inter text-xs text-gray-500">
                  {item.data.publish_date}
                </span>
                <Link
                  to={`/blog/${item.uid}`}
                  className="font-inter text-[#1d8f92] text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Browse More News Link */}
      <div className="text-right mt-8">
        <Link
          to="/news"
          className="font-inter text-[#1d8f92] font-semibold hover:underline"
        >
          Browse More News →
        </Link>
      </div>
    </section>
  );
};

export default MultimediaHome;
