import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CarDetails = ({ route }) => {
  const { item } = route.params;

  const renderDetailItem = (icon, label, value) => (
    <View style={styles.detailItem}>
      <MaterialCommunityIcons name={icon} size={24} color="#007BFF" />
      <View style={styles.detailTextContainer}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        >
          <Text style={styles.carName}>{item.name}</Text>
          <Text style={styles.carPrice}>{item.price}</Text>
        </LinearGradient>
      </View>

      <View style={styles.contentContainer}>
        {renderDetailItem('car', 'Brand', item.brand)}
        {renderDetailItem('car-info', 'Model', item.modelName)}
        {renderDetailItem('fuel', 'Fuel Type', item.fuelType)}
        {renderDetailItem('map-marker', 'Registered In', item.registeredIn)}
        {renderDetailItem('calendar', 'Year', item.modelYear)}
        {renderDetailItem('speedometer', 'Mileage', `${item.mileage} km`)}
        {renderDetailItem('car-shift-pattern', 'Transmission', item.transmissionType)}
        {renderDetailItem('palette', 'Color', item.color)}
        {renderDetailItem('phone', 'Contact', item.phone)}

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Seller</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  imageContainer: {
    height: 300,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    justifyContent: 'flex-end',
    padding: 16,
  },
  carName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  carPrice: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffd700',
  },
  contentContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  descriptionContainer: {
    marginTop: 16,
    marginBottom: 24,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  contactButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarDetails;

