import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import ALG24_3 from "../assets/images/ALG24-3.jpg";

const NewsComponent = ({ data }) => {
  const allNewsArticles = data.allPrismicBlogPosts.nodes;

  // State to manage how many articles are visible
  const [visibleArticles, setVisibleArticles] = useState(5); // Start with 5 articles

  // Handle load more functionality
  const loadMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + 5); // Load 5 more articles
  };

  if (!allNewsArticles || allNewsArticles.length === 0) {
    return <p className="text-center text-gray-600">No articles available.</p>;
  }

  // Separate the featured article and the rest
  const featuredArticle = allNewsArticles[0];
  const restArticles = allNewsArticles.slice(1);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ALG24_3})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider text-[#f6911e] bg-white/10 backdrop-blur-sm rounded-full">
                NEWS & MEDIA
              </span>
              <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
                Stories of Impact <br />
                <span className="text-[#f6911e]">& Transformation</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                Discover how our network of leaders and fellows are driving positive change 
                across Africa. From groundbreaking initiatives to inspiring success stories, 
                explore the latest updates from the LéO Africa Institute community.
              </p>
              <div className="mt-8 flex items-center space-x-2 text-white/80">
                <span className="w-8 h-px bg-white/40"></span>
                <span className="text-sm uppercase tracking-wider">Latest Updates & Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="prefooter-gray"></div>

      {/* Insights Section */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        {/* Featured Article */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Insight</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 mb-12">
          {/* Image Section */}
          {featuredArticle.data.featured_image?.url && (
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredArticle.data.featured_image.url}
                alt={featuredArticle.data.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {/* Content Section */}
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              <Link to={`/blog/${featuredArticle.uid}`} className="hover:underline">
                {featuredArticle.data.title}
              </Link>
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Published on {featuredArticle.data.publish_date} by{" "}
              {featuredArticle.data.author || "Unknown"}
            </p>
            <p className="text-gray-700 mb-4">{featuredArticle.data.excerpt}</p>
            <Link
              to={`/blog/${featuredArticle.uid}`}
              className="inline-block bg-[#1d8f92] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#f6941e] transition-all duration-300"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Insights Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">All Insights</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore all insights from various categories and discover the stories,
          updates, and achievements that define our progress.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restArticles.slice(0, visibleArticles).map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/blog/${article.uid}`}>
                {article.data.featured_image?.url && (
                  <img
                    src={article.data.featured_image.url}
                    alt={article.data.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  <Link
                    to={`/blog/${article.uid}`}
                    className="hover:text-[#1e8e92] transition-colors"
                  >
                    {article.data.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Published on {article.data.publish_date} by{" "}
                  {article.data.author || "Unknown"}
                </p>
                <Link
                  to={`/blog/${article.uid}`}
                  className="mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleArticles < restArticles.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreArticles}
              className="bg-[#1d8f92] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#f6941e] transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allPrismicBlogPosts(
      sort: { fields: data___publish_date, order: DESC }
    ) {
      nodes {
        id
        uid
        data {
          title
          publish_date
          author
          excerpt
          featured_image {
            url
          }
        }
      }
    }
  }
`;

export default NewsComponent;
