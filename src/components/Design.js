import React from 'react';
import styled from 'styled-components';
import DesignArtifacts from './DesignArtifacts';
import DesignProgress from './DesignProgress';
import { breakpoints } from '../breakpoints';

const Container = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 1em;
    h1 {
      font-size: 2em;
    }
  }
`;

const Design = () => {
  return (
    <Container>
      <DesignProgress />
      <DesignArtifacts />
    </Container>
  );
};

export default Design;
