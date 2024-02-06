import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const CodeSection = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 2em;
`;

const IdiomGen = styled.span`
  background-color: rgba(95, 158, 160, 0.5);
  padding: .25em .5em;
  border-radius: 3px;
  margin: .125em;
  cursor: pointer;
`;

const LearnMoreAboutMe = styled.span`
  background-color: rgba(95, 158, 160, 0.5);
  padding: .25em .5em;
  border-radius: 3px;
  margin: .125em;
  cursor: pointer;
  display: ${(props) => (props['data-islearnmorevisible'] ? 'none' : 'inline-block')};
`;

const titles = [
  "knee high to a grasshopper",
  "young as a spring chicken",
  "fresh as a daisy",
  "ss cute as a button",
  "a small fry in a big pond",
  "a little rascal",
  "sweet as candy"
];

// Technology-Lifecycle-Management-TLM@edwardjones.com 
// P230844
const CodeBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 4 columns in desktop view */
  gap: 16px; /* Adjust the gap between grid items as needed */
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const CodeBlock = styled.div`
  background-color: #f0f0f0;
  padding: .5em;
  text-align: left;
  position: relative;
  border-radius: 4px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1em;
  }
`;

const CodeSpan = styled.span`
  width: 80%;
  display: inline-block;
  font-weight: 600;
`;

const CodeBlockIcon = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: -10px;
  right: -10px;
`;

const Code = () => {
  const [currentTitle, setCurrentTitle] = useState(getRandomTitle());
  const [isLearnMoreVisible, setLearnMoreVisible] = useState(false);
  const toggleLearnMore = () => {
    setLearnMoreVisible(prevState => !prevState);
  };

  function getRandomTitle() {
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  }

  const handleTitleClick = () => {
    const newTitle = getRandomTitle();
    setCurrentTitle(newTitle);
  };

  return <div id="design-process">
    <h1>Code</h1>
    <CodeSection>
      <p>I've always been curious.  When I was <IdiomGen onClick={handleTitleClick}>{currentTitle}</IdiomGen> and very comfortable
        with computers I discovered Q-Basic and gorilla.bas.  I couldn't tell what all those lines of code meant, but if I changed just the
        right values, I could make a single banana crater the entire cityscape.  <LearnMoreAboutMe data-islearnmorevisible={isLearnMoreVisible} onClick={toggleLearnMore}>Want to learn more about me?</LearnMoreAboutMe></p>
      {isLearnMoreVisible && (
        <p>I grew up with a love for computers and video games, and a continually growing interest in learning how to work with them.  
          I studied digital art and animation in school, and built websites at home.  I wrote helpful automations using <a href="https://www.autoitscript.com/site/">AutoIt</a>, and used 
          <a href="https://en.wikipedia.org/wiki/ActionScript">Actionscript</a> to bring my Flash interactions to life.  With the foundations of what programming could do for me, I started my career in 
          Development.</p>
      )}
      <CodeBlocks>
        <CodeBlock>
          <CodeSpan>React.js</CodeSpan>
          <CodeBlockIcon src="./img/react.svg" />
        </CodeBlock>
        <CodeBlock>
          <CodeSpan>Responsive Web Design</CodeSpan>
          <CodeBlockIcon src="./img/responsive.svg" />
        </CodeBlock>
        <CodeBlock>
          <CodeSpan>HTML5 Semantic Markup</CodeSpan>
          <CodeBlockIcon src="./img/html5.svg" />
        </CodeBlock>
        <CodeBlock>
          <CodeSpan>CSS Flexbox and Grid Layouts</CodeSpan>
          <CodeBlockIcon src="./img/grid.svg" />
        </CodeBlock>
        <CodeBlock>
          <CodeSpan>Web Accessibility (A11y)</CodeSpan>
          <CodeBlockIcon src="./img/accessibility.svg" />
        </CodeBlock>
        <CodeBlock>
          <CodeSpan>Git Version Control</CodeSpan>
          <CodeBlockIcon src="./img/git.svg" />
        </CodeBlock>
        <CodeBlock>
          <CodeSpan>Webpack and Build Tools</CodeSpan>
          <CodeBlockIcon src="./img/webpack.svg" />
        </CodeBlock>
        <CodeBlock>
          <CodeSpan>Debugging and DevTools Proficiency</CodeSpan>
          <CodeBlockIcon src="./img/debug.svg" />
        </CodeBlock>
      </CodeBlocks>
    </CodeSection>
    </div>;
};

export default Code;