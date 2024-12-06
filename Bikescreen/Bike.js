import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from '@react-navigation/native';

export default function(){
    const images=[
            require('../assets/yamahabiker6.jpeg'),
            require('../assets/hyabusabike.jpeg'),
            require('../assets/bmwrrbike.jpeg'),
            require('../assets/KAWASAKI.jpeg'),
            require('../assets/yamahabiker6.jpeg'),
    ]
    return(
        <ScrollView>
        <View style={{paddingTop:20}}>
        <SliderBox images={images}  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  paginationBoxStyle={{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{borderRadius: 20, width: '85%', marginTop: 10}}
  imageLoadingColor="#2196F3"
  />
<BrandNames/>

<Text style={{ fontSize: 25, paddingTop:30,fontWeight:'bold'}}>Scrolling To The Bikes</Text>
<ListnewBike/>
        </View>
        </ScrollView>
        
    )
}
function BrandNames(){
  const navigation = useNavigation();
    return (
        <View>
          <ScrollView horizontal={true}>
            <Text>    </Text>
            <Text>    </Text>
            <TouchableOpacity onPress={() => navigation.navigate('KAWASAKI')}>
              <View style={styles.itembox}>
                <Text></Text>
                <Image source={require('../assets/kawasaki1.png')} style={styles.img} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DUCATI')}>
              <View style={styles.itembox}>
                <Text></Text>
                <Image source={require('../assets/ducati.png')} style={{ height: 60, width: 70, paddingTop: 70, marginLeft: 3 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('HONDA BIKE')}>
              <View style={styles.itembox}>
                <Image source={require('../assets/honda.jpeg')} style={{ height: 60, width: 70, paddingTop: 90, marginLeft: 3 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SUZUKI')}>
              <View style={styles.itembox}>
                <Text></Text>
                <Image source={require('../assets/suzukipakistan.jpeg')} style={{ height: 60, width: 70, paddingTop: 60, marginLeft: 3 }} />
              </View>
            </TouchableOpacity>
          </ScrollView>
          <ScrollView horizontal={true}>
            <Text>    </Text>
            <Text>    </Text>
            <TouchableOpacity onPress={() => navigation.navigate('BMW BIKE')}>
              <View style={styles.itembox}>
                <Image source={require('../assets/bmw.jpg')} style={{ height: 70, width: 70, paddingTop: 95, marginLeft: 3 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('YAMAHA')}>
              <View style={styles.itembox}>
                <Text></Text>
                <Image source={require('../assets/yamaha.jpeg')} style={{ height: 60, width: 70, paddingTop: 70, marginLeft: 3 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TRIUMPH')}>
              <View style={styles.itembox}>
                <Text></Text>
                <Image source={require('../assets/triumphmotorcycles.png')} style={{ height: 60, width: 70, paddingTop: 70, marginLeft: 3 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('APRILLIA')}>
              <View style={styles.itembox}>
                <Text></Text>
                <Image source={require('../assets/aprilia11.png')} style={{ height: 60, width: 70, paddingTop: 70, marginLeft: 3 }} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      );
    }
    const products = [
        { id: 1, name: 'KTM', description: 'KTM_BIKE',  model: '2012',  image: require('../assets/ktm21.jpeg') },
        { id: 2, name: 'Honda',  description: 'Honda2025',  model: '2025',  image: require('../assets/honda2025.jpeg') },
        { id: 3, name: 'R1M',  description: 'YAMAHA r1m',  model: '2013',  image: require('../assets/yamahabike.jpeg') },
        { id: 4, name: 'R6',  description: 'YAMAHA r6',  model: '2016',  image: require('../assets/yamahabiker6.jpeg') },
        { id: 5, name: 'Hayabusa',  description: 'suzuki Hayabusa',  model: '2010',  image: require('../assets/hyabusabike.jpeg') },
        { id: 6, name: 'RR',  description: 'BMW RR',  model: '2018',  image: require('../assets/bmwrrbike.jpeg') },
        { id: 7, name: 'D21',  description: 'Ducti 21',  model: '2017',  image: require('../assets/ducti.jpeg') },
       
        
      ];

      const ListnewBike = ({ navigation }) => {
          
      
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
      width: 85,
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