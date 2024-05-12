import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  background-color: ${({ isActive }) => (isActive ? '#00ff00' : 'transparent')};
`;

const SectionContent = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const SectionBar = ({ progress }) => {
  const calculateActiveSection = () => {
    const activeSectionIndex = Math.floor(progress / 20);
    return activeSectionIndex;
  };

  return (
    <SectionContainer>
      {[0, 1, 2, 3, 4].map((index) => (
        <Section key={index} isActive={index === calculateActiveSection()}>
          <SectionContent>Section {index + 1}</SectionContent>
        </Section>
      ))}
    </SectionContainer>
  );
};

const Container = styled.div`
  width: 600px;
  height: 40px;
  background-color: #333;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #00ff00;
  border-radius: 15px;
  width: ${({ progress }) => `${progress}%`};
  transition: width 0.1s ease;
`;

const SliderHandle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: ${({ position }) => `calc(${position}% - 10px)`};
  cursor: pointer;
`;

const ProgressBarSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
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
    setSliderPosition(newPosition);
    setIsDragging(true);
  };

  const handleSliderMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <Container ref={containerRef} onMouseDown={handleMouseDown}>
      <SectionBar progress={progress} />
      <ProgressBarFill progress={progress} />
      <SliderHandle position={sliderPosition} onMouseDown={handleSliderMouseDown} />
    </Container>
  );
};

export default ProgressBarSlider;
