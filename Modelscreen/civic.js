import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Correct import

const products = [
  { id: 1, name: 'Audi', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/audi.jpg') },
  { id: 2, name: 'MG', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mg.jpg') },
  { id: 3, name: 'Mg', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mg2.jpg') },
  { id: 4, name: 'Marcadise', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/marc.jpg') },
  { id: 5, name: 'Nissan', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/nissan.jpg') },
  { id: 6, name: 'suv', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/yaris.jpg') },
  { id: 7, name: 'Tesla', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/suv.jpg') },
  { id: 8, name: 'Mitsubishe', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mits.jpg') },
  { id: 9, name: 'Civic', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/civic.jpg') },
  { id: 10, name: 'Chigan', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/chigan.jpg') },
  { id: 11, name: 'Toyota yaris', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/yaris.jpg') },
];

const ProductScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('View', { item })}>
      <View style={styles.itemBox}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemModel}>{item.model}</Text>
          <Text style={styles.itemVariant}>{item.variant}</Text>
          {/* Correct usage of MaterialCommunityIcons */}
          <MaterialCommunityIcons name="car" size={25} style={styles.icon} />
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  itemBox: {
    flexDirection: 'row',
    backgroundColor: '#fffaf0',
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemModel: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  itemVariant: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  icon: {
    marginTop: 10,
    color: '#555',
  },
});

export default ProductScreen;
