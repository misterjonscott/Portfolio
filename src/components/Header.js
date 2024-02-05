import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, Events, scrollSpy } from 'react-scroll';
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
  justify-content: flex-start;
  align-items: left;
  font-size: 2em;
  z-index: 1;
`;

const StyledScrollLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const MobileMenuItem = styled(StyledScrollLink)`
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

const NavItem = styled.li`
  color: #fff;
  font-size: 16px;
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 1em;
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
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  font-family: arial, sans-serif, helvetica;
  &.scrolled {
    background: radial-gradient(ellipse at 50% 0%, rgba(31, 17, 206, 1) 0%, rgba(229, 43, 43, 0) 100%);
    transition: background 1s ease;
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
  margin: 1em;
`;

const SubMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isSubMenuVisible ? 'block' : 'none')};
`;

const SubMenuItem = styled.li`
  color: #000;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolled, setScrolled] = useState(false);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const subMenuRef = useRef(null);
  
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const obfuscateEmail = (email) => {
    return email
      .split('')
      .map((char) => {
        return `&#${char.charCodeAt(0)};`;
      })
      .join('');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 70;

      if (window.scrollY >= scrollThreshold && !scrolled) {
        setScrolled(true);
      } else if (window.scrollY < scrollThreshold && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const obfuscatedEmail = obfuscateEmail('hello.jonscott@me.com');

  return (
    <HeaderContainer className={scrolled ? 'scrolled' : ''}>
      <Logo>Your Logo</Logo>
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
        <NavItem><StyledScrollLink activeClass="active" to="home" smooth={true} duration={500}>Home</StyledScrollLink></NavItem>
        <NavItem><StyledScrollLink activeClass="active" to="design-process" smooth={true} duration={500}>Design Process</StyledScrollLink></NavItem>
        <NavItem>
          <StyledScrollLink
            activeClass="active"
            to="case-studies"
            smooth={true}
            duration={500}
            onClick={() => setSubMenuVisible(!isSubMenuVisible)}
          >
            Case Studies
          </StyledScrollLink>
          <SubMenu ref={subMenuRef} isSubMenuVisible={isSubMenuVisible}>
            <SubMenuItem>Case Studies Page</SubMenuItem>
            <SubMenuItem>Component Library</SubMenuItem>
            {/* Add more submenu items as needed */}
          </SubMenu>
        </NavItem>
        <NavItem><StyledScrollLink activeClass="active" to="home" smooth={true} duration={500}>Home</StyledScrollLink></NavItem>
        <NavItem><StyledScrollLink activeClass="active" to="design-process" smooth={true} duration={500}>Design Process</StyledScrollLink></NavItem>
        <NavItem><StyledScrollLink activeClass="active" to="case-studies" smooth={true} duration={500}>Case Studies</StyledScrollLink></NavItem>
        <NavItem><StyledScrollLink activeClass="active" to="gallery" smooth={true} duration={500}>Gallery</StyledScrollLink></NavItem>
        <NavItem><StyledScrollLink activeClass="active" to="design-artifacts" smooth={true} duration={500}>Component Library</StyledScrollLink></NavItem>
        <NavItem><StyledScrollLink activeClass="active" to="code" smooth={true} duration={500}>Code</StyledScrollLink></NavItem>
      </NavList>
      <EmailLink to="" href={`mailto:${obfuscatedEmail}`}>Contact</EmailLink>
    </HeaderContainer>
  );
};

export default Header;