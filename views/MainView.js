import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const MainView = ({ navigation }) => {
  return (
    <View style={styles.main__container}>
      <View style={styles.content__container}>
        <TouchableOpacity
          style={styles.link__container}
          onPress={() => navigation.navigate("TuvaScreen")}
        >
          <Text style={styles.link__container__header}>Minun TUVA-opinnot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link__container}
          onPress={() => navigation.navigate("CompetenceGoalsView")}
        >
          <Text style={styles.link__container__header}>Minä osaan</Text>
          <Text style={styles.link__container__paragraph}>
            Laaja-alaiset tavoitteet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link__container}
          onPress={() => navigation.navigate("AdditionalContent")}
        >
          <Text style={styles.link__container__header}>Muuta hyödyllistä</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  main__container: {
    flex: 1,
    backgroundColor: "#F3F2EC",
    alignItems: "center",
    justifyContent: "center",
  },

  content__container: {
    width: "85%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  link__container: {
    width: "95%",
    height: "20%",
    backgroundColor: "#8ED1FC",

    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    elevation: 8,
    shadowColor: "#023B5D",
    alignItems: "center",
    justifyContent: "center",
  },
  link__container__header: {
    color: "#000",
    fontSize: 28,
    textAlign: "center",
  },
  link__container__paragraph: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
  },
});
