const path = require('path');
const fs = require('fs');
const { fellowsData } = require('./src/data/fellows-data');
const championsModule = require('./src/data/champions-data');
const championsData = championsModule.championsData;

// Add webpack configuration to handle punycode deprecation
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        "punycode": false
      }
    }
  });

  // Add webpack config to disable source maps in production
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false
    })
  }
};

// Configure file system source for images
exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type File implements Node {
      sourceInstanceName: String
    }
  `);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create Huduma champion pages
  Object.entries(championsData).forEach(([year, champions]) => {
    champions.forEach((champion) => {
      // Generate slug from full name
      const slug = champion.name.toLowerCase().replace(/\s+/g, '-');
      
      const championData = {
        name: champion.name,
        role: champion.role,
        organization: champion.organization,
        imageFilename: `champions/${champion.imageFilename}`,
        bio: champion.bio || '',
        class: year,
        slug,
        social: champion.social || null,
        achievements: champion.achievements || null,
        quote: champion.quote || null
      };

      // Log the page creation for debugging
      console.log(`Creating champion page: /huduma/champions/${slug}`);
      console.log('Champion data:', championData);

      createPage({
        path: `/huduma/champions/${slug}`,
        component: path.resolve('./src/templates/huduma-champion.js'),
        context: championData
      });
    });
  });

  // Fetch all team member images
  const imageResult = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "team" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 800
              formats: [AUTO, WEBP],
              placeholder: BLURRED,
              transformOptions: { fit: COVER }
            )
          }
        }
      }
    }
  `);

  if (imageResult.errors) {
    console.error(imageResult.errors);
    throw imageResult.errors;
  }

  const images = imageResult.data.allFile.nodes;

  // Fetch Blog Posts
  const blogResult = await graphql(`
    query {
      allPrismicBlogPosts {
        nodes {
          uid
          data {
            title
            excerpt
            author
            publish_date
            featured_image {
              url
              alt
            }
          }
        }
      }
    }
  `);

  if (blogResult.errors) {
    console.error("Error fetching blog posts:", blogResult.errors);
    throw blogResult.errors;
  }

  if (!blogResult.data || !blogResult.data.allPrismicBlogPosts) {
    console.warn("No blog posts found or invalid data structure");
    return;
  }

  const blogPosts = blogResult.data.allPrismicBlogPosts.nodes || [];
  
  blogPosts.forEach((node) => {
    if (!node.uid) {
      console.warn("Skipping blog post with missing uid:", node);
      return;
    }

    const path = `/blog/${node.uid}`;
    console.log(`Creating blog post page: ${path}`);
    
    createPage({
      path,
      component: require.resolve("./src/templates/blogPost.js"),
      context: {
        uid: node.uid,
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

  // Create team member pages
  const boardMembers = [
    {
      name: "Magnus Mchunguzi",
      role: "Co-Founder & Chairman of the Board",
      imageName: "Magnus",
      bio: "Magnus Mchunguzi is a distinguished leader with extensive experience in organizational development and strategic leadership. As the Co-Founder and Chairman of the Leadership Enlightenment Organization (LEO), he drives innovation in governance and ethical leadership across East Africa.\n\nWith a passion for transformative leadership, Magnus has dedicated his career to developing and implementing innovative solutions that address complex organizational challenges. His approach combines strategic thinking with practical implementation, ensuring sustainable impact in the organizations he works with.",
      quote: "We believe that ideas matter in moving our societies forward. We also strongly believe networks of thinkers and doers are valuable in advancing global collaborations and partnerships for development.",
      slug: "magnus-mchunguzi",
      social: {
        linkedin: "https://www.linkedin.com/in/magnus-mchunguzi",
        twitter: "https://twitter.com/MagnusMchunguzi"
      },
      focusAreas: {
        strategic: ["Organizational Development", "Change Management", "Leadership Development", "Strategic Planning"],
        innovation: ["Ethical Leadership", "Governance Systems", "Social Innovation", "Capacity Building"]
      },
      vision: "Our vision at LEO is to create a new generation of ethical leaders who will drive positive change across Africa. We believe in the power of transformative leadership to create sustainable impact and build the Africa we want to see."
    },
    {
      name: "Awel Uwihanganye",
      role: "Co-founder & Board Member",
      imageName: "Awel",
      bio: "Awel Uwihanganye is an accomplished management & leadership specialist with expert skills in executive management, communications and public relations, resource mobilization, diplomacy, and leadership development.\n\nAs a founder of several change initiatives, he is keenly interested in entrepreneurship, in the power of ideas, to change lives, shape society, and advance development, and 'envisions Africa as a frontier for opportunity and growth with a confident, self-aware generation of rising African leaders at the center of this renaissance'.\n\nHe is a proud alumnus of Concordia University-Montreal Canada, a privileged fellow of the African Leadership Initiative—East Africa, and a Member of the Aspen Institute's Global Leadership Network.",
      quote: "Through our fellowship programs, events and other activities, we foster quality networks among Africa's young and emerging leaders. We are working towards building a critical mass of ethical and values-based leaders.",
      slug: "awel-uwihanganye",
      social: {
        linkedin: "https://www.linkedin.com/in/awel-uwihanganye-58a96b149",
        twitter: "https://twitter.com/Uwihanganye_A"
      },
      focusAreas: {
        strategic: ["Executive Management", "Communications", "Resource Mobilization", "Leadership Development"],
        innovation: ["Social Innovation", "Change Management", "Diplomacy", "Entrepreneurship"]
      }
    },
    {
      name: "Catherinerose Barretto",
      role: "Board Member",
      imageName: "Catherinerose",
      bio: "Catherinerose Barretto is in pursuit of creating a future that is equitable, where the principles of diversity, equity and inclusion are understood and practiced. She is invested in building inclusive ecosystems and creating a workforce with skills that are in demand.\n\nShe has extensive experience working in talent acquisition and skills development in Eastern and Southern Africa; and supporting African start-ups, SMEs and entrepreneurs to develop solutions and build sustainable ventures.\n\nShe is a Fellow of the African Leadership EA Initiative and a member of the Aspen Global Leadership Network; Board member of the Alliance Francaise de Dar es Salaam; Steering Committee member for the Skills For Employment Tanzania Project, Board member of the African Leadership Initiative EA, and Founding Curator of the Dar es Salaam Global Shapers Hub.",
      slug: "catherinerose-barretto",
      focusAreas: {
        strategic: ["Talent Acquisition", "Skills Development", "Diversity & Inclusion", "Leadership Development"],
        innovation: ["Ecosystem Building", "Entrepreneurship Support", "Workforce Development", "Social Impact"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/catherinerose-barretto",
        twitter: "https://twitter.com/CatherineroseB"
      }
    },
    {
      name: "Kevin Langley",
      role: "Board Member",
      imageName: "Kevin_Langley",
      bio: "Kevin Langley is an experienced Marketing Executive, with over 20 years of senior management at VISA. He currently serves as the Head Of Marketing for Visa CEME and is based in Dubai, UAE.",
      slug: "kevin-langley",
      focusAreas: {
        strategic: ["Marketing Strategy", "Brand Development", "Team Leadership", "Strategic Planning"],
        innovation: ["Digital Marketing", "Market Expansion", "Customer Experience", "Innovation Management"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/kevin-langley-visa"
      }
    },
    {
      name: "William Babigumira",
      role: "Board Member",
      imageName: "William",
      bio: "William Babigumira's professional experience spans the Public and Private sectors (a total of eighteen years) with extensive managerial and consulting experience in international business strategy, entrepreneurship, e-commerce, project management, and enterprise development.\n\nWilliam is the Chief Executive Officer of Pentascope Strategy Consult Ltd and Head of Faculty at LéO Africa Institute.",
      quote: "In a fast-changing world, with increased human and environmental challenges, transformational and ethical leadership becomes a critical tool to build better societies, and indeed a better world.",
      slug: "william-babigumira",
      focusAreas: {
        strategic: ["Business Strategy", "Project Management", "Enterprise Development", "Consulting"],
        innovation: ["E-commerce", "Entrepreneurship", "Public-Private Partnership", "Strategic Leadership"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/william-babigumira"
      }
    },
    {
      name: "Conrad Mugisha",
      role: "Board Member",
      imageName: "conrad",
      bio: "Conrad Mugisha is a businessman with extensive experience working in the retail industry. He is skilled in Business Development, Retail Sales, and Project and Product Management and is a LéO Africa Institute Fellow from the Young & Emerging Leaders Project (YELP) Class of 2017. He is passionate about social economic development, with particular interest in the financial sector.",
      slug: "conrad-mugisha",
      focusAreas: {
        strategic: ["Business Development", "Retail Management", "Project Management", "Product Management"],
        innovation: ["Social Economic Development", "Financial Sector Innovation", "Retail Innovation", "Business Strategy"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/conrad-mugisha"
      }
    },
    {
      name: "Fiona Mbabazi",
      role: "Board Member",
      imageName: "fiona",
      bio: "Fiona Mbabazi is a communications specialist working with RwandAir as a Communication Manager. A former journalist working with the state media Rwanda Broadcasting Agency, with an experience of 12 years in this field, and is a LéO Africa Institute Fellow from the Young & Emerging Leaders Project Class of 2017.",
      slug: "fiona-mbabazi",
      focusAreas: {
        strategic: ["Communications Strategy", "Media Relations", "Corporate Communications", "Brand Management"],
        innovation: ["Digital Communications", "Content Strategy", "Stakeholder Engagement", "Crisis Communication"]
      },
      social: {
        twitter: "https://twitter.com/FionaMbabazi"
      }
    },
    {
      name: "Rosie Lorie",
      role: "Board Member",
      imageName: "Rosie-Lorie",
      bio: "Rosie Lorie is a seasoned process facilitator and certified coach, adept at enabling organisations scale their leadership effectiveness in order to create the sustained, outstanding results that matter most to them.",
      quote: "I exist to inspire courage in individuals, to crush mediocrity, expand possibilities, and create lasting impact. I am a persuasive communicator and consummate connector",
      slug: "rosie-lorie",
      focusAreas: {
        strategic: ["Process Facilitation", "Leadership Coaching", "Organizational Development", "Team Building"],
        innovation: ["Leadership Innovation", "Change Management", "Performance Enhancement", "Impact Scaling"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/rosie-lorie"
      }
    }
  ];

  const teamMembers = [
    {
      name: "Awel Uwihanganye",
      role: "Founder & Senior Director",
      imageName: "Awel",
      bio: "Awel Uwihanganye is an accomplished management & leadership specialist with expert skills in executive management, communications and public relations, resource mobilization, diplomacy, and leadership development.\n\nAs a founder of several change initiatives, he is keenly interested in entrepreneurship, in the power of ideas, to change lives, shape society, and advance development, and 'envisions Africa as a frontier for opportunity and growth with a confident, self-aware generation of rising African leaders at the center of this renaissance'.\n\nHe is a proud alumnus of Concordia University-Montreal Canada, a privileged fellow of the African Leadership Initiative—East Africa, and a Member of the Aspen Institute's Global Leadership Network.",
      quote: "Through our fellowship programs, events and other activities, we foster quality networks among Africa's young and emerging leaders. We are working towards building a critical mass of ethical and values-based leaders.",
      slug: "awel-uwihanganye",
      social: {
        linkedin: "https://www.linkedin.com/in/awel-uwihanganye-58a96b149",
        twitter: "https://twitter.com/Uwihanganye_A"
      },
      focusAreas: {
        strategic: ["Executive Management", "Communications", "Resource Mobilization", "Leadership Development"],
        innovation: ["Social Innovation", "Change Management", "Diplomacy", "Entrepreneurship"]
      }
    },
    {
      name: "Nelson Asiimwe Mushabe",
      role: "Program Manager",
      imageName: "Nelson",
      bio: "Leads program implementation and stakeholder engagement.",
      slug: "nelson-asiimwe",
      focusAreas: {
        strategic: ["Program Management", "Stakeholder Engagement", "Project Implementation", "Team Leadership"],
        innovation: ["Program Innovation", "Impact Assessment", "Partnership Development", "Community Engagement"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/nelson-asiimwe",
        twitter: "https://twitter.com/NelsonAsiimwe"
      }
    },
    {
      name: "Nnanda Kizito Sseruwagi",
      role: "Media and Communications Officer",
      imageName: "Nanda",
      bio: "",
      slug: "nnanda-kizito",
      focusAreas: {
        strategic: ["Communications Strategy", "Media Relations", "Content Development", "Brand Management"],
        innovation: ["Digital Media", "Social Media Strategy", "Storytelling", "Community Building"]
      },
      social: {
        linkedin: "https://www.linkedin.com/in/nnanda-kizito",
        twitter: "https://twitter.com/NnandaKizito"
      }
    }
  ];

  // Create pages for board members and team members
  [...boardMembers, ...teamMembers].forEach(member => {
    // Fix the image extension mapping
    const getImageExtension = (imageName) => {
      const pngImages = ['Kevin_Langley', 'Magnus', 'Catherinerose', 'fiona', 'Rosie-Lorie', 'Nelson'];
      return pngImages.includes(imageName) ? 'png' : 'jpg';
    };

    const profileData = {
      name: member.name,
      subtitle: member.role,
      image: `../src/assets/images/team/${member.imageName}.${getImageExtension(member.imageName)}`,
      bio: typeof member.bio === 'string' ? member.bio.split('\n\n') : member.bio,
      social: member.social || null,
      focusAreas: member.focusAreas || null,
      quote: member.quote || null
    };

    // Use the correct slug for the URL
    const slug = member.name === "Catherinerose Barretto" ? "catherinerose-barreto" : member.slug;

    createPage({
      path: `/about/team/${slug}`,
      component: require.resolve("./src/templates/team-member.js"),
      context: {
        data: profileData
      },
    });
  });

  // Create fellow pages
  console.log('Creating fellow pages...');
  Object.entries(fellowsData).forEach(([year, fellows]) => {
    console.log(`Creating pages for fellows from year ${year}`);
    fellows.forEach((fellow) => {
      console.log(`Creating page for fellow: ${fellow.name}`);
      createPage({
        path: `/yelp/fellows/${fellow.slug}`,
        component: path.resolve('./src/templates/yelp-fellow.js'),
        context: fellow,
      });
    });
  });
};
