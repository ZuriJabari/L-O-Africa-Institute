import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import ALG24_3 from "../assets/images/ALG24-3.jpg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

  // Separate the featured articles and the rest
  const featuredArticle = allNewsArticles[0]; // First featured article
  const secondFeaturedArticle = allNewsArticles[1]; // Second featured article
  const restArticles = allNewsArticles.slice(2); // Remaining articles

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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Insights</h2>
        <hr className="border-gray-300 mb-6" /> {/* Horizontal ruler */}
        <div className="flex gap-6">
          {[featuredArticle, secondFeaturedArticle].map((article) => {
            const imageData = getImage(article?.featuredImage?.node?.localFile);
            return (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden transition-transform duration-150 hover:scale-100 w-1/2"> {/* Removed shadow effect */}
                <Link to={`/blog/${article.uid}`}> {/* Clickable image */}
                  {imageData ? (
                    <GatsbyImage
                      image={imageData}
                      alt={article?.featuredImage?.node?.altText || ''}
                      className="rounded-lg"
                      onError={(e) => {
                        console.error('Image failed to load:', e);
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : null}
                </Link>
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    <Link to={`/blog/${article.uid}`} className="hover:text-[#1e8e92] transition-colors">
                      {article.data.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Published on {article.data.publish_date} by {article.data.author || "Unknown"}
                  </p>
                  <p className="text-md text-gray-700 mb-4">
                    {article.data.excerpt} {/* Teaser text */}
                  </p>
                  <Link
                    to={`/blog/${article.uid}`}
                    className="mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Insights Section */}
      <div className="container mx-auto px-6 lg:px-20 max-w-[80%]"> {/* Reduced width by 20% */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">More Insights</h2> {/* Changed title and moved inside container */}
        <hr className="border-gray-300 mb-6" /> {/* Horizontal ruler */}
        {restArticles.slice(0, visibleArticles).map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-100 flex"
          >
            {article.data.featured_image?.url && (
              <img
                src={article.data.featured_image.url}
                alt={article.data.title}
                className="w-1/3 h-48 object-cover float-left mr-4" // Float image to the left
              />
            )}
            <div className="p-4 flex flex-col justify-between w-2/3"> {/* Adjusted width */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Published on {article.data.publish_date} by {article.data.author || "Unknown"}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  <Link to={`/blog/${article.uid}`} className="hover:text-[#1e8e92] transition-colors">
                    {article.data.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {article.data.excerpt}
                </p>
              </div>
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
        <div className="text-center mt-8 mb-10"> {/* Added margin to prevent overlap */}
          <hr className="border-gray-300 mb-6" /> {/* Horizontal ruler */}
          <button
            onClick={loadMoreArticles}
            className="bg-[#1d8f92] text-white px-9 py-3 rounded-lg font-medium hover:bg-[#f6941e] transition-all duration-150" // Increased width
          >
            Load More
          </button>
        </div>
      )}
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