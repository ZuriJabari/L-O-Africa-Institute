import React from 'react';
import KASLOGO from '../../assets/images/partners/KAS.png';
import ABMAKSLOGO from '../../assets/images/partners/ABMAKS.jpg';
import SSFLOGO from '../../assets/images/partners/SFF.svg';
import RKALOGO from '../../assets/images/partners/RKA.png';
import { FiArrowRight } from 'react-icons/fi';

export const OurPartners = () => {
  const partners = [
    {
      name: "Segal Family Foundation",
      logo: SSFLOGO,
      description: "Supporting youth initiatives across Africa",
      link: "https://www.segalfamilyfoundation.org/"
    },
    {
      name: "ABMAK Associates",
      logo: ABMAKSLOGO,
      description: "Legal Advisors",
      link: "https://abmak.org/"
    },
    {
      name: "Konrad Adenauer Stiftung (KAS)",
      logo: KASLOGO,
      description: "Collaboration on leadership development and youth engagement",
      link: "https://www.kas.de/en/web/uganda"
    },
    {
      name: "RKA Associates",
      logo: RKALOGO,
      description: "Accounting and advisory",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </a>
          ))}
        </div>
        <div className="py-6 px-6 rounded-lg flex items-center space-x-4 mt-4">
          <p className="text-sm text-[#1e8e92] font-semibold">
            Explore other ways to contribute, support our work or part of the community.
          </p>
          <a 
            href="/contribute" 
            className="bg-[#f6911e] text-white py-2 px-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-[#1e8e92] inline-flex items-center space-x-2"
          >
            <span>Learn More</span>
            <FiArrowRight className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};
