const path = require('path');
const fs = require('fs');

// Add webpack configuration to handle punycode deprecation
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        "punycode": false
      }
    }
  });
};

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

  // Huduma Champions data
  const hudumaChampions = [
    // Class of 2024
    {
      name: "Alesi Majorine",
      role: "Chief Executive Officer, Zoota Initiative for Development",
      image: "/images/champions/Alesi-Majorine.jpg",
      bio: "Ms. Alesi Majorine is a highly motivated and results-oriented individual with a strong track record in administrative roles. Combining her academic background in Human Resource Management and Business Administration with over seven years of experience, she possesses a well-rounded skillset applicable to various administrative contexts.\n\n" +
           "Ms. Alesi demonstrates a commitment to excellence, exemplified by her proven ability to manage multiple tasks effectively, prioritize workloads, and ensure smooth departmental operations. Her experience ranges from leadership within the public sector to supporting senior officials in academia and the private sector.\n\n" +
           "Currently pursuing a Master's degree in Business Administration at Makerere University, Ms. Alesi's commitment to continuous learning is evident. Her prior academic achievements include a Postgraduate Diploma in Public Administration and Management, a Bachelor of Human Resource Management, a Certificate in Administrative Officers' Law, and certifications in secondary education.\n\n" +
           "As the Chief Executive Officer at Zoota Initiative for Development, Ms. Alesi has refined her leadership capabilities by overseeing various administrative functions, including budgeting, managing staff, and facilitating departmental activities. Her responsibilities encompass planning and coordinating meetings, managing resources, and ensuring the efficient utilization of the organization's assets.\n\n" +
           "Ms. Alesi's decision to pursue the Huduma Fellowship stems from her deep desire to contribute meaningfully to Uganda's development. She views the program as a valuable platform to broaden her knowledge, refine her skills, and connect with like-minded individuals who share her passion for public service.",
      class: "2024",
      slug: "alesi-majorine",
      social: {
        linkedin: "https://www.linkedin.com/in/alesi-majorine",
        twitter: "https://twitter.com/AlesiMajorine"
      }
    },
    {
      name: "Andrew Mbigiti",
      role: "Media and Publicity Supervisor, CNOOC Uganda Limited",
      image: "/images/champions/Andrew-Mbigiti.jpg",
      bio: "Andrew Mbigiti is a dynamic young professional working in the energy sector. He is a Petroleum Engineer with a bachelor's and master's degree in petroleum engineering from China university of petroleum Beijing. He has worked with China University of petroleum Beijing after which he joined the oil and gas sector in Uganda, an area he is passionate about. He is currently working as a Media and Publicity Supervisor at CNOOC Uganda Limited. Andrew believes that effective leadership is crucial for driving positive change and is eager to leverage effective leadership and governance to create a positive impact in his work.",
      class: "2024",
      slug: "andrew-mbigiti"
    },
    {
      name: "Betty Apun",
      role: "Administrative Officer, Leadership Code Tribunal",
      image: "/images/champions/Betty-Apun.jpg",
      bio: "Ms. Betty Apun is a highly motivated and results-oriented individual with a strong track record in administrative roles. Combining her academic background in Human Resource Management and Business Administration with over seven years of experience, she possesses a well-rounded skillset applicable to various administrative contexts.\n\n" +
           "Ms. Apun demonstrates a commitment to excellence, exemplified by her proven ability to manage multiple tasks effectively, prioritize workloads, and ensure smooth departmental operations. Her experience ranges from leadership within the public sector to supporting senior officials in academia and the private sector.\n\n" +
           "Currently pursuing a Master's degree in Business Administration at Makerere University, Ms. Apun's commitment to continuous learning is evident. Her prior academic achievements include a Postgraduate Diploma in Public Administration and Management, a Bachelor of Human Resource Management, a Certificate in Administrative Officers' Law, and certifications in secondary education.\n\n" +
           "As an Administrative Officer at the Leadership Code Tribunal, Ms. Apun has refined her leadership capabilities by overseeing various administrative functions, including budgeting, managing staff, fleet management and facilitating departmental activities. Her responsibilities encompass planning and coordinating meetings, managing resources, and ensuring the efficient utilization of the organization's assets.\n\n" +
           "Previously, Ms. Apun served as an Administrator at Grow Well (U) Limited where she played a key role in financial management, ensuring accurate tax invoicing and stock control. Her experience extends to the academic sector, where she served as an Administrative Assistant in the Vice Chancellor's Office at Busitema University.",
      class: "2024",
      slug: "betty-apun"
    },
    {
      name: "Christelle Kyatengerwa",
      role: "Senior Water Officer, Ministry of Water and Environment",
      image: "/images/champions/Christelle-Kyatengerwa.webp",
      bio: "Kyatengerwa Christelle is a water resources management and engineering professional, with nine years of practice in water resources planning and management. She currently serves as a Senior Water Officer at the Ministry of Water and Environment, where she leads efforts in water resources planning and management.\n\nHolding a Master of Science Degree in Water Resources Engineering from Makerere University, Christelle brings extensive expertise to her role. She has successfully led a donor-sponsored pilot project on catchment-based water resources planning and management in the Upper Nile Water Management Zone.\n\nChristelle's passion for watershed protection and sustainable development is evident in her work. She has been instrumental in developing and implementing water management strategies that balance environmental conservation with community needs. Her approach emphasizes stakeholder engagement and sustainable resource utilization.\n\nBeyond her professional duties, Christelle volunteers as a mentor for girls in STEM, encouraging more young women to pursue careers in water and environmental engineering. She envisions contributing to improved water and environmental governance in Uganda through evidence-based policy implementation and stakeholder engagement.",
      class: "2024",
      slug: "christelle-kyatengerwa",
      social: {
        linkedin: "https://www.linkedin.com/in/christelle-kyatengerwa"
      },
      achievements: [
        "Led successful implementation of catchment-based water resources management projects",
        "Developed innovative approaches to stakeholder engagement in water management",
        "Mentored numerous young women in STEM fields",
        "Contributed to national water resource management policies"
      ]
    },
    {
      name: "Emmanuel Malunga Acidri",
      role: "Assistant Lecturer – Faculty of Law, Uganda Martyrs University",
      image: "/images/champions/Emmanuel-Malunga.jpg",
      bio: "Emmanuel Malunga Acidri is a lawyer by training, with an inclination towards research and management. Presently, he teaches law at Uganda Martyrs University – Nkozi at the rank of Assistant Lecturer. He also works at The Citizen Report as Program Manager and has other work arrangements with Oxford University Press as well as the Commonwealth Youth Human Rights and Democracy Network.\n\n" +
           "When it comes to leadership, Emmanuel's personal philosophy has been that leading from the front belonged to the past where the king personally led the charge of his troops in war against the enemy, while leading from the back belongs to politics of being served as opposed to serving. The true place of the leader is at the center of it all, where they guide the direction and set the example of how to get there. That is servant leadership, and it is true leadership.",
      class: "2024",
      slug: "emmanuel-malunga"
    },
    {
      name: "Jonah Namanya",
      role: "Tax Investigations Officer, Uganda Revenue Authority",
      image: "/images/champions/Jonah-Namanya.jpg",
      bio: "Jonah Namanya is a finance professional with expertise in tax audits, financial analysis, modeling, deal structuring, and general tax administration. Currently serving as a Tax Investigations Officer at the Uganda Revenue Authority, Jonah is in charge of conducting comprehensive tax audits across various sectors, with a focus on uncovering instances of tax fraud and ensuring compliance with regulatory standards, ensuring the recovery of accurate tax liabilities.\n\n" +
           "Prior to his tenure at the Uganda Revenue Authority, Jonah was an Investment Associate at BiD Capital Partners, an impact investment advisory and asset management firm based in East Africa. Here, Jonah was in charge of identifying companies poised for growth capital, conducting due diligence processes, investor mapping, and crafting investor-centric documentation. His proficiency extended to facilitating deal structuring, thereby amplifying investment opportunities for the firm's portfolio.\n\n" +
           "Jonah is a graduate of Makerere University, Kampala, holding a Bachelor of Science Degree in Business Statistics. He is presently pursuing the esteemed Chartered Financial Analyst (CFA) designation.",
      class: "2024",
      slug: "jonah-namanya"
    },
    {
      name: "Victor Arinaitwe",
      role: "Monitoring and Evaluation Officer, Uganda Coffee Development Authority",
      image: "/images/champions/VictorArinaitwe.jpg",
      bio: "Victor Arinaitwe is a male – Ugandan living in Kampala, Uganda. He currently works with Uganda Coffee Development Authority as a Monitoring and Evaluation Officer, a position he has held for the last 8 months. He previously served as a Regional Monitoring and Evaluation Officer under the Expanding Social Protection Program implemented by the Ministry of Gender, Labour and Social Development.\n\n" +
           "Victor holds a bachelors degree in Arts in Development Economics from Makerere University, a Post Graduate Diploma in Monitoring and Evaluation and a Masters in Management Studies specializing in Monitoring and Evaluation, both attained at Uganda Management Institute (UMI).\n\n" +
           "Victor is passionate about promoting evidence-based decision making within organizations where he technically supports data collection and reporting. He has supported over 15 national evaluations in both government and NGO sector. He is competent in designing robust methodologies, team building, capacity building and project planning and management.\n\n" +
           "Victor is also a certified Project Management Professional (PMP) by the Project Management Institute which is one of the most globally recognized certifications for project management.",
      class: "2024",
      slug: "victor-arinaitwe"
    },
    {
      name: "Patricia Keitesi Natukunda",
      role: "Ag. Supervisor Legal Research and Advisory, Uganda Revenue Authority",
      image: "/images/champions/Patricia-Keitesi.webp",
      bio: "Patricia Keitesi Natukunda is a hardworking, solutions-oriented legal practitioner with a flexible and collaborative approach to her career goals. Her current practice areas include Policy, Advisory, Contract drafting, Alternative Dispute Resolution, and Legal Research.\n\n" +
           "Her key strengths are time management, preparation, and team work. She can lead a team and deliver quality work within tight deadlines. She is part of a diverse and brilliant team whose broad talents contribute towards the growth of tax revenue in the country.\n\n" +
           "As she continues to grow and learn in the legal profession, she looks forward to widening her understanding of Board governance and Financial Dynamics.",
      class: "2024",
      slug: "patricia-keitesi"
    },
    {
      name: "Ronnia Tukamuhebwa",
      role: "Oil & Gas Analyst, Uganda Chamber of Mines and Petroleum",
      image: "/images/champions/Ronnia-Tukamuhebwa.jpg",
      bio: "Ronnia Tukamuhebwa is a Ugandan national aged 25, deeply committed to the responsible management of our nation's natural resources. Currently pursuing a Masters in Conservation and Natural Resource Management from Kyambogo University, she holds a bachelor's degree in Oil and Gas Management from Uganda Christian University.\n\n" +
           "In her role at the Uganda Chamber of Mines and Petroleum, she coordinates initiatives advocating for responsible resource management and empowering the future of the young generation in oil and gas. Previously, as an Oil and Gas Analyst, she conducted in-depth research, providing insights into industry dynamics and regulatory frameworks.\n\n" +
           "Her key skills include Oil and Gas Analysis, Environmental Impact Assessment, Stakeholder Engagement, Project Coordination, Policy Analysis and Advocacy, Sustainable Resource Management, Data Analysis and Interpretation, and Research and Report Writing.",
      class: "2024",
      slug: "ronnia-tukamuhebwa"
    },
    {
      name: "Mrs. Irene Esther Mutuzo Sevume",
      role: "Head of Business Growth and PR, Diwala",
      image: "Irene-Esther",
      bio: "Mrs. Irene Esther Mutuzo Sevume is a multifaceted professional currently serving as the Head of Business Growth and PR at Diwala, while also working as an Assistant Lecturer at Makerere University. With expertise in business development, public relations, and academia, she brings a unique perspective to her roles.\n\nHolding advanced degrees in Business Administration and Communications, Irene combines academic excellence with practical business acumen. Her work at Diwala involves developing and implementing growth strategies while managing public relations initiatives.\n\nIrene's approach to business development emphasizes innovation, sustainability, and effective communication. She has been instrumental in driving growth and establishing strong partnerships in the technology sector.\n\nBeyond her professional roles, Irene is passionate about mentoring young professionals and promoting women in technology. Her diverse skill set and commitment to excellence make her a valuable addition to the YELP fellowship program.",
      class: "2024",
      slug: "irene-esther",
      social: {
        linkedin: "https://www.linkedin.com/in/irene-esther-mutuzo",
        twitter: "https://twitter.com/IreneEstherM"
      },
      achievements: [
        "Led successful business growth initiatives",
        "Developed innovative PR strategies",
        "Contributed to academic research and teaching",
        "Recognized for excellence in business development"
      ]
    },
    {
      name: "Matanda Abubaker",
      role: "Magistrate Grade 1, Uganda Judiciary",
      image: "/images/champions/Matanda-Abubaker.jpg",
      bio: "Matanda Abubaker, an Advocate of the High Court of Uganda, currently serves as a Magistrate Grade 1 in the Judiciary. Prior to this role, he held positions as the Guild President at the Islamic University in Uganda (IUIU) and later as the President of the Uganda National Students Association (UNSA).\n\n" +
           "Aside from his judicial duties, Matanda also teaches law at the Islamic University in Uganda, is passionate about and contributes writings on Constitutionalism, rule of law, society, and philosophy, and cherishes his roles as a husband to Mrs. Sumaya Namukose and a father to two boys, Aadil Sankara and Zayn Che Guevara Matanda.\n\n" +
           "Matanda's educational background includes a Masters degree in Oil and Gas Law from Uganda Christian University, a Post Graduate Diploma in Legal Practice from the Law Development Centre, and a Bachelor's Degree in Law from the Islamic University in Uganda. He pursued his secondary education at Kibuli Secondary School for A level, Mbogo Mixed SS for O level, and received his primary education at Mbale Tower P/S.",
      class: "2024",
      slug: "matanda-abubaker"
    },
    {
      name: "Lisa Kanyomozi Rabwoni",
      role: "Founder, Yambi Community Outreach",
      image: "/images/champions/Lisa-Kanyomozi.jpg",
      bio: "Lisa Kanyomozi Rabwoni is a multifaced individual who is passionate about self-development, business and community. She creates content and has published a book 'On the Job' on personal experiences and knowledge that requests one to explore, relearn and question.\n\n" +
           "She runs a fashion brand named Oboniire that creates inclusive accessories and clothing for women by women, she further monetizes her creativity by decorating and redecorating homes under Amaka, a small-scale interior decor company and recently started to offer business development consultancy to small and medium-sized enterprises.\n\n" +
           "Lisa believes in the notion that one must work towards not only changing and improving themselves but also the communities around them most especially the vulnerable and marginalized, this led her to start her charity organization Yambi Community Outreach with the work model being communities changing communities. The organization is currently focused on providing access to menstrual health education and products to slum areas within Kampala, Uganda and is facilitated through crowdfunding initiatives.\n\n" +
           "She has had the opportunity over the past 7 years to work in mainstream media, marketing, advertising and social impact organizations which has accorded her the knowledge and work experience to create, lead and work towards the success of her personal businesses and charity organization.",
      class: "2024",
      slug: "lisa-kanyomozi"
    },
    {
      name: "Jonathan Ssekalega",
      role: "Project Lead, Housing Finance Bank Uganda",
      image: "/images/champions/Jonathan-Ssekalega.jpg",
      bio: "Jonathan Ssekalega is a dynamic project management professional currently serving as Project Lead at Housing Finance Bank Uganda. With extensive experience in banking and project management, he plays a crucial role in driving innovation and efficiency in the banking sector.\n\nHolding a Bachelor's degree in Business Administration and professional certifications in project management, Jonathan brings comprehensive expertise to his role. His work involves leading strategic projects that enhance banking services and improve customer experience.\n\nJonathan's approach to project management emphasizes innovation, efficiency, and stakeholder engagement. He has been instrumental in implementing various initiatives that have improved banking services and operational efficiency.\n\nBeyond his professional role, Jonathan is passionate about financial inclusion and economic empowerment. His commitment to excellence and innovation in banking makes him a valuable addition to the YELP fellowship program.",
      class: "2024",
      slug: "jonathan-ssekalega",
      social: {
        linkedin: "https://www.linkedin.com/in/jonathan-ssekalega"
      },
      achievements: [
        "Successfully led major banking innovation projects",
        "Implemented efficient project management methodologies",
        "Improved banking service delivery systems",
        "Recognized for excellence in project management"
      ]
    },
    {
      name: "Jibran Kamoga",
      role: "Auditor, Office of the Auditor General",
      image: "/images/champions/Jibran-Kamoga.jpg",
      bio: "Jibran Kamoga is an Auditor with extensive experience in the public sector. He holds a Bachelors degree in Business Administration and Management with a specialization in Accounting & Finance, and is currently enrolled with ICPAU to become a Certified Public Accountant.\n\n" +
           "Jibran has been working with the Office of the Auditor General since October 2019 where he has been diligently auditing public finances and ensuring responsible use of resources.\n\n" +
           "Aside from his professional career, he enjoys sports, reading books and spending time with family and friends.",
      class: "2024",
      slug: "jibran-kamoga"
    },
    {
      name: "Esther Nakawombe",
      role: "National Content Officer, Petroleum Authority of Uganda",
      image: "/images/champions/Esther-Nakawombe.jpg",
      bio: "Esther Nakawombe is a dedicated professional currently serving as the National Content Officer at the Petroleum Authority of Uganda. With extensive experience in procurement and management consulting, she plays a crucial role in promoting local content development in Uganda's oil and gas sector.\n\nHolding a Bachelor's degree in Procurement and Supply Chain Management and various professional certifications, Esther brings comprehensive expertise to her role. Her work involves developing and implementing strategies to maximize national participation in Uganda's petroleum sector.\n\nEsther's approach to national content development emphasizes capacity building and sustainable economic growth. She has been instrumental in implementing various initiatives that have increased local participation in the oil and gas sector.\n\nBeyond her professional role, Esther is passionate about mentoring young professionals and promoting sustainable development practices. Her commitment to excellence and national development makes her a valuable addition to the YELP fellowship program.",
      class: "2024",
      slug: "esther-nakawombe",
      social: {
        linkedin: "https://www.linkedin.com/in/esther-nakawombe"
      },
      achievements: [
        "Developed comprehensive national content strategies",
        "Implemented successful capacity building programs",
        "Increased local participation in the oil and gas sector",
        "Recognized for excellence in national content development"
      ]
    },
    {
      name: "Jibran Kamoga",
      role: "Auditor, Office of the Auditor General",
      image: "Jibran-Kamoga",
      bio: "Jibran Kamoga is a seasoned auditor currently serving at the Office of the Auditor General of Uganda. With a strong background in public finance and accountability, he plays a vital role in ensuring transparency and efficiency in public resource management.\n\nHolding a Bachelor's degree in Business Administration and professional certifications in auditing, Jibran brings extensive expertise to his role. His work involves conducting comprehensive audits of government institutions and providing recommendations for improved financial management.\n\nJibran's approach to auditing emphasizes accountability, transparency, and efficiency in public resource utilization. He has been instrumental in identifying and addressing financial management challenges in various government institutions.\n\nAs a YELP fellow, Jibran aims to enhance his leadership capabilities and contribute to the development of more effective public financial management systems in Uganda. His commitment to accountability and good governance makes him a valuable addition to the fellowship program.",
      class: "2024",
      slug: "jibran-kamoga",
      social: {
        linkedin: "https://www.linkedin.com/in/jibran-kamoga"
      },
      achievements: [
        "Led successful audit teams in major government institutions",
        "Developed innovative audit methodologies",
        "Contributed to improved public financial management",
        "Recognized for excellence in public sector auditing"
      ]
    },
    {
      name: "Jonah Namanya",
      role: "Tax Investigations Officer, Uganda Revenue Authority",
      image: "Jonah-Namanya",
      bio: "Jonah Namanya is a finance professional with expertise in tax audits, financial analysis, modeling, and investment advisory. Currently serving as a Tax Investigations Officer at Uganda Revenue Authority, he brings a wealth of experience in financial management and tax administration.\n\n" +
           "Prior to his current role, Jonah worked as an Investment Associate at Pearl Capital Partners, where he was involved in deal sourcing, financial modeling, and due diligence for agribusiness investments across East Africa. His diverse experience spans both public and private sectors.\n\nJonah holds a Bachelor's degree in Business Administration and professional certifications in tax administration. His approach to work emphasizes integrity, efficiency, and innovation in financial management.\n\nAs a YELP fellow, Jonah aims to enhance his leadership capabilities and contribute to improving tax administration and compliance in Uganda. His commitment to professional excellence and public service makes him a valuable addition to the fellowship program.",
      class: "2024",
      slug: "jonah-namanya",
      social: {
        linkedin: "https://www.linkedin.com/in/jonah-namanya"
      },
      achievements: [
        "Successfully led major tax investigation cases",
        "Developed innovative approaches to tax compliance",
        "Contributed to improved revenue collection strategies",
        "Recognized for excellence in financial analysis and tax administration"
      ]
    }
  ];

  // Create individual champion pages
  hudumaChampions.forEach(champion => {
    // Clean up the image path to work with static files
    const imagePath = champion.image
      .replace('/images/champions/', '')  // Remove the /images/champions/ prefix
      .replace('.webp', '')
      .replace('.jpg', '')
      .replace('.png', '');

    const championData = {
      name: champion.name,
      role: champion.role,
      image: imagePath,  // Pass just the filename without path or extension
      bio: champion.bio,
      class: champion.class,
      slug: champion.slug,
      social: champion.social || null,
      achievements: champion.achievements || null,
      quote: champion.quote || null
    };

    // Log the page creation for debugging
    console.log(`Creating champion page: /huduma/champions/${champion.slug}`);
    console.log('Image path:', imagePath);  // Debug log for image path

    createPage({
      path: `/huduma/champions/${champion.slug}`,
      component: require.resolve('./src/templates/huduma-champion.js'),
      context: championData
    });
  });

  // YELP Fellows data
  const { fellowsData } = require('./src/data/fellows-data');

  // Create pages for YELP fellows
  Object.keys(fellowsData).forEach(year => {
    fellowsData[year].forEach(fellow => {
      // Generate slug if not provided
      const slug = fellow.slug || fellow.name.toLowerCase().replace(/\s+/g, '-');
      
      // Clean up the image path - remove the import and use static path
      const imageName = typeof fellow.image === 'string' 
        ? fellow.image.split('/').pop().replace(/\.(jpg|png|webp)$/, '')
        : fellow.name.toLowerCase().replace(/\s+/g, '-');
      
      // Create the fellow data object with complete information
      const fellowData = {
        ...fellow,
        slug,
        image: imageName, // Just pass the image name, template will handle the path
        class: year,
        role: fellow.role || '',
        organization: fellow.organization || '',
        bio: fellow.bio || '',
        social: fellow.social || null,
        achievements: fellow.achievements || null
      };
      
      // Log the page creation for debugging
      console.log(`Creating fellow page: /yelp/fellows/${slug}`);
      console.log('Image path:', imageName);
      
      // Create the page
      createPage({
        path: `/yelp/fellows/${slug}`,
        component: require.resolve('./src/templates/yelp-fellow.js'),
        context: fellowData
      });
    });
  });
};
