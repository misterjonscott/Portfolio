import styled from 'styled-components';

export const TdButton = styled.span`
  cursor: pointer;
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  font-size: 1em;
  text-transform: uppercase;
  border-radius: ${props => props.theme.smallBorderRadius};
  border: 2px solid ${props => props.theme.primaryColor};
  padding: 0.5em;
  box-shadow: .9px 1px 0 0 ${props => props.theme.primaryColor}, 1.5px 2px 0 0 ${props => props.theme.primaryColor}, 2.5px 3px 0 0 ${props => props.theme.primaryColor}, 3.5px 4px 0 0 ${props => props.theme.primaryColor}, 4.5px 5px 0 0 ${props => props.theme.primaryColor}, 5.5px 6px 0 0 ${props => props.theme.primaryColor}, 6.5px 7px 0 0 ${props => props.theme.primaryColor}, 7.5px 8px 0 0 ${props => props.theme.primaryColor}, 8.5px 9px 0 0 ${props => props.theme.primaryColor}, 9.5px 10px 0 0 ${props => props.theme.primaryColor};
  position: relative;
  inset: 0;
  cursor: pointer;
  transform: rotateX(0), rotateY(0) rotateZ(0);
  display: inline-block;
  outline: 2px dashed transparent;
  transition: all 600ms ease;
  &:hover {
    inset: 6px 0 5.5px 0;
    transform: rotateX(5deg) rotateY(3deg) rotateZ(.25deg);
    box-shadow: none;
  }
`;