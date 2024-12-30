import React from "react";
import { Link } from "gatsby";

const Blogs = ({ blogs }) => {
  // Log the incoming blogs data
  console.log("Blogs Data:", blogs); // This logs the entire blogs array

  // Filter articles with the category "Blog"
  const blogPosts = blogs.filter(
    (blog) =>
      blog.data.categories &&
      blog.data.categories.some(
        (cat) => cat?.category?.toLowerCase() === "blog"
      )
  );

  if (!blogPosts || blogPosts.length === 0) {
    return <p className="text-center text-gray-600">No blogs available.</p>;
  }

  const featuredBlogs = blogPosts.slice(0, 2); // First two blogs as featured
  const otherBlogs = blogPosts.slice(2); // Rest of the blogs

  return (
    <>
      {/* Spotlight Section Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Spotlight</h2>
        <p className="text-lg text-gray-600">
          Latest analysis, insights, and explainers from across the Institute.
        </p>
      </div>

      {/* Featured Blogs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {featuredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/blog/${blog.uid}`}>
              {blog.data.featured_image?.url && (
                <img
                  src={blog.data.featured_image.url}
                  alt={blog.data.title}
                  className="w-full h-64 object-cover"
                />
              )}
            </Link>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                <Link to={`/blog/${blog.uid}`} className="hover:underline">
                  {blog.data.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Published on {blog.data.publish_date}
                {blog.data.categories[0]?.category && (
                  <span className="ml-2 text-gray-700 font-semibold">
                    • {blog.data.categories[0].category}
                  </span>
                )}
              </p>
              <p className="text-gray-700 line-clamp-3">{blog.data.excerpt}</p>
              <Link
                to={`/blog/${blog.uid}`}
                className="mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Other Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/blog/${blog.uid}`}>
              {blog.data.featured_image?.url && (
                <img
                  src={blog.data.featured_image.url}
                  alt={blog.data.title}
                  className="w-full h-48 object-cover group-hover:opacity-90"
                />
              )}
            </Link>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                <Link
                  to={`/blog/${blog.uid}`}
                  className="hover:text-[#1e8e92] transition-colors"
                >
                  {blog.data.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500">
                Published on {blog.data.publish_date}
                {blog.data.categories[0]?.category && (
                  <span className="ml-2 text-gray-700 font-semibold">
                    • {blog.data.categories[0].category}
                  </span>
                )}
              </p>
              <Link
                to={`/blog/${blog.uid}`}
                className="mt-2 inline-block text-[#1e8e92] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
