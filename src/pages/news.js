import React, { useState } from "react";
import Layout from "../components/Layout";
import InnerHero from "../components/InnerHero";
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
      <InnerHero
        imageSrc={ALG24_3}
        imageAlt="News & Media"
        eyebrow="News & Media"
        title={<>Stories of Impact{' '}<span className="block mt-2">& Transformation</span></>}
        description="Discover how our network of leaders and fellows are driving positive change across Africa."
      />

      {/* Featured Articles */}
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Insights</h2>
        <hr className="border-gray-300 mb-6" /> {/* Horizontal ruler */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[featuredArticle, secondFeaturedArticle].map((article, index) => {
            const image = getImage(article?.data?.featured_image?.gatsbyImageData);
            return (
              <Link key={article.uid} to={`/blog/${article.uid}`} className="group">
                {getImage(article?.data?.featured_image?.gatsbyImageData) ? (
                  <GatsbyImage
                    image={getImage(article.data.featured_image.gatsbyImageData)}
                    alt={article.data.featured_image?.alt || ''}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 rounded-lg mb-4" />
                )}
                <h2 className="mt-4 text-2xl font-bold">{article.data.title}</h2>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Insights Section */}
      <div className="container mx-auto px-6 lg:px-20 max-w-[80%]"> {/* Reduced width by 20% */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">More Insights</h2> {/* Changed title and moved inside container */}
        <hr className="border-gray-300 mb-6" /> {/* Horizontal ruler */}
        {/* More Insights Section */}
        <div className="space-y-6 mb-12"> {/* Reduced from space-y-12 */}
          {restArticles.slice(0, visibleArticles).map((article) => (
            <div key={article.uid}>
              <Link to={`/blog/${article.uid}`} className="group">
                <div className="flex flex-col md:flex-row gap-6 py-4"> {/* Reduced from gap-8 py-8 */}
                  <div className="md:w-1/3">
                    {getImage(article?.data?.featured_image?.gatsbyImageData) ? (
                      <GatsbyImage
                        image={getImage(article.data.featured_image.gatsbyImageData)}
                        alt={article.data.featured_image?.alt || ''}
                        className="w-full aspect-[16/9] rounded-lg transition duration-300 group-hover:shadow-lg"
                      />
                    ) : (
                      <div className="w-full aspect-[16/9] bg-gray-200 rounded-lg" />
                    )}
                  </div>
                  <div className="md:w-2/3 space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-[#2bbecb] transition-colors">
                      {article.data.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {article.data.excerpt}
                    </p>
                    <div className="flex flex-col gap-2">
                      <span className="text-[#2bbecb] font-medium inline-flex items-center gap-2 group-hover:text-[#1a8f9d] transition-colors">
                        Continue Reading
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </span>
                      <div className="text-sm text-gray-500">
                        {new Date(article.data.publish_date).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="border-b border-gray-200 mt-4 last:border-0"></div>
            </div>
          ))}
        </div>
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

const ArticleCard = ({ article }) => {
  const image = getImage(article?.data?.featured_image?.gatsbyImageData);
  
  return (
    <Link to={`/blog/${article.uid}`} className="group block">
      {image ? (
        <GatsbyImage
          image={image}
          alt={article.data.featured_image?.alt || ''}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
      )}
      <h3 className="font-bold text-xl mb-2 group-hover:text-[#2bbecb]">
        {article.data.title}
      </h3>
      <p className="text-gray-600 line-clamp-2">{article.data.excerpt}</p>
    </Link>
  );
};

export const query = graphql`
  query NewsPageQuery {
    allPrismicBlogPosts(sort: { data: { publish_date: DESC } }) {
      nodes {
        uid
        data {
          title
          excerpt
          publish_date
          featured_image {
            gatsbyImageData(
              placeholder: BLURRED
              width: 800
              height: 450
            )
            alt
          }
          categories {
            category
          }
        }
      }
    }
  }
`;

export default NewsComponent;