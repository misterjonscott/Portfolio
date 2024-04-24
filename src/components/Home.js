import React from 'react';
import styled from 'styled-components';
import CaseStudy from './CaseStudy';
// import ReactGA from "react-ga4";

const HomeContainer = styled.div`
  width: 100%;
  margin: 0;
`;

const Introduction = styled.div`
  height: 500px;
  text-align: center;
  background-color: ${props => props.theme.white};
  margin-top: 1em;
  img {
    margin: 0 auto;
    max-height: 500px;
  }
`;

const CaseStudyContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.background.alternateColor};
  margin: 0 auto;
  padding: 2em 0;
`;

const Home = () => {

  return <HomeContainer>
    <Introduction id='Introduction'>
      <img src='../img/7fzZoqyeR1-6nXaBVK9qMg.png' alt='placeholder' />
    </Introduction>
    <CaseStudyContainer id='CaseStudyContainer'>
      <CaseStudy numToShow="3" />
    </CaseStudyContainer>
  </HomeContainer>
};

export default Home;