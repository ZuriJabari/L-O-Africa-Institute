import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import AsiimwePhoto from "../../../assets/images/Asiimwe-Nelson-Mushabe.png";

const NelsonAsimweProfile = () => {
  const profileData = {
    name: "Nelson Asiimwe Mushabe",
    subtitle: "Fellowships & Program Manager",
    image: AsiimwePhoto,
    bio: [
      "Nelson Asiimwe Mushabe coordinates the Institute's fellowship programs.",
      "His expertise in program management helps drive the Institute's mission of developing the next generation of Africa's leaders."
    ],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default NelsonAsimweProfile;
