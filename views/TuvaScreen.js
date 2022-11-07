import {StyleSheet,Text,View,TouchableOpacity,ScrollView} from "react-native";
import Constants from "expo-constants";
import React, { useState } from "react";
import Counter from "../components/Counter";

export default function TuvaScreen() {

  return (
    <View style={styles.container}>
      {strings.map((item, index) => (
        <Text key={index} style={styles.heading}>{item.tuvaHeading}</Text>
      ))}
      <ScrollView>
        <View
          style={styles.viewContainer}
        >
          {tuvaDataArr.map((item) => (
            <View style={styles.itemContainer} key={item.id}>
              <TouchableOpacity
                onPress={() => onPressOpenLink(item.url)}
                style={styles.customButton}
              >
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemScope}>{item.scope}</Text>
              </TouchableOpacity>
              <View style={styles.counterBar}>
                <Counter
                  initValue={item.initValue}
                  maxValue={item.maxValue}
                />
              </View>
            </View>
          ))}
          {strings.map((item, index) => (
            <Text key={index} style={styles.instructions}>{item.tuvaInstructions}</Text>
          ))}
          
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusbarHeight,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  viewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  itemContainer: {
    marginTop: 12,
    width: "45%",
    flexDirection: "column",
    justifyContent: "center",
    paddingStart: 5,
    paddingEnd: 5,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
    paddigRight: 5,
    paddingBottom: 5,
    textAlign: "center",
  },
  itemScope: {
    fontSize: 16,
    paddingLeft: 10,
    paddigRight: 10,
    paddingBottom: 5,
    alignSelf: "center",
  },

  customButton: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
  },

  instructions: {},
});
