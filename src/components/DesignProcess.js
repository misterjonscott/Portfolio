import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const CircleColors = {
  red: 'rgba(255, 0, 0, 0.5)',
  green: 'rgba(0, 255, 0, 0.5)',
  blue: 'rgba(0, 0, 255, 0.5)',
  yellow: 'rgba(255, 255, 0, 0.5)',
  purple: 'rgba(128, 0, 128, 0.5)',
};

const Circle = styled(animated.div)`
  width: 30vmin; /* Set the width to 20% of the minimum of the viewport width and height */
  height: 30vmin; /* Set the height to be equal to the width */
  border-radius: 50%;
  background-color: ${(props) => CircleColors[props.color]};
  text-align: center;
  line-height: 100px;
`;

// Functional component for individual circles
const AnimatedCircle = ({ color, label }) => {
  const [x, setX] = useState(0); // Initial x position
  const [y, setY] = useState(0); // Initial y position

  const animatedProps = useSpring({
    to: { x: x, y: y + (label === 'Label 2' || label === 'Label 4' ? 60 : 0) }, // Add constant value for circles 2 and 4
    config: { mass: 1, tension: 170, friction: 26 }, // Adjust for desired movement
  });

  // Function to update circle position with animation
  const moveCircle = () => {
    const newX = x + Math.random() * 20 - 5; // Random offset within 10px
    const newY = y + Math.random() * 20 - 5;
    setX(newX);
    setY(newY);
  };

  useEffect(() => {
    const intervalId = setInterval(moveCircle, 250); // Customize interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Circle style={{ ...animatedProps }} color={color}>
      <h1>{label}</h1>
    </Circle>
  );
};

const DesignProcess = () => {
  const circlesData = [
    { color: 'red', label: 'Label 1' },
    { color: 'green', label: 'Label 2' },
    { color: 'blue', label: 'Label 3' },
    { color: 'yellow', label: 'Label 4' },
    { color: 'purple', label: 'Label 5' },
  ];

  return (
    <div>
      <h1>Your Design Process content goes here.</h1>
      <CirclesContainer>
        {circlesData.map((circle, index) => (
          <AnimatedCircle key={index} color={circle.color} label={circle.label} />
        ))}
      </CirclesContainer>
    </div>
  );
};

export default DesignProcess;
