import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaUserTie } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { StaticImage } from 'gatsby-plugin-image';

// Helper function to get image path
const getImagePath = (imageName, type = 'team') => {
  if (!imageName) return '/images/default-fellow.jpg';
  return `/images/${type}/${imageName}`;
};

const profiles = {
  fellows: [
    {
      name: "IVAN KIBUUKA",
      title: "Founder at Arudem",
      photo: "Ivan-Kibuuka.jpg",
      socials: {
        twitter: "https://twitter.com/ivankibuuka_",
        linkedin: "https://www.linkedin.com/in/ivan-kibuuka/",
        instagram: "https://www.instagram.com/ivan.aru_/",
        facebook: "https://www.facebook.com/ivankibuuka.99/"
      }
    },
    {
      name: "Mujjuzi Azizi",
      title: "Planning Officer, Buganda Kingdom",
      photo: "Mujjuzi-Abdulazizi.jpg",
      socials: {
        twitter: "https://x.com/AMujjuzi?t=AfH145tw0m3gZaqTLLHK_g&s=09",
        linkedin: "https://www.linkedin.com/in/mujjuzia",
        instagram: "https://www.instagram.com/mujjuzia?igsh=MW0zejkwbm9sbzd2Mw==",
        facebook: "https://www.facebook.com/share/ZaSYdYXULG7rE2Ne/?mibextid=qi2Omg"
      }
    },
    {
      name: "Saxon Ssekitooleko",
      title: "Drilling & Completions Engineer, TotalEnergies E&P Uganda",
      photo: "Saxon-Ssekitooleko.jpg",
      socials: {
        twitter: "https://x.com/____sesa",
        linkedin: "https://www.linkedin.com/in/saxon-ssekitooleko",
        instagram: "https://www.instagram.com/___sesa?igsh=MmhrbWt3OXFnMGs5&utm_source=qr",
        facebook: "https://www.facebook.com/saxon.sesa?mibextid=LQQJ4d"
      }
    },
    {
      name: "Joel Sengendo",
      title: "Management Analyst, Steadman Global Consulting",
      photo: "Joel-Sengendo.jpg",
      socials: {}
    },
    {
      name: "Mohamed Sharif",
      title: "Somalia Peacebuilding Programme Advisor, Life and Peace Institute",
      photo: "Mohamed-Sharif.jpg",
      socials: {
        twitter: "https://twitter.com/mosharriif",
        linkedin: "https://www.linkedin.com/in/sharrif/",
        instagram: "https://www.instagram.com/mosharriif/",
        facebook: "https://www.facebook.com/msharif44"
      }
    },
    {
      name: "Loise Machira",
      title: "Independent Consultant",
      photo: "Loise-Machira.jpg",
      socials: {
        twitter: "https://twitter.com/loisemachira",
        linkedin: "https://www.linkedin.com/in/loise-machira-80a09b71/",
        instagram: "https://www.instagram.com/loisemachira/"
      }
    },
    {
      name: "Mohamed Shidane",
      title: "Policy Advisor, Ministry of State for the Presidency, The Presidency, Somalia",
      photo: "Mohamed-Shidane.jpg",
      socials: {
        twitter: "https://twitter.com/MIShidane",
        linkedin: "https://www.linkedin.com/in/shidane",
        instagram: "https://www.instagram.com/mo.shidane/",
        facebook: "https://www.facebook.com/MIShidane/"
      }
    },
    {
      name: "Taonga Chisamanga",
      title: "Manager - Governance and Compliance, Bank of Zambia",
      photo: "Taonga-Chisamanga.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/taonga-chisamanga-4b235185"
      }
    },
    {
      name: "Vanessa Nkesha",
      title: "Employer Partnerships Officer, The Bridge Talent Services",
      photo: "Vanessa-Nkesha.jpg",
      socials: {
        twitter: "https://twitter.com/vanessa_nkesha",
        linkedin: "https://www.linkedin.com/in/vanessa-nkesha-msc-8544aa132"
      }
    },
    {
      name: "Sameer Luyombo",
      title: "Director, Taibah International Schools Ltd.",
      photo: "Sameer-Luyombo.jpg",
      socials: {}
    },
    {
      name: "Christine Isimbi",
      title: "Associate, Economic Transformation at Tony Blair Institute for Global Change",
      photo: "Christine-Isimbi.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/christineisimbi/"
      }
    },
    {
      name: "Aristide Kambale",
      title: "Consultant, Global Resilience Partnership",
      photo: "Aristide-Kambale.jpg",
      socials: {
        twitter: "https://twitter.com/KambaleAristide",
        linkedin: "https://www.linkedin.com/in/aristidek/",
        instagram: "https://www.instagram.com/aristidekambale",
        facebook: "https://www.facebook.com/angel.aristo"
      }
    },
    {
      name: "Priscilla Busulwa",
      title: "Lawyer and Legal Consultant, Impact Investments",
      photo: "Priscilla-Busulwa.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/priscillabusulwa/?originalSubdomain=ug"
      }
    }
  ],
  champions: [
    {
      name: "Lucy Mbabazi",
      title: "Managing Director, Better than Cash Alliance",
      photo: "Lucy.png",
    },
    {
      name: "Carl Manlan",
      title: "Vice President, Social Impact for Visa Central and Eastern Europe, Middle East, and Africa.",
      photo: "carl.jpg",
    }
  ],
  team: {
    founders: [
      {
        name: "Awel Uwihanganye",
        title: "Co-Founder & Program Lead",
        photo: "Awel.jpg",
        bio: "Passionate about harnessing Africa's growth prospects through ethical & values-based leadership.",
        socials: {
          linkedin: "#",
          twitter: "#",
          email: "awel@leoafricainstitute.org"
        }
      },
      {
        name: "Magnus Mchnguzi",
        title: "Co-Founder & Chairman",
        photo: "Magnus.png",
        bio: "An entrepreneur committed to creating opportunities for young African leaders.",
        socials: {
          linkedin: "#",
          twitter: "#",
          email: "magnus@leoafricainstitute.org"
        }
      }
    ],
    board: [
      {
        name: "Awel Uwihanganye",
        title: "Co-founder & Program Lead",
        photo: "Awel.jpg",
        bio: "Awel is a social entrepreneur and development practitioner with over 15 years of experience in leadership development, public policy and governance."
      },
      {
        name: "Catherinerose Barreto",
        title: "Board Member",
        photo: "Catherinerose.png",
        bio: "Human Capital, Innovation, Entrepreneurship & Gender Consultant with extensive experience in organizational development and leadership training."
      },
      {
        name: "Kevin Langley",
        title: "Board Member",
        photo: "Kevin-Langley.jpg",
        bio: "Head Of Marketing at Visa CEMEA, bringing extensive experience in global marketing and business development."
      },
      {
        name: "William Babigumira",
        title: "Board Member",
        photo: "William.jpg",
        bio: "Certified Trade Advisor at Private Sector Federation Rwanda, with expertise in regional trade and business development."
      },
      {
        name: "Conrad Mugisha",
        title: "Board Member",
        photo: "Conrad.jpg",
        bio: "Experienced professional bringing strategic insights to organizational development and leadership."
      },
      {
        name: "Fiona Mbabazi",
        title: "Board Member",
        photo: "Fiona.png",
        bio: "Accomplished professional with expertise in corporate governance and strategic leadership."
      },
      {
        name: "Rosie Lore",
        title: "Board Member",
        photo: "Rosie-Lorie.png",
        bio: "Leadership Coach with extensive experience in personal and professional development, helping leaders reach their full potential."
      },
      {
        name: "Magnus Mchngunzi",
        title: "Chairman Board of Directors",
        photo: "Magnus.png",
        bio: "A visionary leader committed to fostering collaborative leadership and empowering Africa's next generation of leaders."
      }
    ],
    staff: [
      {
        name: "Awel Uwihanganye",
        title: "Co-Founder & Program Lead",
        photo: "Awel.jpg",
        bio: "Leading the vision and strategy of LEO Africa Institute"
      },
      {
        name: "Nelson Asiimwe",
        title: "Fellowships & Program Manager",
        photo: "Asiimwe-Nelson-Mushabe.png",
        bio: "Managing fellowship programs and alumni engagement"
      },
      {
        name: "Abdallah Zubedah",
        title: "Finance & Administration",
        photo: "tem.jpg",
        bio: "Overseeing financial management and operations"
      },
      {
        name: "Nnanda Kizito Seruwagi",
        title: "Communications & Media Officer",
        photo: "Nanda.jpg",
        bio: "Managing communications and media relations"
      }
    ]
  }
};

const ProfileCard = ({ member, size = "large" }) => {
  const imageUrl = member.photo ? getImagePath(member.photo, member.type || (member.title.includes("Fellow") ? 'fellows' : 'team')) : '/images/default-fellow.jpg';
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${size === "large" ? "w-full" : "w-64"}`}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={member.name}
          className={`w-full object-cover ${size === "large" ? "h-72" : "h-48"}`}
          onError={(e) => {
            if (e.target.src.endsWith('.jpg')) {
              e.target.src = e.target.src.replace('.jpg', '.png');
            } else if (e.target.src.endsWith('.png')) {
              e.target.src = '/images/default-fellow.jpg';
            }
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{member.title}</p>
        {member.bio && size === "large" && (
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{member.bio}</p>
        )}
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Meet our dedicated team committed to shaping leadership that actively contributes to building the Africa we want.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.team.founders.map((member, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/5 p-4">
                  <div className="relative w-48 h-48 md:w-full md:h-64 rounded-full md:rounded-xl overflow-hidden mx-auto">
                    <img
                      src={member.photo ? getImagePath(member.photo, 'team') : '/images/default-fellow.jpg'}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">{member.title}</p>
                  {member.bio && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                  )}
                  {member.socials && (
                    <div className="flex justify-center md:justify-start space-x-4">
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="text-gray-400 hover:text-blue-500 transition-colors">
                          <FaXTwitter size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Board Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.team.board.map((member, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              <div className="flex-shrink-0">
                <img
                  src={member.photo ? getImagePath(member.photo, 'team') : '/images/default-fellow.jpg'}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                />
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-base font-semibold text-gray-900 truncate">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.team.staff.map((member, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              <div className="flex-shrink-0">
                <img
                  src={member.photo ? getImagePath(member.photo, 'team') : '/images/default-fellow.jpg'}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                />
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-base font-semibold text-gray-900 truncate">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ChampionsSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {profiles.champions.map((champion, index) => (
        <motion.div
          key={index}
          className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative overflow-hidden">
              <img
                src={getImagePath(champion.photo)}
                alt={champion.name}
                className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  if (e.target.src.endsWith('.jpg')) {
                    e.target.src = e.target.src.replace('.jpg', '.png');
                  } else if (e.target.src.endsWith('.png')) {
                    e.target.src = '/images/default-fellow.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="md:w-3/5 p-6 md:p-8 relative bg-white transition-colors duration-300 group-hover:bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 transform transition-transform duration-300 group-hover:translate-x-1">
                {champion.name}
              </h3>
              <p className="text-gray-600 mb-4 transform transition-transform duration-300 group-hover:translate-x-1">
                {champion.title}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const OurPeople = () => {
  const [activeTab, setActiveTab] = useState("fellows");
  const [visibleCount] = useState(4);

  const tabData = [
    {
      id: "fellows",
      label: "Fellows",
      icon: <FaUsers className="w-5 h-5" />,
      description: "Meet our exceptional fellows who are driving positive change across Africa."
    },
    {
      id: "champions",
      label: "Champions",
      icon: <FaAward className="w-5 h-5" />,
      description: "Meet our dedicated team of founders and board members who guide and shape our vision for Africa's future."
    },
    {
      id: "team",
      label: "Team",
      icon: <FaUserTie className="w-5 h-5" />,
      description: ""
    }
  ];

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <section className="py-16 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Meet Our People
        </h2>

        <div className="flex justify-center space-x-4">
          {tabData.map((tab) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-base font-medium flex items-center space-x-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gray-800 text-white shadow-lg"
                  : "bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
          {tabData.find((tab) => tab.id === activeTab).description}
        </p>

        {activeTab === "fellows" && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {shuffleArray(profiles.fellows)
              .slice(0, visibleCount)
              .map((person, index) => (
                <motion.div
                  key={index}
                  className="group bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full mb-4 overflow-hidden">
                      <img
                        src={getImagePath(person.photo, 'fellows')}
                        alt={person.name}
                        className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
                        onError={(e) => {
                          if (e.target.src.endsWith('.jpg')) {
                            e.target.src = e.target.src.replace('.jpg', '.png');
                          } else if (e.target.src.endsWith('.png')) {
                            e.target.src = '/images/default-fellow.jpg';
                          }
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      {person.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">{person.title}</p>
                  </div>
                  <div className="flex justify-center space-x-3 mt-4">
                    {person.socials?.twitter && (
                      <a href={person.socials.twitter} className="text-gray-600 hover:text-gray-800">
                        <FaXTwitter size={20} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}

        {activeTab === "champions" && (
          <ChampionsSection />
        )}

        {activeTab === "team" && (
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-5xl font-bold mb-6">Meet Our Team</h2>
              <div className="w-24 h-1 bg-[#F6911E] mx-auto"></div>
            </motion.div>

            {/* Board Section */}
            <div className="mb-24">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="font-playfair text-3xl font-bold mb-4">The Governing Board of Directors</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our governance board is constituted with individuals whose integrity is beyond reproach and with whom we share a commitment to create a better society and future with young people at the center of shaping leadership action.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Chairman Card - Highlighted */}
                <motion.div
                  className="group col-span-full lg:col-span-1 bg-gradient-to-br from-[#0B9A9E] to-[#0B9A9E]/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/5 p-4">
                      <div className="relative w-48 h-48 md:w-full md:h-64 rounded-full md:rounded-xl overflow-hidden mx-auto border-4 border-white/20">
                        <img
                          src={profiles.team.board.find(m => m.name === "Magnus Mchngunzi")?.photo ? 
                              getImagePath(profiles.team.board.find(m => m.name === "Magnus Mchngunzi").photo, 'team') : 
                              '/images/default-fellow.jpg'}
                          alt="Magnus Mchngunzi"
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium mb-3">
                        Chairman
                      </span>
                      <h3 className="text-2xl font-bold mb-2">Magnus Mchngunzi</h3>
                      <p className="text-sm font-medium text-white/80 mb-3">Co-Founder & Chairman Board of Directors</p>
                      <p className="text-sm text-white/70 mb-4 line-clamp-3">
                        A visionary leader committed to fostering collaborative leadership and empowering Africa's next generation of leaders.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Other Board Members */}
                {profiles.team.board
                  .filter(member => member.name !== "Magnus Mchngunzi")
                  .map((member, index) => (
                    <motion.div
                      key={index}
                      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (index + 1) * 0.1 }}
                    >
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/5 p-4">
                          <div className="relative w-48 h-48 md:w-full md:h-64 rounded-full md:rounded-xl overflow-hidden mx-auto">
                            <img
                              src={member.photo ? getImagePath(member.photo, 'team') : '/images/default-fellow.jpg'}
                              alt={member.name}
                              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                        <div className="md:w-3/5 p-6 md:p-8">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-sm font-medium text-[#0B9A9E] mb-3">{member.title}</p>
                          {member.bio && (
                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Team Section */}
            <div>
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="font-playfair text-3xl font-bold mb-4">The Team Leading on Delivering on the Tasks</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet our dynamic team committed to shaping leadership that actively contributes to building the Africa we want.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {profiles.team.staff.map((member, index) => (
                  <motion.div
                    key={index}
                    className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-2/5 p-4">
                        <div className="relative w-48 h-48 md:w-full md:h-64 rounded-full md:rounded-xl overflow-hidden mx-auto">
                          <img
                            src={member.photo ? getImagePath(member.photo, 'team') : '/images/default-fellow.jpg'}
                            alt={member.name}
                            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <div className="md:w-3/5 p-6 md:p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-3">{member.title}</p>
                        {member.bio && (
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "fellows" && (
          <div className="text-center mt-12">
            <motion.a
              href="/yelp/fellows"
              className="inline-flex items-center px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Fellows
              <FaUsers className="ml-2" />
            </motion.a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default OurPeople;
