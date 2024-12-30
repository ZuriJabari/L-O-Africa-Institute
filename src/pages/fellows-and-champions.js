import React from "react";
import Layout from "../components/Layout";
import fellowsHeroImage from "../assets/images/hero4.jpg"; // Replace with a relevant hero image
import fellow1Img from "../assets/images/future.jpg"; // Replace with a relevant image
import fellow2Img from "../assets/images/future.jpg"; // Replace with a relevant image
import champion1Img from "../assets/images/future.jpg"; // Replace with a relevant image
import champion2Img from "../assets/images/future.jpg"; // Replace with a relevant image

const FellowsAndChampions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${fellowsHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Fellows & Champions
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl">
            Celebrating outstanding individuals whose contributions and
            leadership inspire positive change across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Fellows Section */}
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Fellows
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Meet the exceptional individuals shaping Africa's future through
          thought leadership, collaboration, and action.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Fellow Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
            <img
              src={fellow1Img}
              alt="Fellow Name"
              className="w-full h-48 object-cover group-hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Fellow Name
              </h3>
              <p className="text-sm text-gray-500 mb-4">Title or Role</p>
              <p className="text-gray-700 line-clamp-3">
                Brief bio or description about the fellow's work and
                contributions to the community.
              </p>
            </div>
          </div>
          {/* Add more fellows */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
            <img
              src={fellow2Img}
              alt="Fellow Name"
              className="w-full h-48 object-cover group-hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Fellow Name
              </h3>
              <p className="text-sm text-gray-500 mb-4">Title or Role</p>
              <p className="text-gray-700 line-clamp-3">
                Brief bio or description about the fellow's work and
                contributions to the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Champions Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Champions
          </h2>
          <p className="text-lg text-gray-600 mb-10 text-center">
            Celebrating champions whose support and advocacy drive our mission
            forward.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Champion Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
              <img
                src={champion1Img}
                alt="Champion Name"
                className="w-full h-48 object-cover group-hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Champion Name
                </h3>
                <p className="text-sm text-gray-500 mb-4">Supporter Role</p>
                <p className="text-gray-700 line-clamp-3">
                  Brief description of the champion's contributions to the LéO
                  Africa Institute and the community.
                </p>
              </div>
            </div>
            {/* Add more champions */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
              <img
                src={champion2Img}
                alt="Champion Name"
                className="w-full h-48 object-cover group-hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Champion Name
                </h3>
                <p className="text-sm text-gray-500 mb-4">Supporter Role</p>
                <p className="text-gray-700 line-clamp-3">
                  Brief description of the champion's contributions to the LéO
                  Africa Institute and the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FellowsAndChampions;
