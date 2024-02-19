import React from 'react';

// Define default text size options
export const textSizeOptions = {
  small: 12,
  medium: 16,
  large: 20,
  // Add more sizes as needed
};

// Create a context with a default value
const TextSizeContext = React.createContext({
  textSize: textSizeOptions.medium, // Default text size
  setTextSize: () => {}, // Placeholder function, to be implemented with useState
});

export default TextSizeContext;