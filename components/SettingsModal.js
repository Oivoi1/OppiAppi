import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import TextSizeContext, { textSizeOptions } from './TextSizeContext';
import { THEME } from "../data/data";
const SettingsModal = ({ isVisible, onClose }) => {
  const { textSize, setTextSize } = useContext(TextSizeContext);
  const [selectedSize, setSelectedSize] = useState(textSize);

  // Function to handle text size change
  const handleTextSizeChange = (size) => {
    setTextSize(size);
    setSelectedSize(size);
  };

  return (
    <Modal visible={isVisible} onRequestClose={onClose} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Iterate over textSizeOptions to create buttons dynamically */}
          {Object.entries(textSizeOptions).map(([key, value]) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.button,
                selectedSize === value && styles.selectedButton,
              ]}
              onPress={() => handleTextSizeChange(value)}
            >
              <Text style={styles.buttonText}>{key}</Text>
            </TouchableOpacity>
          ))}
          {/* Close button to exit the modal */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Sulje</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};



const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.4, // 40% of screen height
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-around', // Adjust as needed for spacing
  },
  button: {
    backgroundColor: THEME.darkBlue, // Assuming THEME is defined and imported
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#0693E3', // Different color for selected button
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16, // Adjust based on your THEME or preferences
  },
});

export default SettingsModal;
