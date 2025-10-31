import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import InnerHero from "../components/InnerHero";
import algLogo from "../assets/images/alg-color.svg"; // Replace with actual logo image
import yelpLogo from "../assets/images/YELP-Logo.svg";
import reviewLogo from "../assets/images/LAR-logo.png";
import hudumaLogo from "../assets/images/huduma-logo.svg";

const Initiatives = () => {
  const initiatives = [
    {
      id: 1,
      name: "Annual Leaders Gathering (ALG)",
      description:
        "An exclusive convening of influential leaders shaping Africa's future through thought-provoking discussions and innovative solutions.",
      logo: algLogo,
      link: "https://alg.leoafricainstitute.org/",
    },
    {
      id: 2,
      name: "Young Emerging Leaders Project (YELP)",
      description:
        "Empowering young leaders with skills, mentorship, and opportunities to create lasting impact in their communities.",
      logo: yelpLogo,
      link: "/yelp",
    },
    {
      id: 3,
      name: "LéO Africa Review",
      description:
        "A platform showcasing in-depth analyses, stories, and reflections on Africa’s transformation and development.",
      logo: reviewLogo,
      link: "https://leoafricareview.com/",
    },
    {
      id: 4,
      name: "Huduma Fellowship",
      description:
        "A fellowship program fostering ethical leadership and integrity among public sector professionals and change-makers.",
      logo: hudumaLogo,
      link: "/huduma",
    },
  ];

  return (
    <Layout>
      <InnerHero
        imageSrc="/images/initiatives-hero.jpg"
        imageAlt="Our Initiatives"
        eyebrow="Our Initiatives"
        title={<>Programs Driving{' '}<span className="block mt-2">Transformative Change</span></>}
        description="Discover the programs and projects that drive impactful change across Africa."
      />

      {/* Initiatives Section */}
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Our Initiatives
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Each initiative represents our commitment to fostering leadership,
          collaboration, and innovation across Africa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => (
            <div
              key={initiative.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 group"
            >
              <div className="p-6 flex flex-col items-center">
                <img
                  src={initiative.logo}
                  alt={initiative.name}
                  className="w-28 h-28 object-contain mb-4 group-hover:opacity-90"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {initiative.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {initiative.description}
                </p>
                {initiative.link.startsWith('/') ? (
                  <Link
                    to={initiative.link}
                    className="inline-block text-[#1e8e92] font-semibold hover:underline"
                  >
                    Visit Website →
                  </Link>
                ) : (
                  <a
                    href={initiative.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#1e8e92] font-semibold hover:underline"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Initiatives;
