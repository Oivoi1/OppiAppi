import { StyleSheet, Text, View } from 'react-native';
import TuvaScreen from './views/TuvaScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <TuvaScreen />
    </View>
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
