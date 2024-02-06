import React from 'react';
import styled from 'styled-components';

const DesignArtifactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10em;
  // padding-top: 8em;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 0;
  }
`;

const DesignArtifactsGraphicContainer = styled.div`
  flex: 1;
  color: #fff;
  text-align: center;
`;

const DesignArtifactsGraphic = styled.img`
  width: 70%;
  background-color: #fff;
  border-radius: 2em;
  padding: 2em;
`;

const DesignArtifactsTextContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 2em;
  h1, h2, h3 {
    color: #333;
    margin: 0 0 .25em;
  }
  p {
    margin-top: 0;
  }
`;

const DesignArtifacts = () => {
  return <div id="design-artifacts">
      <h1>Visual Elements Repository</h1>
      <DesignArtifactsContainer>
        <DesignArtifactsTextContainer>
          <h2>Make it once, use it forever.</h2>
          <p>Making things takes time, and making them to last takes a little longer.</p>
          <ul>
            <li>If we're making an icon or reusable component, save it to a shared library.</li>
            <li>If we need a similar element later, add it as an alternative or update the original.</li>
            <li>Now we can rapid prototype using resources we've already created!</li>
            <li>Now that we're using a consistent design, we can develop code to match it.</li>
            <li>Now we can rapidly develop code using resources we've already created!</li>
          </ul>
        </DesignArtifactsTextContainer>
        <DesignArtifactsGraphicContainer>
          <DesignArtifactsGraphic alt="Design Process Graphic" src="./img/buttons.png" />
        </DesignArtifactsGraphicContainer>
      </DesignArtifactsContainer>
    </div>;
};

export default DesignArtifacts;