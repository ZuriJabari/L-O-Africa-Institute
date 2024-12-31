import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/Herosection";
import Objectives from "../components/Objectives";
import MultimediaHome from "../components/Multimedia/MultimediaHome";
import UpcomingEvents from "../components/UpcomingEvents";
import PartnerWithUs from "../components/PartnerWithUs";
import Initiatives from "../components/Initiatives";
import OurPeople from "../components/OurPeople";
import SubscriptionForm from "../components/SubscriptionForm";
import Pillars from "../components/Pillars";
import FoundersBlog from "../components/FoundersBlog";

const HomePage = ({ data = { allPrismicBlogPosts: { nodes: [] } } }) => {
  return (
    <Layout>
      <HeroSection />
      <div className="prefooter-gray"></div>
      <MultimediaHome data={data} />
      <FoundersBlog/>
      <Initiatives />
      <div className="prefooter-gray"></div>

      <UpcomingEvents />
      <Pillars/>
      <OurPeople />
      <PartnerWithUs />
      <SubscriptionForm />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allPrismicBlogPosts(sort: { fields: data___publish_date, order: DESC }) {
      nodes {
        id
        uid
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