import React, {useState} from 'react'
import { StyleSheet, Text, Linking, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Button} from 'react-native';
import Modal from 'react-native-modal'

export default function AdditionalContent() {


    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible (() => !isModalVisible)
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Muuta hyödyllistä sisältöä</Text>
        
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://luovi.fi/opiskelen-luovissa/ruokalistat/')}>
              <Text style={styles.buttonText}>Luovin ruokalistat</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={handleModal}>
                <Text style={styles.buttonText}>Joukkoliikenteen aikataulut</Text>
            <Modal isVisible={isModalVisible}>
              <ScrollView style={styles.scrollView}>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.hsl.fi/')}>
                  <Text style={styles.buttonText}>Helsinki</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.imatra.fi/asuminen-ja-ymparisto/joukkoliikenne')}>
                  <Text style={styles.buttonText}>Imatra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://jojo.joensuu.fi/')}>
                  <Text style={styles.buttonText}>Joensuu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.kajaaninjoukkoliikenne.fi/')}>
                  <Text style={styles.buttonText}>Kajaani</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://pohjolanmatka.fi/linjaliikenne/kokkolan-paikallisliikenne/')}>
                  <Text style={styles.buttonText}>Kokkola</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://vilkku.kuopio.fi/')}>
                  <Text style={styles.buttonText}>Kuopio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.lappeenranta.fi/fi/Kartat-ja-liikenne/Paikallisliikenne/Aikataulut')}>
                  <Text style={styles.buttonText}>Lappeenranta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.oulunjoukkoliikenne.fi/reitit-ja-aikataulut')}>
                  <Text style={styles.buttonText}>Oulu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.pori.fi/joukkoliikenne')}>
                  <Text style={styles.buttonText}>Pori</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkkari.fi/')}>
                  <Text style={styles.buttonText}>Rovaniemi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://harmanliikenne.fi/seinajoen-paikallisliikenne/')}>
                  <Text style={styles.buttonText}>Seinäjoki</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.nysse.fi/')}>
                  <Text style={styles.buttonText}>Tampere</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.vaasa.fi/asu-ja-ela/liikenne-ja-kadut/joukkoliikenne/bussiaikataulut-ja-reitit/')}>
                  <Text style={styles.buttonText}>Vaasa</Text>
                </TouchableOpacity>
            
                <Button title="Sulje" onPress={handleModal} />
              </ScrollView>
            </Modal>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('http://masto.luovi.fi/')}>
              <Text style={styles.buttonText}>Opiskelijaintra Masto</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://luovi.inschool.fi/')}>
              <Text style={styles.buttonText}>Wilma</Text>
            </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center', 
  },
  scrollView: {
    marginHorizontal: 20, 
  },
  title: {
    fontSize: 25,
    padding: 10,
    margin: 5,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: "#00ced1",
    padding: 10,
    borderRadius:10,
    width: 250,
    marginBottom: 20,
    alignSelf: 'center'
},
  buttonText: {
    color: "white",
    fontSize: 15,
    textAlign: 'center'
}
});