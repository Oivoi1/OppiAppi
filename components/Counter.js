import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useReducer, useEffect} from 'react'

export default function Counter({initValue, maxValue, totalPoints, setTotalPoints}) {
  
  useEffect(() => {
    if(totalPoints >= 38){
      setTotalPoints(38)
    }
    else if(totalPoints <= 8) {
      setTotalPoints(8)
    }
  
  }, [totalPoints])
  
 
    const initialState = {count :initValue}
  
      
const  reducer = (state, action) => {
     
  switch (action.type) {
    case 'add':
  
        if(state.count < maxValue) {
          return {
            count: state.count + 1 
          }
    }
      else {
        return {count: maxValue }
      }

    case 'substract':
      if(state.count > initValue) {
      return {
         count: state.count - 1 
      }
    }else {
      return { count: initValue }
    }
  
    default:
      throw new Error();
  }
}
const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <>
      <View style={styles.counterContainer}>
      <TouchableOpacity  
      onPress={() => dispatch({type: 'substract'}, setTotalPoints(prevValue => prevValue - 1))}
       ><Text style={styles.counterLabelSubs}>-</Text>
       </TouchableOpacity>
       <Text style={styles.counterLabel}>{state.count}</Text>
      <TouchableOpacity 
      onPress={() => dispatch({type: 'add'}, setTotalPoints(prevValue => prevValue + 1))} >
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
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#eeeeee'
         },

      counterLabelAdd: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        borderLeftColor: 'black',
        borderLeftWidth: 1,
        backgroundColor: 'green',
        borderBottomRightRadius:20,
        borderTopRightRadius: 20,
         },

      counterLabelSubs: {
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
        borderRightColor: 'black',
        borderRightWidth: 1,
        backgroundColor: 'red',
        borderBottomLeftRadius:20,
        borderTopLeftRadius: 20, 
      },

      counterLabel: {
        fontSize: 16,
        padding: 10,
        paddingRight:15,
        paddingLeft: 15,
        fontWeight: 'bold',
      },
})