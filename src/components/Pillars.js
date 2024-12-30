import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgGrey from "../assets/images/bg-grey.svg";

const darkenColor = (color, amount) => {
  const num = parseInt(color.replace("#", ""), 16);
  const r = (num >> 16) - amount;
  const g = ((num >> 8) & 0x00ff) - amount;
  const b = (num & 0x0000ff) - amount;
  return `#${(0x1000000 + (Math.max(0, r) << 16) + (Math.max(0, g) << 8) + Math.max(0, b))
    .toString(16)
    .slice(1)}`;
};

const colorPalette = {
  primary: "#F89131",
  secondary: "#01BDCC",
  tertiary: "#910810",
  quaternary: "#545456",
  darkBackground: "#1a1a1a",
  lightText: "#ffffff",
};

const pillars = [
  {
    title: "Population, Health & Economy",
    subtitle: "Leveraging Demographics for a Sustainable Future",
    description:
      "Africa’s demographic landscape is rapidly changing, presenting both opportunities and challenges. The continent’s youthful population can be a powerful driver of economic growth if effectively harnessed.",
    bgColor: colorPalette.primary,
    rationale: [
      { title: "Demographic Dividend", text: "A young and dynamic population can fuel economic development through innovation and entrepreneurship." },
      { title: "Health and Well-being", text: "Addressing health challenges is crucial for maintaining a productive workforce and ensuring overall societal well-being." },
      { title: "Economic Competitiveness", text: "Strategic planning and investment in education, healthcare, and infrastructure can reposition Africa as a formidable global competitor." },
    ],
  },
  {
    title: "Identity, Politics & Society",
    subtitle: "Reclaiming African Narratives and Fostering Social Cohesion",
    description:
      "The historical distortion of African identities has had profound impacts on the continent’s social and political fabric.",
    bgColor: colorPalette.secondary,
    rationale: [
      { title: "Cultural Reclamation", text: "By reclaiming and celebrating African identities, we can foster a sense of pride and unity among diverse communities." },
      { title: "Political Engagement", text: "Bridging the gap between leaders and citizens is essential for democratic governance and effective public service delivery." },
      { title: "Conflict Resolution", text: "Addressing the root causes of conflicts can lead to lasting peace and social cohesion." },
    ],
  },
  {
    title: "Climate Change",
    subtitle: "Empowering Young Leaders in Climate Action",
    description:
      "Climate change poses significant risks to Africa, manifesting in natural disasters, deforestation, and energy crises.",
    bgColor: colorPalette.tertiary,
    rationale: [
      { title: "Environmental Sustainability", text: "Addressing climate change is crucial for safeguarding Africa’s natural resources and ensuring sustainable development." },
      { title: "Youth Engagement", text: "Young people are at the forefront of climate action and must be supported in their efforts to drive change." },
      { title: "Global Responsibility", text: "Africa must take a proactive role in the global climate change discourse to ensure its interests are represented." },
    ],
  },
  {
    title: "Africa’s Digital Future",
    subtitle: "Harnessing AI, Blockchain, Fintech, and Evidence-Informed Policy for Development",
    description:
      "Technological advancements are critical in addressing Africa’s unique contextual and infrastructural challenges.",
    bgColor: colorPalette.quaternary,
    rationale: [
      { title: "AI and Blockchain", text: "Promote transparent governance, reduce corruption, and enhance service delivery through AI-driven monitoring systems and blockchain-based public records." },
      { title: "Fintech", text: "Improve financial inclusion and economic participation through digital financial services and mobile banking." },
      { title: "Evidence-Informed Policy", text: "Use data analytics to inform policy decisions, ensuring they are based on real-time data and trends." },
      { title: "Innovative Solutions", text: "Develop solutions tailored to Africa’s unique needs, leveraging technology to address issues such as healthcare, education, and infrastructure." },
    ],
  },
];

const Pillars = () => {
  const [activePillar, setActivePillar] = useState(0);

  // Automatically rotate the active pillar every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length); // Rotate to the next pillar
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundColor: colorPalette.darkBackground,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-[45px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgGrey})`,
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-[45px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgGrey})`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Title */}
        <h2 className="font-playfair text-5xl font-extrabold text-center mb-16" style={{ color: colorPalette.lightText }}>
          <span className="font-light">The Next Africa:</span>{" "}
          <span className="font-bold">Pillars of African Renaissance</span>
        </h2>

        <div className="flex flex-col lg:flex-row">
          {/* Left: Navigation */}
          <div className="lg:w-1/3 space-y-6">
            {pillars.map((pillar, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePillar(index)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                  activePillar === index
                    ? "shadow-lg scale-105 text-white"
                    : "bg-white bg-opacity-10 text-white hover:bg-opacity-20"
                }`}
                style={{
                  backgroundColor:
                    activePillar === index ? pillar.bgColor : "transparent",
                }}
              >
                <h3 className="font-playfair text-xl font-semibold" style={{ color: colorPalette.lightText }}>
                  {pillar.title}
                </h3>
                <p className="font-inter text-sm" style={{ color: colorPalette.lightText }}>
                  {pillar.subtitle}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Right: Content */}
          <div
            className="lg:w-2/3 rounded-lg shadow-lg p-8 ml-0 lg:ml-8 mt-8 lg:mt-0"
            style={{
              backgroundColor: pillars[activePillar].bgColor,
            }}
          >
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-playfair text-3xl font-bold mb-4" style={{ color: colorPalette.lightText }}>
                {pillars[activePillar].title}
              </h3>
              <p className="font-inter text-lg italic mb-4" style={{ color: colorPalette.lightText }}>
                {pillars[activePillar].subtitle}
              </p>
              <p className="font-inter text-base mb-6" style={{ color: colorPalette.lightText }}>
                {pillars[activePillar].description}
              </p>

              {/* Rationale Section */}
              <h4 className="font-playfair text-2xl font-semibold mb-4" style={{ color: colorPalette.lightText }}>
                Rationale
              </h4>
              <div className="space-y-4">
                {pillars[activePillar].rationale.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-20 p-4 rounded-lg hover:shadow-md hover:bg-opacity-30 transition-all"
                  >
                    <h5 className="font-playfair text-lg font-bold mb-2" style={{ color: colorPalette.lightText }}>
                      {item.title}
                    </h5>
                    <p className="font-inter text-sm" style={{ color: colorPalette.lightText }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
