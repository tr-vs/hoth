import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
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
const [isSignedIn, setSignedIn] = useState('');

export default function App() {
    return (
        <NavigationContainer>
            isSignedIn ? (
                <>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name="MainTabs"
                            component={MainTabs} // Wrap the tab navigator inside a screen
                            options={{ headerShown: false }} // Hide header for tab navigator
            
                        />
                        <Stack.Screen
                            name="ProfileScreen"
                            component={ProfileScreen}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </>
                ) : (
                <>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                </>
                );

        </NavigationContainer>
    );
}

function MainTabs({ navigation }) {
    return (
        <Tab.Navigator initialRouteName="Feed" screenOptions={{headerShown: false }}>
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
        </Tab.Navigator>
    );
}
