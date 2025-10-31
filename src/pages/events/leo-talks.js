import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import { StaticImage } from 'gatsby-plugin-image';
import { HeroTitle, SectionTitle, SubsectionTitle, BodyLarge, BodyText } from '../../components/Typography';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const LeoTalks = () => {
  return (
    <Layout>
      {/* Luxurious Hero (transparent-header friendly) */}
      <section className="relative h-screen min-h-[720px] flex items-center overflow-hidden -mt-[140px] pt-[140px]">
        {/* Background image + overlays */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <StaticImage
            src="../../assets/images/leo-talks.jpg"
            alt="The LéO Africa Talks"
            className="w-full h-full"
            imgClassName="object-cover"
            placeholder="blurred"
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff08_1px,_transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-px bg-white/50"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">Flagship Dialogue</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] tracking-tight mb-6"
            >
              The LéO Africa Talks
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mb-10"
            >
              A premier platform curating meaningful conversations and bold ideas from Africa’s next generation of leaders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#apply" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 font-medium hover:bg-white/90 transition">
                Apply to Speak <FiArrowRight />
              </a>
              <a href="#about" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition">
                Learn More <FiArrowRight />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & Fellowship CTA */}
      <section id="about" className="py-28 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight mb-6">
                Conversations that shape Africa’s tomorrow
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                LéO Africa Talks convenes exceptional voices to explore ideas, values and
                actions needed to build better societies. Speakers—our Griots—share lived
                experiences and visions that inspire responsible leadership.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl border border-gray-200">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Format</div>
                  <div className="text-gray-900">Keynotes, fireside conversations and curated salons</div>
                </div>
                <div className="p-6 rounded-2xl border border-gray-200">
                  <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Audience</div>
                  <div className="text-gray-900">Leaders, innovators and values-driven builders</div>
                </div>
              </div>
              <a href="#apply" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B9A9E] text-white font-medium hover:bg-[#0B9A9E]/90 transition">
                Apply to the Griots Fellowship <FiArrowRight />
              </a>
            </div>

            {/* Event snapshot removed for past event */}
          </div>
        </div>
      </section>

      {/* Conversations & Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-gray-300" />
                <span className="text-xs uppercase tracking-[0.3em] text-gray-600">About LéO Africa Talks</span>
                <div className="w-12 h-px bg-gray-300" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">Conversations Worth Having</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-10 rounded-3xl border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Within our community, the Talks distill ideas and lessons from practice. Each session is an invitation to think deeper, act responsibly, and build together.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Grounded in Africa’s storytelling heritage, our Griots connect identity to purpose and possibility—illuminating pathways to thriving communities.
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl border border-gray-200">
                <div className="text-5xl text-gray-200 mb-4">"</div>
                <p className="text-xl text-gray-800 italic mb-6">
                  Launching this platform helps fulfill our mission of establishing quality dialogues and inspiring action across the continent.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <StaticImage src="../../assets/images/Awel.jpg" alt="Awel Uwihanganye" className="w-full h-full" imgClassName="object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Awel Uwihanganye</div>
                    <div className="text-sm text-gray-600">Co-founder & Program Lead</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event details card removed for past event */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LeoTalks;