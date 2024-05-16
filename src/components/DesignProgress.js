import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { breakpoints } from '../breakpoints';
import styled, { keyframes, StyleSheetManager } from 'styled-components';

const ContentContainer = styled.div`
  max-width: ${props => props.theme.pageWidth};
  margin-bottom: 2em;
  padding-bottom: 1em;
  background-color: #fff;
  border-radius: ${props => props.theme.smallBorderRadius};
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 1em 2em;
  }
`;

const Headline = styled.h1`
  font-size: 4em;
  margin: 0.5em;
  color: ${props => props.theme.alternateText};
  max-width: ${props => props.theme.pageWidth};
  text-align: left;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2em;
    margin: 0 0.5em;
  }
`;

const Container = styled.div`
  position: relative;
  width: 60%;
  height: 40px;
  margin: 0 auto 1em;
  background-color: #333;
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
  }
`;

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 20px;
  width: ${({ progress }) => `${progress}%`};
  background: 
    linear-gradient(#d0a9e2, transparent 85%), 
			linear-gradient(90deg, #433485, #4cdd3c, #433485);
  background-size: 200% 200%;
  animation: ${keyframes`
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: -100% 50%;
    }
  `} 3s linear infinite;
`;

const SliderHandle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ progress }) => `calc(${progress}% - 40px)`};
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect width="4" height="20" rx="2" fill="%23666"/><rect x="8" width="4" height="20" rx="2" fill="%23666"/><rect x="16" width="4" height="20" rx="2" fill="%23666"/></svg>');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px #fff solid;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.5);
`;

const ProgressLabel = styled.div`
  color: ${props => props.theme.alternateText};
  position: absolute;
  top: 50%;
  left: calc(100% + 0.5em);
  transform: translateY(-50%);
  width: 3em;
  padding-left: 2em; // Add padding to the left
  background-repeat: no-repeat; // Prevent the SVG from repeating
  background-position: left center; // Position the SVG on the left
  background-image: url('../img/LoadingPuller.svg');
  user-select: none;
  &.dance {
    background-image: url('../img/dancer.gif');
  }
`;

const HeadlineSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2em auto 0;
  padding: 0 1em;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% - 5em);
    height: 0;
    // background-color: #999;
    border: 1px rgba(200, 200, 200, 1) dashed;
    transform: translate(-50%, -50%);
  }
  @media (max-width: ${breakpoints.tablet}) {
    // flex-wrap: wrap;
  }
`;

const ContentSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2em auto 0;
  padding: 0 1em;
`;

const SectionHeadline = styled.div`
  flex: 1;
  text-align: center;
  padding: 5px;
  color: ${({ isActive, theme }) => (isActive ? theme.text : '#aaa')};
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  font-size: 1.2em;
  cursor: pointer;
  transition: color 0.3s;
  border-radius: ${props => props.theme.smallBorderRadius};
  border: 2px solid rgba(200, 200, 200, 1);
  margin: 0 1em;
  z-index: 1;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1), -2px -2px 4px rgba(255, 255, 255, 0.5);
  &:nth-of-type(1) {
    background-color: ${({ isActive }) => (isActive ? '#f2c464' : '#fff')};
  }
  &:nth-of-type(2) {
    background-color: ${({ isActive }) => (isActive ? '#ff953f' : '#fff')};
  }
  &:nth-of-type(3) {
    background-color: ${({ isActive }) => (isActive ? '#4caf50' : '#fff')};
  }
  &:nth-of-type(4) {
    background-color: ${({ isActive }) => (isActive ? '#2196f3' : '#fff')};
  }
  &:nth-of-type(5) {
    background-color: ${({ isActive }) => (isActive ? '#df2cff' : '#fff')};
  }
`;

const SectionContent = styled.div`
  flex: 1;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  padding: 10px;
  color: ${props => props.theme.alternateText};
  height: 5em;
  strong {
    color: ${props => props.theme.primaryPurple};
  }
  @media (max-width: ${breakpoints.tablet}) {
    min-height: 15em;
  }
`;

const sectionData = [
  { headline: 'Empathize', content: 'Understand the needs and expectations of our users. We may also perform a competitive analysis to see how others are solving similar problems, and then reach out to our own users to <strong>learn what they\'re feeling.</strong>' },
  { headline: 'Define', content: 'Understanding our users helps us to write user personas and create a user journey map to help spot pain points and areas for improvement. This is where we <strong>determine what we\'ll need</strong> for the MVP phase.'},
  { headline: 'Conceptualize', content: 'Research leads the way into visual design in this phase, where we\'ll create a low-fidelity wireframe to test layout and usability. We\'ll work through <strong>many layout iterations</strong> very quickly, testing different layouts. During this phase we\'ll start building a library of assets to be used and reused.' },
  { headline: 'Prototype', content: 'With an informed design direction, user personas and a deep understanding of the problem we\'re working to solve, we can create a progression of <strong>functional high-fidelity prototypes</strong>.  Stakeholders may present versions of this prototype while the next iteration is actively being designed.'},
  { headline: 'Test', content: 'Findings from this point forward will affect future projects, but we\'re now able to <strong>use metrics</strong> to measure the success of our project.' }
];

const ProgressBarSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(20); // Start progress at 6%
  const progressPercentage = Math.ceil(progress);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        handleDrag(e);
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleTouchStart = (e) => {
      handleMouseDown(e.touches[0]);
    };
  
    const handleTouchMove = (e) => {
      handleMouseMove(e.touches[0]);
    };
  
    const handleTouchEnd = () => {
      handleMouseUp();
    };
  
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (containerRef.current.contains(e.target)) {
      handleDrag(e);
      setIsDragging(true);
    }
  };

  const handleDrag = (e) => {
  const containerRect = containerRef.current.getBoundingClientRect();
  const containerLeft = containerRect.left;
  const containerWidth = containerRect.width;
  const newPosition = Math.min(100, Math.max(0, ((e.clientX - containerLeft) / containerWidth) * 100));
  if (newPosition >= 10) {
    setProgress(newPosition);
  }
};

  const handleSliderMouseDown = () => {
    setIsDragging(true);
  };

  const handleSectionHeadlineClick = (index) => {
    setProgress(index === 0 ? 10 : ((index + 1) * 20) - 10);
  };

  const calculateActiveSection = () => {
    const activeSectionIndex = Math.min(Math.floor(progress / 20) , sectionData.length - 1);
    return activeSectionIndex;
  };  

  return (
    <ContentContainer id="contentContainer">
      <Headline id="headline">My Design Process</Headline>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isActive'}>
      
        <HeadlineSectionContainer id="HeadlineSectionContainer">
          {sectionData.map((section, index) => (
            <SectionHeadline
              key={index}
              isActive={index === calculateActiveSection()}
              onClick={() => handleSectionHeadlineClick(index)}
            >
              {section.headline}
            </SectionHeadline>
          ))}
        </HeadlineSectionContainer>
        <ContentSectionContainer id="ContentSectionContainer">
          {sectionData.map((section, index) => (
            <SectionContent
              className='sectionContent'
              key={index}
              isActive={index === calculateActiveSection()}
            >
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                dangerouslySetInnerHTML={{ __html: section.content }}
                />
            </SectionContent>
          ))}
        </ContentSectionContainer>
      </StyleSheetManager>
      <Container ref={containerRef} onMouseDown={handleMouseDown} id="container">
        <ProgressBarFill progress={progress} />
        <ProgressLabel
        className={progressPercentage === 100 ? 'dance' : ''}>{progressPercentage}%</ProgressLabel>
        <SliderHandle progress={progress} onMouseDown={handleSliderMouseDown} id="sliderHandle" />
      </Container>
    </ContentContainer>
  );
};

export default ProgressBarSlider;