import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import DesignProcess from './components/DesignProcess';
import CaseStudy from './components/CaseStudy';
import DesignArtifacts from './components/DesignArtifacts';
import Gallery from './components/Gallery';
import Code from './components/Code';
import styled from 'styled-components';
import './styles/main.scss'; //Lose this later

const PageContainer = styled.div`
  width: 100%;
  padding: 10px;
  align-items: center;
  margin: 70px auto 0;
  max-width: 1000px;
`;

const App = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Home />
        <DesignProcess />
        <CaseStudy />
        <DesignArtifacts />
        <Gallery />
        <Code />
      </PageContainer>
    </div>
  );
};

export default App;
