import React from 'react';
import { motion } from 'framer-motion';
import algLogo from '../assets/images/alg-color.svg';

const ALGPromoBlock = () => {
  return (
    <section className="relative py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-r from-[#0B9A9E]/5 via-white to-[#F6911E]/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center rounded-3xl bg-white/80 border border-white/70 px-6 py-8 md:px-10 md:py-10 transition-colors duration-300"
        >
          {/* Left: Large Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src={algLogo}
              alt="Annual Leaders Gathering"
              className="w-60 sm:w-72 md:w-80 lg:w-[22rem]"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Text and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-left md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-3 tracking-tight leading-tight">
              ALG 2025
            </h2>
            <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-[#0B9A9E] mb-4">
              Annual Leaders Gathering
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 max-w-xl">
              <p className="text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-light">
                The Annual Leaders Gathering is the LéO Africa Institute&apos;s signature convening – an intimate space where our community reflects, connects, and imagines new possibilities for leadership on the continent.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                Registration for the in-person gathering is now closed. We look forward to welcoming this year&apos;s leaders in Kampala and invite you to experience ALG 2025 virtually.
              </p>
            </div>

            <a
              href="https://alg.nsl.ug/join"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0B9A9E] text-white text-sm sm:text-base font-medium hover:bg-[#F6911E] transition-colors duration-300"
            >
              <span>Experience ALG 2025 Online</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ALGPromoBlock;
