const path = require('path');
const fs = require('fs');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Fetch all team member images
  const imageResult = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "team" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              width: 800
              height: 1000
              placeholder: BLURRED
              formats: [AUTO, WEBP]
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

  // Create team member pages
  const boardMembers = [
    {
      name: "Magnus Mchnguzi",
      role: "Co-Founder & Chairman of the Board",
      imageName: "Magnus",
      bio: "Magnus Mchnguzi is a distinguished leader with extensive experience in organizational development and strategic leadership. As the Co-Founder and Chairman of the Leadership Enlightenment Organization (LEO), he drives innovation in governance and ethical leadership across East Africa.\n\nWith a passion for transformative leadership, Magnus has dedicated his career to developing and implementing innovative solutions that address complex organizational challenges. His approach combines strategic thinking with practical implementation, ensuring sustainable impact in the organizations he works with.",
      slug: "magnus-mchnguzi",
      social: {
        linkedin: "https://www.linkedin.com/in/magnus-mchnguzi",
        twitter: "https://twitter.com/magnusmchnguzi"
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
      quote: "I have found that when you commit yourself to do good, create value, innovate, and serve society, a lot of good follows. In my case, my contribution to the cause of Africa, humanity, and the world has come with a lot of opportunities and accolades, which in turn challenge me to do more in adding value to the world.",
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
      role: "Co-Founder & Program Lead",
      imageName: "Awel",
      bio: "Awel Uwihanganye is an accomplished management & leadership specialist with expert skills in executive management, communications and public relations, resource mobilization, diplomacy, and leadership development.\n\nAs a founder of several change initiatives, he is keenly interested in entrepreneurship, in the power of ideas, to change lives, shape society, and advance development, and 'envisions Africa as a frontier for opportunity and growth with a confident, self-aware generation of rising African leaders at the center of this renaissance'.\n\nHe is a proud alumnus of Concordia University-Montreal Canada, a privileged fellow of the African Leadership Initiative—East Africa, and a Member of the Aspen Institute's Global Leadership Network.",
      quote: "I have found that when you commit yourself to do good, create value, innovate, and serve society, a lot of good follows. In my case, my contribution to the cause of Africa, humanity, and the world has come with a lot of opportunities and accolades, which in turn challenge me to do more in adding value to the world.",
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
      name: "Nnanda Kizito Seruwagi",
      role: "Communications & Media Officer",
      imageName: "Nanda",
      bio: "Nnanda is the Media and Communications Officer at the LéO Africa Institute. He is a lawyer by training. Nnanda is committed to the structural transformation of the third-world. He writes regularly in Uganda's leading Newspapers. His thoughts have been published in the New Vision, Daily Monitor, The Independent, The Observer, and The Standard (Kenya). He is interested in political economy, development and international relations.",
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
};
