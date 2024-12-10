import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import { firebase } from "../../Firebase/Config";

const CustomDropdown = ({ options, value, onSelect, placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => setModalVisible(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text>{value || placeholder}</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={closeModal}
        >
          <View style={styles.modalView}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => {
                    onSelect(item.value);
                    closeModal();
                  }}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const AddCar = () => {
  const [brand, setBrand] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("data:image/png;base64,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");
  const [modelName, setmodelName] = useState(null);
  const [color, setColor] = useState(null);
  const [description, setDescription] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [kmDriven, setKmDriven] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [registeredIn, setRegisteredIn] = useState(null);
  const [transmissionType, setTransmissionType] = useState(null);
  const [fuelType, setFuelType] = useState(null);
  const [contact, setContact] = useState("");
  // Dropdown data
  const brands = [
    { label: "Toyota", value: "Toyota" },
    { label: "Suzuki", value: "Suzuki" },
    { label: "Honda", value: "Honda" },
    { label: "Nissan", value: "Nissan" },
    { label: "BMW", value: "BMW" },
    { label: "Audi", value: "Audi" },
    { label: "Mercedes", value: "Mercedes" },
    { label: "MG", value: "MG" },
  ];

  const colors=[
    { label: "red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "white", value: "white" },
    { label: "black", value: "black" },
    { label: "silver", value: "silver" },
    { label: "maroon", value: "maroon" }
  ]
  const modelNames = [
    {label: "altis",value: "altis", },
    {label: "corolla",value: "corolla", },
    {label: "Mehran",value: "Mehran", },
    {label: "civic",value: "civic", },
    {label: "cultus",value: "cultus", },
    {label: "alto",value: "alto", },
    {label: "wagonr",value: "wagonr", },
    {label: "grande",value: "grande", }

  ];
  const categories = [
    { label: "automatic", value: "automatic" },
    { label: "electric", value: "electric" },
    { label: "jeeps", value: "jeeps" },
    { label: "hybrid", value: "hybrid" },
    { label: "sports", value: "sports" },
    { label: "convertible", value: "convertible" },
    { label: "small", value: "small" },
    { label: "imported", value: "imported" },
    { label: "japanese", value: "japanese" },
    { label: "twodoor", value: "Sedan" },
    { label: "pickup", value: "Sedan" },
    { label: "lowprice", value: "Sedan" },
    { label: "old", value: "old" },
  ];

  const registeredInOptions = [
    { label: "Islamabad", value: "islamabad" },
    { label: "Lahore", value: "lahore" },
    { label: "KPK", value: "kpk" },
    { label: "Punjab", value: "punjab" },
    { label: "Karachi", value: "karachi" },
    { label: "Rawalpindi", value: "rawalpindi" },
    { label: "Peshawar", value: "peshawar" },
    { label: "Abbottabad", value: "abbottabad" },
    { label: "Nowshera", value: "nowshera" },
    { label: "Attock", value: "attock" },
    { label: "Charsadda", value: "charsadda" },
  ];

  const transmissionTypes = [
    { label: "Automatic", value: "Automatic" },
    { label: "Manual", value: "Manual" },
  ];

  const fuelTypes = [
    { label: "Electric", value: "Electric" },
    { label: "CNG", value: "CNG" },
    { label: "Petrol", value: "Petrol" },
    { label: "Diesel", value: "Diesel" },
  ];

  const handleAddCar = async () => {
    if (
      !brand ||
      !name ||
      !image ||
      !modelName||
      !description ||
      !modelYear ||
      !kmDriven ||
      !price ||
      !color ||
      !contact ||
      !category ||
      !registeredIn ||
      !transmissionType ||
      !fuelType
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (parseInt(modelYear) < 1980 || parseInt(modelYear) > 2024) {
      Alert.alert("Error", "Model year must be between 1980 and 2024");
      return;
    }

    try {
      await firebase
        .firestore()
        .collection("Cars")
        .add({
          brand,
          name,
          image,
          modelName,
          description,
          modelYear: parseInt(modelYear),
          kmDriven: parseInt(kmDriven),
          price: parseFloat(price),
          color,
          contact,
          category,
          registeredIn,
          transmissionType,
          fuelType,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      Alert.alert("Success", "Car added Successfully");
      setBrand(null);
      setName("");
      setDescription("");
      setModelYear("");
      setmodelName("")
      setKmDriven("");
      setPrice("");
      setCategory(null);
      setRegisteredIn(null);
      setTransmissionType(null);
      setFuelType(null);
    } catch (error) {
      Alert.alert("Error", `Failed to add vehicle: ${error.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.header}>Add Car</Text>

      <CustomDropdown
        options={brands}
        value={brand}
        onSelect={setBrand}
        placeholder="Select Car Brand"
      />

      <TextInput
        style={styles.input}
        placeholder="Car Name"
        value={name}
        onChangeText={setName}
      />
  <TextInput
        style={styles.input}
        placeholder="Car Image URL"
        value={image}
        // onChangeText={setImage}
      />
<CustomDropdown
        options={modelNames}
        value={modelName}
        onSelect={setmodelName}
        placeholder="Select Car Model name"
      />

      <CustomDropdown
        options={categories}
        value={category}
        onSelect={setCategory}
        placeholder="Select Car Category"
      />

      <TextInput
        style={styles.input}
        placeholder="Model Year (1980-2024)"
        value={modelYear}
        onChangeText={setModelYear}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="KM Driven"
        value={kmDriven}
        onChangeText={setKmDriven}
        keyboardType="numeric"
      />

      <CustomDropdown
        options={registeredInOptions}
        value={registeredIn}
        onSelect={setRegisteredIn}
        placeholder="Registered In"
      />

      <CustomDropdown
        options={transmissionTypes}
        value={transmissionType}
        onSelect={setTransmissionType}
        placeholder="Transmission Type"
      />

      <CustomDropdown
        options={fuelTypes}
        value={fuelType}
        onSelect={setFuelType}
        placeholder="Fuel Type"
      />
      <CustomDropdown
        options={colors}
        value={color}
        onSelect={setColor}
        placeholder="Select Color"
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
<TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contact}
        onChangeText={setContact}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
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
    paddingBottom: 50,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#4CAF50",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 12,
    paddingLeft: 10,
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: "top",
    paddingTop: 10,
  },
  dropdown: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    maxHeight: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ff4444",
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default AddCar;
