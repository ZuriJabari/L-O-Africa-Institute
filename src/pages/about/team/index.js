import React from 'react';
import Layout from '../../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'gatsby';
import FoundersBlog from '../../../components/FoundersBlog';

const TeamPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const founders = [
    {
      name: "Awel Uwihanganye",
      role: "Co-Founder & Program Lead",
      image: "../../../assets/images/team/Awel.jpg",
      bio: "Passionate about harnessing Africa's growth prospects through ethical & values-based leadership.",
      slug: "awel-uwihanganye",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "awel@leoafricainstitute.org"
      }
    },
    {
      name: "Magnus Mchnguzi",
      role: "Co-Founder & Chairman",
      image: "../../../assets/images/team/Magnus.png",
      bio: "An entrepreneur committed to creating opportunities for young African leaders.",
      slug: "magnus-mchunguzi",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "magnus@leoafricainstitute.org"
      }
    }
  ];

  const boardMembers = [
    {
      name: "Dr. Maggie Kigozi",
      role: "Board Member",
      image: "../../../assets/images/team/board1.jpg",
      bio: "Former Executive Director of Uganda Investment Authority."
    },
    {
      name: "Morrison Rwakakamba",
      role: "Board Member",
      image: "../../../assets/images/team/board2.jpg",
      bio: "CEO at Agency for Transformation."
    },
    {
      name: "ABMAK Associates",
      role: "Secretary to the Board",
      image: "../../../assets/images/team/board3.jpg",
      bio: "Legal advisory and corporate governance."
    },
    {
      name: "Catherinerose Barreto",
      role: "Board Member",
      bio: "Human Capital, Innovation, Entrepreneurship & Gender Consultant",
      image: "../../../assets/images/team/Catherinerose.png",
      slug: "catherinerose-barreto"
    },
    {
      name: "Kevin Langley",
      role: "Board Member",
      bio: "Head Of Marketing, Visa CEMEA",
      image: "../../../assets/images/team/Kevin_Langley.png",
      slug: "kevin-langley"
    },
    {
      name: "William Babigumira",
      role: "Board Member",
      bio: "Certified Trade Advisor, Private Sector Federation Rwanda",
      image: "../../../assets/images/team/William.jpg",
      slug: "william-babigumira"
    },
    {
      name: "Conrad Mugisha",
      role: "Board Member",
      image: "../../../assets/images/team/default-profile.png",
      slug: "conrad-mugisha"
    },
    {
      name: "Fiona Mbabazi",
      role: "Board Member",
      image: "../../../assets/images/team/fiona.png",
      slug: "fiona-mbabazi"
    },
    {
      name: "Rosie Lore",
      role: "Board Member",
      bio: "Leadership Coach",
      image: "../../../assets/images/team/Rosie-Lorie.png",
      slug: "rosie-lore"
    },
    {
      name: "Wanjuhi Njoroge",
      role: "Board Member",
      image: "../../../assets/images/team/Wanjuhi.png",
      bio: "Strategic leadership and social innovation expert."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Nakimera",
      role: "Program Officer",
      image: "../../../assets/images/team/staff1.jpg",
      bio: "Coordinates program implementation and stakeholder engagement."
    },
    {
      name: "John Mugisha",
      role: "Communications Officer",
      image: "../../../assets/images/team/staff2.jpg",
      bio: "Manages external communications and media relations."
    },
    {
      name: "Awel Uwihanganye",
      role: "Co-Founder & Program Lead",
      image: "../../../assets/images/team/Awel.jpg",
      slug: "awel-uwihanganye"
    },
    {
      name: "Nelson Asiimwe",
      role: "Fellowships & Program Manager",
      image: "../../../assets/images/team/Nelson.jpg",
      slug: "nelson-asiimwe"
    },
    {
      name: "Nnanda Kizito Seruwagi",
      role: "Communications & Media Officer",
      image: "../../../assets/images/team/Nanda.jpg",
      slug: "nnanda-kizito"
    },
    {
      name: "Bright Muhumuza",
      role: "Program Officer",
      image: "../../../assets/images/team/Bright.jpg",
      bio: "Leads program implementation and stakeholder engagement."
    },
    {
      name: "Ivan Mwine",
      role: "Communications Lead",
      image: "../../../assets/images/team/Ivan.png",
      bio: "Manages communications strategy and media relations."
    },
    {
      name: "Layola Emoit",
      role: "Program Coordinator",
      image: "../../../assets/images/team/Layola.png",
      bio: "Coordinates program activities and partnerships."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full transform rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white opacity-10 transform rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-left">
                Our Team
              </h1>
              <div className="w-24 h-1.5 bg-white opacity-80"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-white opacity-90 max-w-3xl font-light leading-relaxed"
            >
              Meet the dedicated individuals driving our mission to transform leadership in Africa through innovation, ethical practices, and sustainable development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Meet Our Founders</h2>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-3xl mb-12">
                Visionary leaders committed to transforming Africa through ethical leadership and innovation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Magnus's Profile */}
              <Link 
                to="/about/team/magnus-mchnguzi"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex gap-8 items-start bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-48 h-56 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] rounded-lg transform rotate-3"></div>
                      <StaticImage
                        src="../../../assets/images/team/Magnus.png"
                        alt="Magnus Mchnguzi"
                        className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg transform -rotate-2"
                        imgClassName="rounded-lg"
                        placeholder="blurred"
                        layout="constrained"
                        width={192}
                        height={224}
                        quality={95}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Magnus Mchnguzi</h3>
                    <p className="text-[#0B9A9E] font-medium text-lg mb-4">Co-Founder & Chairman</p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      A distinguished leader with extensive experience in organizational development and strategic leadership.
                      Magnus drives innovation in governance and ethical leadership across East Africa.
                    </p>
                  </div>
                </motion.div>
              </Link>

              {/* Awel's Profile */}
              <Link 
                to="/about/team/awel-uwihanganye"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex gap-8 items-start bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-48 h-56 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] rounded-lg transform -rotate-3"></div>
                      <StaticImage
                        src="../../../assets/images/team/Awel.jpg"
                        alt="Awel Uwihanganye"
                        className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg transform rotate-2"
                        imgClassName="rounded-lg"
                        placeholder="blurred"
                        layout="constrained"
                        width={192}
                        height={224}
                        quality={95}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Awel Uwihanganye</h3>
                    <p className="text-[#0B9A9E] font-medium text-lg mb-4">Co-founder & Program Lead</p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      A passionate advocate for ethical leadership and social innovation in Africa. 
                      Awel brings extensive experience in policy, governance, and social entrepreneurship.
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Governing Board of Directors</h2>
              <p className="text-gray-600 max-w-3xl text-xl md:text-2xl leading-relaxed">
                Our distinguished board members bring diverse expertise and leadership experience to guide LEO's strategic direction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Catherinerose Barreto */}
              <Link 
                to="/about/team/catherinerose-barreto"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-40 h-48 mx-auto mb-6">
                    <StaticImage
                      src="../../../assets/images/team/Catherinerose.png"
                      alt="Catherinerose Barreto"
                      className="w-full h-full object-cover rounded-lg"
                      imgClassName="rounded-lg"
                      placeholder="blurred"
                      layout="constrained"
                      width={160}
                      height={192}
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Catherinerose Barreto</h3>
                  <p className="text-[#0B9A9E] font-medium text-lg mb-3">Human Capital, Innovation, Entrepreneurship & Gender Consultant</p>
                </motion.div>
              </Link>

              {/* Kevin Langley */}
              <Link 
                to="/about/team/kevin-langley"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-40 h-48 mx-auto mb-6">
                    <StaticImage
                      src="../../../assets/images/team/Kevin_Langley.png"
                      alt="Kevin Langley"
                      className="w-full h-full object-cover rounded-lg"
                      imgClassName="rounded-lg"
                      placeholder="blurred"
                      layout="constrained"
                      width={160}
                      height={192}
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Kevin Langley</h3>
                  <p className="text-[#0B9A9E] font-medium text-lg mb-3">Head Of Marketing, Visa CEMEA</p>
                </motion.div>
              </Link>

              {/* William Babigumira */}
              <Link 
                to="/about/team/william-babigumira"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-40 h-48 mx-auto mb-6">
                    <StaticImage
                      src="../../../assets/images/team/William.jpg"
                      alt="William Babigumira"
                      className="w-full h-full object-cover rounded-lg"
                      imgClassName="rounded-lg"
                      placeholder="blurred"
                      layout="constrained"
                      width={160}
                      height={192}
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">William Babigumira</h3>
                  <p className="text-[#0B9A9E] font-medium text-lg mb-3">Certified Trade Advisor, Private Sector Federation Rwanda</p>
                </motion.div>
              </Link>

              {/* Conrad Mugisha */}
              <Link 
                to="/about/team/conrad-mugisha"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-40 h-48 mx-auto mb-6">
                    <StaticImage
                      src="../../../assets/images/team/default-profile.png"
                      alt="Conrad Mugisha"
                      className="w-full h-full object-cover rounded-lg"
                      imgClassName="rounded-lg"
                      placeholder="blurred"
                      layout="constrained"
                      width={160}
                      height={192}
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Conrad Mugisha</h3>
                  <p className="text-[#0B9A9E] font-medium text-lg mb-3">Board Member</p>
                </motion.div>
              </Link>

              {/* Fiona Mbabazi */}
              <Link 
                to="/about/team/fiona-mbabazi"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-40 h-48 mx-auto mb-6">
                    <StaticImage
                      src="../../../assets/images/team/fiona.png"
                      alt="Fiona Mbabazi"
                      className="w-full h-full object-cover rounded-lg"
                      imgClassName="rounded-lg"
                      placeholder="blurred"
                      layout="constrained"
                      width={160}
                      height={192}
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Fiona Mbabazi</h3>
                  <p className="text-[#0B9A9E] font-medium text-lg mb-3">Board Member</p>
                </motion.div>
              </Link>

              {/* Rosie Lore */}
              <Link 
                to="/about/team/rosie-lore"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-40 h-48 mx-auto mb-6">
                    <StaticImage
                      src="../../../assets/images/team/Rosie-Lorie.png"
                      alt="Rosie Lore"
                      className="w-full h-full object-cover rounded-lg"
                      imgClassName="rounded-lg"
                      placeholder="blurred"
                      layout="constrained"
                      width={160}
                      height={192}
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Rosie Lore</h3>
                  <p className="text-[#0B9A9E] font-medium text-lg mb-3">Leadership Coach</p>
                </motion.div>
              </Link>
            </div>

            {/* Secretary to the Board */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-3 text-left">Secretary to the Board</h3>
              <p className="text-[#0B9A9E] font-medium text-xl">ABMAK Associates</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Blog Section */}
      <FoundersBlog />

      {/* Staff Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">Our Team</h2>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-3xl">
                Meet our dynamic team committed to shaping leadership that actively contributes to building the Africa we want.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {/* Nelson Asiimwe */}
              <Link 
                to="/about/team/nelson-asiimwe"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full aspect-square mb-4 max-w-[200px]">
                    <StaticImage
                      src="../../../assets/images/team/Nelson.jpg"
                      alt="Nelson Asiimwe"
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                      imgClassName="rounded-lg"
                      placeholder="blurred"
                      objectFit="cover"
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Nelson Asiimwe</h3>
                  <p className="text-[#0B9A9E] text-lg font-medium">Fellowships & Program Manager</p>
                </motion.div>
              </Link>

              {/* Nnanda Kizito */}
              <Link 
                to="/about/team/nnanda-kizito"
                className="block transition-transform hover:-translate-y-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full aspect-square mb-4 max-w-[200px]">
                    <StaticImage
                      src="../../../assets/images/team/Nanda.jpg"
                      alt="Nnanda Kizito Seruwagi"
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                      imgClassName="rounded-lg"
                      placeholder="blurred"
                      objectFit="cover"
                      quality={95}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Nnanda Kizito Seruwagi</h3>
                  <p className="text-[#0B9A9E] text-lg font-medium">Communications & Media Officer</p>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
