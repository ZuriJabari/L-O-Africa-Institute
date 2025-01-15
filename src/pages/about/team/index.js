import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import Layout from '../../../components/Layout';

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "team" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            gatsbyImageData(
              width: 300
              height: 300
              placeholder: BLURRED
              transformOptions: {
                fit: COVER
                cropFocus: CENTER
              }
            )
          }
        }
      }
    }
  }
`;

const TeamPage = ({ data }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Helper function to get image
  const getTeamImage = (imageName) => {
    const imageNode = data.allFile.edges.find(
      ({ node }) => node.name === imageName
    )?.node;
    return imageNode ? getImage(imageNode.childImageSharp) : null;
  };

  // Team Card Component
  const TeamCard = ({ name, role, imageName, bio, delay = 0 }) => {
    const imageData = getTeamImage(imageName);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="flex flex-col bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
      >
        <div className="relative w-full aspect-square mb-4 max-w-[200px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] rounded-lg transform rotate-3"></div>
          {imageData ? (
            <GatsbyImage
              image={imageData}
              alt={name}
              className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg transform -rotate-2"
            />
          ) : (
            <div className="relative z-10 w-full h-full bg-gray-100 rounded-lg shadow-lg transform -rotate-2 flex items-center justify-center">
              <span className="text-gray-400 text-4xl font-bold">{name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-[#0B9A9E] text-lg font-medium mb-4">{role}</p>
          {bio && <p className="text-gray-600 text-lg leading-relaxed">{bio}</p>}
        </div>
      </motion.div>
    );
  };

  const boardMembers = [
    {
      name: "Magnus Mchnguzi",
      role: "Co-Founder & Chairman of the Board",
      imageName: "Magnus",
      bio: "A distinguished leader with extensive experience in organizational development and strategic leadership in East Africa.",
      slug: "magnus-mchnguzi"
    },
    {
      name: "Awel Uwihanganye",
      role: "Co-founder & Board Member",
      imageName: "Awel",
      bio: "A passionate advocate for ethical leadership and social innovation in Africa.",
      slug: "awel-uwihanganye"
    },
    {
      name: "Catherinerose Barreto",
      role: "Board Member",
      imageName: "Catherinerose",
      bio: "Human Capital, Innovation, Entrepreneurship & Gender Consultant",
      slug: "catherinerose-barreto"
    },
    {
      name: "Kevin Langley",
      role: "Board Member",
      imageName: "Kevin_Langley",
      bio: "Head Of Marketing, Visa CEMEA",
      slug: "kevin-langley"
    },
    {
      name: "William Babigumira",
      role: "Board Member",
      imageName: "William",
      bio: "Certified Trade Advisor, Private Sector Federation Rwanda",
      slug: "william-babigumira"
    },
    {
      name: "Conrad Mugisha",
      role: "Board Member",
      imageName: "conrad",
      slug: "conrad-mugisha"
    }
  ];

  const teamMembers = [
    {
      name: "Awel Uwihanganye",
      role: "Co-Founder & Program Lead",
      imageName: "Awel",
      bio: "A passionate advocate for ethical leadership and social innovation in Africa.",
      slug: "awel-uwihanganye"
    },
    {
      name: "Nelson Asiimwe Mushabe",
      role: "Program Manager",
      imageName: "Nelson",
      bio: "Leads program implementation and stakeholder engagement.",
      slug: "nelson-asiimwe"
    },
    {
      name: "Nnanda Kizito Seruwagi",
      role: "Communications & Media Officer",
      imageName: "Nanda",
      bio: "Manages communications and media relations.",
      slug: "nnanda-kizito"
    },
    {
      name: "Abdallah Zubedah",
      role: "Program Officer",
      imageName: "default-profile",
      bio: "Coordinates program activities and partnerships.",
      slug: "abdallah-zubedah"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.div {...fadeIn} className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Meet the Team
              </h1>
              <div className="w-24 h-1.5 bg-white opacity-80"></div>
            </motion.div>
            
            <motion.p {...fadeIn} className="text-2xl md:text-3xl text-white opacity-90 max-w-3xl font-light leading-relaxed">
              Meet the dedicated individuals driving positive change through leadership development in Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <svg 
                className="w-12 h-12 text-[#0B9A9E] mb-6 mx-auto opacity-40" 
                fill="currentColor" 
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="relative z-10">
                <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed max-w-4xl mx-auto">
                  "In a fast-changing world, with increased human and environmental challenges, transformational and ethical leadership becomes a critical tool to build better societies, and indeed a better world."
                </p>
                <div className="flex items-center gap-6 justify-center">
                  <div className="relative">
                    <StaticImage
                      src="../../../assets/images/William.jpg"
                      alt="William Babigumira"
                      className="w-14 h-14 rounded-full object-cover"
                      placeholder="dominantColor"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#F6911E] to-[#0B9A9E]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">William Babigumira</div>
                    <div className="text-sm text-[#0B9A9E]">Senior Faculty & Member of the Board of Directors</div>
                  </div>
                </div>
              </blockquote>
              <div className="absolute inset-0 -z-10">
                <div className="h-full w-full opacity-5 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Governing Board of Directors</h2>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-3xl">
                Our distinguished board members and founders guide LEO Africa Institute's vision and strategic direction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <TeamCard 
                  key={member.name}
                  {...member}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Secretariat Team</h2>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-3xl">
                Meet our dynamic team leading our programs and operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamCard 
                  key={member.name}
                  {...member}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;