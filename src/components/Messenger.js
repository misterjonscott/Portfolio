import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const AppContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(255, 255, 255, 1) 100%);
  }
`;

const StyledButton = styled.button`
  // margin-bottom: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 300px;
`;

const Message = styled(motion.div)`
  padding: 10px;
  border-radius: 10px;
  color: white;
  max-width: 80%;
  align-self: ${({ isEven }) => (isEven ? "flex-start" : "flex-end")};
  background-color: ${({ isEven }) => (isEven ? "#00C853" : "#2196f3")};
`;

const Messenger = () => {
  const [messages, setMessages] = useState([]);
  const [visibleMessages, setVisibleMessages] = useState([]);
  let requestIndex = 0;

  const uxDesignRequests = [
    { request: "Make it pop" },
    { request: "Simplify the user interface" },
    { request: "Improve the user flow" },
    { request: "Enhance the overall user experience" },
    { request: "Optimize for mobile devices" },
    { request: "Improve accessibility" },
    { request: "Increase conversions" },
    { request: "Personalize the experience" },
    { request: "Improve performance and speed" },
    { request: "Ensure consistency and branding" }
  ];

  const handleReceiveMessage = () => {
    const newMessageA = `Can you ${uxDesignRequests[requestIndex].request}`;
    const newMessageB = "Absolutely!";
    setMessages([...messages, newMessageA, newMessageB]);
    requestIndex = (requestIndex + 1) % uxDesignRequests.length;
  };

  useEffect(() => {
    const intervalId = setInterval(handleReceiveMessage, 5000); // 5000ms = 5 seconds
    return () => clearInterval(intervalId); // clean up the interval on component unmount
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const newVisibleMessages = messages.slice(-2);
      const timer = setTimeout(() => {
        setVisibleMessages((prevMessages) => [...prevMessages, newVisibleMessages[0]]);
        setTimeout(() => {
          setVisibleMessages((prevMessages) => [...prevMessages, newVisibleMessages[1]]);
        }, 1000);
        setTimeout(() => setMessages(messages.slice(2)), 3500);
      }, 1000);
  
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <AppContainer>
      {/* <div className='overlay' /> */}
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
      <StyledButton onClick={handleReceiveMessage}>Receive Message</StyledButton>
    </AppContainer>
  );
};

export default Messenger;