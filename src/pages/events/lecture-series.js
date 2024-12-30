import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';
import { HeroTitle, SectionTitle, SubsectionTitle, BodyLarge, BodyText } from '../../components/Typography'
import { motion } from 'framer-motion'

const LectureSeries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <StaticImage
            src="../../assets/images/lecture-hero.jpg"
            alt="LEO Lecture Series"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            placeholder="blurred"
            layout="fullWidth"
            quality={95}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle className="text-white mb-6">
                Distinguished Public Lecture Series
              </HeroTitle>
              <BodyLarge className="text-gray-200 mb-6">
                The lecture series are a channel of presentation and discussion on various issues of the day. The series are hosted several times a year, to enable distinguished authorities to communicate the results of original studies on important subjects of contemporary interest.
              </BodyLarge>
              <BodyLarge className="text-gray-200 mb-8">
                Choice of speakers reflects inspiration from those who have had enormous contribution in politics, science, society, education, and life in general.
              </BodyLarge>
              <div className="flex gap-4">
                <Link 
                  to="/events"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-colors"
                >
                  View Calendar
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <SubsectionTitle className="mb-6">
                  Our Impact
                </SubsectionTitle>
                <SectionTitle className="mb-6">
                  Shaping Africa's Future Through Dialogue
                </SectionTitle>
                <div className="prose max-w-none">
                  <BodyText className="text-lg leading-relaxed text-gray-600">
                    The Lecture Series allow us to deepen our understanding of economic, political and social issues that shape Africa and the rest of the world.
                  </BodyText>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <SubsectionTitle className="mb-2">
                      Economic Growth
                    </SubsectionTitle>
                    <BodyText className="text-gray-600">
                      Understanding economic dynamics and opportunities
                    </BodyText>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#F6911E]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#F6911E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <SubsectionTitle className="mb-2">
                      Social Impact
                    </SubsectionTitle>
                    <BodyText className="text-gray-600">
                      Addressing key social challenges and solutions
                    </BodyText>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                    </div>
                    <SubsectionTitle className="mb-2">
                      Political Discourse
                    </SubsectionTitle>
                    <BodyText className="text-gray-600">
                      Fostering meaningful political dialogue
                    </BodyText>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#F6911E]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#F6911E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <SubsectionTitle className="mb-2">
                      Global Perspective
                    </SubsectionTitle>
                    <BodyText className="text-gray-600">
                      Connecting Africa to the world stage
                    </BodyText>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#0B9A9E]/5 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/20 to-transparent"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <BodyLarge className="text-gray-800 mb-4">
                    "Shaping tomorrow's leaders through today's dialogue"
                  </BodyLarge>
                  <BodyText className="text-gray-600">
                    Join us in building Africa's future
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ali Mufuruki Lecture Series */}
      <section className="py-20 bg-[#0B9A9E]/5">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl">
            <SubsectionTitle className="mb-6">
              Special Series
            </SubsectionTitle>
            <SectionTitle className="mb-6">
              Ali Mufuruki Lecture Series
            </SectionTitle>
            <div className="prose max-w-none text-gray-600">
              <BodyText className="text-lg mb-6">
                The Ali Mufuruki Distinguished Lecture series (DLS) is a joint project of the LéO Africa Institute and the Africa Leadership Initiative East Africa. The Lecture platform is focused on preserving the memory and legacy work of the late Ali Mufuruki.
              </BodyText>
              <BodyText className="text-lg mb-8">
                Ali was a transformational leader and pan-Africanist. The project is designed to inspire the young and emerging generation of leaders in Africa and to provide insight into the often-complex topics of leadership and the development of society.
              </BodyText>
              <div className="mt-8">
                <Link 
                  to="/events"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-colors"
                >
                  Check out our calendar for the inaugural Lecture
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <SubsectionTitle className="mb-6">
                Stay Updated
              </SubsectionTitle>
              <SectionTitle className="mb-6">
                Never Miss a Lecture
              </SectionTitle>
              <BodyText className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter to receive updates about upcoming lectures, speaker announcements, and exclusive content from past events.
              </BodyText>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <BodyText className="text-sm text-gray-500 mt-4">
                By subscribing, you agree to receive email communications from LEO Africa Institute.
              </BodyText>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LectureSeries;
