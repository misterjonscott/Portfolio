import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  padding: 1em;
  &.active {
    background-color: ${props => props.theme.primaryPurple};
    border-radius: ${props => props.theme.bigBorderRadius};
  }
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 1em;
`;

const MobileMenuItem = styled(NavItem)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 0.8em;
`;

const MobileMenuEmail = styled.a`
  text-align: center;
  width: 100vw;
  color: #fff;
  text-decoration: none;
  font-size: .8em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
    ${EmailLink} {
      display: none;
    }
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 0 1em;
`;

const Header = () => {
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
          <MobileMenuItem activeClass="active" to="/" smooth={true} duration={1000} 
          onClick={() => {
            toggleMobileMenu();
            ReactGA.event({
              category: 'Mobile Navigation',
              action: 'Mobile Click Home',
              label: 'Home'
            });
          }}>Home</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="design-process" smooth={true} duration={1000} 
          onClick={() => {
            toggleMobileMenu();
            ReactGA.event({
              category: 'Mobile Navigation',
              action: 'Mobile Click Process',
              label: 'Design Process'
            });
          }}>Design Process</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="gallery" smooth={true} duration={1000}
          onClick={() => {
            toggleMobileMenu();
            ReactGA.event({
              category: 'Mobile Navigation',
              action: 'Mobile Click Showcase',
              label: 'Projects Showcase'
            });
          }}>Projects Showcase</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="case-study" smooth={true} duration={1000}
          onClick={() => {
            toggleMobileMenu();
            ReactGA.event({
              category: 'Mobile Navigation',
              action: 'Mobile Click Cases',
              label: 'Case Studies'
            });
          }}>Case Studies</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="design-artifacts" smooth={true} duration={1500}
          onClick={() => {
            toggleMobileMenu();
            ReactGA.event({
              category: 'Mobile Navigation',
              action: 'Mobile Click Library',
              label: 'Design Systems'
            });
          }}>Design Systems</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="code" smooth={true} duration={1500}
          onClick={() => {
            toggleMobileMenu();
            ReactGA.event({
              category: 'Mobile Navigation',
              action: 'Mobile Click Code',
              label: 'Code'
            });
          }}>UI Development</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="recommendations" smooth={true} duration={2000}
          onClick={() => {
            toggleMobileMenu();
            ReactGA.event({
              category: 'Mobile Navigation',
              action: 'Mobile Click Recommendations',
              label: 'Recommendations'
            });
          }}>Recommendations</MobileMenuItem>
          <MobileMenuEmail target="_blank" href={`mailto:jon@workwithjonscott.com`}
          onClick={() => {
            toggleMobileMenu();
            ReactGA.event({
              category: 'Mobile Navigation',
              action: 'Mobile Click Email',
              label: 'Email'
            });
          }}>
            <img src="./img/mail.png" alt="email me" />
            Email me
          </MobileMenuEmail>
        </MobileMenu>
      )}
      <NavList>
        <NavItem className={location.pathname === '/' ? 'active' : ''} to='/'
        onClick={() => {
          ReactGA.event({
            category: 'Desktop Navigation',
            action: 'Desktop Click Home',
            label: 'Home'
          });
        }}>Home</NavItem>
        <NavItem className={location.pathname === '/design-process' ? 'active' : ''} to='design-process'
        onClick={() => {
          ReactGA.event({
            category: 'Desktop Navigation',
            action: 'Desktop Click Process',
            label: 'Design Process'
          });
        }}>Design Process</NavItem>
        <NavItem className={location.pathname === '/gallery' ? 'active' : ''} to='gallery'
        onClick={() => {
          ReactGA.event({
            category: 'Desktop Navigation',
            action: 'Desktop Click Showcase',
            label: 'Projects Showcase'
          });
        }}>Projects Showcase</NavItem>
        <NavItem className={location.pathname === '/case-study' ? 'active' : ''} to='case-study'
        onClick={() => {
          ReactGA.event({
            category: 'Desktop Navigation',
            action: 'Desktop Click Cases',
            label: 'Case Studies'
          });
        }}>Case Studies</NavItem>
        <NavItem className={location.pathname === '/design-artifacts' ? 'active' : ''} to='design-artifacts'
        onClick={() => {
          ReactGA.event({
            category: 'Desktop Navigation',
            action: 'Desktop Click Library',
            label: 'Design Systems'
          });
        }}>Design Systems</NavItem>
        <NavItem className={location.pathname === '/code' ? 'active' : ''} to='code'
        onClick={() => {
          ReactGA.event({
            category: 'Desktop Navigation',
            action: 'Desktop Click Code',
            label: 'Code'
          });
        }}>UI Development</NavItem>
        <NavItem className={location.pathname === '/recommendations' ? 'active' : ''} to='recommendations'
        onClick={() => {
          ReactGA.event({
            category: 'Desktop Navigation',
            action: 'Desktop Click Recommendations',
            label: 'Recommendations'
          });
        }}>Recommendations</NavItem>
      </NavList>
      <EmailLink target="_blank" href={`mailto:jon@workwithjonscott.com`}
      onClick={() => {
        ReactGA.event({
          category: 'Desktop Navigation',
          action: 'Desktop Click Email',
          label: 'Email'
        });
      }}>
        <img src="./img/mail.png" alt="email me" />
      </EmailLink>
    </HeaderContainer>
  );
};

export default Header;