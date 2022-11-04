import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// <----- COMPONENTS -----> //
import MainView from "./components/MainView";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainView />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7E2E8",
    alignItems: "center",
    justifyContent: "center",
  },
});
