import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const DesignArtifactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8em;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const AccordionContainer = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      background-color: rgba(242,239,234, 1);
      padding: .5em;
      margin: .5em 0;
      cursor: pointer;
      border-radius: ${props => props.theme.smallBorderRadius};
      color: #333;
      font-weight: 400;
      position: relative;
      &:hover {
        background-color: rgba(242,239,234, 0.75);
      }
      &::after {
        content: "";
        position: absolute;
        top: 1.2em;
        right: 10px; /* Adjust as needed */
        transform: translateY(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        border-style: solid;
        border-width: 0 2px 2px 0;
        border-color: #333;
      }
      &.open::after {
        transform: translateY(-50%) rotate(-135deg);
      }
      p {
        border-top: 1px solid #333;
        padding-top: 1em;
      }
    }
  }
`;

const AccTitle = styled.span`
  cursor: 'pointer';
`;

const DesignArtifactsGraphicContainer = styled.div`
  flex: 1;
  color: #fff;
  text-align: center;
`;

const DesignArtifactsGraphic = styled.img`
  width: 70%;
  background-color: #fff;
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: 2em;
`;

const DesignArtifactsTextContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: ${props => props.theme.smallBorderRadius};
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1em;
  }
  h1, h2, h3 {
    color: #333;
    margin: 0 0 .25em;
  }
  p {
    margin-top: 0;
  }
`;

const DesignArtifacts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: 'Streamline Workflows with a Centralized Design Library',
      content: 'Imagine never having to recreate common UI elements like icons or components. A design library centralizes these assets, saving you and your team significant time. But it goes beyond efficiency - a library ensures consistent visual identity across all projects, strengthening your brand and user experience.',
    },
    {
      title: 'Boost Collaboration and Facilitate Iteration',
      content: 'A design library is more than a storage locker; it\'s a dynamic hub for collaboration. Need a variation on an existing element, or a brand new addition? Update the library, and your entire team has instant access to the latest assets. This fosters a collaborative environment that streamlines iteration and keeps everyone on the same page.',
    },
    {
      title: 'Accelerate Prototyping for a Flawless User Experience',
      content: 'With a well-stocked design library at your disposal, prototyping becomes a breeze. Drag and drop pre-built components to rapidly assemble screens and interfaces. This lets you focus on refining the user experience itself, rather than wasting time building elements from scratch. Faster prototyping translates to quicker validation and iteration cycles, ultimately leading to a more polished user experience.',
    },
    {
      title: 'Bridge the Gap Between Design and Development',
      content: 'A seamless user journey relies on consistency between design and code. A design library acts as a single source of truth for your design language. Developers can efficiently translate these assets into code, minimizing discrepancies and ensuring a smooth development process. This translates to faster development cycles and a more cohesive user experience.',
    },
    {
      title: 'Conclusion: Invest in Efficiency, Reap Long-Term Rewards',
      content: 'The time invested in building a comprehensive design library pays off significantly in the long run. It\'s not just about creating assets - it\'s about empowering your team to work smarter. The library fosters collaboration, streamlines workflows, and ultimately allows your team to deliver exceptional results with greater ease.',
    },
  ];
  

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div id="design-artifacts">
      <h1>Boosting Efficiency and Design Consistency<br />The Power of UX Design Libraries</h1>
      <DesignArtifactsContainer>
        <DesignArtifactsTextContainer>
          <AccordionContainer>
            <>
              <p>In today's competitive design landscape, maximizing efficiency and maintaining brand consistency are crucial. That's where UX design libraries come in - powerful tools that empower designers to streamline workflows, ensure visual and interactional coherence across projects, and elevate the overall user experience.</p>
              <ul>
                {accordionItems.map((item, index) => (
                  <li key={index} onClick={() => toggleItem(index)} className={openIndex === index ? 'open' : ''}>
                    <AccTitle>
                      {item.title}
                    </AccTitle>
                    {openIndex === index && <p>{item.content}</p>}
                  </li>
                ))}
              </ul>
            </>
          </AccordionContainer>
        </DesignArtifactsTextContainer>
        <DesignArtifactsGraphicContainer>
            {/* <DesignArtifactsGraphic alt="Design Process Graphic" src="./img/buttons.png" /> */}
            <DesignArtifactsGraphic alt="Design Process Graphic" src="./img/components.png" />
            <DesignArtifactsGraphic alt="Design Process Graphic" src="./img/icons.png" />
        </DesignArtifactsGraphicContainer>
      </DesignArtifactsContainer>
    </div>
  );
};

export default DesignArtifacts;
