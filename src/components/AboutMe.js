import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import { TdButton } from './Elements';
import ReactGA from "react-ga4";
import Recommendations from './Recommendations';

const Headline = styled.h1`
  font-size: 4em;
  margin: 0;
  color: ${props => props.theme.text};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2em;
    margin: 0 0.5em;
  }
`;

const ContentContainer = styled.div`
  max-width: ${props => props.theme.pageWidth};
  background-color: #fff;
  border-radius: ${props => props.theme.smallBorderRadius};
  margin-bottom: 2em;
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 1em;
  }
  h1 {
    font-size: 4em;
    margin: 0;
    color: ${props => props.theme.alternateText};
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2em;
    }
  }
  h2 {
    color: ${props => props.theme.alternateText};
    text-align: left;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  padding: 1em;
`;

const MoreAboutMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutMeDescription = styled.div`
  // Design text
  .design-container {
    position: relative;
    display: inline-block;
    border: 2px solid #666;
    padding: 0 0.25em;
    margin: 0.25em;
    line-height: 1;
  }
  .square {
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #fff;
    border-color: #666;
    outline: 2px solid #666;
  }
  .top-left {
    top: -3px;
    left: -3px;
  }
  .top-right {
    top: -3px;
    right: -3px;
  }
  .bottom-left {
    bottom: -3px;
    left: -3px;
  }
  .bottom-right {
    bottom: -3px;
    right: -3px;
  }

  // Development text
  .syntax-highlight {
    background-color: #333;
    color: lime;
    padding: 0.25em 0.5em 0.25em 0.25em;
    margin: 0 0.5em;
    border-radius: 5px;
    position: relative;
  }
  .syntax-highlight::after {
    content: '|';
    animation: blink-caret 1s infinite;
    color: lime;
    position: absolute;
    right: 5px;
  }
  @keyframes blink-caret {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const AboutMeText = styled.div`
  border: 1px solid #eee;
  padding: 0 1em;
  margin-top: 1em;
  &::before {
    content: "Thank you!";
    position: absolute;
    top: initial;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 0 0.5em;
    line-height: 1;
    color: ${props => props.theme.primaryColor};
    margin-top: -0.5em;
  }
`;

const Picture = styled.div`
flex: 0;
margin-left: 1em;
@media (max-width: ${breakpoints.mobile}) {
  align-self: center;
  margin-top: 1em;
}
img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    outline: 8px solid ${props => props.theme.primaryColor};
    outline-offset: -2px;
  }
`;

const LearnMoreAboutMe = styled(TdButton)`
  display: ${(props) => (props['data-islearnmorevisible'] ? 'none' : 'inline-block')};
`;

const AboutMe = () => {
  const [isLearnMoreVisible, setLearnMoreVisible] = useState(false);
  const toggleLearnMore = () => {
    setLearnMoreVisible(prevState => !prevState);
  };

  return <div>
    <Headline>Howdy!</Headline>
    <ContentContainer>
      <AboutMeContainer id='AboutMeContainer'>
          <AboutMeDescription>
            <p>I'm <strong>Jon Scott</strong>, a versatile UX Engineer with a background in <span className='design-container'>
              <span className="square top-left"></span>
              <span className="square top-right"></span>
              <span className="square bottom-left"></span>
              <span className="square bottom-right"></span>design</span>
                and
                <span className='syntax-highlight'>development.</span>
            I bring a unique perspective to every project, blending visual creativity with technical expertise to craft user-centric solutions.</p>
            <p>I'm your UX wingman, here to translate ideas into engaging digital adventures. Bonus points: I don't speak in confusing developer jargon. I can turn user journeys into awesome digital experiences. Plus, I write crystal-clear documentation, so no one gets lost along the way.</p>
          </AboutMeDescription>
          <Picture>
            <img src="./img/JonScott-2.png" alt="A photograph of my face" />
          </Picture>
        </AboutMeContainer>
        <MoreAboutMeContainer id='MoreAboutMeContainer'>
          <p style={{ textAlign: 'center' }}>
            <LearnMoreAboutMe onClick={() => {
              toggleLearnMore();
              ReactGA.event({
                category: 'Home',
                action: 'About Me',
                label: 'About Me Click'
              });
            }}>{isLearnMoreVisible ? 'Hide Details' : 'Want to learn more about me?'}</LearnMoreAboutMe>
            </p>
            {isLearnMoreVisible && (
              <AboutMeText>
                <p>I began my professional journey crafting elegant solutions in PHP, leveraging clean and minimalist code to develop intuitive ecommerce interfaces for retailers and bespoke WordPress plugins tailored for bloggers' unique needs.</p>
                <p>I've dabbled in various multimedia arts, and designed artwork for everything from convention flyers to billboards.  I've steered code repositories, guided teams to success, and championed user-centric design principles at every turn. While I've had numerous enriching experiences in my career, I'm particularly thrilled by the prospect of new challenges and accomplishments on the horizon.</p>
                <p>When I'm not at work on a design, I'm often at a workbench repairing electronic devices, or out in the garage working on our family's aging fleet of vehicles.  I have a lifelong love of drawing, sculpting and painting exceeded only by my passion to figure out how things work and how they could be improved.</p>
                <p>Thank you for taking the time to discover more about me, and I hope I can return the favor.</p>
              </AboutMeText>
            )}
        </MoreAboutMeContainer>
    </ContentContainer>
    <Recommendations />
  </div>
};

export default AboutMe;