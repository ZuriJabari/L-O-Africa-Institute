
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import ProfileImage from "../../../assets/images/Awel1.png";

const AwelUwihanganyeProfile = () => {
  const profileData = {
    name: "Awel Uwihanganye",
    subtitle: "Founder and Senior Director",
    image: ProfileImage,
    bio: [
  "Awel Uwihanganye is the Co-founder and Program Lead at the LéO Africa Institute.",
  "An accomplished management & leadership coach with expert skills in executive management, communications, and public relations.",
  "Currently serves as the Chief Advancement Officer for Makerere University.",
  "Champion and Founder of various organizations, passionate about art, film production, and storytelling.",
  "Alumnus of Concordia University-Montreal Canada and fellow of the African Leadership Initiative—East Africa."
],
    social: {
  "twitter": "https://twitter.com/Uwihanganye_A",
  "linkedin": "https://www.linkedin.com/in/awel-uwihanganye-58a96b149/"
}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default AwelUwihanganyeProfile;
