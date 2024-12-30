
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import ProfileImage from "../../../assets/images/Kevin_Langley.png";

const KevinLangleyProfile = () => {
  const profileData = {
    name: "Kevin Langley",
    subtitle: "Head of Marketing, Visa CEMEA",
    image: ProfileImage,
    bio: [
  "Kevin Langley brings extensive marketing and strategic communications experience to the board.",
  "As Head of Marketing at Visa CEMEA, he provides valuable insights into brand building and market development.",
  "His global perspective helps strengthen the Institute's outreach and impact."
],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default KevinLangleyProfile;
