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
import styled from 'styled-components';
import ReactGA from 'react-ga';

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
    <div>
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
    </div>
  );
};

export default App;
