import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions, Image, Button } from 'react-native'
import React, { useState } from 'react'

const candy_blue = require( '../assets/candy_blue.png' )
const candy_green = require( '../assets/candy_green.png' )
const backArrow = require( '../assets/back_arrow.png' )
const unchecked = require( '../assets/unchecked_button.png' )
const checked = require( '../assets/checked_button.png' )

const data = {
  competenceData: [
    {
      buttonText: 'Hyvinvointi- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Hyvinvointiosaaminen',
      description: 'Opiskelija syventää tietojaan ja ymmärrystään omasta identiteetistään sekä opiskeluyhteisön ja yhteiskunnan moninaisuudesta, jossa erilaiset identiteetit, kielet, uskonnot ja katsomukset elävät rinnakkain ja vuorovaikutuksessa keskenään. Opiskelija saa kokemuksia kansainvälisyydestä omassa arjessaan ja opiskeluympäristössään sekä esimerkiksi vierailujen, kulttuuritapahtumien, verkostoyhteistyön tai muun yhteistön kautta. Mahdollinen kieliprofiilin laatiminen tukee osaltaan opiskelijan ymmärrystä kielellisestä identiteetistään sekä hänen kasvuaan kielenoppijana ja -käyttäjänä.',
      tasks: [
        {
          title: 'Tutustun itseeni.',
          checked: true,
        },
        {
          title: 'Hyväksyn itseni ja yhteisöni jäsenet omana itsenään.',
          checked: false,
        },
        {
          title: 'Ymmärrän erilaisia tapoja elää.',
          checked: false,
        },
        {
          title: 'Pohdin omaa kulttuuriani.',
          checked: true,
        },
        {
          title: 'Osaan toimia monikulttuurisessa maailmassa.',
          checked: false,
        },
        {
          title: 'Hankin kokemuksia kansainvälisyydestä.',
          checked: false,
        }
      ]
    },
    {
      buttonText: 'Monilukutaito',
      completed: true,
      detailsTitle: 'Minä osaan: Monilukutaito',
      description: '',
      tasks: [

      ]
    },
    {
      buttonText: 'Digiosaaminen',
      completed: true,
      detailsTitle: 'Minä osaan: Digiosaaminen',
      description: '',
      tasks: [

      ]
    },
    {
      buttonText: 'Ympäristö- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Ympäristöosaaminen',
      description: '',
      tasks: [

      ]
    },
    {
      buttonText: 'Kulttuuri- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Kulttuuriosaaminen',
      description: '',
      tasks: [

      ]
    },
    {
      buttonText: 'Yhteiskunta- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Yhteiskuntaosaaminen',
      description: '',
      tasks: [

      ]
    },
    {
      buttonText: 'Vuorovaikutus- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Vuorovaikutusosaaminen',
      description: '',
      tasks: [

      ]
    },
    {
      buttonText: 'Oppimaan oppiminen',
      completed: false,
      detailsTitle: 'Minä osaan: Oppimaan oppiminen',
      description: '',
      tasks: [

      ]
    }
  ]

}

const CustomButton = ( { onPress, imgSource } ) => {
  return (
    <TouchableOpacity
      style={ styles.customButton }
      activeOpacity={ 0.6 }
      onPress={ onPress }
    >
      <Image
        style={ styles.customButtonImg }
        source={ imgSource }
        resizeMode='contain'
      />
    </TouchableOpacity>
  )
}

const CompetenceIndicator = ( { item, onPress } ) => {
  const imgSource = item.completed ? candy_green : candy_blue;
  return (
    <TouchableOpacity
      style={ styles.button }
      activeOpacity={ 0.6 }
      onPress={ onPress }
    >
      <Image
        style={ styles.buttonImage }
        source={ imgSource }
        resizeMode='contain'
      />
      <Text style={ styles.buttonText }>{ item.buttonText }</Text>
    </TouchableOpacity>
  )
}

const CompetenceDetailsCheckbox = ( { task } ) => {
  const imgSource = task.checked ? checked : unchecked;
  return (
    <TouchableOpacity style={ styles.checkTaskContainer }>
      <Image style={ styles.checkTaskImg } source={ imgSource } />
      <Text>{ task.title }</Text>
    </TouchableOpacity>
  )
}

const CompetenceDetails = ( { item } ) => {
  return (
    <View>
      <Text style={ styles.title }>{ item.detailsTitle }</Text>
      <Text style={ styles.detailsDescription }>{ item.description }</Text>
      { item.tasks.map( ( task, index ) => <CompetenceDetailsCheckbox key={ index } task={ task } /> ) }
    </View>
  )
}

const CompetenceGoalsView = () => {
  const [ showDetailsFrom, setShowDetailsFrom ] = useState( null )

  const handleButtonPress = ( index ) => {
    console.log( index )
    setShowDetailsFrom( index )
  }

  if ( showDetailsFrom === null ) {
    return (
      <View style={ styles.viewContainer }>
        <StatusBar />
        <Text style={ styles.title }>Oppiäppi: Minä osaan</Text>
        <View style={ styles.buttonContainer }>
          { data.competenceData.map( ( item, index ) => <CompetenceIndicator key={ index } item={ item } onPress={ () => handleButtonPress( index ) } /> ) }
        </View>
      </View>
    )
  } else {
    return (
      <View style={ styles.detailsContainer }>
        <StatusBar />
        <CustomButton
          onPress={ () => setShowDetailsFrom( null ) }
          imgSource={ backArrow }
        />
        <CompetenceDetails item={ data.competenceData[ showDetailsFrom ] } />
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  viewContainer: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    padding: 10,
    height: '100%'
  },
  detailsContainer: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    padding: 10,
    height: '100%'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    // borderWidth: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  button: {
    // borderWidth: 1,
    alignItems: 'center',
    fontWeight: 'bold',
    height: 120,
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 40,
    width: 120,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    position: 'absolute',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkTaskContainer: {
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    flexDirection: 'row',
    height: 40,
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    padding: 4,
  },
  checkTaskImg: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  customButton: {
    alignItems: 'center',
    fontWeight: 'bold',
    height: 40,
    justifyContent: 'center',
    marginBottom: 10,
    width: 40,
  },
  customButtonImg: {
    width: '100%',
    height: '100%',
  },
  detailsDescription: {
    marginBottom: 10,
  }
} )

export default CompetenceGoalsView