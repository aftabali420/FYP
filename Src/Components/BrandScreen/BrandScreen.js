import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,Image
} from "react-native";

import {
  MaterialCommunityIcons
} from "react-native-vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import CarsList from "../CarView/CarsList";
import { PakwheelOfferings } from "../Advertisements/PakwheelOfferings";
import { PakwheelCertified } from "../Advertisements/PakwheelsCertified";
import { Pakwheelautostore } from "../Advertisements/Pakwheelautostore";
import CarDetails from "../CarView/CarDetailScreen";
import { Listnewcars } from "../Advertisements/ListnewCars";
const Stack = createNativeStackNavigator();

function BrandMainScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Browse Cars" component={Content} />
      <Stack.Screen name="CarsList" component={CarsList} />
      <Stack.Screen name="CarDetails" component={CarDetails} />

    </Stack.Navigator>
  );
}

function Content({ navigation }) {
  const brands = [
    { name: "suzuki", image: require("../../../assets/suzuki.jpg") },
    { name: "toyota", image: require("../../../assets/toyota-indus.png") },
    { name: "honda", image: require("../../../assets/honda.jpeg") },
    { name: "nissan", image: require("../../../assets/nissanl.jpg") },
    { name: "bmw", image: require("../../../assets/bmw.jpg") },
    { name: "audi", image: require("../../../assets/audi11.png") },
    { name: "mercedes", image: require("../../../assets/marcl.jpg") },
    { name: "mgl", image: require("../../../assets/mgl.jpg") },
  ];

  return (
    <View>
      <ScrollView>
      <ScrollView horizontal={true} style={styles.brandsContainer}>
        {brands.map((brand, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("CarsList", { brandName: brand.name })
            }
          >
            <View style={styles.itembox}>
              <Image source={brand.image} style={styles.img} />
              <Text style={styles.itemName}>{brand.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
        <Listnewcars/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  brandsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: "#f9f9f9",
  },
  itembox: {
    width: 100,
    height: 120,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  img: {
    width: 70,
    height: 60,
    resizeMode: "contain",
  },
  itemName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  titletext: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#444",
  },
  itembox2: {
    width: 190,
    height: 250,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  img2: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titletext2: {
    fontSize: 12,
    color: "#007BFF",
    marginTop: 8,
    marginHorizontal: 10,
    textAlign: "left",
  },
  desctext: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 5,
    color: "#555",
  },
  itembox3: {
    width: "90%",
    height: 320,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
});

export default BrandMainScreen;
