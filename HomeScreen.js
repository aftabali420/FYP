import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "react-native-vector-icons";

import Test from "./Test";
import More from "./More";
import OptionScreen from "./ContentScreen";
import ContentScreen from "./ContentScreen";
import Profile from "./Profile";
import AddCar from "./Src/Components/AddCarScreen/AddCarScreen";
import sellnow from "./Src/Components/Sellnow/sellnow";

const Bottom = createBottomTabNavigator();

function HomeScreen() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIconStyle: styles.tabBarIconStyle,
          headerStyle: styles.headerStyle,
        }}
      >
        <Bottom.Screen
          name="Home"
          component={ContentScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={40} color={color} />
            ),
            title: "",
          }}
        />
        <Bottom.Screen
          name="Test"
          component={AddCar}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="car"
                size={40}
                color={color}
              />
            ),
            title: "",
          }}
        />


<Bottom.Screen
          name="addcar"
          component={sellnow}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="car-multiple"
                size={40}
                color={color}
              />
            ),
            title: "",
          }}
        />


        
        <Bottom.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-circle"
                size={40}
                color={color}
              />
            ),
            title: "",
          }}
        />


        <Bottom.Screen
          name="More"
          component={More}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-wrench"
                size={40}
                color={color}
              />
            ),
            title: "",
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  // Tab Bar Styling
  tabBarStyle: {
    backgroundColor: "#C0C0C0",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#1C1C1C",
  },
  tabBarLabelStyle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  tabBarIconStyle: {
    marginBottom: 5,
  },
  // Header Styling
  headerStyle: {
    backgroundColor: "#C0C0C0",
    height: 65,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
});
