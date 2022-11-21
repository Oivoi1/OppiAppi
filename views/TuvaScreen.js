import {StyleSheet,Text,View,TouchableOpacity,ScrollView, SafeAreaView, Button, Image} from "react-native";
import React, { useState} from "react";
import Modal from 'react-native-modal';

import { Ionicons } from "@expo/vector-icons";
// <----- COMPONENTS -----> //
import Counter from "../components/Counter";
// <----- DATA -----> //
import { strings, tuvaDataArr } from "../data/data";
const unchecked = require( '../assets/unchecked_button.png' )
const checked = require( '../assets/checked_button.png' )

// <----- FUNCTIONS -----> //
import { onPressOpenLink } from "../utils/Functions";

export default function TuvaScreen() {
  
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [modalWeeks, setModalWeeks] = useState(0);
  const [showModalDetails, setShowModalDetails] = useState(false);
 
  
  const handleModalOpen = (itemId) => {
   //changed index to match dataid
    const newIndex = itemId + 1;
    //current index to counter
    setClickedIndex(newIndex);
    setIsModalVisible(!isModalVisible);
    //console.log(refIndex);
  }
  const handleModalClose = () => {
    setIsModalVisible(!isModalVisible);
  }
  const handleModalButtonPress = ( index ) => {
    //console.log( index )
    let newArr = [...tuvaDataArr]
    const arrIndex = newArr.findIndex(object => {
      return object.id === index; });
      if (arrIndex !== -1) {
    newArr[index].checked(true);
    setShowModalDetails( !showModalDetails )

      }
  }
  const ModalDetailsCheckbox = ( { task,index } ) => {
    const imgSource = showModalDetails ? checked : unchecked;
    
    
    return (
      <TouchableOpacity style={ styles.checkTaskContainer }
        onPress={ () => handleModalButtonPress( index )}>
        <Image style={ styles.checkTaskImg } source={ imgSource } />
      </TouchableOpacity>
    )
  
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
          
          {tuvaDataArr.map((item, index) => (
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
                  itemId={item.id}
                  setModalWeeks={setModalWeeks}
                  clickedIndex={clickedIndex}
                  
                />
                <TouchableOpacity style={styles.iconHelp}
                onPress={() =>{ handleModalOpen(index) }}>
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
          <Text>{modalWeeks}</Text>
          {
          Array(modalWeeks).fill(<ModalDetailsCheckbox />).map((_, index)=>(
            <ModalDetailsCheckbox key={index} task={item.checked} index={index} />
          ))}
                    
          <Button title="Sulje" onPress={() => handleModalClose()} /> 
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
  
});
