import React from 'react';
import Layout from '../components/Layout';
import heroImage from '../assets/images/speakers-hero.jpg'; // Hero image

const SpeakersPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[65vh]" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Annual Leaders Gathering 2024</h1>
          <p className="text-lg sm:text-xl font-semibold mb-4">Harnessing Africa’s Growth Drivers: The Critical Role of Leadership, Institutions and Human Capital</p>
          <p className="text-lg sm:text-xl max-w-2xl">Join us as Africa’s top leaders share insights on leadership, human capital, and growth drivers in Africa.</p>
        </div>
      </section>
      <div className='prefooter'></div>
      {/* Speakers Announcement Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Speakers Will Be Announced Soon</h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
          We are excited to bring you the best minds in leadership, business, and development. Stay tuned as we prepare to announce the distinguished speakers for this year's Annual Leaders Gathering.
        </p>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mt-4">
          Follow us on our social media channels or subscribe to our newsletter for updates on the event program and speaker announcements.
        </p>
      </section>

      {/* PDF Download Section */}
      <section className="bg-white py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Download the Event Program</h2>
          <p className="text-lg text-gray-600 mb-6">Program will be available for download soon.</p>
          <a
            href="/#"
            download
            className="inline-block bg-[#1d8f92] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-[#1d8f92] transition-all"
          >
            Download PDF
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default SpeakersPage;
