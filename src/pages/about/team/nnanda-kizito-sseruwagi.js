
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import NandaPhoto from "../../../assets/images/Nanda.jpg";

const NnandaKizitoSseruwagiProfile = () => {
  const profileData = {
    name: "Nnanda Kizito Sseruwagi",
    subtitle: "Media & Communications Officer",
    image: NandaPhoto,
    bio: [
  "Nnanda Kizito manages media relations and digital communications.",
  "He develops multimedia content and maintains the Institute's online presence.",
  "His work amplifies the Institute's message and impact across various platforms."
],
    social: {}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default NnandaKizitoSseruwagiProfile;
