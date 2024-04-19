import React, { Suspense } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import styled, { ThemeProvider, css, createGlobalStyle } from 'styled-components';
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import ErrorBoundary from './components/ErrorBoundary';

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
      props.$isresumepage &&
      css`
        background-color: #fff;
        background-image: none;
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

// Lazy-loaded components
const AboutMe = React.lazy(() => import('./components/AboutMe'));
const DesignProcess = React.lazy(() => import('./components/DesignProcess'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const PageWithCaseStudy = React.lazy(() => import('./components/CaseStudyPage'));
const DesignArtifacts = React.lazy(() => import('./components/DesignArtifacts'));
const Code = React.lazy(() => import('./components/Code'));
const Recommendations = React.lazy(() => import('./components/Recommendations'));
const CaseStudySkillable = React.lazy(() => import('./components/CaseStudySkillable'));
const CaseStudySharpen = React.lazy(() => import('./components/CaseStudySharpen'));
const CaseStudyIndigo = React.lazy(() => import('./components/CaseStudyIndigo'));
const CaseStudyGeofeedia = React.lazy(() => import('./components/CaseStudyGeofeedia'));
const CaseStudyLids = React.lazy(() => import('./components/CaseStudyLids'));
const CaseStudyLevelUp = React.lazy(() => import('./components/CaseStudyLevelUp'));
const Resume = React.lazy(() => import('./components/Resume'));


const App = () => {
  ReactGA.initialize('G-X7T0C9H914');

  // Get the current URL path
  const currentPath = window.location.pathname;

  // Check if the current pathname is "/resume"
  const isresumepage = currentPath === '/resume';

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <GlobalStyle $isresumepage={isresumepage} />
          {!isresumepage && <Header />}
          <PageContainer $isresumepage={isresumepage}>
            <Suspense>
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
            </Suspense>
          </PageContainer>
          {!isresumepage && <Footer />}
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  );
};

export default App;