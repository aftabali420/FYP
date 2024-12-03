import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect,useState} from "react";
import firebase from "./firebasescreen/Config";
import { auth,firestore } from "./firebasescreen/Config";
import Login from "./firebasescreen/Login";
import Dashboard from "./firebasescreen/Dashbord";
import Signup2 from "./firebasescreen/Signup2";
const Stack = createNativeStackNavigator();
 function Profile(){
    return(
       <Stack.Navigator>
           <Stack.Screen name="LoginScreen" component={Home}/>
          <Stack.Screen name="Registration" component={Signup2}/>
       
        <Stack.Screen name="Dashboard" component={Dashboard}/>
       </Stack.Navigator>
    )
}
function Home(){
    return(
        <Login/>
    )
}
export default Profile;