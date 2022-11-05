import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { useState } from "react";

// <----- COMPONENTS -----> //
import MainView from "./components/MainView";
import Testi from "./components/Testi";

export default function App() {
  const [testi, setTesti] = useState("VIIKOT");
  const [testi2, setTesti2] = useState("SUKAT");
  const Tab = createBottomTabNavigator();

  return (
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
            <View>
              <Text>{testi}</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Text>{testi2}</Text>
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
          component={MainView}
          options={{
            title: "Pääsivu",
          }}
          // initialParams={fontsLoaded}
        />
        <Tab.Screen
          name="Testi"
          component={Testi}
          options={{
            title: "Testi",
          }}
          // initialParams={fontsLoaded}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
