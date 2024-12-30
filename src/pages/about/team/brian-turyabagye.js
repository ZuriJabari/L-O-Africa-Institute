
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import ProfileImage from "../../../assets/images/team/default-profile.png"; // Default image if specific one not available

const BrianTuryabagyeProfile = () => {
  const profileData = {
    name: "Brian Turyabagye",
    subtitle: "Program Manager",
    image: ProfileImage,
    bio: [
  "Brian Turyabagye serves as the Program Manager at LéO Africa Institute.",
  "He oversees the implementation of various leadership development programs.",
  "His expertise in program management ensures effective delivery of the Institute's initiatives."
]
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default BrianTuryabagyeProfile;
