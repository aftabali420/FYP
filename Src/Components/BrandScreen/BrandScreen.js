import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,Image
} from "react-native";
import CustomHeader from "../CustomHeader/CustomHeader";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


import CarsList from "../CarView/CarsList";
import CarDetails from "../CarView/CarDetailScreen";
import { Listnewcars } from "../Advertisements/ListnewCars";
const Stack = createNativeStackNavigator();

function BrandMainScreen() {
  return (
    <Stack.Navigator screenOptions={({ route, navigation }) => ({
      header: () => (
        <CustomHeader
          title={route.name} // Use the route name as the title
        />
      ),
    })}>
      <Stack.Screen name="Browse Brands" component={Content} />
      <Stack.Screen name="CarsList" component={CarsList} />
      <Stack.Screen name="CarDetails" component={CarDetails} />

    </Stack.Navigator>
  );
}

function Content({ navigation }) {
  const brands = [
    { name: "suzuki", image: require("../../assets/suzuki.jpg") },
    { name: "toyota", image: require("../../assets/toyota-indus.png") },
    { name: "honda", image: require("../../assets/honda.jpeg") },
    { name: "nissan", image: require("../../assets/nissanl.jpg") },
    { name: "bmw", image: require("../../assets/bmw.jpg") },
    { name: "audi", image: require("../../assets/audi11.png") },
    { name: "mercedes", image: require("../../assets/marcl.jpg") },
    { name: "mgl", image: require("../../assets/mgl.jpg") },
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
  }
});

export default BrandMainScreen;
