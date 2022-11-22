import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

// <----- VIEWS -----> //
import CompetenceGoalsView from "./views/CompetenceGoalsView";
import MainView from "./views/MainView";
import TuvaScreen from "./views/TuvaScreen";
import AdditionalContentView from "./views/AdditionalContentView";

// <----- UTILS -----> //
import { AppHeaderContext } from "./utils/AppHeaderContext";
import { StatusBar } from "expo-status-bar";

// <----- DATA -----> //
import { THEME } from "./data/data";

export default function App() {
  const [studyWeeks, setStudyWeeks] = useState(8);
  const [trophies, setTrophies] = useState(1);

  const Tab = createBottomTabNavigator();

  return (
    <AppHeaderContext.Provider
      value={{ studyWeeks, setStudyWeeks, trophies, setTrophies }}
    >
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Main"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name == "MainView") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "TuvaScreen") {
                iconName = focused ? "bulb" : "bulb-outline";
              } else if (route.name === "CompetenceGoalsView") {
                iconName = focused
                  ? "checkmark-done"
                  : "checkmark-done-outline";
              } else if (route.name === "AdditionalContentView") {
                iconName = focused
                  ? "ellipsis-horizontal-circle-sharp"
                  : "ellipsis-horizontal-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerStyle: {
              backgroundColor: THEME.darkBlue,
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                style={[styles.headerViews, styles.headerLeftView]}
                onPress={() =>
                  Alert.alert(
                    "Tämä on:",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  )
                }
              >
                <Ionicons name="calendar" size={28} color={THEME.lightBlue} />

                <Text style={styles.headerSidesText}>{studyWeeks} / 38</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={[styles.headerViews, styles.headerRightView]}
                onPress={() =>
                  Alert.alert(
                    "Tämä on 2:",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  )
                }
              >
                <Text style={styles.headerSidesText}>{trophies}</Text>
                <Ionicons name="trophy" size={28} color="gold" />
              </TouchableOpacity>
            ),

            headerTintColor: THEME.lightBlue,
            tabBarItemStyle: {
              backgroundColor: THEME.darkBlue,
            },
            headerTitleStyle: {
              // fontFamily: "Poppins-Bold",
            },
            tabBarActiveTintColor: "#FFF",
            tabBarInactiveTintColor: THEME.lightBlue,
            tabBarHideOnKeyboard: "true",
          })}
        >
          <Tab.Screen
            name="MainView"
            component={MainView}
            options={{
              title: "Pääsivu",
            }}
            // initialParams={fontsLoaded}
          />
          <Tab.Screen
            name="TuvaScreen"
            component={TuvaScreen}
            options={{
              title: "TUVA",
            }}
            // initialParams={fontsLoaded}
          />
          <Tab.Screen
            name="CompetenceGoalsView"
            component={CompetenceGoalsView}
            options={{
              title: "Minä osaan",
            }}
            // initialParams={fontsLoaded}
          />
          <Tab.Screen
            name="AdditionalContentView"
            component={AdditionalContentView}
            options={{
              title: "Muuta",
            }}
            // initialParams={fontsLoaded}
          />
        </Tab.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </AppHeaderContext.Provider>
  );
}

const styles = StyleSheet.create({
  headerViews: {
    flexDirection: "row",
    borderColor: "#FFF",
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
  },
  headerLeftView: {
    marginLeft: 10,
  },
  headerSidesText: {
    color: "#FFF",
    fontSize: 20,
    marginHorizontal: 8,
  },
  headerRightView: {
    marginRight: 10,
  },
});
