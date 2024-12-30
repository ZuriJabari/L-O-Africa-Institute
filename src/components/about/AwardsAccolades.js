import React from 'react';

export const AwardsAccolades = () => {
  const awards = [
    {
      year: "2023",
      title: "Excellence in Leadership Development",
      organization: "African Leadership Forum",
      description: "Recognition for outstanding contribution to leadership development in Africa"
    },
    {
      year: "2022",
      title: "Innovation in Youth Empowerment",
      organization: "Global Youth Initiative",
      description: "Award for innovative approaches to youth empowerment and engagement"
    },
    {
      year: "2021",
      title: "Best Social Impact Organization",
      organization: "Social Impact Awards",
      description: "Recognition for creating positive social change through leadership programs"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards & Accolades</h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div key={index} className="border-l-4 border-[#2bbecb] pl-6">
              <div className="flex items-center mb-2">
                <span className="text-[#2bbecb] font-bold mr-4">{award.year}</span>
                <h3 className="text-xl font-semibold text-gray-900">{award.title}</h3>
              </div>
              <p className="text-[#f6911e] mb-2">{award.organization}</p>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 