module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `LéO Africa Institute`,
    description: `The LéO Africa Institute is a pan-African organization that nurtures and empowers young leaders to positively transform society.`,
    siteUrl: `https://leoafricainstitute.org`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LéO Africa Institute`,
        short_name: `LéO Africa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0B9A9E`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none'
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
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