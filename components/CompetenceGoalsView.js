import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { SvgUri } from 'react-native-svg'

const candy_blue = require( '../assets/candy_blue.png' )
const candy_green = require( '../assets/candy_green.png' )

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
          checked: false,
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
          checked: false,
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
    },
    {
      buttonText: 'Digiosaaminen',
      completed: true,
    },
    {
      buttonText: 'Ympäristö- osaaminen',
      completed: false,
    },
    {
      buttonText: 'Kulttuuri- osaaminen',
      completed: false,
    },
    {
      buttonText: 'Yhteiskunta- osaaminen',
      completed: false,
    },
    {
      buttonText: 'Vuorovaikutus- osaaminen',
      completed: false,
    },
    {
      buttonText: 'Oppimaan oppiminen',
      completed: false,
    }
  ]

}

const CompetenceIndicator = ( { item, onPress } ) => {
  const source = item.completed ? candy_green : candy_blue;
  return (
    <TouchableOpacity
      style={ styles.button }
      activeOpacity={ 0.6 }
      onPress={ onPress }
    >
      <Image
        style={styles.buttonImage}
        source={ source }
        resizeMode='contain'
      />
      <Text style={ styles.buttonText }>{ item.buttonText }</Text>
    </TouchableOpacity>
  )
}

const CompetenceDetails = ( { item } ) => {
  return (
    <View>

    </View>
  )
}

const CompetenceGoalsView = () => {
  const [ showDetailsFrom, setShowDetailsFrom ] = useState( null )

  const handleButtonPress = ( index ) => {
    setShowDetailsFrom( index )
  }

  if ( !showDetailsFrom ) {
    return (
      <View style={ styles.viewContainer }>
        <StatusBar />
        <Text style={ styles.title }>Oppiäppi: Minä osaan</Text>
        <View style={ styles.buttonContainer }>
          { data.competenceData.map( ( item, index ) => <CompetenceIndicator key={ item.index } item={ item } onPress={ () => handleButtonPress( index ) } /> ) }
        </View>
      </View>
    )
  } else {
    return (
      <View style={ styles.viewContainer }>
        <StatusBar />
        <Text style={ styles.title }>Oppiäppi: Details</Text>
        <View style={ styles.buttonContainer }>
          { data.competenceData.map( ( item ) => <CompetenceIndicator key={ item.index } item={ item } /> ) }
        </View>
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
} )

export default CompetenceGoalsView