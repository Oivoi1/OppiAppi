import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image }  from 'react-native';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = '77db940120d589d54e3e8c679039244e'
const ICON_URL = 'http://openweathermap.org/img/wn/'


export default function Weather(props) {

    const [temp, setTemp] = useState(0)
    const [feelsLike, setFeelsLike] = useState (0)
    const [icon, setIcon] = useState('')

    useEffect (() => {
        
        const url = API_URL +
        'lat=' + props.latitude +
        '&lon=' + props.longitude +
        '&units=metric' +
        '&appid=' + API_KEY
        fetch(url)
        .then (res => res.json())
        .then(
            (result) => {
                setTemp(result.main.temp)
                setFeelsLike(result.main.feels_like)
                setIcon(ICON_URL + result.weather[0].icon + '@2x.png')   
            },
            (error) => {
                alert(error)
            }
        )
    },[])
   
return (
    <>
      <View>
        <Text style={styles.label}>Sää</Text>
        <Text style={styles.info}>{temp} °C</Text>
        <Text style={styles.smallLabel}>Tuntuu kuin</Text>
        <Text style={styles.info}>{feelsLike} °C</Text>
        <Image source={{uri: icon}} style={styles.image}/>
      </View>  
    </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'SemiBold',
        marginTop: 10,
        fontSize: 24,
        alignSelf: 'center'
    },
    smallLabel: {
        fontWeight: 'Regular',
        marginTop: 10,
        fontSize: 18,
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
        alignSelf: 'center',
        backgroundColor: '#ffff',
        borderRadius: 10,
        elevation: 20
    }

})