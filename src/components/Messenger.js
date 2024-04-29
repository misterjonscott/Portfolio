import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { breakpoints } from '../breakpoints';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';

const AppContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc(50% + 270px); /* Adjust the left position as needed */
  transform: translateX(-50%); /* Center the text horizontally */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 450px;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(255, 255, 255, 1) 100%);
    z-index: 3;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  width: 450px;
  max-height: 450px;
  height: 450px;
  overflow: auto;
  padding-bottom: 12px; // Match the height of the bubble tail
`;

const Message = styled(motion.div)`
  padding: 10px;
  border-radius: 10px;
  color: white;
  max-width: 80%;
  text-align: left;

  position: relative;
  filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 2px 4px);
  &:before {
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 0px 2px 4px);
    content: "";
    position: absolute;
    top: 100%;
    border-width: 6px;
    border-style: solid;
    width: 0px;
    height: 0px;
    border-radius: 0px 0px 0px 5px;
  }
  &.question {
    align-self: flex-start;
    // background-color: rgb(33, 150, 243); //Blue
    background-color: rgb(33, 150, 243); //Blue
    &:before {
      border-color: rgb(33, 150, 243) transparent transparent rgb(33, 150, 243);
      left: 0px;
      transform: translateX(10px);
    }
  }
  &.answer {
    align-self: flex-end;
    background-color: rgba(0, 164, 69, 1);
    &:before {
      border-color: rgba(0, 164, 69, 1) transparent transparent rgba(0, 164, 69, 1);
      left: 100%;
      transform: translateX(-30px) scaleX(-1);
    }
  }
`;

const Messenger = () => {
  const [messages, setMessages] = useState([]);
  const [requestIndex, setRequestIndex] = useState(0);

  useEffect(() => {
    const uxDesignRequests = [
      { request: "make it pop" },
      { request: "simplify the user interface" },
      { request: "improve the user flow" },
      { request: "enhance the overall user experience" },
      { request: "optimize for mobile devices" },
      { request: "improve accessibility" },
      { request: "increase conversions" },
      { request: "personalize the experience" },
      { request: "improve performance and speed" },
      { request: "ensure consistency and branding" }
    ];
  
    const uxDesignAnswers = [
      { answer: "Absolutely!" },
      { answer: "It would be my honor!" },
      { answer: "Definitely!" },
      { answer: "Without a doubt!" },
      { answer: "Absolutely, we can do that!" },
      { answer: "Yes, we'll make it happen!" },
      { answer: "Sure thing!" },
      { answer: "No problem at all!" },
      { answer: "Certainly, consider it done!" },
      { answer: "Of course, we're on it!" }
    ];
    
    const intervalId = setInterval(() => {
      const newIndex = (requestIndex + 1) % (uxDesignRequests.length * 2);
      const newMessage = newIndex % 2 === 0 ?
        { id: uuidv4(), message: uxDesignAnswers[newIndex / 2].answer, type: 'answer' } :
        { id: uuidv4(), message: `Can you ${uxDesignRequests[(newIndex - 1) / 2].request}`, type: 'question' };

      setMessages(prevMessages => {
        const newMessages = [...prevMessages, newMessage];
        return newMessages.length > 7 ? newMessages.slice(-7) : newMessages;
      });

      setRequestIndex(newIndex);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [requestIndex]);


  return (
    <AppContainer>
      <div className='overlay' />
      <MessageContainer>
  <AnimatePresence initial={false}>
    {messages.map(({ id, message, type }, index) => (
      <Message
        key={id}
        initial={{ opacity: 0, height: 0 }} // Initial opacity and height set to 0
        animate={{ opacity: 1, height: 'auto' }} // Final opacity and height set to auto
        exit={{ opacity: 0, height: 0 }} // Exit opacity and height set to 0
        transition={{ duration: 0.5, layout: true }} // Transition duration and layout transition
        className={type === 'answer' ? 'answer' : 'question'}
        // style={{ overflow: 'hidden' }} // Hide overflow to prevent content jumping
      >
        {message}
      </Message>
    ))}
  </AnimatePresence>
</MessageContainer>

    </AppContainer>
  );
};

export default Messenger;