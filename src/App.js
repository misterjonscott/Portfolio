import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import DesignProcess from './components/DesignProcess';
import CaseStudy from './components/CaseStudy';
import DesignArtifacts from './components/DesignArtifacts';
import Gallery from './components/Gallery';
import Code from './components/Code';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';

const PageContainer = styled.div`
  padding: 1em;
  align-items: center;
  margin: 70px auto 0;
  line-height: 1.5em;
  max-width: 1000px;
`;

const App = () => {
  ReactGA.initialize('G-X7T0C9H914');

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/design-process" element={<DesignProcess />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/design-artifacts" element={<DesignArtifacts />} />
            <Route path="/code" element={<Code />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </PageContainer>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
