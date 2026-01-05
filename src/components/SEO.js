import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

/**
 * SEO component for handling all meta tags, including Open Graph and Twitter Card
 */
const SEO = ({ title, description, image, article, pathname }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = site.siteMetadata;

  // Clean image URL from Prismic's URL encoding
  let cleanImage = null;
  if (image) {
    cleanImage = image.replace(/%2C/g, ',');
    if (!cleanImage.startsWith('http')) {
      cleanImage = `${siteUrl}${cleanImage}`;
    }
  }

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: cleanImage,
    url: pathname ? `${siteUrl}${pathname}` : siteUrl,
  };

  return (
    <Helmet title={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={defaultTitle} />
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.image && <meta property="og:image:secure_url" content={seo.image} />}
      {seo.image && <meta property="og:image:alt" content={seo.title} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.image && <meta name="twitter:image:alt" content={seo.title} />}
    </Helmet>
  );
};

export default SEO;
