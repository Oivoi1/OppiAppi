import { StyleSheet, Text, View } from "react-native";
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
              backgroundColor: "#023B5D",
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <View style={[styles.headerViews, styles.headerLeftView]}>
                <Ionicons name="calendar" size={28} color="#8ED1FC" />
                <Text style={styles.headerSidesText}>{studyWeeks} / 38</Text>
              </View>
            ),
            headerRight: () => (
              <View style={[styles.headerViews, styles.headerRightView]}>
                <Text style={styles.headerSidesText}>{trophies}</Text>
                <Ionicons name="trophy" size={28} color="gold" />
              </View>
            ),

            headerTintColor: "#8ED1FC",
            tabBarItemStyle: {
              backgroundColor: "#023B5D",
            },
            headerTitleStyle: {
              // fontFamily: "Poppins-Bold",
            },
            tabBarActiveTintColor: "#FFF",
            tabBarInactiveTintColor: "#8ED1FC",
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
            name="AdditionalContent"
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
