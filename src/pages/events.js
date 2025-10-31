import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import InnerHero from '../components/InnerHero'
import { HeroTitle, SectionTitle, SubsectionTitle, BodyText, BodyLarge } from '../components/Typography'
import leoLogo from '../assets/images/Leo-logo.png'
import algLogo from '../assets/images/alg-color.svg'
import drMagara from '../assets/images/speakers/Dr-Magara.png'
import profKigozi from '../assets/images/speakers/Dr-Kigozi.png'
import msAkamanzi from '../assets/images/speakers/CLare.png'
import drGichuru from '../assets/images/speakers/Julie.png'

const EventsAndGatherings = () => {
  return (
    <Layout>
      <InnerHero
        imageSrc="/images/events-hero.jpg"
        imageAlt="Events & Gatherings"
        eyebrow="Events & Gatherings"
        title={<>The Dialogue Platform</>}
        description="Join Africa's most influential gathering of thought leaders, innovators, and change-makers shaping the future of leadership."
      />

      {/* ALG Flagship Event Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="group">
                  <div className="text-[#F6911E] font-semibold text-lg tracking-wide uppercase mb-4 transform transition-transform group-hover:translate-x-2">
                    Our Flagship Event
                  </div>
                  <SubsectionTitle className="mb-6 transform transition-transform group-hover:translate-x-2">
                    Annual Leaders Gathering
                  </SubsectionTitle>
                  <div className="w-24 h-1 bg-[#F6911E] mb-8 transform transition-all duration-300 group-hover:w-32"></div>
                  <BodyText className="mb-8 prose prose-lg max-w-none">
                    The Annual Leaders Gathering (ALG) has established itself as an essential platform for significant conversations on ideas and issues impacting society. 
                    Starting in 2020, the gathering takes place every November and has gained reputation as the signature public convening for the LéO Africa Institute's growing networks.
                  </BodyText>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="https://alg.leoafricainstitute.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 bg-[#0B9A9E] text-white px-8 py-4 rounded-lg hover:bg-[#0B9A9E]/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>Visit ALG Website</span>
                      <svg className="w-5 h-5 transform transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/10 to-[#F6911E]/10 rounded-2xl transform transition-transform duration-500 group-hover:scale-95 opacity-0 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="aspect-square w-full max-w-md mx-auto p-8 transform transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={algLogo}
                      alt="Annual Leaders Gathering"
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-xl transform transition-all duration-300 group-hover:-translate-y-2 hover:shadow-2xl">
                    <span className="text-[#0B9A9E] font-semibold bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] bg-clip-text text-transparent">
                      December 13, 2025
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-dashed border-[#0B9A9E]/20 rounded-2xl transform transition-transform duration-500 group-hover:scale-90 group-hover:border-[#0B9A9E]/40"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B9A9E] via-[#F6911E] to-[#0B9A9E] opacity-20"></div>
      </section>

      {/* 2025 Events Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div className="text-[#F6911E] font-semibold text-lg tracking-wide uppercase mb-4">2025 Events Calendar</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Activity Plan 2025</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] mb-8"></div>
              <p className="text-xl text-gray-600">
                Join us throughout 2025 for a series of transformative events designed to inspire, connect, and empower leaders across Africa.
              </p>
            </div>

            <div className="space-y-8">
              {/* May */}
              <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#0B9A9E]/30">
                <div className="bg-gradient-to-r from-[#0B9A9E]/10 to-[#F6911E]/10 px-8 py-6 flex items-center justify-between group-hover:from-[#0B9A9E]/20 group-hover:to-[#F6911E]/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900">May 2025</h3>
                  <div className="flex items-center gap-2 text-[#0B9A9E]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">1 Event</span>
                  </div>
                </div>
                <div className="p-8 hover:bg-gray-50/50 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 flex-shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center">
                          <span className="text-[#0B9A9E] font-bold">03</span>
                        </div>
                        <div className="text-[#0B9A9E] font-semibold">May</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0B9A9E] transition-colors duration-200">
                        Huduma Fellows Reunion Seminar
                      </h4>
                      <p className="text-gray-600 mb-4">Full-day event: All class reunions in the morning, and a joint Huduma Summit in the afternoon – Mestil Hotel, Kampala</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* June - removed (no event in 2025) */}

              {/* July */}
              <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#0B9A9E]/30">
                <div className="bg-gradient-to-r from-[#0B9A9E]/10 to-[#F6911E]/10 px-8 py-6 flex items-center justify-between group-hover:from-[#0B9A9E]/20 group-hover:to-[#F6911E]/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900">July 2025</h3>
                  <div className="flex items-center gap-2 text-[#0B9A9E]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">1 Event</span>
                  </div>
                </div>
                <div className="p-8 hover:bg-gray-50/50 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 flex-shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center">
                          <span className="text-[#0B9A9E] font-bold">05</span>
                        </div>
                        <div className="text-[#0B9A9E] font-semibold">July</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0B9A9E] transition-colors duration-200">
                        YELP Fellows Reunion Seminar
                      </h4>
                      <p className="text-gray-600 mb-4">A full-day program bringing all classes together in the reunion summit in Kampala. Lake Victoria Serena Hotel – Kigo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* December */}
              <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#0B9A9E]/30">
                <div className="bg-gradient-to-r from-[#0B9A9E]/10 to-[#F6911E]/10 px-8 py-6 flex items-center justify-between group-hover:from-[#0B9A9E]/20 group-hover:to-[#F6911E]/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900">December 2025</h3>
                  <div className="flex items-center gap-2 text-[#0B9A9E]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">1 Event</span>
                  </div>
                </div>
                <div className="p-8 hover:bg-gray-50/50 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 flex-shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center">
                          <span className="text-[#0B9A9E] font-bold">13</span>
                        </div>
                        <div className="text-[#0B9A9E] font-semibold">December</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0B9A9E] transition-colors duration-200">
                        Annual Leaders Gathering 2025
                      </h4>
                      <p className="text-gray-600 mb-4">A single-day experience of keynotes, conversations, and networking — December 13th, 2025.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* October */}
              <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#0B9A9E]/30">
                <div className="bg-gradient-to-r from-[#0B9A9E]/10 to-[#F6911E]/10 px-8 py-6 flex items-center justify-between group-hover:from-[#0B9A9E]/20 group-hover:to-[#F6911E]/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900">October 2025</h3>
                  <div className="flex items-center gap-2 text-[#0B9A9E]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">1 Event</span>
                  </div>
                </div>
                <div className="p-8 hover:bg-gray-50/50 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-48 flex-shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center">
                          <span className="text-[#0B9A9E] font-bold">10</span>
                        </div>
                        <div className="text-[#0B9A9E] font-semibold">October</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0B9A9E] transition-colors duration-200">
                        LéO Africa Institute Executive Seminar
                      </h4>
                      <p className="text-gray-600 mb-4">The "Good Society Seminar" - Guiding Leaders on Living a Life of Success and Significance. To be hosted in Elmenteita, Kenya in partnership with Africa Leadership & Dialogue Institute (10th - 12th October)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* November - removed (no events in 2025) */}
            </div>
          </div>
        </div>
      </section>

      {/* Looking Back Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="text-[#F6911E] font-semibold text-lg tracking-wide uppercase mb-4">Looking Back</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Past Events & Impact</h2>
              <div className="w-24 h-1 bg-[#F6911E] mb-8"></div>
              <p className="text-xl text-gray-600">
                Over the years, we have hosted numerous impactful events that have brought together leaders, thinkers, and change-makers from across Africa.
                Here's a look at some of our most memorable gatherings.
              </p>
            </div>

            <div className="mb-16 relative">
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/5 via-white to-[#F6911E]/5 rounded-3xl -m-8"></div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden shadow-lg border border-gray-100">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0B9A9E]/10 to-transparent rounded-bl-[100px] -z-0"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#F6911E]/10 to-transparent rounded-tr-[100px] -z-0"></div>

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Header with Logo */}
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-12 pb-8 border-b border-gray-100">
                    <div className="w-32 h-32 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/10 to-[#F6911E]/10 rounded-full animate-pulse"></div>
                      <img 
                        src={algLogo}
                        alt="ALG Logo"
                        className="w-full h-full object-contain relative z-10"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-[#F6911E] font-semibold text-lg tracking-wide uppercase mb-2">Past Event</div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">Annual Leaders Gathering 2024</h3>
                      <p className="text-xl text-gray-600">Reimagining Leadership in the Age of Innovation</p>
                    </div>
                  </div>

                  {/* Event Details Grid */}
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Event Info */}
                    <div className="space-y-8">
                      {/* Date & Venue Card */}
                      <div className="bg-gray-50/50 rounded-xl p-6 backdrop-blur-sm border border-gray-100">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-base font-semibold text-gray-700">Date</div>
                              <div className="text-lg text-gray-900">November 14-16, 2024</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-5 h-5 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-base font-semibold text-gray-700">Venue</div>
                              <div className="text-lg text-gray-900">Sheraton Hotel</div>
                              <div className="text-base text-gray-600">Kampala, Uganda</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Event Description */}
                      <div className="prose prose-lg">
                        <p className="text-gray-600">
                          The 2024 edition of the Annual Leaders Gathering took place on November 14th and 16th at the esteemed Sheraton Hotel. This transformative event will bring together thought leaders, visionaries, and changemakers to explore innovative pathways to impactful leadership and foster global collaboration.
                        </p>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <a 
                          href="https://www.flickr.com/photos/africaforum/albums/72177720304155533"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B9A9E]/10 text-[#0B9A9E] rounded-lg hover:bg-[#0B9A9E]/20 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-semibold">View Photo Gallery</span>
                        </a>
                        <Link
                          to="https://alg.leoafricainstitute.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#F6911E]/10 text-[#F6911E] rounded-lg hover:bg-[#F6911E]/20 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span className="font-semibold">Visit ALG Website</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Speakers */}
                    <div className="space-y-8">
                      <div className="text-lg font-bold text-gray-900 mb-4">Distinguished Speakers</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                          <div className="w-16 h-16 mx-auto mb-3">
                            <img 
                              src={drMagara}
                              alt="Dr. James Magara"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">Dr. James Magara</div>
                            <div className="text-sm text-gray-600">Author, Futurist, Leadership Consultant & Dentist</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                          <div className="w-16 h-16 mx-auto mb-3">
                            <img 
                              src={profKigozi}
                              alt="Prof. Maggie Kigozi"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">Prof. Maggie Kigozi</div>
                            <div className="text-sm text-gray-600">Chairperson, Zuri Model Farm Ltd</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                          <div className="w-16 h-16 mx-auto mb-3">
                            <img 
                              src={msAkamanzi}
                              alt="Clare Akamanzi"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">Clare Akamanzi</div>
                            <div className="text-sm text-gray-600">Chief Executive Officer, NBA Africa</div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                          <div className="w-16 h-16 mx-auto mb-3">
                            <img 
                              src={drGichuru}
                              alt="Dr. Julie Gichuru"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">Dr. Julie Gichuru</div>
                            <div className="text-sm text-gray-600">President & CEO, Africa Leadership & Dialogue Institute</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Never Miss an Event Signup */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#0B9A9E] rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-[50px]"></div>

              <div className="relative">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Never Miss an Event</h3>
                  <p className="text-lg text-white/90 mb-8">
                    Stay updated with our latest events, talks, and leadership programs. Join our community of forward-thinking leaders.
                  </p>

                  <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-white text-[#0B9A9E] font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EventsAndGatherings
