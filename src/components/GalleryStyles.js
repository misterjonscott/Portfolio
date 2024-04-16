import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const GalleryContainer = styled.div`
  margin-bottom: 8em;
  @media (max-width: ${breakpoints.mobile}) {
    // padding-top: 8em;
  }
`;

const GallerySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0 1em;
  border-radius: ${props => props.theme.smallBorderRadius};
  h2 {
    color: #333;
    font-size: 2em;
    align-self: flex-start;
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    margin-bottom: 1em;
  }
`;

const GalleryContent = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
  }
`;

const GalleryGraphicContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const GalleryGraphic = styled.img`
  width: 100%;
  border: 1px solid #333;
  border-radius: 3px;
  &.old {
    border-radius: 30px;
  }
`;

const GalleryTextContainer = styled.div`
  flex: 1;
  padding-right: 1em;
  h1, h2, h3 {
    color: #333;
    margin: 0 0 .25em;
  }
  p {
    margin-top: 0;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin: 2em 0 .5em;
  }
`;

const GallerySupportingGraphicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 1em;
  border-radius: ${props => props.theme.smallBorderRadius};
  margin-top: 0.5em;
  img {
    width: 50%;
    height: auto;
    max-width: 100%;
    border: 0;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 100%;
    }
  }
`;

const MyRole = styled.p`
span {
  border-radius: ${props => props.theme.smallBorderRadius};
  background-color: teal;
  color: #fff;
  padding: .25em;
  margin-right: .5em;
}
`;

export {
  GalleryContainer,
  GallerySection,
  GalleryContent,
  GalleryGraphicContainer,
  GalleryGraphic,
  GalleryTextContainer,
  GallerySupportingGraphicContainer,
  MyRole
};