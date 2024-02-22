import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextSizeContext, { textSizeOptions } from './components/TextSizeContext';

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
import Header from "./components/Header";

export default function App() {
  const [studyWeeks, setStudyWeeks] = useState(2);
  const [trophies, setTrophies] = useState(0);
  const [title, setTitle] = useState('PÄÄSIVU');
  const [textSize, setTextSize] = useState(textSizeOptions.Normaali);
  
//load studyweeks and trophies from phone memory 
useEffect(() => {
  const fetchData = async() => {
    //AsyncStorage.clear() //don't use this! // nollaa tästä async storage
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

useEffect(() => {
  const loadTextSizePreference = async () => {
    try {
      const savedSize = await AsyncStorage.getItem('textSizePreference');
      if (savedSize !== null) {
        setTextSize(Number(savedSize));
      }
    } catch (error) {
      // Handle possible errors
      console.error('Failed to load the text size from AsyncStorage', error);
    }
  };

  loadTextSizePreference();
}, []);

  

  const Tab = createMaterialTopTabNavigator();

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

  const updateTitle = (routeName) => {
    if (routeName === "MainView") {
      setTitle("PÄÄSIVU");
    } else if (routeName === "TuvaView") {
      setTitle("TUVA");
    } else if (routeName === "CompetenceGoalsView") {
      setTitle("TAVOITTEET");
    } else if (routeName === "AdditionalContentView") {
      setTitle("MUUTA");
    }
  };

  return (
    <>
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
    <AppHeaderContext.Provider
      value={{ studyWeeks, setStudyWeeks, trophies, setTrophies }}
    >
     
     
      <Header title={title} studyWeeks={studyWeeks} trophies={trophies}/>
      <NavigationContainer
      onStateChange={(state) => {
        // Update title when route changes
        updateTitle(state.routes[state.index].name);
      }}
      >
        <Tab.Navigator
          tabBarPosition='bottom'
          tabBarActiveTintColor="white"
          initialRouteName="Main"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name == "MainView") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "TuvaView") {
                iconName = focused ? "create" : "create-outline";
              } else if (route.name === "CompetenceGoalsView") {
                iconName = focused
                  ? "checkmark-circle"
                  : "checkmark-circle-outline";
              } else if (route.name === "AdditionalContentView") {
                iconName = focused
                  ? "ellipsis-horizontal-circle-sharp"
                  : "ellipsis-horizontal-circle-outline";
              }

              const iconStyle = {
                // Add your custom styles here
                height: 30,
                width: 30, // Example: Adjusting margin for the focused state
              };

              return <Ionicons  name={iconName} size={25} color={color} style={iconStyle}/>;
            },
            headerStyle: {
              backgroundColor: THEME.darkBlue
            },
            headerTitleAlign: "center",

            headerTintColor: THEME.white,
            tabBarItemStyle: {
              backgroundColor: '#FFF',
            },
            tabBarLabelStyle: {
              fontFamily: "Regular",
            },
            headerTitleStyle: {
              fontFamily: "SemiBold",
              letterSpacing: 1.75,
            },
            tabBarLabelStyle: { fontSize: 10 },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: THEME.darkBlue,
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
              title: "TAVOITTEET",
            }}
            initialParams={fontsLoaded}
          />
          <Tab.Screen
            name="AdditionalContentView"
            component={AdditionalContentView}
            options={{
              title: "MUUTA",
            }}
            initialParams={fontsLoaded}
          />
        </Tab.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </AppHeaderContext.Provider>
    </TextSizeContext.Provider>
    </>
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
    marginLeft: 5,
  },
  headerSidesText: {
    color: "#FFF",
    fontSize: 20,
    marginHorizontal: 5,
    fontFamily: "Regular",
  },
  headerRightView: {
    marginRight: 5,
  },
});
