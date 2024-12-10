import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import CustomHeader from "../CustomHeader/CustomHeader";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pakwheelautostore } from "../Advertisements/Pakwheelautostore";
import { PakwheelCertified } from "../Advertisements/PakwheelsCertified";
import { PakwheelOfferings } from "../Advertisements/PakwheelOfferings";
import CarsList from "../CarView/CarsList";
import CarDetails from "../CarView/CarDetailScreen";

const Stack = createNativeStackNavigator();
function Model() {
  return (
    <Stack.Navigator screenOptions={({ route, navigation }) => ({
      header: () => (
        <CustomHeader
          title={route.name} // Use the route name as the title
        />
      ),
    })}>
      <Stack.Screen name="Models" component={Content} />
      <Stack.Screen name="CarsList" component={CarsList}/>
      <Stack.Screen name="CarsDetails" component={CarDetails}/>

    </Stack.Navigator>
  );
}

function Content({ navigation }) {
  const Models = [
    { name: "altis", image: "https://cdn.worldvectorlogo.com/logos/altis.svg" },
    { name: "corolla", image:"https://cdn.worldvectorlogo.com/logos/altis.svg" },
    { name: "mehran", image: "https://cdn.worldvectorlogo.com/logos/altis.svg" },
    { name: "civic", image: "https://cdn.worldvectorlogo.com/logos/altis.svg" },
    { name: "cultus", image: "https://cdn.worldvectorlogo.com/logos/altis.svg" },
    { name: "alto", image: "https://cdn.worldvectorlogo.com/logos/altis.svg" },
    { name: "wagonr", image: "https://cdn.worldvectorlogo.com/logos/altis.svg" },
    { name: "grande", image: "https://cdn.worldvectorlogo.com/logos/altis.svg" },
  ];

  return (
    <View>
      <ScrollView>
      <ScrollView horizontal={true} style={styles.ModelsContainer}>
        {Models.map((model, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("CarsList", { modelName: model.name })
            }
          >
            <View style={styles.itembox}>
            <Image
          source={{ uri: model.image }}
          // style={styles.image}
          resizeMode="contain"
        /><Text style={styles.itemName}>{model.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <PakwheelOfferings/>
      <PakwheelCertified/>
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
  ModelsContainer: {
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
export default Model;