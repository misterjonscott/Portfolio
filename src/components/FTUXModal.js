import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const ModalContainer = styled(motion.div)`
  position: absolute;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.text};
  color: black;
  padding: 1em 3em 1em 1em;
  width: 350px;
  border-radius: ${props => props.theme.smallBorderRadius};
  box-sizing: border-box;
  border: ${props => props.theme.text};
  h3 {
    color: ${props => props.theme.black};
  }
  .textBlock {
    // background-color: ${props => props.theme.black};
    // background-opacity: 0.7;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1em;
  svg {
    fill: ${props => props.theme.black};
  }
`;

const HelperModal = ({ referenceElementId, modalWidth, position }) => {
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false); // Hide the modal after timeout
    }, 10000); // Set timeout duration

    return () => clearTimeout(timeoutId); // Clear the timeout when component unmounts

  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const referenceElement = document.getElementById(referenceElementId);
      if (referenceElement) {
        const buttonRect = referenceElement.getBoundingClientRect();
        
        // Calculate the desired position of the modal
        let top, left;
        if (position === 'bottomLeft') {
          top = buttonRect.bottom + 10;
          left = buttonRect.left;
        } else {
          // Calculate position for aligning top right corner of modal to bottom left corner of reference element
          top = buttonRect.bottom + 10;
          left = buttonRect.right; // Align top right corner of modal to bottom left corner of reference element
        }
        
        // Adjust left position to account for modal width
        left -= parseInt(modalWidth, 10);

        // Set the position of the modal
        setModalPosition({ top, left });
        setIsVisible(true);
      } else {
        console.log('reference element not found');
        setIsVisible(false); // Hide modal if reference element does not exist
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [referenceElementId, modalWidth, position]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <ModalContainer 
      ref={modalRef} 
      initial={{ opacity: 0, x: '100%' }} // Set initial position offscreen to the right
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : '100%' }} // Animate opacity and x position
      transition={{ duration: 0.3 }} // Set animation duration
      style={{ top: modalPosition.top, left: modalPosition.left, width: `${modalWidth}px` }}
    >
      <CloseButton onClick={handleClose}>
      <svg width="20" height="21" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.86733 1.19124C3.38335 0.707411 2.59899 0.707411 2.11501 1.19124L0.362987 2.94356C-0.120996 3.4274 -0.120996 4.2119 0.362987 4.69574L6.49566 10.8284L0.362987 16.9612C-0.120996 17.4451 -0.120996 18.2296 0.362987 18.7134L2.11501 20.4656C2.59899 20.9494 3.38335 20.9494 3.86733 20.4656L10 14.3329L16.1327 20.4656C16.6167 20.9494 17.401 20.9494 17.885 20.4656L19.637 18.7134C20.121 18.2296 20.121 17.4451 19.637 16.9612L13.5043 10.8284L19.637 4.69574C20.121 4.2119 20.121 3.4274 19.637 2.94356L17.885 1.19124C17.401 0.707411 16.6167 0.707411 16.1327 1.19124L10 7.32407L3.86733 1.19124Z" />
      </svg>
      </CloseButton>
      <h3>Enjoying Dark Mode?</h3>
      <p className='textBlock'>
        We also have a bright and vibrant Light Mode! Tap the sun icon in the top right to try it out.
      </p>
    </ModalContainer>
  );
};

export default HelperModal;
