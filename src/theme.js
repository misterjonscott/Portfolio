import { css, keyframes } from 'styled-components';


export const gradient = 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 35%, rgba(0,0,0,1) 100%)';

const bgAnimation = keyframes`
  0% { background-position: left; }
  100% { background-position: right; }
`;

export const theme = {
  smallBorderRadius: '0.5em',
  bigBorderRadius: '1em',
  primaryColor: 'rgba(9,9,121,1)',
  primaryCyan: 'rgb(0, 213, 255)',
  primaryViolet: 'rgb(249, 221, 253)',
  primaryPurple: 'rgb(155,81,224)',
  secondaryColor: 'teal',
  pageWidth: '1000px'
};

export const lightTheme = {
  body: '#ffffff',
  text: '#333333',
  white: '#ffffff',
  black: '#333333',
  alternateText: '#fff',
  bodyBorder: '#666',
  background: {
    color: '#fff',
    alternateColor: '#eee',
    image: 'none',
    size: '0',
    attachment: 'initial',
    animation: 'unset'
  },
  tile: {
    color: '#f5f5f5'
  },
  footerText: '#999',
  ...theme
};

export const darkTheme = {
  body: '#333333',
  text: '#ffffff',
  white: '#ffffff',
  black: '#333333',
  alternateText: '#333',
  bodyBorder: 'unset',
  background: {
    color: 'unset',
    alternateColor: '#333',
    image: gradient,
    size: '400%',
    attachment: 'fixed',
    animation: css`${bgAnimation} 20s infinite alternate`
  },
  tile: {
    color: '#333' //temp
  },
  footerText: '#333',
  ...theme
};