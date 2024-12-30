
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import NandaPhoto from "../../../assets/images/Nanda.jpg";

const NandaKatoProfile = () => {
  const profileData = {
    name: "Nanda Kato",
    subtitle: "Communication & Outreach Officer",
    image: NandaPhoto,
    bio: [
  "Nanda Kato leads communications and outreach initiatives at the Institute.",
  "She develops and implements strategic communication plans to enhance the Institute's visibility.",
  "Her work ensures effective engagement with stakeholders and program participants."
],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default NandaKatoProfile;
