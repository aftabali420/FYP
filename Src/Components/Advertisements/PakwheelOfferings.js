import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
  } from "react-native";
  
const product = [
    {
      id: 1,
      title: "PAKWHEELS",
      Desc: "Sell It For ME",
      Image: require("../../../assets/s.jpg"),
    },
    {
      id: 1,
      title: "PAKWHEELS",
      Desc: "Car Inspection",
      Image: require("../../../assets/insp.jpg"),
    },
    {
      id: 1,
      title: "PAKWHEELS",
      Desc: "Auction Sheet Verification",
      Image: require("../../../assets/auction.jpg"),
    },
    {
      id: 1,
      title: "PAKWHEELS",
      Desc: "Partner WorkShop",
      Image: require("../../../assets/workshop.jpg"),
    },
    {
      id: 1,
      title: "PAKWHEELS",
      Desc: "Car Finance",
      Image: require("../../../assets/finance.jpg"),
    },
    {
      id: 1,
      title: "PAKWHEELS",
      Desc: "Car Insurance",
      Image: require("../../../assets/ins.jpg"),
    },
  ];
  export const PakwheelOfferings=()=>{
    const renderItem = ({ item }) => (
      <View style={styles.itembox2}>
        <Image source={item.Image} style={styles.img2} />
        <Text style={styles.titletext2}>{item.title}</Text>
        <Text style={styles.desctext}>{item.Desc}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <FlatList
          data={product}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
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