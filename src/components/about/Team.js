// Team.js
import React from "react";
import { motion } from 'framer-motion';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Import all team member photos
import AwelPhoto from '../../assets/images/Awel1.jpg';
import MagnusPhoto from '../../assets/images/Magnus.png';
import WilliamPhoto from '../../assets/images/William.jpg';
import RosiePhoto from '../../assets/images/Rosie-Lorie.png';
import KevinPhoto from '../../assets/images/Kevin_Langley.png';
import tempPhoto from '../../assets/images/team/default-profile.png';
import NandaPhoto from "../../assets/images/Nanda.jpg";
import AsimwePhoto from "../../assets/images/Asiimwe-Nelson-Mushabe.png";

// ... other imports

// Helper function
const nameToSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const TeamMemberCard = ({ name, subtitle, imagePath, isChair, profileLink }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                width: 512
                height: 512
                placeholder: BLURRED
                formats: [JPG, PNG]
                quality: 90
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
  `);

  const getImageData = (imagePath) => {
    const image = data.allFile.edges.find(
      ({ node }) => node.relativePath === imagePath
    );
    return image?.node?.childImageSharp?.gatsbyImageData;
  };

  const memberSlug = nameToSlug(name);
  const imageData = getImageData(imagePath);
  const defaultImageData = getImageData('team/default-profile.png');

  const handleClick = async (e) => {
    e.preventDefault();
    if (profileLink) {
      await navigate(profileLink);
    } else {
      await navigate(`/about/team/${memberSlug}`);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="block group cursor-pointer"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center p-4"
      >
        <div className="relative mb-6">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-neutral-100 shadow-lg">
            <GatsbyImage
              image={imageData || defaultImageData}
              alt={name}
              className="w-full h-full"
              imgClassName="object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        <h3 className="text-xl font-medium text-neutral-800 mb-2 group-hover:text-[#00babc] transition-colors">
          {name}
        </h3>
        <p className="text-neutral-600 text-lg">
          {subtitle}
        </p>
        {isChair && (
          <span className="mt-2 px-3 py-1 text-sm font-medium text-white bg-[#00babc] rounded-full">
            Board Chairperson
          </span>
        )}
      </motion.div>
    </div>
  );
};

const teamData = [
  {
    type: "Board of Directors",
    description: "Our governance board is constituted with individuals whose integrity is beyond reproach and with whom we share a commitment to create a better society and future with young people at the center of shaping leadership action.",
    members: [
      {
        name: "Magnus Mchunguzi",
        subtitle: "Co-Founder & Board Chairperson, LéO Africa Institute",
        imagePath: "Magnus.png",
        profileLink: `/about/team/${nameToSlug("Magnus Mchunguzi")}`,
        isChair: true
      },
      {
        name: "William Babigumira",
        subtitle: "Chief Executive Officer, Pentascope Strategy",
        imagePath: "William.jpg",
        profileLink: `/about/team/${nameToSlug("William Babigumira")}`
      },
      {
        name: "Awel Uwihanganye",
        subtitle: "Founder and Senior Director",
        imagePath: "Awel.jpg",
        profileLink: `/about/team/${nameToSlug("Awel Uwihanganye")}`
      },
      {
        name: "Rosie Lorie",
        subtitle: "Leadership Coach",
        imagePath: "Rosie-Lorie.png",
        profileLink: `/about/team/${nameToSlug("Rosie Lorie")}`
      },
      {
        name: "Kevin Langley",
        subtitle: "Head of Marketing, Visa CEMEA",
        imagePath: "Kevin_Langley.png",
        profileLink: `/about/team/${nameToSlug("Kevin Langley")}`
      }
    ]
  },
  {
    type: "The Secretariat",
    description: "Meet our dynamic team committed to shaping leadership that actively contributes to building the Africa we want",
    members: [
      {
        name: "Awel Uwihanganye",
        subtitle: "Founder & Senior Director",
        imagePath: "Awel.jpg",
      },
      {
        name: "Zubeda Abdallah",
        subtitle: "Finance Manager ",
        imagePath: "team/default-profile.png",
        // No profile page yet; avoid broken link
      },
      {
        name: "Nnanda Kizito Sseruwagi",
        subtitle: "Nnanda is the Media and Communications Officer at the LéO Africa Institute.",
        imagePath: "Nanda.jpg",
        profileLink: `/about/team/${nameToSlug("Nnanda Kizito Sseruwagi")}`
      },
      {
        name: "Nelson Asiimwe Mushabe",
        subtitle: "Fellowships Coordinator & Programs Manager",
        imagePath: "Asiimwe-Nelson-Mushabe.png",
        profileLink: "/about/team/nelson-asiimwe"
      }
    ]
  }
];

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {teamData.map((section, index) => (
          <React.Fragment key={section.type}>
            <div className={index > 0 ? "mt-24" : ""}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                  {section.type}
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  {section.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.members.map((member) => (
                  <TeamMemberCard
                    key={member.name}
                    name={member.name}
                    subtitle={member.subtitle}
                    imagePath={member.imagePath}
                    isChair={member.isChair}
                    profileLink={member.profileLink}
                  />
                ))}
              </div>
            </div>
            {section.type === "The Secretariat" && (
              <div className="mt-16 mb-24">
                <motion.p 
                  className="text-lg text-neutral-600 italic text-center max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  In addition to our staff, the institute continues to rely on the diverse skill sets, innovation and hard work of our associate faculty, volunteers and friends to whom we are grateful for the amazing work they put in.
                </motion.p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Team;


//to add new team meber add the team mamber array in gererateprofile.js file and then run cmd : (node generate-profiles.js gatsby develop) for it to take effect