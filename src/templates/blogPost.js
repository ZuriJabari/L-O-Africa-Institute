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
      <section className="h-[70vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 lg:px-20 bg-black bg-opacity-80 text-white">
          <div className="container mx-auto">
            <div className="flex items-center mb-4">
              {blog.author_picture?.url && (
                <img
                  src={blog.author_picture.url}
                  alt={blog.author || "Author"}
                  className="w-16 h-16 rounded-full mr-4"
                />
              )}
              <p className="text-sm text-gray-300">
                By <span className="font-semibold">{blog.author || "Unknown"}</span> | {blog.publish_date}
              </p>
            </div>
            {/* Horizontal Line */}
            <hr className="border-t border-gray-500 my-4" />
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 hover:scale-105 transition-transform duration-500">
              {blog.title}
            </h1>
            <p className="text-lg lg:text-xl italic text-gray-300 mb-6 leading-relaxed">
              {blog.excerpt}
            </p>
            <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
              {RichText.asText(blog.introduction.raw)}
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-base font-semibold">Share this article:</span>
              <FacebookShareButton url={shareUrl} quote={blog.title}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={blog.title}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={blog.title}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </div>
            {/* Back to Blogs Link */}
            <div className="flex justify-start">
              <Link
                to="/news"
                className="flex items-center text-lg font-semibold text-[#f6911e] hover:underline transition-all duration-300"
              >
                <span className="animate-pulse mr-2">&larr;</span>
                <span>News & Media</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url(${blog.featured_image?.url || ""})`,
          }}
        ></div>
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
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-20 h-fit bg-gray-50 rounded-lg shadow-md p-6">
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-[#f6911e] pb-2">
              Read Further
            </h3>
            <ul className="space-y-4">
              {relatedPosts.map(({ node }, index) => (
                <li key={index} className="hover:bg-gray-100 transition duration-200 rounded-lg p-2">
                  <Link to={`/blog/${node.uid}`} className="text-lg text-[#1e8e92] font-medium hover:underline">
                    <span className="font-bold text-xl">{node.data.title}</span>
                  </Link>
                  <p className="text-sm text-gray-500">
                    By {node.data.author || "Unknown"} | {node.data.publish_date || "No Date"}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Link
                to="/blog"
                className="text-sm font-semibold text-[#f6911e] hover:underline"
              >
                View More
              </Link>
            </div>
          </section>
        </aside>
      </article>
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
        introduction {
          raw
        }
        content {
          raw
        }
        featured_image {
          url
        }
      }
    }
    allPrismicBlogPosts(limit: 5, sort: { data: { publish_date: DESC } }) {
      edges {
        node {
          uid
          data {
            title
            author
            publish_date
          }
        }
      }
    }
  }
`;

export default BlogPage;
