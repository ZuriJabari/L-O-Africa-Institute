import React from "react";
import { graphql, Link } from "gatsby";

const PublicationsComponent = ({ data }) => {
  const publicationArticles = data.allPrismicBlogPosts.nodes;

  if (!publicationArticles || publicationArticles.length === 0) {
    return <p className="text-center text-gray-600">No publications available.</p>;
  }

  return (
    <section className="container mx-auto px-6 lg:px-20 py-10">
      <h1 className="text-4xl font-bold mb-8">Latest Publications</h1>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicationArticles.map((article) => (
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
              <p className="text-sm text-gray-500">
                Published on {article.data.publish_date}
              </p>
              <p className="text-gray-700 line-clamp-3">{article.data.excerpt}</p>
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
    </section>
  );
};

export const query = graphql`
  query {
    allPrismicBlogPosts(
      filter: { data: { categories: { elemMatch: { category: { eq: "Publications" } } } } }
      sort: { fields: data___publish_date, order: DESC }
    ) {
      nodes {
        id
        uid
        data {
          title
          publish_date
          excerpt
          featured_image {
            url
          }
        }
      }
    }
  }
`;

export default PublicationsComponent;
