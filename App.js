import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';

// <----- VIEWS -----> //
import CompetenceGoalsView from "./views/CompetenceGoalsView";
import MainView from "./views/MainView";
import TuvaView from "./views/TuvaView";
import AdditionalContentView from "./views/AdditionalContentView";

// <----- UTILS -----> //
import { AppHeaderContext, saveDataToStorage, getDataFromStorage } from "./utils/GeneralFunctions";
import { StatusBar } from "expo-status-bar";

// <----- DATA -----> //
import { THEME, APP_TROPHIES_STORAGE_KEY, APP_WEEKS_STORAGE_KEY } from "./data/data";

export default function App() {
  const [studyWeeks, setStudyWeeks] = useState(8);
  const [trophies, setTrophies] = useState(0);

//load studyweeks and trophies from phone memory 
useEffect(() => {
  const fetchData = async() => {
    //AsyncStorage.clear() //don't use this!
    let dataWeeks = await getDataFromStorage(APP_WEEKS_STORAGE_KEY);
    let dataTrophies = await getDataFromStorage(APP_TROPHIES_STORAGE_KEY);
    //console.log( data)

    //init asyncstorage for first time
    if(dataWeeks.length <= 0){
   saveDataToStorage(APP_WEEKS_STORAGE_KEY, studyWeeks) 
  }
  if(dataTrophies.length <= 0){
    saveDataToStorage(APP_TROPHIES_STORAGE_KEY, trophies)
  }
//otherwise there should be data => set data
    else {
      setStudyWeeks(dataWeeks)
        setTrophies(dataTrophies)
    }
}
  fetchData();
}, [])
  

  const Tab = createBottomTabNavigator();

  // Theme fonts
  const [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/FiraSans-Bold.ttf"),
    SemiBold: require("./assets/fonts/FiraSans-SemiBold.ttf"),
    Regular: require("./assets/fonts/FiraSans-Regular.ttf"),
    Light: require("./assets/fonts/FiraSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
   // console.log("Fonts OK.");
  }

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
              } else if (route.name === "TuvaView") {
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
            tabBarLabelStyle: {
              fontFamily: "Regular",
            },
            headerTitleStyle: {
              fontFamily: "SemiBold",
              letterSpacing: 1.75,
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
              title: "PÄÄSIVU",
            }}
            initialParams={fontsLoaded}
          />
          <Tab.Screen
            name="TuvaView"
            component={TuvaView}
            options={{
              title: "TUVA",
            }}
             initialParams={fontsLoaded}
          />
          <Tab.Screen
            name="CompetenceGoalsView"
            component={CompetenceGoalsView}
            options={{
              title: "MINÄ OSAAN",
            }}
            // initialParams={fontsLoaded}
          />
          <Tab.Screen
            name="AdditionalContentView"
            component={AdditionalContentView}
            options={{
              title: "MUUTA",
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
    fontFamily: "Regular",
  },
  headerRightView: {
    marginRight: 10,
  },
});
