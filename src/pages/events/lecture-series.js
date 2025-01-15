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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <SubsectionTitle className="mb-4">
                About the Series
              </SubsectionTitle>
              <SectionTitle className="mb-6">
                Shaping Africa's Future Through Dialogue
              </SectionTitle>
              <BodyText className="text-lg leading-relaxed text-gray-600">
                The Lecture Series allow us to deepen our understanding of economic, political and social issues that shape Africa and the rest of the world. Through these dialogues, we connect thought leaders with emerging voices to foster meaningful conversations about Africa's future.
              </BodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Ali Mufuruki Lecture Series */}
      <section className="py-20 bg-[#0B9A9E]/5">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto">
                  <StaticImage 
                    src="../../assets/images/AliMufuruki.jpeg"
                    alt="Ali Mufuruki"
                    className="w-full h-full rounded-2xl shadow-xl"
                    imgClassName="w-full h-full object-cover rounded-2xl"
                    placeholder="blurred"
                    layout="fullWidth"
                    quality={95}
                  />
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F6911E]/10 rounded-full -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0B9A9E]/10 rounded-full -z-10"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-32 bg-gradient-to-r from-[#0B9A9E]/20 to-transparent rounded-l-full"></div>
                </div>
                {/* Quote overlay */}
                <div className="absolute bottom-8 right-0 lg:-right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-sm">
                  <svg className="w-8 h-8 text-[#F6911E] mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <BodyText className="text-gray-800 italic mb-4">
                    "A transformational leader and pan-Africanist who inspired generations."
                  </BodyText>
                  <div className="text-sm text-gray-600 font-medium">
                    - LéO Africa Institute
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
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
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/events/lecture-series/ali-mufuruki"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B9A9E] text-white rounded-lg hover:bg-[#0B9A9E]/90 transition-all"
                  >
                    <span className="font-semibold">Learn More About Ali</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    to="/events/lecture-series/schedule"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F6911E]/10 text-[#F6911E] rounded-lg hover:bg-[#F6911E]/20 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">View Lecture Schedule</span>
                  </Link>
                </div>
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
