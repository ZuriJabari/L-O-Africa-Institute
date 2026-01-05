import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeroSection from "../components/Herosection";
import Partners from "../components/Partners";
import PartnershipBlock from '../components/PartnershipBlock';
import ALGPromoBlock from '../components/ALGPromoBlock';
import { Link } from "gatsby";


const FeaturedArticlesSection = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const [first, second, third, fourth] = posts;

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="inline-block text-[10px] uppercase tracking-[0.5em] text-[#0B9A9E] font-medium">
                Latest Updates
              </span>
            </div>
            <h2 className="text-[2.25rem] md:text-[3.5rem] lg:text-[4.25rem] font-light text-gray-900 leading-[1.05] tracking-[-0.02em] mb-4">
              Stories from the
              <br />
              <span className="font-normal text-[#0B9A9E]">LéO Africa Institute</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#F6911E] mb-3"></div>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              A curated selection of recent insights, announcements, and reflections from our programmes.
            </p>
          </div>
          <Link
            to="/news"
            className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-[#0B9A9E] text-white hover:bg-[#F6911E] transition-colors duration-300"
          >
            Browse all articles
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {first && (
            <Link
              to={`/blog/${first.uid}`}
              className="lg:col-span-2 group block"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/90 border border-gray-200 hover:border-[#0B9A9E] transition-colors duration-300">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  {first.data?.featured_image?.url ? (
                    <>
                      <img
                        src={first.data.featured_image.url}
                        alt={first.data?.title || 'Featured article'}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-3">
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#F6911E] text-white uppercase">
                      Latest Story
                    </span>
                    {first.data?.categories?.length > 0 && (
                      <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30">
                        {first.data.categories[0].category}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-sm text-gray-500 mb-2">
                    {first.data?.publish_date || 'Recent'}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-4 group-hover:text-[#0B9A9E] transition-colors duration-300">
                    {first.data?.title || 'Untitled article'}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-5 max-w-3xl">
                    {first.data?.excerpt || 'Explore the latest reflections, ideas, and conversations shaping leadership on the continent.'}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{first.data?.author || 'LéO Africa Institute'}</span>
                    <span className="inline-flex items-center text-[#0B9A9E] group-hover:text-[#F6911E] font-medium">
                      Read the story
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {(second || third || fourth) && (
            <div className="rounded-3xl bg-white/90 border border-gray-200 flex flex-col divide-y divide-gray-200 overflow-hidden">
              {second && (
                <Link
                  to={`/blog/${second.uid}`}
                  className="group block"
                >
                  <div className="p-6 md:p-7">
                    <p className="text-xs text-gray-500 mb-2">
                      {second.data?.publish_date || 'Recent'}
                    </p>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0B9A9E] transition-colors duration-300 line-clamp-2">
                      {second.data?.title || 'Untitled article'}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {second.data?.excerpt || 'Discover more perspectives from the LéO Africa Institute community.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{second.data?.author || 'LéO Africa Institute'}</span>
                      <span className="inline-flex items-center text-[#0B9A9E] group-hover:text-[#F6911E] font-medium">
                        Read more
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {third && (
                <Link
                  to={`/blog/${third.uid}`}
                  className="group block"
                >
                  <div className="p-6 md:p-7">
                    <p className="text-xs text-gray-500 mb-2">
                      {third.data?.publish_date || 'Recent'}
                    </p>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0B9A9E] transition-colors duration-300 line-clamp-2">
                      {third.data?.title || 'Untitled article'}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {third.data?.excerpt || 'Further reflections and updates from across our programmes.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{third.data?.author || 'LéO Africa Institute'}</span>
                      <span className="inline-flex items-center text-[#0B9A9E] group-hover:text-[#F6911E] font-medium">
                        Read more
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {fourth && (
                <Link
                  to={`/blog/${fourth.uid}`}
                  className="group block"
                >
                  <div className="p-6 md:p-7">
                    <p className="text-xs text-gray-500 mb-2">
                      {fourth.data?.publish_date || 'Recent'}
                    </p>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0B9A9E] transition-colors duration-300 line-clamp-2">
                      {fourth.data?.title || 'Untitled article'}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {fourth.data?.excerpt || 'Further news and highlights from our work across the continent.'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{fourth.data?.author || 'LéO Africa Institute'}</span>
                      <span className="inline-flex items-center text-[#0B9A9E] group-hover:text-[#F6911E] font-medium">
                        Read more
                      </span>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


const HomePage = ({ data = { allPrismicBlogPosts: { nodes: [] } } }) => {
  const posts = data?.allPrismicBlogPosts?.nodes || [];
  const toTimestamp = (value) => {
    if (!value) return 0;
    const t = Date.parse(value);
    return Number.isNaN(t) ? 0 : t;
  };
  const getPostDate = (post) => {
    if (!post) return 0;
    const { data, first_publication_date, last_publication_date } = post;
    // Prefer last_publication_date (most recent), then explicit publish_date, then first_publication_date.
    return (
      toTimestamp(last_publication_date) ||
      toTimestamp(data?.publish_date) ||
      toTimestamp(first_publication_date)
    );
  };
  const sortedPosts = [...posts].sort((a, b) => getPostDate(b) - getPostDate(a));
  const latestFour = sortedPosts.slice(0, 4);

  return (
    <Layout>
      <SEO
        title="Home"
        description="LéO Africa Institute nurtures young leaders across Africa through fellowship, thought leadership, and impact programmes."
      />
      <HeroSection />
      
      <div className="prefooter-gray"></div>

      <ALGPromoBlock />

      <FeaturedArticlesSection posts={latestFour} />
      
      <PartnershipBlock />
      
      {/* <OurPeople 
        boardTitle="The Governing Board of Directors"
        boardDescription="Our governance board is constituted with individuals whose integrity is beyond reproach and with whom we share a commitment to create a better society and future with young people at the center of shaping leadership action."
        teamTitle="The Team Leading on Delivering on the Tasks"
        teamDescription="Meet our dynamic team committed to shaping leadership that actively contributes to building the Africa we want."
        founders={founders}
        team={team}
      /> */}
        {/* <Pillars/> */}
      
      <Partners />
      {/* <SubscriptionForm /> */}
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allPrismicBlogPosts(
      sort: [
        {last_publication_date: DESC},
        {data: {publish_date: DESC}},
        {first_publication_date: DESC}
      ]
    ) {
      nodes {
        id
        uid
        first_publication_date
        last_publication_date
        data {
          title
          publish_date
          author
          featured_image {
            url
          }
          categories {
            category
          }
        }
      }
    }
  }
`;

export default HomePage;