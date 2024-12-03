// Import necessary React Native components
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// AboutScreen component
const More = () => {
  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>About Us</Text>

      <View style={styles.developerContainer}>
        <Image
          source={require('./assets/Aftab.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Aftab Ali</Text>
      </View>

      <View style={styles.developerContainer}>
        <Image
          source={require('./assets/hammad.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>HAMMAD AYUB</Text>
      </View>

      
    </View>
  );
};

// Styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  developerContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default More;
