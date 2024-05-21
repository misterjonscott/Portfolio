import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const ContentContainer = styled.div`
  max-width: ${props => props.theme.pageWidth};
  margin-bottom: 2em;
  padding-bottom: 1em;
  background-color: #fff;
  border-radius: ${props => props.theme.smallBorderRadius};
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 1em;
  }
`;

const Headline = styled.h1`
  font-size: 4em;
  margin: 0.5em;
  color: ${props => props.theme.black};
  max-width: ${props => props.theme.pageWidth};
  text-align: left;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2em;
    margin: 0 0.5em;
  }
`;

const DesignArtifactsContainer = styled.div`
  max-width: ${props => props.theme.pageWidth};
  h1 {
    font-size: 4em;
    margin: 0;
    color: ${props => props.theme.text};
  }
`;

const DesignArtifactsDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
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
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: 2em;
`;

const DesignArtifactsTextContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: ${props => props.theme.smallBorderRadius};
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1em;
  }
  h1, h2, h3 {
    color: #333;
    margin: 0 0 .25em;
  }
  p {
    margin-top: 0;
  }
  ul {
    list-style: none;
    padding-left: 20px;
    margin: 0;
    li {
    margin-bottom: 10px;
    position: relative;
    strong {
      color: ${props => props.theme.primaryPurple};
      font-size: 1.1em;
    }
      &:before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 11px;
        background-image: url('../img/BulletStar.svg');
        background-repeat: no-repeat;
        position: absolute;
        top: 5px;
        left: -20px;
      }
      ul {
        li {
          strong {
            color: #777;
            font-size: 1em;
          }
        }
        li:before {
          background-image: url('../img/BulletArrow.svg');
          left: -10px;
          top: 7px;
        }
      } 
    }
  }
`;

const DesignArtifacts = () => {
  return (
    <ContentContainer id="contentContainer">
      <Headline id="headline">Design Systems</Headline>
      <DesignArtifactsContainer id="design-artifacts">
        <DesignArtifactsDisplay>
          <DesignArtifactsGraphicContainer>
              <DesignArtifactsGraphic alt="Design Process Graphic" src="./img/DesignSystemsComponents.png" />
          </DesignArtifactsGraphicContainer>
          <DesignArtifactsTextContainer>
              <>
              <h2>What is a design system?</h2>
                <p>Unleash the power of modularity. A design system is a centralized library of reusable UI components, akin to a Lego set for the digital world. These components, accompanied by clear guidelines, empower you to build consistent and exceptional user experiences (UX) across all your digital products.</p>
                <ul>
                  <li>
                    <span className='bullet-icon' />
                    <strong>Pre-Built Efficiency</strong>
                    <p>Ensure a uniform look and feel across all your digital products, just like a cohesive Lego city.</p>
                  </li>
                  <li>
                    <strong>Snap-Together Consistency</strong>
                    <p>Ditch the repetitive tasks and focus on innovation. Pre-built components are your secret weapon for saving time.</p>
                  </li>
                  <li>
                    <strong>Scalable Creativity</strong>
                    <p>Your design system grows with you, just like adding new Lego sets to your collection.  Endless possibilities await!</p>
                  </li>
                  <li>
                    <strong>Collaboration Cornerstone</strong>
                    <p>Design systems bridge the gap between designers, developers, and product managers, fostering a smooth workflow.</p>
                  </li>
                </ul>
              </>
          </DesignArtifactsTextContainer>
        </DesignArtifactsDisplay>
        <DesignArtifactsDisplay>
          <DesignArtifactsTextContainer>
              <>
              <h2>What needs a design system?</h2>
                <p>Imagine a bustling Lego city, where every building complements the next, with streets and parks connecting them seamlessly. That's the power of a design system – it benefits everyone involved in building exceptional digital experiences</p>
                <ul>
                  <li>
                    <strong>Designers</strong>
                    <ul>
                      <li>
                        <strong>Become Master Builders:</strong> <span> Focus on creative problem-solving and innovative design solutions. Pre-built UI components are your foundation, freeing you to build exceptional user experiences.</span>
                      </li>
                      <li>
                        <strong>Boost Efficiency:</strong> <span>No more reinventing the wheel (or Lego brick)!  Save valuable time with a library of reusable components and clear guidelines.</span>
                      </li>
                      <li>
                        <strong>Maintain Consistency:</strong> <span>Ensure a uniform look and feel across all digital products, just like a cohesive Lego city.</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Developers:</strong>
                    <ul>
                      <li>
                        <strong>Speak the Same Language:</strong> <span>Design systems act as a shared blueprint, fostering smooth collaboration between designers and developers.</span>
                      </li>
                      <li>
                        <strong>Faster Development:</strong> <span>Pre-built, well-documented components are like pre-coded Lego sets, allowing for quicker and more efficient development.</span>
                      </li>
                      <li>
                        <strong>Reduced Errors:</strong> <span>Clear guidelines and consistent code ensure a bug-free digital experience.</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Product Managers</strong>
                    <ul>
                      <li>
                        <strong>Scalability for the Future:</strong> <span>Design systems can evolve alongside your digital products, just like adding new Lego sets to your collection.</span>
                      </li>
                      <li>
                        <strong>Maintain Braind Identity:</strong> <span>Ensure a consistent brand experience across all platforms.</span>
                      </li>
                      <li>
                        <strong>Streamlined Workflow:</strong> <span>A design system empowers all teams to work more efficiently, allowing product managers to focus on strategic initiatives.</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
          </DesignArtifactsTextContainer>
          <DesignArtifactsGraphicContainer>
              <DesignArtifactsGraphic alt="Design Process Graphic" src="./img/DesignSystemsUsers.png" />
          </DesignArtifactsGraphicContainer>
        </DesignArtifactsDisplay>
      </DesignArtifactsContainer>
    </ContentContainer>
  );
};

export default DesignArtifacts;
