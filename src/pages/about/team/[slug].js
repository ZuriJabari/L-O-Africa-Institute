import React from 'react';
import Layout from '../../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// This will be a dynamic page for individual team member profiles
const TeamMemberProfile = ({ params }) => {
  const { slug } = params;

  // In a real implementation, you would fetch the team member data based on the slug
  // For now, we'll use placeholder data
  const member = {
    name: "Team Member",
    role: "Role",
    bio: "Detailed biography will go here.",
    image: "../../../assets/images/team/default-profile.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "email@leoafricainstitute.org"
    }
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <StaticImage
                  src={member.image}
                  alt={member.name}
                  className="rounded-2xl shadow-lg"
                  placeholder="blurred"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{member.role}</p>
                <div className="prose max-w-none">
                  <p>{member.bio}</p>
                </div>
                <div className="flex gap-4 mt-8">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-600 hover:text-[#0B9A9E]">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-600 hover:text-[#0B9A9E]">
                      <FaTwitter className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-[#0B9A9E]">
                      <FaEnvelope className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamMemberProfile;
