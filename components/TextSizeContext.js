import React from 'react';

// Define default text size options
export const textSizeOptions = {
  Pieni: 12,
  Normaali: 16,
  Suuri: 20,
  // Add more sizes as needed
};

// Create a context with a default value
const TextSizeContext = React.createContext({
  textSize: textSizeOptions.medium, // Default text size
  setTextSize: () => {}, // Placeholder function, to be implemented with useState
});

export default TextSizeContext;