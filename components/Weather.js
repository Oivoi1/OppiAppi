import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image }  from 'react-native';
import { THEME } from '../data/data';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = '77db940120d589d54e3e8c679039244e'
const ICON_URL = 'http://openweathermap.org/img/wn/'


export default function Weather(props) {

    const [temp, setTemp] = useState(0)
    const [feelsLike, setFeelsLike] = useState (0)
    const [icon, setIcon] = useState('')

    useEffect (() => {
        //Gets weather information from OpenWeather. Weather component is displayed in Position.js, which gets user's current coordinates
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
    <Text style={styles.label}>Päivän sää</Text>
    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center', marginBottom: 30}}>
    <View style={styles.panel}>
        <View style={styles.panelWhite}/>
        <View style={styles.panelBlue}/>
        <View style={styles.panelContent}>
            <Text style={styles.smallLabel}>Lämpötila</Text>
            <Text style={styles.info}>{temp.toFixed(0)} °C</Text>
            <Text style={styles.smallLabel}>Tuntuu kuin</Text>
            <Text style={styles.info}>{feelsLike.toFixed(0)} °C</Text>
            {icon && <Image source={{ uri: icon }} style={styles.image} />}
        </View>
    </View>
    </View>
    </>
)}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'SemiBold',
        marginTop: 10,
        fontSize: 24,
        alignSelf: 'center',
        color: THEME.darkBlue
    },
    panel: {
        borderRadius:15,
        backgroundColor: 'white',
        width: 250,
        height: 325,
        justifyContent: 'center',
        marginVertical: 10,
        display: 'flex',
        overflow: 'hidden',
    },
    panelWhite: {
        backgroundColor: 'white',
        width: '100%',
        height: '50%'
    },
    panelBlue: {
        backgroundColor: THEME.lightBlue,
        width: '100%',
        height: '50%'
    },
    panelContent: {
        position: 'absolute',
        alignSelf: 'center',
        top: 10
    },
    smallLabel: {
        fontFamily: 'Regular',
        fontSize: 16,
        alignSelf: 'center',
        bottom: -7,
    },
    info: {
        fontFamily: 'Bold',
        textAlign: 'center',
        fontSize: 30,
    },
    image: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        top: 0
    }

})