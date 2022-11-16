import {StyleSheet,Text,View,TouchableOpacity,ScrollView, Button, SafeAreaView} from "react-native";
import React, { useState} from "react";
import Modal from 'react-native-modal';
import { Ionicons } from "@expo/vector-icons";
// <----- COMPONENTS -----> //
import Counter from "../components/Counter";
// <----- DATA -----> //
import { strings, tuvaDataArr } from "../data/data";
// <----- FUNCTIONS -----> //
import { onPressOpenLink } from "../utils/Functions";

export default function TuvaScreen() {
  
  
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleModalOpenPress = ( itemId ) => {
    setIsModalVisible(!isModalVisible)
  }
  const handleModalClosePress = () => {
    setIsModalVisible(!isModalVisible)
  }
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView>
      
      {strings.map((item, index) => (
        <Text key={index} style={styles.heading}>{item.tuvaHeading}</Text>
      ))}
      
        <View
          style={styles.viewContainer}
        >
          
          {tuvaDataArr.map((item) => (
            <View style={styles.itemContainer} key={item.id}>
              <TouchableOpacity
                onPress={() => onPressOpenLink(item.url)}
              >
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemScope}>{item.scope}</Text>
              </TouchableOpacity>
               <View style={styles.buttonContainer}>
                <Counter
                  initValue={item.initValue}
                  maxValue={item.maxValue}
                  
                />
                <TouchableOpacity style={styles.iconHelp}
                onPress={() =>{ handleModalOpenPress(item.id) }}>
                  <Ionicons name="help" size={28} color="black" />
                  </TouchableOpacity>
                  </View>
                  <Modal style={styles.modalContainer}
        animationType="fade"
        visible={isModalVisible}
      >
      {strings.map((item, index) => (
            
            <Text key={index} style={styles.instructions}>{item.tuvaInstructions}</Text>
            
          ))} 
          <Button title="Sulje" onPress={() => handleModalClosePress()} /> 
      </Modal>
                
            </View>
          ))}
          
          
        </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
      alignItems: "center",
      justifyContent: "center",
  },
  heading: {
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  viewContainer: {
    width: "95%",
    height: "85%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemContainer: {
    marginBottom: 10,
    width: "90%",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    elevation: 8,
    backgroundColor: '#8ED1FC',
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
    paddigRight: 5,
    paddingBottom: 5,
    textAlign: "center",
  },
  itemScope: {
    fontSize: 16,
    paddingLeft: 10,
    paddigRight: 10,
    paddingBottom: 5,
    alignSelf: "center",
  },

  instructions: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  iconHelp: {
    alignItems:'center',
      backgroundColor: '#F5F5F5',
      borderRadius: 40,
      borderWidth: 0.5,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignSelf: 'flex-end',
      position: 'absolute',
      top: 5,
      right: 0,
      
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

    
    
  },
  modalContainer: {
    backgroundColor: '#8ED1FC',
    width: '60%',
    maxHeight: "50%",
    padding: 40,
    borderRadius: 15,
    borderColor: '#000000',
    borderWidth: 1,
    
   
    
  },
});
