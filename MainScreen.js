import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView,FlatList,Linking} from 'react-native';

import {MaterialCommunityIcons,Ionicons,FontAwesome,AntDesign,Octicons} from 'react-native-vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Automatic from './CategoryScreen/automatic';
import Electrical from './CategoryScreen/Electrical';
import Jeeps from './CategoryScreen/Jeeps';
import Convartible from './CategoryScreen/Convartible';
import Smallcar from './CategoryScreen/Smallcar';
import Important from './CategoryScreen/Important';
import Old from './CategoryScreen/Old';
import Japan from './CategoryScreen/Japan';
import Twodoor from './CategoryScreen/Twodoor';
import Pickup from './CategoryScreen/Pickup';
import Lowprice from './CategoryScreen/Lowprice';
import Product from './Product';
import ViewScreen from './CategoryScreen/ViewScreen';
import Profile from './Profile';
import Login from './firebasescreen/Login';
import corolla from './Modelscreen/corolla';
import civic from './Modelscreen/civic';
import mehran from './Modelscreen/mehran';
import cultus from './Modelscreen/cultus';
import alto from './Modelscreen/alto';
import wagonR from './Modelscreen/wagonR';
import grandee from './Modelscreen/grandee';
import vitz from './Modelscreen/vitz';
import suzuki from './Brandscreen/suzuki';
import honda from './Brandscreen/Honda';
import toyota from './Brandscreen/Toyota';
import nissan from './Brandscreen/Nissan';
import bmw from './Brandscreen/bmwb';
import audi from './Brandscreen/Audi';
import marcl from './Brandscreen/marcl';
import mg from './Brandscreen/mg';
import kawasaki from './Bikescreen/kawasaki';
import Ducati from './Bikescreen/Ducati';
import Hondabike from './Bikescreen/Hondabike';
import suzukibike from './Bikescreen/suzukibike';
import bmwbike from './Bikescreen/bmwbike';
import yamaha from './Bikescreen/yamaha';
import triumphbike from './Bikescreen/triumphbike';
import aprilabike from './Bikescreen/Aprilliabike';
const Stack = createNativeStackNavigator();

function MainScreeen(){
    return(
        <Stack.Navigator>
          <Stack.Screen name='Browse Cars' component={Content}/>
          <Stack.Screen name='automatic car' component={Automatic}/>
          <Stack.Screen name='Electrical-Cars' component={Electrical}/>
          <Stack.Screen name='Jeeps' component={Jeeps}/>
          <Stack.Screen name='Hybrid Cars' component={Jeeps}/>
          <Stack.Screen name='Sports Car' component={Jeeps}/>
          <Stack.Screen name='Convertable Car' component={Convartible}/>
          <Stack.Screen name='Small car' component={Smallcar}/>
          <Stack.Screen name='Important Cars' component={Important}/>
          <Stack.Screen name='Old Cars' component={Old}/>
          <Stack.Screen name='Japnese Cars' component={Japan}/>
          <Stack.Screen name='Two Door Cars' component={Twodoor}/>
          <Stack.Screen name='Pickup Cars' component={Pickup}/>
          <Stack.Screen name='Low Price Cars' component={Lowprice}/>
          <Stack.Screen name='certified cars' component={Automatic}/>
          <Stack.Screen name='Products' component={Product}/>
          <Stack.Screen name='View' component={ViewScreen}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='corolla'component={corolla}/>
          <Stack.Screen name='civic'component={civic}/>
          <Stack.Screen name='mehran'component={mehran}/>
          <Stack.Screen name='alto'component={alto}/>
          <Stack.Screen name='wagonR'component={wagonR}/>
          <Stack.Screen name='grandee'component={grandee}/>
          <Stack.Screen name='vitz'component={vitz}/>
          <Stack.Screen name='Suzuki'component={suzuki}/>
          <Stack.Screen name='Honda' component={honda}/>
          <Stack.Screen name='Toyota' component={toyota}/>
          <Stack.Screen name='Nissan' component={nissan}/>
          <Stack.Screen name='BMW' component={bmw}/>
          <Stack.Screen name='AUDI' component={audi}/>
          <Stack.Screen name='Marcl' component={marcl}/>
          <Stack.Screen name='MGL' component={mg}/>
          <Stack.Screen name='KAWASAKI' component={kawasaki}/>
          <Stack.Screen name='DUCATI' component={Ducati}/>
          <Stack.Screen name='HONDA BIKE' component={Hondabike}/>
          <Stack.Screen name='SUZUKI' component={suzukibike}/>
          <Stack.Screen name='BMW BIKE' component={bmwbike}/>
          <Stack.Screen name='YAMAHA' component={yamaha}/>
          <Stack.Screen name='TRIUMPH' component={triumphbike}/>
          <Stack.Screen name='APRILLIA' component={aprilabike}/>
        </Stack.Navigator>
    )
}

function Content({navigation }){
    return(
        <View>
          <ScrollView>
        <ScrollView horizontal={true} >
            <TouchableOpacity onPress={()=>navigation.navigate('automatic car')}>
<View style={styles.itembox}>
    <MaterialCommunityIcons name="car" size={35} style={{paddingTop:10, marginLeft: 15,}} />
<Text style={styles.titletext}> automatic cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Electrical-Cars')}>
<View style={styles.itembox}>
<MaterialCommunityIcons name="car-electric" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> Electrical cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Jeeps')} >
<View style={styles.itembox}>
<MaterialCommunityIcons name="jeepney" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> jeeps</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Hybrid Cars')} >
<View style={styles.itembox}>
<MaterialCommunityIcons name="car-battery" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> Hybrid   cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Sports Car')}>
<View style={styles.itembox}>
<Ionicons name="car-sport-sharp" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> Sports   cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Convertable Car')}>
<View style={styles.itembox}>
<MaterialCommunityIcons name="car-convertible" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> convertible   cars</Text>
</View>
</TouchableOpacity>

        </ScrollView>
        <ScrollView horizontal={true} >
            <TouchableOpacity  onPress={()=>navigation.navigate('Small car')}>
<View style={styles.itembox}>
<MaterialCommunityIcons name="car-hatchback" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> Small cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Important Cars')}>
<View style={styles.itembox}>
<FontAwesome name="ship" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> Imported cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Old Cars')}>
<View style={styles.itembox}>
<AntDesign name="car" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> Old cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Japnese Cars')}>
<View style={styles.itembox}>
<Ionicons name="car-sport-outline" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> Japanese cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Two Door Cars')}>
<View style={styles.itembox}>
<MaterialCommunityIcons name="car-side" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}> Two door cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Pickup Cars')}>
<View style={styles.itembox}>
<MaterialCommunityIcons name="car-pickup" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}>Pickup cars</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Low Price Cars')}>
<View style={styles.itembox}>

<Ionicons name="caret-down" size={35} style={{paddingTop:15, marginLeft: 15,}} />
<Text style={styles.titletext}>Low price cars</Text>
</View>


</TouchableOpacity>
        </ScrollView>
        <Text style={{ fontSize: 25, paddingTop:15,fontWeight:'bold'}}>PakWheels Offerings</Text>
        <List/>
        <Text style={{ fontSize: 20, paddingTop:15,fontWeight:'bold'}}>PakWheels Certified</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('certified cars')}>
          <Text style={{paddingLeft:310,paddingBottom:0,color:'blue'}}>see all</Text>
        </TouchableOpacity>
        <PakwheelCertified/>
        <Text style={{ fontSize: 20, paddingTop:15,fontWeight:'bold'}}>PakWheels Autostore</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
          <Text style={{paddingLeft:310,paddingBottom:0,color:'blue'}}>see all</Text>
        </TouchableOpacity>
        <Productview/>
       </ScrollView>
    </View>
    )
}
const product = [
  {
    id: 1, title: 'PAKWHEELS', Desc: 'Sell It For ME',Image: require('./assets/s.jpg'),
  },
  {
    id: 1, title: 'PAKWHEELS', Desc: 'Car Inspection', Image: require('./assets/insp.jpg'),
  },
  {
    id: 1, title: 'PAKWHEELS', Desc: 'Auction Sheet Verification', Image: require('./assets/auction.jpg'),
  },
  {
    id: 1, title: 'PAKWHEELS', Desc: 'Partner WorkShop', Image: require('./assets/workshop.jpg'),
  },
  {
    id: 1, title: 'PAKWHEELS', Desc: 'Car Finance', Image: require('./assets/finance.jpg'),
  },
  {
    id: 1, title: 'PAKWHEELS', Desc: 'Car Insurance', Image: require('./assets/ins.jpg'),
  },
  
]
function List(){
  const renderItem = ({ item }) => (
    <View style={styles.itembox2}>
      <Image source={item.Image} style={styles.img2} />
      <Text style={styles.titletext2}>{item.title}</Text>
      <Text style={styles.desctext}>{item.Desc}</Text>
     
     
    </View>
  )
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
function PakwheelCertified(){
 return(
  <View>
    <ScrollView horizontal={true}>
      <View style={styles.itembox2}>
        <Image source={require('./assets/civic.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> Honda civic 2015</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 60 lack</Text>
        <Text style={{paddingTop:5}}>120000 km | Petrol</Text>
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/alto.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> suzuki alto 2020</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 25 lack</Text>
        <Text style={{paddingTop:5}}>12000 km | Petrol</Text>
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/yaris.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> toyota yaris 2019</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 45 lack</Text>
        <Text style={{paddingTop:5}}>13700 km | Petrol</Text>
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/chigan.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> changan alsvin 2021</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 35 lack</Text>
        <Text style={{paddingTop:5}}>10000 km | Petrol</Text>
      </View>
    </ScrollView>
    
  </View>
 )
}
function Productview(){
  return(
    <View>
      <ScrollView horizontal={true}>
      <View style={styles.itembox2}>
        <Image source={require('./assets/bodyclener.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> All type car body clener</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr  1000 </Text>
        
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/shiner.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> Car Body Shiner</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 250</Text>
       
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/bootle.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> Water Bottke</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 450</Text>
      
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/wheel.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> Tyre Cleener</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 350 </Text>
        
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/oil.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> Engine oil</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 1350 </Text>
        
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/bodyl.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> car Body Loction</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 950 </Text>
        
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itembox: {
        // flex: 1,
        width: 80,
        height: 100,
       backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2.5,
        borderRadius: 10,
        marginTop: 40,
        marginLeft: 4,
        shadowColor: '#000', 
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
        resizeMode: 'contain',
        // marginLeft: 7,
        // marginTop: 6,
      },
      titletext: {
        fontSize: 12,
        // fontWeight: 'bold',
        marginLeft: 10,
        paddingTop:15
       
      },
      itembox2: {
        // flex: 1,
        width: 190,
        height: 250,
        backgroundColor: 'white',
        borderColor: 'silver',
        borderWidth: 2,
        borderRadius: 10,
         marginTop: 10,
        marginLeft: 4,
        shadowColor: '#000', 
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
        color: 'blue',
      },
      desctext: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
      },
      img2: {
        // flex: 1,
        width: 150,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // borderColor: 'black',
        // borderWidth: 1, 
        resizeMode: 'contain',
        // marginLeft: 7,
        // marginTop: 6,
      },
      itembox3: {
        // flex: 1,
        width: 340,
        height: 320,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
         marginTop: 50,
        marginLeft: 20,
        shadowColor: '#000', 
        shadowOffset: {
        width: 0,
        height: 5, 
      },
      shadowOpacity: 1, 
      shadowRadius: 3.98, 
      elevation: 10,
      }
  });
export default MainScreeen;