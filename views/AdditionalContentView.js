import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Position from "../components/Position";
import { dataPublicTransport, THEME, dataLinks, NUMERIC, ICONS_SVG } from "../data/data";
import { onPressOpenLink } from "../utils/GeneralFunctions";
import CustomModalButton from "../components/CustomModalButton";

const SCREEN_PADDING = 10

export default function AdditionalContentView({navigation}) {

  //state variables for showing/not showing Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const BackButton = ( { onPress } ) => {
    return (
      <TouchableOpacity
        style={ styles.customButton }
        activeOpacity={ NUMERIC.opacityTouchFade }
        onPress={ onPress }
      >
        <ICONS_SVG.backArrowSvg/>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
      <View style={styles.additionalTitle}>
        <BackButton
          onPress={ () => navigation.navigate('MainView') }
        />
        <Text style={styles.title}>Muuta hyödyllistä sisältöä</Text>
      </View>
      <ScrollView style={styles.scrollView}>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.lightBackground,
  },
  viewContainer: {
    width: "100%",
    height: "100%",
    padding: SCREEN_PADDING,
    paddingTop: 0
  },
  title: {
    fontSize: 25,
    padding: 10,
    margin: 5,
    fontFamily: "Bold",
    color: THEME.darkBlue
  },
  button: {
    backgroundColor: THEME.white,
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: THEME.darkBlue,
    width: "95%",
    marginBottom: 15,
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "SemiBold"
  },
  additionalTitle: {
    flexDirection: 'row',
    backgroundColor: THEME.lightBackground,
    alignItems: 'center',
  },
  customButton: {
    alignItems: 'center',
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 5,
    width: 40,
  },
});
