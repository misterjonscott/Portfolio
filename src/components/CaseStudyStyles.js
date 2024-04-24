import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import { Link } from 'react-router-dom';

const CaseStudyHeader = styled.div`
  max-width: ${props => props.theme.pageWidth};
  display: flex;
  margin-bottom: 2em;
  align-items: flex-end; 
  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 1em;
    flex-direction: column;
    align-items: flex-start;
  }
  #brand {
    width: 315px;
    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 auto;
      position: relative;
      bottom: -2em;
    }
  }
  #title {
    flex-grow: 1;
    h1 {
      font-size: 4em;
      margin: 0;
      color: ${props => props.theme.text};
      @media (max-width: ${breakpoints.tablet}) {
        font-size: 2em;
      }
    }
  }
`;

const BackLink = styled(Link)`
  color: ${props => props.theme.text};
  fill: ${props => props.theme.text};
  text-decoration: none;
  svg {
    padding-right: 0.25em;
  }
`;

const Tags = styled.div`
  margin-top: 0.5em;
`;


const Tag = styled.span`
  background-color: ${props => props.theme.primaryPurple};
  color: #fff;
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: 0.5em;
`;

const CaseStudyContainer = styled.div`
  max-width: ${props => props.theme.pageWidth};
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px;
  border-radius: ${props => props.theme.bigBorderRadius};
  margin-bottom: 2em;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 1em;
  }
  h2, h3, p {
    color: #333;
    margin: 0 0 0.5em;
  }
  section {
    margin-bottom: 3em;
  }
  img {
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
`;

export { 
  CaseStudyHeader, 
  BackLink, 
  Tags, 
  Tag, 
  CaseStudyContainer 
};