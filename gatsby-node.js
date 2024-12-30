const path = require('path');
const fs = require('fs');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Fetch Blog Posts
  const blogResult = await graphql(`
    query {
      allPrismicBlogPosts {
        nodes {
          id
          uid
        }
      }
    }
  `);

  if (blogResult.errors) {
    console.error(blogResult.errors);
    throw blogResult.errors;
  }

  blogResult.data.allPrismicBlogPosts.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.uid}`,
      component: require.resolve("./src/templates/blogPost.js"),
      context: {
        id: node.id,
      },
    });
  });

  // Fetch Publications
  const publicationsResult = await graphql(`
    query {
      allPrismicPublications {
        nodes {
          id
          uid
        }
      }
    }
  `);

  if (publicationsResult.errors) {
    console.error(publicationsResult.errors);
    throw publicationsResult.errors;
  }

  publicationsResult.data.allPrismicPublications.nodes.forEach((node) => {
    createPage({
      path: `/publications/${node.uid}`,
      component: require.resolve("./src/templates/publication.js"),
      context: {
        id: node.id,
      },
    });
  });

  // Create team member pages only if they exist
  const teamMembers = [
    'awel-uwihanganye',
    'magnus-mchunguzi',
    'william-babigumira',
    'rosie-lorie',
    'kevin-langley',
    'brian-turyabagye',
    'christine-isimbi',
    'mohamed-sharif',
    'taonga-chisamanga',
    'vanessa-nkesha',
    'sameer-luyombo',
    'aristide-kambale',
    'priscilla-busulwa',
    'ivan-kibuuka',
    'mujjuzi-azizi',
    'loise-machira',
    'mohamed-shidane'
  ];

  teamMembers.forEach(slug => {
    const componentPath = path.resolve(`./src/pages/about/team/${slug}.js`);
    if (fs.existsSync(componentPath)) {
      createPage({
        path: `/about/team/${slug}`,
        component: componentPath,
        context: {
          slug,
          previousPath: '/about/team'
        }
      });
    }
  });
};
