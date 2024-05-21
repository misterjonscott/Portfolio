import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { breakpoints } from '../breakpoints';
import { navigationItems } from './navigationDetails';
import ReactGA from "react-ga4";
// import HelperModal from './FTUXModal';

const MobileMenuIcon = styled.div`
  cursor: pointer;
  display: none;
  fill: ${props => props.theme.text};
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin: 1em;
  }
`;

const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const MobileMenubuttons = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 2em;
  z-index: 1;
  justify-content: center;
`;

const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const CloseIcon = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 16px;
  position: relative;
  padding: 1em;
  border-radius: ${props => props.theme.bigBorderRadius};
  // transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.1), color 0.3s ease-in-out;
  
  &:hover {
    background-color: ${props => props.theme.secondaryPurple};
    color: ${props => props.theme.white};
  }
  &.active {
    background-color: ${props => props.theme.primaryPurple};
    color: ${props => props.theme.white};
  }
`;

const MobileMenuItem = styled(NavItem)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.8em;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1em;
  color: ${props => props.theme.white};;
  position: fixed;
  transition: top 0.5s ease, background-color 0.5s ease; /* Added background-color transition */
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  font-family: arial, sans-serif, helvetica;
  &.scrolled {
    top: -90px;
    transition: top 0.5s ease, background-color 0.5s ease; /* Added background-color transition */
    background-color: rgba(0, 0, 0, 0.75);
    a {
      color: ${props => props.theme.white};
    }
  }
  &.show-header {
    top: 0;
    transition: top 0.5s ease;
  }
  @media (max-width: ${breakpoints.tablet}) {
    left: 0;
    transform: unset;
    padding: 0;
    ${NavList} {
      display: none;
    }
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 0 1em;
  img {
    width: 150px;
  }
`;

const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  margin-right: 1em;
`;

const Header = ({ toggleTheme, theme }) => {
  const [additionalClass, setAdditionalClass] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    let cumulativeScrollUp = 0;
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - prevScrollY;
      prevScrollY = scrollY;
  
      if (window.scrollY >= 70 && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY < 70 && scrolled) {
        setScrolled(false);
      }
  
      if (scrollDelta < 0) {
        cumulativeScrollUp += Math.abs(scrollDelta);
        if (cumulativeScrollUp >= 100) {
          setAdditionalClass(true);
        }
      } else {
        cumulativeScrollUp = 0;
        setAdditionalClass(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const location = useLocation();

  return (
    <HeaderContainer id='HeaderContainer' className={`${scrolled ? 'scrolled' : ''} ${additionalClass ? 'show-header' : ''}`}>
      <Logo>
        <img id="Logo" src={theme === 'dark' ? "./img/JonathonScottLogo-dk.png" : "./img/JonathonScottLogo-lt.png"} alt="Jonathon Scott Logo" />
      </Logo>
      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenubuttons>
            <ThemeButton onClick={toggleTheme}>
              <img id="MobileDarkMode" src={theme === 'dark' ? "./img/theme-light.svg" : "./img/theme-dark.svg"} alt="Dark mode Selection" />
            </ThemeButton>
            <CloseButton onClick={toggleMobileMenu}>
              <CloseIcon />
            </CloseButton>
          </MobileMenubuttons>
          {navigationItems.map(item => (
            <MobileMenuItem
              key={item.label}
              to={item.path}
              target={item.target}
              onClick={() => {
                toggleMobileMenu();
                ReactGA.event({
                  category: 'Mobile Navigation',
                  action: `Mobile Click ${item.eventLabel}`,
                  label: item.eventLabel,
                });
              }}
            >
              {item.label}
            </MobileMenuItem>
          ))}
        </MobileMenu>
      )}
      <NavList>
        {navigationItems.map(item => (
          <NavItem
            key={item.label}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
            target={item.target}
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
      </NavList>
      <HeaderButtons>
        <MobileMenuIcon onClick={toggleMobileMenu}>
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2C0 0.895431 0.895431 0 2 0H38C39.1046 0 40 0.895431 40 2V6C40 7.10457 39.1046 8 38 8H2C0.895431 8 0 7.10457 0 6V2Z" />
          <path d="M0 34C0 32.8954 0.895431 32 2 32H38C39.1046 32 40 32.8954 40 34V38C40 39.1046 39.1046 40 38 40H2C0.895431 40 0 39.1046 0 38V34Z" />
          <path d="M0 18C0 16.8954 0.895431 16 2 16H38C39.1046 16 40 16.8954 40 18V22C40 23.1046 39.1046 24 38 24H2C0.895431 24 0 23.1046 0 22V18Z" />
        </svg>
        </MobileMenuIcon>
        <ThemeButton onClick={toggleTheme}>
          <img id="DarkMode" src={theme === 'dark' ? "./img/theme-light.svg" : "./img/theme-dark.svg"} alt="Dark mode Selection" />
        </ThemeButton>
      </HeaderButtons>
      {/* <HelperModal referenceElementId="DarkMode" modalWidth="350" position="bottomLeft" /> */}
    </HeaderContainer>
  );
};

export default Header;