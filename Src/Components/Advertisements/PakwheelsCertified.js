import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
  } from "react-native";
  

  export function PakwheelCertified() {
    return (
      <View>
        <ScrollView horizontal={true}>
          <View style={styles.itembox2}>
            <Image
              source={require("../../../assets/civic.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> Honda civic 2015</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>
              Pkr 60 lack
            </Text>
            <Text style={{ paddingTop: 5 }}>120000 km | Petrol</Text>
          </View>
          <View style={styles.itembox2}>
            <Image
              source={require("../../../assets/alto.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> suzuki alto 2020</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>
              Pkr 25 lack
            </Text>
            <Text style={{ paddingTop: 5 }}>12000 km | Petrol</Text>
          </View>
          <View style={styles.itembox2}>
            <Image
              source={require("../../../assets/yaris.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> toyota yaris 2019</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>
              Pkr 45 lack
            </Text>
            <Text style={{ paddingTop: 5 }}>13700 km | Petrol</Text>
          </View>
          <View style={styles.itembox2}>
            <Image
              source={require("../../../assets/chigan.jpg")}
              style={{ height: 160, width: 175 }}
            />
            <Text style={{ paddingTop: 10 }}> changan alsvin 2021</Text>
            <Text style={{ paddingTop: 10, fontWeight: "bold" }}>
              Pkr 35 lack
            </Text>
            <Text style={{ paddingTop: 5 }}>10000 km | Petrol</Text>
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