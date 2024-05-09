import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import CaseStudy from './CaseStudy';
import { Link } from 'react-router-dom';
import { breakpoints } from '../breakpoints';
import Messenger from './Messenger';
import ReactGA from "react-ga4";
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  width: 100%;
  margin: 0;
`;

const Introduction = styled.div`
  height: 499px;
  text-align: center;
  background-color: ${props => props.theme.white};
  margin-top: 1em;
  background-image: url('../img/HeroImage.png');
  background-position: center;
  background-position-y: top;
  position: relative;
  background-repeat: no-repeat;
  @media (max-width: ${breakpoints.tablet}) {
    background-size: contain;
    background-position-y: bottom;
    height: auto;
  }
`;

const Headline = styled.div`
  text-align: center;
  padding-top: 0.75em;
  font-size: 4em;
  font-weight: bold;
  position: relative;
  display: inline-block;
  line-height: 0.75em;
  z-index: 4; /* Higher than the Messages component */
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2em;
  }
`;

const EvevatorPitch = styled.p`
  position: absolute;
  top: 7em;
  left: 50%;
  transform: translateX(-50%);
  width: 30em;
  background: white;
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.6)
  );
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.smallBorderRadius};
  backdrop-filter: blur(4px);
  text-align: left;
  padding: 0.5em;
  z-index: 4; /* Higher than the Messages component */
  font-size: 1.2em;
  @media (max-width: ${breakpoints.tablet}) {
    position: relative;
    top: 0;
    width: 50%;
    transform: translateX(-110%);
    left: 100%;
  }
  `;
  
const CTAButton = styled(Link)`
  background-color: ${props => props.theme.primaryPurple};
  border-radius: ${props => props.theme.bigBorderRadius};
  color: ${props => props.theme.white};
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 0.5em;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }

  svg {
    margin-right: 0.5em; /* Spacing between icon and text */
    fill: ${props => props.theme.white};
  }
`;

const CaseStudyContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.background.alternateColor};
  margin: 0 auto;
  padding: 2em 0;
`;

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('aaaaa');
  const [loopCount, setLoopCount] = useState(0);

  // Function to add letters to display text
  const addLetters = useCallback(() => {
    if (loopCount < 5 && displayText.includes('a')) {
      setTimeout(() => {
        setDisplayText(prevText => prevText + 'a');
        setLoopCount(prevCount => prevCount + 1);
      }, 100);
    }
  }, [loopCount, displayText]);

  // Function to remove letters from display text
  const removeLetters = useCallback(() => {
    if (displayText.length > 5) {
      setTimeout(() => {
        setDisplayText(prevText => prevText.slice(0, -1));
        setLoopCount(prevCount => prevCount - 1);
      }, 100);
    }
  }, [displayText]);

  useEffect(() => {
    if (isHovered) {
      addLetters();
    } else {
      if (!isHovered) {
        removeLetters();
      }
    }
  }, [isHovered, addLetters, removeLetters]);

  return (
    <HomeContainer>
      <Introduction id='Introduction'>
        <Headline
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }} // Animation duration
          >
            UX Design and w{displayText}y more! {/* Wrap displayText with motion.div */}
          </motion.div>
        </Headline>
        <EvevatorPitch>
        Bringing user research and design expertise to life for over 15 years. I bridge the design & development gap, creating solutions users love.
          <CTAButton to='mailto:jon@workwithjonscott.com' target='_blank'  onClick={() => {
            ReactGA.event({
              category: 'Home',
              action: 'CTA',
              label: 'Home CTA'
            });
          }}>
            <svg width="23" height="21" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.96295 19.7592V17.537C1.32592 17.537 0 16.2103 0 14.574V3.46295C0 1.82666 1.32592 0.5 2.96295 0.5H19.2592C20.8962 0.5 22.2221 1.82666 22.2221 3.46295V14.574C22.2221 16.2103 20.8962 17.537 19.2592 17.537H7.66663L4.16665 20.3377C3.94442 20.5155 3.64072 20.5503 3.38146 20.4269C3.12591 20.3036 2.96295 20.044 2.96295 19.7592ZM7 9C7 10.1046 6.10457 11 5 11C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7C6.10457 7 7 7.89543 7 9ZM13 9C13 10.1046 12.1046 11 11 11C9.89543 11 9 10.1046 9 9C9 7.89543 9.89543 7 11 7C12.1046 7 13 7.89543 13 9ZM19 9C19 10.1046 18.1046 11 17 11C15.8954 11 15 10.1046 15 9C15 7.89543 15.8954 7 17 7C18.1046 7 19 7.89543 19 9Z" />
            </svg>
            Call (me) to Action
          </CTAButton>
        </EvevatorPitch>
        <Messenger />
      </Introduction>
      <CaseStudyContainer id='CaseStudyContainer'>
        <CaseStudy numToShow="3" />
      </CaseStudyContainer>
    </HomeContainer>
  );
};

export default Home;