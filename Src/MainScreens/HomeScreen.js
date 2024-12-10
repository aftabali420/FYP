import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import More from "./More";
import ContentScreen from "./ContentScreen";
import Profile from "./Profile";
import AddCar from "../Components/AddCarScreen/AddCarScreen";

const Bottom = createBottomTabNavigator();

function HomeScreen() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={({ route }) => ({
          headerTitle:"",
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIconStyle: styles.tabBarIconStyle,
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarShowLabel: false,
          tabBarItemStyle: styles.tabBarItemStyle,
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "AddCar") {
              iconName = focused ? "car" : "car-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "account-circle" : "account-circle-outline";
            } else if (route.name === "More") {
              iconName = focused ? "account-settings" : "account-settings-outline";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={28}
                color={color}
              />
            );
          },
        })}
      >
        <Bottom.Screen
          name="Home"
          component={ContentScreen}
          options={{ title: "Home" }}
        />
        <Bottom.Screen
          name="AddCar"
          component={AddCar}
          options={{ title: "Add Car" }}
        />
        <Bottom.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Bottom.Screen
          name="More"
          component={More}
          options={{ title: "More" }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#FFFFFF",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#E5E5EA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "600",
  },
  tabBarIconStyle: {
height:5,
width:10
  },
  tabBarItemStyle: {
    paddingVertical: 5,
  },
  headerStyle: {
    backgroundColor: "#FFFFFF",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
});
