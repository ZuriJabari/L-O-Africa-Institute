import React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

const FoundersBlog = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B9A9E] to-[#F6911E] rounded-xl transform rotate-3"></div>
                <StaticImage
                  src="../assets/images/team/Awel.jpg"
                  alt="Awel Uwihanganye"
                  className="relative z-10 rounded-xl shadow-2xl transform -rotate-2"
                  imgClassName="rounded-xl"
                  placeholder="blurred"
                  width={400}
                  height={500}
                  objectFit="cover"
                  quality={95}
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Founders' Blog
              </h2>
              <div className="space-y-6">
                <p className="font-inter text-xl opacity-90">
                  Coming soon! Join our founder in exploring critical insights about leadership, innovation, and Africa's transformative journey.
                </p>
                <p className="font-inter text-lg opacity-80">
                  Discover thought-provoking perspectives on:
                </p>
                <ul className="space-y-3 text-lg opacity-90">
                  <li className="font-inter flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Ethical Leadership in Practice
                  </li>
                  <li className="font-inter flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Innovation & Social Impact
                  </li>
                  <li className="font-inter flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Africa's Development Journey
                  </li>
                </ul>
                <div className="mt-8">
                  <p className="font-inter text-xl font-semibold">
                    Stay tuned for the launch!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersBlog;
