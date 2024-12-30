
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import ProfileImage from "../../../assets/images/William.jpg";

const WilliamBabigumiraProfile = () => {
  const profileData = {
    name: "William Babigumira",
    subtitle: "Chief Executive Officer, Pentascope Strategy",
    image: ProfileImage,
    bio: [
  "William Babigumira brings valuable strategic insight to the LéO Africa Institute as a board member.",
  "As CEO of Pentascope Strategy, he has extensive experience in business development and strategic planning.",
  "His expertise helps guide the Institute's strategic initiatives and organizational development."
],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default WilliamBabigumiraProfile;
