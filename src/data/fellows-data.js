// Fellows data with simplified image paths
const fellowsData = {
  '2024': [
    {
      name: "Aristide Kambale",
      role: "Environmental Activist & Social Entrepreneur",
      slug: "aristide-kambale",
      image: "Aristide-Kambale"
    },
    {
      name: "Christine Isimbi",
      role: "Youth Development Advocate",
      slug: "christine-isimbi",
      image: "Christine-Isimbi"
    },
    {
      name: "Iain Usiri",
      role: "Technology Entrepreneur",
      slug: "iain-usiri",
      image: "Iain-Usiri"
    },
    {
      name: "Ivan Kibuuka",
      role: "Founder",
      organization: "Arudem",
      image: "Ivan-Kibuuka",
      bio: "Ivan Kibuuka is a social entrepreneur and founder of Arudem, an organization dedicated to promoting sustainable development through innovative community-based initiatives. His work focuses on creating lasting positive change in local communities.",
      slug: "ivan-kibuuka",
      social: {
        linkedin: "https://www.linkedin.com/in/ivan-kibuuka",
        twitter: "https://twitter.com/ivankibuuka_"
      }
    },
    {
      name: "Joel Sengendo",
      role: "Digital Innovation Specialist",
      organization: "Tech Innovation Hub",
      image: "Joel-Sengendo",
      bio: "Joel Sengendo is a technology innovator working at the intersection of digital solutions and social impact. He leads initiatives that leverage technology to address pressing community challenges and promote digital inclusion.",
      slug: "joel-sengendo",
      social: {
        linkedin: "https://www.linkedin.com/in/joel-sengendo"
      }
    },
    {
      name: "Loise Machira",
      role: "Environmental Conservation Leader",
      organization: "Green Future Initiative",
      image: "Loise-Machira",
      bio: "Loise Machira is an environmental advocate championing sustainable practices and conservation efforts across East Africa. Her work focuses on community-based conservation initiatives and environmental education programs.",
      slug: "loise-machira",
      social: {
        linkedin: "https://www.linkedin.com/in/loise-machira",
        twitter: "https://twitter.com/loisemachira"
      }
    },
    {
      name: "Mohamed Sharif",
      role: "Community Development Specialist",
      organization: "East Africa Development Network",
      image: "Mohamed-Sharif",
      bio: "Mohamed Sharif is a community development specialist with extensive experience in implementing grassroots initiatives. His work focuses on empowering local communities through sustainable development programs and capacity building.",
      slug: "mohamed-sharif",
      social: {
        linkedin: "https://www.linkedin.com/in/mohamed-sharif"
      }
    },
    {
      name: "Mohamed Shidane",
      role: "Youth Empowerment Advocate",
      organization: "Youth Leadership Foundation",
      image: "Mohamed-Shidane",
      bio: "Mohamed Shidane is dedicated to youth empowerment and leadership development. Through his work, he has created numerous opportunities for young people to develop their skills and become active contributors to their communities.",
      slug: "mohamed-shidane",
      social: {
        linkedin: "https://www.linkedin.com/in/mohamed-shidane",
        twitter: "https://twitter.com/mohamedshidane"
      }
    },
    {
      name: "Mujjuzi Azizi",
      role: "Social Innovation Leader",
      organization: "Innovation for Change",
      image: "Mujjuzi-Abdulazizi",
      bio: "Mujjuzi Azizi is a social innovation leader who has pioneered several initiatives focused on addressing community challenges through innovative solutions. His work combines technology and social impact to create sustainable change.",
      slug: "mujjuzi-azizi",
      social: {
        linkedin: "https://www.linkedin.com/in/mujjuzi-azizi"
      }
    },
    {
      name: "Naissa Umutoni",
      role: "Gender Equality Advocate",
      organization: "Women's Empowerment Network",
      image: "Naissa-Umutoni",
      bio: "Naissa Umutoni is a passionate advocate for gender equality and women's empowerment. Her work focuses on creating opportunities for women and girls through education, entrepreneurship, and leadership development programs.",
      slug: "naissa-umutoni",
      social: {
        linkedin: "https://www.linkedin.com/in/naissa-umutoni",
        twitter: "https://twitter.com/naissaumutoni"
      }
    },
    {
      name: "Priscilla Busulwa",
      role: "Education Innovation Leader",
      organization: "Education Transformation Initiative",
      image: "Priscilla-Busulwa",
      bio: "Priscilla Busulwa is an education innovator committed to transforming learning experiences across East Africa. Her work focuses on developing and implementing innovative educational programs that prepare young people for the future.",
      slug: "priscilla-busulwa",
      social: {
        linkedin: "https://www.linkedin.com/in/priscilla-busulwa",
        twitter: "https://twitter.com/priscillabusulwa"
      }
    },
    {
      name: "Sameer Luyombo",
      role: "Technology for Development Specialist",
      organization: "Digital Solutions Africa",
      image: "Sameer-Luyombo",
      bio: "Sameer Luyombo specializes in leveraging technology for social development. His work involves creating digital solutions that address pressing community challenges and promote inclusive growth across the region.",
      slug: "sameer-luyombo",
      social: {
        linkedin: "https://www.linkedin.com/in/sameer-luyombo"
      }
    },
    {
      name: "Saxon Ssekitooleko",
      role: "Social Enterprise Developer",
      organization: "Impact Ventures East Africa",
      image: "Saxon-Ssekitooleko",
      bio: "Saxon Ssekitooleko is a social entrepreneur focused on developing sustainable business solutions to community challenges. His work combines business innovation with social impact to create lasting change.",
      slug: "saxon-ssekitooleko",
      social: {
        linkedin: "https://www.linkedin.com/in/saxon-ssekitooleko",
        twitter: "https://twitter.com/saxonssekitooleko"
      }
    },
    {
      name: "Taonga Chisamanga",
      role: "Climate Action Advocate",
      organization: "Climate Resilience Network",
      image: "Taonga-Chisamanga",
      bio: "Taonga Chisamanga is a climate action advocate working to promote environmental sustainability and climate resilience. Her work focuses on developing community-based solutions to environmental challenges.",
      slug: "taonga-chisamanga",
      social: {
        linkedin: "https://www.linkedin.com/in/taonga-chisamanga"
      }
    },
    {
      name: "Vanessa Nkesha",
      role: "Public Health Innovation Leader",
      organization: "Health Access Initiative",
      image: "Vanessa-Nkesha",
      bio: "Vanessa Nkesha is dedicated to improving public health outcomes through innovative approaches. Her work focuses on increasing access to healthcare services and promoting health education in underserved communities.",
      slug: "vanessa-nkesha",
      social: {
        linkedin: "https://www.linkedin.com/in/vanessa-nkesha",
        twitter: "https://twitter.com/vanessankesha"
      }
    },
    {
      name: "Zeinab Mohamud",
      role: "Peace and Conflict Resolution Specialist",
      organization: "Peace Building Network",
      image: "Zeinab-Mohamud",
      bio: "Zeinab Mohamud works in peace building and conflict resolution across East Africa. Her work focuses on promoting dialogue, understanding, and peaceful coexistence among diverse communities.",
      slug: "zeinab-mohamud",
      social: {
        linkedin: "https://www.linkedin.com/in/zeinab-mohamud"
      }
    }
  ],
  '2023': [
    {
      name: "Arnold Kwizera",
      role: "Media & Communications Specialist",
      slug: "arnold-kwizera",
      image: "Arnold-_Kwizera"
    },
    {
      name: "Ivan Koreta",
      role: "Digital Innovation Leader",
      organization: "Tech Hub Rwanda",
      image: "Ivan-Koreta",
      bio: "Ivan Koreta is a digital innovation specialist working to promote technology adoption and digital transformation in East Africa. His work involves developing and implementing innovative solutions to address community challenges.",
      slug: "ivan-koreta",
      social: {
        linkedin: "https://www.linkedin.com/in/ivan-koreta"
      }
    },
    {
      name: "Ivan Magomu",
      role: "Social Enterprise Developer",
      organization: "Community Impact Ventures",
      image: "Ivan-Magomu",
      bio: "Ivan Magomu is dedicated to developing sustainable social enterprises that create positive community impact. His work focuses on building businesses that address social challenges while maintaining financial sustainability.",
      slug: "ivan-magomu",
      social: {
        linkedin: "https://www.linkedin.com/in/ivan-magomu",
        twitter: "https://twitter.com/ivanmagomu"
      }
    },
    {
      name: "Leila Ali",
      role: "Youth Development Advocate",
      organization: "Youth Empowerment Network",
      image: "Leila-Ali",
      bio: "Leila Ali is passionate about youth development and empowerment. Through her work, she creates opportunities for young people to develop their skills and become active contributors to their communities.",
      slug: "leila-ali",
      social: {
        linkedin: "https://www.linkedin.com/in/leila-ali"
      }
    },
    {
      name: "Mary Mutula",
      role: "Environmental Conservation Specialist",
      organization: "Green Africa Initiative",
      image: "Mary-Mutula",
      bio: "Mary Mutula leads environmental conservation efforts across East Africa. Her work focuses on promoting sustainable practices and developing community-based conservation programs that protect natural resources.",
      slug: "mary-mutula",
      social: {
        linkedin: "https://www.linkedin.com/in/mary-mutula",
        twitter: "https://twitter.com/marymutula"
      }
    },
    {
      name: "Memo Some",
      role: "Public Health Innovation Leader",
      organization: "Health Access Network",
      image: "Memo-Some",
      bio: "Memo Some works to improve public health outcomes through innovative approaches. His focus is on increasing access to healthcare services and promoting health education in underserved communities.",
      slug: "memo-some",
      social: {
        linkedin: "https://www.linkedin.com/in/memo-some"
      }
    },
    {
      name: "Peter Mulira",
      role: "Education Technology Specialist",
      organization: "EdTech Africa",
      image: "Peter-Mulira",
      bio: "Peter Mulira is an education technology specialist working to transform learning experiences through digital innovation. His work focuses on developing and implementing technology solutions that enhance education access and quality.",
      slug: "peter-mulira",
      social: {
        linkedin: "https://www.linkedin.com/in/peter-mulira",
        twitter: "https://twitter.com/petermulira"
      }
    },
    {
      name: "Rita Uwamahoro",
      role: "Gender Equality Advocate",
      organization: "Women's Rights Network",
      image: "Rita-Uwamahoro",
      bio: "Rita Uwamahoro is a champion for gender equality and women's empowerment. Her work involves developing and implementing programs that promote women's rights and create opportunities for women's leadership.",
      slug: "rita-uwamahoro",
      social: {
        linkedin: "https://www.linkedin.com/in/rita-uwamahoro"
      }
    }
  ],
  '2022': [
    {
      name: "Abraham Kahasha",
      role: "Community Development Leader",
      organization: "Youth Empowerment Initiative",
      image: "Abraham-Kahasha",
      bio: "Abraham Kahasha has dedicated his career to empowering youth through innovative community development programs. His work has created lasting impact in various communities across the region, focusing on skills development and entrepreneurship.",
      slug: "abraham-kahasha",
      social: {
        linkedin: "https://www.linkedin.com/in/abraham-kahasha",
        twitter: "https://twitter.com/abrahamkahasha"
      }
    },
    {
      name: "Christelle Mukendi",
      role: "Social Innovation Specialist",
      organization: "Innovation Hub DRC",
      image: "Christelle-Mukendi",
      bio: "Christelle Mukendi leads social innovation initiatives that address pressing community challenges. Her work focuses on developing sustainable solutions through community engagement and participatory approaches.",
      slug: "christelle-mukendi",
      social: {
        linkedin: "https://www.linkedin.com/in/christelle-mukendi"
      }
    },
    {
      name: "Inshuti Zirimwabagabo",
      role: "Technology for Development Lead",
      organization: "Digital Transformation Initiative",
      image: "Inshuti-Zirimwabagabo",
      bio: "Inshuti Zirimwabagabo specializes in leveraging technology for social development. Through his work, he has implemented various digital solutions that address community challenges and promote inclusive growth.",
      slug: "inshuti-zirimwabagabo",
      social: {
        linkedin: "https://www.linkedin.com/in/inshuti-zirimwabagabo",
        twitter: "https://twitter.com/inshutizirimwa"
      }
    },
    {
      name: "Karen Nankwanga",
      role: "Education Innovation Advocate",
      organization: "Education Access Network",
      image: "Karen-Nankwanga",
      bio: "Karen Nankwanga is passionate about transforming education through innovative approaches. Her work focuses on increasing access to quality education and developing programs that prepare young people for the future.",
      slug: "karen-nankwanga",
      social: {
        linkedin: "https://www.linkedin.com/in/karen-nankwanga"
      }
    },
    {
      name: "Martin Karungi",
      role: "Environmental Sustainability Leader",
      organization: "Green Solutions Africa",
      image: "Martin-Karungi",
      bio: "Martin Karungi works to promote environmental sustainability and climate resilience. His initiatives focus on developing community-based solutions to environmental challenges and promoting sustainable practices.",
      slug: "martin-karungi",
      social: {
        linkedin: "https://www.linkedin.com/in/martin-karungi",
        twitter: "https://twitter.com/martinkarungi"
      }
    }
  ],
  '2021': [
    {
      name: "Aaron Akampa",
      role: "Technology Innovation Leader",
      organization: "Tech Hub Uganda",
      image: "Aaron-Akampa",
      bio: "Aaron Akampa is a technology innovator who has pioneered several successful digital transformation initiatives. His work focuses on leveraging technology to solve pressing social challenges and promote digital inclusion across East Africa.",
      slug: "aaron-akampa",
      social: {
        linkedin: "https://www.linkedin.com/in/aaron-akampa",
        twitter: "https://twitter.com/aaronakampa"
      }
    },
    {
      name: "Abaas Mpindi",
      role: "Media Development Specialist",
      organization: "Media Challenge Initiative",
      image: "Abaas-Mpindi",
      bio: "Abaas Mpindi is dedicated to transforming media landscapes through innovative approaches to journalism and storytelling. His work focuses on training the next generation of journalists and promoting responsible media practices.",
      slug: "abaas-mpindi",
      social: {
        linkedin: "https://www.linkedin.com/in/abaas-mpindi"
      }
    },
    {
      name: "Allan Manzi",
      role: "Social Enterprise Developer",
      organization: "Impact Ventures Rwanda",
      image: "Allan-Manzi",
      bio: "Allan Manzi works to develop sustainable social enterprises that create positive community impact. His focus is on building businesses that address social challenges while maintaining financial sustainability.",
      slug: "allan-manzi",
      social: {
        linkedin: "https://www.linkedin.com/in/allan-manzi",
        twitter: "https://twitter.com/allanmanzi"
      }
    },
    {
      name: "Angella Nakuya",
      role: "Youth Development Leader",
      organization: "Youth Empowerment Network",
      image: "Angella-Nakuya",
      bio: "Angella Nakuya is passionate about youth development and leadership. Through her work, she creates opportunities for young people to develop their skills and become active contributors to their communities.",
      slug: "angella-nakuya",
      social: {
        linkedin: "https://www.linkedin.com/in/angella-nakuya"
      }
    },
    {
      name: "Arnold Atwine",
      role: "Digital Innovation Specialist",
      organization: "Innovation Lab Africa",
      image: "Arnold-Atwine",
      bio: "Arnold Atwine specializes in digital innovation and technology adoption. His work involves developing and implementing innovative solutions that address community challenges and promote digital transformation.",
      slug: "arnold-atwine",
      social: {
        linkedin: "https://www.linkedin.com/in/arnold-atwine",
        twitter: "https://twitter.com/arnoldatwine"
      }
    },
    {
      name: "Asayo Catherine",
      role: "Education Innovation Advocate",
      organization: "Education Access Initiative",
      image: "Asayo-Catherine",
      bio: "Asayo Catherine is committed to transforming education through innovative approaches. Her work focuses on increasing access to quality education and developing programs that prepare young people for the future.",
      slug: "asayo-catherine",
      social: {
        linkedin: "https://www.linkedin.com/in/asayo-catherine"
      }
    },
    {
      name: "Athan Tashobya",
      role: "Public Policy Specialist",
      organization: "Policy Innovation Hub",
      image: "Athan-Tashobya",
      bio: "Athan Tashobya works on developing and implementing innovative public policy solutions. His focus is on creating policies that promote inclusive growth and sustainable development across the region.",
      slug: "athan-tashobya",
      social: {
        linkedin: "https://www.linkedin.com/in/athan-tashobya",
        twitter: "https://twitter.com/athantashobya"
      }
    },
    {
      name: "Bahati Scolastique",
      role: "Community Development Leader",
      organization: "Community Impact Network",
      image: "Bahati-Scolastique",
      bio: "Bahati Scolastique leads community development initiatives that create lasting positive change. Her work focuses on empowering communities through sustainable development programs and capacity building.",
      slug: "bahati-scolastique",
      social: {
        linkedin: "https://www.linkedin.com/in/bahati-scolastique"
      }
    }
  ],
  '2020': [
    {
      name: "Benefique Magadju",
      role: "Social Innovation Leader",
      organization: "Community Development Initiative",
      image: "Benefique-Magadju",
      bio: "Benefique Magadju is a social innovation leader working to create positive change in communities through sustainable development initiatives. His work focuses on empowering local communities through innovative programs that address social challenges.",
      slug: "benefique-magadju",
      class: "2020",
      social: {
        linkedin: "https://www.linkedin.com/in/benefique-magadju"
      }
    },
    {
      name: "Beverly Mutindi",
      role: "Youth Development Advocate",
      organization: "Youth Empowerment Network",
      image: "Beverly-Mutindi",
      bio: "Beverly Mutindi works to empower youth through innovative programs and initiatives that build leadership skills and create opportunities. She has developed several successful youth mentorship programs that have impacted hundreds of young people across East Africa.",
      slug: "beverly-mutindi",
      class: "2020",
      social: {
        linkedin: "https://www.linkedin.com/in/beverly-mutindi",
        twitter: "https://twitter.com/BeverlyMutindi"
      }
    },
    {
      name: "Boaz Opio",
      role: "Technology Innovation Specialist",
      organization: "Digital Solutions Hub",
      image: "Boaz-Opio",
      bio: "Boaz Opio specializes in leveraging technology for social impact, developing solutions that address community challenges. His work focuses on creating digital platforms that enhance access to education and economic opportunities.",
      slug: "boaz-opio",
      class: "2020",
      social: {
        linkedin: "https://www.linkedin.com/in/boaz-opio",
        twitter: "https://twitter.com/BoazOpio"
      }
    },
    {
      name: "Canary Mugume",
      role: "Media & Communications Expert",
      organization: "Next Media Services",
      image: "Canary-Mugume",
      bio: "Canary Mugume is a media professional dedicated to transforming the landscape of journalism and storytelling in East Africa. Through his work, he has pioneered innovative approaches to digital journalism and media engagement.",
      slug: "canary-mugume",
      class: "2020",
      social: {
        linkedin: "https://www.linkedin.com/in/canary-mugume",
        twitter: "https://twitter.com/CanaryMugume"
      }
    },
    {
      name: "Carolyn Kamanzi",
      role: "Education Innovation Leader",
      organization: "Education Access Initiative",
      image: "Carolyn-Kamanzi",
      bio: "Carolyn Kamanzi works to transform education through innovative approaches that increase access and improve learning outcomes. She has implemented several successful programs that bridge the education gap in underserved communities.",
      slug: "carolyn-kamanzi",
      class: "2020",
      social: {
        linkedin: "https://www.linkedin.com/in/carolyn-kamanzi"
      }
    },
    {
      name: "Christian Rebero",
      role: "Community Development Specialist",
      organization: "Social Impact Network",
      image: "Christian-Rebero",
      bio: "Christian Rebero leads community development initiatives that create lasting positive change through sustainable programs. His work focuses on building resilient communities through participatory development approaches.",
      slug: "christian-rebero",
      class: "2020",
      social: {
        linkedin: "https://www.linkedin.com/in/christian-rebero"
      }
    },
    {
      name: "Claire Akwongo",
      role: "Public Health Innovation Leader",
      organization: "Health Access Network",
      image: "Claire-Akwongo",
      bio: "Claire Akwongo works to improve public health outcomes through innovative approaches and community-based solutions. She has developed several successful health initiatives that have improved access to healthcare in rural communities.",
      slug: "claire-akwongo",
      class: "2020",
      social: {
        linkedin: "https://www.linkedin.com/in/claire-akwongo"
      }
    },
    {
      name: "Cleofash Alinaitwe",
      role: "Environmental Sustainability Advocate",
      organization: "Green Solutions Initiative",
      image: "Cleofash-Alinaitwe",
      bio: "Cleofash Alinaitwe champions environmental sustainability through innovative programs and community engagement. His work focuses on developing sustainable solutions to environmental challenges facing communities.",
      slug: "cleofash-alinaitwe",
      class: "2020",
      social: {
        linkedin: "https://www.linkedin.com/in/cleofash-alinaitwe"
      }
    }
  ],
  '2019': [
    {
      name: "Angella Nakuya Kasekende",
      role: "Social Impact Leader",
      organization: "Community Transformation Initiative",
      image: "Angella-Nakuya",
      bio: "Angella Nakuya Kasekende is a dedicated social impact leader working to create positive change in communities. Her work focuses on developing sustainable solutions to social challenges through innovative approaches and community engagement.",
      slug: "angella-nakuya-kasekende",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/angella-nakuya-kasekende"
      }
    },
    {
      name: "Asayo Catherine",
      role: "Community Development Specialist",
      organization: "Rural Development Network",
      image: "Asayo-Catherine",
      bio: "Asayo Catherine works in community development, focusing on sustainable solutions for local challenges. She has implemented several successful programs that have transformed rural communities through participatory development approaches.",
      slug: "asayo-catherine",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/asayo-catherine"
      }
    },
    {
      name: "Athan Tashobya",
      role: "Media Professional",
      organization: "Regional Media Hub",
      image: "Athan-Tashobya",
      bio: "Athan Tashobya is a media professional committed to quality journalism and storytelling. Through his work, he has contributed to the transformation of media landscape in East Africa, focusing on digital innovation and ethical journalism.",
      slug: "athan-tashobya",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/athan-tashobya",
        twitter: "https://twitter.com/AthanTashobya"
      }
    },
    {
      name: "Bahati Scolastique",
      role: "Social Entrepreneur",
      organization: "Community Development Network",
      image: "Bahati-Scolastique",
      bio: "Bahati Scolastique is a social entrepreneur focused on sustainable community development. Her work involves creating innovative solutions that empower local communities while promoting economic development and social inclusion.",
      slug: "bahati-scolastique",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/bahati-scolastique"
      }
    },
    {
      name: "Claire Akwongo",
      role: "Development Practitioner",
      organization: "Rural Development Initiative",
      image: "Claire-Akwongo",
      bio: "Claire Akwongo is a development practitioner dedicated to sustainable community initiatives. Her work focuses on implementing programs that create lasting positive change in rural communities through participatory approaches and local capacity building.",
      slug: "claire-akwongo",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/claire-akwongo"
      }
    },
    {
      name: "Darius Turyahikayo",
      role: "Innovation Specialist",
      organization: "Technology Innovation Hub",
      image: "Darius-Turyahikayo",
      bio: "Darius Turyahikayo is an innovation specialist focused on leveraging technology for social impact. His work involves developing and implementing innovative solutions that address community challenges while promoting sustainable development.",
      slug: "darius-turyahikayo",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/darius-turyahikayo"
      }
    },
    {
      name: "Davis Mukyenga",
      role: "Social Impact Leader",
      organization: "Community Development Network",
      image: "Davis-Mukyenga",
      bio: "Davis Mukyenga is dedicated to creating social impact through innovative initiatives. His work focuses on implementing sustainable programs that empower communities and create lasting positive change.",
      slug: "davis-mukyenga",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/davis-mukyenga"
      }
    },
    {
      name: "Diana Atuhaire",
      role: "Community Development Leader",
      organization: "Rural Empowerment Initiative",
      image: "Diana-Atuhaire",
      bio: "Diana Atuhaire leads community development initiatives focused on sustainable change. Her work emphasizes participatory approaches and capacity building to create lasting impact in rural communities.",
      slug: "diana-atuhaire",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/diana-atuhaire"
      }
    },
    {
      name: "Elizabeth Mwambulukutu",
      role: "Social Innovation Leader",
      organization: "Innovation for Change",
      image: "Elizabeth-Mwambulukutu",
      bio: "Elizabeth Mwambulukutu works in social innovation and community development. Her focus is on creating and implementing innovative solutions that address pressing social challenges while promoting sustainable development.",
      slug: "elizabeth-mwambulukutu",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/elizabeth-mwambulukutu"
      }
    },
    {
      name: "Emmanuel Langoya",
      role: "Development Specialist",
      organization: "Community Impact Network",
      image: "Emmanuel-Langoya",
      bio: "Emmanuel Langoya specializes in development and community empowerment. His work focuses on implementing sustainable programs that create lasting positive change through participatory approaches.",
      slug: "emmanuel-langoya",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/emmanuel-langoya"
      }
    },
    {
      name: "Fatma Kauga",
      role: "Social Impact Professional",
      organization: "Social Development Initiative",
      image: "Fatma-Kauga",
      bio: "Fatma Kauga works to create positive social impact through innovative programs. Her focus is on developing and implementing sustainable solutions that address community challenges while promoting empowerment.",
      slug: "fatma-kauga",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/fatma-kauga"
      }
    },
    {
      name: "Hamidu Ssonko",
      role: "Community Leader",
      organization: "Community Empowerment Network",
      image: "Hamidu-Ssonko",
      bio: "Hamidu Ssonko leads community initiatives focused on sustainable development. His work emphasizes participatory approaches and capacity building to create lasting positive change in communities.",
      slug: "hamidu-ssonko",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/hamidu-ssonko"
      }
    },
    {
      name: "Harun Momanyi",
      role: "Social Entrepreneur",
      organization: "Impact Ventures",
      image: "Harun-Momanyi",
      bio: "Harun Momanyi is an entrepreneur focused on social impact and community development. Through his ventures, he combines business principles with social impact to create sustainable solutions for community challenges.",
      slug: "harun-momanyi",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/harun-momanyi"
      }
    },
    {
      name: "Hazel Birungi",
      role: "Development Professional",
      organization: "Development Impact Network",
      image: "Hazel-Birungi",
      bio: "Hazel Birungi works in development, focusing on sustainable community solutions. Her work involves implementing innovative programs that create lasting positive change through participatory approaches.",
      slug: "hazel-birungi",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/hazel-birungi"
      }
    },
    {
      name: "Ignatious Kirunga",
      role: "Social Impact Leader",
      organization: "Social Innovation Hub",
      image: "Ignatious-Kirunga",
      bio: "Ignatious Kirunga leads initiatives focused on social impact and community development. His work emphasizes innovative approaches to addressing social challenges while promoting sustainable development.",
      slug: "ignatious-kirunga",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/ignatious-kirunga"
      }
    },
    {
      name: "Jonan Twinamatsiko",
      role: "Innovation Leader",
      organization: "Technology Innovation Hub",
      image: "Jonan-Twinamatsiko",
      bio: "Jonan Twinamatsiko leads innovation initiatives that leverage technology for social impact. His work focuses on developing and implementing technological solutions that address community challenges while promoting digital inclusion.",
      slug: "jonan-twinamatsiko",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/jonan-twinamatsiko"
      }
    },
    {
      name: "Judy Lumumba",
      role: "Community Development Specialist",
      organization: "Rural Empowerment Network",
      image: "Judy-Lumumba",
      bio: "Judy Lumumba specializes in community development with a focus on rural transformation. Her work involves implementing sustainable initiatives that create lasting positive change in underserved communities through participatory approaches.",
      slug: "judy-lumumba",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/judy-lumumba"
      }
    },
    {
      name: "Kennedy Odokonyero",
      role: "Social Innovation Professional",
      organization: "Innovation for Development Hub",
      image: "Kennedy-Odokonyero",
      bio: "Kennedy Odokonyero works at the intersection of social innovation and community development. His focus is on creating and implementing innovative solutions that address pressing social challenges while promoting sustainable development.",
      slug: "kennedy-odokonyero",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/kennedy-odokonyero"
      }
    },
    {
      name: "Kiggundu Rodney",
      role: "Development Leader",
      organization: "Community Impact Network",
      image: "Kiggundu-Rodney",
      bio: "Kiggundu Rodney leads development initiatives that create sustainable positive change in communities. His work focuses on implementing innovative programs that address social challenges while promoting community empowerment.",
      slug: "kiggundu-rodney",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/kiggundu-rodney"
      }
    },
    {
      name: "Mohamed Okash Sugow",
      role: "Social Entrepreneur",
      organization: "Social Enterprise Hub",
      image: "Mohamed-Okash",
      bio: "Mohamed Okash Sugow is a social entrepreneur dedicated to creating sustainable solutions for community challenges. Through his ventures, he combines business principles with social impact to drive positive change.",
      slug: "mohamed-okash-sugow",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/mohamed-okash-sugow"
      }
    },
    {
      name: "Pierre Ndayisenga",
      role: "Community Development Professional",
      organization: "Development Impact Initiative",
      image: "Pierre-Ndayisenga",
      bio: "Pierre Ndayisenga works in community development with a focus on sustainable impact. His work involves implementing programs that create lasting positive change through participatory approaches and capacity building.",
      slug: "pierre-ndayisenga",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/pierre-ndayisenga"
      }
    },
    {
      name: "Usama Mukwaya",
      role: "Social Innovation Leader",
      organization: "Innovation Impact Network",
      image: "Usama-Mukwaya",
      bio: "Usama Mukwaya leads social innovation initiatives that transform communities. His work focuses on developing and implementing innovative solutions to address pressing social challenges while promoting sustainable development.",
      slug: "usama-mukwaya",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/usama-mukwaya"
      }
    },
    {
      name: "Wairimu Lyndah Mwaura",
      role: "Development Specialist",
      organization: "Community Development Network",
      image: "Wairimu-Lyndah",
      bio: "Wairimu Lyndah Mwaura specializes in development and community empowerment initiatives. Her work focuses on implementing sustainable programs that create positive change through participatory approaches and local capacity building.",
      slug: "wairimu-lyndah-mwaura",
      class: "2019",
      social: {
        linkedin: "https://www.linkedin.com/in/wairimu-lyndah-mwaura"
      }
    }
  ],
  '2018': [
    {
      name: "Aaron Akampa",
      role: "Technology Innovation Leader",
      organization: "Tech Innovation Hub",
      image: "Aaron-Akampa",
      bio: "Aaron Akampa leads technology innovation initiatives for social impact. His work focuses on leveraging technology to solve community challenges and create opportunities for young people in the technology sector.",
      slug: "aaron-akampa",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/aaron-akampa",
        twitter: "https://twitter.com/AaronAkampa"
      }
    },
    {
      name: "Benefique Magadju",
      role: "Social Entrepreneur",
      organization: "Impact Ventures",
      image: "Benefique-Magadju",
      bio: "Benefique Magadju is an entrepreneur focused on social impact initiatives. Through his ventures, he has created sustainable solutions to community challenges while building successful social enterprises.",
      slug: "benefique-magadju",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/benefique-magadju"
      }
    },
    {
      name: "Beverly Mutindi",
      role: "Youth Development Advocate",
      organization: "Youth Empowerment Network",
      image: "Beverly-Mutindi",
      bio: "Beverly Mutindi works to empower youth through innovative programs and initiatives that build leadership skills and create opportunities. She has developed several successful youth mentorship programs that have impacted hundreds of young people across East Africa.",
      slug: "beverly-mutindi",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/beverly-mutindi",
        twitter: "https://twitter.com/BeverlyMutindi"
      }
    },
    {
      name: "Boaz Opio",
      role: "Social Innovation Specialist",
      organization: "Innovation Impact Hub",
      image: "Boaz-Opio",
      bio: "Boaz Opio specializes in social innovation and community development, creating sustainable solutions for community challenges. His work focuses on implementing innovative approaches that drive positive social change.",
      slug: "boaz-opio",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/boaz-opio"
      }
    },
    {
      name: "Canary Mugume",
      role: "Media Professional",
      organization: "Media Development Network",
      image: "Canary-Mugume",
      bio: "Canary Mugume works in media and communications for social impact, focusing on transformative storytelling. His work involves leveraging media platforms to create awareness about social issues and promote positive change.",
      slug: "canary-mugume",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/canary-mugume",
        twitter: "https://twitter.com/CanaryMugume"
      }
    },
    {
      name: "Carolyn Kamanzi",
      role: "Development Practitioner",
      organization: "Community Development Initiative",
      image: "Carolyn-Kamanzi",
      bio: "Carolyn Kamanzi is a development practitioner focused on community initiatives that create sustainable change. Her work emphasizes participatory approaches and capacity building to empower local communities.",
      slug: "carolyn-kamanzi",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/carolyn-kamanzi"
      }
    },
    {
      name: "Christian Rebero Twahirwa",
      role: "Social Impact Leader",
      organization: "Social Development Network",
      image: "Christian-Rebero",
      bio: "Christian Rebero Twahirwa leads social impact initiatives that transform communities. His work focuses on developing and implementing innovative programs that address pressing social challenges while promoting sustainable development.",
      slug: "christian-rebero-twahirwa",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/christian-rebero-twahirwa"
      }
    },
    {
      name: "Ellis Ralph Akorabirungi",
      role: "Innovation Leader",
      organization: "Technology Innovation Hub",
      image: "Ellis-Ralph",
      bio: "Ellis Ralph Akorabirungi works in innovation and community development, focusing on leveraging technology for social impact. His work involves creating and implementing innovative solutions that address community challenges.",
      slug: "ellis-ralph-akorabirungi",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/ellis-ralph-akorabirungi"
      }
    },
    {
      name: "Fiona Kamikazi Rutagengwa",
      role: "Social Entrepreneur",
      organization: "Impact Ventures Network",
      image: "Fiona-Kamikazi",
      bio: "Fiona Kamikazi Rutagengwa is an entrepreneur focused on creating sustainable social impact. Through her ventures, she combines business principles with social innovation to address community challenges.",
      slug: "fiona-kamikazi-rutagengwa",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/fiona-kamikazi-rutagengwa"
      }
    },
    {
      name: "Gabriel Karsan",
      role: "Community Development Specialist",
      organization: "Community Empowerment Initiative",
      image: "Gabriel-Karsan",
      bio: "Gabriel Karsan specializes in community development initiatives that create lasting positive change. His work focuses on implementing sustainable programs that address social challenges through participatory approaches.",
      slug: "gabriel-karsan",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/gabriel-karsan"
      }
    },
    {
      name: "Immaculate Innocent Acan",
      role: "Social Impact Professional",
      organization: "Social Development Network",
      image: "Immaculate-Innocent-Acan",
      bio: "Immaculate Innocent Acan works in social impact and community development, creating sustainable positive change. Her work focuses on implementing innovative programs that address pressing social challenges.",
      slug: "immaculate-innocent-acan",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/immaculate-innocent-acan"
      }
    },
    {
      name: "Jackline K",
      role: "Development Leader",
      organization: "Community Impact Network",
      image: "Jackline-K",
      bio: "Jackline K leads development initiatives that create sustainable positive change in communities. Her work focuses on implementing innovative programs that address social challenges while promoting community empowerment.",
      slug: "jackline-k",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/jackline-k"
      }
    },
    {
      name: "Joel Simbwa Claude",
      role: "Social Innovation Leader",
      organization: "Innovation for Development Hub",
      image: "Joel-Simbwa",
      bio: "Joel Simbwa Claude leads social innovation programs that create lasting impact. His work focuses on developing and implementing innovative solutions that address community challenges while promoting sustainable development.",
      slug: "joel-simbwa-claude",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/joel-simbwa-claude"
      }
    },
    {
      name: "Kenneth Kakyomya",
      role: "Community Development Professional",
      organization: "Community Development Network",
      image: "Kenneth-Kakyomya",
      bio: "Kenneth Kakyomya is a dedicated community development professional with extensive experience in implementing sustainable development programs. His work focuses on empowering local communities through participatory approaches and capacity building initiatives that create lasting positive change.",
      slug: "kenneth-kakyomya",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/kenneth-kakyomya"
      }
    },
    {
      name: "Kenneth Kawalya",
      role: "Social Entrepreneur",
      organization: "Innovation Impact Ventures",
      image: "Kenneth-Kawalya",
      bio: "Kenneth Kawalya is a social entrepreneur driving innovation in community development. Through his ventures, he has pioneered several initiatives that combine business principles with social impact, creating sustainable solutions for community challenges.",
      slug: "kenneth-kawalya",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/kenneth-kawalya",
        twitter: "https://twitter.com/KenKawalya"
      }
    },
    {
      name: "Kevin Akimana",
      role: "Innovation Specialist",
      organization: "Tech for Development Hub",
      image: "Kevin-Akimana",
      bio: "Kevin Akimana specializes in leveraging innovation and technology for community development. His work focuses on creating and implementing innovative solutions that address pressing social challenges while promoting sustainable development.",
      slug: "kevin-akimana",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/kevin-akimana"
      }
    },
    {
      name: "Malath Akinyi Ochieng",
      role: "Development Professional",
      organization: "Community Empowerment Initiative",
      image: "Malath-Akinyi",
      bio: "Malath Akinyi Ochieng is a development professional dedicated to community empowerment and sustainable development. Her work focuses on implementing programs that create lasting positive change through participatory approaches and local capacity building.",
      slug: "malath-akinyi-ochieng",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/malath-akinyi"
      }
    },
    {
      name: "Maria Kyamulabye",
      role: "Social Impact Leader",
      organization: "Social Impact Network",
      image: "Maria-Kyamulabye",
      bio: "Maria Kyamulabye leads social impact initiatives that transform communities. Her work focuses on developing and implementing innovative programs that address social challenges while promoting sustainable development and community empowerment.",
      slug: "maria-kyamulabye",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/maria-kyamulabye"
      }
    },
    {
      name: "Nancy Sibo",
      role: "Community Development Leader",
      organization: "Rural Development Initiative",
      image: "Nancy-Sibo",
      bio: "Nancy Sibo leads community development programs that create sustainable positive change in rural communities. Her work focuses on implementing innovative approaches to rural development while ensuring community participation and ownership.",
      slug: "nancy-sibo",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/nancy-sibo"
      }
    },
    {
      name: "Nelson Gashagaza",
      role: "Social Innovation Professional",
      organization: "Innovation for Change Hub",
      image: "Nelson-Gashagaza",
      bio: "Nelson Gashagaza is a social innovation professional dedicated to creating positive change through innovative approaches. His work focuses on developing and implementing solutions that address community challenges while promoting sustainable development.",
      slug: "nelson-gashagaza",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/nelson-gashagaza"
      }
    },
    {
      name: "Nkatya Kabwe",
      role: "Development Specialist",
      organization: "Community Development Network",
      image: "Nkatya-Kabwe",
      bio: "Nkatya Kabwe specializes in development initiatives that create lasting positive change in communities. Her work focuses on implementing sustainable programs that address social challenges while promoting community empowerment.",
      slug: "nkatya-kabwe",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/nkatya-kabwe"
      }
    },
    {
      name: "Prosper Ahimbisibwe",
      role: "Social Entrepreneur",
      organization: "Social Enterprise Network",
      image: "Prosper-Ahimbisibwe",
      bio: "Prosper Ahimbisibwe is a social entrepreneur focused on creating sustainable solutions to community challenges. His work combines business principles with social impact, developing innovative approaches to address pressing social issues.",
      slug: "prosper-ahimbisibwe",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/prosper-ahimbisibwe"
      }
    },
    {
      name: "Rayner Mugyezi",
      role: "Community Development Professional",
      organization: "Development Impact Network",
      image: "Rayner-Mugyezi",
      bio: "Rayner Mugyezi is a community development professional dedicated to creating sustainable positive change. His work focuses on implementing innovative programs that address social challenges while promoting community participation and ownership.",
      slug: "rayner-mugyezi",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/rayner-mugyezi"
      }
    },
    {
      name: "Rodridgers Osinde",
      role: "Social Innovation Leader",
      organization: "Innovation Hub",
      image: "Rodridgers-Osinde",
      bio: "Rodridgers Osinde leads social innovation initiatives that create lasting positive impact. His work focuses on developing and implementing innovative solutions to address community challenges while promoting sustainable development.",
      slug: "rodridgers-osinde",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/rodridgers-osinde"
      }
    },
    {
      name: "Roger Akatwihayo",
      role: "Development Leader",
      organization: "Community Impact Network",
      image: "Roger-Akatwihayo",
      bio: "Roger Akatwihayo leads development initiatives that create sustainable positive change in communities. His work focuses on implementing innovative programs that address social challenges while promoting community empowerment.",
      slug: "roger-akatwihayo",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/roger-akatwihayo"
      }
    },
    {
      name: "Roland Niwagaba",
      role: "Social Impact Professional",
      organization: "Social Development Initiative",
      image: "Roland-Niwagaba",
      bio: "Roland Niwagaba is a social impact professional dedicated to creating positive change in communities. His work focuses on developing and implementing sustainable solutions to address pressing social challenges.",
      slug: "roland-niwagaba",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/roland-niwagaba"
      }
    },
    {
      name: "Shirley Kandabu",
      role: "Community Development Specialist",
      organization: "Community Empowerment Network",
      image: "Shirley-Kandabu",
      bio: "Shirley Kandabu specializes in community development initiatives that create lasting positive change. Her work focuses on implementing sustainable programs that address social challenges while promoting community participation and ownership.",
      slug: "shirley-kandabu",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/shirley-kandabu"
      }
    },
    {
      name: "Wanjuhi Njoroge",
      role: "Social Entrepreneur",
      organization: "Impact Ventures Network",
      image: "Wanjuhi-Njoroge",
      bio: "Wanjuhi Njoroge is a social entrepreneur focused on creating sustainable solutions to community challenges. Through her ventures, she has pioneered several initiatives that combine business principles with social impact.",
      slug: "wanjuhi-njoroge",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/wanjuhi-njoroge",
        twitter: "https://twitter.com/WanjuhiNjoroge"
      }
    },
    {
      name: "Joanitah Babirye",
      role: "Community Development Specialist",
      organization: "Community Impact Network",
      image: "Joanitah-Babirye",
      bio: "Joanitah Babirye specializes in community development initiatives that create sustainable positive change. Her work focuses on implementing programs that address social challenges while promoting community empowerment through participatory approaches and capacity building.",
      slug: "joanitah-babirye",
      class: "2018",
      social: {
        linkedin: "https://www.linkedin.com/in/joanitah-babirye"
      }
    }
  ],
  '2017': [
    {
      name: "Abaas Mpindi",
      role: "Media Development Leader",
      organization: "Media Challenge Initiative",
      image: "Abaas-Mpindi",
      bio: "Abaas Mpindi leads media development initiatives for social impact. He has pioneered several innovative programs that have transformed the media landscape and created opportunities for young journalists.",
      slug: "abaas-mpindi",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/abaas-mpindi",
        twitter: "https://twitter.com/AbaasMpindi"
      }
    },
    {
      name: "Allan Manzi",
      role: "Social Innovation Professional",
      organization: "Innovation Hub",
      image: "Allan-Manzi",
      bio: "Allan Manzi works in social innovation and community development. His work focuses on creating sustainable solutions to community challenges through innovative approaches and technology.",
      slug: "allan-manzi",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/allan-manzi"
      }
    },
    {
      name: "Arnold Atwine",
      role: "Community Development Leader",
      organization: "Community Impact Network",
      image: "Arnold-Atwine",
      bio: "Arnold Atwine leads community development programs and initiatives that create sustainable positive change. His work focuses on implementing innovative approaches to community development while ensuring local participation and ownership.",
      slug: "arnold-atwine",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/arnold-atwine"
      }
    },
    {
      name: "Benjamin Rukwengye",
      role: "Social Entrepreneur",
      organization: "Boundless Minds",
      image: "Benjamin-Rukwengye",
      bio: "Benjamin Rukwengye is a social entrepreneur focused on youth development and education. Through his organization, he has pioneered innovative programs that prepare young people for career success and leadership roles.",
      slug: "benjamin-rukwengye",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/benjamin-rukwengye",
        twitter: "https://twitter.com/rukwengye"
      }
    },
    {
      name: "Cleofash Alinaitwe",
      role: "Development Professional",
      organization: "Development Impact Initiative",
      image: "Cleofash-Alinaitwe",
      bio: "Cleofash Alinaitwe works in development and community empowerment, focusing on creating sustainable solutions to social challenges. His work emphasizes participatory approaches and capacity building.",
      slug: "cleofash-alinaitwe",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/cleofash-alinaitwe"
      }
    },
    {
      name: "Conrad Mugisha",
      role: "Social Impact Leader",
      organization: "Impact Development Network",
      image: "Conrad-Mugisha",
      bio: "Conrad Mugisha leads social impact initiatives that transform communities. His work focuses on developing and implementing innovative programs that address pressing social challenges while promoting sustainable development.",
      slug: "conrad-mugisha",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/conrad-mugisha"
      }
    },
    {
      name: "Donald Byamugisha",
      role: "Innovation Specialist",
      organization: "Technology for Development Hub",
      image: "Donald-Byamugisha",
      bio: "Donald Byamugisha specializes in leveraging innovation and technology for community development. His work focuses on creating and implementing innovative solutions that address social challenges while promoting sustainable development.",
      slug: "donald-byamugisha",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/donald-byamugisha"
      }
    },
    {
      name: "Fiona Mbabazi",
      role: "Communications Professional",
      organization: "Media Impact Network",
      image: "Fiona-Mbabazi",
      bio: "Fiona Mbabazi works in communications and media for social impact. Her work focuses on leveraging media and communications to create positive change and promote development initiatives.",
      slug: "fiona-mbabazi",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/fiona-mbabazi",
        twitter: "https://twitter.com/FionaMbabazi"
      }
    },
    {
      name: "Isaac Rugamba",
      role: "Social Innovation Leader",
      organization: "Innovation for Development",
      image: "Isaac-Rugamba",
      bio: "Isaac Rugamba leads social innovation initiatives that create lasting positive change. His work focuses on developing and implementing innovative solutions to address community challenges while promoting sustainable development.",
      slug: "isaac-rugamba",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/isaac-rugamba"
      }
    },
    {
      name: "Joanitah Nvanungi Nalubega",
      role: "Development Leader",
      organization: "Development Impact Network",
      image: "Joanitah-Nvanungi",
      bio: "Joanitah Nvanungi Nalubega leads development initiatives that create lasting positive change. Her work focuses on implementing innovative programs that address community challenges while promoting sustainable development.",
      slug: "joanitah-nvanungi-nalubega",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/joanitah-nvanungi"
      }
    },
    {
      name: "Kemiyondo Coutinho",
      role: "Arts and Social Impact Professional",
      organization: "Arts for Change Initiative",
      image: "Kemiyondo-Coutinho",
      bio: "Kemiyondo Coutinho works in arts and social impact initiatives, using creative expression as a tool for social change. Her work focuses on leveraging arts and culture to address social challenges and promote community development.",
      slug: "kemiyondo-coutinho",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/kemiyondo-coutinho",
        twitter: "https://twitter.com/kemiyondo"
      }
    },
    {
      name: "Liz Kakooza",
      role: "Social Entrepreneur",
      organization: "Women Empowerment Initiative",
      image: "Liz-Kakooza",
      bio: "Liz Kakooza is a social entrepreneur focused on women's empowerment and economic development. Her work centers on creating opportunities for women through entrepreneurship and skills development programs.",
      slug: "liz-kakooza",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/liz-kakooza",
        twitter: "https://twitter.com/lizkakooza"
      }
    },
    {
      name: "Liz Muange",
      role: "Community Development Professional",
      organization: "Community Impact Network",
      image: "Liz-Muange",
      bio: "Liz Muange specializes in community development initiatives that create sustainable change. Her work focuses on implementing programs that address social challenges while promoting community engagement and participation.",
      slug: "liz-muange",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/liz-muange"
      }
    },
    {
      name: "Lorretta Kade Binu",
      role: "Social Innovation Leader",
      organization: "Innovation for Change Hub",
      image: "Lorretta-Kade",
      bio: "Lorretta Kade Binu leads social innovation programs that create lasting impact. Her work focuses on developing and implementing innovative solutions to address community challenges while promoting sustainable development.",
      slug: "lorretta-kade-binu",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/lorretta-kade-binu"
      }
    },
    {
      name: "Martin Balaba",
      role: "Development Specialist",
      organization: "Development Impact Network",
      image: "Martin-Balaba",
      bio: "Martin Balaba specializes in development initiatives that create sustainable positive change. His work focuses on implementing programs that address social challenges while promoting community participation and ownership.",
      slug: "martin-balaba",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/martin-balaba"
      }
    },
    {
      name: "Patricia Kahill",
      role: "Digital Innovation Professional",
      organization: "Digital Impact Network",
      image: "Patricia-Kahill",
      bio: "Patricia Kahill works at the intersection of digital innovation and social impact. Her work focuses on leveraging technology and digital solutions to address community challenges and promote sustainable development.",
      slug: "patricia-kahill",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/patricia-kahill",
        twitter: "https://twitter.com/PKahill"
      }
    },
    {
      name: "Raymond Mujuni",
      role: "Media Professional",
      organization: "Media Impact Network",
      image: "Raymond-Mujuni",
      bio: "Raymond Mujuni works in media and communications for social impact. His work focuses on leveraging media platforms to create awareness about social issues and promote positive change in communities.",
      slug: "raymond-mujuni",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/raymond-mujuni",
        twitter: "https://twitter.com/qataharraymond"
      }
    },
    {
      name: "Rebecca Kabejja Mweru",
      role: "Social Impact Leader",
      organization: "Community Development Initiative",
      image: "Rebecca-Kabejja",
      bio: "Rebecca Kabejja Mweru leads social impact initiatives that create sustainable positive change. Her work focuses on implementing innovative programs that address community challenges while promoting sustainable development.",
      slug: "rebecca-kabejja-mweru",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/rebecca-kabejja-mweru"
      }
    },
    {
      name: "Richard Kirenga",
      role: "Innovation Leader",
      organization: "Innovation Impact Hub",
      image: "Richard-Kirenga",
      bio: "Richard Kirenga leads innovation and community development initiatives that create lasting positive change. His work focuses on developing and implementing innovative solutions to address social challenges while promoting sustainable development.",
      slug: "richard-kirenga",
      class: "2017",
      social: {
        linkedin: "https://www.linkedin.com/in/richard-kirenga",
        twitter: "https://twitter.com/richardkirenga"
      }
    }
  ]
};

module.exports = { fellowsData }; 