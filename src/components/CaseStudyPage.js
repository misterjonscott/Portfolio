import React from 'react';
import CaseStudy from './CaseStudy';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const CaseStudyPageContainer = styled.div`
  margin-bottom: 2em;
`;

const CaseStudyHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  max-width: ${props => props.theme.pageWidth};
  margin: 0 auto;
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 1em;
    flex-direction: row;
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
  h1 {
    font-size: 4em;
    margin: 0;
    color: ${props => props.theme.text};
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2em;
    }
  }
  h3 {
    font-size: 1.5em;
    font-weight: normal;
    margin: 0;
    color: ${props => props.theme.text};
  }
  p {
    color: ${props => props.theme.text};
  }
  `;
  
const CaseStudyGraphic = styled.div`
  img {
    max-width: 100%;
    height: auto;
    @media (min-width: ${breakpoints.desktop}) {
      max-width: 450px;
    }
  }
`;
const PageWithCaseStudy = () => {
  return (
    <CaseStudyPageContainer>
      <CaseStudyHeader id='CaseStudyHeader'>
        <div>
          <h1>Case Studies</h1>
          <h3>Some of my latest work!</h3>
          <p>I've worked at start-ups, tech companies, and corporations on a range of different projects including design systems, websites and apps.</p>
        </div>
        <CaseStudyGraphic>
          <img src='./img/CaseStudyElements.png' alt='Case Study Suporting Graphic' />
        </CaseStudyGraphic>
      </CaseStudyHeader>
      <CaseStudy />
    </CaseStudyPageContainer>
  );
};

export default PageWithCaseStudy;