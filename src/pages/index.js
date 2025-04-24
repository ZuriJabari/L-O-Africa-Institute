import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HeroSection from "../components/Herosection";
import Objectives from "../components/Objectives";
import MultimediaHome from "../components/Multimedia/MultimediaHome";
import UpcomingEvents from "../components/UpcomingEvents";
import PartnerWithUs from "../components/PartnerWithUs";
import Partners from "../components/Partners";
import Initiatives from "../components/Initiatives";
import OurPeople from "../components/OurPeople";
import SubscriptionForm from "../components/SubscriptionForm";
import Pillars from "../components/Pillars";
import FoundersBlog from "../components/FoundersBlog";
import TeamMemberCard from '../components/TeamMemberCard';
import { Link } from "gatsby";


// Team data
const founders = [
  {
    name: "Awel Uwihanganye",
    role: "Co-founder & Program Lead",
    image: "/images/team/awel.jpg",
    bio: "Awel is a seasoned leader with a passion for empowering young Africans."
  },
  {
    name: "Magnus Mchunguzi",
    role: "Co-founder & Chairman Board of Directors",
    image: "/images/team/magnus.jpg",
    bio: "Magnus is a visionary leader with a commitment to creating a better future for Africa."
  },
  {
    name: "John Doe",
    role: "Board Member",
    image: "/images/team/john.jpg",
    bio: "John is a respected leader with a wealth of experience in governance and leadership."
  }
]

const team = [
  {
    name: "Jane Doe",
    role: "Program Manager",
    image: "/images/team/jane.jpg",
    bio: "Jane is a dedicated professional with a passion for empowering young Africans."
  },
  {
    name: "Bob Smith",
    role: "Communications Officer",
    image: "/images/team/bob.jpg",
    bio: "Bob is a skilled communicator with a commitment to sharing the stories of Africa's young leaders."
  },
  {
    name: "Alice Johnson",
    role: "Program Coordinator",
    image: "/images/team/alice.jpg",
    bio: "Alice is a detail-oriented professional with a passion for supporting the growth of Africa's young leaders."
  },
  {
    name: "Mike Brown",
    role: "Finance Officer",
    image: "/images/team/mike.jpg",
    bio: "Mike is a seasoned finance professional with a commitment to ensuring the financial sustainability of our organization."
  }
]



const HomePage = ({ data = { allPrismicBlogPosts: { nodes: [] } } }) => {
  return (
    <Layout>
      <HeroSection />
      
      <div className="prefooter-gray"></div>
      
      <MultimediaHome data={data} />
      <UpcomingEvents />
      {/* <OurPeople 
        boardTitle="The Governing Board of Directors"
        boardDescription="Our governance board is constituted with individuals whose integrity is beyond reproach and with whom we share a commitment to create a better society and future with young people at the center of shaping leadership action."
        teamTitle="The Team Leading on Delivering on the Tasks"
        teamDescription="Meet our dynamic team committed to shaping leadership that actively contributes to building the Africa we want."
        founders={founders}
        team={team}
      /> */}
        {/* <Pillars/> */}
      <div className="prefooter-gray"></div>
      
      <Partners />
      <PartnerWithUs />
      {/* <SubscriptionForm /> */}
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