import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { breakpoints } from '../breakpoints';
import ReactGA from "react-ga4";

const MobileMenuIcon = styled.div`
  cursor: pointer;
  display: none;
  font-size: 1.5em;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    margin: 1em;
  }
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
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
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
  &.active {
    background-color: ${props => props.theme.primaryPurple};
    border-radius: ${props => props.theme.bigBorderRadius};
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
  color: #fff;
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
  }
  &.show-header {
    top: 0;
    transition: top 0.5s ease;
  }
  @media (max-width: ${breakpoints.mobile}) {
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
`;

const ThemeButton = styled.button`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
`;

const Header = ({ toggleTheme }) => {

  const navigationItems = [
    { label: 'Home', path: '/', eventLabel: 'Home' },
    { label: 'Design Process', path: '/design-process', eventLabel: 'Design Process' },
    { label: 'Case Studies', path: '/case-study', eventLabel: 'Case Studies' },
    { label: 'Project Highlights', path: '/gallery', eventLabel: 'Project Highlights' },
    { label: 'Design Systems', path: '/design-artifacts', eventLabel: 'Design Systems' },
    { label: 'UI Development', path: '/code', eventLabel: 'UI Development' },
    { label: 'Recommendations', path: '/recommendations', eventLabel: 'Recommendations' },
    { label: 'Contact', path: 'mailto:jon@workwithjonscott.com', eventLabel: 'Email' },
  ];
  

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
    <HeaderContainer className={`${scrolled ? 'scrolled' : ''} ${additionalClass ? 'show-header' : ''}`}>
      <Logo>
        <img id="Logo" src="./img/JonathonScottLogo.svg" alt="Jonathon Scott" />
      </Logo>
      <MobileMenuIcon onClick={toggleMobileMenu}>&#9776;</MobileMenuIcon>
      {isMobileMenuOpen && (
        <MobileMenu>
          <CloseButton onClick={toggleMobileMenu}>
            <CloseIcon />
          </CloseButton>
          {navigationItems.map(item => (
            <MobileMenuItem
              key={item.label}
              to={item.path}
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
          <ThemeButton onClick={toggleTheme}>
            Toggle Dark Mode
          </ThemeButton>
        </MobileMenu>
      )}
      <NavList>
        {navigationItems.map(item => (
          <NavItem
            key={item.label}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
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
        <ThemeButton onClick={toggleTheme}>
          Toggle Dark Mode
        </ThemeButton>
      </NavList>
    </HeaderContainer>
  );
};

export default Header;