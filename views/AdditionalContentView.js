import React, { useState } from "react";
import { StyleSheet, Text, Linking, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Position from "../components/Position";
import { dataPublicTransport, THEME, dataLinks } from "../data/data";


export default function AdditionalContentView() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const onPress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Sivua ei löytynyt. Tarkista verkkotunnus ${url}`);
    }
  };

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
                  onPress={() => onPress(item.url)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>{item.city}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.buttonClose} onPress={handleModal}>
              <Text style={styles.buttonText}>Sulje</Text>
            </TouchableOpacity>
          </Modal>
        </TouchableOpacity>
        {dataLinks.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => onPress(item.url)}
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
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 25,
    padding: 10,
    margin: 5,
    fontFamily: "Bold",
  },
  button: {
    backgroundColor: THEME.lightBlue,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    elevation: 10,
    width: "95%",
    marginBottom: 20,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Regular"
  },
  buttonClose: {
    backgroundColor: THEME.darkBlue,
    padding: 10,
    borderRadius: 10,
    width: "85%",
    marginBottom: 20,
    alignSelf: "center",
  },
});
