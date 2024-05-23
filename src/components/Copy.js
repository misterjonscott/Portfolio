import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Copy = ({ text, children, className, onCopy, description }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleCopy = () => {
    let textToCopy = description || children;
    if (Array.isArray(description)) {
      textToCopy = description.join("\n"); // Join elements with newline
    }

    // Remove HTML tags (if needed)
    if (typeof textToCopy === 'string') {
      const textWithoutTags = textToCopy.replace(/<[^>]*>/g, "");
      return textWithoutTags;
    }
    // If not a string or array, return the original text
    return textToCopy;
  };

  const handleClick = () => {
    setIsHighlighted(true);
    handleCopy(); // Call handleCopy to perform the copy operation

    setTimeout(() => {
      setIsHighlighted(false);
    }, 200); // Set timeout to un-highlight after 200 milliseconds (adjust as needed)
  };

  // Get the text to copy (modified by handleCopy)
  const textForClipboard = handleCopy();

  return (
    <CopyToClipboard text={textForClipboard} onCopy={onCopy}>
      {description && ( // Check if description exists before rendering
        <span
          className={`${className} ${isHighlighted ? 'highlighted' : ''}`}
          dangerouslySetInnerHTML={{ __html: description }}
          onClick={handleClick} // Attach onClick handler to the span
        >
          {Array.isArray(description) ? (
            <ul className="description-list">
              {description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          ) : (
            <span>{description}</span>
          )}
        </span>
      )}
      {/* Render children if description is not provided */}
    </CopyToClipboard>
  );
};

export default Copy;
