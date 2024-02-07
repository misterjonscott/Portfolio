import React from 'react';
import styled from 'styled-components';
// import { breakpoints } from '../breakpoints';

const FooterContainer = styled.div`
  text-align: center;
  padding-top: 5em;
  span {
    color: #666;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <FooterContainer id="footer">
    <span>&copy; {currentYear} Jonathon Scott, UX Designer and UI Developer. All Rights Reserved.</span>
    </FooterContainer>;
};

export default Footer;