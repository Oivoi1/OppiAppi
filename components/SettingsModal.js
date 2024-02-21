import React, { useContext, useState } from 'react';
import { Modal, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import TextSizeContext, { textSizeOptions } from './TextSizeContext';
import { THEME } from "../data/data";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsModal = ({ isVisible, onClose }) => {
  const { textSize, setTextSize } = useContext(TextSizeContext);
  const [selectedSize, setSelectedSize] = useState(textSize);

  // Function to handle text size change and save it to AsyncStorage
  const handleTextSizeChange = async (size) => {
    setTextSize(size); // Update state
    setSelectedSize(size); // Update local selected size for UI feedback

    // Save the new size to AsyncStorage
    try {
      await AsyncStorage.setItem('textSizePreference', size.toString());
    } catch (error) {
      // Handle possible errors
      console.error('Failed to save the text size to AsyncStorage', error);
    }
  };

  return (
    <Modal visible={isVisible} onRequestClose={onClose} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header */}
          <Text style={styles.header}>Asetukset</Text>
          {/* Subheader with dynamic fontSize */}
          <Text style={[styles.subheader, { fontSize: selectedSize }]}>Tekstin koko:</Text>
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
          <TouchableOpacity style={styles.suljeButton} onPress={onClose}>
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: THEME.darkBlue,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15, // Adjust as needed
    paddingVertical: 5,
    color: THEME.darkBlue,

  },
  subheader: {
    marginBottom: 20, // Adjust as needed
  },
  button: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: THEME.darkBlue,
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center",
    width: "75%",
    alignSelf: "center"
  },

  suljeButton:{
    padding: 5,
    borderRadius: 30,
    backgroundColor: THEME.darkBlue,
    marginBottom: 10,
    marginTop: 40,
    alignItems: "center",
    width: "75%",
    alignSelf: "center"
  },

  selectedButton: {
    backgroundColor: THEME.blue, // Highlight selected size
    color: "white",
  },
  buttonText: {
    fontFamily: "Bold",
    color: THEME.white,
    fontSize: 16,
  },
});

export default SettingsModal;
