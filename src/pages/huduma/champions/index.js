import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import HudumaLayout from '../../../components/layout/HudumaLayout';

const ChampionCard = ({ champion }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden group"
  >
    <Link to={`/huduma/champions/${champion.slug}`}>
      <div className="relative aspect-[3/4]">
        <img 
          src={champion.image} 
          alt={champion.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-bold text-white mb-2">{champion.name}</h3>
            <p className="text-white/90 text-sm mb-4">{champion.role}</p>
            <div className="flex items-center space-x-3">
              {champion.social?.linkedin && (
                <a 
                  href={champion.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#0A66C2] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {champion.social?.twitter && (
                <a 
                  href={champion.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#1DA1F2] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaTwitter size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const YearSection = ({ year, champions }) => (
  <div className="mb-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-gray-900 mb-8"
    >
      Class of {year}
    </motion.h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {champions.map((champion) => (
        <ChampionCard 
          key={champion.slug} 
          champion={champion}
        />
      ))}
    </div>
  </div>
);

const ChampionsPage = () => {
  const [selectedYear, setSelectedYear] = useState('all');

  const championsByYear = {
    '2024': [
      {
        name: "Alesi Majorine",
        role: "Chief Executive Officer, Zoota Initiative for Development",
        image: "/images/champions/Alesi-Majorine.jpg",
        bio: "Alesi Majorine leads the Zoota Initiative for Development, driving social impact and community development initiatives.",
        class: "2024",
        slug: "alesi-majorine"
      },
      {
        name: "Andrew Mbigiti",
        role: "Media and Publicity Supervisor, CNOOC Uganda Limited",
        image: "/images/champions/Andrew-Mbigiti.jpg",
        bio: "Andrew oversees media and publicity strategies at CNOOC Uganda Limited.",
        class: "2024",
        slug: "andrew-mbigiti"
      },
      {
        name: "Betty Apun",
        role: "Administrative Officer, Leadership Code Tribunal",
        image: "/images/champions/Betty-Apun.jpg",
        bio: "Betty serves at the Leadership Code Tribunal, ensuring administrative efficiency and ethical leadership.",
        class: "2024",
        slug: "betty-apun"
      },
      {
        name: "Christelle Kyatengerwa",
        role: "Senior Water Officer, Ministry of Water and Environment",
        image: "/images/champions/Christelle-Kyatengerwa.webp",
        bio: "Christelle works on water resource management and environmental conservation.",
        class: "2024",
        slug: "christelle-kyatengerwa"
      },
      {
        name: "Elsa Mirembe",
        role: "Human Resource Assistant, Postbank, Uganda",
        image: "/images/champions/Elsa-Mirembe.jpg",
        bio: "Elsa specializes in human resource management at Postbank Uganda.",
        class: "2024",
        slug: "elsa-mirembe"
      },
      {
        name: "Emmanuel Malunga Acidri",
        role: "Assistant Lecturer – Faculty of Law, Uganda Martyrs University (Nkozi)",
        image: "/images/champions/Emmanuel-Malunga.jpg",
        bio: "Emmanuel contributes to legal education and research at Uganda Martyrs University.",
        class: "2024",
        slug: "emmanuel-malunga"
      },
      {
        name: "Esther Nakawombe",
        role: "National Content Officer, Petroleum Authority of Uganda",
        image: "/images/champions/Esther-Nakawombe.jpg",
        bio: "Esther promotes national content development in Uganda's petroleum sector.",
        class: "2024",
        slug: "esther-nakawombe"
      },
      {
        name: "Jibran Kamoga",
        role: "Auditor, Office of the Auditor General",
        image: "/images/champions/Jibran-Kamoga.jpg",
        bio: "Jibran ensures accountability and transparency in public sector auditing.",
        class: "2024",
        slug: "jibran-kamoga"
      },
      {
        name: "Jonah Namanya",
        role: "Tax Investigations Officer, Uganda Revenue Authority",
        image: "/images/champions/Jonah-Namanya.jpg",
        bio: "Jonah works on tax compliance and investigations at Uganda Revenue Authority.",
        class: "2024",
        slug: "jonah-namanya"
      },
      {
        name: "Jonathan Ssekalega",
        role: "Project Lead, Housing Finance Bank Uganda",
        image: "/images/champions/Jonathan-Ssekalega.jpg",
        bio: "Jonathan leads project initiatives at Housing Finance Bank Uganda.",
        class: "2024",
        slug: "jonathan-ssekalega"
      },
      {
        name: "Lisa Kanyomozi Rabwoni",
        role: "Founder, Yambi Community Outreach | Owner, Oboniire",
        image: "/images/champions/Lisa-Kanyomozi.jpg",
        bio: "Lisa leads community development through Yambi Community Outreach and entrepreneurship with Oboniire.",
        class: "2024",
        slug: "lisa-kanyomozi"
      },
      {
        name: "Matanda Abubaker",
        role: "Magistrate Grade 1, Uganda Judiciary",
        image: "/images/champions/Matanda-Abubaker.jpg",
        bio: "Matanda serves in the judiciary, ensuring justice and rule of law.",
        class: "2024",
        slug: "matanda-abubaker"
      },
      {
        name: "Mrs. Irene Esther Mutuzo Sevume",
        role: "Head of Business Growth and PR, Diwala and Assistant Lecturer, Makerere University",
        image: "/images/champions/Irene-Esther.jpg",
        bio: "Irene leads business growth at Diwala while contributing to academia at Makerere University.",
        class: "2024",
        slug: "irene-esther"
      },
      {
        name: "Patricia Keitesi Natukunda",
        role: "Ag. Supervisor Legal Research and Advisory, Uganda Revenue Authority",
        image: "/images/champions/Patricia-Keitesi.webp",
        bio: "Patricia oversees legal research and advisory services at Uganda Revenue Authority.",
        class: "2024",
        slug: "patricia-keitesi"
      },
      {
        name: "Ronnia Tukamuhebwa",
        role: "Oil & Gas Analysist, Uganda Chamber of Mines and Petroleum",
        image: "/images/champions/Ronnia-Tukamuhebwa.jpg",
        bio: "Ronnia analyzes oil and gas sector developments at Uganda Chamber of Mines and Petroleum.",
        class: "2024",
        slug: "ronnia-tukamuhebwa"
      },
      {
        name: "Victor Arinaitwe",
        role: "Monitoring and Evaluation Officer, Uganda Coffee Development Authority",
        image: "/images/champions/VictorArinaitwe.jpg",
        bio: "Victor leads monitoring and evaluation efforts at Uganda Coffee Development Authority.",
        class: "2024",
        slug: "victor-arinaitwe"
      }
    ],
    '2023': [
      {
        name: "Abaho Allan",
        role: "Operations Officer, Microfinance Support Centre",
        image: "/images/champions/Abaho-Allan.webp",
        bio: "Allan manages operations at the Microfinance Support Centre.",
        class: "2023",
        slug: "abaho-allan"
      },
      {
        name: "Abirahmi Kananathan",
        role: "Technical Assistant, Ministry of Health – Uganda",
        image: "/images/champions/Abirahmi-Kananathan.webp",
        bio: "Abirahmi provides technical support at the Ministry of Health.",
        class: "2023",
        slug: "abirahmi-kananathan"
      },
      {
        name: "Victor Arinaitwe",
        role: "Senior Policy Analyst",
        image: "/images/champions/VictorArinaitwe.jpg",
        bio: "Victor is a dedicated policy analyst with expertise in public sector reform and governance.",
        class: "2023",
        slug: "victor-arinaitwe"
      },
      {
        name: "Ronnia Tukamuhebwa",
        role: "Public Service Innovation Specialist",
        image: "/images/champions/Ronnia-Tukamuhebwa.jpg",
        bio: "Ronnia specializes in developing innovative solutions for public service delivery.",
        class: "2023",
        slug: "ronnia-tukamuhebwa"
      },
      {
        name: "Patricia Keitesi",
        role: "Public Policy Analyst",
        image: "/images/champions/Patricia-Keitesi.webp",
        bio: "Patricia focuses on policy analysis and implementation in the public sector.",
        class: "2023",
        slug: "patricia-keitesi"
      },
      {
        name: "Irene Esther",
        role: "Governance Specialist",
        image: "/images/champions/Irene-Esther.jpg",
        bio: "Irene works on governance and institutional strengthening initiatives.",
        class: "2023",
        slug: "irene-esther"
      },
      {
        name: "Matanda Abubaker",
        role: "Public Service Innovation Lead",
        image: "/images/champions/Matanda-Abubaker.jpg",
        bio: "Matanda leads innovation initiatives in public service delivery.",
        class: "2023",
        slug: "matanda-abubaker"
      },
      {
        name: "Alex Gilbert Naijuka-Njuneki",
        role: "Legal Services and Board Affairs, Uganda Revenue Authority",
        image: "/images/champions/Alex-Gilbert.webp",
        bio: "Alex provides legal expertise at Uganda Revenue Authority.",
        class: "2023",
        slug: "alex-gilbert"
      },
      {
        name: "Allan Sentamu",
        role: "Planner, Mpigi District Local Government",
        image: "/images/champions/Allan-Sentamu.webp",
        bio: "Allan leads planning initiatives at Mpigi District Local Government.",
        class: "2023",
        slug: "allan-sentamu"
      },
      {
        name: "Brenda Nakalema",
        role: "Writer, Copywriter, and Poet",
        image: "/images/champions/BrendaNakalema.webp",
        bio: "Brenda contributes to creative writing and communications in the public sector.",
        class: "2023",
        slug: "brenda-nakalema"
      },
      {
        name: "Edgar Nicholas Kebba",
        role: "Assistant Building Control Officer and Building Inspector, Kampala City Council Authority",
        image: "/images/champions/Edgar-Nicholas.webp",
        bio: "Edgar ensures building safety and compliance at KCCA.",
        class: "2023",
        slug: "edgar-nicholas"
      },
      {
        name: "Ian Lumonya",
        role: "Real Estate Sales Officer, National Social Security Fund",
        image: "/images/champions/Ian-Lumonya.webp",
        bio: "Ian manages real estate investments at NSSF.",
        class: "2023",
        slug: "ian-lumonya"
      },
      {
        name: "Juliana Nayebare",
        role: "Risk Management Officer, Uganda National Bureau of Standards",
        image: "/images/champions/Juliana-Nayebare.png",
        bio: "Juliana oversees risk management at UNBS.",
        class: "2023",
        slug: "juliana-nayebare"
      },
      {
        name: "Kakungulu Edward",
        role: "Surgeon, Uganda Cancer Institute & East Africa Oncology Centre of Excellence",
        image: "/images/champions/Kakungulu-Edward.webp",
        bio: "Edward provides surgical care at the Uganda Cancer Institute.",
        class: "2023",
        slug: "kakungulu-edward"
      },
      {
        name: "Christian Karamagi",
        role: "Innovation Lead / Platform Business Lead, Stanbic Bank Uganda",
        image: "/images/champions/Christian-Karamagi.webp",
        bio: "Christian leads innovation initiatives at Stanbic Bank Uganda.",
        class: "2023",
        slug: "christian-karamagi"
      },
      {
        name: "Maya Denis",
        role: "Strategic Planner, National Planning Authority",
        image: "/images/champions/Maya-Denis.webp",
        bio: "Denis contributes to national strategic planning at NPA.",
        class: "2023",
        slug: "maya-denis"
      },
      {
        name: "Maurice Muhumuza",
        role: "Committee Clerk, Parliament of Uganda",
        image: "/images/champions/Maurice-Muhumuza.webp",
        bio: "Maurice supports parliamentary committees and legislative processes.",
        class: "2023",
        slug: "maurice-muhumuza"
      },
      {
        name: "Mwebaze Johnson",
        role: "Officer Domestic Taxes, Uganda Revenue Authority",
        image: "/images/champions/Mwebaze-Johnson.webp",
        bio: "Johnson works on domestic tax administration at URA.",
        class: "2023",
        slug: "mwebaze-johnson"
      },
      {
        name: "Najib Kasole",
        role: "Legal Officer, Insurance Regulatory Authority of Uganda",
        image: "/images/champions/Najib-Kasole.webp",
        bio: "Najib provides legal expertise in insurance regulation.",
        class: "2023",
        slug: "najib-kasole"
      },
      {
        name: "Owilla Abiro Mercy",
        role: "Grants and Partnership Lead, African Institute for Investigative Journalism",
        image: "/images/champions/Owilla-Abiro.webp",
        bio: "Mercy manages grants and partnerships for investigative journalism.",
        class: "2023",
        slug: "owilla-abiro"
      },
      {
        name: "Tabaro Carolyne Ahereza",
        role: "State Attorney, Office of the Director of Public Prosecutions",
        image: "/images/champions/Tabaro-Carolyne.webp",
        bio: "Carolyne serves as a State Attorney in public prosecutions.",
        class: "2023",
        slug: "tabaro-carolyne"
      }
    ],
    '2022': [
      {
        name: "Chark Benson Muhumuza",
        role: "Officer Domestic Taxes, Uganda Revenue Authority",
        image: "/images/champions/Chark-Benson.webp",
        bio: "Benson works on domestic tax administration at URA.",
        class: "2022",
        slug: "chark-benson"
      },
      {
        name: "Daniel Mumbere",
        role: "Communications Officer, Rocket Health",
        image: "/images/champions/Daniel-Mumbere.webp",
        bio: "Daniel manages communications at Rocket Health.",
        class: "2022",
        slug: "daniel-mumbere"
      },
      {
        name: "Daphine Ashley Nkunda",
        role: "Communications and Engagement Support, Sunbird AI",
        image: "/images/champions/Daphine-Ashley.webp",
        bio: "Daphine supports communications and engagement at Sunbird AI.",
        class: "2022",
        slug: "daphine-ashley"
      },
      {
        name: "Desire Amanya",
        role: "Communications Officer, Government Citizen Interaction Centre (GCIC)",
        image: "/images/champions/Desire-Amanya.webp",
        bio: "Desire facilitates government-citizen communication at GCIC.",
        class: "2022",
        slug: "desire-amanya"
      },
      {
        name: "Donald Mugisha",
        role: "Officer Domestic Taxes, Uganda Revenue Authority",
        image: "/images/champions/Donald-Mugisha.webp",
        bio: "Donald works in domestic tax administration at URA.",
        class: "2022",
        slug: "donald-mugisha"
      },
      {
        name: "Emmanuel Joseph Twinomujuni",
        role: "Instrumentation and Quality Analyst, Luwero Industries Limited",
        image: "/images/champions/Emmanuel-Joseph.webp",
        bio: "Emmanuel ensures quality control at Luwero Industries.",
        class: "2022",
        slug: "emmanuel-joseph"
      },
      {
        name: "Judith Kagere Babirye",
        role: "Associate, KTA Advocates",
        image: "/images/champions/Judith-Kagere.webp",
        bio: "Judith provides legal expertise at KTA Advocates.",
        class: "2022",
        slug: "judith-kagere"
      },
      {
        name: "Laban Atukwatse",
        role: "Immigration Assistant, Directorate of Citizenship and Immigration Control",
        image: "/images/champions/Laban=Atukwatse.webp",
        bio: "Laban works in immigration services at DCIC.",
        class: "2022",
        slug: "laban-atukwatse"
      },
      {
        name: "Lillibet Namakula",
        role: "Team Leader, Public Health Ambassadors Uganda-PHAU",
        image: "/images/champions/Lillibet-Namakula.webp",
        bio: "Lillibet leads public health initiatives at PHAU.",
        class: "2022",
        slug: "lillibet-namakula"
      },
      {
        name: "Maria Nakalanda",
        role: "Gender, Health and Environment Officer at Regenerate Africa",
        image: "/images/champions/Maria-Nakalanda.webp",
        bio: "Maria works on gender, health, and environmental issues.",
        class: "2022",
        slug: "maria-nakalanda"
      },
      {
        name: "Mark Mwidu Kabirizi",
        role: "Investment Planner, National Planning Authority",
        image: "/images/champions/Mark-Mwidu.webp",
        bio: "Mark plans investments at the National Planning Authority.",
        class: "2022",
        slug: "mark-mwidu"
      },
      {
        name: "Moses Mulindwa",
        role: "Programme Associate, Uganda National NGO Forum",
        image: "/images/champions/Moses-Mulindwa.webp",
        bio: "Moses coordinates programs at the NGO Forum.",
        class: "2022",
        slug: "moses-mulindwa"
      },
      {
        name: "Raymond L. Natukunda",
        role: "Co-Founder, Innovent Labs Africa",
        image: "/images/champions/Raymond-Natukunda.webp",
        bio: "Raymond leads innovation initiatives at Innovent Labs Africa.",
        class: "2022",
        slug: "raymond-natukunda"
      },
      {
        name: "Ronad Angarukamu",
        role: "Production Engineer, Uganda Industrial Research Institute",
        image: "/images/champions/Ronad-Angarukamu.webp",
        bio: "Ronad manages production engineering at UIRI.",
        class: "2022",
        slug: "ronad-angarukamu"
      },
      {
        name: "Thomas Ibale",
        role: "Junior Designer at Design Without Borders, Africa",
        image: "/images/champions/Thomas-Ibale.webp",
        bio: "Thomas contributes to design solutions at Design Without Borders.",
        class: "2022",
        slug: "thomas-ibale"
      }
    ],
    '2021': [
      {
        name: "Dinah Achola",
        role: "Fellow, Teach For Uganda",
        image: "/images/champions/Dinah-Achola.jpg",
        bio: "Dinah contributes to education through Teach For Uganda.",
        class: "2021",
        slug: "dinah-achola"
      },
      {
        name: "Bruce Amanya Mugisha",
        role: "Civil Engineer, National Enterprise Corporation (NEC-UPDF)",
        image: "/images/champions/Bruce-Amanya.jpg",
        bio: "Bruce provides engineering expertise at NEC-UPDF.",
        class: "2021",
        slug: "bruce-amanya"
      },
      {
        name: "Cynthia Kyofuna",
        role: "Founder, Publicity House",
        image: "/images/champions/Cynthia-Kyofuna.jpg",
        bio: "Cynthia leads communications initiatives at Publicity House.",
        class: "2021",
        slug: "cynthia-kyofuna"
      },
      {
        name: "Daraus Bahikire",
        role: "Public health specialist, Ministry of Health",
        image: "/images/champions/Daraus-Bahikire.jpg",
        bio: "Daraus works on public health initiatives at the Ministry of Health.",
        class: "2021",
        slug: "daraus-bahikire"
      },
      {
        name: "Doreen Akankwasa",
        role: "Information and Data Management, Uganda National Oil Company",
        image: "/images/champions/Doreen-Akankwasa.jpg",
        bio: "Doreen manages information and data at UNOC.",
        class: "2021",
        slug: "doreen-akankwasa"
      },
      {
        name: "Eric Diogo",
        role: "Founder, Mazungumzo",
        image: "/images/champions/Eric-Diogo.jpg",
        bio: "Eric leads initiatives at Mazungumzo.",
        class: "2021",
        slug: "eric-diogo"
      },
      {
        name: "Juliet Grace Luwedde",
        role: "Programs Officer, Media Challenge Initiative",
        image: "/images/champions/Juliet-Grace.jpg",
        bio: "Juliet manages programs at Media Challenge Initiative.",
        class: "2021",
        slug: "juliet-grace"
      },
      {
        name: "Karane Tuhirirwe",
        role: "Communications Lead – Makerere University Endowment Fund",
        image: "/images/champions/Karane-Tuhirirwe.jpg",
        bio: "Karane leads communications at Makerere University Endowment Fund.",
        class: "2021",
        slug: "karane-tuhirirwe"
      },
      {
        name: "Preston Katungi Winyi",
        role: "Police Officer, Uganda Police Force",
        image: "/images/champions/Preston-Katungi.jpg",
        bio: "Preston serves in the Uganda Police Force.",
        class: "2021",
        slug: "preston-katungi"
      },
      {
        name: "Luke Ofungi",
        role: "Deputy Director, CEED Uganda",
        image: "/images/champions/Luke-Ofungi.jpg",
        bio: "Luke leads initiatives at CEED Uganda.",
        class: "2021",
        slug: "luke-ofungi"
      },
      {
        name: "Lynna Abaho",
        role: "Labour Support Officer, Ministry of Gender, Labour and Social Development",
        image: "/images/champions/Lynna-Abaho.jpg",
        bio: "Lynna works on labor issues at the Ministry of Gender.",
        class: "2021",
        slug: "lynna-abaho"
      },
      {
        name: "Marvin Harold Odongo",
        role: "Performance Auditor, Office of the Auditor General",
        image: "/images/champions/Marvin-Harold.jpg",
        bio: "Marvin conducts performance audits at OAG.",
        class: "2021",
        slug: "marvin-harold"
      },
      {
        name: "Edgar Mwine",
        role: "Immigration Officer, Ministry of Internal Affairs",
        image: "/images/champions/Edgar-Mwine.jpg",
        bio: "Edgar works in immigration services at the Ministry of Internal Affairs.",
        class: "2021",
        slug: "edgar-mwine"
      },
      {
        name: "Clare Nakazibwe",
        role: "Finance and Administration, Ministry of Justice and Constitutional Affairs",
        image: "/images/champions/Clare-Nakazibwe.jpg",
        bio: "Clare manages finance and administration at the Ministry of Justice.",
        class: "2021",
        slug: "clare-nakazibwe"
      },
      {
        name: "Zephania Kato",
        role: "Labour, Industrial Relations and Productivity Officer, Ministry of Gender Labour and Social Development",
        image: "/images/champions/Zephania-Kato.jpg",
        bio: "Zephania works on labor and industrial relations at the Ministry of Gender.",
        class: "2021",
        slug: "zephania-kato"
      }
    ]
  };

  const years = Object.keys(championsByYear).sort((a, b) => b - a);
  const allChampions = years.reduce((acc, year) => [...acc, ...championsByYear[year]], []);
  const displayedChampions = selectedYear === 'all' ? allChampions : championsByYear[selectedYear];

  return (
    <HudumaLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2A6A76] to-[#87181A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Huduma Champions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              Meet our exceptional Huduma Fellows who are driving positive change in Uganda's public service and civic sectors.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Filter by year:</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A6A76] focus:border-transparent"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>Class of {year}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Champions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {selectedYear === 'all' ? (
            years.map(year => (
              <YearSection 
                key={year} 
                year={year} 
                champions={championsByYear[year]} 
              />
            ))
          ) : (
            <YearSection 
              year={selectedYear} 
              champions={championsByYear[selectedYear]} 
            />
          )}
        </div>
      </section>
    </HudumaLayout>
  );
};

export default ChampionsPage; 