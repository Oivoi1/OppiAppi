import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid, Vibration } from 'react-native';
import { SHORT_VIBRATE, LONG_VIBRATE, NOTIFY_VIBRATE } from "../data/data";

/**
 * Get data from the phone data storage.
 * 
 * @param {string} storageKey 
 * @returns {JSON} storagedata
 */
export const getDataFromStorage = async ( storageKey ) => {
  try {
    const storageItem = await AsyncStorage.getItem( storageKey );
    let parsedJSON = await JSON.parse( storageItem );
    if ( parsedJSON === null ) {
      parsedJSON = [];
    }
    return parsedJSON;
  } catch ( e ) {
    console.log( e );
  }
}

/**
 * Save data to the phone data storage.
 * 
 * @param {string} storageKey 
 * @param {JSON} data 
 */
export const saveDataToStorage = async ( storageKey, data ) => {
  try {
    const jsonValue = JSON.stringify( data );
    await AsyncStorage.setItem( storageKey, jsonValue );
  } catch ( e ) {
    console.log( e );
  }
}

/**
* Shows a short toast notification with a short vibration.
* @param {String} msg 
*/
export const showNotification = ( msg ) => {
  ToastAndroid.show(
    msg,
    ToastAndroid.SHORT
  );
  Vibration.vibrate( NOTIFY_VIBRATE );
}

/**
 * Short vibrate (100 ms).
 */
 export const vibrateShort = () => {
  Vibration.vibrate( SHORT_VIBRATE );
}

/**
 * Long vibrate (500 ms).
 */
 export const vibrateLong = () => {
  Vibration.vibrate( LONG_VIBRATE );
}