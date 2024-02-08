// components/Home.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../breakpoints';

const HomeMessageContainer = styled.div`
  font-size: 5em;
  font-weight: bold;
  height: 100vh;
  position: relative;
  color: #fff;
`;

const FirstPart = styled.div`
  top: 37vh;
  left: 6vw;
  display: inline-block;
  position: relative;
  text-rendering: optimizeLegibility;
  @media (max-width: ${breakpoints.mobile}) {
    left: 6vw;
    top: 30vh;
    font-size: .45em;
  }
`;

const SecondPart = styled.div`
  top: 47vh;
  left: 3em;
  display: inline-block;
  position: relative;
  @media (max-width: ${breakpoints.mobile}) {
    left: 6vw;
    top: 35vh;
    font-size: .45em;
  }
`;

const floatAnimation = keyframes`
  0% { transform: translate(0,  0px); }
  50% { transform: translate(0, 15px); }
  100% { transform: translate(0, -0px); }
`;

const FloatPart = styled.svg`
  display: block;
  width: 200px;
  height: 200px;
  animation-name: ${floatAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out; 
  overflow: visible;
  top: 36vh;
  left: 40%;
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakpoints.mobile}) {
    right: auto;
    top: 27vh;
  }
`;

const FloatPath = styled.path`
  width: 100%;
  height: 100%;
  fill: url(#lgrad);
  display: block;
`;

const Home = () => {
  return <HomeMessageContainer id="home">
      <FloatPart xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-25 -25 250 250"> 
        <defs>
          <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" style={{ stopColor: '#00d5ff', stopOpacity: 1.00 }} />
            <stop offset="100%" style={{ stopColor: '#f9ddfd', stopOpacity: 1.00 }} />
          </linearGradient>
        </defs>
        <FloatPath d="M128.44897041161016 4.132090444615784 C85.13660461684276 -1.04534516170545 -2.8455514381138283 82.62850314366764 3.3859926346621876 125.80181351786054 C8.63217008365104 162.1483184351224 97.31607573119067 201.40186462166645 133.3416347832333 194.2779687412785 C158.36965868633078 189.32878707500763 197.01367052319466 141.37845228079834 198.7241218960753 115.92318296851683 C200.93729975087982 82.98624057818938 161.22683280852425 8.050261820361387 128.44897041161016 4.132090444615784Z" />
      </FloatPart>
      <FirstPart>
      Pixels dance,
      </FirstPart>
      <SecondPart>
      experiences linger.
      </SecondPart>
    </HomeMessageContainer>;
};

export default Home;