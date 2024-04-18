import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import DesignProcess from './components/DesignProcess';
import PageWithCaseStudy from './components/CaseStudyPage';
import DesignArtifacts from './components/DesignArtifacts';
import Gallery from './components/Gallery';
import Code from './components/Code';
import Recommendations from './components/Recommendations';
import CaseStudySkillable from './components/CaseStudySkillable';
import CaseStudySharpen from './components/CaseStudySharpen';
import CaseStudyIndigo from './components/CaseStudyIndigo';
import CaseStudyGeofeedia from './components/CaseStudyGeofeedia';
import CaseStudyLids from './components/CaseStudyLids';
import CaseStudyLevelUp from './components/CaseStudyLevelUp';
import NotFound from './components/NotFound';
import Resume from './components/Resume';
import Footer from './components/Footer';
import styled, { ThemeProvider, css, createGlobalStyle } from 'styled-components';

import ReactGA from "react-ga4";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';

// Define global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --gradient: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(0,0,0,1) 100%);
  }

  body {
    margin: 0;
    padding: 0;
    background-size: 100% 100%;
    background-attachment: fixed;
    background-image: var(--gradient);
    background-size: 400%;
    animation: bg-animation 20s infinite alternate;
    font-family: arial, sans serif, helvetica;
    color: #333;
    ${props =>
      props.isresumepage &&
      css`
        background-color: #fff;
        background-image: unset;
    `}
  }

  h1, h2, h3 {
    color: #fff;
    ${props =>
      props.$isresumepage &&
      css`
        color: #333;
    `}
    line-height: 1.5em;
  }

  @keyframes bg-animation {
    0% {background-position: left;}
    100% {background-position: right;}
  }
`;

const PageContainer = styled.div`
  padding: 1em;
  align-items: center;
  margin: 70px auto 0;
  line-height: 1.5em;
  max-width: 1000px;
  display: flex; /* Enable flexbox on the main container */
  min-height: 100vh; /* Set minimum height to viewport height */
  flex-direction: column; /* Stack elements vertically */
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased; /* For Chrome, Safari, and newer versions of Edge */
  -moz-osx-font-smoothing: grayscale; /* For older versions of Firefox on macOS */
  font-smoothing: antialiased; /* For other browsers */
  
  ${props =>
    props.$isresumepage &&
    css`
      margin: 0 auto 0;
    `}
`;

const App = () => {
  ReactGA.initialize('G-X7T0C9H914');

  // Get the current URL path
  const currentPath = window.location.pathname;

  // Check if the current pathname is "/resume"
  const isresumepage = currentPath === '/resume';

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle $isresumepage={isresumepage.toString()} />
        {!isresumepage && <Header />}
        <PageContainer $isresumepage={isresumepage.toString()}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/design-process" element={<DesignProcess />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/case-study" element={<PageWithCaseStudy />} />
            <Route path="/design-artifacts" element={<DesignArtifacts />} />
            <Route path="/code" element={<Code />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/skillable-case-study" element={<CaseStudySkillable />} />
            <Route path="/sharpen-case-study" element={<CaseStudySharpen />} />
            <Route path="/indigo-case-study" element={<CaseStudyIndigo />} />
            <Route path="/geofeedia-case-study" element={<CaseStudyGeofeedia />} />
            <Route path="/lids-case-study" element={<CaseStudyLids />} />
            <Route path="/levelup-case-study" element={<CaseStudyLevelUp />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageContainer>
        {!isresumepage && <Footer />}
      </ThemeProvider>
    </Router>
  );
};

export default App;
