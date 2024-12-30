
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import ProfileImage from "../../../assets/images/default-profile.png";

const ZubedaAbdallahProfile = () => {
  const profileData = {
    name: "Zubeda Abdallah",
    subtitle: "Finance Manager",
    image: ProfileImage,
    bio: [
  "Zubeda Abdallah manages the financial operations of the LéO Africa Institute.",
  "She brings expertise in financial management and organizational sustainability.",
  "Her role is crucial in ensuring the Institute's financial health and accountability."
],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default ZubedaAbdallahProfile;
