// screens/ProductScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MaterialCommunityIcons,Ionicons,FontAwesome,AntDesign,Octicons} from 'react-native-vector-icons';
import ViewScreen from './ViewScreen';
const Move = createNativeStackNavigator();


const products = [
  { id: 1, name: 'Audi', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/audi.jpg') },
  { id: 2, name: 'MG', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mg.jpg') },
  { id: 3, name: 'Mg', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mg2.jpg') },
  { id: 4, name: 'Marcadise', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/marc.jpg') },
  { id: 5, name: 'Nissan', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/nissan.jpg') },
  { id: 6, name: 'suv', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/yaris.jpg') },
  { id: 7, name: 'Tesla', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/suv.jpg') },
  { id: 8, name: 'Mitsubishe', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/mits.jpg') },
  { id: 9, name: 'Civic', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/civic.jpg') },
  { id: 10, name: 'Chigan', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/chigan.jpg') },
  { id: 11, name: 'Toyota yaris', phone: '123-456-7890', description: 'Lorem ipsum', make: 'Make 1', model: '2022', variant: 'Variant 1', image: require('../assets/yaris.jpg') },
  
];

const Pickup = ({ navigation }) => {
    

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('View', { item })}>
      <View style={styles.itembox2}>
        <Image source={item.image} style={styles.img2} />
        <View  style={styles.Text}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemName}>{item.model}</Text>
        <Text style={styles.itemName}>{item.variant}</Text>
        <MaterialCommunityIcons name="fuel" size={25}  style={{paddingTop:10,}}/>
        </View>
        
        
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  itemName: {
   color:'#5f9ea0',
    fontSize:20,
    flexWrap: 'wrap',
    


    
  },
  itembox2: {
    // flex: 1,
    width: 400,
    height: 170,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
     marginTop: 10,
    marginLeft: 4,
    flexDirection: 'row',
   backgroundColor:'#fffaf0',
    marginBottom: 16,
    shadowColor: 'grey', 
    shadowOffset: {
    width: 0,
    height: 5, 
  },
  shadowOpacity: 1, 
  shadowRadius: 3.98, 
  elevation: 10,
  },
  img2: {
    // flex: 1,
    width: 150,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: 'red',
    borderWidth: 1, 
    resizeMode: 'contain',
    // marginLeft: 7,
    // marginTop: 6,
  },
  Text:{
    flex:1,
 alignItems:'center',
paddingTop:10,

  }
});

export default Pickup;
