import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions, Image, Button } from 'react-native'
import React, { useState } from 'react'

const CustomButton = ({onPress, imgSource}) => {
  <TouchableOpacity 
    style={ [styles.customButton]}
    activeOpacity={ 0.6 }
    onPress={onPress}
    >
    <Image 
    style={ styles.customButtonImg }
    source={imgSource}
    resizeMode='contain'
    />
    <Button title='test'></Button>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  customButton: {

  }
})

export default CustomButton