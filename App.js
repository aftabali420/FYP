import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from './firebasescreen/Config';
import HomeScreen from './HomeScreen';
import Test from './Test';
import CartScreen from './CartScreen';
import Signup2 from './firebasescreen/Signup2';
import Login from './firebasescreen/Login';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
  
    <HomeScreen/>
  
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