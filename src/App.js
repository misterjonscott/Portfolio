import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import styled, { ThemeProvider, css, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

// Define global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background.color};
    background-image: ${props => props.theme.background.image};
    background-size: ${props => props.theme.background.size};
    background-attachment: ${props => props.theme.background.attachment};
    animation: ${props => props.theme.background.animation};
    font-family: arial, sans serif, helvetica;
    color: #333;
    ${props =>
      props.$isresumepage &&
      css`
        background-color: #fff;
        background-image: none;
    `}
    .loaderContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      .loader {
        width: 200px;
        aspect-ratio: 1;
        animation: l5-0 1s infinite steps(1);
      }
      .loader::before,
      .loader::after {
        content: "";
        position: absolute;
        inset:0 50% 50% 0;
        transform-origin: bottom right; 
        animation: 
          l5-1 0.5s infinite linear alternate,
          l5-2 0.5s infinite steps(1) alternate;
      }
      .loader::after {
        --s:-1,-1;
      }
      @keyframes l5-0 {
        0%  {transform:scale(1, 1) rotate(0deg)}
        50% {transform:scale(1,-1) rotate(90deg)}
      }
  
      @keyframes l5-1 {
        0%   {transform:scale(var(--s,1)) perspective(150px) rotateX(  0deg)}
        100% {transform:scale(var(--s,1)) perspective(150px) rotateX(180deg)}
      }
      @keyframes l5-2 {
        0% {background: ${props => props.theme.primaryCyan}}
        50%{background: ${props => props.theme.primaryPurple}}
      }
    }
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
`;

const PageContainer = styled.div`
  align-items: center;
  margin: 6em auto 0;
  line-height: 1.5em;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
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
const Design = React.lazy(() => import('./components/Design'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const PageWithCaseStudy = React.lazy(() => import('./components/CaseStudyPage'));
const Code = React.lazy(() => import('./components/Code'));
const CaseStudySkillable = React.lazy(() => import('./components/CaseStudySkillable'));
const CaseStudySharpen = React.lazy(() => import('./components/CaseStudySharpen'));
const CaseStudyIndigo = React.lazy(() => import('./components/CaseStudyIndigo'));
const CaseStudyGeofeedia = React.lazy(() => import('./components/CaseStudyGeofeedia'));
const CaseStudyLids = React.lazy(() => import('./components/CaseStudyLids'));
const CaseStudyLevelUp = React.lazy(() => import('./components/CaseStudyLevelUp'));
const Resume = React.lazy(() => import('./components/Resume'));
const ResumeDev = React.lazy(() => import('./components/ResumeDev'));


const App = () => {
  ReactGA.initialize('G-X7T0C9H914');

  // Get the current URL path
  const currentPath = window.location.pathname;
  const isresumepage = (currentPath === '/resume' || currentPath === '/resumedev');

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <ErrorBoundary>
          <GlobalStyle theme={theme === 'dark' ? darkTheme : lightTheme} $isresumepage={isresumepage} />
          {!isresumepage && <Header toggleTheme={toggleTheme} theme={theme} />}
          <PageContainer $isresumepage={isresumepage} className="page-container">
            <Suspense fallback={<div className='loaderContainer'><div className='loader' /></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/design" element={<Design />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/case-study" element={<PageWithCaseStudy />} />
                <Route path="/code" element={<Code />} />
                <Route path="/skillable-case-study" element={<CaseStudySkillable />} />
                <Route path="/sharpen-case-study" element={<CaseStudySharpen />} />
                <Route path="/indigo-case-study" element={<CaseStudyIndigo />} />
                <Route path="/geofeedia-case-study" element={<CaseStudyGeofeedia />} />
                <Route path="/lids-case-study" element={<CaseStudyLids />} />
                <Route path="/levelup-case-study" element={<CaseStudyLevelUp />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/resumedev" element={<ResumeDev />} />
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