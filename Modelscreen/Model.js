import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from "react-native";

import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
  Octicons,
} from "react-native-vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pakwheelautostore } from "../Src/Components/Advertisements/Pakwheelautostore";
import { PakwheelCertified } from "../Src/Components/Advertisements/PakwheelsCertified";
import { PakwheelOfferings } from "../Src/Components/Advertisements/PakwheelOfferings";

const Stack = createNativeStackNavigator();
function Model() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Browse Used Cars" component={Content} />
    </Stack.Navigator>
  );
}

function Content({ navigation }) {
  return (
    <View>
      <ScrollView>
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => navigation.navigate("corolla")}>
            <View style={styles.itembox}>
              <MaterialCommunityIcons
                size={10}
                style={{ paddingTop: 10, marginLeft: 15 }}
              />
              <Text style={styles.titletext}> Corolla</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("civic")}>
            <View style={styles.itembox}>
              <Ionicons size={10} style={{ paddingTop: 15, marginLeft: 15 }} />
              <Text style={styles.titletext}>Civic </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("mehran")}>
            <View style={styles.itembox}>
              <MaterialCommunityIcons
                size={10}
                style={{ paddingTop: 15, marginLeft: 15 }}
              />
              <Text style={styles.titletext}> Mehran </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("cultus")}>
            <View style={styles.itembox}>
              <Ionicons size={10} style={{ paddingTop: 15, marginLeft: 15 }} />
              <Text style={styles.titletext}>Cultus </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => navigation.navigate("alto")}>
            <View style={styles.itembox}>
              <Ionicons size={10} style={{ paddingTop: 15, marginLeft: 15 }} />
              <Text style={styles.titletext}>Alto </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("WagonR")}>
            <View style={styles.itembox}>
              <Ionicons size={10} style={{ paddingTop: 15, marginLeft: 15 }} />
              <Text style={styles.titletext}>WagonR </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("grandee")}>
            <View style={styles.itembox}>
              <Ionicons size={10} style={{ paddingTop: 15, marginLeft: 15 }} />
              <Text style={styles.titletext}>Grandee </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("vitz")}>
            <View style={styles.itembox}>
              <Ionicons size={10} style={{ paddingTop: 15, marginLeft: 15 }} />
              <Text style={styles.titletext}>Vitz </Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  itembox: {
    // flex: 1,
    width: 95,
    height: 90,
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 15,
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
export default Model;
