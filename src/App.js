import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import DesignProcess from './components/DesignProcess';
import CaseStudy from './components/CaseStudy';
import DesignArtifacts from './components/DesignArtifacts';
import Gallery from './components/Gallery';
import Code from './components/Code';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';
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
    <ThemeProvider theme={theme}>
      <Header />
      <PageContainer>
        <Home />
        <DesignProcess />
        <Gallery />
        <CaseStudy />
        <DesignArtifacts />
        <Code />
        <Recommendations />
      </PageContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
