import React from 'react';
import Layout from '../components/Layout'; // Import the Layout component
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social and Contact Icons
import YELPLogo from '../assets/images/YELP-Logo.svg'; // YELP Logo
import HudumaLogo from '../assets/images/huduma-logo.svg'; // Huduma Fellowship Logo
import LARLogo from '../assets/images/LAR-logo.png'; // LéO Africa Review Logo
import contactHero from '../assets/images/contact-hero.jpg'; // Contact hero image

const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section with the new background image */}
      <section className="relative h-[65vh] bg-cover bg-center text-white flex flex-col justify-center items-center" style={{ backgroundImage: `url(${contactHero})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <h1 className="relative z-10 text-4xl sm:text-6xl font-bold mb-4">Need Help? We're Here for You!</h1>
        <p className="relative z-10 text-lg sm:text-xl max-w-3xl text-center">
          Whether you have questions about the Annual Leaders Gathering, need support with registration, or want to partner with us, feel free to get in touch with our team. We're committed to providing the best experience.
        </p>
      </section>
      <div className='prefooter'></div>
      {/* New Contact Information Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center text-lg leading-relaxed">
          <p className="mb-4">
            <a href="mailto:alg@leoafricainstitute.org" className="font-bold text-[#1d8f92] hover:underline">alg@leoafricainstitute.org</a> – for Annual Leaders Gathering inquiries
          </p>
          <p className="mb-4">
            <a href="mailto:communications@leoafricainstitute.org" className="font-bold text-[#1d8f92] hover:underline">communications@leoafricainstitute.org</a> – for General Inquiries
          </p>
          <p className="mb-4">
            Our social media accounts are also a great way to reach us and support conversations online using the hashtag <span className="font-bold text-[#1d8f92]">#ALG2024</span>
          </p>

          {/* Social Media Icons with hover animation */}
          <div className="mt-8 flex justify-center space-x-8 text-4xl text-gray-600">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d8f92] transition-all duration-300 transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d8f92] transition-all duration-300 transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d8f92] transition-all duration-300 transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d8f92] transition-all duration-300 transform hover:scale-110">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </section>

      {/* Redesigned Initiatives Section with Logos */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Check out other initiatives of the LéO Africa Institute</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Huduma Fellowship */}
          <a
            href="https://huduma.leoafricainstitute.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 opacity-20 bg-pattern"></div>
            <img src={HudumaLogo} alt="Huduma Fellowship Logo" className="h-24 mx-auto mb-4 z-10 relative" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4 z-10 relative">Huduma Fellowship</h3>
            <p className="text-lg text-gray-700 z-10 relative">Empowering public service leaders to drive positive change.</p>
          </a>

          {/* YELP */}
          <a
            href="https://yelp.leoafricainstitute.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 opacity-20 bg-pattern"></div>
            <img src={YELPLogo} alt="YELP Logo" className="h-24 mx-auto mb-4 z-10 relative" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4 z-10 relative">YELP</h3>
            <p className="text-lg text-gray-700 z-10 relative">Cultivating the next generation of visionary African leaders.</p>
          </a>

          {/* LéO Africa Review */}
          <a
            href="https://leoafricareview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 opacity-20 bg-pattern"></div>
            <img src={LARLogo} alt="LéO Africa Review Logo" className="h-24 mx-auto mb-4 z-10 relative" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4 z-10 relative">LéO Africa Review</h3>
            <p className="text-lg text-gray-700 z-10 relative">Insights and analyses on African development and leadership.</p>
          </a>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-[#0a4445] text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe for Updates</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Stay in the loop! Subscribe to our mailing list and be the first to hear about upcoming events, news, and exclusive content from the LéO Africa Institute.
        </p>

        <form
          action="https://leoafricainstitute.us3.list-manage.com/subscribe/post?u=cecb072ded342121a9e74ffb0&amp;id=82be85988f" // Replace with your Mailchimp form URL
          method="POST"
          className="max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email address"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring focus:ring-[#1d8f92]"
            required
          />
          <button
            type="submit"
            className="bg-[#f6941e] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-[#1d8f92] transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default ContactPage;
