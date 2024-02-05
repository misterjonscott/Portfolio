import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const CaseStudyContainer = styled.div`
  margin-bottom: 8em;
`;

const CaseStudySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2em;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
    margin-bottom: 1em;
    &:nth-child(2n) {
      flex-direction: column;
    }
  }
`;

const CaseStudyGraphicContainer = styled.div`
  flex: 1;
  color: #fff;
  text-align: center;
  padding: 0 1em;
`;

const CaseStudyGraphic = styled.img`
  width: 100%;
`;

const CaseStudyTextContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 2em;
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

const CaseStudy = () => {
  return <CaseStudyContainer id="case-studies">
    <h1>Case Study: Skillable Course Library and Detail</h1>
      <CaseStudySection>
        <CaseStudyTextContainer>
          <h2>Competitive Analysis</h2>
          <p>We'll begin by researching what similar pages look like on competing platforms.  I talked to customers about their perceptions and referenced existing personas.  This stage helped me identify standard features, and similarities in layout.</p>
        </CaseStudyTextContainer>
        <CaseStudyGraphicContainer>
          <CaseStudyGraphic alt="" src="./img/ComparitiveAnalysis01.png" />
        </CaseStudyGraphicContainer>
      </CaseStudySection>
      <CaseStudySection>
        <CaseStudyGraphicContainer>
          <CaseStudyGraphic alt="" src="./img/ComparitiveAnalysis02.png" />
        </CaseStudyGraphicContainer>
        <CaseStudyTextContainer>
          <h2>Initial Wireframes</h2>
          <p>Armed with insights, the next phase involves translating this wealth of information into tangible design elements through the creation of initial wireframes. These low-fidelity representations serve as the skeletal framework, allowing us to visualize the layout and structure of the user interface.</p>
          <p>By swiftly iterating through various design iterations, we test different layouts and validate our assumptions, ensuring that the proposed solution aligns seamlessly with user expectations. The value of these initial wireframes lies in their ability to bridge the gap between conceptualization and implementation</p>
        </CaseStudyTextContainer>
      </CaseStudySection>
      <CaseStudySection>
        <CaseStudyTextContainer>
          <h2>Refine the Visual Design</h2>
          <p>Transitioning from wireframes to high-fidelity renderings involves refining the visual design, and incorporating established design patterns.  The high-fidelity rendering serves as a canvas where typography, color schemes, and interactive elements harmoniously converge, bringing the initial wireframes to life.</p>
          <p>This iterative approach ensures that the final design not only meets aesthetic expectations but also adheres to established design principles, fostering a polished and user-friendly interface.</p>
        </CaseStudyTextContainer>
        <CaseStudyGraphicContainer>
          <CaseStudyGraphic alt="" src="./img/ComparitiveAnalysis03.png" />
        </CaseStudyGraphicContainer>
      </CaseStudySection>
      <CaseStudySection>
        <CaseStudyGraphicContainer>
          <CaseStudyGraphic alt="" src="./img/ComparitiveAnalysis05.png" />
        </CaseStudyGraphicContainer>
        <CaseStudyTextContainer>
          <h2>Completing the Flow</h2>
          <p>Finally, the focus shifts towards refining the user journey to its culmination: an immersive course detail page that encapsulates all pertinent course details. The clickable prototypes, meticulously designed and iteratively tested, serve as a dynamic preview of the user experience. The page encapsulates not only essential details about the course but also incorporates feedback obtained from prototype testing, ensuring a refined and holistic user journey.</p>
          <p>This holistic approach ensures that the user journey reaches its zenith, leaving users with a comprehensive understanding and a memorable experience as they navigate the course detail page.</p>
        </CaseStudyTextContainer>
      </CaseStudySection>
    </CaseStudyContainer>;
};

export default CaseStudy;