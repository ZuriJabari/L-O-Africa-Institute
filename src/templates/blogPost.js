import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import Layout from "../components/Layout";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

const BlogPage = ({ data }) => {
  const blog = data.prismicBlogPosts.data;
  const relatedPosts = data.allPrismicBlogPosts.edges; // Fetch related articles
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const articleElement = document.getElementById("article-content");
      if (articleElement) {
        const { top, height } = articleElement.getBoundingClientRect();
        const scrollHeight = window.innerHeight;
        const percentage = Math.min(Math.max((scrollHeight - top) / height, 0), 1);
        setProgress(percentage * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate Read Time
  const calculateReadTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const plainTextContent = RichText.asText(blog.content.raw);
  const readTime = calculateReadTime(plainTextContent);

  return (
    <Layout>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 z-50 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-[#f6911e] to-[#1e8e92] transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${blog.featured_image?.url || ""})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-20 py-20 flex flex-col justify-center min-h-[85vh]">
          {/* Category & Reading Time */}
          <div className="flex items-center space-x-4 text-white/80 mb-6">
            <span className="bg-[#f6911e] px-3 py-1 rounded-full text-sm font-medium">
              {blog.categories?.[0]?.category || "Article"}
            </span>
            <span className="text-sm">⏱ {readTime} min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Author Info & Date */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center space-x-4">
              {blog.author_picture?.url && (
                <img
                  src={blog.author_picture.url}
                  alt={blog.author || "Author"}
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
              )}
              <div>
                <p className="text-white font-medium">{blog.author || "Unknown"}</p>
                <p className="text-white/60 text-sm">{blog.publish_date}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <span className="text-white/80 text-sm">Share:</span>
              <FacebookShareButton url={shareUrl} quote={blog.title}>
                <FacebookIcon size={32} round className="hover:scale-110 transition-transform" />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={blog.title}>
                <TwitterIcon size={32} round className="hover:scale-110 transition-transform" />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round className="hover:scale-110 transition-transform" />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={blog.title}>
                <WhatsappIcon size={32} round className="hover:scale-110 transition-transform" />
              </WhatsappShareButton>
            </div>
          </div>

          {/* Back to News Link */}
          <Link
            to="/news"
            className="inline-flex items-center text-white hover:text-[#f6911e] transition-colors duration-300 group"
          >
            <span className="transform -translate-x-2 group-hover:-translate-x-3 transition-transform">←</span>
            <span className="ml-2">Back to News & Media</span>
          </Link>
        </div>
      </section>

      {/* Content Area */}
      <article
        id="article-content"
        className="container mx-auto px-6 lg:px-20 py-10 flex flex-col lg:flex-row gap-12"
      >
        {/* Main Content */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-4">⏱ {readTime} min read</p>
          <div className="space-y-8 text-xl text-gray-800 leading-relaxed">
            {RichText.render(blog.content.raw)}
          </div>

          {/* Social Share Section */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
              <div className="flex items-center space-x-4">
                <FacebookShareButton url={shareUrl} quote={blog.title}>
                  <FacebookIcon size={40} round className="hover:scale-110 transition-transform" />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={blog.title}>
                  <TwitterIcon size={40} round className="hover:scale-110 transition-transform" />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} round className="hover:scale-110 transition-transform" />
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl} title={blog.title}>
                  <WhatsappIcon size={40} round className="hover:scale-110 transition-transform" />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-20 h-fit space-y-8">
          {/* Read Further Section */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 border-b-2 border-[#f6911e] pb-2">
              Read Further
            </h3>
            <div className="space-y-6">
              {relatedPosts.map(({ node }) => (
                <Link 
                  to={`/blog/${node.uid}`} 
                  key={node.id}
                  className="group block"
                >
                  <article className="flex space-x-4">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={node.data.featured_image?.url || ""}
                        alt={node.data.title}
                        className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors rounded-lg"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-medium text-gray-900 group-hover:text-[#f6911e] transition-colors duration-300 mb-1 line-clamp-2">
                        {node.data.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{node.data.publish_date}</span>
                        <span>•</span>
                        <span className="truncate">{node.data.categories?.[0]?.category || "Article"}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <Link
              to="/news"
              className="inline-flex items-center justify-center w-full mt-6 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#f6911e] transition-colors duration-300 group"
            >
              View All Articles
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Tags Section */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b-2 border-[#f6911e] pb-2">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(relatedPosts.flatMap(({ node }) => 
                node.data.categories?.map(cat => cat.category) || []
              ))).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </article>

      {/* Related Articles Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map(({ node }) => (
              <Link to={`/blog/${node.uid}`} key={node.id} className="group">
                <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={node.data.featured_image?.url || ""}
                      alt={node.data.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#f6911e] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {node.data.categories?.[0]?.category || "Article"}
                      </span>
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#f6911e] transition-colors duration-300 line-clamp-2">
                      {node.data.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {node.data.excerpt}
                    </p>
                    
                    {/* Author and Date */}
                    <div className="flex items-center">
                      {node.data.author_picture?.url && (
                        <img
                          src={node.data.author_picture.url}
                          alt={node.data.author || "Author"}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{node.data.author}</p>
                        <p className="text-sm text-gray-500">{node.data.publish_date}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    prismicBlogPosts(id: { eq: $id }) {
      data {
        title
        author
        author_picture {
          url
        }
        publish_date
        content {
          raw
        }
        introduction {
          raw
        }
        excerpt
        featured_image {
          url
        }
        categories {
          category
        }
      }
    }
    allPrismicBlogPosts(
      limit: 5,
      filter: { id: { ne: $id } }
      sort: { data: { publish_date: DESC } }
    ) {
      edges {
        node {
          id
          uid
          data {
            title
            author
            author_picture {
              url
            }
            publish_date
            excerpt
            featured_image {
              url
            }
            categories {
              category
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
