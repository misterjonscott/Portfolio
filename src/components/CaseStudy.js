import React, { useState, useEffect } from 'react';
import ReactGA from "react-ga4";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { breakpoints } from '../breakpoints';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from 'styled-components';

const CaseStudyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  max-width: ${breakpoints.desktop};
  justify-content: center;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
transition: opacity 0.5s ease;
`;

const HoverImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0; /* Initially hidden */
`;

const Block = styled.div`
  width: 315px;
  height: 120px;
  position: relative;
  overflow: hidden;
  display: block;
  text-decoration: none;
`;

const CaseStudyCard = styled(Link)`
  width: 315px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.tile.color};
  border-radius: 8px;
  margin-bottom: 1em;
  text-decoration: none;
  padding: 0.25em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  /* Text styles */
  .text {
    padding: 0.5em;
    color: ${props => props.theme.text};
    ul {
      margin: 0;
      padding-left: 0.5em;
      li {
        list-style-type: none;
      }
    }
  }
  /* Image styles */
  &:hover {
    ${Image} {
      opacity: 0; /* Hide original Image */
    }

    ${HoverImage} {
      opacity: 1; /* Show HoverImage */
    }
  }
`;

const CaseStudyTitle = styled.span`
  font-size: 1.1em;
  font-weight: 600;
`;

const HighlightedWords = styled(motion.li)`
  font-size: 0.9em;
  ${props => props.theme.text};
`;

const caseStudies = [
  {
    title: 'Skillable Case Study',
    link: '/skillable-case-study',
    image: './img/casestudies/CaseStudySkillable.png',
    hoverImage: './img/casestudies/CaseStudySkillableActive.png',
    listItems: [
      { id: uuidv4(), text: 'Responsive Design' },
      { id: uuidv4(), text: 'Reusable Components' },
      { id: uuidv4(), text: 'Improved Course Discovery' },
    ],
  },
  {
    title: 'Sharpen Case Study',
    link: '/sharpen-case-study',
    image: './img/casestudies/CaseStudySharpen.png',
    hoverImage: './img/casestudies/CaseStudySharpenActive.png',
    listItems: [
      { id: uuidv4(), text: 'Effortless Reporting' },
      { id: uuidv4(), text: 'Intuitive Filtering' },
      { id: uuidv4(), text: 'Data-Driven Call Quality' },
    ],
  },
  {
    title: 'Indigo Case Study',
    link: '/indigo-case-study',
    image: './img/casestudies/CaseStudyIndigo.png',
    hoverImage: './img/casestudies/CaseStudyIndigoActive.png',
    listItems: [
      { id: uuidv4(), text: 'Prioritized Batch View' },
      { id: uuidv4(), text: 'Consolidated User Management' },
      { id: uuidv4(), text: 'Reduced Error Rates' },
    ],
  },
  {
    title: 'Geofeedia Case Study',
    link: '/geofeedia-case-study',
    image: './img/casestudies/CaseStudyGeofeedia.png',
    hoverImage: './img/casestudies/CaseStudyGeofeediaActive.png',
    listItems: [
      { id: uuidv4(), text: 'Streamlined Data Management' },
      { id: uuidv4(), text: 'Contextual Action Menus' },
      { id: uuidv4(), text: 'Collaborative Location Sharing' },
    ],
  },
  {
    title: 'Lids Case Study',
    link: '/lids-case-study',
    image: './img/casestudies/CaseStudyLids.png',
    hoverImage: './img/casestudies/CaseStudyLidsActive.png',
    listItems: [
      { id: uuidv4(), text: 'Frictionless Checkout' },
      { id: uuidv4(), text: 'Smart Shopping Cart' },
      { id: uuidv4(), text: 'Data-Driven Optimization' },
    ],
  },
  {
    title: 'LevelUp Case Study',
    link: '/levelup-case-study',
    image: './img/casestudies/CaseStudyLevelUp.png',
    hoverImage: './img/casestudies/CaseStudyLevelUpActive.png',
    listItems: [
      { id: uuidv4(), text: 'Intuitive Swipe-based Navigation' },
      { id: uuidv4(), text: 'Microlearning with Mastery Checks' },
      { id: uuidv4(), text: 'Engaging Visual Content' },
    ],
  },
];


const CaseStudy = ({ numToShow }) => {
  const theme = useTheme();

  const [highlightedId, setHighlightedId] = useState(null);
  
  useEffect(() => {
    const listItemIds = new Set(
      caseStudies.flatMap((caseStudy) => caseStudy.listItems.map((item) => item.id))
    );
    
    const intervalId = setInterval(() => {
      if (listItemIds.size > 0) {
        const randomIndex = Math.floor(Math.random() * listItemIds.size);
        const randomId = Array.from(listItemIds)[randomIndex];
        setHighlightedId(randomId);
      } else {
        console.log('No items to highlight');
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <CaseStudyContainer id="CaseStudyContainer">
        {caseStudies.slice(0, numToShow).map((caseStudy, caseStudyIndex) => (
          <CaseStudyCard className='CaseStudyCard' key={caseStudy.title}  to={caseStudy.link} onClick={() => {
            ReactGA.event({
              category: 'Case Studies',
              action: `Case Studies ${caseStudy.title}`,
              label: `Case Studies ${caseStudy.title}`,
            });
          }}>
            <Block className='Block'>
              <Image src={caseStudy.image} alt={caseStudy.alt} />
              <HoverImage src={caseStudy.hoverImage} alt={caseStudy.hoverAlt} />
            </Block>
            <div className="text">
              <ul>
                <CaseStudyTitle>{caseStudy.title}</CaseStudyTitle>
                {caseStudy.listItems.map((item) => (
                  <HighlightedWords
                    key={item.id}
                    id={item.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      fontWeight: highlightedId === item.id ? 'bold' : 'normal',
                      color: highlightedId === item.id ? '#27AE60' : theme.text,
                    }}
                    style={{
                      fontWeight: 'normal',
                      cursor: 'pointer',
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  >
                    {item.text}
                  </HighlightedWords>
                ))}
              </ul>
            </div>
          </CaseStudyCard>
        ))}
      </CaseStudyContainer>
    </div>
  );
};

export default CaseStudy;