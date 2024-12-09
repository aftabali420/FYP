import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { firebase } from "../../../firebasescreen/Config";

const CarsList = ({ navigation, route }) => {
  console.log(route.params)
  const { category, brandName } = route.params; // Destructure both category and brandName

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firebase Firestore
  useEffect(() => {
    const fetchCars = async () => {
      try {
        let query = firebase.firestore().collection('Cars');

        if (category) {
          query = query.where('category', '==', category);
        } else if (brandName) {
          query = query.where('brand', '==', brandName);
        }

        const snapshot = await query.get();
        const carsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCars(carsList);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [category, brandName]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CarDetails', { item })}>
      <View style={styles.itemBox}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemModel}>Model: {item.modelName}</Text>
          <Text style={styles.itemVariant}>Variant: {item.registeredIn}</Text>
          <View style={styles.fuelIconContainer}>
            <MaterialCommunityIcons name="fuel" size={20} color="#007BFF" />
            <Text style={styles.fuelText}>{item.fuelType}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : cars.length > 0 ? (
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No cars available in this selection.</Text>
        </View>
      )}
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
});

export default CarsList;
