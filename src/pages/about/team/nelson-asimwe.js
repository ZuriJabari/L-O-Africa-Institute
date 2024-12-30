
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import AsiimwePhoto from "../../../assets/images/Asiimwe-Nelson-Mushabe.png";

const NelsonAsimweProfile = () => {
  const profileData = {
    name: "Nelson Asimwe",
    subtitle: "Fellowships Coordinator & Programs Manager",
    image: AsiimwePhoto,
    bio: [
  "Nelson Asimwe coordinates the Institute's fellowship programs.",
  "He manages program implementation and ensures high-quality delivery of leadership development initiatives.",
  "His role is vital in nurturing emerging leaders across Africa."
],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default NelsonAsimweProfile;
