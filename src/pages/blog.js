import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

const BlogList = ({ data }) => {
  const blogs = data.allPrismicBlogPosts.nodes;

  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-600">No blogs available.</p>;
  }

  // Featured blog (first item)
  const featuredBlog = blogs[0];
  // Other blogs
  const otherBlogs = blogs.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 py-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-6">
            Latest Insights
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Discover inspiring stories, thought-provoking insights, and the
            latest updates shaping our journey toward positive change.
          </p>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={featuredBlog.data.featured_image.url}
              alt={featuredBlog.data.featured_image.alt || featuredBlog.data.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                {featuredBlog.data.author_picture?.url && (
                  <img
                    src={featuredBlog.data.author_picture.url}
                    alt={featuredBlog.data.author || "Author"}
                    className="w-14 h-14 object-cover rounded-full border-2 border-gray-300 shadow-md"
                  />
                )}
                <div>
                  <p className="text-gray-700 text-sm font-medium">
                    {featuredBlog.data.author || "Unknown Author"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Published on {featuredBlog.data.publish_date}
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium bg-[#f6941e] text-white px-3 py-1 rounded-full">
                {featuredBlog.data.categories[0]?.category || "Featured"}
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-gray-800">
              <Link to={`/blog/${featuredBlog.uid}`} className="hover:underline">
                {featuredBlog.data.title}
              </Link>
            </h2>
            <p className="text-lg text-gray-600">{featuredBlog.data.excerpt}</p>

            <Link
              to={`/blog/${featuredBlog.uid}`}
              className="inline-block bg-[#1d8f92] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#f6941e] transition-all duration-300"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Other Blogs Section */}
      <section className="container mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">More Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/blog/${blog.uid}`}>
                {blog.data.featured_image?.url && (
                  <img
                    src={blog.data.featured_image.url}
                    alt={blog.data.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  <Link
                    to={`/blog/${blog.uid}`}
                    className="hover:text-[#1d8f92] transition-colors"
                  >
                    {blog.data.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">
                  Published on {blog.data.publish_date} by{" "}
                  {blog.data.author || "Unknown"}
                </p>
                <p className="text-gray-600 line-clamp-3">{blog.data.excerpt}</p>
                <Link
                  to={`/blog/${blog.uid}`}
                  className="mt-4 inline-block text-[#1d8f92] font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allPrismicBlogPosts(
      filter: { data: { categories: { elemMatch: { category: { eq: "Blog" } } } } }
      sort: { data: { publish_date: DESC } }
    ) {
      nodes {
        id
        uid
        data {
          title
          publish_date
          author
          author_picture {
            url
          }
          featured_image {
            url
          }
          excerpt
          categories {
            category
          }
        }
      }
    }
  }
`;

export default BlogList;
