import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { firebase } from '../../Firebase/Config';

const Signup2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const registerUser = async (email, password) => {
    if (!name || !email || !password || !age) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://wheelconnect-fyp.firebaseapp.com',
      });

      alert('Verification email sent successfully!');
      
      await firebase.firestore().collection('UsersData').doc(firebase.auth().currentUser.uid).set({
        email,
        password,
        name,
        age,
      });

      alert('User registered successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Create Account</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ios-glyphs/512/user-male-circle.png' }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Full Name"
            placeholderTextColor="#999"
            onChangeText={(name) => setName(name)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ios-glyphs/512/calendar.png' }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Age"
            placeholderTextColor="#999"
            keyboardType="numeric"
            onChangeText={(age) => setAge(age)}
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.signupButton]}
          onPress={() => registerUser(email, password)}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e9aa7',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: 320,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  inputs: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  inputIcon: {
    width: 24,
    height: 24,
    tintColor: '#888',
  },
  buttonContainer: {
    width: 320,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  signupButton: {
    backgroundColor: '#ff4dff',
  },
  signUpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Signup2;
