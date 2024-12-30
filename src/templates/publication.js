import React from "react";
import { graphql } from "gatsby";
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
import { FiDownload } from "react-icons/fi";

const PublicationPage = ({ data }) => {
  const publication = data.prismicPublications.data;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Publications</h1>
          {publication.pdf_file?.url && (
            <a
              href={publication.pdf_file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#f6941e] text-white px-4 py-2 rounded hover:bg-white hover:text-[#f6941e] transition"
            >
              <FiDownload className="mr-2" />
              Download PDF
            </a>
          )}
        </div>
      </section>

      {/* Main Content Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Publication Details */}
          <div className="mb-6">
            {/* Category and Divider */}
            {publication.categories?.[0]?.category && (
              <div className="text-gray-600 mb-2">
                <span className="font-semibold uppercase text-sm text-[#1e8e92]">
                  {publication.categories[0].category}
                </span>
                <hr className="my-2 border-gray-300" />
              </div>
            )}

            {/* Publish Date and Author */}
            <div className="text-sm text-gray-500 mb-4">
              <p>
                Published on:{" "}
                <span className="text-gray-800 font-medium">
                  {publication.publish_date || "Unknown Date"}
                </span>
              </p>
              <p>
                Author:{" "}
                <span className="text-gray-800 font-medium">
                  {publication.authors?.[0]?.author_name || "Unknown"}
                </span>
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-wrap lg:flex-nowrap bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Description and Content */}
            <div className="w-full lg:w-2/3 p-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {publication.title}
              </h2>
              {publication.pdf_file?.url && (
                <a
                  href={publication.pdf_file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#f6941e] text-white px-4 py-2 rounded hover:bg-white hover:text-[#f6941e] transition mb-6"
                >
                  <FiDownload className="inline-block mr-2" />
                  Download PDF
                </a>
              )}
              <div className="text-lg text-gray-800">
                {publication.description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: publication.description.html,
                    }}
                  />
                )}
              </div>
            </div>

            {/* Featured Image */}
            {publication.featured_image?.url && (
              <div className="w-full lg:w-1/3 bg-gray-200">
                <img
                  src={publication.featured_image.url}
                  alt={publication.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>

          {/* Social Media Share Icons */}
          <div className="flex justify-center space-x-4 mt-8">
            <FacebookShareButton url={shareUrl} quote={publication.title}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={publication.title}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={shareUrl} title={publication.title}>
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    prismicPublications(id: { eq: $id }) {
      data {
        title
        publish_date(formatString: "MMMM D, YYYY")
        featured_image {
          url
        }
        description {
          html
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
`;

export default PublicationPage;
