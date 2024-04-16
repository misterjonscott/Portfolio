import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const ArrowIcon = styled.svg`
  width: 21px;
  height: 36px;
  fill: #333;
  cursor: pointer;
  opacity: 0.6;
  // margin-top: 20vh; /* This sets the margin-top to 20% of the viewport height */
  position: sticky; /* This property is used to fix an element's position relative to the user's viewport, allowing it to "stick" in place during scroll. It should be used with a specified value for 'top', 'bottom', 'left', or 'right' to determine the element's sticking point. Without this specification, the element may not stick as intended. */
  top: 30vh; /* Example value for 'top' to make the element stick to the top of the viewport */
  transform: ${props => props.rotate ? `rotate(${props.rotate}deg)` : 'none'}; /* Apply rotation if provided */
`;

const arrowPath = (
  <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.2644 1.42418C18.5788 0.14045 20.8262 1.04964 20.8262 2.86511V33.7814C20.8262 35.5968 18.5788 36.506 17.2644 35.2223L1.43727 19.7642C0.622471 18.9684 0.622473 17.6781 1.43727 16.8823L17.2644 1.42418Z" fill="white"/>
  </svg>
);

const GalleryContainer = styled.div`
  margin-bottom: 8em;
  @media (max-width: ${breakpoints.mobile}) {
    // padding-top: 8em;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1em;
  align-items: start;
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
  flex-direction: column;
  flex-direction: column-reverse;
`;

const GalleryGraphicContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const GalleryGraphic = styled.img`
  width: 100%;
  // border: 1px solid #333;
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
  MyRole,
  GalleryGrid,
  ArrowIcon,
  arrowPath
};