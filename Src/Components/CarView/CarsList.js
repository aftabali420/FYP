import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { firebase } from "../../Firebase/Config";

const CarsList = ({ navigation, route }) => {
  console.log(route.params)
  const { category, brandName, modelName,CitiesName } = route.params;
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let query = firebase.firestore().collection('Cars');
        if (category) query = query.where('category', '==', category);
        else if (brandName) query = query.where('brand', '==', brandName);
        else if (modelName) query = query.where('modelName', '==', modelName);
        else if (CitiesName) query = query.where('registeredIn', '==', CitiesName);

        const snapshot = await query.get();
        const carsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCars(carsList);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [category, brandName, modelName]);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemBox}
      onPress={() => navigation.navigate('CarDetails', { item })}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <View style={styles.itemInfo}>
            <MaterialCommunityIcons name="car" size={16} color="#fff" />
            <Text style={styles.itemInfoText}>{item.modelName}</Text>
          </View>
          <View style={styles.itemInfo}>
            <MaterialCommunityIcons name="map-marker" size={16} color="#fff" />
            <Text style={styles.itemInfoText}>{item.registeredIn}</Text>
          </View>
          <View style={styles.itemInfo}>
            <MaterialCommunityIcons name="fuel" size={16} color="#fff" />
            <Text style={styles.itemInfoText}>{item.fuelType}</Text>
          </View>
        </View>
      </LinearGradient>
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
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <MaterialCommunityIcons name="car-off" size={64} color="#ccc" />
          <Text style={styles.emptyText}>No cars available in this selection.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  listContent: {
    padding: 16,
  },
  itemBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  itemDetails: {
    padding: 16,
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffd700',
    marginBottom: 8,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemInfoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
    marginTop: 16,
  },
});

export default CarsList;
