import React from 'react';
import styled from 'styled-components';
// import { breakpoints } from '../breakpoints';

const FooterContainer = styled.div`
  position: absolute; 
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-top: 4em;
  height: 100px;
  opacity: 70%;
  background-image: url("./img/layered-waves.svg");
  background-size: cover;
  background-position: left;
  p {
    color: #000;
    font-size: 0.8em;
    position: absolute;
    bottom: 0;
    right: 2em;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <FooterContainer id="footer">
    <p>&copy; {currentYear} Jonathon Scott, UX Designer and UI Developer. All Rights Reserved.</p>
    </FooterContainer>;
};

export default Footer;