import React from 'react';
import { motion } from 'framer-motion';
import YelpLayout from '../../components/layout/YelpLayout';
import YelpLogo from '../../assets/images/YELP-Logo.svg';

const YelpAbout = () => {
  return (
    <YelpLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0B9A9E] via-[#0B9A9E]/90 to-[#0B9A9E]/80">
          {/* Background Pattern */}
          <div className="absolute inset-0 pattern-bg opacity-20" />
          
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-8 font-playfair drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About YELP
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A fellowship program developing the next generation of thought leaders in Africa
            </motion.p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-[#0B9A9E] mb-6 font-playfair">Overview</h2>
              <p className="text-gray-700 mb-8">
                The Young and Emerging Leaders Project (YELP) is a fellowship program of the LéO Africa Institute that inducts young thought leaders into a fellowship program of six months. The fellowship brings together young, dynamic and influential thought leaders from East Africa to train and orient them for leadership focused on shaping the next generation of leaders in East Africa.
              </p>

              <h2 className="text-3xl font-bold text-[#0B9A9E] mb-6 font-playfair">Our Approach</h2>
              <p className="text-gray-700 mb-8">
                The fellowship is structured around three core seminars that focus on three key areas: Values, Ethics & Philosophy of Leadership; Political Economy & Development; and Media, Art & Technology. Through these seminars, fellows engage in discussions about leadership, politics, economics, media and the arts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#0B9A9E] mb-4">Leadership Development</h3>
                  <p className="text-gray-700">Cultivating ethical, innovative, and effective leadership skills</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#0B9A9E] mb-4">Networking</h3>
                  <p className="text-gray-700">Building strong connections among emerging leaders across sectors</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#0B9A9E] mb-4">Mentorship</h3>
                  <p className="text-gray-700">Learning from experienced leaders and industry experts</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#0B9A9E] mb-6 font-playfair">Who Should Apply</h2>
              <p className="text-gray-700 mb-4">
                We're looking for young leaders who are:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-8">
                <li>Between 25-35 years of age</li>
                <li>Demonstrated leadership in their respective fields</li>
                <li>Committed to Africa's development</li>
                <li>Based in East Africa</li>
                <li>Available to attend all three seminars</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#0B9A9E] mb-6 font-playfair">Fellowship Benefits</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-8">
                <li>Leadership development through structured seminars</li>
                <li>Networking opportunities with regional leaders</li>
                <li>Access to mentorship programs</li>
                <li>Participation in regional conferences</li>
                <li>Membership in the YELP alumni network</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#0B9A9E] via-[#0B9A9E]/90 to-[#0B9A9E]/80">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6 font-playfair"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Join YELP?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Applications for the next cohort are now open. Join a community of emerging leaders shaping Africa's future.
            </motion.p>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form className="space-y-4">
                <input 
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E]"
                />
                <input 
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B9A9E]"
                />
                <button 
                  type="submit"
                  className="w-full p-4 bg-white text-[#0B9A9E] rounded-xl font-bold hover:bg-white/90 transition-all duration-300"
                >
                  Join Now
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </YelpLayout>
  );
};

export default YelpAbout; 