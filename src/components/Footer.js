import React from 'react';
import styled from 'styled-components';
// import { breakpoints } from '../breakpoints';

const FooterContainer = styled.div`
  text-align: center;
  padding-top: 10em;
  height: 100px;
  background-image: url("./img/layered-waves.svg");
  background-size: cover;
  background-position: left;
  p {
    color: #666;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <FooterContainer id="footer">
    <p>&copy; {currentYear} Jonathon Scott, UX Designer and UI Developer. All Rights Reserved.</p>
    </FooterContainer>;
};

export default Footer;