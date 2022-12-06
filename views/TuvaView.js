import {StyleSheet,Text,View,TouchableOpacity,ScrollView, SafeAreaView, Button, Image} from "react-native";
import React, { useState, useContext, useEffect,} from "react";
import Modal from 'react-native-modal';


import { Ionicons } from "@expo/vector-icons";
// <----- COMPONENTS -----> //
import Counter from "../components/Counter";
// <----- DATA -----> //
import { STRINGS, TUVA_DATA, ICONS } from "../data/data";

// <----- FUNCTIONS -----> //
import { onPressOpenLink } from "../utils/Functions";
// <----- UTILS -----> //
import { handleSetTrophies } from '../utils/HeaderStateFunctions'
import { AppHeaderContext } from '../utils/AppHeaderContext'
import {getDataFromStorage, saveDataToStorage} from '../utils/GeneralFunctions/'

const STORAGE_KEY = '@tuva_Key';

export default function TuvaView() {
  //global-state from App.js 
  const {trophies, setTrophies} = useContext(AppHeaderContext);

  
  // <---state variables---> //
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleIntro, setIsModalVisibleIntro] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [modalWeeks, setModalWeeks] = useState(0);
  const [showModalDetailFromFirst, setShowModalDetailFromFirst] = useState(false);
  const [showModalDetailFromSecond, setShowModalDetailFromSecond] = useState(false);
  const [showModalDetailFromThird, setShowModalDetailFromThird] = useState(false);
  const [showModalDetailFromFourth, setShowModalDetailFromFourth] = useState(false);
  const [showModalDetailFromFifth, setShowModalDetailFromFifth] = useState(false);
  const [showModalDetailFromSixth, setShowModalDetailFromSixth] = useState(false);
  const [showModalDetailFromSeventh, setShowModalDetailFromSeventh] = useState(false);
 
  //save modalweeks to phone memory and retrieve value
  useEffect(() => {
    if(modalWeeks !== null || modalWeeks !== undefined) {
       saveDataToStorage(STORAGE_KEY, modalWeeks);
      }
    getDataFromStorage(STORAGE_KEY);
  }, [modalWeeks])

  const handleModalOpen = (index) => {
   //changed index to match data's id because id from data starts from 1
    const newIndex = index + 1;
    //current index to counter
    setClickedIndex(newIndex);
    setIsModalVisible(!isModalVisible);
  }
//this should be obvious
  const handleModalClose = () => {
    setIsModalVisible(!isModalVisible);
  }
//handle toggle course done or not and add to trophies if course done
  const handleModalButtonPress = ( index, itemId ) => {
       switch(itemId) {
        
        case 1:
          
          setShowModalDetailFromFirst(prevState => ({
            ...showModalDetailFromFirst,
            [index]: !prevState[index]
          }));
          !showModalDetailFromFirst[index] ? handleSetTrophies(setTrophies,trophies) : null
          break;
       case 2:
        
          setShowModalDetailFromSecond(prevState => ({
            ...showModalDetailFromSecond,
            [index]: !prevState[index]
          }));
          !showModalDetailFromSecond[index] ? handleSetTrophies(setTrophies,trophies) : null
          break;
       case 3:
        
            setShowModalDetailFromThird(prevState => ({
              ...showModalDetailFromThird,
              [index]: !prevState[index]
            }));
            !showModalDetailFromThird[index] ? handleSetTrophies(setTrophies,trophies) : null
            break;
       case 4:
        
       setShowModalDetailFromFourth(prevState => ({
        ...showModalDetailFromFourth,
        [index]: !prevState[index]
      }));
      !showModalDetailFromFourth[index] ? handleSetTrophies(setTrophies,trophies) : null
      break;
      case 5:
        
        setShowModalDetailFromFifth(prevState => ({
          ...showModalDetailFromFifth,
          [index]: !prevState[index]
        }));
        !showModalDetailFromFifth[index] ? handleSetTrophies(setTrophies,trophies) : null
        break;
        case 6: 
        
        setShowModalDetailFromSixth(prevState => ({
          ...showModalDetailFromSixth,
          [index]: !prevState[index]
        }));
        !showModalDetailFromSixth[index] ? handleSetTrophies(setTrophies,trophies) : null
        break;
        case 7: 
        
        setShowModalDetailFromSeventh(prevState => ({
          ...showModalDetailFromSeventh,
          [index]: !prevState[index]
        }));
        !showModalDetailFromSeventh[index] ? handleSetTrophies(setTrophies,trophies) : null
        break;
       
        default: 
        if(itemId === null || itemId === undefined) {
          throw new Error();
        }
      }  
  }
  //Renders modals buttons for course complition
  const ModalDetailsCheckbox = ( { index } ) => {
    const itemId = clickedIndex;
      let imgSource = null;

    if(itemId === 1) {
      imgSource = showModalDetailFromFirst[index] ? ICONS[ 'checked' ] : ICONS[ 'unchecked' ];
    }
   else if(itemId === 2) {
      imgSource = showModalDetailFromSecond[index] ? ICONS[ 'checked' ] : ICONS[ 'unchecked' ];
    }
    else if(itemId === 3) {
      imgSource = showModalDetailFromThird[index] ? ICONS[ 'checked' ] : ICONS[ 'unchecked' ];
    }
    else if(itemId === 4) {
      imgSource = showModalDetailFromFourth[index] ? ICONS[ 'checked' ] : ICONS[ 'unchecked' ];
    }
    else if(itemId === 5) {
      imgSource = showModalDetailFromFifth[index] ? ICONS[ 'checked' ] : ICONS[ 'unchecked' ];
    }
    else if(itemId === 6) {
      imgSource = showModalDetailFromSixth[index] ? ICONS[ 'checked' ] : ICONS[ 'unchecked' ];
    }
    else if(itemId === 7) {
      imgSource = showModalDetailFromSeventh[index] ? ICONS[ 'checked' ] : ICONS[ 'unchecked' ];
    }
   
    return (
      <TouchableOpacity 
      style={styles.checkTaskButton}
        onPress={ () => handleModalButtonPress(  index, itemId )}>
        <Image style={ styles.checkTaskImg } source={ imgSource } resizeMode='contain'/>
      </TouchableOpacity>
    )
  
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView>
      
      {STRINGS.map((item, index) => (
        <Text key={index} style={styles.heading}>{item.tuvaHeading}</Text>
      ))}
      <TouchableOpacity style={styles.iconInfo}
                onPress={() =>{ setIsModalVisibleIntro(!isModalVisibleIntro) }}>
                  <Ionicons name="ios-information-circle-outline" size={28} color="black" />
                  </TouchableOpacity>
                  
      <Modal style={styles.modalContainerInfo}
      //Modal for general info
        animationType="fade"
        visible={isModalVisibleIntro}
      >
      {STRINGS.map((item, index) => (
            
            <Text key={index} style={styles.instructions}>{item.tuvaInstructions}</Text>
            
          ))}       
          <Button title="Sulje" onPress={() => setIsModalVisibleIntro(!isModalVisibleIntro)} /> 
      </Modal>
      
      
        <View
          style={styles.viewContainer}
        >
          
          {TUVA_DATA.map((item, index) => (
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
      {STRINGS.map((item, index) => (
            
            <Text key={index} style={styles.instructions}>{item.tuvaInstructionsForCourseComplete}</Text>
            
          ))} 
          <View style={styles.checkTaskContainer}>
          {
          Array(modalWeeks).fill(<ModalDetailsCheckbox />).map((_,index)=>(
            <ModalDetailsCheckbox key={index} 
            index={index} />
          ))}
             </View>       
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
  iconInfo: {
    alignItems:'center',
      backgroundColor: '#F5F5F5',
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignSelf: 'flex-end',
      position: 'absolute',
      top: 0,
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
    maxWidth: '70%',
    maxHeight: "70%",
    padding: 40,
    borderRadius: 15,
    borderColor: '#000000',
    borderWidth: 1,
  },
  modalContainerInfo: {
    backgroundColor: '#8ED1FC',
    maxWidth: '55%',
    maxHeight: "35%",
    padding: 40,
    borderRadius: 15,
    borderColor: '#000000',
    borderWidth: 1,
    alignItems: 'center',
    fontSize: 18,
  },
  checkTaskContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
    width: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft:10,
  },
  checkTaskButton: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    margin: 5,
  },
  checkTaskImg: {
    height: 30,
    width: 30,
  },
  
});
