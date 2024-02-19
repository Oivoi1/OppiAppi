import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { THEME, APP_TROPHIES_STORAGE_KEY, APP_WEEKS_STORAGE_KEY } from "../data/data";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Modal from 'react-native-modal';
// <----- UTILS -----> //
import { AppHeaderContext, saveDataToStorage, getDataFromStorage } from "../utils/GeneralFunctions";
import { StatusBar } from "expo-status-bar";

// <----- COMPONENTS -----> //
import CustomModalButton from "../components/CustomModalButton";

export default function Header( {title, studyWeeks, trophies} ) {

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const toggleModal = (content) => {
    setModalContent(content);
    setModalVisible(!isModalVisible);
  };

  const renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text style={styles.modalHeaderText}>{modalContent.title}</Text>
      <Text style={styles.modalText}>{modalContent.text}</Text>
      <CustomModalButton onPress={toggleModal} />
    </View>
  );

  return (
    <>
    
    <View style={{ flexDirection: 'row', backgroundColor: THEME.darkBlue, padding: 10,marginLeft:-380,paddingTop:20 }}>
        
            <Image style={{ resizeMode: 'contain', height: 33}} source={require('../assets/adaptive-icon-smaller.png')} />
        
          <Text style={{ color:'white', marginLeft: -390, fontSize: 15, fontFamily: 'SemiBold', alignSelf:'flex-end' }}>OppiÄppi</Text>
          
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: THEME.darkBlue, padding: 10, justifyContent: "space-between"}}>

              {/* Left Header */}
      

      {/* Main Header Text */}
      <Text style={styles.headerText}>{title}</Text>

      {/* Right Header */}
      <TouchableOpacity
        style={[styles.headerViews, styles.headerRightView]}
        onPress={() =>
          toggleModal({
            title: "Suoritetut opintoviikot",
            text: "Tässä näet suoritettujen opintoviikkojen määrän. Voit lisätä tai vähentää suoritettujen opintoviikkojen määrää TUVA- osiossa.",
          })
        }
      >
        <Text style={styles.headerSidesText}>{trophies}/{studyWeeks}</Text>
        <Ionicons name="trophy" size={28} color="gold" />
      </TouchableOpacity>

      {/* Custom Modal */}
      <Modal isVisible={isModalVisible} style={styles.modal}
      animationType="fade"
      >
        {renderModalContent()}
      </Modal>
        </View>
    </>
  )
}
const styles = StyleSheet.create({
  headerViews: {
    flexDirection: "row",
    borderColor: "#FFF",
    borderWidth: 1,
    padding: 6,
    paddingRight: 8,
    borderRadius: 15,
    alignItems: 'center'
  },
  headerLeftView: {
    marginLeft: 5,
  },
  headerSidesText: {
    color: "#FFF",
    fontSize: 20,
    marginHorizontal: 9,
    fontFamily: "Bold",
    letterSpacing: 4
  },
  headerRightView: {
    marginRight: 5,
  },
  headerText: {
    color: "#FFF",
    fontSize: 28,
    fontWeight:"bold",
    fontFamily:"Regular",
    marginLeft:10,
    alignSelf: 'flex-end'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10

  },
  modalText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize:16

  },
  closeButton: {
    backgroundColor: THEME.darkBlue,
    padding: 7,
    width: 150,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10
  },
  closeButtonText: {
    fontFamily:"Regular",
    color: 'white', // Customize the text color as needed
    textAlign: 'center',
    fontWeight: "bold",
  },
});
