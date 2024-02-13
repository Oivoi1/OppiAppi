import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { THEME, APP_TROPHIES_STORAGE_KEY, APP_WEEKS_STORAGE_KEY } from "../data/data";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
// <----- UTILS -----> //
import { AppHeaderContext, saveDataToStorage, getDataFromStorage } from "../utils/GeneralFunctions";
import { StatusBar } from "expo-status-bar";



export default function Header( {title, studyWeeks, trophies} ) {



  return (
    <>
    
    <View style={{ flexDirection: 'row', backgroundColor: THEME.darkBlue, padding: 10,marginLeft:-380,paddingTop:20 }}>
        
            <Image style={{ resizeMode: 'contain', height: 30}} source={require('../assets/adaptive-icon-smaller.png')} />
        
          <Text style={{ color:'white', marginLeft: -390, fontSize: 17, fontFamily: 'SemiBold' }}>OppiÄppi</Text>
          
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: THEME.darkBlue, padding: 10, justifyContent: "space-between"}}>

              <TouchableOpacity
                style={[styles.headerViews, styles.headerLeftView]}
                onPress={() =>
                  Alert.alert(
                    "Opintoviikot:",
                    "TUVA-koulutuksen opintoviikkojen määrä. Voit muokata valintojasi TUVA -osiossa."
                  )
                }
              >
                <Ionicons name="today" size={28} color="white" />
                <Text style={styles.headerSidesText}>{studyWeeks}/38</Text>
              </TouchableOpacity>
              <Text style={styles.headerText}>{title}</Text>
              <TouchableOpacity
                style={[styles.headerViews, styles.headerRightView]}
                onPress={() =>
                  Alert.alert(
                    "Suoritetut opintoviikot",
                    "Tässä näet suoritettujen opintoviikkojen määrän. Voit lisätä tai vähentää suoritettujen opintoviikkojen määrää TUVA- osiossa."
                  )
                }
              >
                <Text style={styles.headerSidesText}>{trophies}</Text>
                <Ionicons name="trophy" size={28} color="gold" />
              </TouchableOpacity>
        </View>
    </>
  )
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
  headerText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight:"bold",
    fontFamily:"Regular"
  }
});
