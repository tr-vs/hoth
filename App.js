import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import FeedScreen from './screens/FeedScreen';
import CameraScreen from './screens/CameraScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import ProfileScreen from './screens/ProfileScreen'; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="MainTabs"
                    component={MainTabs} // Wrap the tab navigator inside a screen
                    options={{ headerShown: false }} // Hide header for tab navigator
      
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function MainTabs() {
    return (
        <Tab.Navigator 
          initialRouteName="Feed"
          screenOptions={{ 
            headerShown: false,
            tabBarStyle: { backgroundColor: '#303030' }, 
            tabBarActiveTintColor: '#8165FF', 
            tabBarInactiveTintColor: '#D0D0D0', 
          }}
        >
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
            />
            <Tab.Screen
                name="Camera"
                component={CameraScreen}
            />
            <Tab.Screen
                name="Leaderboard"
                component={LeaderboardScreen}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
}
