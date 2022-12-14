import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";

// <----- DATA -----> //
import { THEME } from "../data/data";

export default function CustomModalButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>Sulje</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonLabel: {
    fontFamily: "Bold",
    color: THEME.white,
    fontSize: 18,
  },

  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: THEME.darkBlue,
    marginBottom: 5,
    marginTop: 10,
    alignItems: "center",
  },
});
