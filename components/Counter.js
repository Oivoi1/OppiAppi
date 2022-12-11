import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React, {useContext, useReducer, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

// <----- UTILS -----> //
import { handleSetStudyWeeksAdd, handleSetStudyWeeksSubstrack } from '../utils/HeaderStateFunctions'
import { AppHeaderContext } from '../utils/GeneralFunctions'
import {saveDataToStorage, getDataFromStorage} from '../utils/GeneralFunctions'

// <----- DATA -----> //
import {TUVA_DATA,COUNTER_STORAGE_KEY } from "../data/data";



export default function Counter({initValue, maxValue, itemId, setModalWeeks, clickedIndex, stateToStorage, setStateToStorage}) {
    
  //global-state from App.js 
  const {studyWeeks, setStudyWeeks,} = useContext(AppHeaderContext);
  
  //if asyncstorage is loading 
  const [isLoading, setIsLoading] = useState(true);
  
    
  //usereducer init-state and reducer function.
  const initialState = [
    {
    id: itemId,
    count :initValue}];
 //this is for passing counter state to modalweeks
    useEffect(() => {
  const handleModalWeeksCount = (clickedIndex) => { 
    
    //console.log(state.count)
    //console.log(clickedIndex)
    if (state.id === clickedIndex && clickedIndex !== undefined && clickedIndex !== null ) {
    //console.log(state);
    let newCount=state.count 
    setModalWeeks(newCount);
  }
 
}
  handleModalWeeksCount(clickedIndex); 
 }, [clickedIndex, studyWeeks])


 //save to phone memory and load from phone memory
 useEffect (() => {
  const fetchState = async() => {
    //AsyncStorage.clear() //don't use this!
    let data = await getDataFromStorage(COUNTER_STORAGE_KEY);
    console.log( data)
    //save init values to storage from TUVA_DATA this is done only once
    if(data.length <= 0){
      dispatch({type: 'INIT_REDUCER'})
      let modifiedDataToStorage = [];
    for(let i = 0; i < TUVA_DATA.length; i++){
      modifiedDataToStorage.push({id: TUVA_DATA[i].id, count: TUVA_DATA[i].initValue})
    }
    saveDataToStorage(COUNTER_STORAGE_KEY,modifiedDataToStorage)
    } 
  
    else {
      setStateToStorage(data);
      
      dispatch({type: 'INIT_FROMDATA', data}) 
        }
    setIsLoading(false);

  
}
fetchState();

 },[state,itemId])

    //reducer function for usereducer    
const  reducer = (state, action) => {
     
  switch (action.type) {
    case 'add':

        if(state.count < maxValue && studyWeeks <= 38) {
          return {...state, 
            id: itemId, 
             count: state.count + 1 
          }
        
          }
      
      else {
        return {...state, 
          id: itemId, 
           count: state.count
        }
      }
      

    case 'substract':
      if(state.count > initValue && studyWeeks <= 38) {
        
        return {...state, 
          id: itemId, 
           count: state.count - 1
        }
    }
    else {
      return {...state, 
        id: itemId, 
         count: state.count
      }
    }
    case 'INIT_REDUCER':
      {
        return initialState[0]
      }

      case 'INIT_FROMDATA':
      //console.log(action.data)
      //fetch state from asyncstorage by id, change id back to index
      // if not found use initialstate
      let index = itemId - 1;
      if(action.data[index])
      return {
        id: action.data[index].id,  
        count: action.data[index].count,  
      }
    else{ return initialState[0]
    }
    
    
    default:
      throw new Error();
  }
}
//usereducer declaration
const [state, dispatch] = useReducer(reducer, {});

//handle course add state saving to async storage
const handleSaveToStorageAdd = (itemId) => {
  let newState = [];
  if(state.id === itemId) {
   newState = [...stateToStorage]

const findStateById = newState.findIndex(item => item.id === state.id);
if(findStateById === -1) {
  newState.push({id:itemId, count:state.count + 1}) }
  else {
    newState[findStateById].count = state.count + 1
  }
  setStateToStorage(newState);
  console.log(newState);
saveDataToStorage(COUNTER_STORAGE_KEY, newState);
}}

//handle course substract state saving to async storage
const handleSaveToStorageSubstract = (itemId) => {
  let newState = [];
  if(state.id === itemId) {
   newState = [...stateToStorage]

const findStateById = newState.findIndex(item => state.id === item.id);
if(findStateById === -1) {
  newState.push({id:itemId, count:state.count - 1}) }
  else {
    newState[findStateById].count = state.count - 1
  }
  setStateToStorage(newState);
  console.log(newState);
saveDataToStorage(COUNTER_STORAGE_KEY, newState);
}}

if(isLoading){
  <ActivityIndicator size="large" animating={true}/>
}
else {
    return (
      <>
      <View style={styles.counterContainer}>
      <TouchableOpacity 
      //if minus is pressed substract totalweeks and also counter and toggle save to memory
      onPress={() =>{ dispatch({type: 'substract', id: itemId}); 
      state.count > initValue ? handleSetStudyWeeksSubstrack(setStudyWeeks, studyWeeks) : null; 
      state.count > initValue ? handleSaveToStorageSubstract(itemId) : null
      }}
       ><Text style={styles.counterLabelSubstract}>-</Text>
       </TouchableOpacity>
       <Text style={styles.counterLabel}>{state.count}</Text>
      <TouchableOpacity
      //if plus is pressed add totalweeks and also counter and toggle save to memory
      onPress={() =>{ studyWeeks < 38 ? dispatch({type: 'add', id: itemId}) : null; 
      state.count < maxValue ? handleSetStudyWeeksAdd(setStudyWeeks, studyWeeks) : null; 
      state.count < maxValue ? handleSaveToStorageAdd(itemId) : null
      }}>
          <Text style={styles.counterLabelAdd}>+</Text>
      </TouchableOpacity>
      </View>
      
      </>
    );
}}
const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 2,
        borderRadius: 10,
        backgroundColor: '#0693E3',
        
         },

      counterLabelAdd: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#023B5D',
        borderBottomRightRadius:10,
        borderTopRightRadius: 10,
        color: '#FFFFFF',
        paddingLeft: 15,
        paddingRight: 15,
         },

      counterLabelSubstract: {
        fontSize: 18,
        padding:10,
        fontWeight: 'bold',
        backgroundColor: '#D3232E',
        borderBottomLeftRadius:10,
        borderTopLeftRadius: 10, 
        color: '#FFFFFF',
        paddingLeft: 15,
        paddingRight: 15,
      },

      counterLabel: {
        fontSize: 18,
        padding: 10,
        paddingRight:20,
        paddingLeft: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      
})