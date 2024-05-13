import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { breakpoints } from '../breakpoints';
import styled, { keyframes } from 'styled-components';

const ContentContainer = styled.div`
  max-width: ${props => props.theme.pageWidth};
  margin-bottom: 2em;
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 1em;
  }
`;

const Headline = styled.h1`
  font-size: 4em;
  margin: 0;
  color: ${props => props.theme.text};
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
  width: 600px;
  height: 40px;
  margin: 2em auto;
  background-color: #333;
  border-radius: 15px;
  cursor: pointer;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 15px;
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
  left: ${({ progress }) => `calc(${progress}% - 30px)`};
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect width="4" height="20" rx="2" fill="%23333"/><rect x="8" width="4" height="20" rx="2" fill="%23333"/><rect x="16" width="4" height="20" rx="2" fill="%23333"/></svg>');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
  border-radius: 50%;
`;

const Bar = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
`;

const HandleBar = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProgressLabel = styled.div`
  color: #fff;
`;

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 2em auto 0;
`;

const Section = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  background-color: ${({ isActive }) => (isActive ? '#333' : 'transparent')};
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: 5px;
  transition: background-color 0.3s;
  transform-origin: bottom center;
  transform: ${({ isActive }) => (isActive ? 'scale(1.2)' : 'scale(0.8)')};
`;

const SectionHeadline = styled.h3`
  margin: 0 0 5px;
  color: #fff;
  font-size: 1.5em;
`;

const SectionContent = styled.p`
  color: #fff;
`;

const sectionData = [
  { headline: 'Empathize', content: 'Understand the needs and expectations of our users. We may also perform a competitive analysis to see how others are solving similar problems, and then reach out to our own users to <strong className=\'red\'>learn what they\'re feeling.</strong>' },
  { headline: 'Define', content: 'Understanding our users helps us to write user personas and create a user journey map to help spot pain points and areas for improvement. This is where we <strong className=\'orange\'>determine what we\'ll need</strong> for the MVP phase.'},
  { headline: 'Conceptualize', content: 'Research leads the way into visual design in this phase, where we\'ll create a low-fidelity wireframe to test layout and usability. We\'ll work through <strong className=\'yellow\'>many layout iterations</strong> very quickly, testing different layouts. During this phase we\'ll start building a library of assets to be used and reused.' },
  { headline: 'Prototype', content: 'With an informed design direction, user personas and a deep understanding of the problem we\'re working to solve, we can create a progression of <strong className=\'green\'>functional high-fidelity prototypes</strong>.  Stakeholders may present versions of this prototype while the next iteration is actively being designed.'},
  { headline: 'Test', content: 'Findings from this point forward will affect future projects, but we\'re now able to <strong className=\'blue\'>use metrics</strong> to measure the success of our project.' }
];

const ProgressBarSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressPercentage = Math.ceil(progress);
  const containerRef = useRef(null);
  const sliderInterval = useRef(null);

  useEffect(() => {
    startAutomaticDragging();

    return () => {
      clearInterval(sliderInterval.current);
    };
  }, []);

  const startAutomaticDragging = () => {
    sliderInterval.current = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }, 1000);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        handleDrag(e);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setTimeout(startAutomaticDragging, 2000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (e.target === containerRef.current) {
      handleDrag(e);
    }
  };

  const handleDrag = (e) => {
    const containerWidth = containerRef.current.offsetWidth;
    const containerLeft = containerRef.current.getBoundingClientRect().left;
    const newPosition = Math.min(100, Math.max(0, ((e.clientX - containerLeft) / containerWidth) * 100));
    setProgress(newPosition);
    setIsDragging(true);
    clearInterval(sliderInterval.current);
  };

  const handleSliderMouseDown = () => {
    setIsDragging(true);
  };

  const calculateActiveSection = () => {
    const activeSectionIndex = Math.min(Math.floor(progress / 20), sectionData.length - 1);
    return activeSectionIndex;
  };  

  return (
    <ContentContainer id="contentContainer">
      <Headline id="headline">Howdy!</Headline>
      <SectionContainer id="sectionContainer">
        {sectionData.map((section, index) => (
          <Section key={index} isActive={index === calculateActiveSection()} id={`section${index}`}>
            <SectionHeadline>{section.headline}</SectionHeadline>
            <SectionContent dangerouslySetInnerHTML={{ __html: section.content }} />
          </Section>
        ))}
      </SectionContainer>
      <Container ref={containerRef} onMouseDown={handleMouseDown} id="container">
        <ProgressBarFill progress={progress} />
        <SliderHandle progress={progress} onMouseDown={handleSliderMouseDown} id="sliderHandle">
          <Bar id="bar" />
          <HandleBar id="handleBar" />
        </SliderHandle>
      </Container>
      <ProgressLabel>{progressPercentage}%</ProgressLabel>
    </ContentContainer>
  );
};

export default ProgressBarSlider;
