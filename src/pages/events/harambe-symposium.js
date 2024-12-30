import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { HeroTitle, SectionTitle, SubsectionTitle, BodyText } from "../../components/Typography";
import "../../styles/animations.css";

// Import speaker images
import drMagara from "../../assets/images/speakers/Dr-Magara.png";
import profKigozi from "../../assets/images/speakers/Dr-Kigozi.png";
import msAkamanzi from "../../assets/images/speakers/CLare.png";

const HarambeSymposium = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B9A9E] to-[#0B9A9E]/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4 animate-fadeIn">
              LéO Africa Institute Events
            </div>
            <HeroTitle className="mb-6 animate-fadeIn">
              Harambe Symposium
            </HeroTitle>
            <div className="space-y-4">
              <BodyText className="text-xl text-white/90 font-medium italic animate-fadeIn animate-delay-100">
                "Harambe" — A Swahili word meaning "we all pull together"
              </BodyText>
              <BodyText className="text-lg text-white/80 animate-fadeIn animate-delay-200">
                Building a collaborative leadership culture for Africa through collective wisdom and shared purpose.
              </BodyText>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B9A9E] via-[#F6911E] to-[#0B9A9E] opacity-20"></div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="mb-16">
              <div className="text-[#F6911E] font-semibold text-lg tracking-wide uppercase mb-4">About the Symposium</div>
              <SubsectionTitle className="mb-6">Strengthening Africa's Collaborative Leadership</SubsectionTitle>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
              <BodyText className="text-xl text-gray-600">
                The Harambe Symposium addresses the urgent need to foster collaborative leadership among African leaders and aspiring leaders across organizations, institutions, governments, and communities.
              </BodyText>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl relative overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B9A9E]/10 to-transparent rounded-bl-[100px] transform transition-transform duration-500 group-hover:scale-150"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Vision</h3>
                    <BodyText className="text-gray-600">
                      To create a platform where African leaders can collaboratively address structural challenges, share innovative solutions, and build integrated, prosperous societies through collective action and shared wisdom.
                    </BodyText>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl relative overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F6911E]/10 to-transparent rounded-bl-[100px] transform transition-transform duration-500 group-hover:scale-150"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Approach</h3>
                    <BodyText className="text-gray-600">
                      Through meaningful dialogue, knowledge exchange, and collaborative projects, we empower leaders to adapt to new models, develop essential skills, and create supportive environments for societal transformation.
                    </BodyText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agaciro Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B9A9E]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="mb-16">
              <div className="text-[#F6911E] font-semibold text-lg tracking-wide uppercase mb-4">The Philosophy</div>
              <SubsectionTitle className="mb-6">The Agaciro Inspiration</SubsectionTitle>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <BodyText className="text-gray-600 mb-8">
                  Inspired by the Kinyarwanda concept of "Agaciro", which places integrity and collective identity at the heart of African leadership. This principle emphasizes the importance of collaborative leadership in addressing societal challenges and fostering transformative change.
                </BodyText>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900">Collective Identity</h4>
                      <p className="text-gray-600">Strengthening our shared African identity while celebrating our diverse perspectives and experiences.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900">Collaborative Leadership</h4>
                      <p className="text-gray-600">Working together to address challenges and create innovative solutions for societal transformation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <blockquote className="bg-white p-8 rounded-2xl shadow-sm relative">
                  <div className="absolute top-4 left-4 text-6xl text-[#0B9A9E]/10">"</div>
                  <div className="relative">
                    <p className="text-xl text-gray-600 italic mb-6">
                      The Symposium agenda centers on the urgent need for collective responses when confronting individual and collective challenges or in pursuit of innovating and building effective systems to transform society in Africa.
                    </p>
                    <footer>
                      <div className="font-semibold text-gray-900">Lucy Mbabazi</div>
                      <div className="text-[#0B9A9E]">Board of Directors Chairperson Emerita</div>
                    </footer>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="mb-16">
              <div className="text-[#F6911E] font-semibold text-lg tracking-wide uppercase mb-4">Our Focus</div>
              <SubsectionTitle className="mb-6">Key Areas of Impact</SubsectionTitle>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Adaptability */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl h-full transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Adaptability</h4>
                  <BodyText className="text-gray-600">
                    Developing the capacity to adapt to new models and embrace change in an increasingly competitive global economy.
                  </BodyText>
                </div>
              </div>

              {/* Innovation */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl h-full transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-.093a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Innovation</h4>
                  <BodyText className="text-gray-600">
                    Fostering creative solutions and new approaches to address complex societal challenges.
                  </BodyText>
                </div>
              </div>

              {/* Collaboration */}
              <div className="group">
                <div className="bg-white p-8 rounded-2xl h-full transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Collaboration</h4>
                  <BodyText className="text-gray-600">
                    Building networks and partnerships to achieve greater impact through collective action.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-[#0B9A9E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Join Us for Harambe 2025</h2>
              <BodyText className="text-xl text-white/80">
                Be part of this transformative gathering shaping Africa's collaborative leadership future.
              </BodyText>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Register Interest</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HarambeSymposium;
