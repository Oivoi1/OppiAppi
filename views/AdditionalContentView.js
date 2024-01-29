import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Position from "../components/Position";
import { dataPublicTransport, THEME, dataLinks } from "../data/data";
import { onPressOpenLink } from "../utils/GeneralFunctions";
import CustomModalButton from "../components/CustomModalButton";

export default function AdditionalContentView() {

  //state variables for showing/not showing Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Muuta hyödyllistä sisältöä</Text>
          <TouchableOpacity style={styles.button} onPress={handleModal}>
            <Text style={styles.buttonText}>Joukkoliikenteen aikataulut</Text>
              <Modal isVisible={isModalVisible}>
                <ScrollView style={styles.scrollView}>
                  {dataPublicTransport.map((item) => (
                  <TouchableOpacity
                  key={item.id}
                  onPress={() => onPressOpenLink(item.url)}
                  style={styles.button}
                  >
                    <Text style={styles.buttonText}>{item.city}</Text>
                  </TouchableOpacity>
                  ))}
              </ScrollView>  
                <CustomModalButton onPress={() => handleModal()} />
            </Modal>
          </TouchableOpacity>
            {dataLinks.map((item) => (
            <TouchableOpacity
            key={item.id}
            onPress={() => onPressOpenLink(item.url)}
            style={styles.button}
            >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
           ))}
        <Position />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.lightBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginHorizontal: 10,
    
  },
  title: {
    fontSize: 25,
    padding: 10,
    margin: 5,
    fontFamily: "Bold",
  },
  button: {
    backgroundColor: THEME.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    width: "100%",
    marginBottom: 15,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "SemiBold"
  },
});
