import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const DesignProcessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10em;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    margin-bottom: 4em;
  }
`;

const DesignProcessGraphicContainer = styled.div`
  flex: 1;
  color: #fff;
  text-align: center;
`;

const DesignProcessGraphic = styled.div`
  display: block;
  background-image: url("./img/DesignProcess-V.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 100vh;
  @media (max-width: ${breakpoints.mobile}) {
    width: 100vw;
    background-image: url(./img/DesignProcess-H.png);
    min-height: 170px;
    height: fit-content;
  }
`;

const DesignProcessTextContainer = styled.div`
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

const DesignProcess = () => {
  return <div id="design-process">
      <DesignProcessContainer>
        <DesignProcessGraphicContainer>
          <DesignProcessGraphic alt="Design Process Graphic" />
        </DesignProcessGraphicContainer>
        
        <DesignProcessTextContainer>
          <h1>Design Process</h1>
          <h2>Empathize</h2>
          <p>The first step in creating an experience for the user is understanding the users' needs and expectations.
            We need to perform a competitive analysis to see how it's done in the market, and then reach out to users to <strong>learn what they're feeling.</strong></p>
          <h2>Define</h2>
          <p>With a better understanding of the problem we're working to solve, we can <strong>define the problem</strong> and write user personas.  Next, we can create a customer journey map to help spot pain points and areas for improvement.
            Now we're able to generate a problem statement, which is our deduction of the main intent of our project.</p>
          <h2>Conceptualize</h2>
          <p>This is where research turns into visual design.  We'll create a low-fidelity wireframe to test layout and usability.
            We'll <strong>work through many iterations very quickly</strong>, testing different layouts to find the best approach. As the design starts to come together, we'll start building a library of assets to be used and reused.</p>
          <h2>Prototype</h2>
          <p>With an informed design direction, user personas and a deep understanding of the problem we're working to solve, we can <strong>create functional prototypes</strong>.
          As we iterate through prototypes, we'll create new versions.  This will ensure stakeholders can present versions of this prototype while the next iteration is actively being designed. </p>
          <h2>Test</h2>
          <p>Finally we'll reach testing, where there may still be changes to individual components, but overall <strong>functionality and design should be solid</strong>.
          Findings from this point forward will affect future projects, but we're now able to use metrics to compare the success of our changes.</p>
        </DesignProcessTextContainer>
      </DesignProcessContainer>
    </div>;
};

export default DesignProcess;