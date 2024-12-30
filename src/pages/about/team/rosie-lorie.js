
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import ProfileImage from "../../../assets/images/Rosie-Lorie.png";

const RosieLorieProfile = () => {
  const profileData = {
    name: "Rosie Lorie",
    subtitle: "Leadership Coach",
    image: ProfileImage,
    bio: [
  "Rosie Lorie is an experienced leadership coach and board member at LéO Africa Institute.",
  "She specializes in developing leadership capabilities and organizational effectiveness.",
  "Her expertise in coaching and mentoring helps shape the Institute's leadership development programs."
],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default RosieLorieProfile;
