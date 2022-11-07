import { StyleSheet, Text, View } from 'react-native';
import TuvaScreen from './views/TuvaScreen';

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

              if (route.name == "Main") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Tuva") {
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
            component={MainView}
            options={{
              title: "Pääsivu",
            }}
            // initialParams={fontsLoaded}
          />
          <Tab.Screen
            name="Tuva"
            component={TuvaScreen}
            options={{
              title: "TUVA",
            }}
            // initialParams={fontsLoaded}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppHeaderContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
