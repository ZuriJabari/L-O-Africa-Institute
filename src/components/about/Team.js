// Team.js
import React from "react";
import { motion } from 'framer-motion';
import { Link, navigate } from 'gatsby';

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
  return name.toLowerCase().replace(/\s+/g, '-');
};

const teamData = [
  {
    type: "Board of Directors",
    description: "The Board of Directors consists of high-level individuals from the public and private sectors who help set strategy, support senior management in pursuit of this strategy, and ensure the LéO Africa Institute has adequate, well-managed resources at its disposal.",
    members: [
      {
        name: "Magnus Mchunguzi",
        subtitle: "Co-Founder & Board Chairperson, LéO Africa Institute",
        image: MagnusPhoto,
        profileLink: `/about/team/${nameToSlug("Magnus Mchunguzi")}`,
        isChair: true
      },
      {
        name: "William Babigumira",
        subtitle: "Chief Executive Officer, Pentascope Strategy",
        image: WilliamPhoto,
        profileLink: `/about/team/${nameToSlug("William Babigumira")}`
      },
      {
        name: "Awel Uwihanganye",
        subtitle: "Founder and Senior Director",
        image: AwelPhoto,
        profileLink: `/about/team/${nameToSlug("Awel Uwihanganye")}`
      },
      {
        name: "Rosie Lorie",
        subtitle: "Leadership Coach",
        image: RosiePhoto,
        profileLink: `/about/team/${nameToSlug("Rosie Lorie")}`
      },
      {
        name: "Kevin Langley",
        subtitle: "Head of Marketing, Visa CEMEA",
        image: KevinPhoto,
        profileLink: `/about/team/${nameToSlug("Kevin Langley")}`
      }
    ]
  },
  {
    type: "The Secretariat",
    description: "The Secretariat is responsible for the day-to-day running of the Institute, implementation of programs and managing relationships with stakeholders.",
    members: [
      {
        name: "Awel Uwihanganye",
        subtitle: "Founder & Senior Director",
        image: AwelPhoto,
      },
      {
        name: "Zubeda Abdallah",
        subtitle: "Finance Manager ",
        image: tempPhoto,
        profileLink: `/about/team/${nameToSlug("Brian Turyabagye")}`
      },
      {
        name: "Nanda Kato",
        subtitle: "Communication & Outreach Officer",
        image: NandaPhoto,
        profileLink: `/about/team/${nameToSlug("Nanda Kato")}`
      },
      {
        name: "Nelson Asimwe",
        subtitle: "Fellowships Coordinator & Programs Manager",
        image: AsimwePhoto,
        profileLink: `/about/team/${nameToSlug("Nanda Kato")}`
      }
      
    ]
  }
];

const TeamMemberCard = ({ name, subtitle, image, isChair }) => {
  const memberSlug = nameToSlug(name);

  const handleClick = async (e) => {
    e.preventDefault();
    await navigate(`/about/team/${memberSlug}`);
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
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
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

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {teamData.map((section, sectionIndex) => (
          <section key={section.type} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">{section.type}</h2>
              {section.description && (
                <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
                  {section.description}
                </p>
              )}
            </motion.div>

            {section.type === "Board of Directors" ? (
              <div className="flex flex-col items-center">
                {/* Board Chair */}
                <div className="mb-16 scale-110">
                  <TeamMemberCard
                    key={section.members[0].name}
                    {...section.members[0]}
                    isChair={true}
                  />
                </div>
                
                {/* Other Board Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                  {section.members.slice(1).map((member) => (
                    <TeamMemberCard
                      key={member.name}
                      {...member}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // Updated Secretariat layout
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.members.map((member) => (
                  <TeamMemberCard
                    key={member.name}
                    {...member}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Team;


//to add new team meber add the team mamber array in gererateprofile.js file and then run cmd : (node generate-profiles.js gatsby develop) for it to take effect