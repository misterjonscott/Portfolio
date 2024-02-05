import React from 'react';
import styled from 'styled-components';

const DesignArtifactsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  // Added stuff
  margin-bottom: 10em;
`;

const DesignArtifactsGraphicContainer = styled.div`
  flex: 1;
  color: #fff;
  text-align: center;
`;

const DesignArtifactsGraphic = styled.img`
  width: 50%;
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
  return <div id="design-process">
      <h1>Visual Elements Repository</h1>
      <DesignArtifactsContainer>
        <DesignArtifactsTextContainer>
          <h2>It's like digital hoarding!</h2>
          <p>Harnessing the power of reusable components in Figma transforms the UX design process into a dynamic and efficient
             journey. By crafting a library of reusable components, each element becomes a design asset that can be easily replicated
             and modified across the user workflow. This not only expedites the design phase but also ensures visual consistency and
             coherence throughout the entire experience.</p>
             <p>This also allows designers across teams to share changes seamlessly, streamlining collaboration and reducing the
              risk of inconsistencies.</p>
        </DesignArtifactsTextContainer>
        <DesignArtifactsGraphicContainer>
          <DesignArtifactsGraphic alt="Design Process Graphic" src="./img/DesignArtifacts.png" />
        </DesignArtifactsGraphicContainer>
      </DesignArtifactsContainer>
    </div>;
};

export default DesignArtifacts;