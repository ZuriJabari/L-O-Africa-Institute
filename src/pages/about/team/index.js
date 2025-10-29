import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../../components/Layout';

// Import team photos
import Magnus from '../../../assets/images/team/Magnus.png';
import Awel from '../../../assets/images/team/Awel.jpg';
import Catherinerose from '../../../assets/images/team/Catherinerose.png';
import KevinLangley from '../../../assets/images/team/Kevin_Langley.png';
import William from '../../../assets/images/team/William.jpg';
import Conrad from '../../../assets/images/team/conrad.jpg';
import Fiona from '../../../assets/images/team/fiona.png';
import RosieLorie from '../../../assets/images/team/Rosie-Lorie.png';
import Nelson from '../../../assets/images/team/Nelson.png';
import Nanda from '../../../assets/images/team/Nanda.jpg';

const TeamPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Team Card Component
  const TeamCard = ({ name, role, image, bio, slug, social, delay = 0 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="flex flex-col bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
      >
        <Link to={`/about/team/${slug}`} className="block">
          <div className="relative w-full aspect-square mb-4 max-w-[200px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] rounded-lg transform rotate-3"></div>
            {image ? (
              <img
                src={image}
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
        </Link>
        {social && (
          <div className="flex justify-center items-center gap-4 mt-4 pt-4 border-t border-gray-100">
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0B9A9E] transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0B9A9E] transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            )}
          </div>
        )}
      </motion.div>
    );
  };

  const boardMembers = [
    {
      name: "Magnus Mchunguzi",
      role: "Co-Founder & Chairman of the Board",
      image: Magnus,
      // bio: "Magnus Mchunguzi is a distinguished leader with extensive experience in organizational development and strategic leadership.",
      slug: "magnus-mchunguzi",
      social: {
        linkedin: "https://www.linkedin.com/in/magnus-mchunguzi",
        twitter: "https://twitter.com/MagnusMchunguzi"
      }
    },
    {
      name: "Awel Uwihanganye",
      role: "Co-founder & Board Member",
      image: Awel,
      // bio: "A passionate advocate for ethical leadership and social innovation in Africa.",
      slug: "awel-uwihanganye",
      social: {
        linkedin: "https://www.linkedin.com/in/awel-uwihanganye-58a96b149",
        twitter: "https://twitter.com/Uwihanganye_A"
      }
    },
    {
      name: "Catherinerose Barreto",
      role: "Board Member",
      image: Catherinerose,
      // bio: "Human Capital, Innovation, Entrepreneurship & Gender Consultant",
      slug: "catherinerose-barreto",
      social: {
        linkedin: "https://www.linkedin.com/in/catherinerose-barretto",
        twitter: "https://twitter.com/CatherineroseB"
      }
    },
    {
      name: "Kevin Langley",
      role: "Board Member",
      image: KevinLangley,
      // bio: "Head Of Marketing, Visa CEMEA",
      slug: "kevin-langley",
      social: {
        linkedin: "https://www.linkedin.com/in/kevin-langley"
      }
    },
    {
      name: "William Babigumira",
      role: "Board Member",
      image: William,
      // bio: "Certified Trade Advisor, Private Sector Federation Rwanda",
      slug: "william-babigumira",
      social: {
        linkedin: "https://www.linkedin.com/in/william-babigumira"
      }
    },
    {
      name: "Conrad Mugisha",
      role: "Board Member",
      image: Conrad,
      // bio: "Conrad Mugisha is a businessman with extensive experience working in the retail industry.",
      slug: "conrad-mugisha",
      social: {
        linkedin: "https://www.linkedin.com/in/conrad-mugisha"
      }
    },
    {
      name: "Fiona Mbabazi",
      role: "Board Member",
      image: Fiona,
      // bio: "Fiona Mbabazi is a communications specialist working with RwandAir as a Communication Manager.",
      slug: "fiona-mbabazi",
      social: {
        twitter: "https://twitter.com/FionaMbabazi"
      }
    },
    {
      name: "Rosie Lorie",
      role: "Board Member",
      image: RosieLorie,
      // bio: `Rosie Lorie is a seasoned process facilitator and certified coach`,
      slug: "rosie-lorie",
      social: {
        linkedin: "https://www.linkedin.com/in/rosie-lorie"
      }
    }
  ];

  const teamMembers = [
    {
      name: "Awel Uwihanganye",
      role: "Co-Founder & Program Lead",
      image: Awel,
      // bio: "A passionate advocate for ethical leadership and social innovation in Africa.",
      slug: "awel-uwihanganye",
      social: {
        linkedin: "https://www.linkedin.com/in/awel-uwihanganye-58a96b149",
        twitter: "https://twitter.com/Uwihanganye_A"
      }
    },
    {
      name: "Nelson Asiimwe Mushabe",
      role: "Program Manager",
      image: Nelson,
      // bio: "Leads program implementation and stakeholder engagement.",
      slug: "nelson-asiimwe",
      social: {
        linkedin: "https://www.linkedin.com/in/nelson-asiimwe",
        twitter: "https://twitter.com/NelsonAsiimwe"
      }
    },
    {
      name: "Nnanda Kizito Sseruwagi",
      role: "Media and Communications Officer",
      image: Nanda,
      bio: "", // Empty bio - no additional description needed
      slug: "nnanda-kizito",
      social: {
        linkedin: "https://www.linkedin.com/in/nnanda-kizito",
        twitter: "https://twitter.com/NnandaKizito"
      }
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white">
        {/* Clean Background */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Content Layer */}
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-16 h-px bg-gray-300"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-600 font-medium">
                Meet Our Team
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-[1.05] tracking-tight mb-8"
            >
              Meet the Visionaries{' '}
              <span className="block mt-2">
                Shaping Africa's Future
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-xl md:text-2xl leading-relaxed text-gray-600 mb-14 max-w-3xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              A dedicated team of leaders, innovators, and changemakers committed to empowering Africa's next generation.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gray-900"></div>
                <div>
                  <div className="text-2xl font-light text-gray-900">15+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-600">Team Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gray-900"></div>
                <div>
                  <div className="text-2xl font-light text-gray-900">10+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gray-900"></div>
                <div>
                  <div className="text-2xl font-light text-gray-900">5</div>
                  <div className="text-xs uppercase tracking-wider text-gray-600">Countries</div>
                </div>
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
              Our governance board is constituted with individuals whose integrity is beyond reproach and with whom we share a commitment to create a better society and future with young people at the center of shaping leadership action. 

              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              Meet our dynamic team committed to shaping leadership that actively contributes to building the Africa we want. 

              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamCard 
                  key={member.name}
                  {...member}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-3xl mt-12 ml-12">In addition to our staff, the institute continues to rely on the diverse skill sets, innovation and hard work of our associate faculty, volunteers and friends to whom we are grateful for the amazing work they put in. </p>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;