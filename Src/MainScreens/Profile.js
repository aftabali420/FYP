import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import firebase from "../Firebase/Config";
import { auth, firestore } from "../Firebase/Config";
import Login from "../Components/UserAuthentication/Login";
import Dashboard from "../Components/DashBoard/Dashbord";
import Signup2 from "../Components/UserAuthentication/Signup";
const Stack = createNativeStackNavigator();
function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={Home} />
      <Stack.Screen name="Registration" component={Signup2} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
function Home() {
  return <Login />;
}
export default Profile;
