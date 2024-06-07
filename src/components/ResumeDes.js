import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  // font-family: Arial, Helvetica, sans-serif;
  font-size: 10pt;
  h1 {
    text-align: center;
    font-size: 2em;
  }
  h2 {
    border-bottom: 1px solid #000;
  }
`;
const Name = styled.div`
  text-align: center;
  font-size: 3em;
  display: block;
  margin-bottom: 1em;
  margin-top: 0.5em;
  .title {
    color: #999;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderColumn = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 1em;
  }
`;

const HeaderIcon = styled.span`
  font-size: 24px;
  margin-right: 5px;
`;

const HeaderText = styled.span`
  text-align: center;
`;

const Summary = styled.div`
  margin-bottom: 2em;
`;

const Position = styled.div`
  margin-bottom: 2em;
`;

const PositionTitle = styled.span`
  font-weight: bold;
  font-size: 1.1em;
`;

const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
  font-weight: bold;
  .company-name {
    align-self: flex-start;
  }
  .date-range {
    align-self: flex-end;
    font-weight: normal;
  }
`;

const PositionDescription = styled.ul`
  margin: 0;
  padding: 0;
  li {
    position: relative;
    list-style-type: none;
    padding-left: 15px;
    strong {
      font-weight: normal;
      text-decoration: underline;
    }
    &::before {
      content: url("data:image/svg+xml;utf8,<svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9.06876 4.72794C7.22659 4.1554 5.76748 2.73957 5.13937 0.916353L4.88626 0.181375C4.84971 0.0730914 4.74819 0 4.63314 0C4.51945 0 4.41657 0.0730914 4.38003 0.181375L4.12692 0.916353C3.50022 2.73957 2.04246 4.15405 0.201678 4.72794C0.0812108 4.76448 0 4.87412 0 5C0 5.12588 0.0812142 5.23552 0.201678 5.27206C2.0425 5.8446 3.49891 7.26043 4.12414 9.08365L4.37996 9.81863C4.41651 9.92691 4.51938 10 4.63308 10C4.74813 10 4.84964 9.92691 4.88619 9.81863L5.1393 9.08365C5.766 7.25908 7.22646 5.84325 9.0687 5.27206C9.18917 5.23552 9.27038 5.12588 9.27038 5C9.27038 4.87412 9.18923 4.76448 9.06876 4.72794Z' fill='black'/> </svg>");
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const PositionDescriptionItem = styled.li`
`;

const SkillContainer = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline;
  strong {
    display: inline;
  }
`;

const Skill = styled.span`
  
`;


const Experience = styled.div`
  
`;

const summaryText = "Empathetic UX/Interaction Designer driven by user advocacy, with 15 years of experience crafting intuitive, accessible designs that drive business results. Boosted user engagement by 52% through data-driven design decisions. Skilled in UX research, wireframing, prototyping, usability testing, and design systems thinking, with expertise in Figma & Sketch. Passionate about designing inclusive products that delight users and drive business growth.";

const jobsData = [
  {
    positionTitle: "Senior UX/UI Designer",
    companyInfo: {
      companyName: "TEKSystems @ Edward Jones",
      dateRange: "July 2023 - January 2024, (Fully Remote)"
    },
    positionDescription: 
    // [
    //   "Through user research, I identified pain points and led a <strong>user-centered redesign</strong> of the document hub interface, resulting in a 30% reduction in document access time. Implemented intuitive search, favoriting, categorization, and document preview functionalities, empowering users to locate and pre-fill documents effortlessly, leading to improved overall workflow efficiency."
    // ],
    [
      "Redesigned document hub interface using user research, reducing document access time by 50% and improving workflow efficiency",
      "Collaborated with cross-functional teams to prioritize user needs and achieve business goals, demonstrating effective communication and project management skills"
    ]
  },
  {
    positionTitle: "Senior UX/UI Designer",
    companyInfo: {
      companyName: "Skillable",
      dateRange: "August 2021 - May 2023, (Indianapolis, IN)"
    },
    positionDescription:
    // [
    //   "Developed <strong>fully interactive Figma prototypes</strong> for Skillable's TMS platform (student & instructor dashboards, course listing page), streamlining user workflows and boosting user satisfaction & engagement.",
  
    //   "Established and managed <strong>scalable design systems</strong> with reusable components, ensuring user-centered design principles and consistent brand identity across projects.",
  
    //   "Designed a new set of product logos that elevated <strong>brand recognition</strong> and facilitated user growth, contributing to a cohesive brand identity."

    // ],
    [
      "Developed interactive Figma prototypes for various interfaces, enhancing user experience and engagement",
      "Established and managed scalable design systems, ensuring consistent brand identity across projects and demonstrating expertise in design systems and visual design"
    ]
  },
  {
    positionTitle: "Senior Front-End Engineer",
    companyInfo: {
      companyName: "Finish Line",
      dateRange: "January 2019 - August 2021, (Indianapolis, IN)"
      },
    positionDescription: 
    /*
    [
      "Engineered product favoriting mechanisms, resulting in increased user engagement with the retail portal.",
      "Optimized responsive views, improving responsiveness across devices by over 40%",
      "Integrated robust analytics, enabling enhanced data-driven decision making.",
      "Spearheaded the migration of Java Server Pages (JSP) to a React-based system, championing user-centered design principles for a modernized user interface.",
      "Ensured meticulous code quality throughout the migration by adhering to widely accepted code linting rules.",
    ]
    */
   [""]
  },
  {
    positionTitle: "Senior UX/UI Designer",
    companyInfo: {
      companyName: "TEKSystems @ Ascension Health",
      dateRange: "November 2018 - January 2019, (Indianapolis, IN)"
    },
    positionDescription:
    // [
    //   "<strong>Proactively identified</strong> workflow inefficiencies and proposed a new internal application to address them. Conducted user research interviews to gather feedback and inform the design process. Developed an interactive prototype to showcase the application's potential and garner team buy-in."
    // ],
    [
      "Conducted user research and developed an interactive prototype to secure team buy-in for a new internal application, demonstrating user-centered design skills and effective communication"
    ]
  },
  {
    positionTitle: "Senior UX/UI Designer",
    companyInfo: {
      companyName: "BC Forward @ Navient",
      dateRange: "February 2017 - November 2018, (Indianapolis, IN)"
    },
    positionDescription:
    // [
    //   "Spearheaded the UX design for a new web product, <strong>collaborating closely with 6 UI developers</strong> to translate user research into a user-friendly and visually captivating interface.",

    //   "Owned the design process from conception to launch, <strong>ensuring alignment</strong> with project objectives and user insights.",

    //   "Championed <strong>industry best practices for UI design</strong>, fostering a seamless and consistent user experience."
    // ],
    [
      "Led UX design for a new web product, collaborating with UI developers to create a user-friendly and visually captivating interface, demonstrating leadership and design skills"
    ]
  },
  {
    positionTitle: "Previous Roles (2012-2017)",
    companyInfo: {
      companyName: "(Fintech, Software, Social Media Search, VOIP, Biotech, E-Commerce)",
      dateRange: "2012 - 2017"
    },
    positionDescription:
    [
      "<strong>Streamlined complex workflows</strong> using discoveries made during user research which I led.",
      "<strong>Empowered clients through rapid prototyping</strong> (Figma) for early feedback and user research (personas, journeys).",
      "Established and <strong>implemented unified design systems</strong> for brand consistency and efficiency.",
      "Advocated for <strong>data-driven decision-making</strong> with A/B testing and heatmap analysis (E-Commerce).",
      "Spearheaded UI redesigns, achieving a cohesive visual style and seamless <strong>responsiveness across devices</strong>.",
      "Developed UI features and <strong>over 20 full websites</strong> for various industries"
    ]
  }
  // {
  //   positionTitle: "Front-End Engineer",
  //   companyInfo: {
  //     companyName: "Robovise",
  //     dateRange: "October 2016 - February 2017, (Indianapolis, IN)"
  //   },
  //   positionDescription:
  //   // [
  //   //   "I contributed to the incubation of this fintech startup by crafting a <strong>cutting-edge UI</strong> for their robo-investing product.  This project involved modern technologies such as <strong>Node.js, React, Bootstrap 4, Docker, and Redux</strong>.  My involvement in this early-stage venture demonstrates my ability to adapt to <strong>fast-paced environments</strong> and contribute to the development of innovative products."
  //   // ]
  //   [""]
  // },
  // {
  //   positionTitle: "Senior UX/UI Designer",
  //   companyInfo: {
  //     companyName: "LevelUp Development",
  //     dateRange: "July 2016 - October 2016, (Indianapolis, IN)"
  //   },
  //   positionDescription:
  //   [
  //     "<strong>Empowered clients through rapid prototyping</strong>, enabling them to provide early feedback on product concepts before development, facilitating productive stakeholder meetings for gathering requirements and building accurate user personas.",

  //     "Designed a mobile-first finance guidance app using user research methods like <strong>user personas and user journeys</strong>. This resulted in detailed diagrams that ultimately led to a fully interactive high fidelity wireframe prototype in Figma."
  //   ]
  // },
  // {
  //   positionTitle: "Senior UX Engineer",
  //   companyInfo: {
  //     companyName: "DirectEmployers",
  //     dateRange: "December 2015 - July 2016, (Indianapolis, IN)"
  //   },
  //   positionDescription:
  //   [
  //     "<strong>Championed prototype-driven development</strong>, delivering a clear roadmap for projects that optimized resource allocation and ensured timely completion.",

  //     "Spearheaded a UI redesign, achieving a <strong>cohesive visual style</strong> and seamless responsiveness across all devices. This modernized the product, transforming it into a user-friendly experience."
  //   ]
  // },
  // {
  //   positionTitle: "UX Engineer",
  //   companyInfo: {
  //     companyName: "Geofeedia",
  //     dateRange: "March 2015 - December 2015, (Indianapolis, IN)"
  //   },
  //   positionDescription:
  //   [
  //   //   "Developed UI features for a social media search tool, leveraging strong design skills and product expertise. These features utilized embedded maps and dynamic placement, enhancing user experience and functionality.",

  //   "<strong>Established a unified design system</strong> by leveraging existing UI elements, promoting design consistency and efficiency across projects.",

  //     "Designed a user-friendly interface for <strong>efficient user management</strong>, empowering administrators with granular control over user creation, permission assignment, and account administration."
      
  //   //   "Implemented SVG sprite sheets to optimize asset reusability."
  //   ]
  // },
  // {
  //   positionTitle: "Senior UX/UI Designer",
  //   companyInfo: {
  //     companyName: "Sharpen",
  //     dateRange: "October 2014 - March 2015, (Indianapolis, IN)"
  //   },
  //   positionDescription:
  //   [
  //     "Streamlined complex VOIP call center workflows by simplifying processes and <strong>integrating user-centric features</strong> like waveform visualization and report building. This resulted in a more intuitive user experience and increased user satisfaction.",
  //   ]
  // },
  // {
  //   positionTitle: "Senior UX/UI Designer",
  //   companyInfo: {
  //     companyName: "Indigo Bioautomation",
  //     dateRange: "October 2012 - October 2014, (Indianapolis, IN)"
  //   },
  //   positionDescription:
  //   [
  //     "Led the user-centered revitalization of a cutting-edge biotech software product, collaborating closely with users and stakeholders. This approach ensured the product retained its innovative capabilities while delivering a more <strong>intuitive user experience</strong>, broadening its reach to a wider audience by eliminating the need for extensive prior knowledge.",

  //     "<strong>Championed brand identity</strong> by leading the refresh of branding materials and creating a cohesive marketing toolkit. This included a new company website, compelling graphic design materials, and engaging conference videos - all designed to dynamically showcase the company's offerings."
  //   ]
  // },
  // {
  //   positionTitle: "Front-End Engineer",
  //   companyInfo: {
  //     companyName: "Lids Sports Group",
  //     dateRange: "October 2009 - October 2012, (Indianapolis, IN)"
  //   },
  //   positionDescription:
  //   [
    // "Designed interfaces for team-specific fan shops, creating over 20 custom visual styles in Adobe Photoshop.  To ensure efficient site launches, I used <strong>shared foundational code components</strong>.",
    // "<strong>Streamlined the checkout process</strong> by implementing a single-page design with a sidebar and accordions featuring real-time error checking. This user-centric approach improved user experience and boosted conversion rates.",
    // "Advocated for <strong>data-driven decision-making</strong> by implementing A/B testing and heatmap analysis for continuous user experience optimization."
  //   ]
  // }
];

const designSkillsData = [
  "Figma",
  "Sketch",
  "Invision",
  "UI Development",
  "UX Design",
  "Rapid-Prototyping",
  "Information Architecture",
  "Usability Testing & Research",
  "User-Centered Design",
  "Icon Design",
  "Responsive & Mobile Design",
  "User Journey Mapping",
  "Agile/SCRUM",
  "High/Low fidelity wireframes",
];

const techSkillsData = [
  "Front-End Development (HTML5, CSS3, JavaScript)",
  "JavaScript Frameworks (React)",
  "Design System Experience",
  "Version Control (Git)",
  "Agile Development",
  "Bootstrap",
  "Foundation",
  "jQuery",
  "node.js",
  "Gulp",
  "material.io",
  "D3js",
  "HTML/CSS Mastery",
  "Project Management"
];

const customSkills = [
  "Figma",
  "Sketch",
  "UX Design",
  "Rapid-Prototyping",
  "Information Architecture",
  "Usability Testing & Research",
  "User-Centered Design",
  "User Journey Mapping",
  "Agile Development",
  "Version Control (Git)",
  "HTML5, CSS3",
  "High/Low fidelity wireframes",
]

const Resume = () => {
  const SkillList = ({ skills }) => {
    return (
      <SkillContainer>
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <Skill>{skill}</Skill>
            {index !== skills.length - 1 && ', '}
          </React.Fragment>
        ))}
      </SkillContainer>
    );
  };
  
  const DesignSkills = () => {
    return (
      <SkillContainer>
        <strong>Design: </strong>
        <SkillList skills={designSkillsData} />
      </SkillContainer>
    );
  };
  
  const TechnicalSkills = () => {
    return (
      <SkillContainer>
        <strong>Technical: </strong>
        <SkillList skills={techSkillsData} />
      </SkillContainer>
    );
  };

  const AllSkills = () => {
    const allSkills = [...designSkillsData, ...techSkillsData];
    // const allSkills = [...customSkills];
    return (
      <SkillContainer>
        <SkillList skills={allSkills} />
      </SkillContainer>
    );
  };

  return (
    <Container>
      {/* Header */}
      <Name>Jonathon Scott <span className="title">| Sr. UX/UI Designer</span></Name>
      <Header>
        <HeaderColumn>
          <HeaderIcon>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.71362 0C3.45284 0 -0.0505778 3.46376 0.000552661 7.73437C0.0512918 11.9714 3.62623 16.8257 7.71362 20C11.801 16.8257 15.3759 11.9714 15.4267 7.73437C15.4778 3.46376 11.9744 0 7.71362 0ZM7.71362 3.63635C9.97025 3.63635 11.7974 5.47248 11.7974 7.73437C11.7974 9.99626 9.97025 11.8253 7.71362 11.8253C5.45699 11.8253 3.62981 9.99626 3.62981 7.73437C3.62981 5.47248 5.45699 3.63635 7.71362 3.63635Z" fill="black"/>
            </svg>
          </HeaderIcon>
          <HeaderText>Whitestown, IN</HeaderText>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderIcon>
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 1.25C20 0.559375 19.4406 0 18.75 0H1.25C0.559375 0 0 0.559375 0 1.25L10 9.375L20 1.25Z" fill="black"/>
              <path d="M0 3.12533V13.7503C0 14.441 0.559375 15.0003 1.25 15.0003H18.75C19.4406 15.0003 20 14.441 20 13.7503V3.10596L10 11.2503L0 3.12533Z" fill="black"/>
            </svg>
          </HeaderIcon>
          <HeaderText>jon@workwithjonscott.com</HeaderText>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderIcon>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1867 0H1.81331C1.33236 0 0.871257 0.191081 0.531087 0.531087C0.191081 0.871257 0 1.33236 0 1.81331V2.58333H12V1.81331C12 1.33236 11.8089 0.871257 11.4689 0.531087C11.1287 0.191081 10.6676 0 10.1867 0Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 15.6667H12V3.58333H0V15.6667ZM7.59326 6.97998C7.63428 7.021 7.66748 7.06852 7.69173 7.12012C7.72298 7.1862 7.73958 7.25895 7.73958 7.33333C7.73958 7.46582 7.68701 7.59294 7.59326 7.68669L4.25993 11.02C4.1652 11.1084 4.03988 11.1564 3.91032 11.1541C3.83415 11.1528 3.76009 11.1341 3.69336 11.1003C3.64648 11.0767 3.60335 11.0456 3.56559 11.0078C3.47396 10.9162 3.42155 10.7925 3.41927 10.6631C3.41699 10.5335 3.46501 10.408 3.55339 10.3133L6.88672 6.97998C6.98047 6.88639 7.10742 6.83382 7.24007 6.83382C7.29997 6.83382 7.35872 6.84456 7.4139 6.86507C7.48063 6.88981 7.54199 6.92871 7.59326 6.97998ZM2.57341 7.64665L5 5.2334C5.09473 5.14502 5.22021 5.09701 5.34961 5.09928C5.47917 5.10156 5.60286 5.15397 5.69434 5.24561C5.78597 5.33724 5.83854 5.46077 5.84082 5.59033C5.8431 5.71989 5.79492 5.84522 5.70671 5.93994L3.29329 8.35335C3.2513 8.39242 3.20345 8.42367 3.15186 8.44613C3.08675 8.47445 3.01595 8.48877 2.94368 8.48747C2.81413 8.48519 2.69059 8.43262 2.59896 8.34115C2.50732 8.24951 2.45492 8.12581 2.45247 7.99642C2.4502 7.86686 2.49837 7.74137 2.58659 7.64665H2.57341Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.531087 19.4689C0.191081 19.1287 0 18.6676 0 18.1867V16.6667H12V18.1867C12 18.6676 11.8089 19.1287 11.4689 19.4689C11.1287 19.8089 10.6676 20 10.1867 20H1.81331C1.33236 20 0.871257 19.8089 0.531087 19.4689ZM6.46305 17.6938C6.32601 17.6022 6.16488 17.5534 6 17.5534V17.5566C5.77962 17.5566 5.56803 17.644 5.41195 17.7996C5.2557 17.9551 5.16748 18.1662 5.16667 18.3867C5.16667 18.5514 5.21549 18.7126 5.30713 18.8496C5.3986 18.9867 5.52881 19.0934 5.68115 19.1566C5.83333 19.2196 6.00098 19.2362 6.1626 19.2039C6.32422 19.1719 6.47266 19.0924 6.58919 18.9759C6.70573 18.8594 6.78516 18.7109 6.81738 18.5493C6.84945 18.3875 6.83301 18.2201 6.76986 18.0677C6.70687 17.9155 6.6001 17.7853 6.46305 17.6938Z" fill="black"/>
            </svg>
          </HeaderIcon>
          <HeaderText>(317)500-2112</HeaderText>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderIcon>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.7778 20H2.22222C0.994923 20 0 19.0051 0 17.7778V2.22222C0 0.994923 0.994923 0 2.22222 0H17.7778C19.0051 0 20 0.994923 20 2.22222V17.7778C20 19.0051 19.0051 20 17.7778 20ZM14.2543 17.2222H17.2222V11.1253C17.2222 8.54569 15.7599 7.29839 13.7174 7.29839C11.6739 7.29839 10.8139 8.8897 10.8139 8.8897V7.59259H7.9537V17.2222H10.8139V12.1673C10.8139 10.8128 11.4374 10.0068 12.6308 10.0068C13.7277 10.0068 14.2543 10.7813 14.2543 12.1673V17.2222ZM2.77778 4.55472C2.77778 5.53602 3.56724 6.33167 4.54149 6.33167C5.51573 6.33167 6.30472 5.53602 6.30472 4.55472C6.30472 3.57343 5.51573 2.77778 4.54149 2.77778C3.56724 2.77778 2.77778 3.57343 2.77778 4.55472ZM6.04706 17.2222H3.0646V7.59259H6.04706V17.2222Z" fill="black"/>
            </svg>
          </HeaderIcon>
          <HeaderText>in/meetjonscott</HeaderText>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderIcon>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8456 6.2081H14.6391C14.3708 4.41816 13.7405 2.70045 12.7868 1.16163C15.4095 1.94912 17.5967 3.77157 18.8456 6.2081ZM14.8538 7.64402C15.0832 9.70489 15.0832 11.7856 14.8538 13.8464H19.4407C20.0982 11.8307 20.0982 9.65978 19.4407 7.64402H14.8538ZM12.7866 20.336C15.4111 19.5485 17.6001 17.7224 18.8455 15.2824H14.639C14.3698 17.0741 13.7394 18.7937 12.7866 20.336ZM9.97257 20.7451C11.2477 20.7243 12.5014 18.6201 13.1741 15.2823H6.70605C7.29488 18.4693 8.50773 20.6224 9.97257 20.7451ZM1.0282 15.2823C2.21125 17.7415 4.40314 19.5674 7.03643 20.2855C6.10262 18.7593 5.49664 17.0551 5.25643 15.2823H1.0282ZM-0.00585938 10.7451C-0.00585938 11.7963 0.15128 12.8412 0.461034 13.8463H5.04789C4.82934 11.7846 4.82934 9.70568 5.04789 7.6439H0.461034C0.151282 8.64906 -0.00585938 9.69393 -0.00585938 10.7451ZM6.49111 7.6439C6.26263 9.70477 6.26263 11.7855 6.49111 13.8463H13.4042H13.4033C13.6517 11.7864 13.6517 9.70383 13.4033 7.6439H6.49111ZM9.95807 0.745117C8.50047 0.874259 7.29474 3.02814 6.70612 6.20796H13.1742C12.514 2.87001 11.1926 0.774016 9.95807 0.745117ZM1.02826 6.20796H5.25654C5.49948 4.43608 6.10093 2.73106 7.02209 1.19756C4.39413 1.92364 2.20873 3.75062 1.02826 6.20796Z" fill="black"/>
            </svg>
          </HeaderIcon>
          <HeaderText>workwithjonscott.com</HeaderText>
        </HeaderColumn>
      </Header>
      <h2>Summary</h2>
      <Summary>
        <p>
          {summaryText}
        </p>
      </Summary>
      <h2>Experience</h2>
      <Experience>
        {jobsData.map((job, index) => (
          <Position key={index}>
            <PositionTitle>{job.positionTitle}</PositionTitle>
            <CompanyInfo>
              <span className="company-name">{job.companyInfo.companyName}</span>
              <span className="date-range">{job.companyInfo.dateRange}</span>
            </CompanyInfo>
            <PositionDescription>
              {job.positionDescription.filter(description => description).map(
                (description, idx) => (
                  <PositionDescriptionItem key={idx}>
                    <span dangerouslySetInnerHTML={{ __html: description }} />
                  </PositionDescriptionItem>
                )
              )}
            </PositionDescription>
          </Position>
        ))}
      </Experience>
      <h2>Skills</h2>
      <SkillContainer>
        <AllSkills />
      </SkillContainer>
    </Container>
  );
}

export default Resume;