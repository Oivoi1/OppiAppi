import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

// <----- VIEWS -----> //
import CompetenceGoalsView from "./views/CompetenceGoalsView";
import MainView from "./views/MainView";
import TuvaScreen from "./views/TuvaScreen";
import AdditionalContent from "./views/AdditionalContent";

// <----- UTILS -----> //
import { AppHeaderContext } from "./utils/AppHeaderContext";

export default function App() {
  const [studyWeeks, setStudyWeeks] = useState(1);
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

              if (route.name == "Main") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Testi") {
                iconName = focused ? "add-circle" : "add-circle-outline";
              } else if (route.name === "Archive") {
                iconName = focused ? "archive" : "archive-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerStyle: {
              backgroundColor: "#81c8ee",
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <View style={[styles.headerViews, styles.headerLeftView]}>
                <Ionicons name="calendar" size={28} color="blue" />
                <Text style={styles.headerSidesText}>{studyWeeks} / 38</Text>
              </View>
            ),
            headerRight: () => (
              <View style={[styles.headerViews, styles.headerRightView]}>
                <Text style={styles.headerSidesText}>{trophies}</Text>
                <Ionicons name="trophy" size={28} color="gold" />
              </View>
            ),

            headerTintColor: "#102A57",
            tabBarItemStyle: {
              backgroundColor: "#ede8e4",
            },
            headerTitleStyle: {
              // fontFamily: "Poppins-Bold",
            },
            tabBarActiveTintColor: "#284277",
            tabBarInactiveTintColor: "gray",
            tabBarHideOnKeyboard: "true",
          })}
        >
          <Tab.Screen
            name="Main"
            component={CompetenceGoalsView}
            options={{
              title: "Pääsivu",
            }}
            // initialParams={fontsLoaded}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppHeaderContext.Provider>
  );
}

const styles = StyleSheet.create({
  headerViews: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
  },
  headerLeftView: {
    marginLeft: 10,
  },
  headerSidesText: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  headerRightView: {
    marginRight: 10,
  },
});
