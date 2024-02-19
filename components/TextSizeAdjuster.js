import React, { useContext, useEffect } from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextSizeContext } from './TextSizeContext'; // Assuming you've created this context

const TextSizeAdjuster = () => {
  const { textSize, setTextSize } = useContext(TextSizeContext);

  const saveTextSize = async (selectedSize) => {
    try {
      await AsyncStorage.setItem('textSizePreference', selectedSize.toString());
      setTextSize(selectedSize);
    } catch (error) {
      // Handle errors here
    }
  };

  useEffect(() => {
    const loadTextSize = async () => {
      try {
        const savedSize = await AsyncStorage.getItem('textSizePreference');
        if (savedSize !== null) {
          setTextSize(Number(savedSize));
        }
      } catch (error) {
        // Handle errors here
      }
    };

    loadTextSize();
  }, [setTextSize]);

  return (
    <View>
      {/* Button for each text size option */}
      <Button title="Small" onPress={() => saveTextSize(textSizeOptions.small)} />
      <Button title="Medium" onPress={() => saveTextSize(textSizeOptions.medium)} />
      <Button title="Large" onPress={() => saveTextSize(textSizeOptions.large)} />
    </View>
  );
};

export default TextSizeAdjuster;