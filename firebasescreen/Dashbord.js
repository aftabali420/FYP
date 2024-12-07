import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from './Config';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function Dashboard() {
  const navigation = useNavigation();
  const [name, setName] = useState(''); // Correct useState syntax

  useEffect(() => {
    // Fetch user data from Firestore
    const fetchUserData = async () => {
      const userId = firebase.auth().currentUser?.uid; // Ensure user is authenticated
      if (userId) {
        try {
          const snapshot = await firebase.firestore().collection('UsersData').doc(userId).get();
          if (snapshot.exists) {
            const data = snapshot.data();
            setName(data.name); // Assuming `data` has a `name` property
          } else {
            console.log('User does not exist');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.log('User not authenticated');
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut(); // Sign out the user
      Alert.alert('Success', 'You have successfully logged out!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }, // Navigate to login screen
      ]);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>
        Hello {name || 'Guest'} {/* Fallback if name is not set */}
      </Text>
      <TouchableOpacity
        onPress={handleSignOut}  // Use handleSignOut function for sign-out action
        style={styles.buttonContainer}
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  // Centers the content vertically and horizontally
    backgroundColor: '#f5f5f5',  // Light background color for a modern look
    padding: 20,  // Adds padding around the content for better spacing
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',  // Dark text color for better readability
    textAlign: 'center',
    marginBottom: 40,  // Adds space between the welcome text and the button
  },
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',  // Makes the button width responsive
    borderRadius: 30,
    backgroundColor: '#FF4DFF',  // Vibrant button color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Adds shadow for Android
  },
  signOutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',  // Bold text for the button
    textTransform: 'uppercase',  // Capitalize for emphasis
  },
});
