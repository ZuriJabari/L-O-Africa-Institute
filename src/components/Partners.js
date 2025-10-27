import React from "react";
import { motion } from "framer-motion";
import kasLogo from '../assets/images/partners/KAS.png';
import SegalLogo from '../assets/images/sff-logo-alt-box.png';
import AbmakLogo from '../assets/images/partners/ABMAKS.jpg';
import RkaLogo from '../assets/images/partners/rka.png';

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
    <section className="relative py-14 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0B9A9E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F6911E]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center mb-10 md:mb-12"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[#F6911E]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#F6911E] font-medium">
              Collaboration
            </span>
            <div className="w-12 h-px bg-[#F6911E]" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Our Partners & Supporters
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Together with our partners, we're building a stronger foundation for leadership development 
            and social innovation in Africa.
          </p>
        </motion.div>

        {/* Partner Logo Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="flex items-center justify-center"
                >
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative block w-full"
                    aria-label={`Visit ${partner.name} website`}
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B9A9E]/5 to-[#F6911E]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100" />
                    
                    {/* Logo Container */}
                    <div className="relative h-20 md:h-24 flex items-center justify-center p-2 md:p-3">
                      <img 
                        src={partner.logo} 
                        alt={partner.alt}
                        className={`${partner.className || 'max-h-14 md:max-h-16'} max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105`}
                      />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 