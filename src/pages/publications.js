import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { FiFilter } from "react-icons/fi"; // Importing FiFilter
import {
  HiOutlineDownload,
  HiOutlineArrowRight,
} from "react-icons/hi";
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

const Publications = ({ data }) => {
  const allPublications = data.allPrismicPublications.nodes;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Extract unique categories
  const categories = ["All", ...new Set(allPublications.flatMap(pub => 
    pub.data.categories.map(cat => cat.category)
  ))];

  // Filter and sort publications
  const filteredPublications = allPublications
    .filter(pub => selectedCategory === "All" || 
      pub.data.categories.some(cat => cat.category === selectedCategory))
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.data.publish_date) - new Date(a.data.publish_date);
      }
      return new Date(a.data.publish_date) - new Date(b.data.publish_date);
    });

  // Get featured publication (most recent)
  const featuredPublication = filteredPublications[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">Publications</h1>
            {featuredPublication?.data.pdf_file?.url && (
              <a
                href={featuredPublication.data.pdf_file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#f6941e] text-white px-4 py-2 rounded hover:bg-white hover:text-[#f6941e] transition"
              >
                <HiOutlineDownload className="mr-2" />
                Download PDF
              </a>
            )}
          </div>

          {/* Featured Publication */}
          {featuredPublication ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-800 p-6 rounded-lg shadow-lg">
              {/* Left Content */}
              <div className="space-y-6">
                <p className="text-sm font-medium uppercase text-[#f6941e]">
                  Our Latest Publication
                </p>
                <div className="space-y-2">
                  <span className="text-sm font-medium bg-[#f6941e] px-3 py-1 rounded-full">
                    {featuredPublication.data.categories[0]?.category || "Featured"}
                  </span>
                  <p className="text-sm">{featuredPublication.data.publish_date}</p>
                  <p className="text-sm">
                    Author:{" "}
                    <span className="font-medium">
                      {featuredPublication.data.authors?.[0]?.author_name || "Unknown"}
                    </span>
                  </p>
                </div>
                <h1 className="text-3xl font-bold leading-tight">
                  {featuredPublication.data.title}
                </h1>
                <div className="prose prose-invert max-w-none text-gray-300">
                  {featuredPublication.data.description.text}
                </div>
                {featuredPublication.data.pdf_file?.url && (
                  <a
                    href={featuredPublication.data.pdf_file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-[#f6941e] text-white font-medium rounded hover:bg-white hover:text-[#f6941e] transition-all duration-300"
                  >
                    <HiOutlineDownload className="w-5 h-5" />
                    <span>Download Publication</span>
                  </a>
                )}

                {/* Social Media Share */}
                <div className="flex space-x-4 mt-4">
                  <FacebookShareButton url={featuredPublication.data.pdf_file?.url}>
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={featuredPublication.data.pdf_file?.url}>
                    <TwitterIcon size={40} round />
                  </TwitterShareButton>
                  <LinkedinShareButton url={featuredPublication.data.pdf_file?.url}>
                    <LinkedinIcon size={40} round />
                  </LinkedinShareButton>
                  <WhatsappShareButton url={featuredPublication.data.pdf_file?.url}>
                    <WhatsappIcon size={40} round />
                  </WhatsappShareButton>
                </div>
              </div>

              {/* Right Image */}
              <div>
                <img
                  src={featuredPublication.data.featured_image.url}
                  alt={featuredPublication.data.featured_image.alt || featuredPublication.data.title}
                  className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-bold">No publications available</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Section for LéO Africa Review */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-12">
                <span className="inline-block px-4 py-1 bg-[#F6911E]/10 text-[#F6911E] rounded-full text-sm font-semibold mb-6">
                  Featured Publication
                </span>
                <h2 className="text-3xl font-bold mb-6">LéO Africa Review</h2>
                <p className="text-gray-600 mb-8">
                  Our flagship publication providing in-depth analysis of economic, political, and social issues shaping Africa's future. Written by thought leaders, policy makers, and emerging voices from across the continent.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Expert Analysis</h3>
                      <p className="text-gray-600">In-depth coverage of critical issues by leading experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#F6911E]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#F6911E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Regular Updates</h3>
                      <p className="text-gray-600">Fresh perspectives on Africa's evolving landscape</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://leoafricareview.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-colors"
                >
                  Visit LéO Africa Review
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="bg-[#0B9A9E]/5 p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold mb-2">Latest Edition Highlights</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Economic Integration in East Africa
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Technology & Innovation
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Climate Change & Sustainability
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-semibold mb-2">Subscribe to Updates</h3>
                    <p className="text-gray-600 mb-4">Get the latest articles and analysis delivered to your inbox</p>
                    <form className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#F6911E] text-white rounded-lg font-semibold hover:bg-[#F6911E]/90 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Listing Section */}
      <section className="container mx-auto px-6 lg:px-20 py-12">
        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <FiFilter className="text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1d8f92]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1d8f92]"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.slice(1).map((publication) => (
            <div 
              key={publication.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/publications/${publication.uid}`}>
                <img
                  src={publication.data.featured_image.url}
                  alt={publication.data.featured_image.alt || publication.data.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#f6941e] font-medium">
                    {publication.data.categories[0]?.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {publication.data.publish_date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <Link 
                    to={`/publications/${publication.uid}`}
                    className="hover:text-[#1d8f92] transition-colors duration-300"
                  >
                    {publication.data.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {publication.data.description.text}
                </p>

                <div className="flex items-center justify-between">
                  <Link 
                    to={`/publications/${publication.uid}`}
                    className="text-[#1d8f92] font-medium hover:underline"
                  >
                    Read More
                  </Link>
                  
                  {publication.data.pdf_file?.url && (
                    <a
                      href={publication.data.pdf_file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#1d8f92]"
                    >
                      <HiOutlineDownload className="w-5 h-5" />
                      <span>Download</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query AllPublications {
    allPrismicPublications(sort: { fields: data___publish_date, order: DESC }) {
      nodes {
        id
        uid
        data {
          title
          publish_date(formatString: "MMMM D, YYYY")
          featured_image {
            url
            alt
          }
          description {
            text
          }
          pdf_file {
            url
          }
          categories {
            category
          }
          authors {
            author_name
          }
        }
      }
    }
  }
`;

export default Publications;
