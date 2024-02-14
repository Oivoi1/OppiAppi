import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

// <----- DATA -----> //
import { THEME } from "../data/data";

export default function CustomModalButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>SULJE</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonLabel: {
    fontFamily: "Bold",
    color: THEME.white,
    fontSize: 16,
  },

  buttonContainer: {
    padding: 5,
    borderRadius: 30,
    backgroundColor: THEME.darkBlue,
    marginBottom: 5,
    marginTop: 10,
    alignItems: "center",
    width: "75%",
    alignSelf: "center"
  },
});
