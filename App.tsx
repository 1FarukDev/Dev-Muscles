import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FTXText from './src/components/FTXText';
import FTXButton from './src/components/FTXButton';

export default function App() {
  return (
    <View style={styles.container}>
      <FTXText 
      text='Hello'
       weight='bold' 
       size='h1'
       color='secondary'
       />
      <FTXButton
        buttonText="rap"
        type='primary'
        onPress={() => console.log("hello")}
        weight='xbold'

      />
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
