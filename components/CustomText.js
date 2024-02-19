import React, { useContext } from 'react';
import { Text } from 'react-native';
import TextSizeContext from './TextSizeContext';

const CustomText = ({ children, style, size, ...props }) => {
  const { textSize } = useContext(TextSizeContext);

  // Determine the final fontSize: use `size` prop if provided, otherwise use context `textSize`
  const finalFontSize = size || textSize;

  // Merge styles: Apply the determined fontSize on top of provided styles
  const combinedStyles = [{ fontSize: finalFontSize }, style];

  return (
    <Text style={combinedStyles} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
