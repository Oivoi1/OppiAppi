import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { THEME, APP_TROPHIES_STORAGE_KEY, APP_WEEKS_STORAGE_KEY } from "../data/data";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Modal from 'react-native-modal';
// <----- UTILS -----> //
import { AppHeaderContext, saveDataToStorage, getDataFromStorage } from "../utils/GeneralFunctions";
import { StatusBar } from "expo-status-bar";



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
      <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
        <Text style={styles.closeButtonText}>SULJE</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
    
    <View style={{ flexDirection: 'row', backgroundColor: THEME.darkBlue, padding: 10,marginLeft:-380,paddingTop:20 }}>
        
            <Image style={{ resizeMode: 'contain', height: 30}} source={require('../assets/adaptive-icon-smaller.png')} />
        
          <Text style={{ color:'white', marginLeft: -390, fontSize: 17, fontFamily: 'SemiBold' }}>OppiÄppi</Text>
          
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: THEME.darkBlue, padding: 10, justifyContent: "space-between"}}>

              {/* Left Header */}
      <TouchableOpacity
        style={[styles.headerViews, styles.headerLeftView]}
        onPress={() =>
          toggleModal({
            title: "Opintoviikot:",
            text: "TUVA-koulutuksen opintoviikkojen määrä. Voit muokata valintojasi TUVA -osiossa.",
          })
        }
      >
        <Ionicons name="today" size={28} color="white" />
        <Text style={styles.headerSidesText}>{studyWeeks}/38</Text>
      </TouchableOpacity>

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
        <Text style={styles.headerSidesText}>{trophies}</Text>
        <Ionicons name="trophy" size={28} color="gold" />
      </TouchableOpacity>

      {/* Custom Modal */}
      <Modal isVisible={isModalVisible} style={styles.modal}
      animationType="fade">
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
    padding: 5,
    borderRadius: 15,
  },
  headerLeftView: {
    marginLeft: 5,
  },
  headerSidesText: {
    color: "#FFF",
    fontSize: 20,
    marginHorizontal: 5,
    fontFamily: "Regular",
  },
  headerRightView: {
    marginRight: 5,
  },
  headerText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight:"bold",
    fontFamily:"Regular"
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
