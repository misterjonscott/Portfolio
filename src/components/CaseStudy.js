import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../breakpoints';

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
  margin-bottom: 20px;
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



const CaseStudy = () => {
  return <CaseStudyContainer id="case-studies">
    <Block to="/skillable-case-study">
      <Image src="./img/casestudies/CaseStudySkillable.png" alt="Skillable Case Study" />
      <HoverImage src="./img/casestudies/CaseStudySkillableActive.png" alt="Skillable Case Study Active" />
    </Block>
    <Block to="/sharpen-case-study">
      <Image src="./img/casestudies/CaseStudySharpen.png" alt="Sharpen Case Study" />
      <HoverImage src="./img/casestudies/CaseStudySharpenActive.png" alt="Sharpen Case Study Active" />
    </Block>
    <Block to="/indigo-case-study">
      <Image src="./img/casestudies/CaseStudyIndigo.png" alt="Indigo Case Study" />
      <HoverImage src="./img/casestudies/CaseStudyIndigoActive.png" alt="Indigo Case Study Active" />
    </Block>
    <Block to="/geofeedia-case-study">
      <Image src="./img/casestudies/CaseStudyGeofeedia.png" alt="Geofeedia Case Study" />
      <HoverImage src="./img/casestudies/CaseStudyGeofeediaActive.png" alt="Geofeedia Case Study Active" />
    </Block>
    <Block to="/lids-case-study">
      <Image src="./img/casestudies/CaseStudyLids.png" alt="Lids Case Study" />
      <HoverImage src="./img/casestudies/CaseStudyLidsActive.png" alt="Lids Case Study Active" />
    </Block>
    <Block to="/levelup-case-study">
      <Image src="./img/casestudies/CaseStudyLevelUp.png" alt="LevelUp Case Study" />
      <HoverImage src="./img/casestudies/CaseStudyLevelUpActive.png" alt="LevelUp Case Study Active" />
    </Block>
    
    </CaseStudyContainer>
};

export default CaseStudy;