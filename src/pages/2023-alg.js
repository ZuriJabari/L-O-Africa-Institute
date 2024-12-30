import React from 'react';
import Layout from '../components/Layout';
import '../Styles/global.css';

export default function ALG2023() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-[#0B9A9E] to-[#F6911E]">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            Annual Leaders Gathering 2023
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Shaping Africa's Future Through Leadership
          </h1>
          <p className="text-white/90 text-xl max-w-3xl mb-8">
            A convergence of Africa's brightest minds and influential leaders, discussing critical issues and charting the path forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.flickr.com/photos/africaforum/albums/72177720322157081/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0B9A9E] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              View Photo Gallery
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Report
            </button>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-[#F6911E]/10 text-[#F6911E] rounded-full text-sm font-semibold mb-6">
                Event Overview
              </span>
              <h2 className="text-3xl font-bold mb-6">About ALG 2023</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-6">
                  The Annual Leaders Gathering 2023 brought together distinguished leaders, policymakers, and innovators from across Africa to address pressing challenges and opportunities facing the continent.
                </p>
                <p className="text-lg mb-6">
                  Through engaging panel discussions, keynote addresses, and interactive sessions, participants explored themes of economic growth, technological innovation, and sustainable development.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-gray-600">Participants</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#F6911E]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#F6911E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-gray-600">Days</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#F6911E]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#F6911E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-gray-600">Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#0B9A9E]/10 text-[#0B9A9E] rounded-full text-sm font-semibold mb-6">
              Event Highlights
            </span>
            <h2 className="text-3xl font-bold">Key Moments & Discussions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Opening Ceremony</h3>
              <p className="text-gray-600 mb-4">
                Distinguished speakers set the tone for three days of impactful discussions on Africa's future.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Panel Discussions</h3>
              <p className="text-gray-600 mb-4">
                Expert-led sessions on economic integration, technology innovation, and sustainable development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Networking Sessions</h3>
              <p className="text-gray-600 mb-4">
                Valuable connections made during structured networking events and informal gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#0B9A9E]/5 rounded-2xl p-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Event Gallery</h2>
              <p className="text-gray-600">
                Explore moments captured during the Annual Leaders Gathering 2023
              </p>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://www.flickr.com/photos/africaforum/albums/72177720322157081/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-colors"
              >
                View Full Photo Album
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
