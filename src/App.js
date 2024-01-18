// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import DesignProcess from './components/DesignProcess';
import CaseStudy from './components/CaseStudy';
import DesignArtifacts from './components/DesignArtifacts';
import Gallery from './components/Gallery';
import Code from './components/Code';
import Contact from './components/Contact';
import styled from 'styled-components';
import './styles/main.scss'; //Lose this later

const PageContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  align-items: center;
  margin: 70px auto 0;
  max-width: 1000px; 
  color: #333;
`;

const App = () => {
  return (
    <Router>
      <Header />
      <PageContainer>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/design-process" element={<DesignProcess />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/design-artifacts" element={<DesignArtifacts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/code" element={<Code />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageContainer>
    </Router>
  );
};

export default App;