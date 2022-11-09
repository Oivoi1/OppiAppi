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
      buttonText: 'Kulttuuri- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Kulttuuriosaaminen',
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
      description: 'Opiskelija kehittyy viestien tulkitsijana ja tuottajana sekä harjaantuu toimimaan erilaisten tekstien kanssa. Opiskelija osaa tarkastella ja tulkita kriittisesti erilaisia tekstejä. Tekstillä tarkoitetaan laajasti sekä puhuttuja että kirjoitettuja tekstejä, jotka sisältävät erilaisia kielimuotoja arkikielestä opiskelun kieleen ja eri tiedonalojen käsitteelliseen kieleen. Luku- ja kirjoitustaidon ohella opiskelija kehittää kuvanlukutaitoaan, medialukutaitoaan ja numeerista lukutaitoaan opiskelusuunnitelmansa mukaisesti.',
      tasks: [
        {
          title: 'Osaan toimia erilaisissa vuorovaikutustilanteissa.',
          checked: true,
        },
        {
          title: 'Kirjoitan eri tilanteisiin soveltuvaa tekstiä.',
          checked: false,
        },
        {
          title: 'Hankin opinnoissani tarvittavia matematiikan taitoja.',
          checked: false,
        },
        {
          title: 'Haen tietoa eri lähteistä.',
          checked: true,
        },
        {
          title: 'Osaan arvioida tiedon luotettavuutta.',
          checked: false,
        },
        {
          title: 'Osaan käyttää eri viestintätapoja.',
          checked: false,
        },
        ,
        {
          title: 'Ymmärrän tekijänoikeudet.',
          checked: false,
        }
      ]
    },
    {
      buttonText: 'Digiosaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Digiosaaminen',
      description: 'Opiskelija osaa käyttää digitaalisia palveluita osana oppimista ja ongelmanratkaisua. Opiskelija osaa toimia vastuullisesti sosiaalisessa mediassa sekä käyttää digitaalisia palveluita asioidessaan viranomaisten ja muiden sähköisiä asiointia edellyttävien palveluntarjoajien kanssa.',
      tasks: [
        {
          title: 'Kehitän ja päivitän digiosaamistani.',
          checked: false,
        },
        {
          title: 'Käytän sähköisiä välineitä ja sovelluksia.',
          checked: false,
        },
        {
          title: 'Toimin sähköisissä oppimisympäristöissä asiallisesti.',
          checked: false,
        },
        {
          title: 'Toimin vastuullisesti sosiaalisessa mediassa.',
          checked: false,
        },
        {
          title: 'Käytän digitaalisia palveluita.',
          checked: false,
        },
      ]
    },
    {
      buttonText: 'Ympäristö- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Ympäristöosaaminen',
      description: 'Opiskelija ymmärtää kestävän kehityksen merkityksen yhteiskunnalle ja maapallolle ja osaa toimia kestävän kehityksen mukaisesti. Opiskelija tunnistaa ja ymmärtää keskeisiä ympäristön muutoksia  ja ihmisen toiminnan merkityksen niihin. Hän tuntee kestävän kehityksen tavoitteet ja ymmärtää ilmiöiden vaikutuksen toisiinsa, mukaan lukien kulttuurisen, sosiaalisen ja taloudellisen näkökulman. Opiskelijaa osaa toimia kestävää elämäntapaa tukien ja ottaa vastuuta ympäristöstä yhteistyössä muiden kanssa.',
      tasks: [
        {
          title: 'Pohdin kestävän tulevaisuuden periaatteiden toteutumista omassa ja yhteisöni toiminnassa.',
          checked: false,
        },
        {
          title: 'Toimin kestävän tulevaisuuden periaatteiden mukaisesti.',
          checked: false,
        },
        {
          title: 'Ymmärrän, millaisia vaikutuksia omalla ja muiden toiminnalla on.',
          checked: false,
        },
        {
          title: 'Kannustan muita toimimaan kestävän tulevaisuuden periaatteiden mukaan.',
          checked: false,
        },
      ]
    },
    {
      buttonText: 'Hyvinvointi -osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Hyvinvointiosaaminen',
      description: 'Opiskelija ymmärtää terveyden ja terveellisten elämäntapojen merkityksen. Hän vaalii fyysistä, psyykkistä ja sosiaalista toimintakykyään ja hyvinvointiaan. Opiskelija omaksuu hyvinvointiaan tukevia toimintatapoja sekä tunnistaa niitä edistäviä yhteisöjä. Hän osaa suunnitella omaa ajankäyttöään siten, että opiskelu ja vapaa-aika vuorottelevat tarkoituksenmukaisesti. Opiskelija osaa hakea tietoa, apua ja tukea oman hyvinvointinsa ylläpitämiseen sekä hakeutua tarvittaessa hyvinvoinnin ja terveydenhuollon palveluiden pariin.',
      tasks: [
        {
          title: 'Tunnistan terveyttä ja hyvinvointia edistäviä ja haittaavia tekijöitä.',
          checked: false,
        },
        {
          title: 'Ymmärrän omien valintojen merkityksen hyvinvoinnilleni.',
          checked: false,
        },
        {
          title: 'Pidän huolta omasta fyysisestä, psyykkisestä ja sosiaalisesta hyvinvoinnistani.',
          checked: false,
        },
        {
          title: 'Ymmärrän opiskelun, levon ja vapaa-ajan vuorottelun merkityksen hyvinvoinnille.',
          checked: false,
        },
        {
          title: 'Pidän yllä opintoja tukevaa vuorokausirytmiä.',
          checked: false,
        },
        {
          title: 'Osaan käyttää alueen sosiaali- ja terveydenhuollon palveluita.',
          checked: false,
        },
        {
          title: 'Osallistun omaa hyvinvointia edistäviin liikunta- ja kulttuurimuotoihin.',
          checked: false,
        },
      ]
    },
    {
      buttonText: 'Yhteiskunta- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Yhteiskuntaosaaminen',
      description: 'Opiskelija ymmärtää demokraattisen, oikeudenmukaisen sekä tasa-arvoon ja yhdenvertaisuuteen perustuvan yhteiskunnan toimintaperiaatteita ja rakenteita. Hän osaa vaikuttaa oman ryhmänsä ja oppilaitoksensa asioihin sekä ymmärtää, miten yhteiskunnallisiin kysymyksiin voi ottaa kantaa.  Opiskelija omaksuu aktiivisen kansalaisuuden ja toimijuuden taitoja. Opiskelija ymmärtää työn merkityksen yksilön elämässä ja yhteiskunnassa.',
      tasks: [
        {
          title: 'Tähtään työelämään.',
          checked: false,
        },
        {
          title: 'Osallistun oman yhteisöni päätöksentekoon.',
          checked: false,
        },
        {
          title: 'Toimin tasa-arvoisesti ja oikeudenmukaisesti.',
          checked: false,
        },
        {
          title: 'Tunnen demokratian periaatteet.',
          checked: false,
        },
        {
          title: 'Tutustun yhteiskunnan toimintaan ja vaikuttamisen eri tapoihin.',
          checked: false,
        },

      ]
    },
    {
      buttonText: 'Vuorovaikutus- osaaminen',
      completed: false,
      detailsTitle: 'Minä osaan: Vuorovaikutusosaaminen',
      description: 'Opiskelija pyrkii toimimaan tilanteen vaatimalla tavalla erilaisissa vuorovaikutustilanteissa sekä ilmaisee erilaisia näkökantoja rakentavasti. Hän oppii kuuntelemaan ja kunnioittamaan toisten näkemyksiä ja tuomaan omia näkökulmiaan esille yksilönä ja ryhmän jäsenenä sekä kehittää empatiakykyään. Opiskelija osaa käyttää viestinnässä eri kieliä asianmukaisesti ja toimivasti. Opiskelija osaa viestiä asianmukaisesti myös erilaisilla sosiaalisen median alustoilla.',
      tasks: [
        {
          title: 'Osaan kuunnella ja keskustella huomioiden toiset.',
          checked: false,
        },
        {
          title: 'Tunnistan roolit erilaisissa yhteisöissä ja vuorovaikutustilanteissa.',
          checked: false,
        },
        {
          title: 'Osallistun turvallisen ilmapiirin rakentamiseen yhdessä muun opiskelijayhteisön kanssa.',
          checked: false,
        },
        {
          title: 'Kunnioitan eri yhteisöjen tapoja toimia.',
          checked: false,
        },
        {
          title: 'Harjoittelen tunnetaitoja.',
          checked: false,
        },
      ]
    },
    {
      buttonText: 'Oppimaan oppiminen',
      completed: false,
      detailsTitle: 'Minä osaan: Oppimaan oppiminen',
      description: 'Opiskelija osaa hankkia tietoa sekä jäsentää, arvioida ja soveltaa sitä. Hän osaa ottaa vastuuta opinnoistaan ja suunnitella niitä tavoitteellisesti. Hän tunnistaa ja osaa käyttää tarkoituksenmukaisia ja monipuolisia oppimistapoja ja -strategioita ja ymmärtää vertaisryhmän ja muun lähipiirin merkityksen oppimisen ja opiskelun tukena. Opiskelija kehittää opiskelukielen taitoaan tavoitteellisesti siten, että pystyy käyttämään puhuttua ja kirjoittua kieltä erilaisissa oppimisympäristöissä.',
      tasks: [
        {
          title: 'Tunnistat omia vahvuuksiasi.',
          checked: false,
        },
        {
          title: 'Tunnistat, mihin tarvitset apua ja ohjausta.',
          checked: false,
        },
        {
          title: 'Suunnittelet omia tavoitteitasi ja opintojasi.',
          checked: false,
        },
        {
          title: 'Etsin aktiivisesti tietoa.',
          checked: false,
        },
        {
          title: 'Tiedän miten opin parhaiten.',
          checked: false,
        },
        {
          title: 'Osaan toimia erilaisissa oppimisympäristöissä.',
          checked: false,
        },
        {
          title: 'Vahvistan suomen kielen taitoani.',
          checked: false,
        },
        {
          title: 'Otan vastuun opinnoistani.',
          checked: false,
        },
        {
          title: 'Osaan toimia itsenäisesti ja ryhmässä.',
          checked: false,
        },
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