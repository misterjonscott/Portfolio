import React from 'react';
import styled from 'styled-components';
// import { breakpoints } from '../breakpoints';

const FooterContainer = styled.div`
  p {
    color: #fff;
    font-size: 0.8em;
    text-align: center;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <FooterContainer id="footer">
    <p>&copy; {currentYear} Jonathon Scott, UX Designer and UI Developer. All Rights Reserved.</p>
    </FooterContainer>;
};

export default Footer;