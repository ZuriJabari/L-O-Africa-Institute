import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaHandshake, FaGraduationCap, FaLightbulb, FaUsers } from 'react-icons/fa';
import kasLogo from '../assets/images/partners/KAS.png';
import SegalLogo from '../assets/images/partners/SFF.svg';
import AbmakLogo from '../assets/images/partners/ABMAKS.jpg';
import RkaLogo from '../assets/images/partners/RKA.png';

const PartnerWithUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e5f7f9] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#0B9A9E]/10 to-transparent rounded-bl-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#F6911E]/10 to-transparent rounded-tr-[100px] -z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners & Supporters</h2>
          <div className="w-24 h-1 bg-[#0B9A9E] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Together with our partners, we're building a stronger foundation for leadership development and social innovation in Africa.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Partners Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B9A9E]/5 to-transparent rounded-bl-[50px] -z-0"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Strategic Partners</h3>
            
            {/* Partners Grid */}
            <div className="grid grid-cols-2 gap-8 relative z-10">
              {[
                { logo: kasLogo, name: "KAS", desc: "Leadership Development", alt: "KAS Logo" },
                { logo: SegalLogo, name: "Social Shift Foundation", desc: "Youth Empowerment", alt: "Social Shift Foundation Logo" },
                { logo: AbmakLogo, name: "ABMAK Associates", desc: "Legal Advisors", alt: "ABMAK Associates Logo" },
                { logo: RkaLogo, name: "RKA Associates", desc: "Accounting & Advisory", alt: "RKA Associates Logo" }
              ].map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                    <div className="h-20 flex items-center justify-center mb-3">
                      <img 
                        src={partner.logo} 
                        alt={partner.alt}
                        className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 mb-1">{partner.name}</div>
                      <div className="text-xs text-gray-600">{partner.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F6911E]/5 to-transparent rounded-bl-[50px] -z-0"></div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Partner With Us</h3>
            
            <p className="text-gray-600 mb-8 relative z-10">
              Join us in our mission to nurture the next generation of ethical, effective, and enlightened African leaders.
            </p>

            {/* Program Areas */}
            <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
              {[
                { icon: FaGraduationCap, text: "Leadership Development" },
                { icon: FaLightbulb, text: "Research & Policy" },
                { icon: FaUsers, text: "Youth Empowerment" },
                { icon: FaHandshake, text: "Knowledge Exchange" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 rounded-lg bg-[#0B9A9E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B9A9E]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#0B9A9E]" />
                  </div>
                  <div className="text-sm text-gray-700">{item.text}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="mailto:partnerships@leoafricainstitute.org"
              className="inline-flex items-center px-6 py-3 bg-[#0B9A9E] text-white rounded-lg hover:bg-[#0B9A9E]/90 transition-colors group relative z-10"
            >
              <span className="mr-2">Become a Partner</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
