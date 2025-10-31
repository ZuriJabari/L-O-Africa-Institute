import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Awel Uwihanganye",
    role: "Co-Founder & Program Lead",
    image: require("../assets/images/Awel.jpg"),
    bio: "Passionate about harnessing Africa's growth prospects through ethical & values-based leadership.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "awel@leoafricainstitute.org"
    }
  },
  {
    name: "Nelson Asiimwe",
    role: "Fellowships & Program Manager",
    image: require("../assets/images/Asiimwe-Nelson-Mushabe.png"),
    bio: "Dedicated to nurturing the next generation of African leaders through innovative fellowship programs.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "nelson@leoafricainstitute.org"
    }
  },
  {
    name: "Nnanda Kizito Sseruwagi",
    role: "Media and Communications Officer at the LéO Africa Institute",
    image: require("../assets/images/Nanda.jpg"),
    bio: "Crafting compelling narratives that showcase Africa's leadership potential and success stories.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "communications@leoafricainstitute.org"
    }
  }
];

const boardMembers = [
  {
    name: "Magnus Mchnguzi",
    role: "Chairman & Co-Founder",
    image: require("../assets/images/Magnus.png"),
    bio: "An entrepreneur passionate about creating opportunities for young African leaders.",
  },
  {
    name: "Catherinerose Barretto",
    role: "Board Member",
    image: require("../assets/images/Catherinerose-Barretto.png"),
    bio: "Human Capital, Innovation, Entrepreneurship & Gender Consultant",
  },
  {
    name: "Kevin Langley",
    role: "Board Member",
    image: require("../assets/images/Kevin_Langley.png"),
    bio: "Head Of Marketing, Visa CEMEA",
  },
  {
    name: "William Babigumira",
    role: "Board Member",
    image: require("../assets/images/Dr-Magara.png"),
    bio: "Certified Trade Advisor, Private Sector Federation Rwanda",
  },
  {
    name: "Rosie Lore",
    role: "Board Member",
    image: require("../assets/images/Rosie-Lorie.png"),
    bio: "Leadership Coach with extensive experience in developing African talent.",
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const TeamPage = () => {
  return (
    <Layout>
      {/* Hero Section (clean, no image) */}
      <section className="relative min-h-[60vh] flex items-center bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-px bg-gray-300"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-600 font-medium">
                Meet Our Team
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-6"
            >
              Meet the Visionaries
              <span className="block mt-2">Shaping Africa's Future</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mb-0"
            >
              A dedicated team of leaders, innovators, and changemakers committed to empowering Africa's next generation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-16 text-center"
            {...fadeIn}
          >
            Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative"
                {...fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-base mb-4">{member.bio}</p>
                      <div className="flex gap-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="text-white hover:text-[#0B9A9E] transition-colors">
                            <FaLinkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} className="text-white hover:text-[#0B9A9E] transition-colors">
                            <FaTwitter className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.email && (
                          <a href={`mailto:${member.social.email}`} className="text-white hover:text-[#0B9A9E] transition-colors">
                            <FaEnvelope className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our governance board consists of individuals whose integrity is beyond reproach and who share our commitment to creating a better society.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-md mb-4">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B9A9E] to-[#F6911E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8">
              We're always looking for passionate individuals who share our vision for Africa's future. Join us in shaping the next generation of ethical leaders.
            </p>
            <a 
              href="mailto:careers@leoafricainstitute.org" 
              className="inline-block bg-white text-[#0B9A9E] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
