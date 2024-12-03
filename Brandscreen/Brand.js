import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,ScrollView ,Linking} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MaterialCommunityIcons,Ionicons,FontAwesome,AntDesign,Octicons} from 'react-native-vector-icons';
import ViewScreen from '../CategoryScreen/ViewScreen';
const Move = createNativeStackNavigator();
 function Brand(){
    return(
    <View>
        <ScrollView>
          <Text style={{paddingTop:15,fontWeight:'bold',fontSize:20,backgroundColor:'#E2DFD2',height:60}}>BRANDS</Text>
<BrandNames/>
<Text style={{ fontSize: 20, paddingTop:15,fontWeight:'bold'}}>Scrolling To The New Cars</Text>
<Listnewcars/>
</ScrollView>
</View>
    )
}
function BrandNames() {
    return (
      <View>
        <ScrollView horizontal={true}>
          <Text>    </Text>
          <Text>    </Text>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itembox}>
              <Text></Text>
              <Image source={require('../assets/suzuki.jpg')} style={styles.img} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itembox}>
              <Text></Text>
              <Image source={require('../assets/toyota-indus.png')} style={{ height: 60, width: 70, paddingTop: 70, marginLeft: 3 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itembox}>
              <Image source={require('../assets/honda.jpeg')} style={{ height: 60, width: 70, paddingTop: 90, marginLeft: 3 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itembox}>
              <Text></Text>
              <Image source={require('../assets/nissanl.jpg')} style={{ height: 60, width: 70, paddingTop: 60, marginLeft: 3 }} />
            </View>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView horizontal={true}>
          <Text>    </Text>
          <Text>    </Text>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itembox}>
              <Image source={require('../assets/bmw.jpg')} style={{ height: 70, width: 70, paddingTop: 95, marginLeft: 3 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itembox}>
              <Text></Text>
              <Image source={require('../assets/audi11.png')} style={{ height: 60, width: 70, paddingTop: 70, marginLeft: 3 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itembox}>
              <Text></Text>
              <Image source={require('../assets/marcl.jpg')} style={{ height: 60, width: 70, paddingTop: 70, marginLeft: 3 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itembox}>
              <Text></Text>
              <Image source={require('../assets/mgl.jpg')} style={{ height: 60, width: 70, paddingTop: 70, marginLeft: 3 }} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
  
    const products = [
        { id: 1, name: 'ALTO', description: 'SUZUKI_ ALTO',  model: '2022',  image: require('../assets/alto1.jpg') },
        { id: 2, name: 'Corrola',  description: 'TOYOTA_CORROLA',  model: '2022',  image: require('../assets/corola.jpg') },
        { id: 3, name: 'CITY',  description: 'HONDA_CITY ASSPIRE',  model: '2023',  image: require('../assets/city.jpg') },
        { id: 4, name: 'SkYLINE',  description: 'NISSAN_GTR',  model: '1999',  image: require('../assets/skyline.jpg') },
        { id: 5, name: 'X5',  description: 'BMW__X5',  model: '2020',  image: require('../assets/bmwc.jpg') },
        { id: 6, name: 'A6',  description: 'AUDI_A6',  model: '2018',  image: require('../assets/a6.jpg') },
        { id: 7, name: 'BENZ S_CLASS',  description: 'MARCADISE BENX S CLASS',  model: '2017',  image: require('../assets/sclass.jpg') },
        { id: 8, name: 'HS',  description: 'MG_HS',  model: '2022',  image: require('../assets/hs.jpg') },
        { id: 9, name: 'ALTAS_HRV',  description: 'HONDA_HRV',  model: '2023',  image: require('../assets/hrv.jpg') },
        { id: 10, name: 'SUZUKI',  description: 'SUZUKI_SWIFT',  model: '2022',  image: require('../assets/swift.jpg') },
        { id: 11, name: 'CIVIC',  description: 'HONDA_CIVIC',  model: '2023',  image: require('../assets/c.jpg') },
        
      ];
      
      const Listnewcars = ({ navigation }) => {
          
      
        const renderItem = ({ item }) => (
         
            <View style={styles.itembox2}>
              <Image source={item.image} style={styles.img2} />
              <View  style={styles.Text}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text></Text>
              <Text style={styles.itemName}>{item.description}</Text>
              <Text></Text>
              <Text style={styles.itemName}>{item.model}</Text>
              
              
              </View>
              
              
            </View>
        
        );
      
        return (
          <View style={styles.container}>
            <FlatList
              data={products}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
            />
          </View>
        )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F8F9FA', // Light grey for a clean background
      alignItems: 'center',
      justifyContent: 'center',
  },
  itembox: {
      width: 80,
      height: 100,
      backgroundColor: '#FFFFFF',
      borderColor: '#E0E0E0', // Light grey border
      borderWidth: 2,
      borderRadius: 10,
      marginTop: 30,
      marginLeft: 5,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 15,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 6,
  },
  img: {
      height: 50,
      width: 70,
      resizeMode: 'contain',
  },
  itemName: {
      color: '#2C3E50', // Dark grey for readability
      fontWeight: '700',
      fontSize: 18,
      textAlign: 'center',
  },
  itembox2: {
      flexDirection: 'row',
      width: 385,
      height: 180,
      backgroundColor: '#E0E0E0',
      borderColor: '#E0E0E0', // Light grey border
      borderWidth: 5,
      borderRadius: 30,
      marginTop: 10,
      marginLeft: 4,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 15,
  },
  img2: {
      width: 140,
      height: 160,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      resizeMode: 'contain',
  },
  Text: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
  },
  titletext: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#34495E',
      textAlign: 'center',
  },
  scrollingText: {
      fontSize: 18,
      color: '#16A085', // Green for emphasis
      fontWeight: '600',
      textAlign: 'center',
      marginVertical: 10,
  },
  itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
  },
  itemImage: {
      width: 60,
      height: 60,
      marginRight: 15,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#D1D1D1',
  },
  header: {
      backgroundColor: '#E2DFD2',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
  },
  headerText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#2C3E50',
  },
});
export default Brand;