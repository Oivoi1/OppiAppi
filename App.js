import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Constants from 'expo-constants';
import React, {useState} from 'react';

export default function App() {

  const stringDataTuva = [
    {
      id: 1,
      title: "Opiskelu- ja urasuunnittelutaidot",
      scope: "2-10 viikkoa",
      url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698963",
      initValue: 2,
    },
    {
      id: 2,
      title: "Perustaitojen vahvistaminen",
      scope: "1-30 viikkoa",
      url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698964",
      initValue: 1,
    },
    {
      id: 3,
      title: "Lukiokoulutuksen opinnot ja niihin valmentautuminen",
      scope: "1-30 viikkoa",
      url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698965",
      initValue: 1,
    },
    {
      id: 4,
      title: "Ammatillisen koulutuksen opinnot ja niihin valmentautuminen",
      scope: "1-30 viikkoa",
      url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698966",
      initValue: 1,
    },
    {
      id: 5,
      title: "Työelämätaidot ja työelämässä tapahtuva oppiminen",
      scope: "1-20 viikkoa",
      url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698967",
      initValue: 1,
    },
    {
      id: 6,
      title: "Arjen taidot ja yhteiskunnallinen osallisuus",
      scope: "1-20 viikkoa",
      url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698968",
      initValue: 1,
    },
    {
      id: 7,
      title: "Valinnaiset opinnot",
      scope: "1-10 viikkoa",
      url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698969",
      initValue: 1, 
    },
  ];
const onPress = async(url) => {
const supported = await Linking.canOpenURL(url);
if (supported) {
await Linking.openURL(url);
}
 else {
  Alert.alert(`Virheellinen osoite: ${url}`);
 }
};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TUVA-koulutuksen osat</Text>
      <ScrollView>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {stringDataTuva.map((item) => (
          <View style={styles.itemContainer}
                key={item.id}>
          <TouchableOpacity
            onPress={() => onPress(item.url)}
            style={styles.customButton}
          >
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemScope}>{item.scope}</Text>
            
          </TouchableOpacity>
          </View>
         ))}
         <Text style={styles.instructions}>Sijoita opintoviikot laatikoihin valintojesi mukaan, yhteensä 38 viikkoa. Pakolliset viikot ovat merkittynä valmiiksi.</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusbarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 8,
    
  },
  heading:{
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },

  itemContainer: {
    marginTop: 12,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingStart: 5,
    paddingEnd: 5,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
  },

  itemTitle: {
   fontSize: 18,
   fontWeight: 'bold',
   paddingLeft: 5,
   paddigRight: 5,
   paddingBottom: 5,
   textAlign: 'center',
   
  },
  itemScope: {
   fontSize: 16,
   paddingLeft: 10,
   paddigRight: 10,
   paddingBottom: 5,
   alignSelf: 'center',
  },

  customButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
  },
  instructions: {

  },
});
