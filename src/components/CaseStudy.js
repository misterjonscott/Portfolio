import React, { useState, useRef, useEffect, useMemo } from 'react';
import ReactGA from "react-ga4";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { breakpoints } from '../breakpoints';
import { v4 as uuidv4 } from 'uuid';

const CaseStudyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5em 0;
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
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

const Block = styled(Link)`
  width: 315px;
  height: 120px;
  position: relative;
  overflow: hidden;
  display: block;
  text-decoration: none;
  &:hover {
    ${Image} {
      opacity: 0; /* Hide original Image */
    }

    ${HoverImage} {
      opacity: 1; /* Show HoverImage */
    }
  }
`;

const CaseStudyCard = styled.div`
  width: 315px;
  display: flex;
  flex-direction: column;
  background-color: #4A5E6D;
  border-radius: 8px;
  margin-bottom: 1em;
  /* Text styles */
  .text {
    padding: 0.5em;
    color: #FFFFFF;
    ul {
      margin: 0;
      padding-left: 2em;
    }
  }
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

const CaseStudy = () => {
  return (
    <CaseStudyContainer id="case-studies">
      {caseStudies.map((caseStudy, caseStudyIndex) => (
        <CaseStudyCard key={caseStudy.title}>
          <Block to={caseStudy.link} onClick={() => {
            ReactGA.event({
              category: 'Case Studies',
              action: `Case Studies ${caseStudy.title}`,
              label: `Case Studies ${caseStudy.title}`,
            });
          }}>
            <Image src={caseStudy.image} alt={caseStudy.alt} />
            <HoverImage src={caseStudy.hoverImage} alt={caseStudy.hoverAlt} />
          </Block>
          <div className="text">
            <ul>
            {caseStudy.listItems.map((item) => (
              <li key={item.id} id={item.id}>{item.text}</li>
            ))}
            </ul>
          </div>
        </CaseStudyCard>
      ))}
    </CaseStudyContainer>
  );
};

export default CaseStudy;