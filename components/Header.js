import React from 'react'
import {Text, View, Image } from "react-native";
import { THEME } from "../data/data";


export default function Header() {
  return (
    <>
    <View style={{ flexDirection: 'row', backgroundColor: THEME.darkBlue, padding: 10,marginLeft:-380,paddingTop:20 }}>
        
            <Image style={{ resizeMode: 'contain', height: 30}} source={require('../assets/adaptive-icon-smaller.png')} />
        
          <Text style={{ color:'white', marginLeft: -390, fontSize: 17, fontFamily: 'SemiBold' }}>OppiÄppi</Text>
          
        </View>
    </>
  )
}
