import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for layout
const HeaderContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  color: #333;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  color: #333;
  font-size: 16px;
`;

const EmailLink = styled.a`
  /* Style your email link as needed */
  color: #666;
  font-size: 16px;
  text-decoration: none;
`;

const obfuscateEmail = (email) => {
  return email
    .split('')
    .map((char) => {
      return `&#${char.charCodeAt(0)};`;
    })
    .join('');
};

const Header = () => {
  const obfuscatedEmail = obfuscateEmail('hello.jonscott@me.com');

  return (
    <HeaderContainer>
      <Logo>Your Logo</Logo>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/design-process">Design Process</Link>
        </NavItem>
        <NavItem>
          <Link to="/case-study">Case Study</Link>
        </NavItem>
        <NavItem>
          <Link to="/design-artifacts">Design Artifacts</Link>
        </NavItem>
        <NavItem>
          <Link to="/gallery">Gallery</Link>
        </NavItem>
        <NavItem>
          <Link to="/code">Code</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">About/Contact</Link>
        </NavItem>
      </NavList>
      <EmailLink
        href={`mailto:${obfuscatedEmail}`}
        dangerouslySetInnerHTML={{ __html: obfuscatedEmail }}
      />
    </HeaderContainer>
  );
};

export default Header;
