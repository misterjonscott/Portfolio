import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import { TdButton } from './Elements';
import ReactGA from "react-ga4";

const AboutMeContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const TextBubble = styled.div`
  width: calc(100% - 2em);
  flex: 1;
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Text = styled.div`
  border-radius: ${props => props.theme.smallBorderRadius};
  background-color: #fff;
  color: #666;
  padding: 0.5em 1em;
  position: relative;
  h1 {
    color: #666;
    margin: 0;
  }
  .brands {
    h3 {
      margin: 0 0 2em;
      color: #333;
    }
    img {
      width: 100%;
    }
    padding-top: 2em;
    text-align: center;
    margin-bottom: 3em;
  }

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

  &:after {
    content: '';
    top: 10em;
    right: -35px;
    position: absolute;
    border: 0px solid;
    display: block;
    width: 38px;
     height: 26px;
    background-color: transparent;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    box-shadow: -21px 9px 0px 8px #fff;
    z-index: -1;
    @media (max-width: ${breakpoints.mobile}) {
      bottom: -13px;
      top: unset;
      transform: scaleX(-1);
      right: 55px;
    }
}
`;

const AboutMeText = styled.div`
  border: 1px solid #eee;
  padding: 0 1em;
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
  }
`;

const LearnMoreAboutMe = styled(TdButton)`
  display: ${(props) => (props['data-islearnmorevisible'] ? 'none' : 'inline-block')};
  margin-bottom: 2em;
`;

const Greeting = () => {
  // Get current hour
  const currentHour = new Date().getHours();
  // Define greeting based on time of day
  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'good afternoon';
  } else if (currentHour >= 18 || currentHour < 5) {
    greeting = 'good evening';
  } else {
    greeting = 'good night';
  }
  return greeting;
};

const Home = () => {
  const [isLearnMoreVisible, setLearnMoreVisible] = useState(false);
  const toggleLearnMore = () => {
    setLearnMoreVisible(prevState => !prevState);
  };

  return <div>
    <AboutMeContainer>
      <TextBubble>
        <Text>
          <h1>Hello and <Greeting />,</h1>
          <p>I'm <strong>Jon Scott</strong>, a versatile UX designer with a background in both <span className='design-container'>
            <span className="square top-left"></span>
            <span className="square top-right"></span>
            <span className="square bottom-left"></span>
            <span className="square bottom-right"></span>design</span>
             and
             <span className='syntax-highlight'>development.</span>
             I bring a unique perspective to every project, blending visual creativity with technical expertise to craft user-centric solutions.</p>
          <p>This allows me to seamlessly bridge the gap between conceptualizing user experiences, implementing them in functional prototypes, and handing these finished designs off with full documentation to aid in the development process.</p>
          <p>Whether it's wireframing intuitive concepts or prototyping innovative fully clickable interfaces, I thrive on turning ideas into engaging digital experiences.  Here are some of the places I've worked:</p>
          <div className="brands">
              {/* <h3>Here are some of places I've worked</h3> */}
              <img src="./img/logos.png" alt="brand logos" />
          </div>
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
        </Text>
      </TextBubble>
      <Picture>
        <img src="./img/JonScott-2.png" alt="A photograph of my face" />
      </Picture>
    </AboutMeContainer>
  </div>
};

export default Home;