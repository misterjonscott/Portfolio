import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Copy = ({ text, children, className, onCopy, description }) => {
  const handleCopy = () => {
    let textToCopy = description || children;
    
    // If description is an array, join elements with a new line character
    if (Array.isArray(textToCopy)) {
      textToCopy = textToCopy.join("\n"); // Join elements with newline
    }
    
    // Remove HTML tags (if needed)
    if (typeof textToCopy === 'string') {
      const textWithoutTags = textToCopy.replace(/<[^>]*>/g, "");
      return textWithoutTags;
    }
    // If not a string or array, return the original text
    return textToCopy;
  };
  

  // Get the text to copy (modified by handleCopy)
  const textForClipboard = handleCopy();

  return (
    <CopyToClipboard text={textForClipboard} onCopy={handleCopy}>
      <span className={className} dangerouslySetInnerHTML={{ __html: description || children }} />
    </CopyToClipboard>
  );
};

export default Copy;
