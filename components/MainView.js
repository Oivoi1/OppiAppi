import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const MainView = ({ navigation }) => {
  return (
    <View style={styles.main__container}>
      <View style={styles.content__container}>
        <TouchableOpacity
          style={styles.link__container}
          // onPress={() => navigation.navigate("sivun nimi")}
        >
          <Text style={styles.link__container__font}>Minun TUVA-opinnot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link__container}>
          <Text style={styles.link__container__font}>Minä osaan</Text>
          <Text>Laaja-alaiset tavoitteet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link__container}>
          <Text style={styles.link__container__font}>
            Muuta hyödyllistä sisältöä
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  main__container: {
    flex: 1,
    backgroundColor: "#D7E2E8",
    alignItems: "center",
    justifyContent: "center",
  },

  content__container: {
    width: "85%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderRadius: 15,
  },
  link__container: {
    width: "80%",
    backgroundColor: "#FCC9C5",
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    elevation: 8,
    alignItems: "center",
  },
  link__container__font: {
    fontSize: 20,
    textAlign: "center",
  },
});
