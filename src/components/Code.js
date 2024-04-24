import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import ReactGA from "react-ga4";

const ContentContainer = styled.div`
  max-width: ${props => props.theme.pageWidth};
  background-color: #fff;
  border-radius: ${props => props.theme.smallBorderRadius};
  margin-bottom: 2em;
  h1 {
    font-size: 4em;
    margin: 0;
    color: ${props => props.theme.alternateText};
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2em;
    }
  }
  h2 {
    color: ${props => props.theme.alternateText};
    text-align: left;
  }
`;

const CodePageContainer = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 1em;
  }
  h1 {
    font-size: 4em;
    margin: 0;
    color: ${props => props.theme.text};
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2em;
    }
  }
`;  

const CodeSection = styled.div`
  padding: 20px;
`;

const IdiomGen = styled.span`
  background-color: rgba(242,239,234, 1);
  padding: .25em .5em;
  border-radius: ${props => props.theme.smallBorderRadius};
  margin: .125em;
  cursor: pointer;
`;

const titles = [
  "knee high to a grasshopper",
  "young as a spring chicken",
  "fresh as a daisy",
  "as cute as a button",
  "a small fry in a big pond",
  "a little rascal",
  "sweet as candy"
];

const CodeBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 4 columns in desktop view */
  gap: 16px; /* Adjust the gap between grid items as needed */
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const CodeBlock = styled.div`
  background-color: rgba(242,239,234, 1);
  padding: .5em;
  text-align: left;
  position: relative;
  border-radius: ${props => props.theme.smallBorderRadius};
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

const GitHubSection = styled.div`
  text-align: center;
`;

const GithubReview = styled.a`
  border: 1px solid #666;
  display: inline-flex;
  align-items: center;
  margin: 2em auto;
  text-decoration: none;
  padding: .5em;
  border-radius: ${props => props.theme.smallBorderRadius};
  &:hover {
    background-color: rgba(95, 158, 160, 0.4);
  }
  img {
    width: 30px;
    margin-right: 1em;
  }
  span {
    color: #333;
    flex: 1;
  }
`;

const GitFlowProcess = styled.div`
  img {
    width: 100%;
  }
`;

const Code = () => {
  const [currentTitle, setCurrentTitle] = useState(getRandomTitle());

  function getRandomTitle() {
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  }

  const handleTitleClick = () => {
    const newTitle = getRandomTitle();
    setCurrentTitle(newTitle);
  };

  return <CodePageContainer id='CodePageContainer'>
    <h1>Code (I love to write it)</h1>
    <ContentContainer id='ContentContainer'>
      <CodeSection id='CodeSection'>
        <h2 style={{ color: '#333' }}>What's This Code Business?</h2>
        <p>I've always been curious.  When I was <IdiomGen onClick={() => {
              handleTitleClick();
              ReactGA.event({
                category: 'Code',
                action: 'Idiomgen',
                label: 'Idiomgen'
              });
            }}>{currentTitle}</IdiomGen> and very comfortable
          with computers I discovered Q-Basic and gorilla.bas.  I couldn't tell what all those lines of code meant, but if I changed just the
          right values, I could make a single banana crater the entire cityscape. </p>
        <p>Some of the tools in my arsenal:</p>
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
        <GitHubSection>
          <GithubReview href="https://github.com/misterjonscott/Portfolio/" target="_blank" onClick={() => {
              ReactGA.event({
                category: 'Code',
                action: 'Github Link',
                label: 'Github Link'
              });
            }}>
              <img src="img/github.svg" alt="Github Octocat" />
              <span>Wanna see the source of this site?</span>
          </GithubReview>
          <GitFlowProcess>
            <h2 style={{ color: '#333' }}>My Ideal Git Workflow</h2>
            <img src='./img/GitBranching.png' alt='git flow or something' />
          </GitFlowProcess>
        </GitHubSection>
      </CodeSection>
      </ContentContainer>
    </CodePageContainer>;
};

export default Code;