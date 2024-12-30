// src/pages/searchResults.js
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const SearchResults = ({ data, location }) => {
  const searchQuery = new URLSearchParams(location.search).get("query") || ""
  const results = data.allPrismicBlogPosts.nodes.filter(blog =>
    blog.data.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Search Results</h1>
          <p className="text-lg">Showing results for: <span className="font-semibold">{searchQuery}</span></p>
          <p className="text-sm mt-2">Explore the articles and insights related to your search term.</p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1">
          {results.length > 0 ? (
            results.map(blog => (
              <div key={blog.id} className="mb-8 bg-white shadow-md rounded-lg overflow-hidden flex">
                {blog.data.featured_image.url && (
                  <img src={blog.data.featured_image.url} alt={blog.data.title} className="w-1/3 h-auto object-cover" />
                )}
                <div className="p-6 flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    <Link to={`/blog/${blog.uid}`} className="hover:underline">
                      {blog.data.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">Published on {blog.data.publish_date}</p>
                  <p className="text-base text-gray-700 mb-4">{blog.data.excerpt}</p>
                  <Link to={`/blog/${blog.uid}`} className="text-[#2bbecb] font-semibold hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-600">No results found.</p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Related Content</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/news" className="text-[#2bbecb] hover:underline">
                Latest News
              </Link>
              <p className="text-sm text-gray-600">Stay updated with the latest news and announcements.</p>
            </li>
            <li>
              <Link to="/events" className="text-[#2bbecb] hover:underline">
                Upcoming Events
              </Link>
              <p className="text-sm text-gray-600">Join our upcoming events and webinars.</p>
            </li>
            <li>
              <Link to="/publications" className="text-[#2bbecb] hover:underline">
                Resources
              </Link>
              <p className="text-sm text-gray-600">Access valuable resources and materials.</p>
            </li>
            <li>
              <Link to="/blog" className="text-[#2bbecb] hover:underline">
                Blog
              </Link>
              <p className="text-sm text-gray-600">Read insightful articles and blog posts.</p>
            </li>
          </ul>
        </aside>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicBlogPosts {
      nodes {
        id
        uid
        data {
          title
          author
          publish_date
          excerpt
          featured_image {
            url
          }
        }
      }
    }
  }
`

export default SearchResults