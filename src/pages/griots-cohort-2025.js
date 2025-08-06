import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { griotsData, griotsBios } from "../data/griots-data";
import heroArt from "../assets/images/hero-art.png";
import "../styles/griots-animations.css";

// Static mapping of headshot filenames to imported images
const images = {
  "dr-yacoub-hachine.jpg": require("../assets/images/griots/dr-yacoub-hachine.jpg"),
  "emmanuel-siryoyi-awori.jpg": require("../assets/images/griots/emmanuel-siryoyi-awori.jpg"),
  "mohamed-alaa-eldin.jpg": require("../assets/images/griots/mohamed-alaa-eldin.jpg"),
  "brian-oduti.jpg": require("../assets/images/griots/brian-oduti.jpg"),
  "Elizabeth Igaga.jpg": require("../assets/images/griots/Elizabeth Igaga.jpg"),
  "lutgard-musiime.jpg": require("../assets/images/griots/lutgard-musiime.jpg"),
  "resty-nabaggala.jpg": require("../assets/images/griots/resty-nabaggala.jpg"),
  "elsa-mirembe.jpg": require("../assets/images/griots/elsa-mirembe.jpg"),
  "arafat-magezi.jpg": require("../assets/images/griots/arafat-magezi.jpg"),
  "muganga-derrick-ernest.jpg": require("../assets/images/griots/muganga-derrick-ernest.jpg"),
  "saxon-ssekitooleko.jpg": require("../assets/images/griots/saxon-ssekitooleko.jpg"),
  "chelsea-olga-eswau.jpg": require("../assets/images/griots/chelsea-olga-eswau.jpg"),
  "naissa-umutoni-karekezi.jpg": require("../assets/images/griots/naissa-umutoni-karekezi.jpg"),
  "roland-byagaba.jpg": require("../assets/images/griots/roland-byagaba.jpg"),
  "loise-machira.jpg": require("../assets/images/griots/loise-machira.jpg"),
  "kingdavid-ayo-loto.jpg": require("../assets/images/griots/kingdavid-ayo-loto.jpg"),
  "katamba-matthew-kenneth.jpg": require("../assets/images/griots/katamba-matthew-kenneth.jpg"),
  "kawooya-dickson.jpg": require("../assets/images/griots/kawooya-dickson.jpg"),
  "gabriel-msabila-karsan.jpg": require("../assets/images/griots/gabriel-msabila-karsan.jpg"),
  "patience-naamanya.jpg": require("../assets/images/griots/patience-naamanya.jpg"),
  "ignatious-kirunga.jpg": require("../assets/images/griots/ignatious-kirunga.jpg"),
  "elizabeth-mwambulukutu.jpg": require("../assets/images/griots/elizabeth-mwambulukutu.jpg"),
  "catherine-nankabirwa.jpg": require("../assets/images/griots/catherine-nankabirwa.jpg"),
  "fiona-mbabazi.png": require("../assets/images/griots/fiona-mbabazi.png"),
  "Christine-Isimbi.jpg": require("../assets/images/griots/Christine-Isimbi.jpg"),
  "Kamatamu-Amanda-Mbonye.jpg": require("../assets/images/griots/Kamatamu-Amanda-Mbonye.jpg"),
  "Muhanguzi-Derrick.jpeg": require("../assets/images/griots/Muhanguzi-Derrick.jpeg"),
};

const GriotsCohort2025 = () => {
  const [selectedGriot, setSelectedGriot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.dataset.index]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Helper function to get image path
  const getImagePath = (headshot) => {
    const img = images[headshot];
    if (img) {
      return img.default || img;
    }
    // Fallback to placeholder if image doesn't exist
    const encodedName = encodeURIComponent(headshot.replace('.jpg', '').replace('.jpeg', '').replace(/-/g, ' '));
    return `https://via.placeholder.com/400x600/2BBECB/FFFFFF?text=${encodedName}`;
  };

  // Handle bio modal
  const handleBioClick = (griot) => {
    setSelectedGriot(griot);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedGriot(null), 300);
  };

  return (
    <Layout>
      <Helmet>
        <title>Meet the Griots - Class of 2025 | LÉO Africa Institute</title>
        <meta name="description" content="Meet Africa's next generation of storytellers and leaders - the Griots Cohort 2025. Discover the inspiring individuals shaping Africa's future through thought leadership and action." />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[420px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroArt})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Meet the Griots
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
            Africa's Next Generation of Storytellers and Leaders
          </p>
          <div className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
            Class of 2025!
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Griots Program
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The Griots program identifies and supports Africa's most promising young leaders, 
              storytellers, and changemakers. Through mentorship, training, and networking, 
              these individuals are equipped to amplify their voices and create lasting impact 
              across the continent and beyond.
            </p>

          </div>
        </div>
      </section>

      {/* Griots Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Meet Our Griots
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Click on any portrait to view their full bio and learn more about their work and impact.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {griotsData.map((griot, index) => (
              <div 
                key={griot.id} 
                data-index={index}
                className={`group cursor-pointer transform transition-all duration-700 ${
                  isVisible[index] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleBioClick(griot)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${griot.bgColor}`}>
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={getImagePath(griot.headshot)}
                      alt={griot.name}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredCard === index ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h3 className="text-xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{griot.name}</h3>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Bio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Bio Modal */}
      {showModal && selectedGriot && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-500 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-white">
              <div className="absolute top-4 right-4 z-50">
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 relative z-50 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                  <img
                    src={getImagePath(selectedGriot.headshot)}
                    alt={selectedGriot.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 animate-slideInLeft">{selectedGriot.name}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-lg">Griot Fellow 2025</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
            </div>
            
            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[60vh]">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="relative group">
                    <img
                      src={getImagePath(selectedGriot.headshot)}
                      alt={selectedGriot.name}
                      className="w-full rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full"></div>
                        Biography
                      </h4>
                      <div className="max-w-none">
                        {griotsBios[selectedGriot.id]?.bio ? (
                          griotsBios[selectedGriot.id].bio.split('\n\n').map((paragraph, index) => (
                            <p 
                              key={index} 
                              className="font-sans text-gray-700 text-body leading-relaxed mb-6 text-justify tracking-tight"
                              style={{ 
                                textAlign: 'justify', 
                                textJustify: 'inter-word',
                                fontFamily: 'Inter, system-ui, sans-serif',
                                fontSize: '1.125rem',
                                lineHeight: '1.6',
                                letterSpacing: '-0.01em'
                              }}
                            >
                              {paragraph.trim()}
                            </p>
                          ))
                        ) : (
                          <p className="font-sans text-gray-700 text-body leading-relaxed text-justify tracking-tight"
                             style={{ 
                               fontFamily: 'Inter, system-ui, sans-serif',
                               fontSize: '1.125rem',
                               lineHeight: '1.6',
                               letterSpacing: '-0.01em'
                             }}
                          >
                            Bio information coming soon...
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Close Button */}
              <div className="flex justify-center pt-6 border-t border-gray-100">
                <button
                  onClick={closeModal}
                  className="group bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                >
                  <span>Close</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Support the Next Generation
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Help us continue to identify, train, and support Africa's most promising young leaders 
            and storytellers. Your support makes this program possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition-colors duration-200"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GriotsCohort2025; 
