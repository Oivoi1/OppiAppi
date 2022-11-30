import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Linking,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Modal from "react-native-modal";
import Position from "../components/Position";
import { dataPublicTransport } from "../data/data";

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
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            onPress("https://luovi.fi/opiskelen-luovissa/ruokalistat/")
          }
        >
          <Text style={styles.buttonText}>Luovin ruokalistat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPress("http://masto.luovi.fi/")}
        >
          <Text style={styles.buttonText}>Opiskelijaintra Masto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPress("https://luovi.inschool.fi/")}
        >
          <Text style={styles.buttonText}>Wilma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(
              "https://luovi.fi/tutustu-ja-hae-luoviin/tapahtumakalenteri/"
            )
          }
        >
          <Text style={styles.buttonText}>Tapahtumakalenteri</Text>
        </TouchableOpacity>
        <Position />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F2EC",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 25,
    padding: 10,
    margin: 5,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#8ED1FC",
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
  },
  buttonClose: {
    backgroundColor: "#023B5D",
    padding: 10,
    borderRadius: 10,
    width: "85%",
    marginBottom: 20,
    alignSelf: "center",
  },
});
