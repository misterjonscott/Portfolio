import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { breakpoints } from '../breakpoints';

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
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  padding: 1em;
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
  margin: 1em;
  cursor: pointer;
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

const SubMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  border-radius: 3px;
`;

const SubMenuItem = styled.li`
  color: #000;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  padding: 1em;
  &:hover {
    background-color: orange;
    border-radius: 3px;
  }
`;

const Header = () => {
  const [additionalClass, setAdditionalClass] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const [scrolled, setScrolled] = useState(false);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuVisible(prevState => !prevState);
  };
  
  const subMenuRef = useRef(null);

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
        // If scrolled up, add to the cumulative scroll up distance
        cumulativeScrollUp += Math.abs(scrollDelta);
        if (cumulativeScrollUp >= 100) {
          // If scrolled up by at least 100px overall, set the additional class to true
          setAdditionalClass(true);
          console.log('TRUE');
        }
      } else {
        // If scrolled down, reset the cumulative scroll up distance
        cumulativeScrollUp = 0;
        // Optionally, you may want to set the additional class to false here
        console.log('FALSE');
        setAdditionalClass(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        // Click occurred outside of the SubMenu, close it
        setSubMenuVisible(false);
      }
    };

    // Add the event listener to the window
    window.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer className={`${scrolled ? 'scrolled' : ''} ${additionalClass ? 'show-header' : ''}`}>
   
      <Logo>
        <img id="Logo" src="./img/JonathonScottLogo.svg" alt="Jonathon Scott" />
      </Logo>
      <MobileMenuIcon onClick={toggleMobileMenu}>&#9776;</MobileMenuIcon>
      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenuItem activeClass="active" to="home" smooth={true} duration={500} onClick={toggleMobileMenu}>Home</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="design-process" smooth={true} duration={500} onClick={toggleMobileMenu}>Design Process</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="case-studies" smooth={true} duration={500} onClick={toggleMobileMenu}>Case Studies</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="gallery" smooth={true} duration={500} onClick={toggleMobileMenu}>Gallery</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="design-artifacts" smooth={true} duration={500} onClick={toggleMobileMenu}>Component Library</MobileMenuItem>
          <MobileMenuItem activeClass="active" to="code" smooth={true} duration={500} onClick={toggleMobileMenu}>Code</MobileMenuItem>
        </MobileMenu>
      )}
      <NavList>
        <NavItem activeClass="active" to="home" smooth={true} duration={500}>Home</NavItem>
        <NavItem activeClass="active" to="design-process" smooth={true} duration={500}>Design Process</NavItem>
        <NavItem activeClass="active" to="case-studies" smooth={true} duration={500} onClick={toggleSubMenu}>Case Studies
        {isSubMenuVisible && (
          <SubMenu ref={subMenuRef}>
            <SubMenuItem>Crafting a Course Library for Skillable</SubMenuItem>
            <SubMenuItem>Component Library</SubMenuItem>
          </SubMenu>
        )}
        </NavItem>
        <NavItem activeClass="active" to="gallery" smooth={true} duration={500}>Gallery</NavItem>
        <NavItem activeClass="active" to="design-artifacts" smooth={true} duration={500}>Component Library</NavItem>
        <NavItem activeClass="active" to="code" smooth={true} duration={500}>Code</NavItem>
      </NavList>
      <EmailLink to="" href={`mailto:nothing@nothing.com`}>
        <img src="./img/mail.png" alt="email me" />
      </EmailLink>
    </HeaderContainer>
  );
};

export default Header;