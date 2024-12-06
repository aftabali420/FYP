import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import RNPickerSelect from 'react-native-picker-select';


import { firebase } from './Config';

const  Signup2=()=> {
    const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setpassword]=useState('');
   const [Phone,setPhone]=useState('');
   const [age,setAge]=useState('');
   const [gender,setGender]=useState('');

    registerUser = async (email, password) =>{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url:'https://pakwheel-999a7.firebaseapp.com',
            })
            .then(() =>{
                alert('Verification email send successfully')
            }).catch((error) =>{
                alert(error.message)
            })
            .then(() =>{
               firebase.firestore().collection('UsersData')
               .doc(firebase.auth().currentUser.uid)
               .set({
                email, password,name
               }) 
            })
            .catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    }


 


    return (
       <View style={styles.container}>
      <Text></Text> 
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
 <ScrollView>
          

 <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/user-male-circle.png' }}
        />
        <TextInput
          style={[styles.inputs, { fontSize: 18 }]}
          placeholder="Full name"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
        />
        <TextInput
          style={[styles.inputs, { fontSize: 18 }]}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <TextInput
          style={[styles.inputs, { fontSize: 18 }]}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(password) => setpassword(password)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/calendar.png' }}
        />
        <TextInput
          style={[styles.inputs, { fontSize: 18 }]}
          placeholder="Age"
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          onChangeText={(age) => setAge(age)}
        />
      </View>
<TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} onPress={() => registerUser(email, password)}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0e9aa7',
 
  },
  backgroundImage: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
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
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    marginBottom: 40,
  },
  pickerContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 30,
  },
});
export default Signup2;