import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { breakpoints } from '../breakpoints';
import styled from "styled-components";

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
  align-items: flex-start;
  gap: 10px;
  width: 450px;
`;

const Message = styled(motion.div)`
  padding: 10px;
  border-radius: 10px;
  color: white;
  max-width: 80%;
  text-align: left;
  align-self: ${({ isEven }) => (isEven ? "flex-start" : "flex-end")};
  background-color: ${({ isEven }) => (isEven ? "#00C853" : "#2196f3")};
  position: relative;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
  &:before {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
    content: "";
    position: absolute;
    top: 100%;
    left: ${({ isEven }) => (isEven ? 0 : '100%')};
    transform: ${({ isEven }) => (isEven ? 'translateX(10px)' : 'translateX(-30px) scaleX(-1)')};
    border-top: 6px solid ${({ isEven }) => (isEven ? "#00C853" : "#2196f3")};
    border-left: 6px solid ${({ isEven }) => (isEven ? "#00C853" : "#2196f3")};
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
    width: 0;
    height: 0;
    border-radius: 0 0 0 5px;
  }
`;

const Messenger = () => {
  const [messages, setMessages] = useState([]);
  const [visibleMessages, setVisibleMessages] = useState([]);
  let requestIndex = 0;

  const MAX_MESSAGES = 20; // adjust this limit as needed

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

  const handleReceiveMessage = () => {
    const newMessageA = `Can you ${uxDesignRequests[requestIndex].request}`;
    const newMessageB = "Absolutely!";
    setMessages((prevMessages) => {
      if (prevMessages.length >= MAX_MESSAGES) {
        return [...prevMessages.slice(1), newMessageA, newMessageB];
      } else {
        return [...prevMessages, newMessageA, newMessageB];
      }
    });
    requestIndex = (requestIndex + 1) % uxDesignRequests.length;
  };

  useEffect(() => {
    const intervalId = setInterval(handleReceiveMessage, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const newVisibleMessages = messages.slice(-2);
      const timer = setTimeout(() => {
        setVisibleMessages((prevMessages) => {
          if (prevMessages.length >= 8) {
            return [...prevMessages.slice(2), newVisibleMessages[0]];
          } else {
            return [...prevMessages, newVisibleMessages[0]];
          }
        });
        setTimeout(() => {
          setVisibleMessages((prevMessages) => {
            if (prevMessages.length >= 8) {
              return [...prevMessages.slice(2), newVisibleMessages[1]];
            } else {
              return [...prevMessages, newVisibleMessages[1]];
            }
          });
        }, 1000);
        setTimeout(() => setMessages(messages.slice(2)), 3500);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <AppContainer>
      <div className='overlay' />
      <MessageContainer>
        <AnimatePresence>
          {visibleMessages.map((message, index) => (
            <Message
              key={index}
              isEven={index % 2 === 0}
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