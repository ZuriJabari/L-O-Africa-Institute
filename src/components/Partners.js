import React from "react";
import { motion } from "framer-motion";
import kasLogo from '../assets/images/partners/KAS.png';
import SegalLogo from '../assets/images/sff-logo-alt-box.png';
import AbmakLogo from '../assets/images/partners/ABMAKS.jpg';
import RkaLogo from '../assets/images/partners/RKA.png';

const Partners = () => {
  const partners = [
    { 
      logo: kasLogo, 
      name: "KAS", 
      alt: "KAS Logo",
      website: "https://www.kas.de/en/web/uganda"
    },
    { 
      logo: SegalLogo, 
      name: "Segal Family Foundation", 
      alt: "Segal Family Foundation Logo",
      website: "https://www.segalfamilyfoundation.org/",
      className: "max-h-24"
    },
    { 
      logo: AbmakLogo, 
      name: "ABMAK Associates", 
      alt: "ABMAK Associates Logo",
      website: "https://abmak.org/"
    },
    { 
      logo: RkaLogo, 
      name: "RKA Associates", 
      alt: "RKA Associates Logo",
      website: "https://rka.ug/"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Partners & Supporters</h2>
          <div className="w-16 h-1 bg-[#0B9A9E] mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Together with our partners, we're building a stronger foundation for leadership development 
            and social innovation in Africa.
          </p>
        </motion.div>

        {/* Single-row Partner Logo Showcase */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm py-8 px-4 md:px-8">
          <div className="flex items-center justify-evenly md:justify-between flex-wrap md:flex-nowrap gap-8 md:gap-0">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex-shrink-0"
              >
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block transition-all duration-300 hover:scale-105"
                  aria-label={`Visit ${partner.name} website`}
                >
                  <div className="h-16 md:h-20 w-32 md:w-40 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.alt}
                      className={`${partner.className || 'max-h-14 md:max-h-16'} max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300`}
                    />
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