import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import HudumaLayout from '../../components/layout/HudumaLayout';
import HeroImage from '../../assets/images/huduma-landing.jpg';
import BgPattern from '../../assets/images/hudumabg.png';
import LeoColors from '../../assets/images/leo-colors.png';
import HudumaSymbol from '../../assets/images/huduma-symbol.png';
import LeoLogo from '../../assets/images/Leo-logo-primary.png';
import KasLogo from '../../assets/images/KAS_Logo_Original.png';

const HudumaHome = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState({ text: '', success: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setMessage({ 
        text: 'Thank you for subscribing! We\'ll keep you updated about #Huduma2025.', 
        success: true 
      });
      setEmail('');
      setName('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <HudumaLayout>
      <div 
        className="h-[50px] w-screen bg-repeat-x bg-[length:50px_50px]"
        style={{ backgroundImage: `url(${BgPattern})` }}
      />
      
      <section 
        className="relative min-h-[90vh] w-screen bg-center bg-cover bg-no-repeat flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${HeroImage})` 
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Huduma Fellowship
              </motion.h1>
              
              <motion.p 
                className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Applications for the 2025 cohort of the Huduma Fellowship are opening soon.
              </motion.p>

              <motion.p 
                className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Are you a young professional working in Uganda's public service or civic sectors? Are you committed to improving public service delivery and championing impactful leadership?
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:justify-self-end"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl w-full max-w-md">
                <h3 className="text-2xl font-semibold text-white mb-3">Stay Updated</h3>
                <p className="text-white/80 text-base mb-8">
                  Subscribe for updates on #Huduma2025 to stay in the loop about the application process.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full h-12 bg-black/20 text-white border border-white/20 rounded-lg px-4 focus:outline-none focus:border-white/40 focus:bg-black/30 placeholder-white/50 text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-12 bg-black/20 text-white border border-white/20 rounded-lg px-4 focus:outline-none focus:border-white/40 focus:bg-black/30 placeholder-white/50 text-base"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-12 bg-[#2A6A76] text-white font-semibold rounded-lg flex items-center justify-center hover:bg-[#87181A] disabled:opacity-70 disabled:cursor-not-allowed transition-colors text-base"
                  >
                    {isSubmitting ? 'Submitting...' : 'Subscribe now'}
                  </motion.button>
                  {message.text && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/90 text-base text-center"
                    >
                      {message.text}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About <span className="text-[#2A6A76]">Huduma</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4 italic">
              Huduma (/ˈho͞odo͞omə/, noun) - A Swahili word meaning service
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Huduma is an initiative by the LéO Africa Institute and Konrad Adenauer Stiftung to provide thought leadership training for emerging civic & public sector champions in Uganda. Every year, the programme enrolls 15 outstanding champions who already work in civic & public service or aspire to do so.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#2A6A76]">Focus</h3>
              <p className="text-gray-700">
                The Huduma Fellowship is built around highly integrated modules modelled along the LéO Africa Institute strategic objectives and vision for leadership in Africa.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#2A6A76]">Structure</h3>
              <p className="text-gray-700">
                The Huduma fellowship is structured along a series of 2 seminars and 2 workshops in between which Fellows spend time at their work places with occasional interface with the members of the faculty.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#2A6A76]">Delivery</h3>
              <p className="text-gray-700">
                The fellowship is delivered through a combination of means: some face to face sessions, online facilitated sessions and self-study which include recommended reading materials.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Identity</h2>
            <div className="mb-12">
              <img 
                src={HudumaSymbol} 
                alt="Huduma Symbol" 
                className="w-40 h-40 mx-auto mb-8 hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              The Nkyinkyim symbol was chosen as Huduma's logo because it depicts the twists and turns of life's journey that require our fellows to have initiative, dynamism and versatility to survive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Fellows Learn Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">What Our Fellows Learn</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At the fellowship, which is delivered through a combination of different approaches that include face to face presentations and online studies, fellows engage in faculty presentations, case studies, personal assessments, individual and group exercises, and special projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through a customized case and professional Faculty coaching, fellows develop a personal action plan to tap into their leadership and influencing skills that are used during the fellowship and in fellows' post fellowship career development plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fellowship Structure Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Fellowship Structure</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              The Huduma fellowship is structured along a series of two seminars and two workshops in between which Fellows spend time at their work places with occasional interface with the members of the faculty as they continue to learn and apply the knowledge and skills acquired.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Seminar One", date: "Mar 22 – 24 2024" },
              { title: "Seminar Two", date: "May 3 – 4 2024" },
              { title: "Seminar Three", date: "Aug 23 – 24 2024" },
              { title: "Graduation Seminar", date: "TBC 2024" }
            ].map((seminar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 text-[#2A6A76]">{seminar.title}</h3>
                <p className="text-gray-600">{seminar.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Selection Criteria</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The candidates for the Fellowship are individuals between the ages of 25-35 who have demonstrable interest in volunteerism and civic & public service. The fellows are early stage professionals working in the civic & public sectors in Uganda who are intellectually curious and are interested in public affairs. The fellowship is also open to individuals with a demonstrable interest in public affairs.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">After Applying</h3>
              <p className="text-lg text-gray-700 mb-6">
                The assessment of potential Fellows is carried out at two levels:
              </p>
              <ol className="space-y-6">
                <li className="text-lg text-gray-700">
                  Each individual application is assessed against a selected set of indicators. The applicant is required to be honest in their application in order to give members of the Selection Committee a fair understanding of who they are.
                </li>
                <li className="text-lg text-gray-700">
                  The second stage of this assessment is through a conversation with a member of the Institute faculty. At this stage, shortlisted candidates have an opportunity to discuss in detail their career plans and experience in the public sector. The assessment provides additional information that may have not been availed during the application stage. At this stage, the candidate discusses with a faculty member their expectations from the Fellowship which will be assessed at the end of the programme.
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Partners</h2>
            <p className="text-lg text-gray-700">
              An initiative of the LéO Africa Institute and Konrad Adenauer Stiftung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="h-24 flex items-center justify-center">
                <img src={LeoLogo} alt="LéO Africa Institute" className="max-h-full" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="h-24 flex items-center justify-center">
                <img src={KasLogo} alt="Konrad Adenauer Stiftung" className="max-h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </HudumaLayout>
  );
};

export default HudumaHome;