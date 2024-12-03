import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ViewScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`Name: ${item.name}`}</Text>
        <Text style={styles.text}>{`Phone: ${item.phone}`}</Text>
        <Text style={styles.text}>{`Description: ${item.description}`}</Text>
        <Text style={styles.text}>{`Make: ${item.make}`}</Text>
        <Text style={styles.text}>{`Model: ${item.model}`}</Text>
        <Text style={styles.text}>{`Variant: ${item.variant}`}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen', // Light background for better contrast
  },
  image: {
    width: '100%',
    height: 300, // Set a fixed height for the image
    resizeMode: 'cover',
    borderBottomWidth: 1, // Border at the bottom of the image for separation
    borderBottomColor: '#ccc',
  },
  textContainer: {
    padding: 20,
    marginTop: 20, // Adds space after the image
    backgroundColor: '#fff', // White background for text container
    borderRadius: 8, // Rounded corners for the text box
    marginHorizontal: 15, // Adds horizontal spacing from the edges
    shadowColor: '#000', // Adding shadow for elevation effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // For Android shadow effect
  },
  text: {
    fontSize: 18,
    color: '#333', // Dark text color for readability
    marginBottom: 12, // Spacing between each text line
    lineHeight: 24, // Adjust line height for better readability
  },
});

export default ViewScreen;
