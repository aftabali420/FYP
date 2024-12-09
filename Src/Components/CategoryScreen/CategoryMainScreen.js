import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
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
const Stack = createNativeStackNavigator();

function CategoryMainScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Browse Cars" component={Content} />
      <Stack.Screen name="CarsList" component={CarsList} />
      <Stack.Screen name="CarDetails" component={CarDetails} />

    </Stack.Navigator>
  );
}

function Content({ navigation }) {
  const categories = [
    { name: "Automatic Cars", icon: "car", screen: "Category", category: "automatic" },
    { name: "Electrical Cars", icon: "car-electric", screen: "Category", category: "electric" },
    { name: "Jeeps", icon: "jeepney", screen: "Category", category: "jeeps" },
    { name: "Hybrid Cars", icon: "car-battery", screen: "Category", category: "hybrid" },
    { name: "Sports Cars", icon: "car-sports", screen: "Category", category: "sports" },
    { name: "Convertible Cars", icon: "car-convertible", screen: "Category", category: "convertible" },
    { name: "Small Cars", icon: "car-hatchback", screen: "Category", category: "small" },
    { name: "Imported Cars", icon: "airplane", screen: "Category", category: "imported" },
    { name: "Old Cars", icon: "car", screen: "Category", category: "old" },
    { name: "Japanese Cars", icon: "car-outline", screen: "Category", category: "japanese" },
    { name: "Two Door Cars", icon: "car-side", screen: "Category", category: "twodoor" },
    { name: "Pickup Cars", icon: "car-pickup", screen: "Category", category: "pickup" },
    { name: "Low Price Cars", icon: "debug-step-into", screen: "Category", category: "lowprice" },
  ];

  return (
    <View>
      <ScrollView>
        <ScrollView horizontal={true}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("CarsList", { category: item.category })}
            >
              <View style={styles.itembox}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={35}
                  style={{ paddingTop: 10, marginLeft: 15 }}
                />
                <Text style={styles.titletext}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 25, paddingTop: 15, fontWeight: "bold" }}>
          PakWheels Offerings
        </Text>
        <PakwheelOfferings/>
        <Text style={{ fontSize: 20, paddingTop: 15, fontWeight: "bold" }}>
          PakWheels Certified
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("certified cars")}>
          <Text style={{ paddingLeft: 310, paddingBottom: 0, color: "blue" }}>
            see all
          </Text>
        </TouchableOpacity>
        <PakwheelCertified/>
        <Text style={{ fontSize: 20, paddingTop: 15, fontWeight: "bold" }}>
          PakWheels Autostore
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Products")}>
          <Text style={{ paddingLeft: 310, paddingBottom: 0, color: "blue" }}>
            see all
          </Text>
        </TouchableOpacity>
        <Pakwheelautostore/>
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
  itembox: {
    // flex: 1,
    width: 80,
    height: 100,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2.5,
    borderRadius: 10,
    marginTop: 40,
    marginLeft: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3.98,
    elevation: 10,
  },
  img: {
    // flex: 1,
    width: 196,
    height: 160,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderColor: 'black',
    // borderWidth: 1,
    resizeMode: "contain",
    // marginLeft: 7,
    // marginTop: 6,
  },
  titletext: {
    fontSize: 12,
    // fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 15,
  },
  itembox2: {
    // flex: 1,
    width: 190,
    height: 250,
    backgroundColor: "white",
    borderColor: "silver",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3.98,
    elevation: 10,
  },
  titletext2: {
    fontSize: 10,

    marginLeft: 10,
    color: "blue",
  },
  desctext: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  img2: {
    // flex: 1,
    width: 150,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderColor: 'black',
    // borderWidth: 1,
    resizeMode: "contain",
    // marginLeft: 7,
    // marginTop: 6,
  },
  itembox3: {
    // flex: 1,
    width: 340,
    height: 320,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3.98,
    elevation: 10,
  },
});
export default CategoryMainScreen;
