import { StyleSheet, Text, View } from "react-native";
import * as Location from 'expo-location'
import Weather from "./Weather";
import React, {useState, useEffect} from 'react';

export default function Position() {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


useEffect (()=> {
    (async() => {
        let {status}= await Location.requestForegroundPermissionsAsync();
        try {
            if (status ==='granted') {
                const location = await Location.getLastKnownPositionAsync({accuracy: 6})
                setLatitude(location.coords.latitude)
                setLongitude(location.coords.longitude)
                setIsLoading(false)
                
            } else {
                setIsLoading(false)
            }
            
        } catch (error) {
            const customMessage = "Säätietoja ei voida näyttää, koska sijaintipalvelut on kytketty pois päältä. Ota sijaintipalvelut käyttöön, jos haluat nähdä säätiedot.";
            alert(customMessage);
            setIsLoading(false)
        }
    })()
},[])

if (isLoading) {
    return <View style={styles.container}><Text>Getting location...</Text></View>
  } else {
return (

  <View>
    <Weather latitude={latitude} longitude={longitude}/>
  </View>  

)
}
}

const styles = StyleSheet.create({
label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 24,
    alignSelf: 'center'
},  
info: {
    margintop: 10,
    textAlign: 'center',
    fontSize: 24
},
image: {
    width: 120,
    height: 120,
    alignSelf: 'center'
}

})