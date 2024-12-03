import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

// Sample product data
const products = [
  { id: 1, name: 'Audi', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/audi.jpg') },
  { id: 2, name: 'MG', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mg.jpg') },
  { id: 3, name: 'MG ZS', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mg2.jpg') },
  { id: 4, name: 'Mercedes', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/marc.jpg') },
  { id: 5, name: 'Nissan', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/nissan.jpg') },
  { id: 6, name: 'SUV', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/yaris.jpg') },
  { id: 7, name: 'Tesla', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/suv.jpg') },
  { id: 8, name: 'Mitsubishi', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mits.jpg') },
  { id: 9, name: 'Civic', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/civic.jpg') },
  { id: 10, name: 'Changan', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/chigan.jpg') },
];

const ProductScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('View', { item })}>
      <View style={styles.itemBox}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemModel}>Model: {item.model}</Text>
          <Text style={styles.itemVariant}>Variant: {item.variant}</Text>
          <View style={styles.fuelIconContainer}>
            <MaterialCommunityIcons name="fuel" size={20} color="#007BFF" />
            <Text style={styles.fuelText}>Fuel Type</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  itemBox: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
  },
  itemImage: {
    width: 130,
    height: 130,
    borderRadius: 8,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemModel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  itemVariant: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  fuelIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fuelText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#007BFF',
  },
});

export default ProductScreen;
