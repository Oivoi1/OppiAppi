
import { StyleSheet, Text, View } from 'react-native';
import AdditionalContent from './views/AdditionalContent';

export default function App() {
  return (
   
      <AdditionalContent/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
