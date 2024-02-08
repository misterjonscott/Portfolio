// components/Home.js
import React, { useState } from 'react';
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

const paths = [
  "M128.44897041161016 4.132090444615784 C85.13660461684276 -1.04534516170545 -2.8455514381138283 82.62850314366764 3.3859926346621876 125.80181351786054 C8.63217008365104 162.1483184351224 97.31607573119067 201.40186462166645 133.3416347832333 194.2779687412785 C158.36965868633078 189.32878707500763 197.01367052319466 141.37845228079834 198.7241218960753 115.92318296851683 C200.93729975087982 82.98624057818938 161.22683280852425 8.050261820361387 128.44897041161016 4.132090444615784Z",
  "M196.76557510474157 74.77256504024595 C176.04408526172793 44.034632256778636 101.44450142059118 -1.936501833649583 65.28272491421049 6.2198805150173655 C38.973338062221536 12.15403085981438 -10.881099116744046 67.78384530913137 0.2945970581662749 92.32975722636024 C21.01260180573775 137.8340651169334 164.91700201595216 142.09201990454133 199.80292027078326 106.27511796093775 C205.3235142857461 100.60719851389877 201.1883103227963 81.33318104235619 196.76557510474157 74.77256504024595Z",
  "M198.50486976658811 82.77238750530077 C167.63019904541383 46.85939691664822 44.83185642388101 20.422916234834787 11.284484511324635 53.85287320343117 C-9.564331015186745 74.62871840865905 3.875684284423908 154.6910163103492 28.849153225864228 170.26775222905206 C66.60601653268112 193.81789218870028 172.3346210141805 152.62658497903936 198.59532578595818 116.70214756133986 C203.60114667320678 109.85422399070366 204.03469214883367 89.20460053079249 198.50486976658811 82.77238750530077Z",
  "M148.6919669383572 12.65532439997314 C129.4776878739299 -11.349824546964445 49.05906708116825 9.918487642041661 27.151510821429753 31.493813239972738 C7.460898637313804 50.885814979374416 -0.9806220996298762 114.52321359927106 8.552152690901295 140.46345539535358 C16.159583566334828 161.1645210023733 54.8006719493539 202.56369458896702 76.17289432474868 197.11986941476192 C124.19151214555538 184.88880818341386 179.65674913362136 51.3408356395255 148.6919669383572 12.65532439997314Z"
];

const getRandomIndex = () => Math.floor(Math.random() * paths.length);

const FloatPath = styled.path`
  width: 100%;
  height: 100%;
  fill: url(#lgrad);
  display: block;
`;

const Home = () => {
  const [randomIndex, setRandomIndex] = useState(getRandomIndex());

  const handleNextPath = () => {
    const newIndex = getRandomIndex();
    setRandomIndex(newIndex === randomIndex ? newIndex + 1 : newIndex);
  };

  return <HomeMessageContainer id="home">
      <FloatPart xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-25 -25 250 250"> 
        <defs>
          <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" style={{ stopColor: '#00d5ff', stopOpacity: 1.00 }} />
            <stop offset="100%" style={{ stopColor: '#f9ddfd', stopOpacity: 1.00 }} />
          </linearGradient>
        </defs>
        {/* <FloatPath d="M128.44897041161016 4.132090444615784 C85.13660461684276 -1.04534516170545 -2.8455514381138283 82.62850314366764 3.3859926346621876 125.80181351786054 C8.63217008365104 162.1483184351224 97.31607573119067 201.40186462166645 133.3416347832333 194.2779687412785 C158.36965868633078 189.32878707500763 197.01367052319466 141.37845228079834 198.7241218960753 115.92318296851683 C200.93729975087982 82.98624057818938 161.22683280852425 8.050261820361387 128.44897041161016 4.132090444615784Z" /> */}
        <FloatPath d={paths[randomIndex]} />
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