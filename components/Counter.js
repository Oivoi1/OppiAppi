import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, {useContext, useReducer, useEffect,} from 'react'

// <----- UTILS -----> //
import { handleSetStudyWeeksAdd, handleSetStudyWeeksSubstrack } from '../utils/HeaderStateFunctions'
import { AppHeaderContext } from '../utils/AppHeaderContext'


export default function Counter({initValue, maxValue, itemId, setModalWeeks, clickedIndex}) {
    
  //global-state from App.js 
  const {studyWeeks, setStudyWeeks} = useContext(AppHeaderContext);
  
    
  //usereducer init-state and reducer function.
  const initialState = [
    {
    id: itemId,
    count :initValue}];
 //this is for passing state to modalweeks
    useEffect(() => {
  const handleModalOpen = (clickedIndex) => { 
    
    //console.log(state.count)
    //console.log(clickedIndex)
    if (state.id === clickedIndex && clickedIndex !== undefined && clickedIndex !== null ) {
    console.log(state);
    let newCount=state.count 
    setModalWeeks(newCount);
  }
  
}
  handleModalOpen(clickedIndex); 
 }, [clickedIndex])
 
  
  
        
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
    default:
      throw new Error();
  }
}



const [state, dispatch] = useReducer(reducer, initialState[0]);

    return (
      <>
      <View style={styles.counterContainer}>
      <TouchableOpacity  
      onPress={() =>{ dispatch({type: 'substract', id: itemId}); 
      state.count > initValue ? handleSetStudyWeeksSubstrack(setStudyWeeks, studyWeeks) : null; 
      }}
       ><Text style={styles.counterLabelSubstract}>-</Text>
       </TouchableOpacity>
       <Text style={styles.counterLabel}>{state.count}</Text>
      <TouchableOpacity 
      onPress={() =>{ studyWeeks < 38 ? dispatch({type: 'add', id: itemId}) : null; 
      state.count < maxValue ? handleSetStudyWeeksAdd(setStudyWeeks, studyWeeks) : null; 
      }}>
          <Text style={styles.counterLabelAdd}>+</Text>
      </TouchableOpacity>
      </View>
      
      </>
    );
}
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