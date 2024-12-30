import React from 'react';

export const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To inspire and nurture a new generation of transformative leaders in Africa through leadership development, knowledge sharing, and fostering meaningful connections.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Developing ethical leadership</li>
              <li>Promoting innovation and creativity</li>
              <li>Building sustainable networks</li>
              <li>Driving positive change</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              To be the premier institute for developing transformative leaders who drive positive change across Africa.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-[#2bbecb] pl-4">
                <h3 className="text-xl font-semibold text-gray-900">Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Integrity</li>
                  <li>Innovation</li>
                  <li>Excellence</li>
                  <li>Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 