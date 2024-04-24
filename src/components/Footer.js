import React from 'react';
import styled from 'styled-components';
// import { navigationItems } from './navigationDetails';
// import { Link } from 'react-router-dom';
// import { breakpoints } from '../breakpoints';
// import ReactGA from "react-ga4";

const FooterContainer = styled.div`
  p {
    text-align: center;
    color: ${props => props.theme.text};
  }
`;

// const NavList = styled.ul`
//   list-style: none;
//   display: flex;
//   gap: 10px;
//   margin: 0 auto;
//   justify-content: center;
//   background-color: #f5f5f5;
//   @media (max-width: ${breakpoints.tablet}) {
//     display: none;
//   }
// `;

// const NavItem = styled(Link)`
//   text-decoration: none;
//   color: ${props => props.theme.footerText};
//   cursor: pointer;
//   font-size: 16px;
//   position: relative;
//   padding: 1em;
//   &.active {
//     background-color: ${props => props.theme.primaryPurple};
//     border-radius: ${props => props.theme.bigBorderRadius};
//   }
// `;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <FooterContainer id="footer">
    {/* <NavList>
      {navigationItems.map(item => (
        <NavItem
          key={item.label}
          to={item.path}
          onClick={() => {
            ReactGA.event({
              category: 'Desktop Navigation',
              action: `Desktop ${item.eventLabel}`,
              label: item.eventLabel,
            });
          }}
        >
          {item.label}
        </NavItem>
      ))}
    </NavList> */}
    <p>&copy; {currentYear} Jonathon Scott</p>
    </FooterContainer>;
};

export default Footer;