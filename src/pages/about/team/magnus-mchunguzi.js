
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import ProfileImage from "../../../assets/images/Magnus.png";

const MagnusMchunguziProfile = () => {
  const profileData = {
    name: "Magnus Mchunguzi",
    subtitle: "Co-Founder & Board Chairperson, LéO Africa Institute",
    image: ProfileImage,
    bio: [
  "Magnus Mchunguzi serves as the Board Chairperson of the LéO Africa Institute.",
  "With extensive experience in leadership and strategic development, Magnus has been instrumental in shaping the Institute's vision and direction.",
  "His commitment to fostering transformative leadership across Africa has been a driving force behind the Institute's success."
],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default MagnusMchunguziProfile;
