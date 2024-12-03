import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firebase } from './Config';

import 'firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="pinwheel" size={60} color="#FFF" />
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        onChangeText={(email) => setemail(email)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        onChangeText={(password) => setpassword(password)}
      />

      <TouchableOpacity style={styles.button} onPress={() => loginUser(email, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.registerText}>Don’t Have an Account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2E45',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#DDD',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 8,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#1ABC9C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#1ABC9C',
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;
