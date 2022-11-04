import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const MainView = () => {
  return (
    <View style={styles.main__container}>
      <TouchableOpacity style={styles.link__container}>
        <Text style={styles.link__container__font}>MainView</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link__container}>
        <Text style={styles.link__container__font}>MainView 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link__container}>
        <Text style={styles.link__container__font}>MainView 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  main__container: {
    width: "75%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderRadius: 15,
  },
  link__container: {
    width: "75%",
    backgroundColor: "#FCC9C5",
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    elevation: 8,
  },
  link__container__font: {
    fontSize: 24,
    textAlign: "center",
  },
});
