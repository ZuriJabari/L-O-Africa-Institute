// generate-profiles.js
const fs = require('fs');
const path = require('path');

const checkImageExists = (imagePath) => {
  const fullPath = path.join(__dirname, 'src/assets/images', imagePath);
  return fs.existsSync(fullPath) ? imagePath : 'default-profile.png';
};

const teamMembers = [
  // Board Members
  {
    name: "Magnus Mchunguzi",
    subtitle: "Co-Founder & Board Chairperson, LéO Africa Institute",
    imagePath: "Magnus.png",
    bio: [
      "Magnus Mchunguzi serves as the Board Chairperson of the LéO Africa Institute.",
      "With extensive experience in leadership and strategic development, Magnus has been instrumental in shaping the Institute's vision and direction.",
      "His commitment to fostering transformative leadership across Africa has been a driving force behind the Institute's success."
    ]
  },
  {
    name: "William Babigumira",
    subtitle: "Chief Executive Officer, Pentascope Strategy",
    imagePath: "William.jpg",
    bio: [
      "William Babigumira brings valuable strategic insight to the LéO Africa Institute as a board member.",
      "As CEO of Pentascope Strategy, he has extensive experience in business development and strategic planning.",
      "His expertise helps guide the Institute's strategic initiatives and organizational development."
    ]
  },
  {
    name: "Awel Uwihanganye",
    subtitle: "Founder and Senior Director",
    imagePath: "Awel1.png",
    bio: [
      "Awel Uwihanganye is the Co-founder and Program Lead at the LéO Africa Institute.",
      "An accomplished management & leadership coach with expert skills in executive management, communications, and public relations.",
      "Currently serves as the Chief Advancement Officer for Makerere University.",
      "Champion and Founder of various organizations, passionate about art, film production, and storytelling.",
      "Alumnus of Concordia University-Montreal Canada and fellow of the African Leadership Initiative—East Africa."
    ],
    social: {
      twitter: "https://twitter.com/Uwihanganye_A",
      linkedin: "https://www.linkedin.com/in/awel-uwihanganye-58a96b149/"
    }
  },
  {
    name: "Rosie Lorie",
    subtitle: "Leadership Coach",
    imagePath: "Rosie-Lorie.png",
    bio: [
      "Rosie Lorie is an experienced leadership coach and board member at LéO Africa Institute.",
      "She specializes in developing leadership capabilities and organizational effectiveness.",
      "Her expertise in coaching and mentoring helps shape the Institute's leadership development programs."
    ]
  },
  {
    name: "Kevin Langley",
    subtitle: "Head of Marketing, Visa CEMEA",
    imagePath: "Kevin_Langley.png",
    bio: [
      "Kevin Langley brings extensive marketing and strategic communications experience to the board.",
      "As Head of Marketing at Visa CEMEA, he provides valuable insights into brand building and market development.",
      "His global perspective helps strengthen the Institute's outreach and impact."
    ]
  },
  // Secretariat
  {
    name: "Zubeda Abdallah",
    subtitle: "Finance Manager",
    imagePath: "default-profile.png", // Using default image
    bio: [
      "Zubeda Abdallah manages the financial operations of the LéO Africa Institute.",
      "She brings expertise in financial management and organizational sustainability.",
      "Her role is crucial in ensuring the Institute's financial health and accountability."
    ]
  },
  {
    name: "Nanda Kato",
    subtitle: "Communication & Outreach Officer",
    imagePath: "default-profile.png",
    bio: [
      "Nanda Kato leads communications and outreach initiatives at the Institute.",
      "She develops and implements strategic communication plans to enhance the Institute's visibility.",
      "Her work ensures effective engagement with stakeholders and program participants."
    ]
  },
  {
    name: "Nelson Asimwe",
    subtitle: "Fellowships Coordinator & Programs Manager",
    imagePath: "default-profile.png",
    bio: [
      "Nelson Asimwe coordinates the Institute's fellowship programs.",
      "He manages program implementation and ensures high-quality delivery of leadership development initiatives.",
      "His role is vital in nurturing emerging leaders across Africa."
    ]
  },
  {
    name: "Nnanda Kizito Sseruwagi",
    subtitle: "Media & Communications Officer",
    imagePath: "default-profile.png",
    bio: [
      "Nnanda Kizito manages media relations and digital communications.",
      "He develops multimedia content and maintains the Institute's online presence.",
      "His work amplifies the Institute's message and impact across various platforms."
    ]
  }
];

const profileTemplate = (member) => `
import React from "react";
import TeamMemberTemplate from "../../../components/about/profile/TeamMemberTemplate";
import ProfileImage from "../../../assets/images/${member.imagePath}";

const ${member.name.replace(/\s+/g, '')}Profile = () => {
  const profileData = {
    name: "${member.name}",
    subtitle: "${member.subtitle}",
    image: ProfileImage,
    bio: ${JSON.stringify(member.bio, null, 2)},
    social: ${JSON.stringify(member.social || {}, null, 2)}
  };

  return <TeamMemberTemplate data={profileData} />;
};

export default ${member.name.replace(/\s+/g, '')}Profile;
`;

// Create directory if it doesn't exist
const dir = './src/pages/about/team';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

// Generate files
teamMembers.forEach(member => {
  const fileName = `${member.name.toLowerCase().replace(/\s+/g, '-')}.js`;
  const filePath = path.join(dir, fileName);
  fs.writeFileSync(filePath, profileTemplate(member));
  console.log(`Created profile for ${member.name}`);
});