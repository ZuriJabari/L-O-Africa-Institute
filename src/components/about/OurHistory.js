import React from 'react';

export const OurHistory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Founded in 2012, LéO Africa Institute began as a vision to create a platform for emerging leaders across Africa. What started as small gatherings of thought leaders has grown into a continental movement for change.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began with the inaugural Young and Emerging Leaders Project (YELP), which brought together 20 young leaders from East Africa. Today, we've expanded to include multiple programs and initiatives that reach across the continent.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-[#2bbecb] pl-4">
              <h3 className="text-xl font-semibold text-gray-900">2012</h3>
              <p className="text-gray-600">Foundation of LéO Africa Institute</p>
            </div>
            <div className="border-l-4 border-[#2bbecb] pl-4">
              <h3 className="text-xl font-semibold text-gray-900">2015</h3>
              <p className="text-gray-600">Launch of the Annual Leaders Gathering</p>
            </div>
            <div className="border-l-4 border-[#2bbecb] pl-4">
              <h3 className="text-xl font-semibold text-gray-900">2018</h3>
              <p className="text-gray-600">Introduction of Huduma Fellowship</p>
            </div>
            <div className="border-l-4 border-[#2bbecb] pl-4">
              <h3 className="text-xl font-semibold text-gray-900">2020</h3>
              <p className="text-gray-600">Launch of LeO Africa Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 