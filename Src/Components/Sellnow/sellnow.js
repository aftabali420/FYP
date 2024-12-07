import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { firebase } from '../../../firebasescreen/Config';

const AddCar = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [category, setCategory] = useState(null);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const [brand, setBrand] = useState(null);
  const [brandOpen, setBrandOpen] = useState(false);

  const [model, setModel] = useState(null);
  const [modelOpen, setModelOpen] = useState(false);

  const [bike, setBike] = useState(null);
  const [bikeOpen, setBikeOpen] = useState(false);

  // Dropdown data
  const categories = [
    { label: 'Automatic Cars', value: 'Automatic Cars' },
    { label: 'Convertible', value: 'Convertible' },
    { label: 'Electrical Cars', value: 'Electrical Cars' },
    { label: 'Hybrid Cars', value: 'Hybrid Cars' },
    { label: 'Imported Cars', value: 'Imported Cars' },
    { label: 'Old Cars', value: 'Old Cars' },
    { label: 'Small Cars', value: 'Small Cars' },
    { label: 'Sports Cars', value: 'Sports Cars' },
  ];

  const carBrands = [
    { label: 'Suzuki', value: 'Suzuki' },
    { label: 'Toyota', value: 'Toyota' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Nissan', value: 'Nissan' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Audi', value: 'Audi' },
    { label: 'Mercedes', value: 'Mercedes' },
    { label: 'MG', value: 'MG' },
  ];

  const models = [
    { label: 'Corolla', value: 'Corolla' },
    { label: 'Civic', value: 'Civic' },
    { label: 'Mehran', value: 'Mehran' },
    { label: 'Alto', value: 'Alto' },
    { label: 'Vitz', value: 'Vitz' },
    { label: 'Cultus', value: 'Cultus' },
    { label: 'WagonR', value: 'WagonR' },
    { label: 'Grande', value: 'Grande' },
  ];

  const bikeBrands = [
    { label: 'Kawasaki', value: 'Kawasaki' },
    { label: 'Ducati', value: 'Ducati' },
    { label: 'Suzuki', value: 'Suzuki' },
    { label: 'Honda', value: 'Honda' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Yamaha', value: 'Yamaha' },
    { label: 'Aprilia', value: 'Aprilia' },
  ];

  const handleAddCar = async () => {
    if (!name || !phone || !description || !image || !category || !brand || !model || !bike) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await firebase.firestore().collection('Cars').add({
        name,
        phone,
        description,
        image,
        category,
        brand,
        model,
        bike,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert('Success', 'Car added Successfully');
      setName(''); setPhone(''); setDescription(''); setImage('');
      setCategory(null); setBrand(null); setModel(null); setBike(null);
    } catch (error) {
      Alert.alert('Error', `Failed to add vehicle: ${error.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.header}>Add Car</Text>
      <TextInput style={styles.input} placeholder="Car Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Image URL" value={image} onChangeText={setImage} />

      {/* Dropdowns */}
      <DropDownPicker
        open={categoryOpen}
        value={category}
        items={categories}
        setOpen={setCategoryOpen}
        setValue={setCategory}
        placeholder="Select Car Category"
        style={[styles.dropdown, { zIndex: categoryOpen ? 10 : 0 }]}
      />
      <DropDownPicker
        open={brandOpen}
        value={brand}
        items={carBrands}
        setOpen={setBrandOpen}
        setValue={setBrand}
        placeholder="Select Car Brand"
        style={[styles.dropdown, { zIndex: brandOpen ? 10 : 0 }]}
      />
      <DropDownPicker
        open={modelOpen}
        value={model}
        items={models}
        setOpen={setModelOpen}
        setValue={setModel}
        placeholder="Select Car Model"
        style={[styles.dropdown, { zIndex: modelOpen ? 10 : 0 }]}
      />
      <DropDownPicker
        open={bikeOpen}
        value={bike}
        items={bikeBrands}
        setOpen={setBikeOpen}
        setValue={setBike}
        placeholder="Select Bike Brand"
        style={[styles.dropdown, { zIndex: bikeOpen ? 10 : 0, marginBottom: 30 }]} // Adjusted margin
      />

      <TouchableOpacity style={styles.button} onPress={handleAddCar}>
        <Text style={styles.buttonText}>Add Car</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 50, // Increased padding for smooth scrolling
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 12,
    paddingLeft: 10,
  },
  dropdown: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddCar;
