// ProductScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Alert } from 'react-native';
const ProductScreen = () => {
  // Dummy product data
  const [products] = useState([
    {
      id: 1,
      name: 'Car 1',
      make: 'Toyota',
      model: '2024',
      image: require('./assets/alto1.jpg'), 
    },
    {
      id: 2,
      name: 'Car 2',
      make: 'Honda',
      model: '2023',
      image: require('./assets/alto1.jpg'), 
    },
    // Add more products as needed
  ]);
  const handleAddToCart = (item) => {
    Alert.alert('Success', `${item.name} added to cart successfully!`);
  };
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productMake}>{item.make}</Text>
        <Text style={styles.productModel}>{item.model}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PakWheel Products</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
      />
    </View>
  );
};
export default ProductScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 1,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  productContainer: {
    width: '94%',
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 10,
    height: 120,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productDetails: {
    paddingLeft: 20,
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  productMake: {
    fontWeight: '600',
    color: '#555',
  },
  productModel: {
    color: 'green',
  },
  addToCartButton: {
    marginTop: 5,
    backgroundColor: 'green',
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: '600',
  },
});