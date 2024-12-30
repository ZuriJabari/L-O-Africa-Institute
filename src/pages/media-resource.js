import React, { useState } from 'react';
import Layout from '../components/Layout'; // Importing the constant Layout
import { FaFileAlt, FaVideo, FaCameraRetro, FaDownload, FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Resource icons
import heroImage from '../assets/images/media-hero.jpg'; // Updated hero image path

const MediaResource = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    "https://via.placeholder.com/300x200?text=Photo+1",
    "https://via.placeholder.com/300x200?text=Photo+2",
    "https://via.placeholder.com/300x200?text=Photo+3",
    "https://via.placeholder.com/300x200?text=Photo+4",
    "https://via.placeholder.com/300x200?text=Photo+5",
    "https://via.placeholder.com/300x200?text=Photo+6"
  ];

  const openPhoto = (index) => {
    setSelectedPhoto(index);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    setSelectedPhoto((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setSelectedPhoto((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[65vh]" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">ALG Media & Resource Centre</h1>
          <p className="text-lg sm:text-xl max-w-3xl text-center">
            Access a wide range of resources, including publications, videos, and photos from past Annual Leaders Gatherings.
          </p>
        </div>
      </section>
      <div className='prefooter'></div>
      {/* Media Resource Section */}
      <section className="space-y-16">
        
        {/* Publications Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-6">
              <FaFileAlt className="text-[#f6941e] w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold">Publications</h2>
            </div>
            <div className="space-y-8">
              {/* Publication Item */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/150" alt="Publication 1" className="w-32 h-48 object-cover rounded-lg shadow-md mr-6" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Publication Title 1</h3>
                  <p className="text-gray-700 mb-4">A detailed insight into leadership strategies in Africa, this publication delves into key aspects of governance and institution building.</p>
                  <a href="/path/to/publication.pdf" download className="text-[#f6941e] font-semibold flex items-center space-x-2 hover:underline">
                    <FaDownload /> <span>Download Publication</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/150" alt="Publication 2" className="w-32 h-48 object-cover rounded-lg shadow-md mr-6" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Publication Title 2</h3>
                  <p className="text-gray-700 mb-4">An in-depth look into African economic growth drivers and how leadership can play a transformative role.</p>
                  <a href="/path/to/publication.pdf" download className="text-[#f6941e] font-semibold flex items-center space-x-2 hover:underline">
                    <FaDownload /> <span>Download Publication</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Section - Side by Side */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-6">
              <FaVideo className="text-[#f6941e] w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold">Videos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gPnm3UIY1DY?si=NSmKOEYW1C9eOWNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="group relative">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qEyf5X0WcgY?si=Ou30XSqP9h5KPVpJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-6">
              <FaCameraRetro className="text-[#f6941e] w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold">Photo Gallery</h2>
            </div>
            <p className="text-gray-600 mb-8">Explore moments from our Annual Leaders Gathering and other events.</p>
            
            {/* Flickr Album Integration */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">ALG 2023 Photo Album</h3>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://via.placeholder.com/1200x675" 
                    alt="ALG 2023 Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-lg font-semibold mb-2">Annual Leaders Gathering 2023</p>
                      <p className="text-sm opacity-80">Explore the complete photo collection on Flickr</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://www.flickr.com/photos/africaforum/albums/72177720322157081/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B9A9E] text-white rounded-lg font-semibold hover:bg-[#0B9A9E]/90 transition-colors"
                >
                  View Full Album
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Video Highlights Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6">Event Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="aspect-video mb-4">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/gPnm3UIY1DY?si=NSmKOEYW1C9eOWNc" 
                      title="ALG 2023 Highlights"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">ALG 2023 Highlights</h4>
                  <p className="text-gray-600">Key moments and insights from the Annual Leaders Gathering 2023</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="aspect-video mb-4">
                    <iframe 
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/VIDEO_ID" 
                      title="Leadership Insights"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Leadership Insights</h4>
                  <p className="text-gray-600">Thought-provoking discussions from our distinguished speakers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Event Reports</h3>
                <p className="text-gray-600 mb-4">Comprehensive reports from our events and gatherings</p>
                <a href="#" className="text-[#0B9A9E] font-semibold hover:underline">Download Reports</a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#F6911E]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#F6911E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Presentations</h3>
                <p className="text-gray-600 mb-4">Speaker presentations and session materials</p>
                <a href="#" className="text-[#F6911E] font-semibold hover:underline">Access Presentations</a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#0B9A9E]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0B9A9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Media Kit</h3>
                <p className="text-gray-600 mb-4">Logos, brand guidelines, and press materials</p>
                <a href="#" className="text-[#0B9A9E] font-semibold hover:underline">Download Media Kit</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal for Enlarged View */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <button className="absolute top-8 right-8 text-white text-4xl" onClick={closePhoto}>
            <FaTimes />
          </button>
          <button className="absolute left-8 text-white text-4xl" onClick={prevPhoto}>
            <FaChevronLeft />
          </button>
          <button className="absolute right-8 text-white text-4xl" onClick={nextPhoto}>
            <FaChevronRight />
          </button>
          <img
            src={photos[selectedPhoto]}
            alt={`Photo ${selectedPhoto + 1}`}
            className="w-3/4 h-auto max-w-4xl max-h-[80vh] object-contain"
          />
        </div>
      )}
    </Layout>
  );
};

export default MediaResource;
