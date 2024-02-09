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
      // background-color: rgba(77, 98, 151, 0.5);
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      padding: .5em;
      margin: .5em 0;
      cursor: pointer;
      border-radius: 5px;
      color: #333;
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
  border-radius: 2em;
  padding: 2em;
`;

const DesignArtifactsTextContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 2em;
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
      title: 'Consolidate Your Assets',
      content: 'Instead of reinventing the wheel every time you need a common element like an icon or a reusable component, why not centralize them in a shared library? By doing so, you not only save time but also maintain a cohesive visual identity across your work.',
    },
    {
      title: 'Foster Collaboration and Iteration',
      content: 'A design library isn\'t just a static repository - it\'s a dynamic resource that encourages collaboration and iteration. Need a variation of an existing element or an entirely new addition? Simply update the library, and everyone on your team has access to the latest assets.',
    },
    {
      title: 'Accelerate Prototyping and Development',
      content: 'With a robust design library at your disposal, prototyping becomes a breeze. Rapidly assemble screens and interfaces using pre-built components, allowing you to focus on refining the user experience rather than starting from scratch.',
    },
    {
      title: 'Ensure Design-Code Harmony',
      content: 'Consistency between design and code is crucial for a seamless user journey. By adhering to a shared design language stored in your library, developers can translate designs into code more efficiently, resulting in faster development cycles and fewer discrepancies.',
    },
    {
      title: 'Conclusion',
      content: 'Investing time upfront to establish a comprehensive design library pays off exponentially in the long run. It\'s not just about creating assets - it\'s about empowering your team to work smarter, collaborate effectively, and deliver exceptional results with ease.',
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
      <h1>Harness the Power of Design Libraries</h1>
      <DesignArtifactsContainer>
        <DesignArtifactsTextContainer>
          <AccordionContainer>
            <>
              <p>In the fast-paced world of design and development, efficiency is key. That's where design libraries come in - 
                they're a game-changer for streamlining your workflow and ensuring consistency across projects.</p>
              <p>Click to why design libraries are a really really big deal:</p>
              <ul>
                {accordionItems.map((item, index) => (
                  <li key={index} onClick={() => toggleItem(index)}>
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
