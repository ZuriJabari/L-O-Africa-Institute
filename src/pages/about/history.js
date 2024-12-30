import React from "react";
import { Link } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const OurHistory = () => {
  return (
    <div className="our-history">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6">Our History</h1>
          <p className="text-lg leading-relaxed">
            Founded in 2012, LéO Africa Institute began as a vision to create a
            platform for emerging leaders across Africa. What started as small
            gatherings of thought leaders has grown into a continental movement
            for change.
          </p>
          <nav className="breadcrumb mt-6">
            <Link to="/" className="text-[#2bbecb] hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/about" className="text-[#2bbecb] hover:underline">
              About
            </Link>{" "}
            / <span>Our History</span>
          </nav>
        </div>
      </div>

      {/* Journey Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Our Journey
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Our journey began with the inaugural Young and Emerging Leaders
          Project (YELP), which brought together 20 young leaders from East
          Africa. Today, we've expanded to include multiple programs and
          initiatives that reach across the continent, empowering young leaders
          to shape Africa’s future.
        </p>

        {/* Timeline Section */}
        <div className="timeline relative border-l-4 border-[#2bbecb] space-y-12">
          {/* Timeline Item */}
          <div className="timeline-item pl-8 relative">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-[#2bbecb] rounded-full"></div>
            <span className="text-2xl font-bold text-[#2bbecb]">2012</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              Foundation of LéO Africa Institute
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              LéO Africa Institute was founded with the mission to create a
              platform for emerging leaders across Africa.
            </p>
          </div>

          {/* Timeline Item */}
          <div className="timeline-item pl-8 relative">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-[#2bbecb] rounded-full"></div>
            <span className="text-2xl font-bold text-[#2bbecb]">2015</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              Launch of the Annual Leaders Gathering
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              The Annual Leaders Gathering was launched to bring together
              thought leaders and emerging leaders from across the continent.
            </p>
          </div>

          {/* Timeline Item */}
          <div className="timeline-item pl-8 relative">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-[#2bbecb] rounded-full"></div>
            <span className="text-2xl font-bold text-[#2bbecb]">2018</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              Introduction of Huduma Fellowship
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              The Huduma Fellowship was introduced to support young leaders in
              their journey towards impactful leadership.
            </p>
          </div>

          {/* Timeline Item */}
          <div className="timeline-item pl-8 relative">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-[#2bbecb] rounded-full"></div>
            <span className="text-2xl font-bold text-[#2bbecb]">2020</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              Launch of LéO Africa Review
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              LéO Africa Review was launched to provide a platform for
              thought-provoking articles and insights from leaders across
              Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurHistory;
