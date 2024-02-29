import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const DesignProcessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10em;
  padding-top: 4em;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    margin-bottom: 4em;
  }
`;

const DesignProcessGraphicContainer = styled.div`
  flex: 1;
  color: #fff;
  text-align: center;
  position: relative;
  min-height: 100px;
  margin-top: 0;
`;

const DesignProcessGraphic = styled.img`
  &&.desktop {
    display: inline-block;
    width: 290px;
    float: right;
    margin-right: 5em;
  }
  &&.mobile {
    display: none;
  }
  @media (max-width: ${breakpoints.mobile}) {
    &&.desktop {
      display: none;
    }
    &&.mobile {
      display: inline-block;
      width: 100%;
      margin-bottom: 1em;
    }
  }
`;

const DesignProcessTextContainer = styled.div`
  flex: 1;
  // background-color: #fff;
  color: #fff;
  padding: 20px;
  border-radius: ${props => props.theme.smallBorderRadius};
  h1, h2, h3 {
    color: #fff;
    margin: 0;
  }
  p {
    margin-top: 0;
  }
  blockquote {
    margin: 2.5em 1em;
  }
  strong {
    font-size: 1.5em;
    line-height: 1em;
    &.red {
      color: red;
    }
    &.orange {
      color: orange;
    }
    &.yellow {
      color: yellow;
    }
    &.green {
      color: green;
    }
    &.blue {
      color: blue;
    }
  }
`;

const DesignProcess = () => {
  return <div id="design-process">
      <DesignProcessContainer>
        <DesignProcessGraphicContainer>
          <DesignProcessGraphic alt="Design Process Graphic Desktop" src="./img/DesignProcess-H.png" className="mobile" />
          <DesignProcessGraphic alt="Design Process Graphic Mobile" src="./img/DesignProcess-V.png" className="desktop" />
        </DesignProcessGraphicContainer>
        
        <DesignProcessTextContainer>
          <h2>Empathize</h2>
          <p>Understand the needs and expectations of our users.
            We may also perform a competitive analysis to see how others are solving similar problems, and then reach out to our own users to <strong className='red'>learn what they're feeling.</strong></p>
          <blockquote>
            <h2>Define</h2>
            <p>Understanding our users helps us to write user personas and create a user journey map to help spot pain points and areas for improvement. This is where we <strong className='orange'>determine what we'll need</strong> for the MVP phase.</p>
          </blockquote>
          <h2>Conceptualize</h2>
          <p>Research leads the way into visual design in this phase, where we'll create a low-fidelity wireframe to test layout and usability.
            We'll work through <strong className='yellow'>many layout iterations</strong> very quickly, testing different layouts. During this phase we'll start building a library of assets to be used and reused.</p>
          <blockquote>
            <h2>Prototype</h2>
            <p>With an informed design direction, user personas and a deep understanding of the problem we're working to solve, we can create a progression of <strong className='green'>functional high-fidelity prototypes</strong>.  Stakeholders may present versions of this prototype while the next iteration is actively being designed.</p>
          </blockquote>
          <h2>Test</h2>
          <p>Findings from this point forward will affect future projects, but we're now able to <strong className='blue'>use metrics</strong> to measure the success of our project.</p>
        </DesignProcessTextContainer>
      </DesignProcessContainer>
    </div>;
};

export default DesignProcess;