import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CategoryMainScreen from "../Components/CategoryScreen/CategoryMainScreen";
import Brand from "../Components/BrandScreen/BrandScreen";
import Model from "../Components/ModelScreen/ModelScreen";
import Cities from "../Components/CitiesScreen/CitiesScreen";

const Tab = createMaterialTopTabNavigator();

function ContentScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle, // Tab bar container styling
        tabBarLabelStyle: styles.tabBarLabelStyle, // Tab text styling
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle, // Active tab indicator
      }}
    >
      <Tab.Screen name="Category" component={CategoryMainScreen} />
      <Tab.Screen name="Brand" component={Brand} />
      <Tab.Screen name="Model" component={Model} />
      <Tab.Screen name="Cities" component={Cities} />
    </Tab.Navigator>
  );
}

export default ContentScreen;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#2E4053", // Dark grey background for the tab bar
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#000000", // Light border for a clean look
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase", // Make the labels uppercase
    color: "#FFFFFF", // White text color
  },
  tabBarIndicatorStyle: {
    backgroundColor: "#16A085", // Green for the active tab indicator
    height: 4, // Height of the indicator
  },
});
