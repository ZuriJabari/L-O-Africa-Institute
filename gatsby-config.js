module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true
  },
  pathPrefix: `/`,
  siteMetadata: {
    title: `LéO Africa Institute`,
    description: `The LéO Africa Institute is a pan-African organization that nurtures and empowers young leaders to positively transform society.`,
    siteUrl: `https://leoafricainstitute.org`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LéO Africa Institute`,
        short_name: `LéO Africa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f6911e`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`, // Changed to PNG
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },
    // Move the rest of your plugins after manifest and offline plugins
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `champions`,
        path: `${__dirname}/src/assets/images/champions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `leoafrica`,
        accessToken: `MC5aemlRVFJNQUFDRUEwWjVy.OO-_ve-_vVrvv71d77-9fu-_vUc_LO-_ve-_vTE077-977-9C--_ve-_vUEq77-977-977-977-9MO-_ve-_ve-_vTM`,
        schemas: {
          blog_posts: require('./src/schemas/blog_posts.json'),
          publications: require('./src/schemas/publication.json'),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/dev-404-page', '/404', '/404.html'],
        createLinkInHead: true
      }
    }
  ],
};