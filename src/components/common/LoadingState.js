import React from 'react';
import { motion } from 'framer-motion';

const LoadingCard = () => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    {/* Image Placeholder */}
    <motion.div
      animate={{
        backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="w-full h-48"
    />

    {/* Content Placeholders */}
    <div className="p-6 space-y-4">
      {/* Category Placeholder */}
      <motion.div
        animate={{
          backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        }}
        className="h-6 w-24 rounded-full"
      />

      {/* Title Placeholder */}
      <motion.div
        animate={{
          backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4,
        }}
        className="h-8 w-3/4 rounded"
      />

      {/* Excerpt Placeholder */}
      <div className="space-y-2">
        <motion.div
          animate={{
            backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.6,
          }}
          className="h-4 w-full rounded"
        />
        <motion.div
          animate={{
            backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8,
          }}
          className="h-4 w-2/3 rounded"
        />
      </div>

      {/* Meta Placeholder */}
      <div className="pt-4 flex justify-between items-center">
        <motion.div
          animate={{
            backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="h-10 w-32 rounded-full"
        />
        <motion.div
          animate={{
            backgroundColor: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.2,
          }}
          className="h-6 w-24 rounded-full"
        />
      </div>
    </div>
  </div>
);

const LoadingState = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, index) => (
      <LoadingCard key={index} />
    ))}
  </div>
);

export default LoadingState; 