import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-web';
import MainScreeen from './MainScreen';
import Brand from './Brandscreen/Brand';
import bike from './Bikescreen/Bike';
import Model from './Modelscreen/Model';


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
            <Tab.Screen name="Category" component={MainScreeen} />
            <Tab.Screen name="Brand" component={Brand} />
            <Tab.Screen name="Model" component={Model} />
            <Tab.Screen name="Bike" component={bike} />
            
        </Tab.Navigator>
    );
}

function Catagory() {
    return <Text> </Text>;
}

export default ContentScreen;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#2E4053', // Dark grey background for the tab bar
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#000000', // Light border for a clean look
    },
    tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase', // Make the labels uppercase
        color: '#FFFFFF', // White text color
    },
    tabBarIndicatorStyle: {
        backgroundColor: '#16A085', // Green for the active tab indicator
        height: 4, // Height of the indicator
    },
});
