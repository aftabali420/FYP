import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ScrollView
  } from "react-native";
  
  export function Pakwheelautostore() {
    return (
      <View>
        <ScrollView horizontal={true}>
          <View style={styles.itembox2}>
            <Image
              source={require("../../assets/bodyclener.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> All type car body clener</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Pkr 1000 </Text>
          </View>
          <View style={styles.itembox2}>
            <Image
              source={require("../../assets/shiner.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> Car Body Shiner</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Pkr 250</Text>
          </View>
          <View style={styles.itembox2}>
            <Image
              source={require("../../assets/bootle.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> Water Bottke</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Pkr 450</Text>
          </View>
          <View style={styles.itembox2}>
            <Image
              source={require("../../assets/wheel.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> Tyre Cleener</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Pkr 350 </Text>
          </View>
          <View style={styles.itembox2}>
            <Image
              source={require("../../assets/oil.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> Engine oil</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Pkr 1350 </Text>
          </View>
          <View style={styles.itembox2}>
            <Image
              source={require("../../assets/bodyl.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> car Body Loction</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>Pkr 950 </Text>
          </View>
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