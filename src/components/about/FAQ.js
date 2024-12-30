import React, { useState } from 'react';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is LéO Africa Institute?",
      answer: "The LéO Africa Institute is an independent, non-profit, and non-partisan organization. It was founded in 2012 by two Aspen Global Leadership Network and Africa Leadership Initiative fellows, Awel Uwihanganye and Magnus Mchunguzi."
    },
    {
      question: "What is the Young and Emerging Leaders Project (YELP)?",
      answer: "YELP is an initiative of the LéO Africa Institute aimed at training and orienting young and emerging leaders in Eastern Africa. The project seeks to empower leaders to lead fulfilling and high-impact lives while emphasizing the importance of crystallizing identity and the dignity of the African. Since 2017, the YELP fellowship has inducted 86 emerging leaders from eight African countries."
    },
    {
      question: "Which countries are represented by YELP fellows?",
      answer: "YELP fellows represent eight African countries, including Uganda, Kenya, Tanzania, Rwanda, D.R. Congo, Burundi, Zambia, and Somalia. They currently constitute an emerging group of leaders in both public and private sectors in their respective countries."
    },
    {
      question: "What is the Huduma Fellowship?",
      answer: "The Huduma Fellowship is a new initiative by the LéO Africa Institute designed to train a new generation of public sector champions in Uganda. Launched in 2021, the fellowship has so far inducted 46 young and emerging leaders working in the public sector. Over a year, fellows undergo intensive thought leadership and mentorship programs, including seminars, workshops, and immersion experiences."
    },
    {
      question: "How does the Huduma Fellowship contribute to the development of public sector leaders in Uganda?",
      answer: "The Huduma Fellowship exposes participants to insights into the evolving role of government in service delivery and addresses the changing demands on the public sector in Uganda. Fellows gain essential knowledge and responsibility required to meet these demands through various activities, including seminars, workshops, and immersion experiences."
    },
    {
      question: "What is the connection between LéO Africa Institute fellows and the Africa Leadership Initiative - East Africa (ALI-EA)?",
      answer: "LéO Africa Institute fellows, upon completing their fellowships, become members of the LéO Africa Institute network and affiliates of the Africa Leadership Initiative – East Africa (ALI-EA). ALI-EA is part of the Aspen Global Leadership Network, providing a broader platform for continued growth, collaboration, and impact."
    },
    {
      question: "How can LéO Africa Institute fellows engage with the ALI-EA network?",
      answer: "Fellows can actively engage with the ALI-EA network through networking events, conferences, and collaborative initiatives. The network offers a platform for ongoing learning, mentorship, and collaboration with other Aspen Global Leadership Network fellows across the region."
    },
    {
      question: "Can former YELP and Huduma fellows participate in future LéO Africa Institute programs?",
      answer: "Yes, former YELP and Huduma fellows are encouraged to stay engaged with the institute and may have opportunities to participate in future programs, mentorship initiatives, and contribute to the development of emerging leaders within the LéO Africa Institute network."
    },
    {
      question: "How can individuals or organizations support the LéO Africa Institute's mission?",
      answer: "Individuals and organizations can support the institute’s mission by participating in our programs, offering resources, and collaborating on initiatives that align with the institute’s goals. Additionally, financial contributions and partnerships play a crucial role in sustaining and expanding the impact of the LéO Africa Institute’s leadership development programs."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                className="w-full px-8 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className="text-[#2bbecb] text-xl">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              <div className={`px-8 py-6 bg-gray-50 transition-all duration-200 ${activeIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 