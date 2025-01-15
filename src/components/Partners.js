import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from 'react-icons/fi';
import kasLogo from '../assets/images/partners/KAS.png';
import SegalLogo from '../assets/images/partners/SFF.svg';
import AbmakLogo from '../assets/images/partners/ABMAKS.jpg';
import RkaLogo from '../assets/images/partners/RKA.png';

const Partners = () => {
  const partners = [
    { 
      logo: kasLogo, 
      name: "KAS", 
      desc: "Leadership Development", 
      alt: "KAS Logo",
      website: "https://www.kas.de/en/web/uganda"
    },
    { 
      logo: SegalLogo, 
      name: "Social Shift Foundation", 
      desc: "Youth Empowerment", 
      alt: "Social Shift Foundation Logo",
      website: "https://socialshiftfoundation.org"
    },
    { 
      logo: AbmakLogo, 
      name: "ABMAK Associates", 
      desc: "Legal Advisors", 
      alt: "ABMAK Associates Logo",
      website: "https://abmak.co.ug"
    },
    { 
      logo: RkaLogo, 
      name: "RKA Associates", 
      desc: "Accounting & Advisory", 
      alt: "RKA Associates Logo",
      website: "https://rkaassociates.com"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#e5f7f9] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#0B9A9E]/10 to-transparent rounded-bl-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#F6911E]/10 to-transparent rounded-tr-[100px] -z-0"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners & Supporters</h2>
            <div className="w-24 h-1 bg-[#0B9A9E] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together with our partners, we're building a stronger foundation for leadership development and social innovation in Africa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group relative"
                >
                  <div className="flex flex-col items-center h-full">
                    <div className="h-20 flex items-center justify-center mb-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.alt}
                        className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                        <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#0B9A9E] transition-colors" />
                      </div>
                      <p className="text-sm text-gray-600">{partner.desc}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 