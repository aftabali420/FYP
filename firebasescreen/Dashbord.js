import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import {firebase} from './Config';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

//DASHBOARD SCREEN IMPORT FORM PROFILE.JS*/

   function Dashboard() {
  const navigation = useNavigation();
  const { name, setNAme } = useState('');
  useEffect(() => {
    firebase.firestore().collection('UsersData')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setNAme(snapshot.data());
        }
        else {
          console.log('User does not exist');
        }
      });
  }, []);
  return (
    <SafeAreaView style={style.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Hellow {setNAme.name}
      </Text>
      <TouchableOpacity
        onPress={navigation.goBack}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default Dashboard;
const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
      },
      signupButton: {
        backgroundColor: '#FF4DFF',
      },
      signUpText: {
        color: 'white',
        fontSize: 18,
      },
})
